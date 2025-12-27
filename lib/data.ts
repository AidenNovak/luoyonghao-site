export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  source?: {
    title: string;
    url: string;
  };
}

export interface Company {
  name: string;
  period: string;
  description: string;
  status: string;
  sources?: SourceLink[];
}

export interface Quote {
  text: string;
  source: string;
  sourceUrl?: string;
}

export interface Product {
  name: string;
  year: string;
  description: string;
  status: string;
  source?: {
    title: string;
    url: string;
  };
}

export interface Keynote {
  date: string;
  title: string;
  location: string;
  products: string[];
  highlights: string;
  videoUrl?: string;
  sourceUrl?: string;
}

export interface SourceLink {
  title: string;
  url: string;
  platform: string; // "新闻" | "视频" | "百科" | "社交媒体"
}

export interface FinancingRound {
  round: string;
  date: string;
  amount: string;
  valuation?: string;
  investors: string[];
  leadInvestor?: string;
  description?: string;
}

export interface KeyPersonnel {
  name: string;
  position: string;
  period?: string;
  background: string;
  afterPath?: string; // 离职后去向
}

export interface CompanyDetail {
  name: string;
  period: string;
  status: string;
  description: string;
  foundingDate: string;
  registeredCapital?: string;
  businessScope?: string;
  keyPersonnel: KeyPersonnel[];
  financingHistory: FinancingRound[];
  equityStructure?: {
    shareholder: string;
    percentage?: string;
    description?: string;
  }[];
  majorEvents: {
    date: string;
    event: string;
    impact?: string;
  }[];
  financialData?: {
    year: string;
    revenue?: string;
    profit?: string;
    gmv?: string;
    [key: string]: string | undefined;
  }[];
  sources: SourceLink[];
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
  videoUrl?: string;
}

export interface Image {
  url: string;
  alt: string;
  caption?: string;
  fallback?: string;
}

// 罗永浩相关图片资源（使用公开可用的外部图片）
export const images: Image[] = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/5/50/Luo_Yonghao_in_2014.jpg",
    alt: "罗永浩2014年",
    caption: "2014年Smartisan T1发布会时期",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/3/30/Luo_Yonghao_in_2023.jpg",
    alt: "罗永浩2023年",
    caption: "2023年直播时期",
  },
];

export const profile = {
  name: "罗永浩",
  englishName: "Luo Yonghao",
  nickname: "老罗",
  birthDate: "1972年7月9日",
  birthPlace: "吉林省延边朝鲜族自治州和龙县",
  ethnicity: "朝鲜族",
  titles: ["企业家", "演说家", "作家", "直播主", "前英语教师"],
  bio: "高中辍学，曾从事多种职业：摆地摊、开羊肉串店、倒卖药材、做期货、销售电脑配件、从事文学创作。2001年至2006年在北京新东方学校任教，以幽默诙谐的教学风格闻名。后创办牛博网、老罗英语培训学校、锤子科技等。",
  // 使用更稳定的图片URL
  avatar: "https://upload.wikimedia.org/wikipedia/commons/5/50/Luo_Yonghao_in_2014.jpg",
  avatarFallback: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Ctext x='50' y='55' text-anchor='middle' font-size='40' fill='%239ca3af'%3E老罗%3C/text%3E%3C/svg%3E",
};

