# Sonic Client Web - Docker 构建指南

本文档介绍如何使用 Docker 构建和部署 Sonic Client Web 前端应用。

## 快速开始

### 1. 使用默认配置构建

```bash
# 自动从 package.json 读取版本号
./docker-build.sh
```

### 2. 指定版本号构建

```bash
./docker-build.sh -v 2.5.0
```

### 3. 构建并推送到镜像仓库

```bash
./docker-build.sh -v 2.5.0 -r myregistry.com/sonic -p -l
```

## Dockerfile 类型

项目提供了三种 Dockerfile：

### 1. Dockerfile.build (推荐)
- **特点**: 多阶段构建，轻量级
- **基础镜像**: Node 16 Alpine + Nginx Alpine
- **大小**: 约 50-80 MB
- **包含**: Nginx Web 服务器
- **不包含**: Chrome (如需 Chrome 请使用 full 版本)
- **适用场景**: 生产环境，纯前端部署

```bash
./docker-build.sh -t build -v 2.5.0
```

### 2. Dockerfile.full
- **特点**: 多阶段构建，完整功能
- **基础镜像**: Node 16 Alpine + Debian
- **大小**: 约 800 MB - 1.2 GB
- **包含**: Nginx + Google Chrome (支持 headless 调试)
- **适用场景**: 需要 Chrome 远程调试功能的环境

```bash
./docker-build.sh -t full -v 2.5.0
```

### 3. Dockerfile (原始版本)
- **特点**: 依赖预构建的 dist 目录
- **基础镜像**: sonicorg/sonic-client-web-base:v1.0.0
- **适用场景**: 与现有构建流程兼容

```bash
# 需要先构建前端代码
npm run build

# 然后构建镜像
./docker-build.sh -t original -v 2.5.0
```

## 构建脚本参数

```bash
./docker-build.sh [options]
```

### 参数说明

| 参数 | 简写 | 说明 | 默认值 |
|------|------|------|--------|
| --version | -v | 指定版本号 | 从 package.json 读取 |
| --type | -t | Dockerfile 类型 | build |
| --image | -i | 镜像名称 | sonic-client-web |
| --registry | -r | 镜像仓库地址 | 空 |
| --push | -p | 构建后推送 | false |
| --latest | -l | 打 latest 标签 | false |
| --no-cache | - | 不使用缓存 | false |
| --help | -h | 显示帮助 | - |

### 使用示例

#### 基础构建
```bash
# 使用默认配置
./docker-build.sh

# 指定版本号
./docker-build.sh -v 2.5.0

# 使用完整版 Dockerfile
./docker-build.sh -v 2.5.0 -t full

# 不使用缓存构建
./docker-build.sh -v 2.5.0 --no-cache
```

#### 推送到镜像仓库
```bash
# Docker Hub
./docker-build.sh -v 2.5.0 -i yourname/sonic-web -p -l

# 私有仓库
./docker-build.sh -v 2.5.0 -r harbor.example.com/sonic -p -l

# 阿里云容器镜像服务
./docker-build.sh -v 2.5.0 -r registry.cn-hangzhou.aliyuncs.com/yournamespace -p -l
```

## 运行镜像

### 1. 基础运行

```bash
docker run -d -p 80:80 --name sonic-web sonic-client-web:2.5.0
```

### 2. 指定环境变量

```bash
docker run -d \
  -p 80:80 \
  -e TZ=Asia/Shanghai \
  --name sonic-web \
  sonic-client-web:2.5.0
```

### 3. 连接到后端服务

```bash
docker run -d \
  -p 80:80 \
  --name sonic-web \
  --link sonic-server-gateway:sonic-server-gateway \
  sonic-client-web:2.5.0
```

### 4. 使用 Docker Compose (推荐)

```bash
# 复制示例配置
cp docker-compose.example.yml docker-compose.yml

# 编辑配置
vim docker-compose.yml

# 启动服务
docker-compose up -d

# 查看日志
docker-compose logs -f sonic-web

# 停止服务
docker-compose down
```

