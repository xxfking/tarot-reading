import { TarotCard, Suit } from './types';

export const tarotCards: TarotCard[] = [
  // 大阿卡纳 (Major Arcana) - 0-21
  {
    id: 0,
    name: '愚者',
    nameEn: 'The Fool',
    suit: 'major',
    keywords: {
      upright: ['新开始', '冒险', '天真', '自由', '潜力'],
      reversed: ['鲁莽', '冒失', '缺乏计划', '风险'],
    },
    keywordsEn: {
      upright: ['New Beginning', 'Adventure', 'Innocence', 'Freedom', 'Potential'],
      reversed: ['Recklessness', 'Carelessness', 'Lack of Planning', 'Risk'],
    },
    description: {
      upright: '愚者代表新的开始和无限的可能性。象征着纯真、自由和对未知的勇敢探索。',
      reversed: '逆位时提醒你需要更加谨慎，避免过于冲动或缺乏计划的行动。',
    },
    descriptionEn: {
      upright: 'The Fool represents new beginnings and infinite possibilities. Symbolizes innocence, freedom, and courageous exploration of the unknown.',
      reversed: 'Reversed, it reminds you to be more cautious and avoid impulsive or unplanned actions.',
    },
    imageUrl: '/cards/major-00-fool.jpg',
  },
  {
    id: 1,
    name: '魔术师',
    nameEn: 'The Magician',
    suit: 'major',
    keywords: {
      upright: ['行动力', '创造', '技能', '意志力', '专注'],
      reversed: ['操纵', '欺骗', '滥用才能', '缺乏专注'],
    },
    keywordsEn: {
      upright: ['Action', 'Creation', 'Skills', 'Willpower', 'Focus'],
      reversed: ['Manipulation', 'Deception', 'Misuse of Talents', 'Lack of Focus'],
    },
    description: {
      upright: '魔术师象征着将想法转化为现实的能力。你拥有所需的资源和技能。',
      reversed: '逆位时警告可能存在欺骗或才能的滥用，需要诚实地审视自己的动机。',
    },
    descriptionEn: {
      upright: 'The Magician symbolizes the ability to transform ideas into reality. You possess the necessary resources and skills.',
      reversed: 'Reversed, it warns of potential deception or misuse of talents, requiring honest examination of your motives.',
    },
    imageUrl: '/cards/major-01-magician.jpg',
  },
  {
    id: 2,
    name: '女祭司',
    nameEn: 'The High Priestess',
    suit: 'major',
    keywords: {
      upright: ['直觉', '神秘', '潜意识', '智慧', '静思'],
      reversed: ['隐瞒秘密', '缺乏洞察', '忽视直觉'],
    },
    keywordsEn: {
      upright: ['Intuition', 'Mystery', 'Subconscious', 'Wisdom', 'Contemplation'],
      reversed: ['Hidden Secrets', 'Lack of Insight', 'Ignoring Intuition'],
    },
    description: {
      upright: '女祭司代表内在智慧和直觉。倾听内心的声音，相信你的第六感。',
      reversed: '逆位时提示你可能忽视了内心的声音，或有重要信息被隐藏。',
    },
    descriptionEn: {
      upright: 'The High Priestess represents inner wisdom and intuition. Listen to your inner voice and trust your sixth sense.',
      reversed: 'Reversed, it suggests you may be ignoring your inner voice, or important information is being hidden.',
    },
    imageUrl: '/cards/major-02-high-priestess.jpg',
  },
  {
    id: 3,
    name: '皇后',
    nameEn: 'The Empress',
    suit: 'major',
    keywords: {
      upright: ['丰饶', 'nurturing', '创造力', '美丽', '自然'],
      reversed: ['依赖', '窒息', '创意受阻'],
    },
    keywordsEn: {
      upright: ['Abundance', 'Nurturing', 'Creativity', 'Beauty', 'Nature'],
      reversed: ['Dependence', 'Suffocation', 'Creative Block'],
    },
    description: {
      upright: '皇后象征丰盛和创造力。关注滋养自己和他人，享受生活的美好。',
      reversed: '逆位时可能表示过度依赖或创造力受到阻碍。',
    },
    descriptionEn: {
      upright: 'The Empress symbolizes abundance and creativity. Focus on nurturing yourself and others, and enjoy the beauty of life.',
      reversed: 'Reversed, it may indicate excessive dependence or creativity being blocked.',
    },
    imageUrl: '/cards/major-03-empress.jpg',
  },
  {
    id: 4,
    name: '皇帝',
    nameEn: 'The Emperor',
    suit: 'major',
    keywords: {
      upright: ['权威', '结构', '掌控', '稳定', '父亲形象'],
      reversed: ['专制', '僵化', '缺乏纪律'],
    },
    keywordsEn: {
      upright: ['Authority', 'Structure', 'Control', 'Stability', 'Father Figure'],
      reversed: ['Domination', 'Rigidity', 'Lack of Discipline'],
    },
    description: {
      upright: '皇帝代表秩序和权威。建立结构和规则将帮助你实现目标。',
      reversed: '逆位时警告可能过于严格或失去控制，需要平衡。',
    },
    descriptionEn: {
      upright: 'The Emperor represents order and authority. Establishing structure and rules will help you achieve your goals.',
      reversed: 'Reversed, it warns of being too strict or losing control, requiring balance.',
    },
    imageUrl: '/cards/major-04-emperor.jpg',
  },
  {
    id: 5,
    name: '教皇',
    nameEn: 'The Hierophant',
    suit: 'major',
    keywords: {
      upright: ['传统', '教导', '信仰', '智慧', '指引'],
      reversed: ['叛逆', '打破传统', '质疑'],
    },
    keywordsEn: {
      upright: ['Tradition', 'Teaching', 'Faith', 'Wisdom', 'Guidance'],
      reversed: ['Rebellion', 'Breaking Tradition', 'Questioning'],
    },
    description: {
      upright: '教皇象征传统智慧和精神指引。寻求导师或遵循既定的道路。',
      reversed: '逆位时鼓励你质疑传统，找到自己的信仰体系。',
    },
    descriptionEn: {
      upright: 'The Hierophant symbolizes traditional wisdom and spiritual guidance. Seek a mentor or follow an established path.',
      reversed: 'Reversed, it encourages you to question tradition and find your own belief system.',
    },
    imageUrl: '/cards/major-05-hierophant.jpg',
  },
  {
    id: 6,
    name: '恋人',
    nameEn: 'The Lovers',
    suit: 'major',
    keywords: {
      upright: ['爱情', '和谐', '选择', '关系', '价值观'],
      reversed: ['失衡', '冲突', '错误选择'],
    },
    keywordsEn: {
      upright: ['Love', 'Harmony', 'Choice', 'Relationships', 'Values'],
      reversed: ['Imbalance', 'Conflict', 'Wrong Choice'],
    },
    description: {
      upright: '恋人代表重要的选择和深刻的连接。关注你的价值观和关系。',
      reversed: '逆位时提示关系中的不和谐或面临艰难的抉择。',
    },
    descriptionEn: {
      upright: 'The Lovers represent important choices and deep connections. Focus on your values and relationships.',
      reversed: 'Reversed, it indicates disharmony in relationships or facing difficult choices.',
    },
    imageUrl: '/cards/major-06-lovers.jpg',
  },
  {
    id: 7,
    name: '战车',
    nameEn: 'The Chariot',
    suit: 'major',
    keywords: {
      upright: ['胜利', '决心', '控制', '前进', '意志力'],
      reversed: ['失控', '缺乏方向', '挫败'],
    },
    keywordsEn: {
      upright: ['Victory', 'Determination', 'Control', 'Moving Forward', 'Willpower'],
      reversed: ['Out of Control', 'Lack of Direction', 'Defeat'],
    },
    description: {
      upright: '战车象征通过决心和专注获得胜利。保持方向，克服障碍。',
      reversed: '逆位时警告可能失去方向或难以控制局面。',
    },
    descriptionEn: {
      upright: 'The Chariot symbolizes victory through determination and focus. Stay on course and overcome obstacles.',
      reversed: 'Reversed, it warns of losing direction or difficulty controlling the situation.',
    },
    imageUrl: '/cards/major-07-chariot.jpg',
  },
  {
    id: 8,
    name: '力量',
    nameEn: 'Strength',
    suit: 'major',
    keywords: {
      upright: ['勇气', '耐心', '温柔的力量', '同情心'],
      reversed: ['软弱', '不安全感', '自我怀疑'],
    },
    keywordsEn: {
      upright: ['Courage', 'Patience', 'Gentle Strength', 'Compassion'],
      reversed: ['Weakness', 'Insecurity', 'Self-Doubt'],
    },
    description: {
      upright: '力量代表内在的勇气和温柔的坚韧。用爱和耐心征服挑战。',
      reversed: '逆位时提示缺乏自信或需要重新找回内在力量。',
    },
    descriptionEn: {
      upright: 'Strength represents inner courage and gentle resilience. Conquer challenges with love and patience.',
      reversed: 'Reversed, it indicates lack of confidence or the need to rediscover your inner strength.',
    },
    imageUrl: '/cards/major-08-strength.jpg',
  },
  {
    id: 9,
    name: '隐者',
    nameEn: 'The Hermit',
    suit: 'major',
    keywords: {
      upright: ['内省', '独处', '寻找', '智慧', '指引'],
      reversed: ['孤立', '孤独', '迷失'],
    },
    keywordsEn: {
      upright: ['Introspection', 'Solitude', 'Seeking', 'Wisdom', 'Guidance'],
      reversed: ['Isolation', 'Loneliness', 'Lost'],
    },
    description: {
      upright: '隐者象征向内寻找答案。需要独处和反思的时间。',
      reversed: '逆位时警告过度孤立或逃避现实。',
    },
    descriptionEn: {
      upright: 'The Hermit symbolizes looking inward for answers. Time for solitude and reflection is needed.',
      reversed: 'Reversed, it warns of excessive isolation or avoiding reality.',
    },
    imageUrl: '/cards/major-09-hermit.jpg',
  },
  {
    id: 10,
    name: '命运之轮',
    nameEn: 'Wheel of Fortune',
    suit: 'major',
    keywords: {
      upright: ['变化', '命运', '循环', '转折点', '机遇'],
      reversed: ['厄运', '抗拒改变', '失控'],
    },
    keywordsEn: {
      upright: ['Change', 'Destiny', 'Cycles', 'Turning Point', 'Opportunity'],
      reversed: ['Bad Luck', 'Resisting Change', 'Out of Control'],
    },
    description: {
      upright: '命运之轮代表生命的循环和不可避免的变化。拥抱转变。',
      reversed: '逆位时提示抗拒改变或经历困难时期。',
    },
    descriptionEn: {
      upright: 'The Wheel of Fortune represents life\'s cycles and inevitable change. Embrace transformation.',
      reversed: 'Reversed, it indicates resistance to change or experiencing a difficult period.',
    },
    imageUrl: '/cards/major-10-wheel.jpg',
  },
  {
    id: 11,
    name: '正义',
    nameEn: 'Justice',
    suit: 'major',
    keywords: {
      upright: ['公平', '真相', '因果', '法律', '诚实'],
      reversed: ['不公', '逃避责任', '不诚实'],
    },
    keywordsEn: {
      upright: ['Fairness', 'Truth', 'Cause and Effect', 'Law', 'Honesty'],
      reversed: ['Injustice', 'Avoiding Responsibility', 'Dishonesty'],
    },
    description: {
      upright: '正义象征公平和真相。你的行为会带来相应的结果。',
      reversed: '逆位时警告不公平或需要面对自己的责任。',
    },
    descriptionEn: {
      upright: 'Justice symbolizes fairness and truth. Your actions will bring corresponding results.',
      reversed: 'Reversed, it warns of unfairness or the need to face your responsibilities.',
    },
    imageUrl: '/cards/major-11-justice.jpg',
  },
  {
    id: 12,
    name: '倒吊人',
    nameEn: 'The Hanged Man',
    suit: 'major',
    keywords: {
      upright: ['暂停', '放手', '新视角', '牺牲', '耐心'],
      reversed: ['停滞', '拖延', '抗拒'],
    },
    keywordsEn: {
      upright: ['Pause', 'Letting Go', 'New Perspective', 'Sacrifice', 'Patience'],
      reversed: ['Stagnation', 'Delay', 'Resistance'],
    },
    description: {
      upright: '倒吊人代表需要暂停和改变视角。放手可能带来新的理解。',
      reversed: '逆位时提示不必要的拖延或抗拒必要的改变。',
    },
    descriptionEn: {
      upright: 'The Hanged Man represents the need to pause and change perspective. Letting go may bring new understanding.',
      reversed: 'Reversed, it indicates unnecessary delay or resistance to necessary change.',
    },
    imageUrl: '/cards/major-12-hanged-man.jpg',
  },
  {
    id: 13,
    name: '死神',
    nameEn: 'Death',
    suit: 'major',
    keywords: {
      upright: ['结束', '转变', '新生', '放下', '过渡'],
      reversed: ['抗拒改变', '停滞', '无法放手'],
    },
    keywordsEn: {
      upright: ['Endings', 'Transformation', 'Renewal', 'Letting Go', 'Transition'],
      reversed: ['Resisting Change', 'Stagnation', 'Unable to Let Go'],
    },
    description: {
      upright: '死神象征重要的结束和转变。旧的必须结束，新的才能开始。',
      reversed: '逆位时提示抗拒必要的改变或无法放下过去。',
    },
    descriptionEn: {
      upright: 'Death symbolizes important endings and transformation. The old must end for the new to begin.',
      reversed: 'Reversed, it indicates resistance to necessary change or inability to let go of the past.',
    },
    imageUrl: '/cards/major-13-death.jpg',
  },
  {
    id: 14,
    name: '节制',
    nameEn: 'Temperance',
    suit: 'major',
    keywords: {
      upright: ['平衡', '节制', '和谐', '耐心', '中庸'],
      reversed: ['失衡', '过度', '缺乏和谐'],
    },
    keywordsEn: {
      upright: ['Balance', 'Moderation', 'Harmony', 'Patience', 'Middle Path'],
      reversed: ['Imbalance', 'Excess', 'Lack of Harmony'],
    },
    description: {
      upright: '节制代表平衡和和谐。寻找中间道路，保持耐心。',
      reversed: '逆位时警告生活失衡或过度沉溺。',
    },
    descriptionEn: {
      upright: 'Temperance represents balance and harmony. Find the middle path and maintain patience.',
      reversed: 'Reversed, it warns of life imbalance or excessive indulgence.',
    },
    imageUrl: '/cards/major-14-temperance.jpg',
  },
  {
    id: 15,
    name: '恶魔',
    nameEn: 'The Devil',
    suit: 'major',
    keywords: {
      upright: ['束缚', '成瘾', '物质主义', '欲望', '阴影'],
      reversed: ['解脱', '觉醒', '打破枷锁'],
    },
    keywordsEn: {
      upright: ['Bondage', 'Addiction', 'Materialism', 'Desire', 'Shadow'],
      reversed: ['Liberation', 'Awakening', 'Breaking Free'],
    },
    description: {
      upright: '恶魔象征束缚和限制。审视什么在控制你，寻找自由。',
      reversed: '逆位时表示从束缚中解脱或意识到问题所在。',
    },
    descriptionEn: {
      upright: 'The Devil symbolizes bondage and limitations. Examine what controls you and seek freedom.',
      reversed: 'Reversed, it indicates liberation from bondage or becoming aware of the problem.',
    },
    imageUrl: '/cards/major-15-devil.jpg',
  },
  {
    id: 16,
    name: '塔',
    nameEn: 'The Tower',
    suit: 'major',
    keywords: {
      upright: ['突变', '混乱', '启示', '崩溃', '觉醒'],
      reversed: ['避免灾难', '恐惧改变', '延迟'],
    },
    keywordsEn: {
      upright: ['Sudden Change', 'Chaos', 'Revelation', 'Collapse', 'Awakening'],
      reversed: ['Avoiding Disaster', 'Fear of Change', 'Delay'],
    },
    description: {
      upright: '塔代表突然的改变和旧结构的崩塌。虽然痛苦但必要。',
      reversed: '逆位时提示避免了灾难或正在延迟必要的改变。',
    },
    descriptionEn: {
      upright: 'The Tower represents sudden change and the collapse of old structures. Though painful, it is necessary.',
      reversed: 'Reversed, it indicates avoiding disaster or delaying necessary change.',
    },
    imageUrl: '/cards/major-16-tower.jpg',
  },
  {
    id: 17,
    name: '星星',
    nameEn: 'The Star',
    suit: 'major',
    keywords: {
      upright: ['希望', '信念', '灵感', '平静', '更新'],
      reversed: ['失望', '缺乏信心', '绝望'],
    },
    keywordsEn: {
      upright: ['Hope', 'Faith', 'Inspiration', 'Serenity', 'Renewal'],
      reversed: ['Disappointment', 'Lack of Confidence', 'Despair'],
    },
    description: {
      upright: '星星象征希望和疗愈。保持信念，美好即将到来。',
      reversed: '逆位时提示失去希望或需要重新找回信心。',
    },
    descriptionEn: {
      upright: 'The Star symbolizes hope and healing. Keep the faith, beauty is coming.',
      reversed: 'Reversed, it indicates loss of hope or the need to rediscover confidence.',
    },
    imageUrl: '/cards/major-17-star.jpg',
  },
  {
    id: 18,
    name: '月亮',
    nameEn: 'The Moon',
    suit: 'major',
    keywords: {
      upright: ['幻觉', '恐惧', '潜意识', '直觉', '不确定'],
      reversed: ['释放恐惧', '真相揭示', '清晰'],
    },
    keywordsEn: {
      upright: ['Illusion', 'Fear', 'Subconscious', 'Intuition', 'Uncertainty'],
      reversed: ['Releasing Fear', 'Truth Revealed', 'Clarity'],
    },
    description: {
      upright: '月亮代表不确定和潜意识的恐惧。信任直觉穿越迷雾。',
      reversed: '逆位时表示恐惧消散或真相逐渐显现。',
    },
    descriptionEn: {
      upright: 'The Moon represents uncertainty and subconscious fears. Trust your intuition to navigate through the mist.',
      reversed: 'Reversed, it indicates fears dissipating or truth gradually emerging.',
    },
    imageUrl: '/cards/major-18-moon.jpg',
  },
  {
    id: 19,
    name: '太阳',
    nameEn: 'The Sun',
    suit: 'major',
    keywords: {
      upright: ['成功', '活力', '快乐', '真实', '光明'],
      reversed: ['暂时低迷', '过度乐观'],
    },
    keywordsEn: {
      upright: ['Success', 'Vitality', 'Joy', 'Authenticity', 'Light'],
      reversed: ['Temporary Gloom', 'Excessive Optimism'],
    },
    description: {
      upright: '太阳象征成功和喜悦。一切都在向好的方向发展。',
      reversed: '逆位时提示暂时的阴霾或需要调整过度的乐观。',
    },
    descriptionEn: {
      upright: 'The Sun symbolizes success and joy. Everything is moving in a positive direction.',
      reversed: 'Reversed, it indicates temporary clouds or the need to adjust excessive optimism.',
    },
    imageUrl: '/cards/major-19-sun.jpg',
  },
  {
    id: 20,
    name: '审判',
    nameEn: 'Judgement',
    suit: 'major',
    keywords: {
      upright: ['重生', '觉醒', '决定', '宽恕', '召唤'],
      reversed: ['自我怀疑', '逃避', '缺乏觉知'],
    },
    keywordsEn: {
      upright: ['Rebirth', 'Awakening', 'Decision', 'Forgiveness', 'Calling'],
      reversed: ['Self-Doubt', 'Avoidance', 'Lack of Awareness'],
    },
    description: {
      upright: '审判代表觉醒和重生。回顾过去，做出重要决定。',
      reversed: '逆位时提示逃避责任或难以做出判断。',
    },
    descriptionEn: {
      upright: 'Judgement represents awakening and rebirth. Review the past and make important decisions.',
      reversed: 'Reversed, it indicates avoiding responsibility or difficulty making judgments.',
    },
    imageUrl: '/cards/major-20-judgement.jpg',
  },
  {
    id: 21,
    name: '世界',
    nameEn: 'The World',
    suit: 'major',
    keywords: {
      upright: ['完成', '成就', '圆满', '旅程结束', '整合'],
      reversed: ['未完成', '缺乏闭环', '延迟'],
    },
    keywordsEn: {
      upright: ['Completion', 'Achievement', 'Fulfillment', 'Journey\'s End', 'Integration'],
      reversed: ['Incomplete', 'Lack of Closure', 'Delay'],
    },
    description: {
      upright: '世界象征完成和成就。一个周期圆满结束，准备新的开始。',
      reversed: '逆位时提示目标尚未达成或需要最后的努力。',
    },
    descriptionEn: {
      upright: 'The World symbolizes completion and achievement. A cycle comes to a perfect end, ready for a new beginning.',
      reversed: 'Reversed, it indicates goals not yet achieved or the need for final effort.',
    },
    imageUrl: '/cards/major-21-world.jpg',
  },

  // 权杖（Wands）- 火元素 - 22-35
  {
    id: 22,
    name: '权杖王牌',
    nameEn: 'Ace of Wands',
    suit: 'wands',
    keywords: {
      upright: ['灵感', '创造力', '新机会', '成长', '潜力'],
      reversed: ['缺乏方向', '延迟', '创意受阻'],
    },
    keywordsEn: {
      upright: ['Inspiration', 'Creativity', 'New Opportunity', 'Growth', 'Potential'],
      reversed: ['Lack of Direction', 'Delay', 'Creative Block'],
    },
    description: {
      upright: '权杖王牌代表创造性的火花和新的开始。抓住机会去创造。',
      reversed: '逆位时提示缺乏方向或创意受到阻碍。',
    },
    descriptionEn: {
      upright: 'Ace of Wands represents the creative spark and new beginnings. Seize the opportunity to create.',
      reversed: 'Reversed, it indicates lack of direction or creativity being blocked.',
    },
    imageUrl: '/cards/wands-01-ace.jpg',
  },
  {
    id: 23,
    name: '权杖二',
    nameEn: 'Two of Wands',
    suit: 'wands',
    keywords: {
      upright: ['计划', '决策', '发现', '个人力量'],
      reversed: ['犹豫不决', '恐惧未知', '缺乏计划'],
    },
    keywordsEn: {
      upright: ['Planning', 'Decision-Making', 'Discovery', 'Personal Power'],
      reversed: ['Indecision', 'Fear of Unknown', 'Lack of Planning'],
    },
    description: {
      upright: '权杖二象征规划未来。你正站在新旅程的起点。',
      reversed: '逆位时提示犹豫不决或害怕迈出下一步。',
    },
    descriptionEn: {
      upright: 'Two of Wands symbolizes planning the future. You stand at the starting point of a new journey.',
      reversed: 'Reversed, it indicates indecision or fear of taking the next step.',
    },
    imageUrl: '/cards/wands-02.jpg',
  },
  {
    id: 24,
    name: '权杖三',
    nameEn: 'Three of Wands',
    suit: 'wands',
    keywords: {
      upright: ['扩展', '远见', '领导力', '前进'],
      reversed: ['缺乏远见', '延迟', '受限'],
    },
    keywordsEn: {
      upright: ['Expansion', 'Foresight', 'Leadership', 'Moving Forward'],
      reversed: ['Lack of Vision', 'Delay', 'Limitation'],
    },
    description: {
      upright: '权杖三代表扩展和远见。你的努力开始显现成果。',
      reversed: '逆位时警告计划可能延迟或缺乏长远眼光。',
    },
    descriptionEn: {
      upright: 'Three of Wands represents expansion and foresight. Your efforts are beginning to show results.',
      reversed: 'Reversed, it warns that plans may be delayed or lacking long-term vision.',
    },
    imageUrl: '/cards/wands-03.jpg',
  },
  {
    id: 25,
    name: '权杖四',
    nameEn: 'Four of Wands',
    suit: 'wands',
    keywords: {
      upright: ['庆祝', '和谐', '家庭', '里程碑'],
      reversed: ['不稳定', '缺乏支持', '延迟庆祝'],
    },
    keywordsEn: {
      upright: ['Celebration', 'Harmony', 'Home', 'Milestone'],
      reversed: ['Instability', 'Lack of Support', 'Delayed Celebration'],
    },
    description: {
      upright: '权杖四象征庆祝和稳定。享受你的成就和支持。',
      reversed: '逆位时提示不稳定或庆祝被延迟。',
    },
    descriptionEn: {
      upright: 'Four of Wands symbolizes celebration and stability. Enjoy your achievements and support.',
      reversed: 'Reversed, it indicates instability or celebration being delayed.',
    },
    imageUrl: '/cards/wands-04.jpg',
  },
  {
    id: 26,
    name: '权杖五',
    nameEn: 'Five of Wands',
    suit: 'wands',
    keywords: {
      upright: ['冲突', '竞争', '挑战', '多样性'],
      reversed: ['避免冲突', '内在冲突', '和解'],
    },
    keywordsEn: {
      upright: ['Conflict', 'Competition', 'Challenge', 'Diversity'],
      reversed: ['Avoiding Conflict', 'Inner Conflict', 'Reconciliation'],
    },
    description: {
      upright: '权杖五代表竞争和分歧。通过挑战成长。',
      reversed: '逆位时提示冲突缓和或内心挣扎。',
    },
    descriptionEn: {
      upright: 'Five of Wands represents competition and disagreement. Grow through challenges.',
      reversed: 'Reversed, it indicates conflict easing or inner struggle.',
    },
    imageUrl: '/cards/wands-05.jpg',
  },
  {
    id: 27,
    name: '权杖六',
    nameEn: 'Six of Wands',
    suit: 'wands',
    keywords: {
      upright: ['胜利', '认可', '成功', '自信'],
      reversed: ['失败', '缺乏认可', '自负'],
    },
    keywordsEn: {
      upright: ['Victory', 'Recognition', 'Success', 'Confidence'],
      reversed: ['Failure', 'Lack of Recognition', 'Arrogance'],
    },
    description: {
      upright: '权杖六象征公开的胜利和认可。享受你的成功。',
      reversed: '逆位时警告过度自负或缺乏应得的认可。',
    },
    descriptionEn: {
      upright: 'Six of Wands symbolizes public victory and recognition. Enjoy your success.',
      reversed: 'Reversed, it warns of excessive arrogance or lack of deserved recognition.',
    },
    imageUrl: '/cards/wands-06.jpg',
  },
  {
    id: 28,
    name: '权杖七',
    nameEn: 'Seven of Wands',
    suit: 'wands',
    keywords: {
      upright: ['防御', '坚持', '挑战', '毅力'],
      reversed: ['放弃', '被压倒', '疲惫'],
    },
    keywordsEn: {
      upright: ['Defense', 'Perseverance', 'Challenge', 'Determination'],
      reversed: ['Giving Up', 'Overwhelmed', 'Exhaustion'],
    },
    description: {
      upright: '权杖七代表捍卫立场。坚持你的信念。',
      reversed: '逆位时提示感到被压倒或考虑放弃。',
    },
    descriptionEn: {
      upright: 'Seven of Wands represents defending your position. Stand by your beliefs.',
      reversed: 'Reversed, it indicates feeling overwhelmed or considering giving up.',
    },
    imageUrl: '/cards/wands-07.jpg',
  },
  {
    id: 29,
    name: '权杖八',
    nameEn: 'Eight of Wands',
    suit: 'wands',
    keywords: {
      upright: ['快速行动', '进展', '交流', '运动'],
      reversed: ['延迟', '挫折', '失控'],
    },
    keywordsEn: {
      upright: ['Rapid Action', 'Progress', 'Communication', 'Movement'],
      reversed: ['Delay', 'Frustration', 'Out of Control'],
    },
    description: {
      upright: '权杖八象征快速的进展。事情正在加速发展。',
      reversed: '逆位时警告延迟或事情进展过快失控。',
    },
    descriptionEn: {
      upright: 'Eight of Wands symbolizes rapid progress. Things are accelerating.',
      reversed: 'Reversed, it warns of delays or things moving too fast and spiraling out of control.',
    },
    imageUrl: '/cards/wands-08.jpg',
  },
  {
    id: 30,
    name: '权杖九',
    nameEn: 'Nine of Wands',
    suit: 'wands',
    keywords: {
      upright: ['韧性', '毅力', '防御', '准备'],
      reversed: ['偏执', '僵化', '疲惫'],
    },
    keywordsEn: {
      upright: ['Resilience', 'Perseverance', 'Defense', 'Preparedness'],
      reversed: ['Paranoia', 'Rigidity', 'Exhaustion'],
    },
    description: {
      upright: '权杖九代表坚韧和准备。虽然疲惫但不要放弃。',
      reversed: '逆位时提示过度防御或精疲力竭。',
    },
    descriptionEn: {
      upright: 'Nine of Wands represents resilience and preparedness. Though tired, don\'t give up.',
      reversed: 'Reversed, it indicates being overly defensive or completely exhausted.',
    },
    imageUrl: '/cards/wands-09.jpg',
  },
  {
    id: 31,
    name: '权杖十',
    nameEn: 'Ten of Wands',
    suit: 'wands',
    keywords: {
      upright: ['负担', '责任', '压力', '完成'],
      reversed: ['放下负担', '委派', '解脱'],
    },
    keywordsEn: {
      upright: ['Burden', 'Responsibility', 'Pressure', 'Completion'],
      reversed: ['Letting Go of Burdens', 'Delegation', 'Relief'],
    },
    description: {
      upright: '权杖十象征沉重的负担。考虑委派或放下一些责任。',
      reversed: '逆位时表示开始放下负担或学会委派。',
    },
    descriptionEn: {
      upright: 'Ten of Wands symbolizes heavy burdens. Consider delegating or releasing some responsibilities.',
      reversed: 'Reversed, it indicates beginning to let go of burdens or learning to delegate.',
    },
    imageUrl: '/cards/wands-10.jpg',
  },
  {
    id: 32,
    name: '权杖侍从',
    nameEn: 'Page of Wands',
    suit: 'wands',
    keywords: {
      upright: ['探索', '热情', '自由精神', '好消息'],
      reversed: ['缺乏方向', '拖延', '坏消息'],
    },
    keywordsEn: {
      upright: ['Exploration', 'Enthusiasm', 'Free Spirit', 'Good News'],
      reversed: ['Lack of Direction', 'Procrastination', 'Bad News'],
    },
    description: {
      upright: '权杖侍从代表探索和新的冒险。保持好奇心。',
      reversed: '逆位时提示缺乏计划或收到令人失望的消息。',
    },
    descriptionEn: {
      upright: 'Page of Wands represents exploration and new adventures. Stay curious.',
      reversed: 'Reversed, it indicates lack of planning or receiving disappointing news.',
    },
    imageUrl: '/cards/wands-page.jpg',
  },
  {
    id: 33,
    name: '权杖骑士',
    nameEn: 'Knight of Wands',
    suit: 'wands',
    keywords: {
      upright: ['行动', '冒险', '冲动', '激情'],
      reversed: ['鲁莽', '缺乏自制', '受挫'],
    },
    keywordsEn: {
      upright: ['Action', 'Adventure', 'Impulsiveness', 'Passion'],
      reversed: ['Recklessness', 'Lack of Self-Control', 'Frustration'],
    },
    description: {
      upright: '权杖骑士象征充满激情的行动。勇敢前进。',
      reversed: '逆位时警告过于冲动或缺乏深思熟虑。',
    },
    descriptionEn: {
      upright: 'Knight of Wands symbolizes passionate action. Move forward bravely.',
      reversed: 'Reversed, it warns of being too impulsive or lacking thoughtfulness.',
    },
    imageUrl: '/cards/wands-knight.jpg',
  },
  {
    id: 34,
    name: '权杖王后',
    nameEn: 'Queen of Wands',
    suit: 'wands',
    keywords: {
      upright: ['自信', '独立', '魅力', '决心'],
      reversed: ['自私', '嫉妒', '不安全感'],
    },
    keywordsEn: {
      upright: ['Confidence', 'Independence', 'Charisma', 'Determination'],
      reversed: ['Selfishness', 'Jealousy', 'Insecurity'],
    },
    description: {
      upright: '权杖王后代表自信和魅力。拥抱你的个人力量。',
      reversed: '逆位时提示缺乏自信或嫉妒心作祟。',
    },
    descriptionEn: {
      upright: 'Queen of Wands represents confidence and charisma. Embrace your personal power.',
      reversed: 'Reversed, it indicates lack of confidence or jealousy at play.',
    },
    imageUrl: '/cards/wands-queen.jpg',
  },
  {
    id: 35,
    name: '权杖国王',
    nameEn: 'King of Wands',
    suit: 'wands',
    keywords: {
      upright: ['领导力', '远见', '企业家精神', '荣誉'],
      reversed: ['专横', '冲动', '傲慢'],
    },
    keywordsEn: {
      upright: ['Leadership', 'Vision', 'Entrepreneurship', 'Honor'],
      reversed: ['Domineering', 'Impulsiveness', 'Arrogance'],
    },
    description: {
      upright: '权杖国王象征强大的领导力。以愿景引领他人。',
      reversed: '逆位时警告过于专断或缺乏远见。',
    },
    descriptionEn: {
      upright: 'King of Wands symbolizes powerful leadership. Lead others with vision.',
      reversed: 'Reversed, it warns of being too domineering or lacking foresight.',
    },
    imageUrl: '/cards/wands-king.jpg',
  },

  // 圣杯（Cups）- 水元素 - 36-49
  {
    id: 36,
    name: '圣杯王牌',
    nameEn: 'Ace of Cups',
    suit: 'cups',
    keywords: {
      upright: ['新的爱', '情感', '直觉', '创造力'],
      reversed: ['情感受阻', '压抑感受', '空虚'],
    },
    keywordsEn: {
      upright: ['New Love', 'Emotions', 'Intuition', 'Creativity'],
      reversed: ['Blocked Emotions', 'Repressed Feelings', 'Emptiness'],
    },
    description: {
      upright: '圣杯王牌代表情感的新开始。敞开心扉接受爱。',
      reversed: '逆位时提示情感被压抑或难以表达感受。',
    },
    descriptionEn: {
      upright: 'Ace of Cups represents a new beginning in emotions. Open your heart to love.',
      reversed: 'Reversed, it indicates emotions being repressed or difficulty expressing feelings.',
    },
    imageUrl: '/cards/cups-01-ace.jpg',
  },
  {
    id: 37,
    name: '圣杯二',
    nameEn: 'Two of Cups',
    suit: 'cups',
    keywords: {
      upright: ['伙伴关系', '和谐', '爱情', '联合'],
      reversed: ['不平衡', '破裂', '误解'],
    },
    keywordsEn: {
      upright: ['Partnership', 'Harmony', 'Love', 'Union'],
      reversed: ['Imbalance', 'Broken Relationship', 'Misunderstanding'],
    },
    description: {
      upright: '圣杯二象征和谐的伙伴关系。相互尊重和理解。',
      reversed: '逆位时警告关系失衡或沟通出现问题。',
    },
    descriptionEn: {
      upright: 'Two of Cups symbolizes harmonious partnership. Mutual respect and understanding.',
      reversed: 'Reversed, it warns of relationship imbalance or communication problems.',
    },
    imageUrl: '/cards/cups-02.jpg',
  },
  {
    id: 38,
    name: '圣杯三',
    nameEn: 'Three of Cups',
    suit: 'cups',
    keywords: {
      upright: ['庆祝', '友谊', '创造力', '团体'],
      reversed: ['过度放纵', '孤立', '破裂的友谊'],
    },
    keywordsEn: {
      upright: ['Celebration', 'Friendship', 'Creativity', 'Community'],
      reversed: ['Overindulgence', 'Isolation', 'Broken Friendships'],
    },
    description: {
      upright: '圣杯三代表庆祝和友谊。享受社交连接。',
      reversed: '逆位时提示社交孤立或友谊出现裂痕。',
    },
    descriptionEn: {
      upright: 'Three of Cups represents celebration and friendship. Enjoy social connections.',
      reversed: 'Reversed, it indicates social isolation or friendships experiencing rifts.',
    },
    imageUrl: '/cards/cups-03.jpg',
  },
  {
    id: 39,
    name: '圣杯四',
    nameEn: 'Four of Cups',
    suit: 'cups',
    keywords: {
      upright: ['沉思', '重新评估', '冷漠', '错过机会'],
      reversed: ['新视角', '动力', '重新投入'],
    },
    keywordsEn: {
      upright: ['Contemplation', 'Reevaluation', 'Apathy', 'Missed Opportunity'],
      reversed: ['New Perspective', 'Motivation', 'Re-engagement'],
    },
    description: {
      upright: '圣杯四象征内省和重新评估。不要错过眼前的机会。',
      reversed: '逆位时表示获得新视角或重新产生动力。',
    },
    descriptionEn: {
      upright: 'Four of Cups symbolizes introspection and reevaluation. Don\'t miss the opportunities before you.',
      reversed: 'Reversed, it indicates gaining new perspective or renewed motivation.',
    },
    imageUrl: '/cards/cups-04.jpg',
  },
  {
    id: 40,
    name: '圣杯五',
    nameEn: 'Five of Cups',
    suit: 'cups',
    keywords: {
      upright: ['失望', '悲伤', '后悔', '失落'],
      reversed: ['接受', '向前看', '宽恕'],
    },
    keywordsEn: {
      upright: ['Disappointment', 'Sadness', 'Regret', 'Loss'],
      reversed: ['Acceptance', 'Moving Forward', 'Forgiveness'],
    },
    description: {
      upright: '圣杯五代表失落和悲伤。记住仍有值得珍惜的东西。',
      reversed: '逆位时提示开始疗愈和向前看。',
    },
    descriptionEn: {
      upright: 'Five of Cups represents loss and grief. Remember there are still things worth cherishing.',
      reversed: 'Reversed, it indicates beginning to heal and looking forward.',
    },
    imageUrl: '/cards/cups-05.jpg',
  },
  {
    id: 41,
    name: '圣杯六',
    nameEn: 'Six of Cups',
    suit: 'cups',
    keywords: {
      upright: ['怀旧', '童真', '重聚', '简单快乐'],
      reversed: ['困在过去', '不现实的期望'],
    },
    keywordsEn: {
      upright: ['Nostalgia', 'Innocence', 'Reunion', 'Simple Joy'],
      reversed: ['Stuck in the Past', 'Unrealistic Expectations'],
    },
    description: {
      upright: '圣杯六象征怀旧和纯真的快乐。珍惜美好回忆。',
      reversed: '逆位时警告过度沉溺于过去。',
    },
    descriptionEn: {
      upright: 'Six of Cups symbolizes nostalgia and innocent joy. Cherish beautiful memories.',
      reversed: 'Reversed, it warns of dwelling too much in the past.',
    },
    imageUrl: '/cards/cups-06.jpg',
  },
  {
    id: 42,
    name: '圣杯七',
    nameEn: 'Seven of Cups',
    suit: 'cups',
    keywords: {
      upright: ['选择', '幻想', '白日梦', '多样性'],
      reversed: ['现实检验', '专注', '决定'],
    },
    keywordsEn: {
      upright: ['Choices', 'Fantasy', 'Daydreaming', 'Variety'],
      reversed: ['Reality Check', 'Focus', 'Decision'],
    },
    description: {
      upright: '圣杯七代表众多选择和可能性。小心幻想。',
      reversed: '逆位时提示需要面对现实并做出选择。',
    },
    descriptionEn: {
      upright: 'Seven of Cups represents multiple choices and possibilities. Beware of illusions.',
      reversed: 'Reversed, it indicates the need to face reality and make choices.',
    },
    imageUrl: '/cards/cups-07.jpg',
  },
  {
    id: 43,
    name: '圣杯八',
    nameEn: 'Eight of Cups',
    suit: 'cups',
    keywords: {
      upright: ['放手', '离开', '寻找更多', '转变'],
      reversed: ['害怕离开', '停滞', '逃避'],
    },
    keywordsEn: {
      upright: ['Letting Go', 'Leaving', 'Seeking More', 'Transition'],
      reversed: ['Fear of Leaving', 'Stagnation', 'Avoidance'],
    },
    description: {
      upright: '圣杯八象征离开不再满足的事物。寻找更深的意义。',
      reversed: '逆位时提示害怕改变或逃避必要的决定。',
    },
    descriptionEn: {
      upright: 'Eight of Cups symbolizes leaving what no longer satisfies. Seek deeper meaning.',
      reversed: 'Reversed, it indicates fear of change or avoiding necessary decisions.',
    },
    imageUrl: '/cards/cups-08.jpg',
  },
  {
    id: 44,
    name: '圣杯九',
    nameEn: 'Nine of Cups',
    suit: 'cups',
    keywords: {
      upright: ['满足', '愿望成真', '幸福', '成功'],
      reversed: ['贪婪', '不满足', '物质主义'],
    },
    keywordsEn: {
      upright: ['Contentment', 'Wishes Fulfilled', 'Happiness', 'Success'],
      reversed: ['Greed', 'Dissatisfaction', 'Materialism'],
    },
    description: {
      upright: '圣杯九代表满足和愿望实现。享受你的成就。',
      reversed: '逆位时警告过度沉溺或永不满足。',
    },
    descriptionEn: {
      upright: 'Nine of Cups represents contentment and wishes fulfilled. Enjoy your achievements.',
      reversed: 'Reversed, it warns of excessive indulgence or never being satisfied.',
    },
    imageUrl: '/cards/cups-09.jpg',
  },
  {
    id: 45,
    name: '圣杯十',
    nameEn: 'Ten of Cups',
    suit: 'cups',
    keywords: {
      upright: ['和谐', '家庭', '完满', '情感幸福'],
      reversed: ['家庭冲突', '破裂的关系', '失望'],
    },
    keywordsEn: {
      upright: ['Harmony', 'Family', 'Fulfillment', 'Emotional Happiness'],
      reversed: ['Family Conflict', 'Broken Relationships', 'Disappointment'],
    },
    description: {
      upright: '圣杯十象征情感的圆满和家庭幸福。珍惜爱与连接。',
      reversed: '逆位时提示关系紧张或家庭不和。',
    },
    descriptionEn: {
      upright: 'Ten of Cups symbolizes emotional fulfillment and family happiness. Cherish love and connection.',
      reversed: 'Reversed, it indicates relationship tension or family discord.',
    },
    imageUrl: '/cards/cups-10.jpg',
  },
  {
    id: 46,
    name: '圣杯侍从',
    nameEn: 'Page of Cups',
    suit: 'cups',
    keywords: {
      upright: ['创意消息', '直觉', '好奇', '温柔'],
      reversed: ['情感不成熟', '坏消息', '创意受阻'],
    },
    keywordsEn: {
      upright: ['Creative Message', 'Intuition', 'Curiosity', 'Gentleness'],
      reversed: ['Emotional Immaturity', 'Bad News', 'Creative Block'],
    },
    description: {
      upright: '圣杯侍从代表创意和情感的新开始。保持开放的心。',
      reversed: '逆位时提示情感不成熟或令人失望的消息。',
    },
    descriptionEn: {
      upright: 'Page of Cups represents creative and emotional new beginnings. Keep an open heart.',
      reversed: 'Reversed, it indicates emotional immaturity or disappointing news.',
    },
    imageUrl: '/cards/cups-page.jpg',
  },
  {
    id: 47,
    name: '圣杯骑士',
    nameEn: 'Knight of Cups',
    suit: 'cups',
    keywords: {
      upright: ['浪漫', '魅力', '想象力', '追求'],
      reversed: ['不切实际', '情绪化', '失望'],
    },
    keywordsEn: {
      upright: ['Romance', 'Charm', 'Imagination', 'Pursuit'],
      reversed: ['Unrealistic', 'Moody', 'Disappointment'],
    },
    description: {
      upright: '圣杯骑士象征浪漫的追求。跟随你的心。',
      reversed: '逆位时警告过于理想化或情绪不稳定。',
    },
    descriptionEn: {
      upright: 'Knight of Cups symbolizes romantic pursuit. Follow your heart.',
      reversed: 'Reversed, it warns of being overly idealistic or emotionally unstable.',
    },
    imageUrl: '/cards/cups-knight.jpg',
  },
  {
    id: 48,
    name: '圣杯王后',
    nameEn: 'Queen of Cups',
    suit: 'cups',
    keywords: {
      upright: ['同理心', '关怀', '直觉', '情感成熟'],
      reversed: ['情感不稳定', '依赖', '被动'],
    },
    keywordsEn: {
      upright: ['Empathy', 'Caring', 'Intuition', 'Emotional Maturity'],
      reversed: ['Emotional Instability', 'Dependence', 'Passivity'],
    },
    description: {
      upright: '圣杯王后代表情感智慧和同理心。信任你的直觉。',
      reversed: '逆位时提示情感不稳定或过度依赖他人。',
    },
    descriptionEn: {
      upright: 'Queen of Cups represents emotional wisdom and empathy. Trust your intuition.',
      reversed: 'Reversed, it indicates emotional instability or excessive dependence on others.',
    },
    imageUrl: '/cards/cups-queen.jpg',
  },
  {
    id: 49,
    name: '圣杯国王',
    nameEn: 'King of Cups',
    suit: 'cups',
    keywords: {
      upright: ['情感平衡', '同情', '外交', '控制'],
      reversed: ['情感操控', '冷漠', '压抑'],
    },
    keywordsEn: {
      upright: ['Emotional Balance', 'Compassion', 'Diplomacy', 'Control'],
      reversed: ['Emotional Manipulation', 'Coldness', 'Repression'],
    },
    description: {
      upright: '圣杯国王象征情感成熟和平衡。以智慧和同情领导。',
      reversed: '逆位时警告情感操控或过于冷酷。',
    },
    descriptionEn: {
      upright: 'King of Cups symbolizes emotional maturity and balance. Lead with wisdom and compassion.',
      reversed: 'Reversed, it warns of emotional manipulation or being too cold.',
    },
    imageUrl: '/cards/cups-king.jpg',
  },

  // 宝剑（Swords）- 风元素 - 50-63
  {
    id: 50,
    name: '宝剑王牌',
    nameEn: 'Ace of Swords',
    suit: 'swords',
    keywords: {
      upright: ['突破', '清晰', '真理', '新想法'],
      reversed: ['混乱', '残酷的真相', '误解'],
    },
    keywordsEn: {
      upright: ['Breakthrough', 'Clarity', 'Truth', 'New Ideas'],
      reversed: ['Confusion', 'Brutal Truth', 'Misunderstanding'],
    },
    description: {
      upright: '宝剑王牌代表心智的突破和清晰。拥抱真理和新想法。',
      reversed: '逆位时提示思维混乱或面对痛苦的真相。',
    },
    descriptionEn: {
      upright: 'Ace of Swords represents mental breakthrough and clarity. Embrace truth and new ideas.',
      reversed: 'Reversed, it indicates mental confusion or facing painful truths.',
    },
    imageUrl: '/cards/swords-01-ace.jpg',
  },
  {
    id: 51,
    name: '宝剑二',
    nameEn: 'Two of Swords',
    suit: 'swords',
    keywords: {
      upright: ['僵局', '困难选择', '回避', '平衡'],
      reversed: ['优柔寡断', '混乱', '信息过载'],
    },
    keywordsEn: {
      upright: ['Stalemate', 'Difficult Choice', 'Avoidance', 'Balance'],
      reversed: ['Indecisiveness', 'Confusion', 'Information Overload'],
    },
    description: {
      upright: '宝剑二象征艰难的选择。需要做决定但害怕选择。',
      reversed: '逆位时提示决策瘫痪或被信息淹没。',
    },
    descriptionEn: {
      upright: 'Two of Swords symbolizes difficult choices. Need to make a decision but fear choosing.',
      reversed: 'Reversed, it indicates decision paralysis or being overwhelmed by information.',
    },
    imageUrl: '/cards/swords-02.jpg',
  },
  {
    id: 52,
    name: '宝剑三',
    nameEn: 'Three of Swords',
    suit: 'swords',
    keywords: {
      upright: ['心碎', '悲伤', '痛苦', '失望'],
      reversed: ['疗愈', '宽恕', '恢复'],
    },
    keywordsEn: {
      upright: ['Heartbreak', 'Sorrow', 'Pain', 'Disappointment'],
      reversed: ['Healing', 'Forgiveness', 'Recovery'],
    },
    description: {
      upright: '宝剑三代表心碎和悲伤。允许自己悲伤是疗愈的一部分。',
      reversed: '逆位时表示开始疗愈和从痛苦中恢复。',
    },
    descriptionEn: {
      upright: 'Three of Swords represents heartbreak and sorrow. Allowing yourself to grieve is part of healing.',
      reversed: 'Reversed, it indicates beginning to heal and recover from pain.',
    },
    imageUrl: '/cards/swords-03.jpg',
  },
  {
    id: 53,
    name: '宝剑四',
    nameEn: 'Four of Swords',
    suit: 'swords',
    keywords: {
      upright: ['休息', '恢复', '沉思', '准备'],
      reversed: ['精疲力竭', '停滞', '躁动'],
    },
    keywordsEn: {
      upright: ['Rest', 'Recovery', 'Contemplation', 'Preparation'],
      reversed: ['Exhaustion', 'Stagnation', 'Restlessness'],
    },
    description: {
      upright: '宝剑四象征需要休息和恢复。给自己时间充电。',
      reversed: '逆位时警告过度休息导致停滞或无法放松。',
    },
    descriptionEn: {
      upright: 'Four of Swords symbolizes the need for rest and recovery. Give yourself time to recharge.',
      reversed: 'Reversed, it warns of excessive rest leading to stagnation or inability to relax.',
    },
    imageUrl: '/cards/swords-04.jpg',
  },
  {
    id: 54,
    name: '宝剑五',
    nameEn: 'Five of Swords',
    suit: 'swords',
    keywords: {
      upright: ['冲突', '失败', '自私', '赢得代价'],
      reversed: ['和解', '宽恕', '从失败中学习'],
    },
    keywordsEn: {
      upright: ['Conflict', 'Defeat', 'Selfishness', 'Winning at a Cost'],
      reversed: ['Reconciliation', 'Forgiveness', 'Learning from Failure'],
    },
    description: {
      upright: '宝剑五代表冲突和空洞的胜利。考虑胜利的代价。',
      reversed: '逆位时提示准备和解或从失败中学习。',
    },
    descriptionEn: {
      upright: 'Five of Swords represents conflict and hollow victory. Consider the cost of winning.',
      reversed: 'Reversed, it indicates readiness for reconciliation or learning from defeat.',
    },
    imageUrl: '/cards/swords-05.jpg',
  },
  {
    id: 55,
    name: '宝剑六',
    nameEn: 'Six of Swords',
    suit: 'swords',
    keywords: {
      upright: ['过渡', '改变', '离开', '平静水域'],
      reversed: ['抗拒改变', '无法前进', '延迟'],
    },
    keywordsEn: {
      upright: ['Transition', 'Change', 'Leaving', 'Calmer Waters'],
      reversed: ['Resisting Change', 'Unable to Move On', 'Delay'],
    },
    description: {
      upright: '宝剑六象征从困境中过渡。向着更平静的水域前进。',
      reversed: '逆位时提示抗拒必要的改变或被困在困境中。',
    },
    descriptionEn: {
      upright: 'Six of Swords symbolizes transition from difficulty. Moving toward calmer waters.',
      reversed: 'Reversed, it indicates resisting necessary change or being stuck in troubled waters.',
    },
    imageUrl: '/cards/swords-06.jpg',
  },
  {
    id: 56,
    name: '宝剑七',
    nameEn: 'Seven of Swords',
    suit: 'swords',
    keywords: {
      upright: ['欺骗', '策略', '逃避', '狡猾'],
      reversed: ['坦诚', '被发现', '良心'],
    },
    keywordsEn: {
      upright: ['Deception', 'Strategy', 'Evasion', 'Cunning'],
      reversed: ['Honesty', 'Being Discovered', 'Conscience'],
    },
    description: {
      upright: '宝剑七代表策略或欺骗。审视你的方法是否诚实。',
      reversed: '逆位时提示秘密被揭露或良心驱使你坦诚。',
    },
    descriptionEn: {
      upright: 'Seven of Swords represents strategy or deception. Examine whether your approach is honest.',
      reversed: 'Reversed, it indicates secrets being revealed or conscience driving you to honesty.',
    },
    imageUrl: '/cards/swords-07.jpg',
  },
  {
    id: 57,
    name: '宝剑八',
    nameEn: 'Eight of Swords',
    suit: 'swords',
    keywords: {
      upright: ['受限', '困境', '无助', '自我设限'],
      reversed: ['解放', '新视角', '自由'],
    },
    keywordsEn: {
      upright: ['Restriction', 'Trapped', 'Helplessness', 'Self-Imposed Limitation'],
      reversed: ['Liberation', 'New Perspective', 'Freedom'],
    },
    description: {
      upright: '宝剑八象征感到被困。限制可能是自我施加的。',
      reversed: '逆位时表示找到出路或获得新的视角。',
    },
    descriptionEn: {
      upright: 'Eight of Swords symbolizes feeling trapped. Limitations may be self-imposed.',
      reversed: 'Reversed, it indicates finding a way out or gaining new perspective.',
    },
    imageUrl: '/cards/swords-08.jpg',
  },
  {
    id: 58,
    name: '宝剑九',
    nameEn: 'Nine of Swords',
    suit: 'swords',
    keywords: {
      upright: ['焦虑', '噩梦', '担忧', '恐惧'],
      reversed: ['释放焦虑', '希望', '恢复'],
    },
    keywordsEn: {
      upright: ['Anxiety', 'Nightmares', 'Worry', 'Fear'],
      reversed: ['Releasing Anxiety', 'Hope', 'Recovery'],
    },
    description: {
      upright: '宝剑九代表焦虑和担忧。大多数恐惧是想象的。',
      reversed: '逆位时提示焦虑开始缓解或学会应对恐惧。',
    },
    descriptionEn: {
      upright: 'Nine of Swords represents anxiety and worry. Most fears are imagined.',
      reversed: 'Reversed, it indicates anxiety beginning to ease or learning to cope with fears.',
    },
    imageUrl: '/cards/swords-09.jpg',
  },
  {
    id: 59,
    name: '宝剑十',
    nameEn: 'Ten of Swords',
    suit: 'swords',
    keywords: {
      upright: ['结束', '失败', '崩溃', '触底'],
      reversed: ['恢复', '重生', '抗拒结束'],
    },
    keywordsEn: {
      upright: ['Endings', 'Failure', 'Collapse', 'Rock Bottom'],
      reversed: ['Recovery', 'Rebirth', 'Resisting Endings'],
    },
    description: {
      upright: '宝剑十象征痛苦的结束。虽然艰难但为新开始铺路。',
      reversed: '逆位时表示从低谷中恢复或拒绝接受结束。',
    },
    descriptionEn: {
      upright: 'Ten of Swords symbolizes painful endings. Though difficult, it paves the way for new beginnings.',
      reversed: 'Reversed, it indicates recovery from rock bottom or refusing to accept the ending.',
    },
    imageUrl: '/cards/swords-10.jpg',
  },
  {
    id: 60,
    name: '宝剑侍从',
    nameEn: 'Page of Swords',
    suit: 'swords',
    keywords: {
      upright: ['好奇', '警觉', '交流', '新想法'],
      reversed: ['八卦', '残酷言辞', '不成熟'],
    },
    keywordsEn: {
      upright: ['Curiosity', 'Alertness', 'Communication', 'New Ideas'],
      reversed: ['Gossip', 'Harsh Words', 'Immaturity'],
    },
    description: {
      upright: '宝剑侍从代表好奇心和新想法。保持开放和警觉。',
      reversed: '逆位时警告言辞不当或思想不成熟。',
    },
    descriptionEn: {
      upright: 'Page of Swords represents curiosity and new ideas. Stay open and alert.',
      reversed: 'Reversed, it warns of inappropriate words or immature thinking.',
    },
    imageUrl: '/cards/swords-page.jpg',
  },
  {
    id: 61,
    name: '宝剑骑士',
    nameEn: 'Knight of Swords',
    suit: 'swords',
    keywords: {
      upright: ['行动', '冲动', '雄心', '直接'],
      reversed: ['鲁莽', '冲动', '缺乏计划'],
    },
    keywordsEn: {
      upright: ['Action', 'Impulsiveness', 'Ambition', 'Directness'],
      reversed: ['Recklessness', 'Impulsivity', 'Lack of Planning'],
    },
    description: {
      upright: '宝剑骑士象征快速决定的行动。保持专注但小心冲动。',
      reversed: '逆位时警告过于鲁莽或缺乏深思熟虑。',
    },
    descriptionEn: {
      upright: 'Knight of Swords symbolizes swift, decisive action. Stay focused but beware of impulsiveness.',
      reversed: 'Reversed, it warns of being too reckless or lacking thoughtfulness.',
    },
    imageUrl: '/cards/swords-knight.jpg',
  },
  {
    id: 62,
    name: '宝剑王后',
    nameEn: 'Queen of Swords',
    suit: 'swords',
    keywords: {
      upright: ['独立', '清晰', '直接', '公正'],
      reversed: ['冷酷', '残忍', '情感隔离'],
    },
    keywordsEn: {
      upright: ['Independence', 'Clarity', 'Directness', 'Fairness'],
      reversed: ['Coldness', 'Cruelty', 'Emotional Detachment'],
    },
    description: {
      upright: '宝剑王后代表清晰的思维和独立。以客观和诚实行事。',
      reversed: '逆位时提示过于冷酷或缺乏同理心。',
    },
    descriptionEn: {
      upright: 'Queen of Swords represents clear thinking and independence. Act with objectivity and honesty.',
      reversed: 'Reversed, it indicates being too cold or lacking empathy.',
    },
    imageUrl: '/cards/swords-queen.jpg',
  },
  {
    id: 63,
    name: '宝剑国王',
    nameEn: 'King of Swords',
    suit: 'swords',
    keywords: {
      upright: ['权威', '真理', '道德', '纪律'],
      reversed: ['操控', '残酷', '滥用权力'],
    },
    keywordsEn: {
      upright: ['Authority', 'Truth', 'Ethics', 'Discipline'],
      reversed: ['Manipulation', 'Cruelty', 'Abuse of Power'],
    },
    description: {
      upright: '宝剑国王象征公正的权威和清晰的思维。以智慧和真理领导。',
      reversed: '逆位时警告滥用权力或过于教条。',
    },
    descriptionEn: {
      upright: 'King of Swords symbolizes just authority and clear thinking. Lead with wisdom and truth.',
      reversed: 'Reversed, it warns of abuse of power or being overly dogmatic.',
    },
    imageUrl: '/cards/swords-king.jpg',
  },

  // 星币（Pentacles）- 土元素 - 64-77
  {
    id: 64,
    name: '星币王牌',
    nameEn: 'Ace of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['新机会', '繁荣', '显化', '丰盛'],
      reversed: ['失去机会', '贪婪', '短视'],
    },
    keywordsEn: {
      upright: ['New Opportunity', 'Prosperity', 'Manifestation', 'Abundance'],
      reversed: ['Lost Opportunity', 'Greed', 'Short-Sightedness'],
    },
    description: {
      upright: '星币王牌代表物质和财务的新开始。抓住机会创造繁荣。',
      reversed: '逆位时提示错失机会或对金钱的不健康态度。',
    },
    descriptionEn: {
      upright: 'Ace of Pentacles represents new beginnings in material and financial matters. Seize the opportunity to create prosperity.',
      reversed: 'Reversed, it indicates missed opportunities or an unhealthy attitude toward money.',
    },
    imageUrl: '/cards/pentacles-01-ace.jpg',
  },
  {
    id: 65,
    name: '星币二',
    nameEn: 'Two of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['平衡', '适应', '时间管理', '优先级'],
      reversed: ['失衡', '过度承诺', '混乱'],
    },
    keywordsEn: {
      upright: ['Balance', 'Adaptation', 'Time Management', 'Priorities'],
      reversed: ['Imbalance', 'Overcommitment', 'Chaos'],
    },
    description: {
      upright: '星币二象征平衡多重责任。灵活应对变化。',
      reversed: '逆位时警告失去平衡或承担过多。',
    },
    descriptionEn: {
      upright: 'Two of Pentacles symbolizes balancing multiple responsibilities. Adapt flexibly to change.',
      reversed: 'Reversed, it warns of losing balance or taking on too much.',
    },
    imageUrl: '/cards/pentacles-02.jpg',
  },
  {
    id: 66,
    name: '星币三',
    nameEn: 'Three of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['团队合作', '合作', '学习', '技能'],
      reversed: ['缺乏合作', '冲突', '质量差'],
    },
    keywordsEn: {
      upright: ['Teamwork', 'Collaboration', 'Learning', 'Skills'],
      reversed: ['Lack of Cooperation', 'Conflict', 'Poor Quality'],
    },
    description: {
      upright: '星币三代表团队合作和技能发展。协作创造卓越。',
      reversed: '逆位时提示团队冲突或工作质量不佳。',
    },
    descriptionEn: {
      upright: 'Three of Pentacles represents teamwork and skill development. Collaboration creates excellence.',
      reversed: 'Reversed, it indicates team conflict or poor work quality.',
    },
    imageUrl: '/cards/pentacles-03.jpg',
  },
  {
    id: 67,
    name: '星币四',
    nameEn: 'Four of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['安全', '控制', '保存', '稳定'],
      reversed: ['贪婪', '物质主义', '放手'],
    },
    keywordsEn: {
      upright: ['Security', 'Control', 'Conservation', 'Stability'],
      reversed: ['Greed', 'Materialism', 'Letting Go'],
    },
    description: {
      upright: '星币四象征财务安全。小心过度控制或吝啬。',
      reversed: '逆位时提示过度执着或学会放手。',
    },
    descriptionEn: {
      upright: 'Four of Pentacles symbolizes financial security. Beware of excessive control or stinginess.',
      reversed: 'Reversed, it indicates excessive attachment or learning to let go.',
    },
    imageUrl: '/cards/pentacles-04.jpg',
  },
  {
    id: 68,
    name: '星币五',
    nameEn: 'Five of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['困境', '贫困', '孤立', '担忧'],
      reversed: ['恢复', '改善', '寻求帮助'],
    },
    keywordsEn: {
      upright: ['Hardship', 'Poverty', 'Isolation', 'Worry'],
      reversed: ['Recovery', 'Improvement', 'Seeking Help'],
    },
    description: {
      upright: '星币五代表财务或物质困难。记住寻求帮助。',
      reversed: '逆位时表示情况开始改善或接受帮助。',
    },
    descriptionEn: {
      upright: 'Five of Pentacles represents financial or material hardship. Remember to seek help.',
      reversed: 'Reversed, it indicates circumstances beginning to improve or accepting help.',
    },
    imageUrl: '/cards/pentacles-05.jpg',
  },
  {
    id: 69,
    name: '星币六',
    nameEn: 'Six of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['慷慨', '慈善', '分享', '互惠'],
      reversed: ['自私', '不平等', '债务'],
    },
    keywordsEn: {
      upright: ['Generosity', 'Charity', 'Sharing', 'Reciprocity'],
      reversed: ['Selfishness', 'Inequality', 'Debt'],
    },
    description: {
      upright: '星币六象征慷慨和分享。给予和接受之间的平衡。',
      reversed: '逆位时警告单方面的关系或不公平的交换。',
    },
    descriptionEn: {
      upright: 'Six of Pentacles symbolizes generosity and sharing. Balance between giving and receiving.',
      reversed: 'Reversed, it warns of one-sided relationships or unfair exchanges.',
    },
    imageUrl: '/cards/pentacles-06.jpg',
  },
  {
    id: 70,
    name: '星币七',
    nameEn: 'Seven of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['耐心', '投资', '长期愿景', '评估'],
      reversed: ['缺乏耐心', '延迟收获', '挫折'],
    },
    keywordsEn: {
      upright: ['Patience', 'Investment', 'Long-Term Vision', 'Assessment'],
      reversed: ['Lack of Patience', 'Delayed Harvest', 'Frustration'],
    },
    description: {
      upright: '星币七代表长期投资和耐心。评估进展并保持耐心。',
      reversed: '逆位时提示缺乏耐心或成果延迟。',
    },
    descriptionEn: {
      upright: 'Seven of Pentacles represents long-term investment and patience. Assess progress and remain patient.',
      reversed: 'Reversed, it indicates lack of patience or delayed results.',
    },
    imageUrl: '/cards/pentacles-07.jpg',
  },
  {
    id: 71,
    name: '星币八',
    nameEn: 'Eight of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['勤奋', '技艺', '专注', '精通'],
      reversed: ['完美主义', '乏味', '缺乏专注'],
    },
    keywordsEn: {
      upright: ['Diligence', 'Craftsmanship', 'Focus', 'Mastery'],
      reversed: ['Perfectionism', 'Tedium', 'Lack of Focus'],
    },
    description: {
      upright: '星币八象征努力工作和技能发展。专注于精通你的技艺。',
      reversed: '逆位时警告过度完美主义或失去专注。',
    },
    descriptionEn: {
      upright: 'Eight of Pentacles symbolizes hard work and skill development. Focus on mastering your craft.',
      reversed: 'Reversed, it warns of excessive perfectionism or losing focus.',
    },
    imageUrl: '/cards/pentacles-08.jpg',
  },
  {
    id: 72,
    name: '星币九',
    nameEn: 'Nine of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['独立', '丰盛', '自给自足', '成功'],
      reversed: ['过度工作', '物质损失', '缺乏稳定'],
    },
    keywordsEn: {
      upright: ['Independence', 'Abundance', 'Self-Sufficiency', 'Success'],
      reversed: ['Overwork', 'Material Loss', 'Lack of Stability'],
    },
    description: {
      upright: '星币九代表自给自足和享受成果。庆祝你的成就。',
      reversed: '逆位时提示过度工作或缺乏财务稳定。',
    },
    descriptionEn: {
      upright: 'Nine of Pentacles represents self-sufficiency and enjoying the fruits of your labor. Celebrate your achievements.',
      reversed: 'Reversed, it indicates overwork or lack of financial stability.',
    },
    imageUrl: '/cards/pentacles-09.jpg',
  },
  {
    id: 73,
    name: '星币十',
    nameEn: 'Ten of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['遗产', '财富', '家庭', '长期成功'],
      reversed: ['财务损失', '家庭冲突', '不稳定'],
    },
    keywordsEn: {
      upright: ['Legacy', 'Wealth', 'Family', 'Long-Term Success'],
      reversed: ['Financial Loss', 'Family Conflict', 'Instability'],
    },
    description: {
      upright: '星币十象征长期繁荣和家族财富。享受稳定和安全。',
      reversed: '逆位时警告财务不稳定或家庭纷争。',
    },
    descriptionEn: {
      upright: 'Ten of Pentacles symbolizes long-term prosperity and family wealth. Enjoy stability and security.',
      reversed: 'Reversed, it warns of financial instability or family disputes.',
    },
    imageUrl: '/cards/pentacles-10.jpg',
  },
  {
    id: 74,
    name: '星币侍从',
    nameEn: 'Page of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['机会', '学习', '新项目', '雄心'],
      reversed: ['拖延', '缺乏进展', '不切实际'],
    },
    keywordsEn: {
      upright: ['Opportunity', 'Learning', 'New Project', 'Ambition'],
      reversed: ['Procrastination', 'Lack of Progress', 'Unrealistic'],
    },
    description: {
      upright: '星币侍从代表新的学习或财务机会。保持脚踏实地。',
      reversed: '逆位时提示拖延或计划不切实际。',
    },
    descriptionEn: {
      upright: 'Page of Pentacles represents new learning or financial opportunities. Stay grounded.',
      reversed: 'Reversed, it indicates procrastination or unrealistic plans.',
    },
    imageUrl: '/cards/pentacles-page.jpg',
  },
  {
    id: 75,
    name: '星币骑士',
    nameEn: 'Knight of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['负责', '勤奋', '可靠', '坚持'],
      reversed: ['懒惰', '僵化', '固执'],
    },
    keywordsEn: {
      upright: ['Responsibility', 'Diligence', 'Reliability', 'Persistence'],
      reversed: ['Laziness', 'Rigidity', 'Stubbornness'],
    },
    description: {
      upright: '星币骑士象征稳定可靠的进展。耐心和坚持会带来成功。',
      reversed: '逆位时警告过于僵化或缺乏行动。',
    },
    descriptionEn: {
      upright: 'Knight of Pentacles symbolizes steady, reliable progress. Patience and persistence bring success.',
      reversed: 'Reversed, it warns of being too rigid or lacking action.',
    },
    imageUrl: '/cards/pentacles-knight.jpg',
  },
  {
    id: 76,
    name: '星币王后',
    nameEn: 'Queen of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['实用', '滋养', '丰盛', '安全'],
      reversed: ['忽视自己', '工作狂', '物质主义'],
    },
    keywordsEn: {
      upright: ['Practicality', 'Nurturing', 'Abundance', 'Security'],
      reversed: ['Self-Neglect', 'Workaholic', 'Materialism'],
    },
    description: {
      upright: '星币王后代表务实的滋养和丰盛。创造舒适和安全。',
      reversed: '逆位时提示忽视自我照顾或过度工作。',
    },
    descriptionEn: {
      upright: 'Queen of Pentacles represents practical nurturing and abundance. Create comfort and security.',
      reversed: 'Reversed, it indicates neglecting self-care or overworking.',
    },
    imageUrl: '/cards/pentacles-queen.jpg',
  },
  {
    id: 77,
    name: '星币国王',
    nameEn: 'King of Pentacles',
    suit: 'pentacles',
    keywords: {
      upright: ['富足', '安全', '领导力', '商业头脑'],
      reversed: ['贪婪', '物质主义', '顽固'],
    },
    keywordsEn: {
      upright: ['Wealth', 'Security', 'Leadership', 'Business Acumen'],
      reversed: ['Greed', 'Materialism', 'Stubbornness'],
    },
    description: {
      upright: '星币国王象征财务成功和物质丰盛。以智慧管理资源。',
      reversed: '逆位时警告过度贪婪或过于关注物质。',
    },
    descriptionEn: {
      upright: 'King of Pentacles symbolizes financial success and material abundance. Manage resources with wisdom.',
      reversed: 'Reversed, it warns of excessive greed or too much focus on material things.',
    },
    imageUrl: '/cards/pentacles-king.jpg',
  },
];