export const timeline: TimelineEvent[] = [
  { year: "1972", title: "出生", description: "7月9日出生于吉林省延边朝鲜族自治州和龙县", source: { title: "维基百科", url: "https://zh.wikipedia.org/zh-cn/%E7%BD%97%E6%B0%B8%E6%B5%A9" } },
  { year: "1989", title: "高二辍学", description: "高中辍学，之后从事过多种职业", source: { title: "创业邦", url: "https://m.cyzone.cn/article/681139.html" } },
  { year: "2001", title: "加入新东方", description: "自学一年英语后成为新东方教师，教学风格独特", source: { title: "维基百科", url: "https://zh.wikipedia.org/zh-cn/%E7%BD%97%E6%B0%B8%E6%B5%A9" } },
  { year: "2006", title: "创办牛博网", description: "创立博客网站牛博网，聚集了大量知名博主", source: { title: "百度百科", url: "https://baike.baidu.com/item/%E7%BD%97%E6%B0%B8%E6%B5%A9/26814" } },
  { year: "2008", title: "创办老罗英语培训", description: "离开新东方，创办自己的英语培训机构", source: { title: "百度百科", url: "https://baike.baidu.com/item/%E7%BD%97%E6%B0%B8%E6%B5%A9/26814" } },
  { year: "2012", title: "创立锤子科技", description: "5月28日宣布创立锤子科技，获7000万A轮融资", source: { title: "证券时报", url: "https://www.stcn.com/article/detail/1314477.html" } },
  { year: "2014", title: "发布Smartisan T1", description: "首款手机产品发布，获得iF设计奖", source: { title: "百度百科", url: "https://baike.baidu.com/item/%E9%94%A4%E5%AD%90%E7%A7%91%E6%8A%80" } },
  { year: "2018", title: "危机与债务", description: "锤子科技资金链断裂，欠下约6亿元债务", source: { title: "新浪财经", url: "https://finance.sina.com.cn/tech/roll/2024-08-27/doc-incmachm4118419.shtml" } },
  { year: "2018", title: "出售给字节跳动", description: "将坚果手机团队和专利以1.8亿元出售给字节跳动", source: { title: "新浪财经", url: "https://finance.sina.com.cn/tech/roll/2024-08-27/doc-incmachm4118419.shtml" } },
  { year: "2020", title: "进军直播带货", description: "4月1日抖音首播，支付GMV超1亿元", source: { title: "人民网", url: "http://paper.people.com.cn/zgjjzk/html/2020-11/15/content_2019865.htm" } },
  { year: "2022", title: "创立细红线科技", description: "11月宣布AR创业项目，获5000万美元天使轮", source: { title: "第一财经", url: "https://www.yicai.com/news/101643522.html" } },
  { year: "2024", title: "从AR转向AI", description: "细红线放弃AR眼镜，转向AI智能硬件和大模型研发", source: { title: "新浪财经", url: "https://finance.sina.com.cn/tech/shenji/2025-04-21/doc-inetwvha5331302.shtml" } },
  { year: "2025.01", title: "J1 Assistant发布", description: "在海外发布AI助理软件J1 Assistant测试版（仅Android）", source: { title: "DoNews", url: "https://www.donews.com/news/detail/1/4654574.html" } },
  { year: "2025.04", title: "硬件团队裁撤", description: "完成AI智能硬件研发后裁撤全部硬件团队，保留约20名软件工程师", source: { title: "新浪财经", url: "https://finance.sina.com.cn/tech/shenji/2025-04-21/doc-inetwvha5331302.shtml" } },
  { year: "2025.04", title: "重启招聘", description: "细红线重启招聘，招募AI产品经理、大模型算法工程师等", source: { title: "新浪财经", url: "https://finance.sina.com.cn/tech/shenji/2025-04-21/doc-inetwvha5331302.shtml" } },
  { year: "2025.12", title: "科技春晚回归", description: "宣布12月30日举办年度科技创新分享大会，将发布细红线AI软件", source: { title: "新浪科技", url: "https://finance.sina.com.cn/tech/roll/2025-12-01/doc-infzhpkm2164945.shtml" } },
];

