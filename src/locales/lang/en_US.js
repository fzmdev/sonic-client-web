/**
 * EN language
 */
const robot = {
    robotType: 'Robot Type',
    robotTypePlaceholder: '请选择机器人类型',
    robotToken: 'WebHook',
    robotTokenPlaceholder: '请输入群机器人的WebHook',
    robotSecret: 'Secret',
    robotSecretPlaceholder: '（可选）请输入群机器人的密钥'
}
const agent = {
    newAgent: "New Agent",
    clickToCopy: 'Copy Key',
    status: {
        name: 'Status',
        online: 'ONLINE',
        offline: 'OFFLINE',
        s2ae: 'S2AE'
    },
    system: 'System',
    version: 'Version',
    operation: 'Operation',
    shutdown: 'Shutdown',
    edit: {
        name: 'Name',
        highTemp: "高温值",
        highTempTime: "高温超时",
        rule: 'Agent name cannot be empty',
        namePlaceholder: 'Please enter the Agent name'
    }
}

const devices = {
    title: 'Sonic Cloud',
    list: 'Device List',
    form: {
        model: 'Model',
        manufacturer: 'MFR',
        system: 'System',
        battery: {
            level: 'Level',
            temperature: 'Temp'
        },
        agent: 'Agent'
    },
    detail: {
        image: 'Image',
        uploadImg: 'Click to Upload',
        nickName: 'NickName',
        nickPlaceholder: 'Enter device nickname',
        name: 'Name',
        model: 'Model',
        udId: 'UDID',
        size: 'Screen Size',
        cpu: 'CPU',
        pwd: 'Password',
        pwdPlaceholder: 'Default Sonic123456',
        operation: 'Operation',
        reboot: 'Reboot',
        rebootTips: 'Are you sure to reboot the device?',
        deleteTips: 'Are you sure to delete the device?'
    },
    useRightNow: 'Use Now',
    moreDetail: 'More',
    deviceCenter: 'Device Center',
    agentCenter: 'Agent Center',
    status: {
        ONLINE: 'ONLINE',
        DEBUGGING: 'DEBUGGING',
        TESTING: 'TESTING',
        DISCONNECTED: 'DISCONNECTED',
        OFFLINE: 'OFFLINE',
        UNAUTHORIZED: 'UNAUTHORIZED',
        ERROR: 'ERROR'
    },
    filter: {
        all: 'All',
        platform: {
            ANDROID: 'Android',
            IOS: 'iOS',
            HARMONY: 'Harmony'
        },
        manufacturer: 'Manufacturer',
        cpu: 'CPU',
        size: 'Screen Size',
        agent: 'Agent',
        status: 'Status',
        placeholder: 'Please enter the model, name, or serialNumber',
        button: 'Filter'
    },
    refresh: 'Auto refresh',
    avgTem: 'Current average battery temperature: ',
    hint: 'Set Prompt'

}

// 布局相关
const layout = {
    // header
    theme: 'Current theme: ',
    languages: 'Languages',
    deviceCenter: 'Device Center',
    myInfo: 'My Information',
    changePassword: 'Change Password',
    signOut: 'Sign Out',
    aboutSonic: 'About Sonic',
    backHome: 'Home',
    welcomeSpeech: "Welcome to Sonic cloud real machine testing platform. Please select the project to enter.",
    addProject: "New Project",
    officialWebSite: 'Sonic Official WebSite',
    versionUpdateRecord: 'Version Record'
}
// 表单相关
const form = {
    save: 'Save',
    unknown: 'Unknown',
    notEmpty: "Not Empty!",
    differentInput: "The twice inputs are inconsistent!",
    username: "User Name",
    role: "Role",
    testEngineer: "Test Engineer",
    developmentEngineer: "Development Engineer",
    oldPasswordNotEmpty: "Old password can't be empty",
    oldPassword: "Old Password",
    inputOldPassword: "Please enter your old password",
    newPasswordNotEmpty: "New password can't be empty",
    newPassword: "New Password",
    inputNewPassword: "Please enter your new password",
    inputNewPasswordAgain: "Please enter your new password again",
    confirm: "Confirm",
    cancel: "Cancel"
}
// 弹窗相关
const dialog = {
    permissionDenied: 'Permission denied!',
    suffixError: 'Incorrect file suffix!',
    projectInfo: "Project Information",
    agentInfo: 'Agent Information',
    myInfo: "My Information",
    changePassword: "Change Password",
    copy: {
        success: 'Copy Successful!',
        fail: 'Copy failed!'
    }
}

