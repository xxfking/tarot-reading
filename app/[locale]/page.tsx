import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { locales } from '@/i18n';
import { getAlternates, seoConfig, pageSEO } from '@/lib/seo-config';
import HomeClient from '@/components/HomeClient';

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Generate metadata for the home page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const alternates = getAlternates(locale, '');

  const metaByLocale: Record<string, { title: string; description: string; keywords: string }> = {
    zh: {
      title: '免费AI塔罗牌在线占卜 | 即时塔罗牌预测与解读',
      description: '免费在线AI塔罗牌占卜平台。提供5种经典牌阵、78张完整塔罗牌。AI即时解读爱情、事业与人生指引。每日免费占卜，无需注册。',
      keywords: 'AI塔罗占卜,免费塔罗牌,在线塔罗占卜,AI塔罗牌解读,免费在线塔罗,即时塔罗占卜,爱情塔罗,事业塔罗',
    },
    ja: {
      title: '無料AIタロット占い | 即座にタロットカード予測と解釈',
      description: '無料のAI搭載オンラインタロット占いプラットフォーム。5つのクラシックなスプレッドと78枚の完全なタロットカード。恋愛、キャリア、人生のガイダンスをAIが即座に解釈。',
      keywords: 'AIタロット占い,無料タロット,オンラインタロット,AIタロット解釈,タロットカード,恋愛タロット,仕事タロット',
    },
    ko: {
      title: '무료 AI 타로 점 | 즉석 타로 카드 예측 및 해석',
      description: '무료 AI 기반 온라인 타로 카드 리딩 플랫폼. 5가지 클래식 스프레드와 78장의 완전한 타로 카드. 사랑, 경력, 인생 가이던스를 위한 AI 즉석 해석.',
      keywords: 'AI 타로 점,무료 타로,온라인 타로,AI 타로 해석,타로 카드,사랑 타로,직업 타로',
    },
    fr: {
      title: 'Tirage de Tarot IA Gratuit | Prédictions Instantanées de Cartes de Tarot',
      description: 'Plateforme gratuite de tirage de tarot en ligne alimentée par l\'IA. 5 tirages classiques avec 78 cartes de tarot complètes. Interprétation IA instantanée pour l\'amour, la carrière et la vie.',
      keywords: 'tarot IA gratuit,tirage tarot gratuit,tarot en ligne,interprétation tarot IA,cartes de tarot,tarot amour,tarot carrière',
    },
    en: {
      title: pageSEO.home.title,
      description: pageSEO.home.description,
      keywords: pageSEO.home.keywords,
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

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations();

  // SEO content per locale
  const seoContent: Record<string, { heading: string; intro: string; features: string[] }> = {
    en: {
      heading: 'Free AI Tarot Reading Online',
      intro: 'Experience the ancient wisdom of tarot cards combined with modern AI technology. Our platform offers free, instant tarot card readings with professional AI interpretation. Choose from 5 classic spreads including Single Card, Three Card, Holy Triangle, Celtic Cross, and Time Flow. Each reading analyzes 78 beautifully illustrated tarot cards to provide personalized guidance for love, career, and life decisions.',
      features: ['78 Complete Tarot Cards', '5 Classic Spreads', 'AI-Powered Interpretation', 'Free Daily Readings'],
    },
    zh: {
      heading: '免费AI在线塔罗占卜',
      intro: '体验古老塔罗智慧与现代AI技术的完美结合。我们的平台提供免费、即时的塔罗牌占卜解读服务。提供5种经典牌阵：单牌、三牌阵、圣三角、凯尔特十字和时间之流。每次占卜使用78张精美塔罗牌，为您的爱情、事业和人生决策提供个性化指引。',
      features: ['78张完整塔罗牌', '5种经典牌阵', 'AI智能解读', '每日免费占卜'],
    },
    ja: {
      heading: '無料AIオンラインタロット占い',
      intro: '古代のタロットの知恵と現代のAI技術を組み合わせた体験をお楽しみください。5つのクラシックなスプレッドから選べます：シングルカード、スリーカード、ホーリートライアングル、ケルト十字、タイムフロー。78枚の美しいタロットカードで、恋愛、キャリア、人生の決断にパーソナライズされたガイダンスを提供します。',
      features: ['78枚の完全なタロットカード', '5つのクラシックスプレッド', 'AI搭載の解釈', '毎日無料リーディング'],
    },
    ko: {
      heading: '무료 AI 온라인 타로 점',
      intro: '고대 타로의 지혜와 현대 AI 기술의 완벽한 조합을 경험하세요. 5가지 클래식 스프레드에서 선택하세요: 싱글 카드, 쓰리 카드, 홀리 트라이앵글, 켈틱 크로스, 타임 플로우. 78장의 아름다운 타로 카드로 사랑, 경력, 인생 결정에 대한 맞춤형 가이던스를 제공합니다.',
      features: ['78장의 완전한 타로 카드', '5가지 클래식 스프레드', 'AI 기반 해석', '매일 무료 리딩'],
    },
    fr: {
      heading: 'Tirage de Tarot IA Gratuit en Ligne',
      intro: 'Découvrez la sagesse ancienne du tarot combinée à la technologie IA moderne. Notre plateforme propose des tirages de tarot gratuits et instantanés avec interprétation IA professionnelle. Choisissez parmi 5 tirages classiques : Carte Unique, Trois Cartes, Triangle Sacré, Croix Celtique et Flux Temporel. 78 cartes de tarot magnifiquement illustrées pour des conseils personnalisés.',
      features: ['78 Cartes de Tarot Complètes', '5 Tirages Classiques', 'Interprétation par IA', 'Tirages Quotidiens Gratuits'],
    },
  };

  const content = seoContent[locale] || seoContent.en;

  return (
    <>
      <HomeClient />
      {/* SEO Content - visible to crawlers, styled as a subtle section */}
      <section className="bg-white/80 border-t border-border/30">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-text-primary mb-6 text-center">
            {content.heading}
          </h2>
          <p className="text-text-secondary font-serif text-base md:text-lg leading-relaxed mb-8 max-w-3xl mx-auto text-center">
            {content.intro}
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {content.features.map((feature, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-accent/5 border border-accent/20 rounded-lg text-sm text-text-primary font-sans"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
