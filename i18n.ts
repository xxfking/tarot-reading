import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// 支持的语言列表
export const locales = ['en', 'zh', 'ja', 'ko', 'fr'] as const;
export type Locale = (typeof locales)[number];

// 默认语言（现在使用英文）
export const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({ requestLocale }) => {
  // In next-intl v4, requestLocale is a Promise that may resolve to undefined
  const requested = await requestLocale;
  const locale = requested && locales.includes(requested as Locale) ? requested : defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
