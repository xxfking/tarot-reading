import { Spread, SpreadType } from './types';

export const spreads: Spread[] = [
  {
    type: SpreadType.SINGLE,
    name: '单张牌',
    description: '适合日常指引或快速答案',
    positions: ['指引'],
    cardCount: 1,
  },
  {
    type: SpreadType.THREE_TIME,
    name: '时间之流',
    description: '探索过去、现在和未来的发展',
    positions: ['过去', '现在', '未来'],
    cardCount: 3,
  },
  {
    type: SpreadType.THREE_SITUATION,
    name: '情境三张',
    description: '分析当前情况、应采取的行动和可能的结果',
    positions: ['情况', '行动', '结果'],
    cardCount: 3,
  },
  {
    type: SpreadType.CELTIC_CROSS,
    name: '凯尔特十字',
    description: '最经典的深度解读牌阵，适合复杂问题',
    positions: [
      '现状',
      '挑战',
      '过去根源',
      '近期过去',
      '可能的未来',
      '近期未来',
      '你的态度',
      '外在影响',
      '希望与恐惧',
      '最终结果',
    ],
    cardCount: 10,
  },
  {
    type: SpreadType.RELATIONSHIP,
    name: '关系牌阵',
    description: '探索人际关系或感情问题',
    positions: [
      '你的立场',
      '对方的立场',
      '双方的连接',
      '挑战',
      '可能的结果',
    ],
    cardCount: 5,
  },
];

// 根据类型获取牌阵
export function getSpreadByType(type: SpreadType): Spread | undefined {
  return spreads.find(spread => spread.type === type);
}

// 获取所有牌阵
export function getAllSpreads(): Spread[] {
  return spreads;
}
