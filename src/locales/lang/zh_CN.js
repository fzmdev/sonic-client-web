/**
 * ZH_CN language
 */
const element = {
  currentIteration: '当前迭代控件',
  modelFilter: '模块筛选',
  nameFilter: '已选控件',
  namePlace: '可输入控件名称筛选',
  iterationList: '迭代控件列表',
  whenList: '当父级步骤存在',
  thenList: '时，可选择本控件作为',
  last: ' 进行操作',
  paramTip: '需要临时变量或全局变量时，可以添加 双花括号包含变量名 的形式',
  name: '控件名称',
  nameMsg: '请输入控件元素名称',
  type: '定位类型',
  typePlace: '请选择定位类型',
  deviceType: '移动端常用定位方式',
  specType: '特殊定位方式',
  point: '坐标（支持相对坐标）',
  poco: 'POCO（仅支持游戏控件）',
  image: '图片',
  webViewType: 'WebView常用定位方式',
  value: '控件元素值',
  valuePlace: '请输入控件元素值',
  model: '所属模块',
  modelPlace: '请选择模块',
};
const suite = {
  name: '套件名称',
  namePlace: '请填写套件名称',
  perf: '性能采集',
  interval: '采集间隔',
  devicePlace: '请选择测试设备，可输入型号、备注、中文名称、序列号筛选',
  selectedCase: '已选用例',
};
const testcase = {
  info: '用例信息',
  namePlace: '输入用例名称搜索',
  model: '模块名称',
  version: '版本名称',
  designer: '设计人',
  editTime: '最后修改日期',
  deleteTip: '确定删除该用例吗？用例下的步骤将移出该用例',
  name: '用例名称',
  nameMsg: '请填写用例名称',
  project: '所属项目',
  projectPlace: '请选择项目',
  platform: '平台',
  platformPlace: '请选择平台',
  modelLabel: '模块',
  modelPlace: '请选择模块',
  versionLabel: '版本',
  versionPlace: '请选择版本',
  des: '用例描述',
  desPlace: '输入用例描述',
  empty: '暂无用例',
  add: '马上添加',
  list: '用例列表',
};
const pubSteps = {
  pList: '公共步骤列表',
  alertOne: '该步骤已存在于以下公共步骤中！',
  alertTwo: '选择【仅移出本用例】后，步骤从本用例删除，不影响以下公共步骤。',
  alertThree:
    '选择【彻底删除】后，本步骤从本用例删除，并且从以下公共步骤中删除本步骤。',
  resetCaseId: '仅移出本用例',
  deleteReal: '彻底删除',
  auto: '自动保存中...',
  selectPass: '选择成功！已加入到已选步骤',
  removePass: '移出成功！',
  stepInfo: '步骤信息',
  name: '公共步骤名称',
  nameMsg: '公共步骤名称不能为空',
  namePlace: '请输入公共步骤名称',
  platform: '平台',
  platformPlace: '请选择平台',
  stepTip: '保存后即可编辑已选步骤',
  selected: '已选步骤',
  list: '步骤列表',
  listTip: '从此处添加或编辑步骤，并加入到已选步骤中',
  addStep: '添加步骤',
  searchPlace: '按照控件元素名称搜索',
  search: '搜索',
  case: '所属用例Id',
  deleteCaseTip: '确定彻底删除该步骤吗？',
  goToCase: '前往用例详情',
  goToCaseTip: '该步骤存在于用例中，删除前需前往用例详情移出！',
};
const steps = {
  step: '步骤',
  cases: '所属用例：',
  empty: '暂无步骤',
  remove: '确定移除该步骤吗？',
  run: '开始运行',
  forceStep: '强制终止',
  clear: '清空',
  status: '状态',
  time: '时间',
  detail: '步骤详情',
  script: '点击展开/收起脚本',
  running: '运行中',
  done: '运行完毕',
  loading: '加载中',
  loadDone: '加载完毕',
  loadMore: '加载更多',
  copyStepTips: '确定复制该步骤吗？点击周围空白处取消',
  copyToNextLine: '复制到当前行',
  copyToLastLine: '复制到最后行',
  addStepTips: '选择添加步骤的位置，点击周围空白处取消',
  addToNextLine: '添加到下一行',
  addToBeforeLine: '添加到上一行',
};
const code = {
  placeholder: '请选择',
  settings: '设置',
  temp: '导入模板',
  table: {
    name: '输入名称搜索',
    lang: '脚本语言',
    type: '导入方式',
    add: '追加',
    replace: '替换',
  },
  tip: '编辑后记得保存哦',
};
const token = {
  day: '过期天数',
  result: '生成结果',
  click: '(请点击复制)',
  copy: '点击确定后在此处复制',
};
const project = {
  logo: '项目Logo',
  name: '项目名称',
  nameMessage: '项目名称不能为空',
  namePlace: '请输入项目名',
  des: '项目描述',
  desPlace: '请输入项目描述',
  delete: '删除项目',
  deleteConfirmMsg: '确定删除这个项目吗？',
  deleteConfirmMsgDes: '项目包含的所有信息将一并删除！',
  alertConfig: '通知选项',
  consts: {
    useSysDefault: '使用本项目及后台管理配置的全部机器人',
  },
  ui: {
    customRobots: '自定义',
    useSysDefault: '恢复系统默认设置',
    globalRobot: '启用公共机器人',
    testsuiteDefaultAlertRobotIds: '测试套件默认通知所有机器人',
  },
};
const perf = {
  select: '(可选) 点此可指定监听应用Process性能',
  start: '开始监控',
  stop: '停止监控',
  clear: '清空数据',
  singleCpu: 'CPU单核使用率',
  totalCpu: 'CPU总使用率',
  memUsage: '内存占用',
  network: '上下行',
  procCpu: 'CPU使用率',
  emptyData: '暂无数据',
  byteData: '数据量',
};
const script = {
  name: '模板名称',
  namePlace: '请填写模板名称',
  info: '模板信息',
  add: '新增模板',
  typeSearch: '输入名称搜索',
  lang: '脚本语言',
  deleteMsg: '确定删除该脚本模板吗？',
};
const robot = {
  robotType: '类型',
  robotTypePlaceholder: '请选择机器人类型',
  robotToken: 'WebHook',
  robotTokenPlaceholder: '请输入群机器人的WebHook',
  robotSecret: 'Secret',
  robotSecretPlaceholder: '（可选）请输入群机器人的密钥',
  id: 'ID',
  projectId: '所属项目',
  projectIdPlaceholder: '（可选）请选择机器人绑定的项目ID，留空为公共机器人',
  name: '配置名称',
  robotNamePlaceholder: '请输入机器人简称',
  scene: '使用场景',
  template: '消息模板',
  muteRule: '静默条件',
  sceneList: {
    testsuite: '测试套件',
    summary: '项目日/周报',
    agent: '设备Agent',
  },
  scenePlaceholder: '请选择机器人的使用场景',
  consts: {
    nomute: '从不静默',
    mute: '始终静默',
    muteWeekend: '周末不通知',
    muteNonworktime: '晚间不通知',
    muteNoerr: '全部通过无需通知',
    muteWeekendNoerr: '周末全全部通过无需通知',
    muteNonworktimeNoerr: '晚间全部通过无需通知',
    defaultTemplate: '默认',
    customTemplate: '自定义',
    customMute: '自定义',
    anyProject: '公共',
  },
  ui: {
    add: '新增',
    addOrEdit: '新增/编辑',
    commonMuteRules: '参考配置',
    custom: '自定义',
    defaultTemplate: '重设为自动',
    botPlaceholder: '请选择，留空可停用通知',
    delMessage: '确定删除该机器人吗？',
    globalRobot: '公共机器人',
  },
  validate: {
    nameNoNull: '配置名称称不能为空',
    robotTokenNoNull: 'Webhook不能为空',
  },
};
const agent = {
  hub: {
    config: 'Hub配置',
    info: '设备信息',
    voltage: '电压',
    temperature: '温度',
    action: '操作',
    switch: '切换',
    status: '号USB口未接入设备',
    relate: '关联',
    poweron: '通电',
    poweroff: '断电',
    allpoweron: '全部开机',
    allpoweroff: '全部关机',
  },
  newAgent: '新增Agent',
  clickToCopy: '点击复制',
  status: {
    name: '状态',
    online: '在线',
    offline: '离线',
    s2ae: 'S2AE',
  },
  system: '运行系统',
  version: '运行版本',
  operation: '快捷操作',
  shutdown: '终止运行',
  edit: {
    name: 'Agent名称',
    highTemp: '高温值',
    highTempTime: '高温超时',
    rule: 'Agent名称不能为空',
    namePlaceholder: '请输入Agent名称',
  },
  ui: {
    alertRobotIds: '通知选项',
    defaultAlertRobotIds: '通知所有机器人',
  },
};
const devices = {
  title: 'Sonic云真机平台',
  list: '设备列表',
  form: {
    model: '设备型号',
    manufacturer: '制造商',
    system: '设备系统',
    battery: {
      level: '电池电量',
      temperature: '电池温度',
      voltage: '充电电压',
    },
    agent: '所在位置',
  },
  detail: {
    image: '设备图片',
    uploadImg: '点击上传',
    nickName: '设备备注',
    nickPlaceholder: '输入设备备注信息',
    name: '设备名称',
    model: '设备型号',
    udId: '设备序列号',
    size: '屏幕分辨率',
    cpu: 'CPU类型',
    pwd: '安装密码',
    pwdPlaceholder: '默认为Sonic123456',
    operation: '快捷操作',
    reboot: '重启',
    rebootTips: '确定重启该设备吗？',
    deleteTips: '确定删除该设备吗？',
  },
  useRightNow: '马上使用',
  moreDetail: '更多信息',
  deviceCenter: '设备中心',
  agentCenter: 'Agent中心',
  status: {
    ONLINE: '空闲中',
    DEBUGGING: '占用中',
    TESTING: '测试中',
    DISCONNECTED: '已断开',
    OFFLINE: '已离线',
    UNAUTHORIZED: '未授权',
    ERROR: '异常中',
  },
  filter: {
    all: '全选',
    platform: {
      ANDROID: '安卓系统',
      IOS: 'iOS系统',
      HARMONY: '鸿蒙系统',
    },
    manufacturer: '设备制造商',
    cpu: 'CPU处理器',
    size: '屏幕分辨率',
    agent: '所在位置',
    status: '设备状态',
    placeholder: '请输入要筛选的型号、设备名称或设备序列号',
    button: '高级筛选',
  },
  refresh: '自动刷新',
  avgTem: '当前平均电池温度：',
  hint: '设置提示',
  adTemperature: {
    temperature: '当设备温度≥',
    height: '高温值',
    onlyAd: '时，会通知机器人告警。',
    then: '当',
    timeout: '高温超时',
    continuedTime: '时间内温度持续≥',
    onlyAdNotice: '时，会通知机器人并',
    shutdown: '关机',
  },
};
// 布局相关
const layout = {
  // header
  theme: '当前主题：',
  languages: '多语言',
  deviceCenter: '设备中心',
  myInfo: '我的信息',
  changePassword: '修改密码',
  signOut: '注销',
  aboutSonic: '关于Sonic',
  backHome: '回到首页',
  welcomeSpeech: '欢迎来到Sonic云真机测试平台，请选择项目进入',
  addProject: '新增项目',
  officialWebSite: 'Sonic官方网站',
  document: '使用文档',
  versionUpdateRecord: '版本更新记录',
};
// 表单相关
const form = {
  save: '保存',
  unknown: '未知',
  notEmpty: '不能为空！',
  differentInput: '两次输入不一致！',
  username: '用户名',
  role: '角色',
  testEngineer: '测试工程师',
  developmentEngineer: '开发工程师',
  oldPasswordNotEmpty: '旧密码不能为空',
  oldPassword: '旧密码',
  inputOldPassword: '请输入旧密码',
  newPasswordNotEmpty: '新密码不能为空',
  newPassword: '新密码',
  inputNewPassword: '请输入新密码',
  inputNewPasswordAgain: '请再次输入新密码',
  confirm: '确定',
  cancel: '取消',
};
// 弹窗相关
const dialog = {
  welcome: '欢迎回来！',
  permissionDenied: '当前用户暂无权限！',
  suffixError: '文件格式有误！',
  projectInfo: '项目信息',
  agentInfo: 'Agent信息',
  myInfo: '我的信息',
  changePassword: '修改密码',
  copy: {
    success: '复制成功！',
    fail: '复制失败！',
  },
  ready: '后台准备中...请稍后...',
  error: '系统出错了！',
};
// 通用操作
const common = {
  release: '超时后将自动解除占用',
  releaseTip: '确定强制解除该设备占用状态吗？',
  at: '在 ',
  hour: '时',
  min: '分',
  sec: '秒',
  null: '无',
  delete: '删除',
  edit: '编辑',
  operate: '操作',
  copy: '复制',
  inuse: '已使用',
  inidle: '已闲置',
  pageNotFoundTip: '请检查您输入的URL是否正确，或单击下面的按钮返回主页',
  backHome: '回到主页'
};
// 路由
const routes = {
  login: '登录',
  home: '首页',
  deviceCenter: '设备中心',
  remoteControl: '远程控制',
  androidTestCase: '安卓测试用例',
  iosTestCase: 'IOS测试用例',
  operateSteps: '运行步骤',
  testSuite: '测试套件',
  testResult: '测试结果',
  reportDetails: '报告详情',
  publicSteps: '公共步骤',
  controlElement: '控件元素',
  globalParameter: '全局参数',
  moduleManage: '模块管理',
  versionIteration: '版本迭代',
  timedTask: '定时任务',
  projectSetting: '项目设置',
  projectPage: '项目首页',
  resource: '资源管理',
  role: '角色管理',
  users: '用户配置',
  sysJobs: '系统定时任务',
  remoteSettings: '远程控制配置',
  scripts: '脚本模板',
  projectAlertRobots: '通知机器人',
  sysAlertRobots: '通知机器人',
};
const setting = {
  title: '后台管理中心',
};
const androidTestCase = {
  addCase: '添加用例',
};
const elements = {
  eleInfo: '控件元素信息',
  stepInfo: '步骤信息',
  warn: '警告',
  warnInfo:
    '该控件已存在于以下步骤中，删除该控件后会影响以下步骤！请删除后前往对应步骤修改控件或确认对应步骤已废弃！',
  stepList: {
    stepId: '步骤Id',
    useCaseId: '所属用例Id',
    userCaseName: '所属用例名称',
    noCase: '无所属用例',
  },
  sureDelete: '确认删除',
  addElement: '添加控件元素',
  controlId: '控件id',
  inputNameSearch: '输入元素控件名称搜索',
  moduleName: '模块名称',
  targetingType: '定位类型',
  coordinate: '坐标',
  picture: '图片',
  notSpecified: '未指定',
  cEleValue: '控件元素值',
  inputKeySearch: '输入控件元素值搜索',
  sureDelInfo: '确定删除该控件元素吗?',
};
const globalParamsTs = {
  dialogVisible: {
    info: '全局参数信息',
    specialUse: '特殊使用',
    messageInfo:
      "如有多个参数值可以用 '{'|'}'号隔开，分配设备时会随机分配，单次任务内参数值只会取同一个。【random】和【timestamp】参数已内置，可用作构造随机数据",
    keyName: '参数名',
    keyNameMessage: '参数名不能为空，建议使用英文',
    inputName: '请输入参数名',
    valueName: '参数值',
    valueNameMessage: "参数值不能为空，多个可以用 '{'|'}' 号隔开",
    inputValue: "请输入参数值，多个可以用 '{'|'}' 号隔开",
  },
  addGlobalParams: '添加全局参数',
  paramsList: {
    id: '参数id',
    name: '参数名',
    value: '参数值',
  },
  delMessage: '确定删除该全局参数吗?',
};
const homeTS = {
  projectOverview: '项目概况',
  testCaseManagement: '测试用例管理',
  testCase: {
    case: '测试用例',
    adCase: '安卓端测试用例',
    iosCase: 'iOS端测试用例',
  },
  testSuite: '测试套件',
  testDataManagement: '测试数据管理',
  testResults: '测试结果分析',
  setting: '持续集成设置',
  package: {
    mange: '安装包管理',
    bulk: '批量装包',
  },
  crashReport: '崩溃上报',
  projectSetting: {
    setting: '项目相关设置',
    mange: '模块管理',
    update: '版本迭代',
  },
};
const jobsTS = {
  dialogVisible: {
    message: '定时任务信息',
    name: '任务名称',
    nameIsNull: '任务名称不能为空',
    inputName: '请输入任务名称',
    testSuiteIsNull: '测试套件不能为空',
    chooseTestSuite: '请选择测试套件',
    cron: 'Cron表达式',
    cronIsNull: 'Cron表达式不能为空',
    inputCron: '请输入Cron表达式',
  },
  addCron: '添加定时任务',
  whatCron: '什么是Cron表达式？',
  cronNoNext: "N/A",
  cronInfo: {
    one: '* 第一位，表示秒，取值 0-59',
    two: '* 第二位，表示分，取值 0-59',
    three: '* 第三位，表示小时，取值 0-23',
    four: '* 第四位，日期，取值 1-31',
    five: '* 第五位，月份，取值 1-12',
    six: '* 第六位，星期几，取值 1-7',
    seven: '* 第七位，年份，可以留空，取值 1970-2099',
    asterisk: '(*) 星号：可以理解为“每”的意思，每秒、每分',
    questionMark:
      '(?) 问号：只能出现在日期和星期这两个位置，表示这个位置的值不确定',
    bar: '(-) 表达一个范围，如在小时字段中使用 10-12 ，表示从10点到12点',
    comma:
      '(,) 逗号，表达一个列表值，如在星期字段中使用 1,2,4\n' +
      '，则表示星期一、星期二、星期四',
    slash:
      '(/) 斜杠，如 x/y ，x是开始值，y是步长，如在第一位(秒)使用\n' +
      '0/15，表示从0秒开始，每15秒',
    official: '官方解释：',
    demoOne: '0 0 3 * * ? 每天 3 点执行',
    demoTwo: '0 5 3 * * ? 每天 3 点 5 分执行',
    demoThree: '0 5 3 ? * * 每天 3 点 5 分执行',
    demoFour:
      '0 5/10 3 * * ? 每天 3 点 5 分，15 分，25 分，35 分，45 分，55\n' +
      '分这几个点执行',
    demoFive: '0 10 3 ? * 1 每周星期天的 3 点10 分执行，注：1 表示星期天',
    demoSix:
      '0 10 3 ? * 1#3 每个月的第三个星期的星期天 执行，#号只能出现在星期的位置',
    hint: '注：第六位(星期几)中的数字可能表达不太正确，可以使用英文缩写来表示，如：Sun',
  },
  taskId: '任务id',
  run: '立即运行',
  del: '确定删除该定时任务吗？',
};
const loginTS = {
  testPlatform: '一站式云真机测试平台',
  login: {
    message: '注册账号/LDAP域账号登录',
    register: '注册账号登录',
    LDAPLogin: 'LDAP域账号登录',
  },
  user: {
    inputUserName: '请输入账户名',
    inputPassword: '请输入密码',
    longin: '登 入',
    register: '注 册',
  },
};
const modulesTS = {
  info: '模块信息',
  name: '模块名称',
  isNotNull: '模块名称不能为空',
  inputName: '请输入模块名称',
  sure: '确 定',
  add: '添加模块',
  del: '确定删除该模块吗?',
};
const packagesTS = {
  accessGuide: '接入指南',
  buildLink: '构建链接',
  platform: '平台',
  no: '未指定',
  packageName: '安装包名称',
  branch: '分支',
  inputName: '输入分支名称',
  downloadLink: '下载地址',
  copyUrl: '复制url',
  creatTime: '创建时间',
  updateTime: '更新时间',
};
const projectIndexTS = {
  code: {
    lastWeek: '最近一周',
    lastMonth: '最近一个月',
    lastThreeMonth: '最近三个月',
    day: '天',
    hour: '小时',
    minute: '分',
    second: '秒',
    runInfo: '运行情况总览',
    unit: '单位(%)',
    passRate: '当天通过率',
    stateDis: '状态分布',
    other: '其他',
    pass: '通过',
    fail: '失败',
  },
  page: {
    to: '至',
    startTime: '开始日期',
    endTime: '结束日期',
    caseTop5: '用例运行时长排行榜（Top 5）',
    caseId: '用例id',
    caseName: '用例名称',
    timeLong: '时长',
    equipmentTop5: '设备运行时长排行榜（Top 5）',
    eqId: '设备型号',
    serialNumber: '序列号',
  },
};
const publicStepTS = {
  info: '公共步骤信息',
  add: '添加公共步骤',
  id: '公共步骤Id',
  name: '公共步骤名称',
  platform: '平台',
  android: '安卓',
  list: '步骤列表',
  stepId: '步骤Id',
  useCase: '所属用例',
  stepInfo: '步骤详情',
  viewSteps: '查看步骤',
  sureDel: '确定删除该公共步骤吗?',
};
const resultDetailTS = {
  memoryInfo: '内存详情',
  unit: '单位(KB)',
  battery: '电量详情',
  memoryShort: '内存数据不足',
  batteryShort: '电量数据不足',
  performance: '性能数据不足',
  caseRun: '用例运行状态分布',
  noStart: '未开始',
  runIng: '运行中',
  caseStatus: '用例状态',
  page: {
    reportInfo: '报告信息',
    resultId: '结果Id',
    executeUser: '执行用户',
    runStatus: '运行状态',
    testPass: '测试通过',
    testFail: '测试失败',
    testAlert: '测试告警',
    endTime: '结束时间',
    totalTime: '总耗时',
    runInfo: '运行信息',
    total: '耗时',
    runLog: '运行日志',
    performanceInfo: '性能信息',
    runRecording: '运行录像',
    onRecording: '暂无录像',
  },
};
const ResultsTS = {
  name: '测试套件名称',
  testReport: '测试报告',
  lookReport: '查看报告',
  interruptTest: '确定中断本次测试吗?',
  interrupt: '中断',
  del: '确定删除该测试报告吗?',
};
const stepListViewTS = {
  caseInfo: '用例详情',
  platformToBe: '所属平台',
  module: '模块',
  versionName: '版本名称',
  designer: '设计人',
  last: '最后修改日期',
  testMessage: '用例描述',
};
const testSuitesTS = {
  testStart: '测试已开始...',
  info: '测试套件信息',
  add: '添加测试套件',
  id: '套件Id',
  searchMessage: '输入测试套件名称搜索',
  kitPlatform: '套件平台',
  coverType: '覆盖类型',
  testCover: '用例覆盖',
  deviceCover: '设备覆盖',
  associated: '关联设备',
  device: {
    id: '设备id',
  },
  viewList: '查看列表',
  associatedCase: '关联用例',
  run: '运行',
  delMessage: '确定删除该测试套件吗？套件下的用例将移出该套件',
  ui: {
    alertRobotIds: '通知选项',
    defaultAlertRobotIds: '使用项目默认设置',
  },
};
const versionsTS = {
  name: '名称',
  iteration: '版本迭代信息',
  noNull: '版本名称不能为空',
  inputName: '请输入版本名称',
  time: '时间',
  timeNoNull: '时间不能为空',
  selectTime: '选择日期时间',
  addVersions: '添加版本迭代',
  delMessage: '确定删除该版本吗？',
};
const androidRemoteTS = {
  element: {
    windows: {
      single: '单窗口模式',
      multi: '多窗口模式',
    },
    visible: {
      hid: '隐藏Invisible控件',
      show: '显示Invisible控件',
    },
    unimportant: {
      ignore: '忽略不重要视图',
      show: '不忽略不重要视图',
    },
  },
  driverStatus: {
    success: '初始化 UIAutomator2 Server 完成！',
    fail: '初始化 UIAutomator2 Server 失败！',
  },
  repairedSuccess: '修复成功',
  associationSuccess: '关联成功',
  copySuccess: '复制成功',
  copyFail: '复制失败',
  noWebSocket: '不支持WebSocket',
  connection: '连接成功！',
  systemException: '系统出现异常！已断开远程控制！',
  messageOne: '检测到屏幕旋转！请稍后...',
  getPocoSuccess: '获取Poco控件成功！',
  getPocoFail: '获取POCO控件失败！请确保已经打开对应游戏引擎并接入Poco-SDK',
  pullFile: {
    success: '拉取文件成功',
    fail: '拉取文件失败',
  },
  pushFile: {
    success: '上传文件成功！',
    fail: '上传文件失败！上传目录需要补齐文件名',
  },
  getEle: {
    success: '获取原生控件元素成功！',
    fail: '获取控件元素失败！请重新获取',
  },
  install: {
    success: '安装成功!',
    fail: '安装失败!',
  },
  uninstall: {
    success: '卸载成功！',
    fail: '卸载失败!',
  },
  runOver: '运行完毕',
  getSuccess: '获取成功!',
  getPsSuccess: '获取快照成功!',
  loadIng: '加载应用列表中，请稍后...',
  messageTwo: '已取消自动全局代理，请手动配置代理',
  startUninstall: '开始卸载！请稍后...',
  failErr: '文件格式有误！',
  addOne: '只能添加一个文件！请先移除旧文件',
  startInstall: '开始安装！请稍后...',
  high: '高',
  middle: '中',
  low: '低',
  deviceFail: '该设备暂时不可使用!',
  remoteAudio: '远程音频已开启，请勿重复操作！',
  audio: '远程音频传输已连接!',
  audioFail: '远程音频传输已断开！',
  audioSuccess: '远程音频同步成功！',
  code: {
    elementsSnapshot: '控件元素快照',
    eleName: '控件元素名称',
    eleNullName: '控件元素名称不能为空',
    inputName: '请输入控件元素名称',
    saveEle: '保存为图片元素',
    preparingImager: '准备图像中...',
    systemVersion: '系统版本',
    projectionMode: '投屏模式',
    frameNumber: '投屏帧数',
    manualRepair: '手动修复',
    fixBlackScreen: '修复黑屏',
    fixTouch: '修复触控',
    fixScreen: '修复横竖屏',
    remoteAudioTran: '远程音频传输',
    batterySimulation: '电池模拟',
    simulatePowerOutage: '模拟断电',
    reset: '重置',
    physicalLookup: '物理查找',
    BV: '亮度/音量',
    dial: '拨号',
    photograph: '拍照',
    browser: '浏览器',
    LUS: '锁定/解锁屏幕',
    remoteControlPanel: '远控面板',
    inputText: '输入文本',
    pleaseText: '请输入要发送的文本，支持简体中文',
    clear: '清空输入框',
    send: '发送',
    keyboard: '清空输入框与实时输入仅在Sonic输入法开启时可用',
    startKeyboard: '启动Sonic输入法',
    stopKeyboard: '禁用Sonic输入法',
    remoteADB: '远程ADB',
    noAgent: '所在Agent未开启该功能！',
    UIAutomator2ServerInit: '初始化UIAutomator2Server',
    closeDriver: '停止UIAutomator2Server',
    closeDriverMessage: '停止UIAutomator2Server成功！',
    automaticInitialization: '下次进入自动初始化',
    scanQRCode: '扫描二维码',
    errTitle: 'OPPO、vivo部分机型上传二维码后不出现在相册，需要重启后生效',
    messageThree: '将二维码图片拖到此处，或',
    messageFour: '只能上传jpg/png文件',
    fileTransfer: '文件互传',
    upFile: '上传文件',
    messageFive: '将文件拖到此处，或',
    pleaseFilePath: '请输入上传目标路径（加上文件名）',
    filePath: '拉取文件',
    pullFilePath: '请输入拉取目标路径',
    installFile: '下载文件',
    app: '应用程序',
    pushInstall: '上传安装',
    apkFile: '将APK文件拖到此处，或',
    onlyAPKFile: '只能上传apk文件',
    URLInstall: 'URL安装',
    linkInstall: '持续集成管理安装',
    hintAssociatedProject: '该功能需要先从上方关联项目',
    hint: '请输入apk下载链接或本地路径',
    refresh: '刷新',
    appName: '应用名',
    packagesName: '包名',
    version: '版本号',
    subversion: '子版本号',
    nameSearch: '输入应用名或包名搜索',
    open: '打开',
    kill: '停止',
    killMsg: '停止成功！',
    unInstall: '卸载',
    packet: '网络抓包',
    startPacket: '开始抓包',
    downloadCertificate: '下载证书',
    cancelGlobalProxy: '取消全局代理',
    proxyConnection: '代理连接',
    useTeaching: '使用教学',
    connectWifi: '连接Wifi',
    connectWifiText:
      '未连接Wifi的话，需前往Wifi列表连接你的Wifi。Wifi需要与Agent的网络互通，连接后点击刷新重新获取Wifi状态',
    installCertificate: '安装证书',
    installCertificateText:
      '首次抓包需要安装证书，点击下载按钮后下载证书并安装。如浏览器无法访问，请确认Agent已关闭防火墙。',
    startCapturing: '开始抓包',
    startCapturingText:
      '点击开始抓包后，就可以开始体验啦！（默认自动全局代理，如果不需要可以点击取消全局代理按钮，然后自行前往Wifi页面手动配置）',
    screenshotQuick: '快速截图',
    screenshot: '截图',
    clean: '清空',
    noScreenshots: '暂无截图',
    savePicture: '保存图片',
    precautions: '注意事项',
    precautionsText: '该功能仍处于Beta测试中，暂时屏蔽reboot、rm、su等风险指令',
    inputSend: '输入指令后，点击Send或回车发送',
    enterInput: '请输入输入过滤文本',
    UIAutomation: {
      UIAutomationName: 'UI自动化',
      testInfo: '用例详情',
      clean: '取消关联',
      fatherPlayed: '所属项目',
    },
    associatedProject: '关联项目',
    chooseProject: '请选择关联项目',
    addCase: '新增用例',
    hintText: '提示',
    hintMessage: '该功能需要先从上方关联测试用例',
    nativeControls: '原生控件',
    retrieveControlEle: '重新获取控件元素',
    activity: '当前Activity',
    webViewList: 'WebView列表',
    classFilter: '输入class或resource-id进行过滤',
    addControls: '添加控件',
    controlSnapshot: '控件快照',
    titleMessage: '关联项目后即可保存控件',
    pocoRecommend: 'POCO推荐',
    pocoNull: '暂无POCO推荐语法',
    xpath: 'xpath推荐',
    xpathNull: '暂无xpath推荐语法',
    absolutePath: '绝对路径',
    centerXY: '中心坐标',
    label: {
      checkable: 'checkable',
      checked: 'checked',
      clickable: 'clickable',
      selected: 'selected',
      displayed: 'displayed',
      enabled: 'enable',
      focusable: 'focusable',
      focused: 'focused',
      longClickable: 'long-clickable',
      scrollable: 'scrollable',
    },
    subTitleText: '请先获取控件元素，该功能需要初始化Driver',
    getEle: '获取控件元素',
    poco: 'Poco控件',
    getPoco: '获取Poco控件',
    pocoSDK: 'Poco-SDK 接入指南',
    moreFeaturesAdd: '更多功能正在加入...',
    getPocoSDKMessage: '请先获取Poco控件元素，该功能需要引擎已接入Poco-SDK',
    webView: {
      webDebug: '网页调试',
      err: '暂无webView进程',
      getWeb: '获取webView进程',
      againGetWeb: '重新获取webView进程',
      Untitled: '无标题',
      nowDebug: '马上调试',
      return: '返回',
      nowWeb: '当前页面',
      messageInfo: '如果您的浏览器不兼容该功能，请您及时反馈到',
      here: '这里',
    },
  },
};
const indexIOSTS = {
  contentText: '切换布局',
  successText: '切换成功',
};
const settingIndexTS = {
  center: {
    background: '后台管理中心',
    rights: '权限配置',
    resource: '资源管理',
    roleText: '角色管理',
    userCon: '用户配置',
    systemCon: '系统配置',
    scheduled: '系统定时任务',
    remoteSettings: '远程控制配置',
    sysAlertRobots: '通知机器人',
  },
  remote: {
    alertMsg:
      '用于配置远程控制的最长占用时间，超过该时间后，会自动解除当前的占用情况恢复为空闲。（仅影响远程控制和通过REST API占用的最大时长，运行测试的设备不受影响）',
    text: '远控最长占用时间：',
    idle_alertMsg:
      '用于配置远程控制的最长闲置时间，若用户超过该时间无任何操作，会自动解除当前的占用情况恢复为空闲。（仅影响远程控制，运行测试的设备不受影响）',
    idle_text: '远控最长闲置时间：',
  },
};
const resourceTS = {
  syncSucceed: '同步成功!',
  syncResource: '同步资源',
  syncResourceInfo: '同步资源说明',
  syncResourceInfoMessage:
    '重新全量更新应用内所有请求资源信息，一般版本更新需要同步',
  pageData: {
    idText: '资源id',
    message: '描述',
    path: '路径',
    inputPathName: '输入路径名称',
    callMethod: '调用方法',
    requiredText: '是否需要鉴权',
  },
};
const roleTS = {
  dialogVisible: {
    addOrEdit: '添加/编辑角色',
    roleName: '角色名称',
    roleNoNull: '角色名称不能为空',
    inputParam: '请输入参数名',
    paramNoNull: '参数值不能为空',
    roleInfo: '请输入角色描述',
    addRole: '添加角色',
  },
  pageData: {
    role: '角色',
    nameL: '名称',
    delMessage: '确定删除该角色吗?',
  },
};
const sysJobsTS = {
  code: {
    cleanFile: '清理系统文件',
    cleanFileText:
      '清理测试过程产生的图片、录像或远控期间临时apk包等等文件，保留天数为 [前两次定时任务到本次定时任务间隔] 天数。',
    cleanResult: '清理测试报告',
    cleanResultText:
      '清理测试报告，保留天数为 [前两次定时任务到本次定时任务间隔] 天数。',
    sendDayReport: '发送日报',
    sendDayReportText: '发送测试日报到群机器人.',
    sendWeekReport: '发送周报',
    sendWeekReportText: '发送测试周报到群机器人.',
  },
  page: {
    type: '类型',
    nextTriggerDate: '下次触发日期',
    editTime: '编辑系统定时任务',
  },
};
const usersTS = {
  dialogVisible: {
    editUser: '编辑用户角色',
    userName: '用户名',
    chooseUserName: '请选择用户角色',
  },
  pageData: {
    userId: '用户id',
    userName: '用户名',
    inputName: '输入用户名',
    roleConfiguration: '角色配置',
  },
};
const IOSRemote = {
  depth: '最大遍历深度',
  driverStatus: {
    success: '初始化 WebDriverAgent 完成！',
    fail: '初始化 WebDriverAgent 失败！',
  },
  eleScreen: {
    err: '获取元素截图失败！',
  },
  perfmon: '性能监控',
  startSimulating: '开始模拟定位...',
  positioningRestored: '已恢复定位',
  loadingAppList: '加载应用列表中，请稍后...',
  calibration: '校准完毕',
  clipboard: {
    SentSuccessfully: '发送剪切板成功!',
    text: '获取剪切板文本成功!',
    operate: '剪切板操作',
    inputText: '请输入你要发送到剪切板的内容',
    send: '发送到剪切板',
    getText: '获取剪切板文本',
  },
  clarityAndFps: '清晰度与FPS',
  calibrationCoordinates: '校准坐标',
  volume: '音量',
  siri: {
    command: 'Siri指令',
    inputCommand: '请输入siri指令，例：what day is it today?',
  },
  positioning: {
    mock: '模拟定位',
    x: '经度',
    y: '纬度',
    start: '开始模拟',
    end: '恢复定位',
  },
  remoteWDA: '远程WDA',
  remoteSIB: '远程SIB',
  driverNotSuccess: 'driver未初始化成功',
  errLog: '文件互传与崩溃日志',
  waitOpen: '该功能即将开放',
  moveIPA: '将ipa文件拖到此处，或',
  onlyIPAFile: '只能上传ipa文件',
  installIPA: '安装IPA',
  pleaseIPAFilePath: '请输入ipa下载链接或本地路径',
  openWeb: '打开浏览器',
  web: {
    openInput: '打开浏览器后输入网址',
  },
  messageStep:
    '进入手机【设置】->【通用】->【VPN与设备管理 / 描述文件与设备管理 / 设备管理 / 描述文件】->找到mitmproxy证书安装',
  trustCertificate: '信任证书',
  certificateStep:
    '进入手机【设置】->【通用】->【关于本机】最下方->【证书信任设置】信任对应证书',
  startPacketMessage:
    '点击开始抓包后，Wifi设置手动代理，连接右上角对应的ip与端口，即可开启抓包',
  filterClassOrName: '输入class或name进行过滤',
  predicate: 'Predicate推荐',
  classChain: 'classChain推荐',
  noRecommend: '暂无推荐语法',
};
const stepDetail = {
  app: {
    authorize: '授权应用',
    path: '应用路径: ',
    pkg: '应用包名',
    installFromPkglist: '从安装包列表安装',
    close: '关闭应用',
    branchName: '分支名称',
    emptyCache: '清空应用缓存',
    empty: '清空应用',
    clear: '清除应用',
  },
  attribute: '属性',
  attributeToVariable: '属性至变量',
  activityBlacklist: 'Activity黑名单',
  andClick: '并点击',
  bufferMemory: '缓存内存',
  click: {
    action: '点击',
    coordinate: '点击坐标',
    target: '点击目标',
    expandOrCollapse: '点击展开/收起脚本编辑器',
  },
  close: '关闭',
  control: {
    name: '控件',
    attribute: '控件属性',
    element: '控件元素',
    info: '控件信息',
    strategy: '控件策略',
    screenshot: '控件截图',
    subControl: '子控件',
  },
  commonKey: '常用按键',
  communicationPort: '通信端口',
  declearedRights: '声明的权限',
  des: {
    monkeyOptions: {
      sleepTime: '指定事件间的时延，单位ms',
      tapEvent: '随机坐标轻触',
      longPressEvent: '随机坐标长按1～3秒',
      swipeEvent: '随机两个坐标滑动',
      systemEvent: 'Home、返回键等等',
      navEvent: '安卓：随机开关WIFI；iOS：后台运行当前应用',
      isOpenPackageListener: '检测当前应用是否为被测应用，为否时将重新拉起被测应用',
      isOpenH5Listener: '检测是否长时间停留在H5页面 (Android Only)',
      isOpenActivityListener: '检测当前Activity是否在黑名单内 (Android Only)',
      isOpenNetworkListener: '检测设备是否处于飞行模式和WIFI网络 (Android Only)',
    },
  },
  detailConfigure: '详细配置',
  delete: '删除',
  detect: '检测',
  dragTo: '滑动拖拽至',
  display: '显示',
  downwards: '向下',
  exception: {
    handling: '异常处理',
    ignore: '忽略 ',
    warning: '告警 ',
    interrupt: '中断 ',
    msgException: '意为该测试步骤出现异常时的处理方案',
    msgContinue: '忽略异常并继续执行（逻辑处理时不抛出异常）',
    msgWarning:
      '忽标记警告并获取异常截图和异常堆栈，然后继续执行（逻辑处理时不抛出异常）',
    msgInterrupt:
      '标记失败并获取异常截图、异常堆栈和测试录像，然后中断执行（逻辑处理时抛出异常）',
  },
  engine: '引擎',
  enterNum: '输入数量',
  eventConfigure: '事件配置',
  elementAttribute: '元素属性',
  empty: '清空',
  enterText: '输入文本',
  eventsNum: '事件数',
  fromControl: '从控件',
  gameEngine: '游戏引擎',
  get: '获取',
  getToVariable: '提取至变量',
  handleSwitchInfo: '句柄切换信息',
  handleInfo: 'handle信息',
  hide: '隐藏',
  ignoreOrNot: '是否忽略',
  inputValue: '输入值',
  identifyLanguages: '识别语言',
  installation: '安装方式',
  installPath: '安装路径',
  imageSimilarity: '图像相似度',
  inputMethod: '输入法输入',
  inputBox: '输入框',
  iterate: '迭代',
  its: '的',
  key: '键',
  keyCode: '按键code',
  label: {
    monkeyOptions: {
      sleepTime: '用户操作时延',
      tapEvent: '轻触事件权重',
      longPressEvent: '长按事件权重',
      swipeEvent: '滑动事件权重',
      systemEvent: '物理按键事件权重',
      navEvent: '系统导航事件权重',
      isOpenPackageListener: '应用包名监听器',
      isOpenH5Listener: 'H5页面监听器 (Android Only)',
      isOpenActivityListener: '黑名单Activity监听器 (Android Only)',
      isOpenNetworkListener: '网络状态监听器 (Android Only)',
    },
    androidOptions: {
      system: {
        self: '设备操作',
        rotateDevice: {
          self: '屏幕交互',
          lock: '锁定屏幕',
          unlock: '解锁屏幕',
          screenSub: '左转屏幕',
          screenAdd: '右转屏幕',
          screenAbort: '关闭自动旋转',
        },
        keyboard: {
          self: '输入法与剪切板',
          sendKeyForce: 'Sonic输入法输入',
          closeKeyboard: '关闭Sonic输入法',
          setClipperByKeyboard: '设置文本到剪切板',
          getClipperByKeyboard: '获取剪切板文本',
        },
        interaction: {
          self: '特殊交互',
          keyCode: '系统按键',
          keyCodeSelf: '系统按键（自定义）',
          swipeByDefinedDirection: '从屏幕中央滑动距离',
        },
        network: {
          self: '网络相关',
          airPlaneMode: '切换飞行模式',
          wifiMode: '切换WIFI模式',
          locationMode: '切换位置服务',
        },
      },
      app: {
        self: '应用操作',
        openApp: '打开应用',
        terminate: '终止应用',
        install: '安装应用',
        uninstall: '卸载应用',
        appReset: '清空App内存缓存',
        appAutoGrantPermissions: '自动授权应用权限',
      },
      element: {
        self: '控件元素操作',
        uiEle: {
          self: '安卓原生控件',
          findElementInterval: '设置查找控件策略',
          switchWindowMode: '切换窗口模式',
          switchVisibleMode: '切换Invisible控件展示',
          switchIgnoreMode: '切换忽略不重要视图模式',
          isExistEle: '判断控件元素是否存在',
          isExistEleNum: '判断控件元素存在个数',
          click: '点击控件元素',
          sendKeys: '输入文本',
          sendKeysByActions: '输入文本(Actions)',
          swipe2: '拖拽控件元素',
          scrollToEle: '滚动到控件元素',
          longPress: '长按控件元素',
          clear: '清空输入框',
          obtainElementAttr: '获取控件属性',
          getElementAttr: '验证控件属性',
          getTextValue: '获取文本',
          assertText: '断言文本',
          logElementAttr: '日志输出控件信息',
          iteratorAndroidElement: '迭代控件列表',
        },
        coordinate: {
          self: '坐标控件',
          tap: '点击坐标',
          longPressPoint: '长按坐标',
          swipe: '滑动拖拽',
        },
        webView: {
          self: 'WebView控件',
          setDefaultFindWebViewElementInterval: '设置查找控件策略',
          toWebView: '切换WebView',
          toHandle: '切换Handle',
          isExistWebViewEle: '判断控件元素是否存在',
          isExistWebViewEleNum: '判断控件元素存在个数',
          webViewClick: '点击控件元素',
          webElementScrollToView: '滚动控件至顶部可见',
          webViewSendKeys: '输入文本',
          webViewSendKeysByActions: '输入文本(Actions)',
          webViewClear: '清空输入框',
          getWebViewTextValue: '获取文本',
          assertWebViewText: '断言文本',
          getTitle: '验证标题',
          getUrl: '验证网址',
          webViewRefresh: '刷新页面',
          webViewBack: '回退页面',
        },
        poco: {
          self: 'POCO控件',
          startPocoDriver: '启动PocoDriver',
          setDefaultFindPocoElementInterval: '设置查找控件策略',
          setTheRealPositionOfTheWindow: '设置偏移量',
          isExistPocoEle: '判断控件元素是否存在',
          isExistPocoEleNum: '判断控件元素存在个数',
          pocoClick: '点击控件元素',
          pocoLongPress: '长按控件元素',
          pocoSwipe: '拖拽控件元素',
          freezeSource: '冻结控件树',
          thawSource: '解冻控件树',
          closePocoDriver: '关闭PocoDriver',
          obtainPocoElementAttr: '获取控件属性',
          getPocoElementAttr: '验证控件属性',
          getPocoTextValue: '获取文本',
          assertPocoText: '断言文本',
          logPocoElementAttr: '日志输出控件信息',
          iteratorPocoElement: '迭代控件列表',
        },
      },
      check: {
        self: '验证操作',
        getActivity: '验证Activity',
        assert: {
          self: '自定义断言',
          assertEquals: '断言验证(相等)',
          assertNotEquals: '断言验证(不相等)',
          assertTrue: '断言验证(包含)',
          assertNotTrue: '断言验证(不包含)',
        },
      },
      img: {
        self: '图像操作',
        stepScreen: '获取截图',
        checkImage: '检测图像相似度',
        clickByImg: '图像定位并点击',
      },
      spec: {
        self: '特殊操作',
        publicStep: '公共步骤',
        runScript: '自定义脚本',
        monkey: '随机事件',
        pause: '强制等待',
      },
      settings: {
        self: '运行设置',
        stepHold: '步骤间隔设置',
        switchTouchMode: '触控模式设置',
      }, 
    },
    iOSOptions: {
      system: {
        self: '设备操作',
        rotateDevice: {
          self: '屏幕交互',
          lock: '锁定屏幕',
          unlock: '解锁屏幕',
        },
        specaction: {
          self: '特殊交互',
          siriCommand: 'Siri指令',
          sendKeyForce: '键盘输入',
          swipeByDefinedDirection: '从屏幕中央滑动距离',
        },
        interaction: {
          self: '物理交互',
          keyCode: '系统按键',
        },
        pasteboard: {
          self: '剪切板管理',
          setPasteboard: '设置文本',
          getPasteboard: '获取文本',
        },
      },
      app: {
        self: '应用操作',
        openApp: '打开应用',
        terminate: '终止应用',
        install: '安装应用',
        uninstall: '卸载应用',
        runBack: '后台运行应用',
      },
      element: {
        self: '控件元素操作',
        xcEle: {
          self: 'iOS原生控件',
          findElementInterval: '设置查找控件策略',
          isExistEle: '判断控件元素是否存在',
          isExistEleNum: '判断控件元素存在个数',
          click: '点击控件元素',
          sendKeys: '输入文本',
          sendKeysByActions: '输入文本(Actions)',
          swipe2: '拖拽控件元素',
          scrollToEle: '滚动到控件元素',
          longPress: '长按控件元素',
          clear: '清空输入框',
          obtainElementAttr: '获取控件属性',
          getElementAttr: '验证控件属性',
          getTextValue: '获取文本',
          assertText: '断言文本',
          logElementAttr: '日志输出控件信息',
          iteratorIOSElement: '迭代控件列表',
          setSnapshotMaxDepth: '设置控件获取最大遍历深度',
        },
        coordinate: {
          self: '坐标控件',
          tap: '点击坐标',
          longPressPoint: '长按坐标',
          swipe: '滑动拖拽',
        },
        poco: {
          self: 'POCO控件',
          startPocoDriver: '启动PocoDriver',
          setDefaultFindPocoElementInterval: '设置查找控件策略',
          setTheRealPositionOfTheWindow: '设置偏移量',
          isExistPocoEle: '判断控件元素是否存在',
          isExistPocoEleNum: '判断控件元素存在个数',
          pocoClick: '点击控件元素',
          pocoLongPress: '长按控件元素',
          pocoSwipe: '拖拽控件元素',
          freezeSource: '冻结控件树',
          thawSource: '解冻控件树',
          closePocoDriver: '关闭PocoDriver',
          obtainPocoElementAttr: '获取控件属性',
          getPocoElementAttr: '验证控件属性',
          getPocoTextValue: '获取文本',
          assertPocoText: '断言文本',
          logPocoElementAttr: '日志输出控件信息',
          iteratorPocoElement: '迭代控件列表',
        },
      },
      check: {
        self: '验证操作',
        assert: {
          self: 'assert',
          assertEquals: '断言验证(相等)',
          assertNotEquals: '断言验证(不相等)',
          assertTrue: '断言验证(包含)',
          assertNotTrue: '断言验证(不包含)',
        },
      },
      img: {
        self: '图像操作',
        stepScreen: '获取截图',
        checkImage: '检测图像相似度',
        clickByImg: '图像定位并点击',
      },
      spec: {
        self: '特殊操作',
        publicStep: '公共步骤',
        runScript: '自定义脚本',
        monkey: '随机事件',
        pause: '强制等待',
      },
      settings: {
        self: '运行设置',
        stepHold: '步骤间隔设置',
      },
    },
  },
  language: {
    type: '语言类型',
    english: '英文',
    simplifiedChinese: '简体中文',
  },
  logic: {
    process: '逻辑处理',
    condition: '逻辑条件',
    msgProcess: '意为该测试步骤关联的逻辑处理',
    msgSubStep: '该步骤无异常时，会执行子步骤',
    msgIf: '如果上一个if条件步骤有异常，则进入该逻辑判断，无异常时会执行子步骤',
    msgFailure: '如果以上条件全失败，则执行子步骤',
    msgRepeat: '如果条件无异常，则重复执行子步骤',
  },
  layer: '层',
  localization: '定位',
  logOutput: '日志输出',
  longPress: '长按',
  max: '最大',
  maxTries: '最大尝试',
  multiWindowMode: '多窗口模式',
  mode: '模式',
  maxDepth: '最大深度',
  maxScroll: '最多滚动',
  msg: {
    coordinate: '请选择坐标控件元素',
    text: '请输入期望包含的文本内容',
    touch: '请选择触控模式,默认为APK触控',
    poco: '请选择POCO控件元素',
    startPkgName: '请输入启动的App包名',
    stopPkgName: '请输入终止的App包名',
    installDefine: '自定义下载路径或本地安装',
    installList: '已有安装包列表安装',
    installPathInput: '请输入App下载路径或本地apk路径',
    branchName: '请输入分支名称，支持模糊匹配，可以为空',
    uninstallPkgName: '请输入卸载的App包名',
    clearAppPkgName: '请输入清空应用的App包名',
    authPkgNameInput: '请输入自动授权应用权限的App包名',
    webviewPkgName: '请输入WebView所在包名',
    processName: '（可选）请输入WebView所在进程名，不输入默认为包名',
    titleInput: '请输入Handle页面标题 或 地址 或 index下标',
    expected: '请输入期望值或选择全局变量',
    control: '请选择控件属性，可多选',
    notBeEmpty: '不能为空',
    siri: '请输入siri指令，例：what day is it today?',
    publicStep: '该项目暂未添加公共步骤',
    exception: '请选择异常处理方式',
    input: '请输入',
    select: '请选择',
  },
  msgTips: {
    variable: 'TIPS: 需要临时变量或全局变量时，可以添加',
    install:
      'TIPS: 需要先接入Jenkins插件，并确认安装包管理有对应安装包。多个符合条件的安装包优先选择最新的安装。',
    tab: 'TIPS: Handle相当于页面的Tab，切换WebView后找不到页面可以尝试切换Handle',
    androidPkgName:
      'TIPS: 传递Android应用的App包名，该步骤可实现自动授权目标App所需要的所有权限',
    focus: 'TIPS: 在文本框需要先获取焦点，才能进行输入时，使用此方式。',
    sysKey:
      'TIPS: 本功能需要先唤醒系统键盘。需要临时变量或全局变量时，可以添加', 
    table: 'TIPS: 长列表的场景下，可通过该方法连续滚动，尝试让目标元素可见',
    text: 'TIPS: 可以将获取的文本放入临时变量中',
    controlAttribute: 'TIPS: 可以将获取的控件属性放入临时变量中',
    verify: 'TIPS: 将全局变量或临时变量插入，验证时将替换该内容为变量值',
    order: 'TIPS: 默认按顺序使用SIFT特征匹配、AKAZE特征匹配和模板匹配算法',
    language:
      'TIPS: 默认语言包只有简体中文和英文，需要额外添加可以咨询管理员。',
    publicStep:
      'TIPS: 设置后从该步骤开始，后面的每个步骤都会按照设置值来间隔。',
    reference: 'TIPS: 保存后直接在步骤列表编辑脚本，关于脚本的使用，可参考',
    iteration:
      'TIPS: 用于迭代操作控件列表，子步骤中引用【当前迭代控件】以操作列表中的控件',
  },
  number: '个数',
  native: '原生',
  new: '新增',
  none: '无',
  noException: '无异常',
  offsetWidth: 'offsetWidth',
  offsetHeight: 'offsetHeight',
  openOrNot: '开启与否',
  others: '其他',
  open: '开启',
  pressSys: '按下系统 ',
  pressCoordinate: '长按坐标',
  pageScreenshot: '页面截图',
  path: '路径',
  pressTime: '长按时间',
  processName: '进程名',
  pocoControl: 'POCO控件',
  port: '端口',
  randomEventsTest: '随机事件测试',
  refreshPage: '刷新页面',
  reminderDisplay: '三个指令前端显示上保留，用于兼容老版本升级上来之后，依然能正常的显示和运行',
  reminderVersion: '大于2.5.0版本，增强的文本断言能力',
  retries: '重试次数',
  retriesInterval: '重试间隔',
  rollbackPage: '回退页面',
  scrollControl: '滚动控件',
  scrollTo: '滚动至',
  runSelfDefinedScript: '运行自定义脚本',
  scrollOrientation: '滚动方向',
  scrollNum: '滚动次数',
  slideDistance: '滑动距离',
  side: '方向',
  status: '状态',
  stepInterval: '步骤间隔',
  stepType: '步骤类型',
  stepTypeInput: '请填写步骤类型',
  screenCenter: '设备屏幕中央向',
  sendSiriCmd: '发送Siri指令',
  set: {
    to: '设置为：',
    clipboardText: '设置剪切板文本',
    maxControlTraverseDepth: '设置控件获取最大遍历深度',
    offset: '设置偏移量',
    search: '设置查找',
    textInfo: '设置的文本信息',
    textToClipboard: '设置文本至剪切板',
    stepsInterval: '步骤间隔设置',
    touchMode: '触控模式设置',
},
  swipe: '滑动',
  switch: {
    handler: '切换句柄',
    webview: '切换webview',
    mode: '切换模式',
    display: '切换显示',
  },
  singleWindowMode: '单窗口模式',
  siriCmd: 'Siri指令',
  submit: '提交',
  table: '表格',
  targetAttr: '目标属性',
  textInfo: '文本信息',
  testPkgName: '测试包名',
  touchMode: '触控模式',
  targetControl: '目标控件',
  text: '文本',
  textIdentifyInImage: '图像文字识别',
  times: '次',
  topVisible: '至顶部可见',
  use: '使用',
  usePublicSteps: '使用公共步骤',
  unknownScrollSideType: '未知滚动方向类型',
  upwards: '向上',
  userDoc: '使用文档',
  variable: '变量',
  variableName: '变量名',
  verify: {
    actualValue: '实际值',
    assert: '断言',
    assertType: '断言类型',
    contain: '包含',
    expect: '期望',
    expectContain: '期望包含',
    expectedText: '期望文本',
    existedOrNot: '存在与否',
    expectedMatchRatio: '期望匹配度',
    expectedValue: '期望值',
    existed: '存在',
    verify: '验证',
    num: '验证个数',
    equalTo: '等于',
    greaterThan: '大于',
    ignore: '忽略',
    lessThan: '小于',
    notLessThan: '大于等于',
    notGreaterThan: '小于等于',
    notEqual: '不等于',
    notContain: '不包含',
    normal: '正常',
    notIgnore: '不忽略',
    notExisted: '不存在',
    title: '验证标题',
    url: '验证网址',
    activity: '验证活动',
    unknownType: '未知类型',
  },
  waitTime: '等待时间',
  windowHeight: 'windowHeight',
  windowWidth: 'windowWidth',
  wait: '等待',
  WebviewName: 'webview名称',
};
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
    packagesTS,
    projectIndexTS,
    publicStepTS,
    resultDetailTS,
    ResultsTS,
    stepListViewTS,
    testSuitesTS,
    versionsTS,
    androidRemoteTS,
    indexIOSTS,
    settingIndexTS,
    resourceTS,
    roleTS,
    sysJobsTS,
    usersTS,
    IOSRemote,
    script,
    perf,
    steps,
    code,
    token,
    project,
    pubSteps,
    testcase,
    suite,
    element,
    stepDetail,
  },
};