// 根据 ID 获取塔罗牌
export function getCardById(id: number): TarotCard | undefined {
  return tarotCards.find(card => card.id === id);
}

// 随机抽取指定数量的牌（不重复）
export function drawRandomCards(count: number): TarotCard[] {
  const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// 判断是否逆位（50%概率）
export function isReversed(): boolean {
  return Math.random() < 0.5;
}

// 获取本地化的牌卡数据
export interface LocalizedCard {
  id: number;
  name: string;
  suit: Suit;
  keywords: {
    upright: string[];
    reversed: string[];
  };
  description: {
    upright: string;
    reversed: string;
  };
  imageUrl: string;
}

export function getLocalizedCard(card: TarotCard, locale: string): LocalizedCard {
  const isEnglish = locale === 'en';

  return {
    id: card.id,
    name: isEnglish ? card.nameEn : card.name,
    suit: card.suit,
    keywords: {
      upright: isEnglish && card.keywordsEn ? card.keywordsEn.upright : card.keywords.upright,
      reversed: isEnglish && card.keywordsEn ? card.keywordsEn.reversed : card.keywords.reversed,
    },
    description: {
      upright: isEnglish && card.descriptionEn ? card.descriptionEn.upright : card.description.upright,
      reversed: isEnglish && card.descriptionEn ? card.descriptionEn.reversed : card.description.reversed,
    },
    imageUrl: card.imageUrl,
  };
}