## 镜像标签策略

构建脚本支持以下标签策略：

```bash
# 只打版本号标签
./docker-build.sh -v 2.5.0
# 生成: sonic-client-web:2.5.0

# 同时打版本号和 latest 标签
./docker-build.sh -v 2.5.0 -l
# 生成: sonic-client-web:2.5.0
#      sonic-client-web:latest

# 使用自定义镜像名
./docker-build.sh -v 2.5.0 -i my-sonic-web -l
# 生成: my-sonic-web:2.5.0
#      my-sonic-web:latest

# 推送到私有仓库
./docker-build.sh -v 2.5.0 -r harbor.example.com/sonic -l -p
# 生成并推送: harbor.example.com/sonic/sonic-client-web:2.5.0
#            harbor.example.com/sonic/sonic-client-web:latest
```

## 常见问题

### 1. 构建失败：npm install 超时

**解决方案**: 脚本已配置使用国内镜像源 (npmmirror.com)，如仍有问题可手动设置：

```bash
# 编辑 Dockerfile.build 或 Dockerfile.full
# 修改 npm 镜像源为其他源，如淘宝源
RUN npm config set registry https://registry.npmmirror.com
```

### 2. 镜像体积过大

**解决方案**:
- 使用 `Dockerfile.build` (轻量级版本)
- 使用多阶段构建已经最小化了镜像大小
- 如需进一步优化，可考虑使用 nginx alpine 镜像

### 3. 无法连接到后端服务

**检查项**:
1. 确认 nginx.conf 中的代理配置正确
2. 确认容器网络配置
3. 使用 `docker-compose` 可自动处理服务发现

```yaml
# docker-compose.yml 中配置
depends_on:
  - sonic-server-gateway
```

### 4. 权限问题

```bash
# 给脚本添加执行权限
chmod +x docker-build.sh

# 或使用 bash 执行
bash docker-build.sh -v 2.5.0
```

## 生产环境部署建议

### 1. 使用固定版本标签

```bash
# 不推荐使用 latest
docker run sonic-client-web:latest

# 推荐使用具体版本号
docker run sonic-client-web:2.5.0
```

### 2. 配置健康检查

```yaml
healthcheck:
  test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost/"]
  interval: 30s
  timeout: 3s
  retries: 3
  start_period: 10s
```

### 3. 配置资源限制

```yaml
services:
  sonic-web:
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
```

### 4. 配置日志

```yaml
services:
  sonic-web:
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
```

### 5. 使用 HTTPS

建议在生产环境使用反向代理（如 Nginx、Traefik）配置 HTTPS：

```yaml
services:
  nginx-proxy:
    image: nginx:alpine
    ports:
      - "443:443"
      - "80:80"
    volumes:
      - ./nginx-ssl.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
```

## 版本管理

### 自动化版本号管理

```bash
# 1. 更新 package.json 版本号
npm version patch  # 2.5.0 -> 2.5.1
npm version minor  # 2.5.0 -> 2.6.0
npm version major  # 2.5.0 -> 3.0.0

# 2. 自动构建（从 package.json 读取版本）
./docker-build.sh -p -l

# 3. 推送 git tag
git push --tags
```

### CI/CD 集成

在 CI/CD 流水线中使用：

```yaml
# .gitlab-ci.yml 示例
build:
  stage: build
  script:
    - chmod +x docker-build.sh
    - ./docker-build.sh -v ${CI_COMMIT_TAG} -r ${REGISTRY} -p -l
  only:
    - tags
```

## 清理镜像

```bash
# 删除未使用的镜像
docker image prune -f

# 删除所有 sonic-client-web 镜像
docker rmi $(docker images sonic-client-web -q)

# 删除特定版本
docker rmi sonic-client-web:2.5.0
```

## 技术支持

如有问题，请查看：
- 项目 GitHub: https://github.com/SonicCloudOrg/sonic-client-web
- 文档: https://sonic-cloud.wiki
- Issues: https://github.com/SonicCloudOrg/sonic-client-web/issues
