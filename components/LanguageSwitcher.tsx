'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    // Extract the path after the locale prefix
    // pathname format: /en, /en/about, /zh, /zh/spreads, etc.
    const segments = pathname.split('/').filter(Boolean);

    // Remove the first segment (current locale) and get the rest
    const pathWithoutLocale = segments.length > 1 ? `/${segments.slice(1).join('/')}` : '';

    // Use window.location for full page reload to ensure language change
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-border rounded-lg hover:border-accent transition-colors">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLanguage(loc)}
          className={`
            px-3 py-1 rounded font-sans text-sm font-medium transition-all
            ${
              locale === loc
                ? 'bg-accent text-white'
                : 'text-text-secondary hover:text-accent hover:bg-accent/5'
            }
          `}
        >
          {loc === 'en' ? 'EN' : '中文'}
        </button>
      ))}
    </div>
  );
}
