import { TarotCard } from './types';

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
    description: {
      upright: '愚者代表新的开始和无限的可能性。象征着纯真、自由和对未知的勇敢探索。',
      reversed: '逆位时提醒你需要更加谨慎，避免过于冲动或缺乏计划的行动。',
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
    description: {
      upright: '魔术师象征着将想法转化为现实的能力。你拥有所需的资源和技能。',
      reversed: '逆位时警告可能存在欺骗或才能的滥用，需要诚实地审视自己的动机。',
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
    description: {
      upright: '女祭司代表内在智慧和直觉。倾听内心的声音，相信你的第六感。',
      reversed: '逆位时提示你可能忽视了内心的声音，或有重要信息被隐藏。',
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
    description: {
      upright: '皇后象征丰盛和创造力。关注滋养自己和他人，享受生活的美好。',
      reversed: '逆位时可能表示过度依赖或创造力受到阻碍。',
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
    description: {
      upright: '皇帝代表秩序和权威。建立结构和规则将帮助你实现目标。',
      reversed: '逆位时警告可能过于严格或失去控制，需要平衡。',
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
    description: {
      upright: '教皇象征传统智慧和精神指引。寻求导师或遵循既定的道路。',
      reversed: '逆位时鼓励你质疑传统，找到自己的信仰体系。',
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
    description: {
      upright: '恋人代表重要的选择和深刻的连接。关注你的价值观和关系。',
      reversed: '逆位时提示关系中的不和谐或面临艰难的抉择。',
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
    description: {
      upright: '战车象征通过决心和专注获得胜利。保持方向，克服障碍。',
      reversed: '逆位时警告可能失去方向或难以控制局面。',
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
    description: {
      upright: '力量代表内在的勇气和温柔的坚韧。用爱和耐心征服挑战。',
      reversed: '逆位时提示缺乏自信或需要重新找回内在力量。',
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
    description: {
      upright: '隐者象征向内寻找答案。需要独处和反思的时间。',
      reversed: '逆位时警告过度孤立或逃避现实。',
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
    description: {
      upright: '命运之轮代表生命的循环和不可避免的变化。拥抱转变。',
      reversed: '逆位时提示抗拒改变或经历困难时期。',
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
    description: {
      upright: '正义象征公平和真相。你的行为会带来相应的结果。',
      reversed: '逆位时警告不公平或需要面对自己的责任。',
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
    description: {
      upright: '倒吊人代表需要暂停和改变视角。放手可能带来新的理解。',
      reversed: '逆位时提示不必要的拖延或抗拒必要的改变。',
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
    description: {
      upright: '死神象征重要的结束和转变。旧的必须结束，新的才能开始。',
      reversed: '逆位时提示抗拒必要的改变或无法放下过去。',
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
    description: {
      upright: '节制代表平衡和和谐。寻找中间道路，保持耐心。',
      reversed: '逆位时警告生活失衡或过度沉溺。',
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
    description: {
      upright: '恶魔象征束缚和限制。审视什么在控制你，寻找自由。',
      reversed: '逆位时表示从束缚中解脱或意识到问题所在。',
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
    description: {
      upright: '塔代表突然的改变和旧结构的崩塌。虽然痛苦但必要。',
      reversed: '逆位时提示避免了灾难或正在延迟必要的改变。',
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
    description: {
      upright: '星星象征希望和疗愈。保持信念，美好即将到来。',
      reversed: '逆位时提示失去希望或需要重新找回信心。',
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
    description: {
      upright: '月亮代表不确定和潜意识的恐惧。信任直觉穿越迷雾。',
      reversed: '逆位时表示恐惧消散或真相逐渐显现。',
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
    description: {
      upright: '太阳象征成功和喜悦。一切都在向好的方向发展。',
      reversed: '逆位时提示暂时的阴霾或需要调整过度的乐观。',
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
    description: {
      upright: '审判代表觉醒和重生。回顾过去，做出重要决定。',
      reversed: '逆位时提示逃避责任或难以做出判断。',
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
    description: {
      upright: '世界象征完成和成就。一个周期圆满结束，准备新的开始。',
      reversed: '逆位时提示目标尚未达成或需要最后的努力。',
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
    description: {
      upright: '权杖王牌代表创造性的火花和新的开始。抓住机会去创造。',
      reversed: '逆位时提示缺乏方向或创意受到阻碍。',
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
    description: {
      upright: '权杖二象征规划未来。你正站在新旅程的起点。',
      reversed: '逆位时提示犹豫不决或害怕迈出下一步。',
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
    description: {
      upright: '权杖三代表扩展和远见。你的努力开始显现成果。',
      reversed: '逆位时警告计划可能延迟或缺乏长远眼光。',
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
    description: {
      upright: '权杖四象征庆祝和稳定。享受你的成就和支持。',
      reversed: '逆位时提示不稳定或庆祝被延迟。',
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
    description: {
      upright: '权杖五代表竞争和分歧。通过挑战成长。',
      reversed: '逆位时提示冲突缓和或内心挣扎。',
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
    description: {
      upright: '权杖六象征公开的胜利和认可。享受你的成功。',
      reversed: '逆位时警告过度自负或缺乏应得的认可。',
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
    description: {
      upright: '权杖七代表捍卫立场。坚持你的信念。',
      reversed: '逆位时提示感到被压倒或考虑放弃。',
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
    description: {
      upright: '权杖八象征快速的进展。事情正在加速发展。',
      reversed: '逆位时警告延迟或事情进展过快失控。',
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
    description: {
      upright: '权杖九代表坚韧和准备。虽然疲惫但不要放弃。',
      reversed: '逆位时提示过度防御或精疲力竭。',
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
    description: {
      upright: '权杖十象征沉重的负担。考虑委派或放下一些责任。',
      reversed: '逆位时表示开始放下负担或学会委派。',
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
    description: {
      upright: '权杖侍从代表探索和新的冒险。保持好奇心。',
      reversed: '逆位时提示缺乏计划或收到令人失望的消息。',
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
    description: {
      upright: '权杖骑士象征充满激情的行动。勇敢前进。',
      reversed: '逆位时警告过于冲动或缺乏深思熟虑。',
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
    description: {
      upright: '权杖王后代表自信和魅力。拥抱你的个人力量。',
      reversed: '逆位时提示缺乏自信或嫉妒心作祟。',
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
    description: {
      upright: '权杖国王象征强大的领导力。以愿景引领他人。',
      reversed: '逆位时警告过于专断或缺乏远见。',
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
    description: {
      upright: '圣杯王牌代表情感的新开始。敞开心扉接受爱。',
      reversed: '逆位时提示情感被压抑或难以表达感受。',
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
    description: {
      upright: '圣杯二象征和谐的伙伴关系。相互尊重和理解。',
      reversed: '逆位时警告关系失衡或沟通出现问题。',
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
    description: {
      upright: '圣杯三代表庆祝和友谊。享受社交连接。',
      reversed: '逆位时提示社交孤立或友谊出现裂痕。',
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
    description: {
      upright: '圣杯四象征内省和重新评估。不要错过眼前的机会。',
      reversed: '逆位时表示获得新视角或重新产生动力。',
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
    description: {
      upright: '圣杯五代表失落和悲伤。记住仍有值得珍惜的东西。',
      reversed: '逆位时提示开始疗愈和向前看。',
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
    description: {
      upright: '圣杯六象征怀旧和纯真的快乐。珍惜美好回忆。',
      reversed: '逆位时警告过度沉溺于过去。',
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
    description: {
      upright: '圣杯七代表众多选择和可能性。小心幻想。',
      reversed: '逆位时提示需要面对现实并做出选择。',
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
    description: {
      upright: '圣杯八象征离开不再满足的事物。寻找更深的意义。',
      reversed: '逆位时提示害怕改变或逃避必要的决定。',
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
    description: {
      upright: '圣杯九代表满足和愿望实现。享受你的成就。',
      reversed: '逆位时警告过度沉溺或永不满足。',
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
    description: {
      upright: '圣杯十象征情感的圆满和家庭幸福。珍惜爱与连接。',
      reversed: '逆位时提示关系紧张或家庭不和。',
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
    description: {
      upright: '圣杯侍从代表创意和情感的新开始。保持开放的心。',
      reversed: '逆位时提示情感不成熟或令人失望的消息。',
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
    description: {
      upright: '圣杯骑士象征浪漫的追求。跟随你的心。',
      reversed: '逆位时警告过于理想化或情绪不稳定。',
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
    description: {
      upright: '圣杯王后代表情感智慧和同理心。信任你的直觉。',
      reversed: '逆位时提示情感不稳定或过度依赖他人。',
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
    description: {
      upright: '圣杯国王象征情感成熟和平衡。以智慧和同情领导。',
      reversed: '逆位时警告情感操控或过于冷酷。',
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
    description: {
      upright: '宝剑王牌代表心智的突破和清晰。拥抱真理和新想法。',
      reversed: '逆位时提示思维混乱或面对痛苦的真相。',
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
    description: {
      upright: '宝剑二象征艰难的选择。需要做决定但害怕选择。',
      reversed: '逆位时提示决策瘫痪或被信息淹没。',
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
    description: {
      upright: '宝剑三代表心碎和悲伤。允许自己悲伤是疗愈的一部分。',
      reversed: '逆位时表示开始疗愈和从痛苦中恢复。',
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
    description: {
      upright: '宝剑四象征需要休息和恢复。给自己时间充电。',
      reversed: '逆位时警告过度休息导致停滞或无法放松。',
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
    description: {
      upright: '宝剑五代表冲突和空洞的胜利。考虑胜利的代价。',
      reversed: '逆位时提示准备和解或从失败中学习。',
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
    description: {
      upright: '宝剑六象征从困境中过渡。向着更平静的水域前进。',
      reversed: '逆位时提示抗拒必要的改变或被困在困境中。',
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
    description: {
      upright: '宝剑七代表策略或欺骗。审视你的方法是否诚实。',
      reversed: '逆位时提示秘密被揭露或良心驱使你坦诚。',
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
    description: {
      upright: '宝剑八象征感到被困。限制可能是自我施加的。',
      reversed: '逆位时表示找到出路或获得新的视角。',
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
    description: {
      upright: '宝剑九代表焦虑和担忧。大多数恐惧是想象的。',
      reversed: '逆位时提示焦虑开始缓解或学会应对恐惧。',
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
    description: {
      upright: '宝剑十象征痛苦的结束。虽然艰难但为新开始铺路。',
      reversed: '逆位时表示从低谷中恢复或拒绝接受结束。',
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
    description: {
      upright: '宝剑侍从代表好奇心和新想法。保持开放和警觉。',
      reversed: '逆位时警告言辞不当或思想不成熟。',
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
    description: {
      upright: '宝剑骑士象征快速决定的行动。保持专注但小心冲动。',
      reversed: '逆位时警告过于鲁莽或缺乏深思熟虑。',
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
    description: {
      upright: '宝剑王后代表清晰的思维和独立。以客观和诚实行事。',
      reversed: '逆位时提示过于冷酷或缺乏同理心。',
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
    description: {
      upright: '宝剑国王象征公正的权威和清晰的思维。以智慧和真理领导。',
      reversed: '逆位时警告滥用权力或过于教条。',
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
    description: {
      upright: '星币王牌代表物质和财务的新开始。抓住机会创造繁荣。',
      reversed: '逆位时提示错失机会或对金钱的不健康态度。',
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
    description: {
      upright: '星币二象征平衡多重责任。灵活应对变化。',
      reversed: '逆位时警告失去平衡或承担过多。',
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
    description: {
      upright: '星币三代表团队合作和技能发展。协作创造卓越。',
      reversed: '逆位时提示团队冲突或工作质量不佳。',
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
    description: {
      upright: '星币四象征财务安全。小心过度控制或吝啬。',
      reversed: '逆位时提示过度执着或学会放手。',
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
    description: {
      upright: '星币五代表财务或物质困难。记住寻求帮助。',
      reversed: '逆位时表示情况开始改善或接受帮助。',
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
    description: {
      upright: '星币六象征慷慨和分享。给予和接受之间的平衡。',
      reversed: '逆位时警告单方面的关系或不公平的交换。',
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
    description: {
      upright: '星币七代表长期投资和耐心。评估进展并保持耐心。',
      reversed: '逆位时提示缺乏耐心或成果延迟。',
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
    description: {
      upright: '星币八象征努力工作和技能发展。专注于精通你的技艺。',
      reversed: '逆位时警告过度完美主义或失去专注。',
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
    description: {
      upright: '星币九代表自给自足和享受成果。庆祝你的成就。',
      reversed: '逆位时提示过度工作或缺乏财务稳定。',
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
    description: {
      upright: '星币十象征长期繁荣和家族财富。享受稳定和安全。',
      reversed: '逆位时警告财务不稳定或家庭纷争。',
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
    description: {
      upright: '星币侍从代表新的学习或财务机会。保持脚踏实地。',
      reversed: '逆位时提示拖延或计划不切实际。',
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
    description: {
      upright: '星币骑士象征稳定可靠的进展。耐心和坚持会带来成功。',
      reversed: '逆位时警告过于僵化或缺乏行动。',
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
    description: {
      upright: '星币王后代表务实的滋养和丰盛。创造舒适和安全。',
      reversed: '逆位时提示忽视自我照顾或过度工作。',
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
    description: {
      upright: '星币国王象征财务成功和物质丰盛。以智慧管理资源。',
      reversed: '逆位时警告过度贪婪或过于关注物质。',
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
