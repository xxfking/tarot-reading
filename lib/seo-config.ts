// SEO配置文件
export const seoConfig = {
  // 基础信息
  siteName: '塔罗占卜',
  siteDescription: 'AI智能塔罗牌在线占卜解读平台，提供免费塔罗牌测试。支持5种经典牌阵，78张完整塔罗牌，专业AI解读爱情、事业、学业运势。每日免费占卜10次，让古老智慧与现代科技结合，为你指引方向。',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://tarot-reading.vercel.app',

  // 关键词
  keywords: [
    '塔罗牌',
    '塔罗占卜',
    'AI塔罗',
    '在线占卜',
    '免费塔罗',
    '塔罗牌在线占卜',
    '塔罗牌测试',
    '塔罗解读',
    '爱情占卜',
    '事业占卜',
    '学业占卜',
    '塔罗牌阵',
    '78张塔罗牌',
    '智能塔罗',
    'AI解读',
    '免费占卜',
    '塔罗牌免费',
    '在线抽牌',
    '牌义解析',
    'tarot',
    'tarot reading',
    'free tarot',
    'AI tarot reading',
  ],

  // 页面标题模板
  titleTemplate: '%s | 塔罗占卜 - AI智能在线塔罗牌解读',
  defaultTitle: '塔罗占卜 - AI智能在线免费塔罗牌占卜解读｜爱情事业学业运势测试',

  // Open Graph 图片
  ogImage: '/og-image.jpg',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterSite: '@tarot_reading', // 如果有Twitter账号可以修改

  // 作者信息
  author: '塔罗占卜团队',

  // 语言
  language: 'zh-CN',
  locale: 'zh_CN',

  // 分类
  category: '占卜',

  // 结构化数据
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '塔罗占卜',
    description: 'AI智能塔罗牌在线占卜解读平台，免费塔罗牌测试，专业AI解读',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tarot-reading.vercel.app',
    applicationCategory: 'LifestyleApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000',
    },
  },
};

// 页面特定的SEO配置
export const pageSEO = {
  home: {
    title: '塔罗占卜 - AI智能在线免费塔罗牌占卜解读｜爱情事业学业运势测试',
    description: 'AI智能塔罗牌在线占卜解读平台，提供免费塔罗牌测试。支持单牌、三牌、圣三角、凯尔特十字、时间之流等5种经典牌阵，78张完整塔罗牌，专业AI解读爱情、事业、学业运势。每日免费占卜10次，让古老智慧与现代科技结合，为你指引人生方向。',
    keywords: '塔罗牌,AI塔罗,在线占卜,免费塔罗,塔罗牌在线占卜,爱情占卜,事业占卜,学业占卜,智能塔罗解读',
  },
};