export const companies: Company[] = [
  {
    name: "牛博网",
    period: "2006-2009",
    description: "博客网站平台，聚集了韩寒、梁文道等知名博主，后因服务器问题关闭",
    status: "已关闭",
    sources: [
      { title: "维基百科", url: "https://zh.wikipedia.org/zh-cn/%E7%BD%97%E6%B0%B8%E6%B5%A9", platform: "百科" },
      { title: "百度百科", url: "https://baike.baidu.com/item/%E7%BD%97%E6%B0%B8%E6%B5%A9/26814", platform: "百科" }
    ]
  },
  {
    name: "老罗英语培训",
    period: "2008-2014",
    description: "英语培训机构，以独特教学风格和营销方式著称",
    status: "已关闭",
    sources: [
      { title: "百度百科", url: "https://baike.baidu.com/item/%E7%BD%97%E6%B0%B8%E6%B5%A9/26814", platform: "百科" }
    ]
  },
  {
    name: "锤子科技",
    period: "2012-2019",
    description: "智能手机公司，发布Smartisan T1/T2、坚果系列手机、TNT工作站等产品。2018年资金链断裂，2019年团队被字节跳动收购",
    status: "已出售",
    sources: [
      { title: "证券时报", url: "https://www.stcn.com/article/detail/1314477.html", platform: "新闻" },
      { title: "百度百科", url: "https://baike.baidu.com/item/%E9%94%A4%E5%AD%90%E7%A7%91%E6%8A%80", platform: "百科" },
      { title: "界面新闻", url: "https://www.jiemian.com/article/3762380.html", platform: "新闻" }
    ]
  },
  {
    name: "交个朋友",
    period: "2020至今",
    description: "直播电商公司，2020年4月1日罗永浩抖音首播GMV超1亿。2023年通过世纪睿科借壳港股上市（股票代码：01450），更名为交个朋友控股",
    status: "上市",
    sources: [
      { title: "人民网", url: "http://paper.people.com.cn/zgjjzk/html/2020-11/15/content_2019865.htm", platform: "新闻" },
      { title: "新浪财经", url: "https://finance.sina.com.cn/tech/roll/2024-08-27/doc-incmachm4118419.shtml", platform: "新闻" }
    ]
  },
  {
    name: "细红线科技（Thin Red Line）",
    period: "2022至今",
    description: "AR/AI创业公司，自称'最后一次创业'。2022年获得约5000万美元天使轮融资，投后估值约2亿美元。2024年放弃AR眼镜研发转向AI，2025年1月发布J1 Assistant测试版，4月裁撤硬件团队保留20名软件工程师",
    status: "运营中",
    sources: [
      { title: "第一财经", url: "https://www.yicai.com/news/101643522.html", platform: "新闻" },
      { title: "新浪财经", url: "https://finance.sina.com.cn/tech/shenji/2025-04-21/doc-inetwvha5331302.shtml", platform: "新闻" },
      { title: "DoNews", url: "https://www.donews.com/news/detail/1/4654574.html", platform: "新闻" }
    ]
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
  sourceLinks: [
    { title: "新浪财经", url: "https://finance.sina.com.cn/tech/roll/2024-08-27/doc-incmachm4118419.shtml", platform: "新闻" },
    { title: "澎湃新闻", url: "https://m.thepaper.cn/newsDetail_forward_28529240", platform: "新闻" },
    { title: "36氪", url: "https://m.36kr.com/p/3140769299356160", platform: "新闻" },
    { title: "上海日报", url: "https://www.jfdaily.com/news/detail?id=987132", platform: "新闻" }
  ]
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
    videoUrl: "https://v.youku.com/v_show/id_XNzYzMzc4OTQ0.html"
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
  sources: [
    { title: "新浪科技", url: "https://finance.sina.com.cn/tech/roll/2025-08-12/doc-infksqyi9000795.shtml", platform: "新闻" },
    { title: "36氪", url: "https://m.36kr.com/p/3433170489642369", platform: "新闻" },
    { title: "界面新闻", url: "https://m.jiemian.com/article/13165523.html", platform: "新闻" }
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
      videoUrl: "https://www.bilibili.com/video/BV1KQedYZEDg/"
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
      videoUrl: "https://www.bilibili.com/video/BV1jTedzREds/"
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
      videoUrl: "https://space.bilibili.com/352730124"
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

// 2025年度科技创新分享大会（12月30日）
export const techConference2025 = {
  title: "罗永浩的十字路口·2025年度科技创新分享大会",
  subtitle: "时隔七年'科技春晚'回归",
  date: "2025年12月30日 19:00-22:00",
  location: "上海西岸国际会展中心",
  ticketInfo: {
    prices: ["300元", "400元", "500元", "600元", "800元", "1000元"],
    totalTickets: "约3350张",
    saleDate: "12月22日12:00",
    salePlatform: "大麦App",
    status: "开售2小时售罄",
    note: "实名制购票，不支持退票和选座，门票收入全部用于公益"
  },
  description: "这不是带货直播，而是真正的科技创新分享大会。将展示约十几个中国创新型科技产品，软件和硬件各占一半，聚焦那些还未完全走入大众视野的创新项目。",
  highlights: [
    "正式发布细红线科技研发的AI软件",
    "介绍约10-15个中国科技创新产品",
    "软件和硬件产品各占一半",
    "线下发布+线上直播形式",
    "门票收入全部用于公益"
  ],
  significance: "被视为罗永浩时隔七年后的''科技春晚''回归，上一次如此规模的发布会是2018年的鸟巢TNT发布会",
  sources: [
    { title: "新浪科技", url: "https://finance.sina.com.cn/tech/roll/2025-12-01/doc-infzhpkm2164945.shtml", platform: "新闻" },
    { title: "IT之家", url: "https://www.ithome.com/0/906/302.htm", platform: "新闻" },
    { title: "雷锋网", url: "https://www.leikeji.com/article/73558", platform: "新闻" },
    { title: "澎湃新闻", url: "https://m.thepaper.cn/newsDetail_forward_32101581", platform: "新闻" }
  ]
};

// 细红线科技2025年动态
export const thinRedLine2025 = {
  sources: [
    { title: "新浪财经", url: "https://finance.sina.com.cn/tech/shenji/2025-04-21/doc-inetwvha5331302.shtml", platform: "新闻" },
    { title: "21世纪经济报道", url: "https://www.21jingji.com/article/20250311/herald/353bf8c22af73815bcbb612d685191c8.html", platform: "新闻" },
    { title: "DoNews", url: "https://www.donews.com/news/detail/1/4654574.html", platform: "新闻" },
    { title: "猎云网", url: "https://www.iyiou.com/analysis/202412241086398", platform: "新闻" }
  ],
  timeline: [
    {
      date: "2024年",
      event: "战略转型",
      description: "放弃AR智能眼镜类产品研发，转向AI智能硬件和AI大模型研发"
    },
    {
      date: "2025年1月",
      event: "J1 Assistant发布",
      description: "在海外低调上线J1 Assistant测试版，仅支持Android平台。聚合To Do、Notes、AI搜索、短信发送等功能，采用''涟漪触控''交互设计"
    },
    {
      date: "2025年1月",
      event: "硬件筹备完成",
      description: "完成AI智能硬件研发，为后续JARVIS ONE硬件做准备"
    },
    {
      date: "2025年4月",
      event: "硬件团队裁撤",
      description: "完成AI智能硬件研发后，裁撤全部硬件团队，仅保留约20名软件工程师负责AI软件产品研发和打磨"
    },
    {
      date: "2025年4月",
      event: "重启招聘",
      description: "发布春季招聘信息，招募AI产品经理、大模型算法工程师等人才，重启AI赛道布局"
    },
    {
      date: "2025年12月",
      event: "年度大会",
      description: "宣布12月30日举办年度科技创新分享大会，将正式发布细红线AI软件"
    }
  ],
  j1Assistant: {
    name: "J1 Assistant",
    type: "AI助理软件",
    platform: "Android（海外测试版）",
    status: "测试中",
    features: [
      "To Do - 智能待办事项管理",
      "Notes - 锤子便签加强版",
      "Jarvis - 核心AI搜索功能",
      "Messages - 短信发送功能",
      "Search - 传统搜索+AI搜索"
    ],
    highlights: "语音输入为核心交互方式，内置Agent能力，能理解复杂语音指令并执行操作"
  },
  upcoming: {
    hardware: "JARVIS ONE",
    description: "AI原生硬件设备，官网已预告但尚未发布"
  }
};

// ===== 公司详细报告 =====

// 锤子科技详细报告
export const hammerTechDetail: CompanyDetail = {
  name: "锤子科技（Smartisan Technology）",
  period: "2012-2019",
  status: "已出售给字节跳动",
  description: "智能手机公司，以设计驱动产品理念著称。发布Smartisan T1/T2、坚果系列手机、TNT工作站等产品。2018年资金链断裂，2019年将坚果手机团队和专利以1.8亿元出售给字节跳动。",
  foundingDate: "2012年5月28日",
  registeredCapital: "约3100万元人民币",
  businessScope: "智能手机、操作系统、智能硬件研发",
  keyPersonnel: [
    {
      name: "罗永浩",
      position: "创始人、董事长、CEO",
      period: "2012-2019",
      background: "前新东方英语教师，牛博网、老罗英语培训创始人",
      afterPath: "创立细红线科技"
    },
    {
      name: "吴德周",
      position: "CTO、硬件研发副总裁",
      period: "2016-2019",
      background: "前华为荣耀产品线总经理，2015年加入锤子科技",
      afterPath: "加入字节跳动，任新石实验室总裁"
    },
    {
      name: "钱晨",
      position: "CTO",
      period: "2013-2015",
      background: "前摩托罗拉资深工程师",
      afterPath: "离开锤子科技"
    },
    {
      name: "朱海舟",
      position: "产品总监",
      period: "2016-2019",
      background: "前科技媒体人，负责Smartisan OS产品",
      afterPath: "加入字节跳动"
    },
    {
      name: "肖鹏",
      position: "软件研发副总裁",
      period: "2014-2019",
      background: "前台湾仁宝科技软件高管",
      afterPath: "加入字节跳动"
    }
  ],
  financingHistory: [
    {
      round: "天使轮",
      date: "2012年",
      amount: "未披露",
      valuation: "未披露",
      investors: ["个人投资者"],
      description: "罗永浩自筹资金启动"
    },
    {
      round: "A轮",
      date: "2013年12月",
      amount: "7000万元人民币",
      valuation: "约4.7亿元人民币",
      investors: ["紫辉创投(4000万)", "陌陌科技"],
      leadInvestor: "紫辉创投",
      description: "唐岩介绍郑刚投资，紫辉创投领投4000万"
    },
    {
      round: "B轮",
      date: "2014年4月",
      amount: "1.8亿元人民币",
      valuation: "约10亿元人民币",
      investors: ["紫辉创投", "其他机构"],
      leadInvestor: "紫辉创投",
      description: "紫辉创投继续跟投，累计投资达1亿元"
    },
    {
      round: "C轮",
      date: "2015年6月",
      amount: "未披露",
      valuation: "约26.5亿元人民币",
      investors: ["未披露"],
      description: "估值达到高峰"
    },
    {
      round: "D轮",
      date: "2017年",
      amount: "约6亿元人民币",
      valuation: "未披露",
      investors: ["成都市政府(3亿股权+3亿债权)", "私募基金(3-4亿)"],
      leadInvestor: "成都市政府",
      description: "成都政府战略投资，公司迁至成都"
    }
  ],
  majorEvents: [
    { date: "2012.05", event: "锤子科技成立", impact: "罗永浩宣布进入智能手机行业" },
    { date: "2013.03", event: "Smartisan OS发布会", impact: "首次展示基于Android的深度定制系统" },
    { date: "2014.05", event: "Smartisan T1发布", impact: "首款手机，获iF设计金奖" },
    { date: "2014.07", event: "与王自如辩论", impact: "3小时直播辩论，引发广泛关注" },
    { date: "2016.10", event: "M1/M1L发布会", impact: "发布BigBang、OneStep等创新功能" },
    { date: "2017.05", event: "坚果Pro发布", impact: "销量回暖，被称为"起死回生"之作" },
    { date: "2018.05", event: "鸟巢TNT发布会", impact: "定价9999元的TNT工作站争议巨大" },
    { date: "2018.11", event: "成都公司裁员", impact: "资金链断裂，裁员约100人" },
    { date: "2019.01", event: "部分资产出售字节跳动", impact: "字节跳动收购锤子科技部分专利和团队" },
    { date: "2019", event: "罗永浩离开", impact: "罗永浩专注还债和新创业" }
  ],
  financialData: [
    { year: "2012", revenue: "0", profit: "亏损", description: "初创期" },
    { year: "2013", revenue: "未披露", profit: "亏损", description: "产品研发期" },
    { year: "2014", revenue: "约10万部", profit: "亏损", description: "T1销量不佳" },
    { year: "2015", revenue: "未披露", profit: "亏损", description: "T2销量平平" },
    { year: "2016", revenue: "未披露", profit: "亏损", description: "M1系列" },
    { year: "2017", revenue: "未披露", profit: "减亏", description: "坚果Pro系列销量回暖" },
    { year: "2018", revenue: "大幅下降", profit: "资金链断裂", description: "危机爆发" }
  ],
  sources: [
    { title: "证券时报", url: "https://www.stcn.com/article/detail/1314477.html", platform: "新闻" },
    { title: "界面新闻", url: "https://www.jiemian.com/article/3762380.html", platform: "新闻" },
    { title: "人民网", url: "http://capital.people.com.cn/n1/2017/0811/c405954-29464098.html", platform: "新闻" },
    { title: "南方都市报", url: "https://m.mp.oeeee.com/a/BAAFRD000020230109755717.html", platform: "新闻" },
    { title: "创业邦", url: "https://m.cyzone.cn/article/711579", platform: "新闻" }
  ]
};

// 交个朋友详细报告
export const jiaogePengyouDetail: CompanyDetail = {
  name: "交个朋友控股（Be Friends Holding，股票代码：01450.HK）",
  period: "2020至今",
  status: "港股上市",
  description: "直播电商公司，2020年4月1日罗永浩抖音首播GMV超1亿。2023年通过世纪睿科借壳港股上市。目前已成为跨平台直播电商龙头。",
  foundingDate: "2020年4月",
  registeredCapital: "港币上市公司",
  businessScope: "直播电商、MCN服务、品牌营销",
  keyPersonnel: [
    {
      name: "罗永浩",
      position: "联合创始人、前主播",
      period: "2020-2022",
      background: "锤子科技创始人",
      afterPath: "创立细红线科技，逐步退出直播"
    },
    {
      name: "李钧",
      position: "实际控制人、董事长",
      period: "2023至今",
      background: "世纪睿科创始人",
      description: "33岁，通过世纪睿科完成对交个朋友的收购"
    },
    {
      name: "黄贺",
      position: "创始人、总经理",
      period: "2020至今",
      background: "罗永浩前同事，交个朋友核心运营",
      description: "负责公司日常运营"
    }
  ],
  financingHistory: [
    {
      round: "天使轮",
      date: "2020年初",
      amount: "未披露",
      investors: ["未披露"],
      description: "罗永浩与黄贺等人创立"
    },
    {
      round: "战略投资",
      date: "2021-2022",
      amount: "未披露",
      investors: ["机构投资者"],
      description: "多轮融资"
    },
    {
      round: "借壳上市",
      date: "2023年5月",
      amount: "约1亿港元",
      valuation: "约30亿港元",
      investors: ["世纪睿科"],
      leadInvestor: "世纪睿科",
      description: "世纪睿科收购交个朋友100%股权，完成借壳"
    }
  ],
  equityStructure: [
    { shareholder: "李钧（一致行动人）", percentage: "约50%", description: "实际控制人" },
    { shareholder: "罗永浩", percentage: "已退出", description: "逐步退出持股" },
    { shareholder: "黄贺", percentage: "未披露", description: "创始人之一" },
    { shareholder: "公众股东", percentage: "约50%", description: "港股流通股" }
  ],
  majorEvents: [
    { date: "2020.04.01", event: "抖音首播", impact: "支付GMV超1亿元，创抖音记录" },
    { date: "2020.09", event: "宣布还债4亿元", impact: "直播收入主要用于还债" },
    { date: "2022.06", event: "罗永浩退出管理层", impact: "逐步减少直播场次" },
    { date: "2023.05", event: "世纪睿科更名", impact: "港股01450更名为交个朋友控股" },
    { date: "2023.07", event: "正式更名完成", impact: "借壳上市完成" },
    { date: "2024", event: "全年GMV约120亿元", impact: "成为头部直播电商机构" }
  ],
  financialData: [
    { year: "2020", gmv: "未披露", revenue: "未披露", description: "首年运营" },
    { year: "2021", gmv: "约50亿元", revenue: "未披露", description: "快速增长" },
    { year: "2022", gmv: "未披露", revenue: "约1.37亿元(H1)", description: "上半年收入" },
    { year: "2023", gmv: "约120亿元", revenue: "10.7亿元", profit: "1.8亿元(调整后)", description: "营收同比增长152%" },
    { year: "2024", gmv: "约120亿元+", revenue: "预计增长", description: "业务稳定" }
  ],
  sources: [
    { title: "证券时报", url: "https://www.stcn.com/article/detail/863325.html", platform: "新闻" },
    { title: "新浪财经", url: "https://finance.sina.cn/stock/ssgs/2023-07-14/detail-imzasfim8141158.d.html?vt=4", platform: "新闻" },
    { title: "17173新闻", url: "http://news.17173.com/content/03292024/093007571.shtml", platform: "新闻" },
    { title: "时代周报", url: "https://i.ifeng.com/c/8PjfIK0cg74", platform: "新闻" },
    { title: "每经网", url: "https://m.mp.oeeee.com/a/BAAFRD000020230510795788.html", platform: "新闻" }
  ]
};

// 细红线科技详细报告
export const thinRedLineDetail: CompanyDetail = {
  name: "细红线科技（Thin Red Line）",
  period: "2022至今",
  status: "运营中",
  description: "AR/AI创业公司，罗永浩自称"最后一次创业"。2022年获得约5000万美元天使轮融资，投后估值约2亿美元。2024年放弃AR眼镜转向AI，2025年1月发布J1 Assistant测试版。",
  foundingDate: "2022年",
  registeredCapital: "未披露",
  businessScope: "AR/AI软硬件研发、大模型应用",
  keyPersonnel: [
    {
      name: "罗永浩",
      position: "创始人、CEO",
      period: "2022至今",
      background: "锤子科技创始人，交个朋友联合创始人",
      description: "全程主导产品和战略"
    },
    {
      name: "朱拥华",
      position: "董事（美团龙珠代表）",
      period: "2022至今",
      background: "美团龙珠创始合伙人",
      description: "代表投资方美团出任董事"
    }
  ],
  financingHistory: [
    {
      round: "天使轮",
      date: "2022年11月",
      amount: "约5000万美元（3.57亿元人民币）",
      valuation: "约2亿美元（14.28亿元人民币）",
      investors: ["美团龙珠", "蓝驰创投", "联想创投", "经纬创投", "大疆创新", "ATM Capital", "黎万强", "吴泳铭"],
      leadInvestor: "美团龙珠",
      description: "九家机构合投，美团龙珠领投"
    }
  ],
  equityStructure: [
    { shareholder: "罗永浩", percentage: "预计50%+", description: "创始人控股" },
    { shareholder: "美团龙珠", percentage: "未披露", description: "领投方，占有董事席位" },
    { shareholder: "其他投资机构", percentage: "未披露", description: "蓝驰、经纬、联想等" }
  ],
  majorEvents: [
    { date: "2022.10", event: "AR项目曝光", impact: "媒体报道获天使轮融资" },
    { date: "2022.11", event: "正式官宣", impact: "完成5000万美元天使轮融资" },
    { date: "2023.01", event: "投资人纠纷", impact: "郑刚公开指责罗永浩补偿方案" },
    { date: "2024年", event: "战略转型", impact: "从AR转向AI智能硬件和大模型" },
    { date: "2025.01", event: "J1 Assistant发布", impact: "海外测试版上线" },
    { date: "2025.04", event: "硬件团队裁撤", impact: "保留20名软件工程师" },
    { date: "2025.12", event: "年度大会", impact: "将发布AI软件产品" }
  ],
  financialData: [
    { year: "2022", revenue: "0", profit: "研发投入", description: "初创期，获天使轮融资" },
    { year: "2023", revenue: "0", profit: "研发投入", description: "产品研发期" },
    { year: "2024", revenue: "0", profit: "研发投入", description: "战略转型期" },
    { year: "2025", revenue: "预计0", profit: "持续投入", description: "产品测试中" }
  ],
  sources: [
    { title: "新浪财经", url: "https://finance.sina.com.cn/chanjing/gsnews/2022-11-25/doc-imqmmthc5885106.shtml", platform: "新闻" },
    { title: "证券时报", url: "https://www.stcn.com/article/detail/738631.html", platform: "新闻" },
    { title: "21世纪经济报道", url: "http://www.21jingji.com/article/20221128/herald/1c2833b0a3e420b99810eec333a0a9ae.html", platform: "新闻" },
    { title: "36氪", url: "https://m.36kr.com/p/1966116394716040", platform: "新闻" },
    { title: "IT之家", url: "https://www.ithome.com/0/648/011.htm", platform: "新闻" },
    { title: "第一财经", url: "https://www.yicai.com/news/101643522.html", platform: "新闻" }
  ]
};

// 导出所有公司详情
export const companyDetails: CompanyDetail[] = [
  hammerTechDetail,
  jiaogePengyouDetail,
  thinRedLineDetail
];