//通用操作
const common = {
    null: 'Null',
    delete: 'Delete',
    edit: 'Edit',
    operate: "操作",
    copy: "复制",
}

// 路由
const routes = {
    login: "Login",
    home: "Home ",
    deviceCenter: "Device Center",
    remoteControl: "Remote Control",
    androidTestCase: "Android Test Case",
    iosTestCase: 'IOS Test Case',
    operateSteps: "Operating Steps",
    testSuite: "Test Suite",
    testResult: "Test Result",
    reportDetails: "Report Details",
    publicSteps: "Public Steps",
    controlElement: "Control Element",
    globalParameter: "Global Parameter",
    moduleManage: "Modules Management",
    versionIteration: "Version Iteration",
    timedTask: "Timed Task",
    projectSetting: "Project Setting",
    projectPage: "Project Home",
    resource: "",
    role: ""
}

const setting = {
    title: "Manage Center"
}
const androidTestCase = {
    addCase: "Add Test Case",
}

const elements = {
    eleInfo: "控件元素信息",
    stepInfo: "步骤信息",
    warn: "警告！",
    warnInfo: "该控件已存在于以下步骤中,删除该控件将连同以下步骤一并删除！请前往对应步骤修改控件或确认对应步骤已废弃！",
    stepList: {
        stepId: "步骤Id",
        useCaseId: "所属用例Id",
        userCaseName:"所属用例名称",
        noCase: "无所属用例"
    },
    sureDelete: "确认删除",
    addElement: "添加控件元素",
    controlId: "控件id",
    inputNameSearch: "输入元素控件名称搜索",
    moduleName: "模块名称",
    targetingType: "定位类型",
    coordinate: "坐标",
    picture: "图片",
    notSpecified: "未指定",
    cEleValue: "控件元素值",
    inputKeySearch: "输入控件元素值搜索",
    sureDelInfo: "确定删除该控件元素吗?",

}

const globalParamsTs = {
    dialogVisible: {
        info: "全局参数信息",
        specialUse: "特殊使用",
        message: "如有多个参数值可以用 | 号隔开，分配设备时会随机分配，单次任务内参数值只会取同一个。【random】和【timestamp】参数已内置，可用作构造随机数据",
        keyName: "参数名",
        keyNameMessage: "参数名不能为空，建议使用英文",
        inputName: "请输入参数名",
        valueName: "参数值",
        valueNameMessage: "参数值不能为空，多个可以用 | 号隔开",
        inputValue: "请输入参数值，多个可以用 | 号隔开"
    },
    addGlobalParams: "添加全局参数",
    paramsList: {
        id: "参数id",
        name: "参数名",
        value: "参数值"
    },
    delMessage: "确定删除该全局参数吗?"
}

const homeTS = {
    projectOverview: "项目概况",
    testCaseManagement: "测试用例管理",
    testCase: {
        case: "测试用例",
        adCase: "安卓端测试用例",
        iosCase: "iOS端测试用例"
    },
    testSuite: "测试套件",
    testDataManagement: "测试数据管理",
    testResults: "测试结果分析",
    setting: "持续集成设置",
    package: {
        mange: "安装包管理",
        bulk: "批量装包",
    },
    crashReport: "崩溃上报",
    projectSetting: {
        setting: "项目相关设置",
        mange: "模块管理",
        update: "版本迭代",
    }
}

