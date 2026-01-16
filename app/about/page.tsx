import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Tarot Cards - History, Meanings & AI Reading Guide',
  description: 'Discover the origins of tarot cards, 78 Major & Minor Arcana meanings, tarot reading methods and spread interpretations. Professional AI-powered online tarot platform for love, career, and life guidance.',
  keywords: ['tarot cards', 'tarot card meanings', 'tarot history', 'Major Arcana', 'Minor Arcana', 'tarot reading methods', 'AI tarot', 'how to read tarot cards', 'tarot card guide'],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 导航 */}
      <nav className="border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
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
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* 标题 */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-sans">
            关于塔罗牌
          </h1>
          <p className="text-lg text-text-secondary font-sans">
            探索古老智慧与现代AI的完美结合
          </p>
        </div>

        {/* 内容区域 */}
        <article className="prose prose-lg max-w-none">
          {/* 什么是塔罗牌 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-sans">
              什么是塔罗牌？
            </h2>
            <p className="text-text-primary leading-relaxed mb-4 font-sans">
              塔罗牌（Tarot）是一套古老的占卜工具，起源于15世纪的欧洲。一副完整的塔罗牌由78张牌组成，每张牌都蕴含着深刻的象征意义和智慧启示。塔罗牌不仅是占卜工具，更是一面映照内心的镜子，帮助我们认识自己、理解当下、洞察未来。
            </p>
            <p className="text-text-primary leading-relaxed mb-4 font-sans">
              在本网站，我们结合传统塔罗智慧与先进的AI人工智能技术，为你提供专业、准确的在线塔罗牌占卜服务。无论是爱情困惑、事业选择还是人生方向，塔罗牌都能为你带来启发和指引。
            </p>
          </section>

          {/* 78张塔罗牌构成 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-sans">
              78张塔罗牌的构成
            </h2>

            <h3 className="text-2xl font-bold text-text-primary mb-3 mt-6 font-sans">
              大阿卡纳（Major Arcana）- 22张
            </h3>
            <p className="text-text-primary leading-relaxed mb-4 font-sans">
              大阿卡纳代表人生的重大课题和转折点，从0号"愚者"到21号"世界"，描绘了一个完整的生命旅程。这些牌象征着生命中的重要经历、深刻领悟和灵性成长。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              <div className="p-3 border border-border rounded-lg">
                <p className="font-semibold text-text-primary font-sans">0. 愚者 (The Fool)</p>
                <p className="text-sm text-text-secondary font-sans">新开始、冒险</p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <p className="font-semibold text-text-primary font-sans">1. 魔术师 (The Magician)</p>
                <p className="text-sm text-text-secondary font-sans">创造力、行动</p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <p className="font-semibold text-text-primary font-sans">2. 女祭司 (The High Priestess)</p>
                <p className="text-sm text-text-secondary font-sans">直觉、神秘</p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <p className="font-semibold text-text-primary font-sans">3. 皇后 (The Empress)</p>
                <p className="text-sm text-text-secondary font-sans">丰盛、母性</p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <p className="font-semibold text-text-primary font-sans">4. 皇帝 (The Emperor)</p>
                <p className="text-sm text-text-secondary font-sans">权威、秩序</p>
              </div>
              <div className="p-3 border border-border rounded-lg">
                <p className="font-semibold text-text-primary font-sans">5. 教皇 (The Hierophant)</p>
                <p className="text-sm text-text-secondary font-sans">传统、信仰</p>
              </div>
            </div>
            <p className="text-sm text-text-secondary italic font-sans">
              ...以及其他16张大阿卡纳，每张都代表人生的重要阶段。
            </p>

            <h3 className="text-2xl font-bold text-text-primary mb-3 mt-6 font-sans">
              小阿卡纳（Minor Arcana）- 56张
            </h3>
            <p className="text-text-primary leading-relaxed mb-4 font-sans">
              小阿卡纳描述日常生活中的具体事件和情境，分为四个花色，每个花色14张牌：
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-bold text-text-primary mb-2 font-sans">权杖（Wands）</h4>
                <p className="text-text-primary font-sans">代表火元素，象征行动、创造力、热情和事业发展。</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-bold text-text-primary mb-2 font-sans">圣杯（Cups）</h4>
                <p className="text-text-primary font-sans">代表水元素，象征情感、爱情、人际关系和内心感受。</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-bold text-text-primary mb-2 font-sans">宝剑（Swords）</h4>
                <p className="text-text-primary font-sans">代表风元素，象征思想、沟通、冲突和决策。</p>
              </div>
              <div className="p-4 bg-background rounded-lg border border-border">
                <h4 className="font-bold text-text-primary mb-2 font-sans">星币（Pentacles）</h4>
                <p className="text-text-primary font-sans">代表土元素，象征物质、财富、工作和现实事务。</p>
              </div>
            </div>
          </section>

          {/* 如何进行塔罗占卜 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-sans">
              如何进行塔罗占卜？
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold font-sans">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 font-sans">选择牌阵</h4>
                  <p className="text-text-primary font-sans">
                    根据你的问题选择合适的牌阵。简单问题可以使用单牌或三牌阵，复杂情况建议使用凯尔特十字等大型牌阵。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold font-sans">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 font-sans">静心冥想</h4>
                  <p className="text-text-primary font-sans">
                    在抽牌前，静下心来，专注于你的问题。让直觉引导你选择与你有共鸣的牌。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold font-sans">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 font-sans">选择卡牌</h4>
                  <p className="text-text-primary font-sans">
                    从旋转的卡牌中选择指定数量的牌。每张牌的位置都有特定含义，共同构成完整的解读。
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold font-sans">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-2 font-sans">AI智能解读</h4>
                  <p className="text-text-primary font-sans">
                    我们的AI会结合牌面含义、位置意义和你的问题，为你生成专业、个性化的解读。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* AI塔罗的优势 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-sans">
              AI塔罗占卜的优势
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 border border-border rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-bold text-text-primary mb-2 font-sans">即时解读</h4>
                <p className="text-text-primary text-sm font-sans">
                  无需等待，AI立即为你生成专业解读，24小时随时可用。
                </p>
              </div>
              <div className="p-5 border border-border rounded-lg">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-bold text-text-primary mb-2 font-sans">客观中立</h4>
                <p className="text-text-primary text-sm font-sans">
                  AI基于塔罗牌传统含义，提供客观、不带偏见的解读。
                </p>
              </div>
              <div className="p-5 border border-border rounded-lg">
                <div className="text-2xl mb-2">💎</div>
                <h4 className="font-bold text-text-primary mb-2 font-sans">完全免费</h4>
                <p className="text-text-primary text-sm font-sans">
                  每日10次免费占卜机会，无需注册，保护你的隐私。
                </p>
              </div>
              <div className="p-5 border border-border rounded-lg">
                <div className="text-2xl mb-2">📚</div>
                <h4 className="font-bold text-text-primary mb-2 font-sans">专业知识库</h4>
                <p className="text-text-primary text-sm font-sans">
                  训练于大量塔罗资料，提供深入、细致的牌面解析。
                </p>
              </div>
            </div>
          </section>

          {/* 常见问题 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-sans">
              常见问题
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-text-primary mb-2 font-sans">
                  塔罗牌占卜准确吗？
                </h4>
                <p className="text-text-primary font-sans">
                  塔罗牌是一种自我探索和反思的工具，它通过象征性的牌面帮助你洞察内心、理清思路。准确性取决于你对自己的了解和对牌面的共鸣。
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-text-primary mb-2 font-sans">
                  可以问什么样的问题？
                </h4>
                <p className="text-text-primary font-sans">
                  塔罗牌适合探讨开放性问题，如"我在这段感情中应该注意什么？"而非"他/她爱我吗？"这样的是非题。最佳问题是关注自己的成长和行动方向。
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-text-primary mb-2 font-sans">
                  多久可以占卜一次？
                </h4>
                <p className="text-text-primary font-sans">
                  建议针对同一问题至少间隔一周再次占卜。频繁占卜同一问题可能会让你更加困惑，而非获得清晰指引。
                </p>
              </div>
              <div className="border-l-4 border-accent pl-4">
                <h4 className="font-bold text-text-primary mb-2 font-sans">
                  AI解读和人工解读有什么区别？
                </h4>
                <p className="text-text-primary font-sans">
                  AI解读基于传统塔罗知识，提供客观、标准化的解释。人工解读则可能融入占卜师的个人经验和直觉。AI的优势在于即时性、一致性和可访问性。
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 p-8 bg-gradient-to-r from-accent/10 to-accent-yellow/10 rounded-lg border border-accent/20 text-center">
            <h2 className="text-2xl font-bold text-text-primary mb-4 font-sans">
              开始你的塔罗占卜之旅
            </h2>
            <p className="text-text-primary mb-6 font-sans">
              78张塔罗牌，5种经典牌阵，AI智能解读，每日10次免费占卜
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition-colors font-sans"
            >
              立即开始占卜
            </Link>
          </section>
        </article>
      </main>

      {/* 页脚 */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-text-secondary text-sm font-sans">
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
