export const TIERS = [
  {
    id: 'free',
    name: '免费版',
    price: 0,
    period: '永久免费',
    description: '体验核心 GEO 能力，适合个人尝鲜',
    monthlyCredits: 0,
    dailyCredits: 10,
    popular: false,
    color: 'slate',
    cta: '当前方案',
  },
  {
    id: 'starter',
    name: '入门版',
    price: 99,
    period: '/月',
    description: '小团队起步，覆盖日常监测需求',
    monthlyCredits: 500,
    dailyCredits: 30,
    popular: false,
    color: 'blue',
    cta: '立即购买',
  },
  {
    id: 'pro',
    name: '进阶版',
    price: 299,
    period: '/月',
    description: '成长型品牌首选，高频监测无忧',
    monthlyCredits: 2000,
    dailyCredits: 80,
    popular: true,
    color: 'indigo',
    cta: '立即购买',
  },
  {
    id: 'advanced',
    name: '高阶版',
    price: 699,
    period: '/月',
    description: '企业级深度监控，长周期追踪',
    monthlyCredits: 6000,
    dailyCredits: 200,
    popular: false,
    color: 'violet',
    cta: '立即购买',
  },
  {
    id: 'supreme',
    name: '至尊版',
    price: 1999,
    period: '/月',
    description: '全功能无限制，大客户专属方案',
    monthlyCredits: 20000,
    dailyCredits: 500,
    popular: false,
    color: 'amber',
    cta: '立即购买',
  },
]

export const HIGHLIGHTS = [
  {
    icon: '🔍',
    title: '洞察先机',
    subtitle: 'AI 问题挖掘',
    description: '实时捕获用户在 AI 端搜索的核心痛点，精准定位蓝海关键词。',
  },
  {
    icon: '📊',
    title: '实时排名',
    subtitle: 'GEO 排名与得分',
    description: '全网首创多模型、长周期 AI 回答排名追踪，量化品牌在生成式大模型中的综合权重。',
  },
  {
    icon: '🔗',
    title: '链路安全',
    subtitle: 'GEO 推广链接检测',
    description: '自动化检测 AI 生成文本中的品牌链接留存率与合规性，防止流量流失。',
  },
  {
    icon: '📋',
    title: '极速交付',
    subtitle: '无水印报告',
    description: '支持一键导出无水印、专业级数据报表，轻松应对企业汇报与大客户提案。',
  },
]

export const FEATURE_ROWS = [
  {
    category: '积分权益',
    features: [
      {
        name: '每月一次性赠送积分',
        tip: '购买后一次性到账，与会员周期同步（约30天），到期清零',
        values: ['—', '500', '2,000', '6,000', '20,000'],
      },
      {
        name: '每日赠送积分',
        tip: '每天 0:00 自动发放，当天 24:00 未用完清零',
        values: ['10', '30', '80', '200', '500'],
      },
    ],
  },
  {
    category: 'AI 问题挖掘',
    features: [
      {
        name: '免费查询次数 / 月',
        tip: '超出后按 10 积分/次 消耗，积分不设使用上限',
        values: ['10 次', '50 次', '200 次', '800 次', '不限'],
      },
    ],
  },
  {
    category: 'GEO 排名查询',
    features: [
      {
        name: '豆包 / 文心 免费查询 / 模型 / 月',
        tip: '超出后按 15×15 积分/问题/模型 消耗',
        values: ['各 1 次', '各 5 次', '各 20 次', '各 80 次', '不限'],
      },
      {
        name: '支持监控模型数',
        tip: '豆包、文心一言、DeepSeek 等',
        values: ['2 个', '3 个', '5 个', '全部', '全部'],
      },
    ],
  },
  {
    category: '品牌得分查询',
    features: [
      {
        name: '免费查询次数 / 月',
        tip: '超出后按 15×15×天数×模型数 积分/次',
        values: ['—', '2 次', '10 次', '40 次', '不限'],
      },
      {
        name: '默认监控天数',
        values: ['—', '7 天', '15 天', '15 天', '30 天'],
      },
    ],
  },
  {
    category: 'GEO 推广链接检测',
    features: [
      {
        name: '免费检测次数 / 月',
        tip: '超出后按 15×15×模型数 积分/次',
        values: ['—', '2 次', '10 次', '40 次', '不限'],
      },
    ],
  },
  {
    category: 'GEO 排名检测',
    features: [
      {
        name: '免费检测次数 / 月',
        tip: '超出后按 15×15×天数×模型数 积分/次',
        values: ['—', '1 次', '5 次', '20 次', '不限'],
      },
      {
        name: '无水印报告导出 / 月',
        values: ['—', '5 次', '15 次', '50 次', '不限'],
      },
      {
        name: '数据文件导出 / 月',
        values: ['—', '5 次', '15 次', '50 次', '不限'],
      },
    ],
  },
  {
    category: '增值服务',
    features: [
      {
        name: '专属客服支持',
        values: ['—', '—', '工作日', '7×12h', '7×24h 专属'],
      },
      {
        name: 'API 接口调用',
        values: ['—', '—', '—', '✓', '✓ 高并发'],
      },
      {
        name: '多账号子席位',
        values: ['1', '1', '3', '10', '不限'],
      },
    ],
  },
]

