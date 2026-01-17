import { Spread, SpreadType } from './types';

// Spread configuration with translation keys
export const spreadConfigs = [
  {
    type: SpreadType.SINGLE,
    cardCount: 1,
    nameKey: 'spreads.single.name',
    descriptionKey: 'spreads.single.description',
    positionKeys: ['spreads.single.positions.guidance'],
  },
  {
    type: SpreadType.THREE_TIME,
    cardCount: 3,
    nameKey: 'spreads.threeTime.name',
    descriptionKey: 'spreads.threeTime.description',
    positionKeys: [
      'spreads.threeTime.positions.past',
      'spreads.threeTime.positions.present',
      'spreads.threeTime.positions.future',
    ],
  },
  {
    type: SpreadType.THREE_SITUATION,
    cardCount: 3,
    nameKey: 'spreads.threeSituation.name',
    descriptionKey: 'spreads.threeSituation.description',
    positionKeys: [
      'spreads.threeSituation.positions.situation',
      'spreads.threeSituation.positions.action',
      'spreads.threeSituation.positions.outcome',
    ],
  },
  {
    type: SpreadType.CELTIC_CROSS,
    cardCount: 10,
    nameKey: 'spreads.celticCross.name',
    descriptionKey: 'spreads.celticCross.description',
    positionKeys: [
      'spreads.celticCross.positions.present',
      'spreads.celticCross.positions.challenge',
      'spreads.celticCross.positions.pastRoot',
      'spreads.celticCross.positions.recentPast',
      'spreads.celticCross.positions.possibleFuture',
      'spreads.celticCross.positions.nearFuture',
      'spreads.celticCross.positions.yourAttitude',
      'spreads.celticCross.positions.externalInfluence',
      'spreads.celticCross.positions.hopesAndFears',
      'spreads.celticCross.positions.finalOutcome',
    ],
  },
  {
    type: SpreadType.RELATIONSHIP,
    cardCount: 5,
    nameKey: 'spreads.relationship.name',
    descriptionKey: 'spreads.relationship.description',
    positionKeys: [
      'spreads.relationship.positions.yourPosition',
      'spreads.relationship.positions.theirPosition',
      'spreads.relationship.positions.connection',
      'spreads.relationship.positions.challenge',
      'spreads.relationship.positions.outcome',
    ],
  },
];

// Get spreads with translations
export function getSpreadsWithTranslations(t: (key: string) => string): Spread[] {
  return spreadConfigs.map(config => ({
    type: config.type,
    name: t(config.nameKey),
    description: t(config.descriptionKey),
    positions: config.positionKeys.map(key => t(key)),
    cardCount: config.cardCount,
  }));
}

// Legacy function for backward compatibility (uses Chinese)
export function getAllSpreads(): Spread[] {
  return [
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
}

// Get spread by type (legacy)
export function getSpreadByType(type: SpreadType): Spread | undefined {
  return getAllSpreads().find(spread => spread.type === type);
}