const jobsTS = {
    dialogVisible: {
        message: "定时任务信息",
        name: "任务名称",
        nameIsNull: "任务名称不能为空",
        inputName: "请输入任务名称",
        testSuiteIsNull: "测试套件不能为空",
        chooseTestSuite: "请选择测试套件",
        cron: "Cron表达式",
        cronIsNull: "Cron表达式不能为空",
        inputCron: "请输入Cron表达式"
    },
    addCron: "添加定时任务",
    whatCron: "什么是Cron表达式？",
    cronInfo: {
        one: "* 第一位，表示秒，取值 0-59",
        two: "* 第二位，表示分，取值 0-59",
        three: "* 第三位，表示小时，取值 0-23",
        four: "* 第四位，日期，取值 1-31",
        five: "* 第五位，月份，取值 1-12",
        six: "* 第六位，星期几，取值 1-7",
        seven: "* 第七位，年份，可以留空，取值 1970-2099",
        asterisk: "(*) 星号：可以理解为“每”的意思，每秒、每分",
        questionMark: "(?) 问号：只能出现在日期和星期这两个位置，表示这个位置的值不确定",
        bar: "(-) 表达一个范围，如在小时字段中使用 10-12 ，表示从10点到12点",
        comma: "(,) 逗号，表达一个列表值，如在星期字段中使用 1,2,4\n" +
            "，则表示星期一、星期二、星期四",
        slash: "(/) 斜杠，如 x/y ，x是开始值，y是步长，如在第一位(秒)使用\n" +
            "0/15，表示从0秒开始，每15秒",
        official: "官方解释：",
        demoOne: "0 0 3 * * ? 每天 3 点执行",
        demoTwo: "0 5 3 * * ? 每天 3 点 5 分执行",
        demoThree: "0 5 3 ? * * 每天 3 点 5 分执行",
        demoFour: "0 5/10 3 * * ? 每天 3 点 5 分，15 分，25 分，35 分，45 分，55\n" +
            "分这几个点执行",
        demoFive: "0 10 3 ? * 1 每周星期天的 3 点10 分执行，注：1 表示星期天",
        demoSix: "0 10 3 ? * 1#3 每个月的第三个星期的星期天 执行，#号只能出现在星期的位置",
        hint: "注：第六位(星期几)中的数字可能表达不太正确，可以使用英文缩写来表示，如：Sun"
    },
    taskId: "任务id",
    run: "立即运行",
    del: "确定删除该定时任务吗？"
}

const loginTS = {
    testPlatform: "一站式云真机测试平台",
    login: {
        message: "注册账号/LDAP域账号登录",
        register: "注册账号登录",
        LDAPLogin: "LDAP域账号登录",
    },
    user: {
        inputUserName: "请输入账户名",
        inputPassword: "请输入密码",
        longin: "登 入",
        register: "注 册",
    }
}

const modulesTS = {
    info: "模块信息",
    name: "模块名称",
    isNotNull: "模块名称不能为空",
    inputName: "请输入模块名称",
    sure: "确 定",
    add: "添加模块",
    del: "确定删除该模块吗?",
}

const packagesTS = {
    accessGuide: "接入指南",
    buildLink: "构建链接",
    platform: "平台",
    no: "未指定",
    packageName: "安装包名称",
    branch: "分支",
    inputName: "输入分支名称",
    downloadLink: "下载地址",
    copyUrl: "复制url",
    creatTime: "创建时间",

}

export default {
    message: {
        robot,
        agent,
        common,
        devices,
        layout,
        form,
        dialog,
        routes,
        setting,
        androidTestCase,
        elements,
        globalParamsTs,
        homeTS,
        jobsTS,
        loginTS,
        modulesTS,
        packagesTS
    }
}
