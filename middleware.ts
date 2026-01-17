import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n';

export default createMiddleware({
  // 支持的所有语言
  locales,

  // 默认语言
  defaultLocale,

  // 语言检测策略：关闭自动检测，强制使用默认语言（英文）
  localeDetection: false,

  // URL策略：仅非默认语言显示前缀（/为英文，/zh为中文）
  localePrefix: 'as-needed',
});

export const config = {
  // 匹配所有路径，除了以下路径
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
