import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // 支持的所有语言
  locales,

  // 默认语言
  defaultLocale,

  // 语言检测策略
  localeDetection: true,

  // URL策略：始终在URL中显示语言前缀（/en, /zh）
  localePrefix: 'always',
});

export const config = {
  // 匹配所有路径，除了以下路径
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
