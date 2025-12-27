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
