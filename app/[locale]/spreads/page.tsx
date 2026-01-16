import type { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { getAllSpreads } from '@/lib/spreads';

export const metadata: Metadata = {
  title: 'Tarot Spreads Guide - 5 Classic Tarot Card Layouts Explained',
  description: 'Complete guide to 5 classic tarot spreads: Single Card, Three Card, Holy Triangle, Celtic Cross, and Time Flow. Learn usage methods, suitable scenarios, and interpretation techniques for accurate AI tarot readings.',
  keywords: ['tarot spreads', 'single card reading', 'three card spread', 'holy triangle tarot', 'Celtic cross spread', 'time flow spread', 'tarot reading methods', 'tarot layouts', 'AI tarot spreads'],
};

export default async function SpreadsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('spreadsPage');
  const tFooter = await getTranslations('footer');
  const spreads = getAllSpreads();

  const getDifficulty = (cardCount: number) => {
    if (cardCount === 1) return t('beginner');
    if (cardCount === 3) return t('simple');
    if (cardCount === 5) return t('intermediate');
    return t('advanced');
  };

  const getDuration = (cardCount: number) => {
    if (cardCount === 1) return `1${t('minute')}`;
    if (cardCount === 3) return `3${t('minutes')}`;
    if (cardCount === 5) return `5${t('minutes')}`;
    return `10${t('minutes')}`;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 导航 */}
      <nav className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
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
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* 标题 */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-sans">
            {t('title')}
          </h1>
          <p className="text-lg text-text-secondary font-sans max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* 牌阵介绍 */}
        <div className="mb-12 p-6 bg-background rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-text-primary mb-4 font-sans">
            {t('intro.title')}
          </h2>
          <p className="text-text-primary leading-relaxed mb-4 font-sans">
            {t('intro.p1')}
          </p>
          <p className="text-text-primary leading-relaxed font-sans">
            {t('intro.p2')}
          </p>
        </div>

        {/* 5种牌阵详解 */}
        <div className="space-y-8">
          {spreads.map((spread, index) => (
            <article key={spread.type} className="border border-border rounded-lg p-6 md:p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg font-sans">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2 font-sans">
                    {spread.name}
                  </h2>
                  <p className="text-text-secondary font-sans">
                    {spread.description}
                  </p>
                </div>
              </div>

              {/* 基本信息 */}
              <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-background rounded-lg">
                <div>
                  <p className="text-sm text-text-secondary mb-1 font-sans">{t('cardCount')}</p>
                  <p className="text-lg font-bold text-accent font-sans">{spread.cardCount} {t('cards')}</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-1 font-sans">{t('difficulty')}</p>
                  <p className="text-lg font-bold text-accent font-sans">
                    {getDifficulty(spread.cardCount)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-1 font-sans">{t('duration')}</p>
                  <p className="text-lg font-bold text-accent font-sans">
                    {getDuration(spread.cardCount)}
                  </p>
                </div>
              </div>

              {/* 牌位说明 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary mb-3 font-sans">{t('positions')}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {spread.positions.map((position, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 border border-border rounded-lg">
                      <div className="flex-shrink-0 w-8 h-8 bg-accent/10 text-accent rounded-full flex items-center justify-center font-bold text-sm font-sans">
                        {idx + 1}
                      </div>
                      <p className="text-text-primary font-sans">{position}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 适用场景 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary mb-3 font-sans">{t('suitable')}</h3>
                <div className="p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <p className="text-text-primary font-sans">
                    {spread.type === 'single' && (locale === 'zh' ? '适合快速决策、每日指引、简单问题的即时解答。当你需要快速获得启发或确认直觉时，单牌占卜是最佳选择。' : 'Perfect for quick decisions, daily guidance, and instant answers to simple questions. When you need fast inspiration or intuition confirmation, single card is the best choice.')}
                    {spread.type === 'three_time' && (locale === 'zh' ? '适合了解事情的发展脉络、问题的前因后果。三牌阵简洁明了，既能提供足够信息，又不会过于复杂，是最常用的牌阵之一。' : 'Ideal for understanding event development, cause and effect of situations. The three-card spread is concise yet informative, neither too simple nor too complex - one of the most commonly used spreads.')}
                    {spread.type === 'three_situation' && (locale === 'zh' ? '适合分析当前困境、寻找解决方案。当你面临挑战需要建议时，圣三角能清晰展现问题的本质、阻碍和行动方向。' : 'Suitable for analyzing current challenges and finding solutions. When facing difficulties needing advice, the Holy Triangle clearly reveals the essence of the problem, obstacles, and direction for action.')}
                    {spread.type === 'celtic_cross' && (locale === 'zh' ? '适合深度分析复杂情况、人生重大决策。凯尔特十字是最经典、最全面的牌阵，能从多个角度剖析问题，提供详尽的洞察。' : 'Perfect for in-depth analysis of complex situations and major life decisions. The Celtic Cross is the most classic and comprehensive spread, analyzing questions from multiple angles with detailed insights.')}
                    {spread.type === 'relationship' && (locale === 'zh' ? '适合了解事态发展趋势、规划未来行动。时间之流清晰展现从过去到未来的演变过程，帮助你把握时机、顺势而为。' : 'Ideal for understanding development trends and planning future actions. Time Flow clearly shows evolution from past to future, helping you seize opportunities and go with the flow.')}
                  </p>
                </div>
              </div>

              {/* 解读要点 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary mb-3 font-sans">{t('keyPoints')}</h3>
                <ul className="space-y-2">
                  {spread.type === 'single' && (
                    <>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '关注卡牌的直觉感受，第一印象往往最准确' : 'Focus on intuitive card feelings - first impressions are often most accurate'}</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '注意正逆位，它会影响牌义的表达方式' : 'Pay attention to upright/reversed positions as they affect meaning expression'}</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '将牌面含义与你的具体问题相结合' : 'Combine card meaning with your specific question'}</span>
                      </li>
                    </>
                  )}
                  {spread.type === 'three_time' && (
                    <>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '观察三张牌之间的联系和故事线' : 'Observe connections and storyline between the three cards'}</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '过去的牌揭示问题的根源' : 'The past card reveals the root of the issue'}</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '现在的牌反映当前状态' : 'The present card reflects current state'}</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '未来的牌指示可能的发展方向' : 'The future card indicates possible development direction'}</span>
                      </li>
                    </>
                  )}
                  {spread.type === 'three_situation' && (
                    <>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '情况牌展示问题的核心本质' : 'Situation card shows the core essence of the problem'}</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '挑战牌揭示需要克服的障碍' : 'Challenge card reveals obstacles to overcome'}</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '建议牌提供实际可行的行动方案' : 'Advice card provides practical actionable solutions'}</span>
                      </li>
                    </>
                  )}
                  {spread.type === 'celtic_cross' && (
                    <>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '先整体浏览所有牌面，感受整体氛围' : 'First overview all cards to feel the overall atmosphere'}</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '关注中心交叉的两张牌，它们是核心' : 'Focus on the two crossed center cards - they are the core'}</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '左侧4张牌讲述背景和基础' : 'Left 4 cards tell background and foundation'}</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '右侧竖列展现内在到外在的演变' : 'Right vertical column shows inner to outer evolution'}</span>
                      </li>
                    </>
                  )}
                  {spread.type === 'relationship' && (
                    <>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '观察时间线上的能量流动' : 'Observe energy flow along the timeline'}</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '建议牌是整个牌阵的关键行动指南' : 'Advice card is the key action guide for the entire spread'}</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>{locale === 'zh' ? '结果牌显示顺势而为的最终走向' : 'Outcome card shows final direction when going with the flow'}</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* CTA按钮 */}
              <div className="flex justify-end">
                <Link
                  href={`/${locale}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-colors font-sans"
                >
                  <span>{t('useSpread', { name: spread.name })}</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* 如何选择牌阵 */}
        <section className="mt-12 p-8 bg-gradient-to-br from-accent/5 to-accent-yellow/5 rounded-lg border border-accent/20">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center font-sans">
            {t('howToChoose.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-bold text-text-primary mb-2 font-sans">{t('howToChoose.complexity.title')}</h3>
              <ul className="space-y-1 text-sm text-text-primary font-sans">
                <li>• {t('howToChoose.complexity.simple')}</li>
                <li>• {t('howToChoose.complexity.medium')}</li>
                <li>• {t('howToChoose.complexity.complex')}</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-bold text-text-primary mb-2 font-sans">{t('howToChoose.experience.title')}</h3>
              <ul className="space-y-1 text-sm text-text-primary font-sans">
                <li>• {t('howToChoose.experience.beginner')}</li>
                <li>• {t('howToChoose.experience.experienced')}</li>
                <li>• {t('howToChoose.experience.advanced')}</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-bold text-text-primary mb-2 font-sans">{t('howToChoose.time.title')}</h3>
              <ul className="space-y-1 text-sm text-text-primary font-sans">
                <li>• {t('howToChoose.time.quick')}</li>
                <li>• {t('howToChoose.time.regular')}</li>
                <li>• {t('howToChoose.time.deep')}</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-bold text-text-primary mb-2 font-sans">{t('howToChoose.intuition.title')}</h3>
              <ul className="space-y-1 text-sm text-text-primary font-sans">
                <li>• {t('howToChoose.intuition.trust')}</li>
                <li>• {t('howToChoose.intuition.resonate')}</li>
                <li>• {t('howToChoose.intuition.uncertain')}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 最终CTA */}
        <div className="mt-12 text-center">
          <Link
            href={`/${locale}`}
            className="inline-block px-10 py-4 bg-accent text-white rounded-lg text-lg font-bold hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl font-sans"
          >
            {t('cta.button')}
          </Link>
          <p className="mt-4 text-text-secondary text-sm font-sans">
            {t('cta.subtitle')}
          </p>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-text-secondary text-sm font-sans">
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
