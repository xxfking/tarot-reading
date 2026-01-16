import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'About Tarot Cards - History, Meanings & AI Reading Guide',
  description: 'Discover the origins of tarot cards, 78 Major & Minor Arcana meanings, tarot reading methods and spread interpretations. Professional AI-powered online tarot platform for love, career, and life guidance.',
  keywords: ['tarot cards', 'tarot card meanings', 'tarot history', 'Major Arcana', 'Minor Arcana', 'tarot reading methods', 'AI tarot', 'how to read tarot cards', 'tarot card guide'],
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('about');
  const tFooter = await getTranslations('footer');

  return (
    <div className="min-h-screen bg-white">
      {/* 导航 */}
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-sans font-medium"
          >
            <span>←</span>
            <span>{t('backToHome')}</span>
          </Link>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* 标题 */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-sans">
            {t('title')}
          </h1>
          <p className="text-lg text-text-secondary font-sans">
            {t('subtitle')}
          </p>
        </div>

        {/* 内容区域 */}
        <article className="prose prose-lg max-w-none">
          {/* 什么是塔罗牌 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-sans">
              {t('whatIsTarot.title')}
            </h2>
            <p className="text-text-primary leading-relaxed mb-4 font-sans">
              {t('whatIsTarot.intro')}
            </p>
            <p className="text-text-primary leading-relaxed mb-4 font-sans">
              {t('whatIsTarot.ourService')}
            </p>
          </section>

          {/* 78张塔罗牌构成 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-sans">
              {t('structure.title')}
            </h2>

            <h3 className="text-2xl font-bold text-text-primary mb-3 mt-6 font-sans">
              {t('structure.majorArcana.title')}
            </h3>
            <p className="text-text-primary leading-relaxed mb-4 font-sans">
              {t('structure.majorArcana.description')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              <div className="p-3 border border-border rounded-lg">
                <p className="font-semibold text-text-primary font-sans">0. {locale === 'zh' ? '愚者' : 'The Fool'}</p>
                <p className="text-sm text-text-secondary font-sans">{t('structure.majorArcana.fool')}</p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <p className="font-semibold text-text-primary font-sans">1. {locale === 'zh' ? '魔术师' : 'The Magician'}</p>
                <p className="text-sm text-text-secondary font-sans">{t('structure.majorArcana.magician')}</p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <p className="font-semibold text-text-primary font-sans">2. {locale === 'zh' ? '女祭司' : 'The High Priestess'}</p>
                <p className="text-sm text-text-secondary font-sans">{t('structure.majorArcana.highPriestess')}</p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <p className="font-semibold text-text-primary font-sans">3. {locale === 'zh' ? '皇后' : 'The Empress'}</p>
                <p className="text-sm text-text-secondary font-sans">{t('structure.majorArcana.empress')}</p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <p className="font-semibold text-text-primary font-sans">4. {locale === 'zh' ? '皇帝' : 'The Emperor'}</p>
                <p className="text-sm text-text-secondary font-sans">{t('structure.majorArcana.emperor')}</p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <p className="font-semibold text-text-primary font-sans">5. {locale === 'zh' ? '教皇' : 'The Hierophant'}</p>
                <p className="text-sm text-text-secondary font-sans">{t('structure.majorArcana.hierophant')}</p>
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
