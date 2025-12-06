#!/bin/bash

# ============================================
# Sonic Client Web Docker 构建脚本
# ============================================
# 使用方法:
#   ./docker-build.sh [options]
#
# 选项:
#   -v, --version VERSION    指定版本号 (默认从 package.json 读取)
#   -t, --type TYPE          Dockerfile 类型: build(默认) | full | original
#   -i, --image IMAGE_NAME   镜像名称 (默认: sonic-client-web)
#   -r, --registry REGISTRY  镜像仓库地址 (默认: 空)
#   -p, --push              构建后推送到仓库
#   -l, --latest            同时打上 latest 标签
#   --no-cache              不使用缓存构建
#   -h, --help              显示帮助信息
#
# 示例:
#   ./docker-build.sh                                    # 使用默认配置构建
#   ./docker-build.sh -v 2.5.0                           # 指定版本号
#   ./docker-build.sh -v 2.5.0 -t full                   # 使用完整版 Dockerfile
#   ./docker-build.sh -v 2.5.0 -p -l                     # 构建并推送，打上 latest 标签
#   ./docker-build.sh -v 2.5.0 -r myregistry.com/sonic   # 指定仓库地址
# ============================================

set -e  # 遇到错误立即退出

# 颜色输出
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# 默认配置
VERSION=""
DOCKERFILE_TYPE="build"
IMAGE_NAME="sonic-client-web"
REGISTRY=""
PUSH=false
TAG_LATEST=false
NO_CACHE=""

# 打印信息函数
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 显示帮助信息
show_help() {
    cat << EOF
Sonic Client Web Docker 构建脚本

使用方法:
  $0 [options]

选项:
  -v, --version VERSION    指定版本号 (默认从 package.json 读取)
  -t, --type TYPE          Dockerfile 类型: build(默认) | full | original
  -i, --image IMAGE_NAME   镜像名称 (默认: sonic-client-web)
  -r, --registry REGISTRY  镜像仓库地址 (默认: 空)
  -p, --push              构建后推送到仓库
  -l, --latest            同时打上 latest 标签
  --no-cache              不使用缓存构建
  -h, --help              显示帮助信息

Dockerfile 类型说明:
  build     - 多阶段构建，轻量级 (基于 Alpine，不含 Chrome)
  full      - 多阶段构建，完整版 (包含 Chrome 支持)
  original  - 原始 Dockerfile (需要预先构建 dist 目录)

示例:
  $0                                         # 使用默认配置构建
  $0 -v 2.5.0                                # 指定版本号
  $0 -v 2.5.0 -t full                        # 使用完整版 Dockerfile
  $0 -v 2.5.0 -p -l                          # 构建并推送，打上 latest 标签
  $0 -v 2.5.0 -r myregistry.com/sonic        # 指定仓库地址
  $0 -v 2.5.0 -r myregistry.com/sonic -p -l  # 完整发布流程

EOF
    exit 0
}

# 解析命令行参数
parse_args() {
    while [[ $# -gt 0 ]]; do
        case $1 in
            -v|--version)
                VERSION="$2"
                shift 2
                ;;
            -t|--type)
                DOCKERFILE_TYPE="$2"
                shift 2
                ;;
            -i|--image)
                IMAGE_NAME="$2"
                shift 2
                ;;
            -r|--registry)
                REGISTRY="$2"
                shift 2
                ;;
            -p|--push)
                PUSH=true
                shift
                ;;
            -l|--latest)
                TAG_LATEST=true
                shift
                ;;
            --no-cache)
                NO_CACHE="--no-cache"
                shift
                ;;
            -h|--help)
                show_help
                ;;
            *)
                print_error "未知参数: $1"
                echo "使用 -h 或 --help 查看帮助信息"
                exit 1
                ;;
        esac
    done
}

# 从 package.json 读取版本号
get_version_from_package() {
    if [[ -f "package.json" ]]; then
        VERSION=$(grep '"version"' package.json | head -1 | sed 's/.*"version": "\(.*\)".*/\1/')
        if [[ -z "$VERSION" ]]; then
            print_error "无法从 package.json 读取版本号"
            exit 1
        fi
        print_info "从 package.json 读取到版本号: $VERSION"
    else
        print_error "package.json 文件不存在"
        exit 1
    fi
}

# 验证 Dockerfile 类型
validate_dockerfile_type() {
    case $DOCKERFILE_TYPE in
        build)
            DOCKERFILE="Dockerfile.build"
            ;;
        full)
            DOCKERFILE="Dockerfile.full"
            ;;
        original)
            DOCKERFILE="Dockerfile"
            ;;
        *)
            print_error "无效的 Dockerfile 类型: $DOCKERFILE_TYPE"
            print_info "可用类型: build, full, original"
            exit 1
            ;;
    esac

    if [[ ! -f "$DOCKERFILE" ]]; then
        print_error "Dockerfile 不存在: $DOCKERFILE"
        exit 1
    fi
    print_info "使用 Dockerfile: $DOCKERFILE"
}

