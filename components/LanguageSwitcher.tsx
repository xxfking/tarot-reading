'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { locales } from '@/i18n';

const localeLabels: Record<string, string> = {
  en: 'EN',
  zh: '中文',
  ja: '日本語',
  ko: '한국어',
  fr: 'FR',
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean);

    // Check if first segment is a known locale
    const hasLocalePrefix = locales.includes(segments[0] as any);
    const pathWithoutLocale = hasLocalePrefix
      ? `/${segments.slice(1).join('/')}`
      : pathname;

    // For default locale (en), use path without prefix
    if (newLocale === 'en') {
      window.location.href = pathWithoutLocale || '/';
    } else {
      window.location.href = `/${newLocale}${pathWithoutLocale}`;
    }
  };

  return (
    <div className="flex items-center gap-1 px-2 py-1.5 bg-white/90 border border-border/50 rounded-lg backdrop-blur-sm">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLanguage(loc)}
          className={`
            px-2.5 py-1 rounded text-xs font-sans font-medium transition-all
            ${
              locale === loc
                ? 'bg-accent text-white shadow-sm'
                : 'text-text-secondary hover:text-accent hover:bg-accent/5'
            }
          `}
        >
          {localeLabels[loc] || loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
