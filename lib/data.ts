export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Company {
  name: string;
  period: string;
  description: string;
  status: string;
}

export interface Quote {
  text: string;
  source: string;
}

export interface Product {
  name: string;
  year: string;
  description: string;
  status: string;
}

export interface Keynote {
  date: string;
  title: string;
  location: string;
  products: string[];
  highlights: string;
  videoUrl?: string;
}

export interface PodcastEpisode {
  episode: string;
  title: string;
  guest: string;
  guestTitle: string;
  releaseDate: string;
  duration: string;
  platform: string;
  description: string;
}

export const profile = {
  name: "罗永浩",
  englishName: "Luo Yonghao",
  nickname: "老罗",
  birthDate: "1972年7月9日",
  birthPlace: "吉林省延边朝鲜族自治州和龙县",
  ethnicity: "朝鲜族",
  titles: ["企业家", "演说家", "作家", "直播主", "前英语教师"],
  bio: "高中辍学，曾从事多种职业：摆地摊、开羊肉串店、倒卖药材、做期货、销售电脑配件、从事文学创作。2001年至2006年在北京新东方学校任教，以幽默诙谐的教学风格闻名。后创办牛博网、老罗英语培训学校、锤子科技等。",
};

export const timeline: TimelineEvent[] = [
  { year: "1972", title: "出生", description: "7月9日出生于吉林省延边朝鲜族自治州和龙县" },
  { year: "1989", title: "高二辍学", description: "高中辍学，之后从事过多种职业" },
  { year: "2001", title: "加入新东方", description: "自学一年英语后成为新东方教师，教学风格独特" },
  { year: "2006", title: "创办牛博网", description: "创立博客网站牛博网，聚集了大量知名博主" },
  { year: "2008", title: "创办老罗英语培训", description: "离开新东方，创办自己的英语培训机构" },
  { year: "2012", title: "创立锤子科技", description: "5月28日宣布创立锤子科技，获7000万A轮融资" },
  { year: "2014", title: "发布Smartisan T1", description: "首款手机产品发布，获得iF设计奖" },
  { year: "2018", title: "危机与债务", description: "锤子科技资金链断裂，欠下约6亿元债务" },
  { year: "2018", title: "出售给字节跳动", description: "将坚果手机团队和专利以1.8亿元出售给字节跳动" },
  { year: "2020", title: "进军直播带货", description: "4月1日抖音首播，支付GMV超1亿元" },
  { year: "2022", title: "创立细红线科技", description: "11月宣布AR创业项目，获5000万美元天使轮" },
  { year: "2024", title: "转型AI", description: "细红线从AR转向AI，发布J1 Assistant" },
  { year: "2025", title: "AI硬件筹备", description: "筹备发布JARVIS ONE AI硬件产品" },
];

export const companies: Company[] = [
  {
    name: "牛博网",
    period: "2006-2009",
    description: "博客网站平台，聚集了韩寒、梁文道等知名博主，后因服务器问题关闭",
    status: "已关闭"
  },
  {
    name: "老罗英语培训",
    period: "2008-2014",
    description: "英语培训机构，以独特教学风格和营销方式著称",
    status: "已关闭"
  },
  {
    name: "锤子科技",
    period: "2012-2019",
    description: "智能手机公司，发布Smartisan T1/T2、坚果系列手机、TNT工作站等产品。2018年资金链断裂，2019年团队被字节跳动收购",
    status: "已出售"
  },
  {
    name: "交个朋友",
    period: "2020至今",
    description: "直播电商公司，2020年4月1日罗永浩抖音首播GMV超1亿。2023年通过世纪睿科借壳港股上市（股票代码：01450），更名为交个朋友控股",
    status: "上市"
  },
  {
    name: "细红线科技（Thin Red Line）",
    period: "2022至今",
    description: "AR/AI创业公司，自称'最后一次创业'。2022年获得约5000万美元天使轮融资，投后估值约2亿美元。2024年从AR转向AI，发布J1 Assistant软件产品",
    status: "运营中"
  },
];

export const products: Product[] = [
  { name: "Smartisan T1", year: "2014", description: "锤子科技首款手机，获得iF设计金奖", status: "已停产" },
  { name: "Smartisan T2", year: "2015", description: "全金属中框设计，支持全网通", status: "已停产" },
  { name: "坚果U1", year: "2015", description: "千元机系列首款产品", status: "已停产" },
  { name: "Smartisan M1/M1L", year: "2016", description: "配置升级，新增One Step功能", status: "已停产" },
  { name: "坚果Pro", year: "2017", description: "颜值回归，大电池长续航", status: "已停产" },
  { name: "坚果Pro 2", year: "2017", description: "隐藏式指纹识别，全面屏设计", status: "已停产" },
  { name: "坚果R1", year: "2018", description: "旗舰手机，搭配TNT工作站发布", status: "已停产" },
  { name: "坚果TNT工作站", year: "2018", description: "桌面级系统，语音交互为主，争议较大", status: "未量产" },
  { name: "坚果Pro 3", year: "2019", description: "字节跳动收购后首款产品", status: "已停产" },
  { name: "坚果R2", year: "2020", description: "5G旗舰，最后一代坚果手机", status: "已停产" },
  { name: "J1 Assistant", year: "2025", description: "AI助手软件，融合语音、笔记、Todo、AI搜索", status: "海外测试" },
  { name: "JARVIS ONE", year: "筹备中", description: "AI原生硬件设备", status: "未发布" },
];

