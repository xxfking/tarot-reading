// 塔罗牌牌组
export type Suit = 'major' | 'wands' | 'cups' | 'swords' | 'pentacles';

// 塔罗牌数据结构
export interface TarotCard {
  id: number;                    // 1-78
  name: string;                  // 中文名称
  nameEn: string;                // 英文名称
  suit: Suit;
  keywords: {
    upright: string[];           // 正位关键词（中文）
    reversed: string[];          // 逆位关键词（中文）
  };
  keywordsEn?: {
    upright: string[];           // 正位关键词（英文）
    reversed: string[];          // 逆位关键词（英文）
  };
  description: {
    upright: string;             // 正位基础含义（中文）
    reversed: string;            // 逆位基础含义（中文）
  };
  descriptionEn?: {
    upright: string;             // 正位基础含义（英文）
    reversed: string;            // 逆位基础含义（英文）
  };
  imageUrl: string;              // 牌面图片路径
}

// 牌阵类型
export enum SpreadType {
  SINGLE = 'single',                           // 单张牌
  THREE_TIME = 'three_time',                   // 三张牌（过去-现在-未来）
  THREE_SITUATION = 'three_situation',         // 三张牌（情况-行动-结果）
  CELTIC_CROSS = 'celtic_cross',               // 凯尔特十字（10张）
  RELATIONSHIP = 'relationship'                // 关系牌阵（5张）
}

// 牌阵配置
export interface Spread {
  type: SpreadType;
  name: string;
  description: string;
  positions: string[];           // 位置名称数组
  cardCount: number;
}

// 抽到的牌（包含位置和正逆位）
export interface DrawnCard {
  card: TarotCard;
  position: string;
  isReversed: boolean;
}

// AI 解读结果
export interface InterpretationResult {
  overview: string;              // 整体概述
  cardAnalysis: {
    position: string;
    card: string;
    isReversed: boolean;
    meaning: string;
  }[];
  advice: string;                // 综合建议
  timestamp: number;
}

// 抽牌历史记录
export interface ReadingHistory {
  id: string;                    // UUID
  timestamp: number;
  spreadType: SpreadType;
  question?: string;             // 用户问题
  cards: DrawnCard[];
  interpretation: InterpretationResult;
}

// 大模型服务商
export enum LLMProvider {
  OPENAI = 'openai',             // GPT-4/GPT-3.5
  ANTHROPIC = 'anthropic',       // Claude
  GEMINI = 'gemini',             // Google Gemini
  ZHIPU = 'zhipu',               // 智谱 GLM
  QWEN = 'qwen',                 // 通义千问
  DEEPSEEK = 'deepseek'          // DeepSeek
}

// 限流数据结构
export interface RateLimit {
  ip: string;
  date: string;                  // YYYY-MM-DD
  count: number;                 // 当天使用次数
  lastRequest: number;           // 最后请求时间戳
}