# 构建完整的镜像名称
build_image_tags() {
    local base_name="$IMAGE_NAME"

    # 如果指定了仓库地址，添加到镜像名前面
    if [[ -n "$REGISTRY" ]]; then
        base_name="${REGISTRY}/${IMAGE_NAME}"
    fi

    # 版本标签
    VERSION_TAG="${base_name}:${VERSION}"

    # latest 标签
    LATEST_TAG="${base_name}:latest"

    print_info "镜像标签: $VERSION_TAG"
    if [[ "$TAG_LATEST" == true ]]; then
        print_info "Latest 标签: $LATEST_TAG"
    fi
}

# 构建镜像
build_image() {
    print_info "开始构建 Docker 镜像..."
    print_info "构建类型: $DOCKERFILE_TYPE"
    print_info "版本号: $VERSION"

    # 如果是 original 类型，需要先构建前端代码
    if [[ "$DOCKERFILE_TYPE" == "original" ]]; then
        if [[ ! -d "dist" ]]; then
            print_warning "dist 目录不存在，开始构建前端代码..."
            npm run build || {
                print_error "前端代码构建失败"
                exit 1
            }
            print_success "前端代码构建完成"
        else
            print_info "dist 目录已存在，跳过构建"
        fi
    fi

    # 构建 Docker 镜像
    local BUILD_CMD="docker build $NO_CACHE -f $DOCKERFILE -t $VERSION_TAG ."
    print_info "执行命令: $BUILD_CMD"

    eval $BUILD_CMD || {
        print_error "Docker 镜像构建失败"
        exit 1
    }

    print_success "镜像构建成功: $VERSION_TAG"

    # 如果需要打 latest 标签
    if [[ "$TAG_LATEST" == true ]]; then
        print_info "添加 latest 标签..."
        docker tag "$VERSION_TAG" "$LATEST_TAG" || {
            print_error "添加 latest 标签失败"
            exit 1
        }
        print_success "latest 标签添加成功: $LATEST_TAG"
    fi
}

# 推送镜像
push_image() {
    if [[ "$PUSH" == true ]]; then
        print_info "开始推送镜像到仓库..."

        # 推送版本标签
        print_info "推送: $VERSION_TAG"
        docker push "$VERSION_TAG" || {
            print_error "推送镜像失败: $VERSION_TAG"
            exit 1
        }
        print_success "镜像推送成功: $VERSION_TAG"

        # 推送 latest 标签
        if [[ "$TAG_LATEST" == true ]]; then
            print_info "推送: $LATEST_TAG"
            docker push "$LATEST_TAG" || {
                print_error "推送镜像失败: $LATEST_TAG"
                exit 1
            }
            print_success "镜像推送成功: $LATEST_TAG"
        fi
    fi
}

# 显示构建摘要
show_summary() {
    echo ""
    echo "============================================"
    print_success "构建完成!"
    echo "============================================"
    echo "Dockerfile 类型: $DOCKERFILE_TYPE"
    echo "版本号:         $VERSION"
    echo "镜像标签:       $VERSION_TAG"
    if [[ "$TAG_LATEST" == true ]]; then
        echo "Latest 标签:    $LATEST_TAG"
    fi
    if [[ "$PUSH" == true ]]; then
        echo "推送状态:       已推送"
    else
        echo "推送状态:       未推送 (使用 -p 参数推送)"
    fi
    echo ""
    echo "运行镜像:"
    echo "  docker run -d -p 80:80 --name sonic-web $VERSION_TAG"
    echo ""
    if [[ "$PUSH" == false && -n "$REGISTRY" ]]; then
        echo "推送镜像:"
        echo "  docker push $VERSION_TAG"
        if [[ "$TAG_LATEST" == true ]]; then
            echo "  docker push $LATEST_TAG"
        fi
        echo ""
    fi
    echo "============================================"
}

# 主函数
main() {
    print_info "Sonic Client Web Docker 构建脚本"
    echo ""

    # 解析参数
    parse_args "$@"

    # 如果没有指定版本号，从 package.json 读取
    if [[ -z "$VERSION" ]]; then
        get_version_from_package
    fi

    # 验证 Dockerfile
    validate_dockerfile_type

    # 构建镜像标签
    build_image_tags

    # 构建镜像
    build_image

    # 推送镜像
    push_image

    # 显示摘要
    show_summary
}

# 执行主函数
main "$@"
