// SEO Configuration - Optimized for Global Market
export const seoConfig = {
  // Basic Information
  siteName: 'AI Tarot Reading',
  siteDescription: 'Free AI-powered online tarot card reading platform. Get instant, accurate tarot predictions with 5 classic spreads and 78 complete tarot cards. Professional AI interpretation for love, career, and life guidance. 10 free readings daily.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://tarot-reading.vercel.app',

  // Keywords - Optimized for Low Competition & High Intent
  keywords: [
    // Primary AI Keywords (Low KD, High Conversion)
    'AI tarot reading',
    'free AI tarot online',
    'AI tarot card reading',
    'instant AI tarot',
    'AI tarot predictions',

    // Long-tail Function Keywords
    'AI tarot reading for love',
    'AI tarot career guidance',
    'free 3 card tarot AI',
    'Celtic cross AI tarot',
    'daily AI tarot reading',

    // User Intent Keywords
    'online tarot interpretation AI',
    '24/7 tarot reader AI',
    'free instant tarot reading',
    'AI tarot predictions online',
    'automated tarot reading',

    // Secondary Broad Keywords (Long-term)
    'free online tarot',
    'tarot card reading free',
    'online tarot reading',
    'free tarot card reading online',
    'tarot reading online free',

    // Spread-specific
    'single card tarot reading',
    'three card tarot spread',
    'Celtic cross tarot online',

    // General
    'tarot',
    'tarot cards',
    'tarot reading',
    'free tarot',
  ],

  // Page Title Template
  titleTemplate: '%s | AI Tarot Reading - Free Online Tarot Card Predictions',
  defaultTitle: 'Free AI Tarot Reading Online | Instant Tarot Card Predictions & Interpretations',

  // Open Graph Image
  ogImage: '/og-image.jpg',

  // Twitter
  twitterCard: 'summary_large_image',
  twitterSite: '@tarot_reading',

  // Author
  author: 'AI Tarot Reading Team',

  // Language
  language: 'en',
  locale: 'en_US',

  // Category
  category: 'Lifestyle',

  // Structured Data
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AI Tarot Reading',
    description: 'Free AI-powered online tarot card reading platform with instant, accurate predictions and professional interpretations',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tarot-reading.vercel.app',
    applicationCategory: 'LifestyleApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000',
    },
  },
};

// Page-specific SEO Configuration
export const pageSEO = {
  home: {
    title: 'Free AI Tarot Reading Online | Instant Tarot Card Predictions & Interpretations',
    description: 'Get free AI-powered tarot card readings online. Choose from 5 classic spreads with 78 complete tarot cards. Instant AI interpretation for love, career, and life guidance. 10 free readings daily. No signup required.',
    keywords: 'AI tarot reading,free AI tarot,online tarot reading,AI tarot card reading,free tarot online,instant tarot reading,AI tarot predictions,love tarot reading,career tarot guidance',
  },
};
