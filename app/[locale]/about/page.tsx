import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n';
import { getAlternates, seoConfig } from '@/lib/seo-config';
import LanguageSwitcher from '@/components/LanguageSwitcher';

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata based on locale
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const alternates = getAlternates(locale, '/about');

  const metaByLocale: Record<string, { title: string; description: string; keywords: string[] }> = {
    zh: {
      title: '关于塔罗牌 - 历史、含义与AI解读指南',
      description: '探索塔罗牌的起源，了解78张大小阿卡纳的含义、塔罗占卜方法和牌阵解读技巧。专业AI驱动的在线塔罗平台，提供爱情、事业和人生指引。',
      keywords: ['塔罗牌', '塔罗牌含义', '塔罗历史', '大阿卡纳', '小阿卡纳', '塔罗占卜方法', 'AI塔罗', '如何解读塔罗牌', '塔罗牌指南'],
    },
    ja: {
      title: 'タロットカードについて - 歴史、意味とAIリーディングガイド',
      description: 'タロットカードの起源を探り、78枚の大アルカナ・小アルカナの意味、タロット占いの方法とスプレッド解釈を学びましょう。AI搭載のオンラインタロットプラットフォーム。',
      keywords: ['タロットカード', 'タロット意味', 'タロット歴史', '大アルカナ', '小アルカナ', 'タロット占い', 'AIタロット', 'タロットカードガイド'],
    },
    ko: {
      title: '타로 카드 소개 - 역사, 의미 및 AI 리딩 가이드',
      description: '타로 카드의 기원을 탐구하고 78장의 메이저 & 마이너 아르카나의 의미, 타로 리딩 방법과 스프레드 해석을 배워보세요. AI 기반 온라인 타로 플랫폼.',
      keywords: ['타로 카드', '타로 의미', '타로 역사', '메이저 아르카나', '마이너 아르카나', '타로 점', 'AI 타로', '타로 카드 가이드'],
    },
    fr: {
      title: 'À propos du Tarot - Histoire, Significations et Guide de Lecture IA',
      description: 'Découvrez les origines des cartes de tarot, les significations des 78 arcanes majeurs et mineurs, les méthodes de lecture et les interprétations. Plateforme de tarot en ligne alimentée par l\'IA.',
      keywords: ['cartes de tarot', 'signification tarot', 'histoire du tarot', 'arcanes majeurs', 'arcanes mineurs', 'tirage de tarot', 'tarot IA', 'guide tarot'],
    },
    en: {
      title: 'About Tarot Cards - History, Meanings & AI Reading Guide',
      description: 'Discover the origins of tarot cards, 78 Major & Minor Arcana meanings, tarot reading methods and spread interpretations. Professional AI-powered online tarot platform for love, career, and life guidance.',
      keywords: ['tarot cards', 'tarot card meanings', 'tarot history', 'Major Arcana', 'Minor Arcana', 'tarot reading methods', 'AI tarot', 'how to read tarot cards', 'tarot card guide'],
    },
  };

  const meta = metaByLocale[locale] || metaByLocale.en;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates,
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('about');
  const tFooter = await getTranslations('footer');

  // Build FAQ structured data
  const faqQuestions = ['q1', 'q2', 'q3', 'q4'] as const;
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqQuestions.map((q) => ({
      '@type': 'Question',
      name: t(`faq.${q}.question`),
      acceptedAnswer: {
        '@type': 'Answer',
        text: t(`faq.${q}.answer`),
      },
    })),
  };

  // Breadcrumb structured data
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: seoConfig.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('title'),
        item: `${seoConfig.siteUrl}/${locale}/about`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-celestial grain-overlay">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* 导航 */}
      <nav className="border-b border-border/30 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2.5 text-accent hover:text-mystic-600 font-sans font-semibold transition-colors group"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">←</span>
            <span>{t('backToHome')}</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </nav>

      {/* 主内容 */}
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        {/* 标题 */}
        <div className="mb-16 md:mb-20 text-center">
          {/* Decorative accent */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent"></div>
            <div className="w-2 h-2 bg-accent-gold rounded-full shadow-glow"></div>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-mystic-500 to-transparent"></div>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-semibold text-text-primary mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-text-secondary font-serif max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* 内容区域 */}
        <article className="max-w-4xl mx-auto">
          {/* 什么是塔罗牌 */}
          <section className="mb-20 bg-white/80 backdrop-blur-sm rounded-2xl p-10 md:p-12 shadow-card">
            <h2 className="text-4xl font-display font-semibold text-text-primary mb-8">
              {t('whatIsTarot.title')}
            </h2>
            <p className="text-text-primary text-lg leading-loose mb-6 font-serif">
              {t('whatIsTarot.intro')}
            </p>
            <p className="text-text-primary text-lg leading-loose font-serif">
              {t('whatIsTarot.ourService')}
            </p>
          </section>

          {/* 78张塔罗牌构成 */}
          <section className="mb-20 bg-white/80 backdrop-blur-sm rounded-2xl p-10 md:p-12 shadow-card">
            <h2 className="text-4xl font-display font-semibold text-text-primary mb-12">
              {t('structure.title')}
            </h2>

            <h3 className="text-3xl font-display font-semibold text-text-primary mb-6">
              {t('structure.majorArcana.title')}
            </h3>
            <p className="text-text-primary text-lg leading-loose mb-8 font-serif">
              {t('structure.majorArcana.description')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="p-5 border border-mystic-200 bg-mystic-50/30 rounded-xl hover:border-mystic-400 hover:shadow-card transition-all duration-300">
                <p className="font-display font-semibold text-text-primary text-lg mb-2">0. {locale === 'zh' ? '愚者' : 'The Fool'}</p>
                <p className="text-sm text-text-secondary font-serif">{t('structure.majorArcana.fool')}</p>
              </div>
              <div className="p-5 border border-mystic-200 bg-mystic-50/30 rounded-xl hover:border-mystic-400 hover:shadow-card transition-all duration-300">
                <p className="font-display font-semibold text-text-primary text-lg mb-2">1. {locale === 'zh' ? '魔术师' : 'The Magician'}</p>
                <p className="text-sm text-text-secondary font-serif">{t('structure.majorArcana.magician')}</p>
              </div>
              <div className="p-5 border border-mystic-200 bg-mystic-50/30 rounded-xl hover:border-mystic-400 hover:shadow-card transition-all duration-300">
                <p className="font-display font-semibold text-text-primary text-lg mb-2">2. {locale === 'zh' ? '女祭司' : 'The High Priestess'}</p>
                <p className="text-sm text-text-secondary font-serif">{t('structure.majorArcana.highPriestess')}</p>
              </div>
              <div className="p-5 border border-mystic-200 bg-mystic-50/30 rounded-xl hover:border-mystic-400 hover:shadow-card transition-all duration-300">
                <p className="font-display font-semibold text-text-primary text-lg mb-2">3. {locale === 'zh' ? '皇后' : 'The Empress'}</p>
                <p className="text-sm text-text-secondary font-serif">{t('structure.majorArcana.empress')}</p>
              </div>
              <div className="p-5 border border-mystic-200 bg-mystic-50/30 rounded-xl hover:border-mystic-400 hover:shadow-card transition-all duration-300">
                <p className="font-display font-semibold text-text-primary text-lg mb-2">4. {locale === 'zh' ? '皇帝' : 'The Emperor'}</p>
                <p className="text-sm text-text-secondary font-serif">{t('structure.majorArcana.emperor')}</p>
              </div>
              <div className="p-5 border border-mystic-200 bg-mystic-50/30 rounded-xl hover:border-mystic-400 hover:shadow-card transition-all duration-300">
                <p className="font-display font-semibold text-text-primary text-lg mb-2">5. {locale === 'zh' ? '教皇' : 'The Hierophant'}</p>
                <p className="text-sm text-text-secondary font-serif">{t('structure.majorArcana.hierophant')}</p>
              </div>
            </div>
            <p className="text-sm text-text-secondary italic font-sans">
              {t('structure.majorArcana.more')}
            </p>

            <h3 className="text-2xl font-bold text-text-primary mb-3 mt-6 font-sans">
              {t('structure.minorArcana.title')}
            </h3>
            <p className="text-text-primary leading-relaxed mb-4 font-sans">
              {t('structure.minorArcana.description')}
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-bold text-text-primary mb-2 font-sans">{t('structure.minorArcana.wands.title')}</h4>
                <p className="text-text-primary font-sans">{t('structure.minorArcana.wands.description')}</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-bold text-text-primary mb-2 font-sans">{t('structure.minorArcana.cups.title')}</h4>
                <p className="text-text-primary font-sans">{t('structure.minorArcana.cups.description')}</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-bold text-text-primary mb-2 font-sans">{t('structure.minorArcana.swords.title')}</h4>
                <p className="text-text-primary font-sans">{t('structure.minorArcana.swords.description')}</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-bold text-text-primary mb-2 font-sans">{t('structure.minorArcana.pentacles.title')}</h4>
                <p className="text-text-primary font-sans">{t('structure.minorArcana.pentacles.description')}</p>
              </div>
            </div>
          </section>

          {/* 如何进行塔罗占卜 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-sans">
              {t('howToRead.title')}
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold font-sans">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 font-sans">{t('howToRead.step1.title')}</h4>
                  <p className="text-text-primary font-sans">
                    {t('howToRead.step1.description')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold font-sans">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 font-sans">{t('howToRead.step2.title')}</h4>
                  <p className="text-text-primary font-sans">
                    {t('howToRead.step2.description')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold font-sans">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 font-sans">{t('howToRead.step3.title')}</h4>
                  <p className="text-text-primary font-sans">
                    {t('howToRead.step3.description')}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold font-sans">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 font-sans">{t('howToRead.step4.title')}</h4>
                  <p className="text-text-primary font-sans">
                    {t('howToRead.step4.description')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AI塔罗的优势 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-sans">
              {t('advantages.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 border border-border rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-bold text-text-primary mb-2 font-sans">{t('advantages.instant.title')}</h4>
                <p className="text-text-primary text-sm font-sans">
                  {t('advantages.instant.description')}
                </p>
              </div>
              <div className="p-5 border border-border rounded-lg">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-bold text-text-primary mb-2 font-sans">{t('advantages.objective.title')}</h4>
                <p className="text-text-primary text-sm font-sans">
                  {t('advantages.objective.description')}
                </p>
              </div>
              <div className="p-5 border border-border rounded-lg">
                <div className="text-2xl mb-2">💎</div>
                <h4 className="font-bold text-text-primary mb-2 font-sans">{t('advantages.free.title')}</h4>
                <p className="text-text-primary text-sm font-sans">
                  {t('advantages.free.description')}
                </p>
              </div>
              <div className="p-5 border border-border rounded-lg">
                <div className="text-2xl mb-2">📚</div>
                <h4 className="font-bold text-text-primary mb-2 font-sans">{t('advantages.knowledge.title')}</h4>
                <p className="text-text-primary text-sm font-sans">
                  {t('advantages.knowledge.description')}
                </p>
              </div>
            </div>
          </section>

          {/* 常见问题 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-sans">
              {t('faq.title')}
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-text-primary mb-2 font-sans">
                  {t('faq.q1.question')}
                </h4>
                <p className="text-text-primary font-sans">
                  {t('faq.q1.answer')}
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-text-primary mb-2 font-sans">
                  {t('faq.q2.question')}
                </h4>
                <p className="text-text-primary font-sans">
                  {t('faq.q2.answer')}
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-text-primary mb-2 font-sans">
                  {t('faq.q3.question')}
                </h4>
                <p className="text-text-primary font-sans">
                  {t('faq.q3.answer')}
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-text-primary mb-2 font-sans">
                  {t('faq.q4.question')}
                </h4>
                <p className="text-text-primary font-sans">
                  {t('faq.q4.answer')}
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-accent-yellow/10 rounded-lg border border-accent/20 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4 font-sans">
              {t('cta.title')}
            </h2>
            <p className="text-text-primary mb-6 font-sans">
              {t('cta.description')}
            </p>
            <Link
              href={`/${locale}`}
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-colors font-sans"
            >
              {t('cta.button')}
            </Link>
          </section>
        </article>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-text-secondary text-sm font-sans">
          <p>{tFooter('copyright')}</p>
          <div className="mt-4 space-x-4">
            <Link href={`/${locale}`} className="hover:text-accent">{tFooter('home')}</Link>
            <Link href={`/${locale}/about`} className="hover:text-accent">{tFooter('about')}</Link>
            <Link href={`/${locale}/spreads`} className="hover:text-accent">{tFooter('spreads')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
