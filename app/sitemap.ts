import { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/seo-config';
import { locales, defaultLocale } from '@/i18n';

function localeUrl(baseUrl: string, locale: string, route: string): string {
  return locale === defaultLocale
    ? `${baseUrl}${route || '/'}`
    : `${baseUrl}/${locale}${route}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;

  const routes = ['', '/about', '/spreads'];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: localeUrl(baseUrl, locale, route),
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'monthly' as 'daily' | 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, localeUrl(baseUrl, l, route)])
        ),
      },
    }))
  );
}
