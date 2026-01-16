import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// 支持的语言列表
export const locales = ['en', 'zh'] as const;
export type Locale = (typeof locales)[number];

// 默认语言
export const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // 验证传入的locale是否有效
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
