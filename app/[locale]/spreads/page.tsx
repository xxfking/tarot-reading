import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllSpreads } from '@/lib/spreads';

export const metadata: Metadata = {
  title: 'Tarot Spreads Guide - 5 Classic Tarot Card Layouts Explained',
  description: 'Complete guide to 5 classic tarot spreads: Single Card, Three Card, Holy Triangle, Celtic Cross, and Time Flow. Learn usage methods, suitable scenarios, and interpretation techniques for accurate AI tarot readings.',
  keywords: ['tarot spreads', 'single card reading', 'three card spread', 'holy triangle tarot', 'Celtic cross spread', 'time flow spread', 'tarot reading methods', 'tarot layouts', 'AI tarot spreads'],
};

export default function SpreadsPage() {
  const spreads = getAllSpreads();

  return (
    <div className="min-h-screen bg-white">
      {/* 导航 */}
      <nav className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-sans font-medium"
          >
            <span>←</span>
            <span>返回首页</span>
          </Link>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* 标题 */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-sans">
            塔罗牌阵大全
          </h1>
          <p className="text-lg text-text-secondary font-sans max-w-2xl mx-auto">
            选择合适的牌阵，让塔罗牌为你的问题提供更精准的指引
          </p>
        </div>

        {/* 牌阵介绍 */}
        <div className="mb-12 p-6 bg-background rounded-lg border border-border">
          <h2 className="text-2xl font-bold text-text-primary mb-4 font-sans">
            什么是塔罗牌阵？
          </h2>
          <p className="text-text-primary leading-relaxed mb-4 font-sans">
            塔罗牌阵（Tarot Spread）是指在占卜时卡牌的排列方式。每个牌阵都有其特定的结构，每个位置代表不同的含义。选择合适的牌阵能够让你更全面、深入地了解问题的各个层面。
          </p>
          <p className="text-text-primary leading-relaxed font-sans">
            从简单的单牌占卜到复杂的凯尔特十字，不同的牌阵适用于不同类型的问题。初学者建议从简单的牌阵开始，逐步尝试更复杂的排列方式。
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
                  <p className="text-sm text-text-secondary mb-1 font-sans">卡牌数量</p>
                  <p className="text-lg font-bold text-accent font-sans">{spread.cardCount} 张</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-1 font-sans">难度等级</p>
                  <p className="text-lg font-bold text-accent font-sans">
                    {spread.cardCount === 1 ? '入门' : spread.cardCount === 3 ? '简单' : spread.cardCount === 5 ? '中等' : '进阶'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary mb-1 font-sans">占卜时长</p>
                  <p className="text-lg font-bold text-accent font-sans">
                    {spread.cardCount === 1 ? '1分钟' : spread.cardCount === 3 ? '3分钟' : spread.cardCount === 5 ? '5分钟' : '10分钟'}
                  </p>
                </div>
              </div>

              {/* 牌位说明 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary mb-3 font-sans">牌位说明</h3>
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
                <h3 className="text-xl font-bold text-text-primary mb-3 font-sans">适用场景</h3>
                <div className="p-4 bg-accent/5 rounded-lg border-l-4 border-accent">
                  <p className="text-text-primary font-sans">
                    {spread.type === 'single' && '适合快速决策、每日指引、简单问题的即时解答。当你需要快速获得启发或确认直觉时，单牌占卜是最佳选择。'}
                    {spread.type === 'three_time' && '适合了解事情的发展脉络、问题的前因后果。三牌阵简洁明了，既能提供足够信息，又不会过于复杂，是最常用的牌阵之一。'}
                    {spread.type === 'three_situation' && '适合分析当前困境、寻找解决方案。当你面临挑战需要建议时，圣三角能清晰展现问题的本质、阻碍和行动方向。'}
                    {spread.type === 'celtic_cross' && '适合深度分析复杂情况、人生重大决策。凯尔特十字是最经典、最全面的牌阵，能从多个角度剖析问题，提供详尽的洞察。'}
                    {spread.type === 'relationship' && '适合了解事态发展趋势、规划未来行动。时间之流清晰展现从过去到未来的演变过程，帮助你把握时机、顺势而为。'}
                  </p>
                </div>
              </div>

              {/* 解读要点 */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-text-primary mb-3 font-sans">解读要点</h3>
                <ul className="space-y-2">
                  {spread.type === 'single' && (
                    <>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>关注卡牌的直觉感受，第一印象往往最准确</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>注意正逆位，它会影响牌义的表达方式</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>将牌面含义与你的具体问题相结合</span>
                      </li>
                    </>
                  )}
                  {spread.type === 'three_time' && (
                    <>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>观察三张牌之间的联系和故事线</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>过去的牌揭示问题的根源</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>现在的牌反映当前状态</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>未来的牌指示可能的发展方向</span>
                      </li>
                    </>
                  )}
                  {spread.type === 'three_situation' && (
                    <>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>情况牌展示问题的核心本质</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>挑战牌揭示需要克服的障碍</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>建议牌提供实际可行的行动方案</span>
                      </li>
                    </>
                  )}
                  {spread.type === 'celtic_cross' && (
                    <>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>先整体浏览所有牌面，感受整体氛围</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>关注中心交叉的两张牌，它们是核心</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>左侧4张牌讲述背景和基础</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>右侧竖列展现内在到外在的演变</span>
                      </li>
                    </>
                  )}
                  {spread.type === 'relationship' && (
                    <>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>观察时间线上的能量流动</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>建议牌是整个牌阵的关键行动指南</span>
                      </li>
                      <li className="flex gap-2 text-text-primary font-sans">
                        <span className="text-accent">•</span>
                        <span>结果牌显示顺势而为的最终走向</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              {/* CTA按钮 */}
              <div className="flex justify-end">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-colors font-sans"
                >
                  <span>使用{spread.name}占卜</span>
                  <span>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* 如何选择牌阵 */}
        <section className="mt-12 p-8 bg-gradient-to-br from-accent/5 to-accent-yellow/5 rounded-lg border border-accent/20">
          <h2 className="text-2xl font-bold text-text-primary mb-6 text-center font-sans">
            如何选择合适的牌阵？
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-bold text-text-primary mb-2 font-sans">根据问题复杂度</h3>
              <ul className="space-y-1 text-sm text-text-primary font-sans">
                <li>• 简单问题 → 单牌或三牌阵</li>
                <li>• 中等问题 → 圣三角或时间之流</li>
                <li>• 复杂问题 → 凯尔特十字</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-bold text-text-primary mb-2 font-sans">根据你的经验</h3>
              <ul className="space-y-1 text-sm text-text-primary font-sans">
                <li>• 初学者 → 从单牌和三牌阵开始</li>
                <li>• 有经验 → 尝试圣三角和时间之流</li>
                <li>• 熟练者 → 使用凯尔特十字深度解读</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-bold text-text-primary mb-2 font-sans">根据时间</h3>
              <ul className="space-y-1 text-sm text-text-primary font-sans">
                <li>• 快速指引 → 单牌占卜（1分钟）</li>
                <li>• 常规占卜 → 三牌阵（3分钟）</li>
                <li>• 深度分析 → 凯尔特十字（10分钟+）</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-border">
              <h3 className="font-bold text-text-primary mb-2 font-sans">根据直觉</h3>
              <ul className="space-y-1 text-sm text-text-primary font-sans">
                <li>• 相信你的第一感觉</li>
                <li>• 哪个牌阵让你更有共鸣？</li>
                <li>• 不确定时从简单的开始</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 最终CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-10 py-4 bg-accent text-white rounded-lg text-lg font-bold hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl font-sans"
          >
            开始你的塔罗占卜之旅
          </Link>
          <p className="mt-4 text-text-secondary text-sm font-sans">
            每日10次免费占卜 • 无需注册 • AI智能解读
          </p>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 text-center text-text-secondary text-sm font-sans">
          <p>© 2026 塔罗占卜 | AI智能在线塔罗牌解读平台</p>
          <div className="mt-4 space-x-4">
            <Link href="/" className="hover:text-accent">首页</Link>
            <Link href="/about" className="hover:text-accent">关于</Link>
            <Link href="/spreads" className="hover:text-accent">牌阵介绍</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