export const CREDIT_RULES = [
  { feature: 'AI 问题挖掘（超额）', formula: '10 积分 / 次' },
  { feature: 'GEO 排名查询（超额）', formula: '15 × 15 × 模型数 / 问题' },
  { feature: '品牌得分查询', formula: '15 × 15 × 天数 × 模型数 / 次' },
  { feature: 'GEO 推广链接检测', formula: '15 × 15 × 模型数 / 次' },
  { feature: 'GEO 排名检测', formula: '15 × 15 × 天数 × 模型数 / 次' },
]

export const FAQS = [
  {
    q: '每月一次性赠送的积分和每日赠送的积分有什么区别？过期规则是怎样的？',
    paragraphs: [
      { text: '每日赠送积分：系统会在每天 0:00 自动发放，当天 24:00 未用完将直接清零。建议您优先消耗每日积分。', bold: '每日赠送积分：' },
      { text: '每月一次性赠送积分：购买对应档位后一次性到账。该积分有效期与您的月度会员周期同步（通常为 30 天），会员到期时未用完将清零，不结转到下个月。', bold: '每月一次性赠送积分：' },
    ],
  },
  {
    q: '当我的账户里既有每日积分，又有每月一次性积分，系统如何扣除？',
    paragraphs: [
      { text: '系统采用「先过期先扣除」的智能扣费原则。在您进行工具查询时，扣款优先级为：', bold: '「先过期先扣除」' },
      { text: '免费栏目额度 ➡️ 每日赠送积分（当天过期）➡️ 每月一次性赠送积分（月末过期）', highlight: true },
      { text: '这种机制能最大限度确保您的积分资产利用率最大化。' },
    ],
  },
  {
    q: '各档位的「栏目使用次数限制」和「积分不设上限」该怎么理解？',
    paragraphs: [
      { text: '每个会员档位都包含了一定数量的「免费查询次数」。例如：进阶版每月可「免费问题挖掘 200 次」。' },
      { text: '当这 200 次免费额度用完后，您将进入「积分消耗模式」（10 积分/次）。只要您的账户中还有积分（无论是每日积分还是包月积分），您就可以无限次继续查询，不设使用上限。', bold: '不设使用上限' },
    ],
  },
  {
    q: '品牌得分查询和排名检测里的「15 天数」在积分上怎么计算？',
    paragraphs: [
      { text: '根据平台计算规则，这类属于时序追踪监控。单次查询的积分公式为：15 × 15 × 监控天数 × 监控模型数。', bold: '15 × 15 × 监控天数 × 监控模型数' },
      { text: '如果您选择监控 1 个模型（如豆包）共 15 天，则单次消耗积分为：15 × 15 × 15 × 1 = 3,375 积分', bold: '3,375 积分' },
      { text: '购买高阶版或至尊版可以极大地免除或对冲这类高频、长周期监控带来的积分消耗。' },
    ],
  },
  {
    q: '免费版可以导出 GEO 排名检测报告吗？不同版本的导出有什么区别？',
    paragraphs: [
      { text: '免费版仅支持在线查看基本排名，不支持任何数据导出。', bold: '免费版' },
      { text: '入门版及以上解锁「免费无水印报告导出」及「数据源文件导出」功能。次数限制按月更新，超出次数后可使用积分进行兑换导出。', bold: '入门版及以上' },
      { text: '至尊版用户则享有完全不限次数的无限导出特权。', bold: '至尊版' },
    ],
  },
  {
    q: '如果到期后我续费了相同的档位，上个月没用完的积分能叠加吗？',
    paragraphs: [
      { text: '不可以。为了保证平台计算资源的合理分配，所有包月赠送的一次性积分均不支持跨月叠加。请务必在当月会员有效期内将积分转化为您的品牌 GEO 洞察数据。' },
    ],
  },
]