export const quotes: Quote[] = [
  { text: "彪悍的人生不需要解释。", source: "老罗语录" },
  { text: "我不是为了输赢，我就是认真。", source: "Smartisan T1发布会" },
  { text: "通往成功的路上，注定是孤独的。", source: "演讲" },
  { text: "做你想做的，做你该做的，不要为了怕被利用而选择不作为。", source: "维基语录" },
  { text: "希望那些喜欢用'枪打出头鸟'这样的道理教训年轻人的中国人有一天能够明白：事实上，所有的鸟儿都已经被打下来了，那些不出头的鸟儿只是因为没被看见而已。", source: "维基语录" },
  { text: "我们是改变世界的，我们的使命是让世界变得更好。", source: "锤子科技理念" },
  { text: "在这个世界上，不管东方还是西方，一个男人到了三十岁一事无成，总会感受到一些异样的眼光。", source: "演讲" },
  { text: "永远年轻，永远热泪盈眶。", source: "引用凯鲁亚克，常用语" },
  { text: "在这个时代，真正牛逼的人，是那些能够改变世界的人。", source: "演讲" },
  { text: "我知道有些鸟儿是关不住的，因为他们的羽毛太丰润了。", source: "引用《肖申克的救赎》" },
];

export const debtInfo = {
  totalDebt: "约13亿元（后期统计）",
  initialDebt: "约6亿元（2018年）",
  paidAmount: "8.24亿元（截至2024年）",
  remainingAmount: "约5亿元",
  sources: [
    { source: "直播电商税后收入", amount: "5.48亿元" },
    { source: "字节跳动收购", amount: "1.8亿元" },
    { source: "锤子科技资产处置", amount: "约1亿元" },
  ],
  timeline: [
    { date: "2018", event: "锤子科技资金链断裂，欠下约6亿元债务" },
    { date: "2020.04", event: "开始直播带货还债" },
    { date: "2020.09", event: "宣布已还债4亿元" },
    { date: "2022.06", event: "宣布6亿债务已还清，退出交个朋友管理层" },
    { date: "2024.08", event: "披露债务总额13亿，已还8.24亿，剩余5亿多" },
    { date: "2024.09", event: "在脱口秀节目提及还债进展" },
  ],
};

export const books = [
  { title: "《我的奋斗》", year: "2009", description: "演讲实录，记录了早期创业经历" },
  { title: "《生命不息，折腾不止》", year: "2014", description: "演讲合集，分享人生感悟" },
  { title: "《创业在路上》", year: "2018", description: "创业心得与思考" },
];

