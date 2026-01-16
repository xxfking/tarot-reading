import { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/seo-config';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.siteUrl;

  const routes = ['', '/about', '/spreads'];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'monthly' as 'daily' | 'monthly',
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${route}`])
        ),
      },
    }))
  );
}