export const keynotes: Keynote[] = [
  {
    date: "2013.03.27",
    title: "Smartisan OS 发布会",
    location: "国家会议中心",
    products: ["Smartisan OS"],
    highlights: "罗永浩首次亮相，发布基于Android的Smartisan OS系统，展示九宫格、九/十六宫格等创新UI设计",
  },
  {
    date: "2014.05.20",
    title: "Smartisan T1 发布会",
    location: "国家会议中心",
    products: ["Smartisan T1"],
    highlights: "首款手机产品，号称'东半球最好用的智能手机'，后因广告法改为'全球第二好用的智能手机'。获iF设计金奖",
  },
  {
    date: "2014.07.28",
    title: "Smartisan T1 增强版发布会",
    location: "北京",
    products: ["Smartisan T1 4G增强版"],
    highlights: "推出支持4G网络的增强版，降价策略引发争议",
  },
  {
    date: "2014.08.27",
    title: "罗永浩对质王自如",
    location: "优酷直播",
    products: [],
    highlights: "与Zealer创始人王自如进行直播辩论，全程3小时25分钟，引发网络热议",
  },
  {
    date: "2015.08.25",
    title: "坚果手机发布会",
    location: "上海梅赛德斯-奔驰文化中心",
    products: ["坚果U1"],
    highlights: "推出千元机系列，文艺青年定位，'漂亮得不像实力派'",
  },
  {
    date: "2015.12.29",
    title: "Smartisan T2 发布会",
    location: "北京",
    products: ["Smartisan T2"],
    highlights: "全金属中框设计，取消电源键，指纹识别与 Home 键整合",
  },
  {
    date: "2016.10.18",
    title: "Smartisan M1/M1L 发布会",
    location: "上海梅赛德斯-奔驰文化中心",
    products: ["Smartisan M1", "Smartisan M1L"],
    highlights: "引入One Step、Big Bang等功能，'语音输入'速度超越人类极限",
  },
  {
    date: "2017.05.09",
    title: "坚果Pro 发布会",
    location: "北京工业大学奥林匹克体育馆",
    products: ["坚果Pro"],
    highlights: "''颜值''回归，细红线 Home 键设计，''这可能是东半球最好用的手机''",
  },
  {
    date: "2017.11.07",
    title: "坚果Pro 2 发布会",
    location: "成都大魔方演艺中心",
    products: ["坚果Pro 2"],
    highlights: "隐藏式指纹识别，全面屏设计，''谦虚的手机''",
  },
  {
    date: "2018.04.09",
    title: "坚果3 发布会",
    location: "北京工业大学奥林匹克体育馆",
    products: ["坚果3"],
    highlights: "千元全面屏手机，''只有百分之几的疯子才会购买''",
  },
  {
    date: "2018.05.15",
    title: "坚果R1 & TNT工作站发布会",
    location: "国家体育场（鸟巢）",
    products: ["坚果R1", "坚果TNT工作站"],
    highlights: "鸟巢发布会，TNT工作站定义为''重新定义下一个十年的个人电脑''，售价9999元。罗永浩称''这是坚果历史上规模最大的一场发布会''",
  },
  {
    date: "2018.08.20",
    title: "坚果Pro 2S 发布会",
    location: "北京宝格丽酒店",
    products: ["坚果Pro 2S"],
    highlights: "''次世代''手机，搭载骁龙710，加入''子弹短信''功能",
  },
  {
    date: "2018.11.06",
    title: "坚果R2 & TNT go 发布会",
    location: "成都",
    products: ["坚果TNT go"],
    highlights: "发布便携式TNT显示器，可连接坚果手机使用",
  },
  {
    date: "2019.10.31",
    title: "坚果Pro 3 发布会",
    location: "北京工业大学奥林匹克体育馆",
    products: ["坚果Pro 3"],
    highlights: "字节跳动收购后首款产品，''我们回来了''",
  },
  {
    date: "2020.10.20",
    title: "坚果R2 发布会",
    location: "北京",
    products: ["坚果R2", "坚果TNT go", "Smartisan TNT OS 2.0"],
    highlights: "5G旗舰，最后一代坚果手机，售价4499元起",
  },
];

export const podcast = {
  title: "罗永浩的十字路口",
  description: "深度人物访谈播客，每期时长3-5小时，以''人生复盘会''形式呈现。从嘉宾童年经历切入，回溯关键人生选择与转折，探讨科技、人文、世界、时代以及人生所有的十字路口。",
  platforms: [
    { name: "B站", url: "https://space.bilibili.com/352730124", icon: "B站" },
    { name: "小宇宙", url: "https://www.xiaoyuzhoufm.com/podcast/68981df29e7bcd326eb91d88", icon: "小宇宙" },
    { name: "喜马拉雅", url: "https://www.ximalaya.com/", icon: "喜马拉雅" },
  ],
  episodes: [
    {
      episode: "Vol.01",
      title: "罗永浩的十字路口：李想",
      guest: "李想",
      guestTitle: "理想汽车创始人",
      releaseDate: "2025.08.19",
      duration: "约4小时",
      platform: "B站",
      description: "首期节目，与理想汽车创始人李想深度对话，聊童年、创业历程、人生选择，''一个啥都敢问，一个啥都敢说''",
    },
    {
      episode: "Vol.02",
      title: "罗永浩的十字路口：何小鹏",
      guest: "何小鹏",
      guestTitle: "小鹏汽车董事长",
      releaseDate: "2025.08.26",
      duration: "约4小时",
      platform: "B站",
      description: "与小鹏汽车董事长何小鹏对谈，探讨新能源汽车创业、人生抉择、时代机遇",
    },
    {
      episode: "Vol.03",
      title: "罗永浩的十字路口：影视飓风",
      guest: "影视飓风",
      guestTitle: "影视博主",
      releaseDate: "2025.09",
      duration: "约3小时",
      platform: "B站",
      description: "与知名影视博主对话，探讨内容创作、媒体行业变迁",
    },
    {
      episode: "Vol.04",
      title: "罗永浩的十字路口",
      guest: "待公布",
      guestTitle: "",
      releaseDate: "更新中",
      duration: "",
      platform: "",
      description: "持续更新中，将邀请科技、人文、商业等领域代表性人物",
    },
  ],
};
