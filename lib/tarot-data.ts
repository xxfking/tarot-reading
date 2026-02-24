import { TarotCard, Suit } from './types';
import { getCardTranslation } from './card-translations';

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
      upright: '愚者站在悬崖边缘，象征着勇敢跨入未知领域的精神。白色的玫瑰代表纯洁的意图，小狗象征着本能和忠诚的陪伴。这张牌代表全新的开始，没有过去包袱的束缚，以天真烂漫的心态迎接生命的旅程。愚者提醒我们，有时候"不知道"反而是一种祝福，让我们能够以开放的心态接纳一切可能性。这是一张关于信念之跃的牌，鼓励我们相信宇宙的指引。',
      reversed: '逆位的愚者提示你可能过于鲁莽，缺乏必要的准备就贸然行动。这时需要停下来评估风险，制定更周全的计划。逆位也可能表示对新开始的恐惧让你止步不前，或是过去的经验让你失去了天真的勇气。现在是时候在谨慎和冒险之间找到平衡，既要保持开放的心态，也要为旅程做好实际的准备。',
    },
    descriptionEn: {
      upright: 'The Fool stands at the cliff\'s edge, symbolizing the spirit of courageously stepping into the unknown. The white rose represents pure intentions, while the small dog embodies instinct and loyal companionship. This card represents brand new beginnings, free from the burdens of the past, embracing life\'s journey with innocent wonder. The Fool reminds us that sometimes "not knowing" is a blessing, allowing us to receive all possibilities with an open heart. This is a card about leaps of faith, encouraging us to trust in the universe\'s guidance.',
      reversed: 'Reversed, the Fool suggests you may be acting too recklessly, taking action without necessary preparation. It\'s time to pause and assess risks, creating a more thorough plan. The reversal can also indicate fear of new beginnings holding you back, or past experiences causing you to lose your innocent courage. Now is the time to find balance between caution and adventure, maintaining an open heart while making practical preparations for the journey ahead.',
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
      upright: '魔术师站在祭坛前，桌上摆放着象征四元素的工具：权杖、圣杯、宝剑和星币。他一手指天，一手指地，代表"如其在上，如其在下"的宇宙法则。头顶的无限符号象征着无尽的可能性和智慧。魔术师掌握了显化的秘密，能够将精神意图转化为物质现实。这张牌提醒你，你已经拥有了创造所需的一切资源和能力，现在是采取行动的时候。专注你的意志力，将梦想付诸实践。',
      reversed: '逆位的魔术师警告你可能在滥用自己的才能，或将技能用于操控和欺骗。你可能拥有能力却缺乏明确的方向，导致能量分散无法聚焦。这也可能表示缺乏自信，怀疑自己的能力，或是动机不纯正。现在需要诚实地审视自己的意图：你是为了更高的善而使用你的力量，还是仅仅为了个人私利？重新校准你的内在指南针，确保你的行动与真实的自我一致。',
    },
    descriptionEn: {
      upright: 'The Magician stands before an altar displaying tools representing the four elements: wand, cup, sword, and pentacle. One hand points to the heavens, the other to earth, embodying the universal law "as above, so below." The infinity symbol above his head represents endless possibilities and wisdom. The Magician has mastered the secret of manifestation, transforming spiritual intention into material reality. This card reminds you that you already possess all the resources and abilities needed to create. Now is the time for action. Focus your willpower and put your dreams into practice.',
      reversed: 'Reversed, the Magician warns you may be misusing your talents or employing skills for manipulation and deception. You might possess ability but lack clear direction, causing your energy to scatter without focus. This can also indicate lack of confidence, doubting your capabilities, or having impure motives. Now requires honest examination of your intentions: are you using your power for the higher good, or merely for personal gain? Recalibrate your inner compass to ensure your actions align with your authentic self.',
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
      upright: '女祭司静坐在黑白两根柱子之间，象征着二元性的平衡与神秘的门槛。她身后的帷幕装饰着石榴图案，代表潜意识的丰富和神圣的女性能量。月亮在她脚下，象征着直觉、梦境和内在的智慧。女祭司手持托拉经卷，代表隐藏的知识和神圣的法则。这张牌召唤你向内探索，倾听内在的声音而非外在的喧嚣。她教导我们，有些真理无法用逻辑理解，只能通过直觉感知。在静默中，答案会自然浮现。',
      reversed: '逆位的女祭司提示你可能与自己的直觉失去了连接，过度依赖理性思维而忽视了内心的低语。可能有秘密被隐藏，或是你对自己隐瞒了某些真相。这也可能表示信息过载让你无法听见真正重要的声音，或是他人刻意隐瞒信息。现在需要创造宁静的空间，重新连接你的内在智慧。放下外界的判断，相信你已经知道答案。',
    },
    descriptionEn: {
      upright: 'The High Priestess sits between two pillars of black and white, symbolizing the balance of duality and the threshold of mystery. The veil behind her is adorned with pomegranates, representing the richness of the subconscious and sacred feminine energy. The moon at her feet symbolizes intuition, dreams, and inner wisdom. She holds the Torah scroll, representing hidden knowledge and divine law. This card calls you to explore inward, listening to your inner voice rather than external noise. She teaches that some truths cannot be understood through logic, only perceived through intuition. In silence, answers naturally emerge.',
      reversed: 'Reversed, the High Priestess suggests you may have lost connection with your intuition, over-relying on rational thinking while ignoring your inner whispers. Secrets may be hidden, or you may be concealing certain truths from yourself. This can also indicate information overload preventing you from hearing what truly matters, or others deliberately withholding information. Now requires creating quiet space to reconnect with your inner wisdom. Release external judgments and trust that you already know the answer.',
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
      upright: '皇后身着华丽的长袍，坐在舒适的王座上，周围环绕着丰收的麦田和郁郁葱葱的自然景观。她的王冠镶嵌着十二颗星星，代表一年十二个月和四季的循环。维纳斯的符号在她身旁，象征爱、美和创造力。皇后是大地母亲的化身，代表生命的孕育、成长和丰盛。这张牌提醒你关注感官享受和创造性表达，滋养自己和周围的人。她教导我们，真正的丰盛来自于爱的给予和接受，来自于与自然和谐共处。',
      reversed: '逆位的皇后可能表示过度依赖他人的照顾，或是在照顾他人时忽视了自己的需求。创造力可能被阻塞，或是你与自己的女性能量失去了连接。这也可能表示过度关注物质享受而忽略了精神成长，或是对美的追求变成了虚荣。现在需要重新平衡给予和接受，学会在滋养他人的同时也滋养自己。重新连接你内在的创造力泉源，找回与自然的和谐。',
    },
    descriptionEn: {
      upright: 'The Empress wears luxurious robes, seated on a comfortable throne surrounded by abundant wheat fields and lush natural landscapes. Her crown is set with twelve stars, representing the twelve months and the cycle of four seasons. Venus\'s symbol beside her embodies love, beauty, and creativity. The Empress is the embodiment of Mother Earth, representing the nurturing, growth, and abundance of life. This card reminds you to focus on sensory pleasure and creative expression, nurturing yourself and those around you. She teaches that true abundance comes from giving and receiving love, from living in harmony with nature.',
      reversed: 'Reversed, the Empress may indicate over-dependence on others\' care, or neglecting your own needs while caring for others. Creativity may be blocked, or you may have lost connection with your feminine energy. This can also suggest over-focus on material pleasures while neglecting spiritual growth, or the pursuit of beauty becoming vanity. Now requires rebalancing giving and receiving, learning to nurture yourself while nurturing others. Reconnect with your inner wellspring of creativity and rediscover harmony with nature.',
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
      upright: '皇帝稳坐在石制王座上，王座装饰着公羊的头部，象征白羊座的火热能量和领导力。他手持权杖和宝球，代表世俗的权力和掌控。坚固的山脉在背后，象征不可动摇的力量和稳定性。皇帝是秩序、结构和父性能量的象征，他通过建立规则和边界来创造安全感。这张牌提醒你，有时需要运用理性和逻辑，通过纪律和组织来实现目标。皇帝教导我们，真正的力量来自于自我掌控和对责任的承担。',
      reversed: '逆位的皇帝警告过度控制或僵化的思维模式可能在限制成长。你可能过于专制，或是在权威面前感到压迫。这也可能表示缺乏必要的结构和纪律，导致混乱和无序。可能存在滥用权力的情况，或是你在逃避应有的责任。现在需要在控制和灵活性之间找到平衡，建立健康的边界而非压制性的规则。真正的领导力来自于智慧和仁慈，而非恐惧和强制。',
    },
    descriptionEn: {
      upright: 'The Emperor sits firmly on a stone throne adorned with ram heads, symbolizing Aries\'s fiery energy and leadership. He holds a scepter and orb, representing worldly power and control. Solid mountains behind him symbolize immovable strength and stability. The Emperor embodies order, structure, and paternal energy, creating security through establishing rules and boundaries. This card reminds you that sometimes rationality and logic are needed, achieving goals through discipline and organization. The Emperor teaches that true power comes from self-mastery and taking responsibility.',
      reversed: 'Reversed, the Emperor warns that excessive control or rigid thinking patterns may be limiting growth. You might be too domineering, or feeling oppressed by authority. This can also indicate lack of necessary structure and discipline, leading to chaos and disorder. There may be abuse of power, or you may be avoiding due responsibilities. Now requires finding balance between control and flexibility, establishing healthy boundaries rather than oppressive rules. True leadership comes from wisdom and compassion, not fear and coercion.',
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
      upright: '教皇坐在神圣的殿堂中，双手举起象征祝福的手势，两把钥匙交叉在脚下，代表通往天堂的钥匙和神圣知识的守护者。两位修士跪在他面前，象征着传统知识的传承和师徒关系。三重王冠代表三个世界：物质、心智和精神。教皇是传统、信仰和既定体系的代表，他连接着人类与神圣之间的桥梁。这张牌提醒你寻求智慧的指引，从传统和集体智慧中学习。有时我们需要导师来照亮道路，需要仪式来赋予生活意义。',
      reversed: '逆位的教皇鼓励你质疑既定的规则和信仰系统，寻找自己独特的精神道路。你可能感到传统的束缚，或是发现主流的教导与你的内在真理不符。这也可能表示过度依赖外在权威而失去了个人的洞察力，或是遇到了虚伪的导师。现在是时候建立属于自己的信仰体系，相信内在的指引。真正的智慧不是盲目遵循，而是在理解后做出有意识的选择。',
    },
    descriptionEn: {
      upright: 'The Hierophant sits in a sacred temple, hands raised in a gesture of blessing, with two crossed keys at his feet representing the keys to heaven and guardian of sacred knowledge. Two acolytes kneel before him, symbolizing the transmission of traditional knowledge and the teacher-student relationship. The triple crown represents three worlds: material, mental, and spiritual. The Hierophant represents tradition, faith, and established systems, bridging the connection between humanity and the divine. This card reminds you to seek wise guidance, learning from tradition and collective wisdom. Sometimes we need mentors to illuminate the path, rituals to give life meaning.',
      reversed: 'Reversed, the Hierophant encourages you to question established rules and belief systems, seeking your own unique spiritual path. You may feel constrained by tradition, or discover mainstream teachings don\'t align with your inner truth. This can also indicate over-reliance on external authority while losing personal insight, or encountering false teachers. Now is the time to establish your own belief system, trusting inner guidance. True wisdom isn\'t blind following, but making conscious choices after understanding.',
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
      upright: '恋人牌描绘了亚当和夏娃站在生命之树和知识之树下，天使拉斐尔在上方守护着他们，象征神圣的祝福和精神的指引。这张牌不仅代表浪漫的爱情，更深层的意义在于价值观的选择和内在的和谐。两个人物象征着意识与潜意识、阳性与阴性能量的结合。这张牌提醒你，生命中的重要选择往往涉及心与灵的统一。它教导我们，真正的结合始于与自己内在各个面向的和解，然后才能与他人建立深刻的连接。',
      reversed: '逆位的恋人暗示价值观的冲突或内在的不和谐。你可能在重要的选择面前犹豫不决，或是发现你的价值观与他人的价值观产生了分歧。这也可能表示关系中缺乏真正的沟通和理解，或是你在逃避必要的决定。可能存在自我价值感的问题，影响了你建立健康关系的能力。现在需要诚实地审视你的价值观，确保你的选择与真实的自我一致。只有当你与自己和谐相处时，才能与他人建立真正的连接。',
    },
    descriptionEn: {
      upright: 'The Lovers depicts Adam and Eve standing beneath the Tree of Life and the Tree of Knowledge, with the angel Raphael above watching over them, symbolizing divine blessing and spiritual guidance. This card represents not only romantic love, but deeper meaning in value-based choices and inner harmony. The two figures symbolize the union of conscious and subconscious, masculine and feminine energies. This card reminds you that life\'s important choices often involve unifying heart and spirit. It teaches that true union begins with reconciling all aspects within yourself, before establishing deep connections with others.',
      reversed: 'Reversed, the Lovers suggests conflicts in values or inner disharmony. You may be hesitating before important choices, or discovering your values diverge from others\'. This can also indicate lack of true communication and understanding in relationships, or avoiding necessary decisions. There may be self-worth issues affecting your ability to build healthy relationships. Now requires honestly examining your values, ensuring your choices align with your authentic self. Only when you\'re in harmony with yourself can you establish true connections with others.',
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
      upright: '战车上的战士身披盔甲，头戴星冠，驾驭着一黑一白两匹狮身兽，象征着对立力量的驾驭和整合。城墙在背后，代表已经离开的舒适区。肩膀上的月牙象征情感的力量，而方形的胸甲代表意志力的保护。战车不靠缰绳而靠意志力驱动，象征通过内在的专注和决心来掌控方向。这张牌提醒你，成功来自于意志力的聚焦和对矛盾力量的平衡。克服障碍需要的不是蛮力，而是坚定的决心和清晰的目标。',
      reversed: '逆位的战车警告你可能失去了方向感，或是内在的矛盾力量失去了平衡。你可能过度控制想要掌握一切，反而导致僵化和挫败。这也可能表示缺乏必要的专注力，或是被外在力量牵引而偏离了原本的道路。可能存在自我怀疑削弱了你的意志力，或是过于激进导致失控。现在需要重新审视你的目标，找回内在的中心点。真正的掌控来自于内在的和谐，而非外在的强制。',
    },
    descriptionEn: {
      upright: 'The warrior on the chariot wears armor and a crown of stars, driving two sphinx-like beasts, one black and one white, symbolizing the harnessing and integration of opposing forces. Walls behind represent the comfort zone left behind. Crescent moons on shoulders symbolize emotional power, while the square breastplate represents willpower\'s protection. The chariot moves not by reins but by willpower, symbolizing controlling direction through inner focus and determination. This card reminds you that success comes from focused willpower and balancing contradictory forces. Overcoming obstacles requires not brute force, but firm determination and clear goals.',
      reversed: 'Reversed, the Chariot warns you may have lost direction, or inner contradictory forces have lost balance. You might be over-controlling, trying to master everything, instead causing rigidity and frustration. This can also indicate lack of necessary focus, or being pulled off your original path by external forces. Self-doubt may be weakening your willpower, or excessive aggression causing loss of control. Now requires re-examining your goals, recovering your inner center. True mastery comes from inner harmony, not external force.',
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
      upright: '一位女性温柔地抚摸着狮子的嘴，头上的无限符号象征着精神的永恒力量。白色长袍代表纯洁，花环则象征着与自然的和谐。这张牌描绘的不是用暴力征服，而是用爱与理解驯服野性。狮子代表我们内在的本能、欲望和原始力量，而女性象征着慈悲和智慧。力量教导我们，真正的勇气不是压制恐惧，而是以温柔和耐心面对它。最强大的力量来自于内心的平静，来自于对自我的完全接纳。这是一张关于内在勇气和情绪掌握的牌。',
      reversed: '逆位的力量提示你可能对自己失去了信心，或是内在的力量被恐惧和自我怀疑削弱。你可能用强硬的方式对待自己或他人，失去了温柔和同情心。这也可能表示被本能和欲望所控制，无法保持情绪的平衡。可能存在能量的耗竭，或是在逃避需要勇气面对的挑战。现在需要重新连接你的内在力量源泉，用慈悲对待自己的软弱。真正的力量不是从不跌倒，而是跌倒后依然能温柔地站起来。',
    },
    descriptionEn: {
      upright: 'A woman gently touches a lion\'s mouth, with the infinity symbol above her head representing eternal spiritual power. The white robe represents purity, while the floral garland symbolizes harmony with nature. This card depicts not violent conquest, but taming wildness through love and understanding. The lion represents our inner instincts, desires, and primal forces, while the woman symbolizes compassion and wisdom. Strength teaches that true courage isn\'t suppressing fear, but facing it with gentleness and patience. The greatest power comes from inner calm, from complete self-acceptance. This is a card about inner courage and emotional mastery.',
      reversed: 'Reversed, Strength suggests you may have lost confidence in yourself, or inner strength weakened by fear and self-doubt. You might be treating yourself or others harshly, losing gentleness and compassion. This can also indicate being controlled by instincts and desires, unable to maintain emotional balance. There may be energy depletion, or avoiding challenges requiring courage. Now requires reconnecting with your inner power source, treating your vulnerabilities with compassion. True strength isn\'t never falling, but rising gently after each fall.',
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
      upright: '隐者站在雪山之巅，手持一盏明灯照亮前方的道路，灯中闪烁着六芒星，象征智慧之光。灰色的长袍代表远离尘世的宁静，手中的权杖象征精神权威和内在的支撑。他转身离开喧嚣，独自攀登至高处，不是为了逃避，而是为了寻找真理。隐者教导我们，有些答案只能在独处和静默中找到。这是一个内省和精神探索的时期，需要暂时远离外界的干扰，向内在的导师请教。孤独不是惩罚，而是通往智慧的必经之路。',
      reversed: '逆位的隐者警告过度孤立可能让你与世界脱节，或是你在用孤独逃避必要的社会联系。你可能拒绝寻求他人的指引，过于固执地坚持自己的道路，导致迷失方向。这也可能表示害怕独处，无法面对内在的空虚，不断用外在的刺激填充自己。可能是时候结束孤立，将内在的智慧带回世界分享。平衡是关键：既要有独处反思的时间，也要保持与他人有意义的连接。真正的智者知道何时退隐，何时回归。',
    },
    descriptionEn: {
      upright: 'The Hermit stands atop a snowy mountain, holding a lantern that illuminates the path ahead, with a six-pointed star flickering within, symbolizing the light of wisdom. Gray robes represent tranquility removed from the world, while the staff in hand symbolizes spiritual authority and inner support. He turns away from noise, climbing alone to heights, not to escape but to seek truth. The Hermit teaches that some answers can only be found in solitude and silence. This is a period of introspection and spiritual exploration, requiring temporary withdrawal from external distractions to consult the inner teacher. Solitude isn\'t punishment, but the necessary path to wisdom.',
      reversed: 'Reversed, the Hermit warns that excessive isolation may disconnect you from the world, or you\'re using loneliness to avoid necessary social connections. You might refuse to seek others\' guidance, too stubbornly insisting on your own path, leading to losing direction. This can also indicate fear of solitude, inability to face inner emptiness, constantly filling yourself with external stimulation. It may be time to end isolation, bringing inner wisdom back to share with the world. Balance is key: have time for solitary reflection while maintaining meaningful connections with others. The true sage knows when to retreat and when to return.',
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
      upright: '巨大的命运之轮在云端旋转，四个角落的神秘生物——天使、鹰、狮子和公牛代表四大元素和四福音书作者。轮子上刻着希伯来字母YHVH（上帝之名）和炼金术符号。狮身人面兽和阿努比斯守护着轮盘，蛇在下降，代表生命永恒的循环。这张牌象征宇宙的必然法则和生命的周期性。命运之轮提醒我们，变化是唯一不变的真理，高峰和低谷都是暂时的。这张牌教导我们接受生命的流动，在顺境中保持谦逊，在逆境中保持希望。一切都在轮回，今天的结束正是明天的开始。',
      reversed: '逆位的命运之轮暗示你可能在抗拒不可避免的变化，或是经历一个下行的周期而感到失控。你可能过度执着于控制，无法接受事物的自然流动，导致更大的挫折感。这也可能表示一连串的厄运，或是感觉命运对你不公。但要记住，轮子总会继续转动，没有永远的低谷。现在需要放下控制的幻想，臣服于更大的宇宙计划。逆境是成长的机会，教导我们韧性和信任。保持耐心，春天总会在冬天之后到来。',
    },
    descriptionEn: {
      upright: 'A massive Wheel of Fortune spins in the clouds, with four mystical creatures in the corners—angel, eagle, lion, and bull representing the four elements and four evangelists. Hebrew letters YHVH (God\'s name) and alchemical symbols are inscribed on the wheel. The sphinx and Anubis guard the wheel, while a serpent descends, representing life\'s eternal cycles. This card symbolizes the inevitable laws of the universe and life\'s cyclical nature. The Wheel of Fortune reminds us that change is the only constant truth, peaks and valleys are temporary. This card teaches accepting life\'s flow, maintaining humility in good times and hope in adversity. Everything cycles, today\'s ending is tomorrow\'s beginning.',
      reversed: 'Reversed, the Wheel of Fortune suggests you may be resisting inevitable change, or experiencing a downward cycle feeling out of control. You might be over-attached to control, unable to accept the natural flow of things, causing greater frustration. This can also indicate a string of bad luck, or feeling fate is unfair. But remember, the wheel always keeps turning, there\'s no永久 valley. Now requires releasing the illusion of control, surrendering to the greater cosmic plan. Adversity is an opportunity for growth, teaching resilience and trust. Stay patient, spring always follows winter.',
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
      upright: '正义女神端坐在两根柱子之间，一手持剑指向天空代表理性和真理，另一手持天平象征平衡与公正。紫色的斗篷代表精神智慧，王冠上的方形宝石象征清晰的思维。她的凝视直接而不偏不倚，象征客观的判断。正义牌不仅关乎外在的法律和公平，更深层的是内在的因果法则。每个行动都会产生相应的结果，每个选择都会带来后果。这张牌教导我们为自己的行为负责，诚实面对自己的动机。宇宙的天平终将平衡，真相终会水落石出。',
      reversed: '逆位的正义暗示可能面临不公平的对待，或是你自己没有承担应有的责任。你可能在逃避某个决定的后果，或是拒绝承认自己行为的影响。这也可能表示内在的不诚实，对自己或他人撒谎，导致内疚和失衡。可能存在法律问题或道德困境需要解决。现在需要诚实地审视情况，接受事实，即使真相令人不适。只有面对自己的阴影，承担责任，才能恢复内在的平衡。逃避只会让债务累积，最终更难偿还。',
    },
    descriptionEn: {
      upright: 'Justice sits between two pillars, one hand holding a sword pointing skyward representing reason and truth, the other holding scales symbolizing balance and fairness. The purple cloak represents spiritual wisdom, while the square gem on the crown symbolizes clear thinking. Her gaze is direct and impartial, symbolizing objective judgment. Justice isn\'t only about external law and fairness, but deeper karmic law within. Every action produces corresponding results, every choice brings consequences. This card teaches taking responsibility for our actions, honestly facing our motives. The universe\'s scales will ultimately balance, truth will eventually emerge.',
      reversed: 'Reversed, Justice suggests facing unfair treatment, or not taking due responsibility yourself. You might be avoiding consequences of a decision, or refusing to acknowledge your actions\' impact. This can also indicate inner dishonesty, lying to yourself or others, causing guilt and imbalance. There may be legal issues or moral dilemmas requiring resolution. Now requires honestly examining the situation, accepting facts even when truth is uncomfortable. Only by facing your shadow and taking responsibility can inner balance be restored. Avoidance only accumulates debt, making it harder to repay eventually.',
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
      upright: '一个男人倒挂在T形木架上，一条腿交叉形成数字4，头部环绕着光环，脸上却是平静祥和的表情。这个看似痛苦的姿态实际上是自愿的牺牲和视角的转换。倒吊人教导我们，有时需要完全改变看待事物的角度，才能获得真正的洞见。暂停不是停滞，而是为了更深的理解。这张牌象征臣服、放手和精神的觉醒。通过放弃控制，我们反而获得了自由。通过接受暂时的不适，我们为更大的转变创造了空间。这是一个等待和内在转化的时期。',
      reversed: '逆位的倒吊人表示你可能在抗拒必要的暂停，或是在无意义的拖延中浪费时间。你可能害怕放手，执着于已经失效的方式，拒绝从新角度看待问题。这也可能表示感到被困住但又不愿意做出改变所需的牺牲。可能存在虚假的殉道情结，或是你在期待他人为你做出改变。现在需要诚实面对：你是在智慧地等待，还是在拖延逃避?真正的臣服不是被动的无力，而是主动的接纳和信任。',
    },
    descriptionEn: {
      upright: 'A man hangs upside down from a T-shaped frame, one leg crossed forming the number 4, a halo around his head, yet his face shows calm serenity. This seemingly painful posture is actually voluntary sacrifice and perspective shift. The Hanged Man teaches that sometimes we must completely change how we view things to gain true insight. Pausing isn\'t stagnation, but for deeper understanding. This card symbolizes surrender, letting go, and spiritual awakening. By releasing control, we paradoxically gain freedom. By accepting temporary discomfort, we create space for greater transformation. This is a period of waiting and inner transformation.',
      reversed: 'Reversed, the Hanged Man indicates you may be resisting necessary pause, or wasting time in meaningless delay. You might fear letting go, clinging to ineffective methods, refusing to view problems from new angles. This can also suggest feeling trapped but unwilling to make the sacrifices change requires. There may be false martyrdom complex, or you\'re expecting others to make changes for you. Now requires honest facing: are you wisely waiting, or procrastinating and avoiding? True surrender isn\'t passive helplessness, but active acceptance and trust.',
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
      upright: '死神骑着白马穿过大地，手持黑色旗帜上绘有白色玫瑰，象征纯净和重生。国王、孩童、神职人员都在他面前平等，因为死亡是所有人的必经之路。远处的太阳在两座塔之间升起，预示着新生。死神牌并非字面意义的死亡，而是深刻转变和周期结束的象征。旧的身份、关系或生活方式必须死去，才能为新的成长腾出空间。这张牌教导我们接受不可避免的结束，信任转变的过程。死亡是生命循环的一部分，每个结束都孕育着新的开始。抗拒只会延长痛苦，臣服则带来解放。',
      reversed: '逆位的死神表示你在抗拒必要的结束，紧紧抓住已经失去生命力的事物不放。你可能害怕改变带来的未知，宁愿维持不健康的现状也不愿意放手。这也可能表示转变的过程被延迟，或是你在经历一个痛苦的缓慢死亡而非干净的结束。可能存在对失去的过度悲伤，无法向前迈进。现在需要诚实面对什么已经结束，给自己哀悼的空间，但不要停留在那里。死去的东西无法复活，但它的养分会滋养新的生命。勇敢地关上一扇门，才能打开另一扇窗。',
    },
    descriptionEn: {
      upright: 'Death rides a white horse across the land, carrying a black banner emblazoned with a white rose, symbolizing purity and rebirth. King, child, and clergy are equal before him, for death is everyone\'s inevitable path. In the distance, the sun rises between two towers, heralding new life. The Death card isn\'t literal death, but symbolizes profound transformation and cycle endings. Old identities, relationships, or lifestyles must die to make space for new growth. This card teaches accepting inevitable endings, trusting the transformation process. Death is part of life\'s cycle, every ending carries a new beginning. Resistance only prolongs suffering, surrender brings liberation.',
      reversed: 'Reversed, Death indicates you\'re resisting necessary endings, clinging tightly to things that have lost vitality. You might fear the unknown change brings, preferring to maintain unhealthy status quo rather than let go. This can also suggest the transformation process is delayed, or you\'re experiencing painful slow death rather than clean ending. There may be excessive grieving over loss, unable to move forward. Now requires honestly facing what has ended, giving yourself space to mourn, but not dwelling there. Dead things cannot revive, but their nutrients nourish new life. Bravely close one door to open another window.',
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
      upright: '一位天使站在水边，一只脚踏在陆地上，另一只脚浸在水中，象征物质与精神世界的连接。她在两个杯子之间倾倒液体，代表能量的流动和炼金术的转化过程。额头上的太阳符号代表觉知，胸前的三角形象征着四元素的和谐。远处的山峰象征更高的目标和精神追求。节制教导我们中庸之道的智慧，不走极端，在对立中找到平衡。这张牌象征耐心、调和与温和的方法。通过混合不同的元素，我们创造出新的可能性。真正的力量来自于平衡，而非极端。',
      reversed: '逆位的节制警告生活失去了平衡，你可能在某些方面过度而在其他方面匮乏。可能存在不耐烦，想要快速得到结果而跳过必要的过程。这也可能表示过度沉溺，缺乏自我控制，或是两个极端之间摇摆不定无法找到中点。可能存在能量的浪费，或是不同生活领域之间的不协调。现在需要重新审视你的优先级，找回平衡点。记住，炼金术的转化需要时间和耐心。试图强迫结果只会破坏自然的流动。温和而持续的努力胜过激烈而短暂的爆发。',
    },
    descriptionEn: {
      upright: 'An angel stands by water, one foot on land, the other dipped in water, symbolizing the connection between material and spiritual worlds. She pours liquid between two cups, representing energy flow and the alchemical transformation process. The solar symbol on her forehead represents awareness, while the triangle on her chest symbolizes harmony of the four elements. Distant mountain peaks symbolize higher goals and spiritual pursuits. Temperance teaches the wisdom of the middle way, avoiding extremes, finding balance in opposites. This card symbolizes patience, moderation, and gentle approaches. By blending different elements, we create new possibilities. True power comes from balance, not extremes.',
      reversed: 'Reversed, Temperance warns that life has lost balance, you may be excessive in some areas while deficient in others. There may be impatience, wanting quick results while skipping necessary processes. This can also indicate overindulgence, lack of self-control, or swinging between two extremes unable to find middle ground. There may be wasted energy, or discord between different life areas. Now requires re-examining your priorities, recovering balance. Remember, alchemical transformation requires time and patience. Trying to force results only disrupts natural flow. Gentle, sustained effort surpasses intense, brief bursts.',
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
      upright: '恶魔坐在王座上，倒五角星在头顶，象征物质世界对精神的颠倒。两个被锁链束缚的人物实际上可以轻易挣脱，但他们选择留在原地。恶魔代表我们对物质、欲望和恐惧的执着，这些看似外在的束缚其实源自内心。这张牌揭示了成瘾、依赖和不健康的依附关系。它提醒我们审视什么在控制我们的生活——可能是物质主义、有害的关系、或是自己的阴影面。恶魔不是外在的敌人，而是我们内在未被整合的部分。认识到束缚的本质是解放的第一步。你拥有打破锁链的力量。',
      reversed: '逆位的恶魔表示你开始意识到自己的束缚，正在觉醒并寻求解放。你可能正在打破不健康的模式，摆脱成瘾或有害关系。这也可能表示面对了自己的阴影面，开始整合那些被压抑的部分。然而，逆位也可能意味着否认问题的存在，假装自己是自由的但实际仍被控制。可能存在更深层次的操控或隐藏的束缚。现在需要诚实地面对：你是真的在解放，还是仅仅换了一种形式的牢笼?真正的自由始于承认问题，然后采取行动改变。',
    },
    descriptionEn: {
      upright: 'The Devil sits enthroned with an inverted pentagram overhead, symbolizing material world\'s inversion of spirit. Two chained figures could easily break free, but choose to remain. The Devil represents our attachment to materialism, desires, and fears—these seemingly external bonds actually originate within. This card reveals addiction, dependency, and unhealthy attachments. It reminds us to examine what controls our lives—whether materialism, harmful relationships, or our own shadow aspects. The Devil isn\'t an external enemy, but our own unintegrated parts. Recognizing bondage\'s nature is the first step to liberation. You possess the power to break the chains.',
      reversed: 'Reversed, the Devil indicates you\'re beginning to recognize your bondage, awakening and seeking liberation. You may be breaking unhealthy patterns, escaping addiction or harmful relationships. This can also suggest facing your shadow self, beginning to integrate suppressed parts. However, reversal may also mean denying problems exist, pretending freedom while still controlled. There may be deeper manipulation or hidden bondage. Now requires honest facing: are you truly liberating, or merely changing cage forms? True freedom begins with acknowledging the problem, then taking action to change.',
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
      upright: '闪电击中高塔，王冠般的塔顶被炸裂，人们从塔中坠落，火焰燃烧。这是塔罗牌中最戏剧性的图像之一，象征建立在虚假基础上的结构的突然崩溃。塔代表我们精心构建的幻觉、傲慢和虚假的安全感。闪电是神圣的启示，打破我们的自我欺骗。虽然这个过程痛苦而震撼，但它是必要的解放。只有当虚假的结构倒塌，真实的基础才能显现。塔教导我们，有时候需要彻底的破坏才能重建。这不是惩罚，而是宇宙的仁慈，阻止我们在错误的道路上走得太远。从废墟中，新的真实将崛起。',
      reversed: '逆位的塔表示你可能暂时避免了灾难，或是崩塌的过程被延迟。你可能意识到某些事物不可持续，但仍在努力维持摇摇欲坠的结构。这也可能表示恐惧改变让你抗拒必要的清理，延迟只会让最终的崩溃更加剧烈。可能存在内在的动荡，即使外表看起来平静。有时逆位意味着你正在从灾难中恢复，开始重建。现在需要诚实面对什么需要被释放。与其被动地等待崩塌，不如主动拆除不再服务于你的结构。痛苦的真相胜过舒适的谎言。',
    },
    descriptionEn: {
      upright: 'Lightning strikes the tower, crown-like top explodes, people fall from within, flames burn. This is one of Tarot\'s most dramatic images, symbolizing sudden collapse of structures built on false foundations. The Tower represents our carefully constructed illusions, hubris, and false security. Lightning is divine revelation, shattering our self-deception. Though this process is painful and shocking, it\'s necessary liberation. Only when false structures collapse can true foundations emerge. The Tower teaches that sometimes complete destruction is needed for rebuilding. This isn\'t punishment, but the universe\'s mercy, preventing us from going too far down wrong paths. From ruins, new truth will rise.',
      reversed: 'Reversed, the Tower indicates you may have temporarily avoided disaster, or the collapse process is delayed. You might realize something unsustainable, but still try maintaining the tottering structure. This can also suggest fear of change making you resist necessary clearing—delay only makes eventual collapse more severe. There may be internal upheaval even as the surface seems calm. Sometimes reversal means you\'re recovering from disaster, beginning to rebuild. Now requires honestly facing what needs releasing. Rather than passively awaiting collapse, actively dismantle structures no longer serving you. Painful truth beats comfortable lies.',
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
      upright: '一位裸体女性跪在水边，一只脚踏在陆地，另一只脚浸在水中。她将一个罐子里的水倾倒入池塘，另一个罐子倾倒在陆地上，滋养大地。天空中一颗巨大的八角星被七颗小星环绕，象征希望和神圣的指引。鸟栖息在树上代表灵魂的飞升。星星在塔的破坏之后出现，带来疗愈、更新和希望。这张牌象征着宁静、灵感和与宇宙的连接。女性的裸体代表真实和脆弱的力量。星星提醒我们，即使在最黑暗的夜晚，光明依然存在。保持信念，疗愈正在发生。',
      reversed: '逆位的星星表示你可能失去了希望和信念，感到与宇宙的连接被切断。你可能经历了失望，对未来感到悲观，或是自我怀疑阻碍了你接收宇宙的祝福。这也可能表示缺乏灵感，创造力枯竭，或是你拒绝了需要的疗愈过程。可能存在过度理想化导致的幻灭，或是你在等待完美的时机而错过了当下的恩典。现在需要重新点燃内在的光芒，相信即使在黑暗中也有指引。疗愈不是一蹴而就的，要有耐心。看向天空，星星一直在那里，即使云层遮挡也未曾消失。',
    },
    descriptionEn: {
      upright: 'A nude woman kneels by water, one foot on land, the other dipped in water. She pours from one jar into the pond, from another onto land, nourishing the earth. In the sky, a large eight-pointed star surrounded by seven smaller stars symbolizes hope and divine guidance. A bird perched in a tree represents the soul\'s ascension. The Star appears after the Tower\'s destruction, bringing healing, renewal, and hope. This card symbolizes serenity, inspiration, and cosmic connection. The woman\'s nudity represents authenticity and vulnerable strength. The Star reminds us that even in darkest night, light still exists. Keep the faith, healing is happening.',
      reversed: 'Reversed, the Star indicates you may have lost hope and faith, feeling cosmic connection severed. You might have experienced disappointment, feel pessimistic about the future, or self-doubt blocks you from receiving universal blessings. This can also suggest lacking inspiration, creative depletion, or you\'re refusing needed healing process. There may be disillusionment from over-idealization, or you\'re waiting for perfect timing while missing present grace. Now requires rekindling your inner light, trusting guidance exists even in darkness. Healing isn\'t instant—be patient. Look skyward, stars are always there, never disappeared even when clouds obscure them.',
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
      upright: '月亮高悬夜空，面容既温和又诡异，向下滴落着露珠。一只狗和一只狼对月嚎叫，代表驯化和野性的本能。小龙虾从水中爬出，象征潜意识内容浮现。两座塔之间延伸着一条蜿蜒的道路，通向未知的远方。月亮代表幻觉、恐惧和潜意识的深层力量。这张牌揭示了在不确定中航行的需要，信任直觉而非逻辑。月亮照亮了我们的梦境和恐惧，邀请我们探索内在的黑暗。不是所有可见的都是真实的，不是所有真实的都可见。在迷雾中前行需要勇气和信念。',
      reversed: '逆位的月亮表示迷雾开始消散，幻觉逐渐被看清，或是你正在释放深层的恐惧。你可能开始理解困扰你的焦虑和不安的真正来源。这也可能表示直觉能力的觉醒，或是你不再被恐惧所麻痹。然而，逆位也可能意味着你在压抑直觉，拒绝面对潜意识的信息，或是过度理性化情感体验。可能存在否认或逃避内在的黑暗。现在需要在理性和直觉之间找到平衡，既要面对真相，也要信任内在的知晓。黎明即将到来，但在那之前，要勇敢地穿越黑夜。',
    },
    descriptionEn: {
      upright: 'The Moon hangs high in the night sky, its face both gentle and eerie, dripping dew downward. A dog and wolf howl at the moon, representing domesticated and wild instincts. A crayfish crawls from water, symbolizing subconscious content surfacing. Between two towers extends a winding path leading to unknown distances. The Moon represents illusion, fear, and deep subconscious forces. This card reveals the need to navigate uncertainty, trusting intuition over logic. The Moon illuminates our dreams and fears, inviting us to explore inner darkness. Not all visible is real, not all real is visible. Moving forward in mist requires courage and faith.',
      reversed: 'Reversed, the Moon indicates mist beginning to clear, illusions becoming apparent, or you\'re releasing deep fears. You might be starting to understand the true source of anxieties and unease troubling you. This can also suggest intuitive awakening, or no longer being paralyzed by fear. However, reversal may also mean you\'re suppressing intuition, refusing to face subconscious messages, or over-rationalizing emotional experiences. There may be denial or avoiding inner darkness. Now requires finding balance between reason and intuition, both facing truth and trusting inner knowing. Dawn approaches, but before then, bravely traverse the night.',
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
      upright: '一个裸体的孩童骑在白马上，背景是巨大明亮的太阳放射出金色光芒。向日葵在墙后盛开，象征生命力和成长。孩童手持红色旗帜，代表活力和激情，脸上洋溢着纯真的喜悦。太阳是塔罗牌中最积极的牌之一，象征成功、活力、真实和启蒙。这张牌代表拨云见日，一切清晰明朗。太阳照亮了真相，驱散了月亮的幻觉和恐惧。它提醒我们庆祝生命的简单喜悦，拥抱真实的自我。在太阳的光辉下，一切都充满希望和可能性。这是收获的时刻，是喜悦和成就的顶峰。',
      reversed: '逆位的太阳可能表示暂时的阴霾遮蔽了你的光芒，或是你在怀疑自己的价值和成就。可能存在过度的自我中心，或是你的乐观变成了盲目的自负。这也可能表示缺乏活力和热情，感到疲惫或沮丧，无法看到生活的光明面。可能存在隐藏真实自我的需要，或是你害怕在阳光下展现真实的面貌。然而，即使被云层遮挡，太阳依然存在。现在需要重新连接你内在的光芒，找回简单的快乐。不要等待外在的完美才允许自己快乐。你的光芒值得被看见。',
    },
    descriptionEn: {
      upright: 'A naked child rides a white horse, backdrop a huge bright sun radiating golden light. Sunflowers bloom behind a wall, symbolizing vitality and growth. The child holds a red banner representing energy and passion, face beaming with innocent joy. The Sun is one of Tarot\'s most positive cards, symbolizing success, vitality, authenticity, and enlightenment. This card represents clouds parting, everything becoming clear. The Sun illuminates truth, dispelling the Moon\'s illusions and fears. It reminds us to celebrate life\'s simple joys, embrace our authentic selves. Under the Sun\'s radiance, everything brims with hope and possibility. This is the moment of harvest, the pinnacle of joy and achievement.',
      reversed: 'Reversed, the Sun may indicate temporary clouds obscuring your light, or you\'re doubting your worth and achievements. There may be excessive self-centeredness, or your optimism has become blind arrogance. This can also suggest lacking vitality and enthusiasm, feeling exhausted or depressed, unable to see life\'s bright side. There may be a need to hide your true self, or you fear showing your authentic face in sunlight. However, even when clouds obstruct, the Sun still exists. Now requires reconnecting with your inner radiance, recovering simple joys. Don\'t wait for external perfection to allow yourself happiness. Your light deserves to be seen.',
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
      upright: '天使加百列从云端吹响号角，下方的人们从棺材中复活，张开双臂迎接新生。山脉在远处延伸，象征永恒和更高的意识。审判牌代表觉醒、重生和内在的召唤。这不是外在的审判，而是灵魂层面的自我评估。号角声唤醒了沉睡的灵魂，召唤我们回顾过去，整合经验，放下不再服务于我们的身份。这张牌标志着一个周期的完成和对真实自我的接纳。它提醒我们宽恕自己和他人，从过去的束缚中解放。审判是关于听见内在的召唤，回应更高的目的。这是重生的时刻，旧的自我死去，新的存在诞生。',
      reversed: '逆位的审判表示你可能在逃避必要的自我反思，拒绝面对过去的行为和后果。可能存在过度的自我批判，或是你无法宽恕自己和他人。这也可能表示错过了重要的召唤，或是你对内在的指引充耳不闻。可能存在对改变的恐惧让你拒绝重生的机会，或是你在等待外在的许可才敢活出真实的自我。现在需要诚实地审视你的生命，接受自己的光与影。宽恕不是软弱，而是力量。你不需要完美才值得重生，你只需要愿意觉醒。倾听那个召唤你的声音。',
    },
    descriptionEn: {
      upright: 'Angel Gabriel sounds a trumpet from the clouds, people below rise from coffins, arms raised welcoming rebirth. Mountains extend in the distance, symbolizing eternity and higher consciousness. The Judgement card represents awakening, rebirth, and inner calling. This isn\'t external judgment, but soul-level self-assessment. The trumpet awakens sleeping souls, calling us to review the past, integrate experiences, release identities no longer serving us. This card marks a cycle\'s completion and accepting our authentic selves. It reminds us to forgive ourselves and others, liberate from past bonds. Judgement is about hearing inner calling, responding to higher purpose. This is the moment of rebirth, old self dying, new being born.',
      reversed: 'Reversed, Judgement indicates you may be avoiding necessary self-reflection, refusing to face past actions and consequences. There may be excessive self-criticism, or you cannot forgive yourself and others. This can also suggest missing important callings, or being deaf to inner guidance. Fear of change may make you refuse rebirth opportunities, or you\'re waiting for external permission to live authentically. Now requires honestly reviewing your life, accepting your light and shadow. Forgiveness isn\'t weakness, but strength. You don\'t need perfection to deserve rebirth, only willingness to awaken. Listen to that voice calling you.',
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
      upright: '一位舞者在花环中央翩翩起舞，身披紫色围巾，代表精神的流动和神圣的能量。花环由绿叶编织成椭圆形，象征完成、保护和宇宙的子宫。四个角落的神秘生物——天使、鹰、狮子和公牛再次出现，代表四元素的完美整合和智慧的四个层面。舞者一条腿交叉形成数字4，象征物质世界的稳定基础。世界牌是愚者旅程的终点，代表完成、成就和圆满。这是完整的状态，所有部分和谐统一。世界提醒我们庆祝到达的里程碑，同时知道这也是新旅程的开始。你已经完成了一个重要的周期，整合了所学的一切。',
      reversed: '逆位的世界表示你接近完成但尚未达到终点，可能缺少最后的关键元素。你可能感到不完整，或是无法庆祝自己的成就因为追求完美主义。这也可能表示抗拒一个周期的结束，害怕放手进入下一个阶段。可能存在局限的世界观，或是你感到与更大的整体分离。有时逆位意味着成功来得太早或太容易，缺乏深度的整合。现在需要诚实评估：什么阻止了完成?你是缺乏行动，还是拒绝承认已经到达?有时候，完美是完成的敌人。允许这个周期结束，信任下一个旅程的展开。',
    },
    descriptionEn: {
      upright: 'A dancer moves gracefully at the wreath\'s center, draped in purple scarves representing spiritual flow and divine energy. The wreath is woven from green leaves into an oval, symbolizing completion, protection, and the cosmic womb. Four mystical creatures in the corners—angel, eagle, lion, and bull—reappear, representing perfect integration of four elements and four aspects of wisdom. The dancer crosses one leg forming the number 4, symbolizing material world\'s stable foundation. The World card is the Fool\'s journey\'s endpoint, representing completion, achievement, and fulfillment. This is the state of wholeness, all parts harmoniously unified. The World reminds us to celebrate reached milestones, while knowing this is also a new journey\'s beginning. You\'ve completed an important cycle, integrating all you\'ve learned.',
      reversed: 'Reversed, the World indicates you\'re near completion but haven\'t reached the endpoint, possibly missing the final key element. You might feel incomplete, or unable to celebrate achievements due to perfectionism. This can also suggest resisting a cycle\'s end, fearing to release into the next phase. There may be limited worldview, or feeling separated from the greater whole. Sometimes reversal means success came too early or easily, lacking deep integration. Now requires honest assessment: what prevents completion? Are you lacking action, or refusing to acknowledge arrival? Sometimes, perfect is the enemy of done. Allow this cycle to end, trust the next journey\'s unfolding.',
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
      upright: '一只手从云端伸出，握着一根充满生机的权杖，杖上生出绿叶，象征新生命和创造力的萌芽。远处是起伏的山脉和一座城堡，代表未来的潜力和目标。权杖王牌是火元素的纯粹能量，代表灵感、激情和创造性的冲动。这是想法和项目诞生的时刻，充满无限的可能性。这张牌召唤你抓住这个创造性的火花，将内在的热情付诸行动。这是一个新开始的种子，需要你的意志力和行动来滋养它成长。宇宙正在为你提供原始的创造力量，现在是时候点燃你的激情之火。',
      reversed: '逆位的权杖王牌表示创造性的能量被阻塞，或是灵感火花被熄灭。你可能有很多想法但缺乏将它们付诸实践的方向和动力。这也可能表示错失了机会，或是你的激情被恐惧和自我怀疑压制。可能存在创造性的倦怠，或是你将能量分散在太多方向导致无法聚焦。现在需要重新点燃你的内在火焰，找到真正点燃你激情的事物。不要等待完美的时机，有时候行动本身就能创造动力。即使是小小的创造性步骤也能重新激活能量的流动。',
    },
    descriptionEn: {
      upright: 'A hand emerges from clouds, gripping a vibrant wand sprouting green leaves, symbolizing new life and creativity\'s germination. Rolling mountains and a castle in the distance represent future potential and goals. The Ace of Wands is pure fire element energy, representing inspiration, passion, and creative impulse. This is the moment when ideas and projects are born, brimming with infinite possibilities. This card calls you to seize this creative spark, putting inner passion into action. This is a seed of new beginning, needing your willpower and action to nurture its growth. The universe is offering you primal creative power—now is the time to ignite your passion\'s fire.',
      reversed: 'Reversed, the Ace of Wands indicates creative energy is blocked, or inspiration\'s spark has been extinguished. You might have many ideas but lack direction and motivation to put them into practice. This can also suggest missed opportunities, or your passion being suppressed by fear and self-doubt. There may be creative burnout, or you\'re scattering energy in too many directions causing inability to focus. Now requires rekindling your inner flame, finding what truly ignites your passion. Don\'t wait for perfect timing—sometimes action itself creates momentum. Even small creative steps can reactivate energy\'s flow.',
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
      upright: '一位男子站在城堡的城垛上，右手握着一个地球仪，凝视远方，左手扶着竖立的权杖，另一根权杖固定在墙上。他已经建立了一个稳固的基础，现在正在规划下一步的扩展。地球仪象征着世界范围的视野和雄心，他的姿态显示出决策的时刻已经到来。权杖二代表站在十字路口，拥有选择和个人力量。这张牌象征着规划、决策和对未来的展望。你已经取得了初步的成功，现在需要决定如何扩展你的影响力。世界在你手中，但选择的方向需要勇气和远见。',
      reversed: '逆位的权杖二表示你可能在两个选择之间犹豫不决，或是害怕离开舒适区进入未知。你可能拥有计划但缺乏采取行动的信心，或是你的视野过于局限，没有看到更大的可能性。这也可能表示规划过度而缺乏行动，或是你对个人力量的怀疑阻碍了前进。可能存在对失败的恐惧，或是你在等待更多的安全感才敢迈步。现在需要相信你已经拥有足够的资源和智慧来做出决定。完美的计划永远不会到来，有时候需要带着不确定性前进。勇敢地选择一个方向，你可以在路上调整。',
    },
    descriptionEn: {
      upright: 'A man stands on a castle\'s battlement, right hand holding a globe, gazing into the distance, left hand resting on an upright wand, another wand fixed to the wall. He has established a solid foundation and is now planning next expansion steps. The globe symbolizes global vision and ambition, his posture shows the moment of decision has arrived. The Two of Wands represents standing at a crossroads, possessing choice and personal power. This card symbolizes planning, decision-making, and envisioning the future. You\'ve achieved initial success, now need to decide how to expand your influence. The world is in your hands, but choosing direction requires courage and foresight.',
      reversed: 'Reversed, the Two of Wands indicates you may be hesitating between two choices, or fearing to leave the comfort zone for the unknown. You might have plans but lack confidence to take action, or your vision is too limited to see greater possibilities. This can also suggest over-planning without action, or doubts about personal power blocking progress. There may be fear of failure, or you\'re waiting for more security before daring to step forward. Now requires trusting you already possess sufficient resources and wisdom to decide. The perfect plan never arrives—sometimes you must move forward with uncertainty. Bravely choose a direction; you can adjust along the way.',
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
      upright: '一个人站在高处俯瞰大海，三根权杖在他身旁竖立，他凝视着远方驶来的船只。他已经将自己的计划付诸行动，现在正在等待结果的显现。这张牌象征着远见、扩展和对未来的信心。种子已经播下，初步的成功已经到来，现在是时候看向更广阔的地平线。权杖三代表贸易、合作和机会的扩展。你已经跨越了最初的障碍，现在可以开始考虑更宏大的愿景。耐心和远见是关键，你的船正在驶来，带着你期待的回报。',
      reversed: '逆位的权杖三表示计划的延迟或扩展受阻。你可能缺乏长远的视野，只关注眼前而没有看到更大的图景。这也可能表示机会未能实现，或是你对未来失去了信心。可能存在合作关系的问题，或是你发现自己的准备不足以应对扩展。现在需要重新评估你的战略，确保基础足够稳固才能支撑更大的成长。有时候延迟是祝福，给你时间完善计划。保持耐心，调整你的期望和时间表。',
    },
    descriptionEn: {
      upright: 'A person stands on high ground overlooking the sea, three wands erected beside them, gazing at ships approaching from the distance. Plans have been set in motion, now awaiting results to manifest. This card symbolizes foresight, expansion, and confidence in the future. Seeds have been planted, initial success has arrived, now is the time to look toward broader horizons. The Three of Wands represents trade, collaboration, and opportunity expansion. You\'ve crossed initial obstacles, now can begin considering grander visions. Patience and foresight are key—your ships are sailing in, carrying the returns you anticipate.',
      reversed: 'Reversed, the Three of Wands indicates delays in plans or blocked expansion. You might lack long-term vision, focusing only on the immediate without seeing the bigger picture. This can also suggest opportunities failing to materialize, or losing confidence in the future. There may be issues in collaborations, or you\'re discovering your preparations are insufficient for expansion. Now requires reassessing your strategy, ensuring foundations are solid enough to support greater growth. Sometimes delays are blessings, giving time to perfect plans. Stay patient, adjust your expectations and timeline.',
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
      upright: '四根权杖形成一个装饰华丽的拱门，上面悬挂着花环和果实，两个人物手持花束欢庆。背景中可以看到一座城堡，象征稳定的根基。这张牌代表庆祝、和谐、婚礼、家庭聚会和重要的里程碑。权杖四象征着通过努力工作赢得的喜悦时刻，社区的支持和归属感。这是收获初期成果的时候，值得暂停和庆祝。拱门象征着通过一个阶段进入另一个更稳定的阶段。这张牌提醒我们，成功不仅是个人的成就，也是与他人分享喜悦的时刻。',
      reversed: '逆位的权杖四表示庆祝被延迟或缺乏稳定的基础。你可能达到了一个里程碑却无法完全享受它，或是缺乏来自社区的支持。这也可能表示家庭或社区的不和谐，或是你感到与他人疏离而无法真正庆祝。可能存在不稳定感，让你难以放松享受当下。现在需要审视什么阻止了你的庆祝——是外在的不稳定，还是内在的不允许自己快乐?有时候我们需要主动创造庆祝的机会，而不是等待完美的条件。即使在不完美中，也值得感恩已经取得的成就。',
    },
    descriptionEn: {
      upright: 'Four wands form an ornately decorated archway hung with garlands and fruit, two figures holding bouquets in celebration. A castle is visible in the background, symbolizing stable foundations. This card represents celebration, harmony, weddings, family gatherings, and important milestones. The Four of Wands symbolizes joyful moments earned through hard work, community support, and sense of belonging. This is time to harvest early results, deserving pause and celebration. The archway symbolizes passing through one phase into another more stable stage. This card reminds us success isn\'t just personal achievement, but moments of sharing joy with others.',
      reversed: 'Reversed, the Four of Wands indicates delayed celebration or lacking stable foundation. You might have reached a milestone but can\'t fully enjoy it, or lack community support. This can also suggest family or community discord, or feeling isolated from others unable to truly celebrate. There may be instability making it hard to relax and enjoy the present. Now requires examining what prevents your celebration—external instability or inner prohibition on allowing yourself happiness? Sometimes we need to actively create celebration opportunities rather than wait for perfect conditions. Even in imperfection, it\'s worth being grateful for achievements already gained.',
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
      upright: '五个人挥舞着权杖看似在激烈战斗，但仔细观察会发现这更像是一场竞赛或演习，而非真正的冲突。每个人都有自己的方向和想法，导致混乱和缺乏协调。权杖五代表竞争、不同观点的碰撞和建设性的冲突。这张牌象征着多样性带来的挑战，每个人都想展示自己的方式是最好的。虽然看起来混乱，但这种竞争可以激发创新和成长。关键是学会在不同的声音中找到和谐，将竞争转化为合作。这是测试你坚持立场同时保持开放心态的能力的时刻。',
      reversed: '逆位的权杖五表示外在冲突缓和，或是冲突转向内在。你可能在避免必要的对抗，选择和平但压抑了真实的想法。这也可能表示过去的竞争已经解决，或是你学会了更成熟的方式处理分歧。然而，逆位也可能意味着内在的挣扎——你的不同面向在互相冲突，导致优柔寡断和能量消耗。现在需要审视是否应该表达你的观点，或是学会放下无益的争斗。有时候最大的战斗是内在的，需要整合而非压制不同的声音。',
    },
    descriptionEn: {
      upright: 'Five people wave wands in what appears fierce battle, but close observation reveals this is more competition or rehearsal than genuine conflict. Each has their own direction and ideas, causing chaos and lack of coordination. The Five of Wands represents competition, clashing different viewpoints, and constructive conflict. This card symbolizes challenges diversity brings, everyone wanting to show their way is best. Though appearing chaotic, this competition can spark innovation and growth. The key is learning to find harmony among different voices, transforming competition into collaboration. This is a moment testing your ability to stand your ground while maintaining an open mind.',
      reversed: 'Reversed, the Five of Wands indicates external conflict easing, or conflict turning inward. You might be avoiding necessary confrontation, choosing peace but suppressing true thoughts. This can also suggest past competition has resolved, or you\'ve learned more mature ways to handle disagreements. However, reversal may also mean inner struggle—your different aspects conflicting with each other, causing indecision and energy depletion. Now requires examining whether you should express your views, or learn to release unhelpful battles. Sometimes the greatest fight is internal, requiring integration rather than suppressing different voices.',
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
      upright: '权杖六描绘了一位骑士高举装饰着胜利花环的权杖，在众人的欢呼中前行。这张牌象征着公开的认可和来之不易的成功，代表你的努力得到了外界的肯定和赞赏。骑士头戴月桂花环，象征着荣誉和成就，周围的人群见证着这份胜利。这是一张关于自信和领导力的牌，提醒你在享受成功的同时保持谦逊。胜利不仅是个人的成就，更是团队合作和坚持不懈的结果。现在是时候庆祝你的成就，同时也要感恩那些支持你的人。',
      reversed: '逆位的权杖六提示你可能过于关注外界的认可，或是成功被推迟、被忽视。你可能因为缺乏应有的赞赏而感到失望，或是过度自负导致他人的疏远。这也可能表示你在胜利面前失去了谦逊，傲慢取代了感恩。现在需要反思成功的真正意义：它是来自内在的满足，还是仅仅依赖外界的掌声？重新校准你的价值观，记住真正的胜利是自我超越，而非击败他人。',
    },
    descriptionEn: {
      upright: 'Six of Wands depicts a rider holding high a wand decorated with a victory wreath, moving forward amid the cheers of a crowd. This card symbolizes public recognition and hard-won success, representing your efforts receiving acknowledgment and praise from the outside world. The rider wears a laurel wreath symbolizing honor and achievement, with the surrounding crowd witnessing this victory. This is a card about confidence and leadership, reminding you to remain humble while enjoying success. Victory is not just personal achievement, but the result of teamwork and perseverance. Now is the time to celebrate your accomplishments while also being grateful to those who supported you.',
      reversed: 'Reversed, Six of Wands suggests you may be overly focused on external recognition, or success is delayed or overlooked. You might feel disappointed by lack of deserved appreciation, or excessive arrogance is causing others to distance themselves. This can also indicate losing humility in the face of victory, with pride replacing gratitude. Now requires reflecting on the true meaning of success: does it come from inner satisfaction, or merely depend on external applause? Recalibrate your values, remembering that true victory is self-transcendence, not defeating others.',
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
      upright: '权杖七展现了一个人站在高地上，手持权杖抵御来自下方的六根权杖的挑战。这张牌象征着面对反对和挑战时的勇气与决心，代表你需要坚守自己的立场和信念。虽然形势看似困难，但你占据着有利的位置，拥有坚持下去的力量。这是一张关于勇气和毅力的牌，提醒你不要轻易放弃已经争取到的成果。你的信念值得捍卫，即使这意味着要独自面对质疑和压力。保持你的信念，坚定你的边界。',
      reversed: '逆位的权杖七提示你可能感到被压倒，开始怀疑自己是否值得坚持。你可能因为持续的对抗而精疲力竭，或是过度防御导致错失合作的机会。这也可能表示你在不值得的战斗上浪费能量，或是固执地坚守已经不再适用的立场。现在需要评估哪些战斗真正值得打，哪些可以放手。有时候退让并非软弱，而是智慧的选择。重新审视你的优先级，将能量投入真正重要的事情。',
    },
    descriptionEn: {
      upright: 'Seven of Wands shows a person standing on high ground, wielding a wand to defend against six wands challenging from below. This card symbolizes courage and determination when facing opposition and challenges, representing your need to stand by your position and beliefs. Though the situation seems difficult, you occupy an advantageous position with the strength to persevere. This is a card about courage and tenacity, reminding you not to easily abandon what you\'ve fought for. Your convictions are worth defending, even if it means facing doubt and pressure alone. Maintain your beliefs and hold your boundaries firm.',
      reversed: 'Reversed, Seven of Wands suggests you may feel overwhelmed, beginning to doubt whether persisting is worthwhile. You might be exhausted from continuous confrontation, or being overly defensive is causing you to miss opportunities for collaboration. This can also indicate wasting energy on battles not worth fighting, or stubbornly holding positions no longer applicable. Now requires assessing which battles are truly worth fighting and which can be released. Sometimes yielding is not weakness but wisdom. Re-examine your priorities and invest energy in what truly matters.',
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
      upright: '权杖八描绘了八根权杖如箭矢般划破天际，快速飞向目标。这张牌象征着迅猛的进展和突破性的动力，代表事情正在加速发展，障碍被清除。蓝天背景暗示着清晰的视野和畅通无阻的道路，河流象征着情感和能量的流动。这是一张关于行动和动能的牌，提醒你抓住当下的势头快速前进。沟通将变得顺畅，计划将迅速推进，旅行和消息可能突然到来。准备好迎接快节奏的变化，保持灵活和开放的心态。',
      reversed: '逆位的权杖八提示你可能遭遇延迟、阻碍或失去了前进的动力。你的计划可能被搁置，沟通可能出现误解，或是事情的发展速度超出了你的掌控。这也可能表示你因为变化太快而感到焦虑，或是错过了重要的时机。现在需要重新评估你的策略，找出造成延迟的原因。有时候放慢脚步是为了更好地前进，耐心等待合适的时机比强行推进更加明智。',
    },
    descriptionEn: {
      upright: 'Eight of Wands depicts eight wands flying through the sky like arrows, swiftly heading toward their target. This card symbolizes rapid progress and breakthrough momentum, representing things accelerating with obstacles being cleared. The blue sky background suggests clear vision and an unobstructed path, while the river symbolizes the flow of emotions and energy. This is a card about action and momentum, reminding you to seize the current momentum and move forward quickly. Communication will become smooth, plans will advance rapidly, and travel or messages may arrive suddenly. Prepare for fast-paced changes while maintaining flexibility and an open mindset.',
      reversed: 'Reversed, Eight of Wands suggests you may encounter delays, obstacles, or have lost forward momentum. Your plans might be on hold, communications may be misunderstood, or things are developing at a pace beyond your control. This can also indicate feeling anxious because changes are happening too quickly, or missing important timing. Now requires reassessing your strategy and identifying the causes of delays. Sometimes slowing down enables better progress forward; patiently waiting for the right timing is wiser than forcing advancement.',
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
      upright: '权杖九展现了一位伤痕累累但依然坚守的战士，他身后排列着八根权杖作为防御。这张牌象征着经历重重考验后的坚韧和毅力，代表你虽然疲惫但仍然站立着。头上的绷带提醒着过去的战斗，但他的眼神依然警觉和坚定。这是一张关于韧性和准备的牌，告诉你最后的挑战往往出现在黎明之前。你已经走了这么远，不要在最后关头放弃。你的经验使你更加强大，你的伤痕是荣誉的勋章。保持警惕，坚守阵地，胜利就在不远处。',
      reversed: '逆位的权杖九提示你可能已经精疲力竭，防御心态变成了偏执和僵化。你可能因为过去的伤痛而过度警惕，错失了放松和信任的机会。这也可能表示你的坚持已经变成了固执，拒绝承认自己需要休息。现在需要诚实地评估你的状态：继续坚持是勇气还是固执？放下防御并不意味着软弱，有时候最大的勇气是承认自己需要帮助。允许自己休息和恢复，你不必独自承担所有的重担。',
    },
    descriptionEn: {
      upright: 'Nine of Wands shows a battle-worn but steadfast warrior with eight wands lined up behind him as defense. This card symbolizes resilience and perseverance after enduring numerous trials, representing that though weary, you still stand. The bandage on his head reminds of past battles, yet his gaze remains vigilant and determined. This is a card about tenacity and preparedness, telling you that the final challenge often appears just before dawn. You\'ve come this far; don\'t give up at the last moment. Your experience makes you stronger, your scars are badges of honor. Stay alert, hold your ground, and victory is near.',
      reversed: 'Reversed, Nine of Wands suggests you may be completely exhausted, with your defensive stance becoming paranoia and rigidity. You might be overly vigilant due to past wounds, missing opportunities to relax and trust. This can also indicate your persistence has become stubbornness, refusing to acknowledge your need for rest. Now requires honest assessment of your state: is continuing to persist courage or obstinacy? Lowering defenses doesn\'t mean weakness; sometimes the greatest courage is admitting you need help. Allow yourself rest and recovery; you don\'t have to bear all burdens alone.',
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
      upright: '权杖十描绘了一个人艰难地扛着十根沉重的权杖，弯腰前行，目的地就在眼前。这张牌象征着过度承担责任和压力，代表你可能背负了超出自己能力的重担。虽然你有能力完成任务，但这种状态是不可持续的。这是一张关于责任和界限的牌，提醒你成功不应该以牺牲健康和幸福为代价。你可能需要学会委派任务，或是放下那些不再服务于你的责任。记住，能够说"不"也是一种力量，懂得何时寻求帮助是智慧的体现。',
      reversed: '逆位的权杖十带来好消息：你正在学习放下不必要的负担，或是开始将任务委派给他人。你可能意识到自己承担了过多责任，现在是时候重新评估优先级。这也可能表示你因为害怕失去控制而拒绝放手，或是在该承担责任时逃避。现在需要找到平衡：既要尽责，也要照顾好自己。学会信任他人，分享责任不是软弱而是明智。释放那些不再属于你的重担，为真正重要的事情腾出空间。',
    },
    descriptionEn: {
      upright: 'Ten of Wands depicts a person struggling to carry ten heavy wands, bent forward with their destination in sight. This card symbolizes taking on excessive responsibility and pressure, representing that you may be bearing burdens beyond your capacity. Though you\'re capable of completing tasks, this state is unsustainable. This is a card about responsibility and boundaries, reminding you that success shouldn\'t come at the cost of health and happiness. You may need to learn to delegate tasks or release responsibilities no longer serving you. Remember, being able to say "no" is also a strength; knowing when to seek help is a mark of wisdom.',
      reversed: 'Reversed, Ten of Wands brings good news: you\'re learning to release unnecessary burdens or beginning to delegate tasks to others. You may have realized you\'ve taken on too much responsibility; now is the time to reassess priorities. This can also indicate refusing to let go due to fear of losing control, or avoiding responsibility when you should embrace it. Now requires finding balance: being responsible while also taking care of yourself. Learn to trust others; sharing responsibility isn\'t weakness but wisdom. Release burdens that no longer belong to you, making space for what truly matters.',
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
      upright: '权杖侍从描绘了一位充满活力的年轻人，手持权杖凝视着它，仿佛在倾听内在的召唤。这张牌象征着新想法的萌芽和冒险精神的觉醒，代表你正站在新旅程的起点。他的姿态充满好奇和热情，周围的沙漠景观暗示着无限的可能性。这是一张关于探索和发现的牌，鼓励你追随内心的激情，勇敢地踏入未知领域。权杖侍从也可能带来令人兴奋的消息或新的机会。保持开放的心态，相信你的直觉，让好奇心引领你前行。',
      reversed: '逆位的权杖侍从提示你可能充满想法却缺乏行动，或是热情因挫折而消退。你可能收到令人失望的消息，或是新计划遭遇延迟。这也可能表示你因为害怕失败而犹豫不前，或是过于冲动而缺乏深思熟虑。现在需要在热情和计划之间找到平衡：梦想需要行动来支撑，但行动也需要方向。重新点燃你的激情，但这次要制定更切实际的计划。从小步骤开始，逐步建立信心。',
    },
    descriptionEn: {
      upright: 'Page of Wands depicts an energetic young person holding a wand and gazing at it, as if listening to an inner calling. This card symbolizes the budding of new ideas and the awakening of adventurous spirit, representing that you stand at the threshold of a new journey. His posture is filled with curiosity and enthusiasm, with the surrounding desert landscape suggesting infinite possibilities. This is a card about exploration and discovery, encouraging you to follow your inner passion and bravely step into unknown territory. Page of Wands may also bring exciting news or new opportunities. Maintain an open mindset, trust your intuition, and let curiosity lead you forward.',
      reversed: 'Reversed, Page of Wands suggests you may be full of ideas but lacking action, or enthusiasm has waned due to setbacks. You might receive disappointing news, or new plans encounter delays. This can also indicate hesitating due to fear of failure, or being too impulsive without thoughtful consideration. Now requires finding balance between enthusiasm and planning: dreams need action for support, but action also needs direction. Reignite your passion, but this time create more realistic plans. Start with small steps and gradually build confidence.',
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
      upright: '权杖骑士展现了一位骑着跃起的马匹、挥舞权杖的骑士，充满激情和行动力。这张牌象征着无畏的冒险精神和对目标的热切追求，代表你已准备好全速前进。他的盔甲上装饰着火蜥蜴，象征着火元素的转化力量和不屈的精神。这是一张关于勇气和动力的牌，鼓励你抓住机会，勇敢追逐梦想。权杖骑士提醒你，有时候最好的计划就是大胆行动。他代表着自由、激情和对生命的热爱。跟随你的热情，让内在的火焰照亮前路。',
      reversed: '逆位的权杖骑士警告你可能过于鲁莽，在没有充分考虑后果的情况下冲动行事。你的热情可能变成了盲目的冲动，或是缺乏耐心导致半途而废。这也可能表示你因为挫折而失去了动力，或是将能量浪费在无意义的争斗上。现在需要在激情和理性之间找到平衡：勇气很重要，但也要配合智慧。放慢脚步，思考你的行动是否真正服务于你的目标。真正的力量来自有方向的行动，而非盲目的冲动。',
    },
    descriptionEn: {
      upright: 'Knight of Wands shows a knight on a rearing horse, brandishing a wand with passion and action. This card symbolizes fearless adventurous spirit and ardent pursuit of goals, representing your readiness to move forward at full speed. His armor is decorated with salamanders, symbolizing the transformative power of the fire element and indomitable spirit. This is a card about courage and momentum, encouraging you to seize opportunities and bravely chase dreams. Knight of Wands reminds you that sometimes the best plan is bold action. He represents freedom, passion, and love for life. Follow your passion and let your inner flame illuminate the path ahead.',
      reversed: 'Reversed, Knight of Wands warns you may be too reckless, acting impulsively without fully considering consequences. Your enthusiasm might have become blind impulse, or lack of patience is causing you to abandon efforts midway. This can also indicate losing motivation due to setbacks, or wasting energy on meaningless conflicts. Now requires finding balance between passion and reason: courage is important, but it must be paired with wisdom. Slow down and consider whether your actions truly serve your goals. True power comes from directed action, not blind impulse.',
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
      upright: '权杖王后坐在王座上，手持权杖和向日葵，展现出自信、独立和温暖的能量。她的王座装饰着狮子图案，象征着勇气和领导力，脚边的黑猫代表直觉和神秘智慧。这张牌象征着充满魅力和生命力的女性能量，代表你拥有吸引他人的个人魅力和内在力量。权杖王后知道自己的价值，不需要外界的认可来确认自我。这是一张关于自信和创造力的牌，鼓励你拥抱自己的独特性，勇敢地表达真实的自我。你有能力激励他人，用你的热情点燃周围的世界。',
      reversed: '逆位的权杖王后提示你可能失去了自信，内在的光芒被自我怀疑掩盖。你可能因为嫉妒或不安全感而变得挑剔和控制欲强，或是过度关注外界评价而忽略了内在的声音。这也可能表示你将能量用于争夺关注而非真实的自我表达，或是因为害怕被拒绝而隐藏真实的自己。现在需要重新连接你的内在力量：真正的魅力来自自我接纳，而非外在的认可。拥抱你的独特之处，相信你的价值不需要证明。',
    },
    descriptionEn: {
      upright: 'Queen of Wands sits on her throne holding a wand and sunflower, radiating confident, independent, and warm energy. Her throne is decorated with lion motifs symbolizing courage and leadership, while the black cat at her feet represents intuition and mystical wisdom. This card symbolizes charismatic and vital feminine energy, representing your personal magnetism and inner strength that attracts others. Queen of Wands knows her worth and doesn\'t need external validation to confirm her identity. This is a card about confidence and creativity, encouraging you to embrace your uniqueness and boldly express your authentic self. You have the ability to inspire others and ignite the world around you with your passion.',
      reversed: 'Reversed, Queen of Wands suggests you may have lost confidence, with your inner light obscured by self-doubt. You might become critical and controlling due to jealousy or insecurity, or be overly focused on external opinions while ignoring your inner voice. This can also indicate using energy to compete for attention rather than authentic self-expression, or hiding your true self for fear of rejection. Now requires reconnecting with your inner power: true charisma comes from self-acceptance, not external validation. Embrace your uniqueness and trust that your worth needs no proof.',
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
      upright: '权杖国王威严地坐在王座上，手持权杖，展现出强大的领导力和远见。他的王座和长袍都装饰着狮子和火蜥蜴，象征着勇气、力量和转化的能力。这张牌象征着火元素的成熟表达，代表你拥有将愿景转化为现实的能力和权威。权杖国王是天生的领导者，懂得如何激励他人并带领团队走向成功。这是一张关于企业家精神和成就的牌，鼓励你承担领导角色，用你的热情和智慧影响世界。你有创造遗产的潜力，勇敢地追求你的宏大愿景。',
      reversed: '逆位的权杖国王警告你可能变得过于专横和独断，用强制而非激励的方式领导。你可能失去了方向感，或是冲动取代了战略思考。这也可能表示你滥用权力追求个人私利，或是因为傲慢而失去他人的尊重和信任。现在需要反思你的领导方式：真正的领导力来自服务而非控制，来自激励而非命令。重新连接你的愿景和价值观，确保你的行动符合更高的目标。真正的力量在于赋能他人，而非证明自己的优越。',
    },
    descriptionEn: {
      upright: 'King of Wands sits majestically on his throne, holding a wand, displaying powerful leadership and vision. His throne and robes are decorated with lions and salamanders, symbolizing courage, strength, and the ability to transform. This card symbolizes the mature expression of the fire element, representing your ability and authority to transform vision into reality. King of Wands is a natural leader who knows how to inspire others and lead teams to success. This is a card about entrepreneurial spirit and achievement, encouraging you to take on leadership roles and influence the world with your passion and wisdom. You have the potential to create a legacy; boldly pursue your grand vision.',
      reversed: 'Reversed, King of Wands warns you may have become too domineering and autocratic, leading through force rather than inspiration. You might have lost your sense of direction, or impulse has replaced strategic thinking. This can also indicate abusing power for personal gain, or losing others\' respect and trust due to arrogance. Now requires reflecting on your leadership style: true leadership comes from service not control, from inspiration not command. Reconnect with your vision and values, ensuring your actions align with higher purposes. True power lies in empowering others, not proving your superiority.',
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
      upright: '圣杯王牌展现了一只神圣之手从云端伸出，捧着一只溢满清水的圣杯，五道水流如喷泉般涌出，象征五种感官的觉醒。白鸽衔着圣餐面包降临杯中，代表圣灵的降临和神圣之爱。这张牌象征着情感和精神层面的全新开始，代表你的心灵正在为爱和创造性表达敞开。莲花在水面上漂浮，象征灵性觉醒和情感的纯净。这是一张关于无条件之爱和直觉智慧的牌，邀请你接受来自宇宙的情感礼物。现在是时候敞开心扉，让爱流入你的生命。',
      reversed: '逆位的圣杯王牌提示你可能在情感上感到封闭，内心充满了未表达的感受或被压抑的情绪。你可能因为过去的伤害而筑起高墙，拒绝新的爱和连接。这也可能表示创造力被阻塞，或是你与自己的直觉和精神自我失去了联系。现在需要探索是什么阻碍了你情感的流动：恐惧、悲伤，还是不值得的信念？疗愈的第一步是承认和接纳你的感受。允许自己再次感受，允许爱进入你的生命。',
    },
    descriptionEn: {
      upright: 'Ace of Cups shows a divine hand extending from clouds, holding a cup overflowing with clear water as five streams fountain forth, symbolizing the awakening of the five senses. A white dove descends with a communion wafer into the cup, representing the descent of the Holy Spirit and divine love. This card symbolizes a brand new beginning on emotional and spiritual levels, representing your heart opening to love and creative expression. Lotus flowers float on the water, symbolizing spiritual awakening and emotional purity. This is a card about unconditional love and intuitive wisdom, inviting you to receive the emotional gift from the universe. Now is the time to open your heart and let love flow into your life.',
      reversed: 'Reversed, Ace of Cups suggests you may feel emotionally closed, your heart filled with unexpressed feelings or repressed emotions. You might have built walls due to past hurts, refusing new love and connection. This can also indicate blocked creativity, or losing touch with your intuition and spiritual self. Now requires exploring what blocks your emotional flow: fear, grief, or beliefs of unworthiness? The first step to healing is acknowledging and accepting your feelings. Allow yourself to feel again, allow love to enter your life.',
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
      upright: '圣杯二描绘了一对男女深情对视，各自举起圣杯，象征着灵魂的连接和承诺的交换。他们头顶上方飘浮着带翼狮子头的赫耳墨斯之杖，代表治愈、沟通和神圣的结合。这张牌象征着深刻的伙伴关系和情感的平衡，代表两颗心在爱与尊重中相遇。这不仅限于浪漫关系，也可以是深厚的友谊或商业伙伴。这是一张关于相互理解和和谐共鸣的牌，提醒你真正的连接建立在平等和真诚之上。当两个人以开放和真实的心相遇时，美好的化学反应就会发生。',
      reversed: '逆位的圣杯二提示关系可能出现失衡，一方付出过多而另一方接受太少。沟通可能中断，或是你们之间的和谐受到外界干扰。这也可能表示关系破裂、分离，或是你与自己的内在失去了平衡。现在需要诚实地评估这段关系：是否仍然建立在相互尊重之上？双方是否都在投入？有时候，最好的爱是学会放手。重新建立与自己的连接，确保你首先爱自己，才能真正爱他人。',
    },
    descriptionEn: {
      upright: 'Two of Cups depicts a man and woman gazing deeply at each other, each raising a cup, symbolizing soul connection and exchange of vows. Above them floats the Caduceus of Hermes with a winged lion head, representing healing, communication, and divine union. This card symbolizes profound partnership and emotional balance, representing two hearts meeting in love and respect. This isn\'t limited to romantic relationships; it can also be deep friendship or business partnership. This is a card about mutual understanding and harmonious resonance, reminding you that true connection is built on equality and authenticity. When two people meet with open and genuine hearts, beautiful chemistry occurs.',
      reversed: 'Reversed, Two of Cups suggests the relationship may be unbalanced, with one giving too much and the other receiving too little. Communication might break down, or your harmony is disturbed by external interference. This can also indicate relationship breakdown, separation, or losing balance within yourself. Now requires honest assessment of this relationship: is it still built on mutual respect? Are both parties investing? Sometimes the best love is learning to let go. Re-establish connection with yourself, ensuring you love yourself first before you can truly love others.',
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
      upright: '圣杯三展现了三位女性欢快地举杯庆祝，她们站在丰收的果园中，象征着友谊、团结和共同的喜悦。这张牌象征着社群的力量和集体庆祝的美好，代表你正处于欢乐和连接的时刻。她们各自举起圣杯，形成了一个神圣的三角形，代表身体、心灵和精神的和谐统一。这是一张关于庆祝和感恩的牌，提醒你生命中的美好时刻值得与所爱之人分享。友谊和社群支持是幸福的重要源泉，现在是享受人际连接的时候。',
      reversed: '逆位的圣杯三提示你可能感到社交孤立，或是友谊圈出现了冲突和裂痕。你可能因为过度放纵而忽略了真正重要的事情，或是社交活动变成了逃避内在问题的方式。这也可能表示嫉妒和竞争破坏了本应和谐的关系，或是你发现某些友谊是肤浅的。现在需要评估你的社交圈：哪些关系真正滋养你，哪些只是消耗你的能量？质量比数量更重要，培养那些真正深刻和支持性的连接。',
    },
    descriptionEn: {
      upright: 'Three of Cups shows three women joyfully raising cups in celebration, standing in an abundant orchard, symbolizing friendship, unity, and shared joy. This card symbolizes the power of community and the beauty of collective celebration, representing a moment of happiness and connection. Each raises a cup forming a sacred triangle, representing the harmonious unity of body, mind, and spirit. This is a card about celebration and gratitude, reminding you that beautiful moments in life are worth sharing with loved ones. Friendship and community support are vital sources of happiness; now is the time to enjoy human connection.',
      reversed: 'Reversed, Three of Cups suggests you may feel socially isolated, or your friendship circle is experiencing conflict and rifts. You might be neglecting truly important matters due to overindulgence, or social activities have become a way to escape inner issues. This can also indicate jealousy and competition damaging what should be harmonious relationships, or discovering certain friendships are superficial. Now requires assessing your social circle: which relationships truly nourish you, and which merely drain your energy? Quality matters more than quantity; cultivate those connections that are genuinely deep and supportive.',
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
      upright: '圣杯四描绘了一个人坐在树下，双臂交叉陷入沉思，面前摆放着三个圣杯，而一只手从云端伸出递来第四个圣杯。这张牌象征着内省、冷漠和对现有事物的不满，代表你可能过于专注于内心世界而忽视了外界的机会。盘腿而坐的姿态暗示着冥想和自我反思，但也可能表示封闭和拒绝。这是一张关于重新评估和视角的牌，提醒你有时候我们太专注于缺失的东西，反而看不见眼前的礼物。保持开放的心态，宇宙可能正在以你意想不到的方式提供帮助。',
      reversed: '逆位的圣杯四带来好消息：你正在从冷漠中苏醒，开始看见之前被忽视的机会。新的视角让你重新燃起对生活的热情，或是你终于准备好接受那份一直在等待你的礼物。这也可能表示你已经完成了必要的内省，现在是时候重新投入外在世界。从沉思中抬起头来，环顾四周，你会发现生活中充满了可能性。允许自己再次感到兴奋和好奇，拥抱新的开始。',
    },
    descriptionEn: {
      upright: 'Four of Cups depicts a person sitting under a tree, arms crossed in contemplation, with three cups before them while a hand extends from clouds offering a fourth cup. This card symbolizes introspection, apathy, and dissatisfaction with existing things, representing you may be too focused on your inner world while ignoring external opportunities. The cross-legged posture suggests meditation and self-reflection, but can also indicate being closed off and refusing. This is a card about reevaluation and perspective, reminding you that sometimes we focus so much on what\'s missing that we can\'t see the gifts before us. Maintain an open mindset; the universe may be offering help in unexpected ways.',
      reversed: 'Reversed, Four of Cups brings good news: you\'re awakening from apathy and beginning to see previously overlooked opportunities. New perspectives reignite your passion for life, or you\'re finally ready to accept the gift that\'s been waiting for you. This can also indicate you\'ve completed necessary introspection and it\'s time to re-engage with the external world. Lift your head from contemplation and look around; you\'ll find life is full of possibilities. Allow yourself to feel excited and curious again, embrace new beginnings.',
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
      upright: '圣杯五展现了一个身披黑袍的人物低头凝视着三个翻倒的圣杯，沉浸在悲伤和失望之中，却没有注意到身后还有两个完好的圣杯直立着。这张牌象征着失落、悲伤和对过去的执着，代表你可能过于专注于失去的东西而忽视了仍然拥有的祝福。远处的桥梁象征着通往疗愈和新开始的道路，河流代表情感的流动。这是一张关于悲伤和接纳的牌，提醒你哀悼是必要的过程，但不要让它阻止你看见希望。当你准备好时，转过身来，你会发现并非一切都失去了。',
      reversed: '逆位的圣杯五表示疗愈的开始：你正在学习接纳失去，开始向前看。你可能终于准备好放下过去的悲伤，或是找到了从痛苦中成长的力量。这也可能表示你正在重拾那些被忽视的祝福，意识到生活中仍有值得感恩的事物。现在是时候跨过那座桥梁，迈向新的篇章。宽恕自己和他人，允许情感的河流继续流动。记住，失去也是生命的一部分，它教会我们珍惜当下。',
    },
    descriptionEn: {
      upright: 'Five of Cups shows a cloaked figure looking down at three spilled cups, immersed in sadness and disappointment, yet not noticing two upright cups still standing behind them. This card symbolizes loss, grief, and clinging to the past, representing you may be too focused on what\'s been lost while ignoring blessings still present. The bridge in the distance symbolizes the path to healing and new beginnings, while the river represents emotional flow. This is a card about grief and acceptance, reminding you that mourning is a necessary process, but don\'t let it prevent you from seeing hope. When you\'re ready, turn around and you\'ll find not everything is lost.',
      reversed: 'Reversed, Five of Cups indicates the beginning of healing: you\'re learning to accept loss and starting to look forward. You might finally be ready to release past grief, or have found strength to grow from pain. This can also indicate reclaiming overlooked blessings, realizing there are still things in life worth being grateful for. Now is the time to cross that bridge and move toward a new chapter. Forgive yourself and others, allow the emotional river to continue flowing. Remember, loss is part of life; it teaches us to cherish the present.',
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
      upright: '圣杯六描绘了一个孩子将装满鲜花的圣杯递给另一个较小的孩子，背景是温馨的村庄和古老的建筑。这张牌象征着童年的纯真、美好的回忆和简单的快乐，代表你正在重温过去的美好时光。六个圣杯都装满了白色的花朵，象征纯洁的情感和无条件的给予。这是一张关于怀旧和内在孩童的牌，提醒你保持童心和单纯的喜悦。过去的经验塑造了现在的你，珍惜那些美好的记忆，它们是你心灵的宝藏。这张牌也可能预示着与旧友重逢或回到熟悉的地方。',
      reversed: '逆位的圣杯六警告你可能过度沉溺于过去，用怀旧逃避现在的责任和挑战。你可能被不切实际的期望所困，或是试图重现已经无法复制的过去。这也可能表示童年的创伤仍在影响你，或是你需要放下过去才能真正成长。现在需要在珍惜记忆和活在当下之间找到平衡：过去是美好的，但未来才是你可以创造的。从回忆中汲取力量和智慧，但不要让它成为前进的枷锁。',
    },
    descriptionEn: {
      upright: 'Six of Cups depicts a child handing a cup filled with flowers to a smaller child, with a warm village and ancient buildings in the background. This card symbolizes childhood innocence, beautiful memories, and simple joys, representing you\'re reliving good times from the past. Six cups are all filled with white flowers, symbolizing pure emotions and unconditional giving. This is a card about nostalgia and the inner child, reminding you to maintain childlike wonder and simple joy. Past experiences shaped who you are now; cherish those beautiful memories, they are treasures of your soul. This card may also herald reunions with old friends or returning to familiar places.',
      reversed: 'Reversed, Six of Cups warns you may be dwelling too much in the past, using nostalgia to escape present responsibilities and challenges. You might be trapped by unrealistic expectations or trying to recreate a past that cannot be duplicated. This can also indicate childhood trauma still affecting you, or needing to release the past to truly grow. Now requires finding balance between cherishing memories and living in the present: the past is beautiful, but the future is yours to create. Draw strength and wisdom from memories, but don\'t let them become chains preventing forward movement.',
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
      upright: '圣杯七展现了一个黑色的人影站在七个漂浮在云端的圣杯前，每个杯中都装着不同的幻象：珠宝、胜利花环、蛇、城堡、龙、笼罩的人头和闪光的人影。这张牌象征着无限的选择、幻想和白日梦，代表你面临着众多诱人的可能性。云朵暗示着这些选择可能并非完全真实或实际。这是一张关于想象力和选择的牌，提醒你并非所有闪闪发光的东西都是金子。在众多选项中，有些是真实的机会，有些则是迷惑人的幻象。保持清醒的头脑，分辨真假，做出明智的选择。',
      reversed: '逆位的圣杯七带来清晰：云雾散去，你开始看清现实并准备做出决定。你可能意识到某些梦想是不切实际的，或是终于从幻想中走出来采取行动。这也可能表示你因为选择过多而瘫痪，现在需要专注和方向。是时候从梦想回到现实，评估哪些目标值得追求，哪些只是分散注意力的幻象。做出选择，承诺于一条道路，将你的能量集中在真正重要的事情上。',
    },
    descriptionEn: {
      upright: 'Seven of Cups shows a dark silhouette standing before seven cups floating in clouds, each containing different visions: jewels, victory wreaths, a snake, a castle, a dragon, a shrouded head, and a glowing figure. This card symbolizes unlimited choices, fantasies, and daydreams, representing you face numerous tempting possibilities. The clouds suggest these options may not be entirely real or practical. This is a card about imagination and choice, reminding you not all that glitters is gold. Among many options, some are real opportunities while others are deceptive illusions. Maintain a clear mind, discern truth from falsehood, and make wise choices.',
      reversed: 'Reversed, Seven of Cups brings clarity: the fog lifts and you begin to see reality, preparing to make decisions. You might realize certain dreams are impractical, or finally emerge from fantasy to take action. This can also indicate paralysis from too many choices; now requiring focus and direction. It\'s time to return from dreams to reality, assess which goals are worth pursuing and which are merely distracting illusions. Make a choice, commit to a path, and concentrate your energy on what truly matters.',
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
      upright: '圣杯八描绘了一个人背对着整齐排列的八个圣杯，踏上艰难的山路，月亮在天空中照亮他孤独的旅程。这张牌象征着放手、离开和寻找更深层意义的勇气，代表你正准备离开看似稳定但不再滋养灵魂的环境。他留下的杯子代表物质成就或感情投入，但内心的召唤要求他继续前行。这是一张关于精神探索和勇敢转变的牌，提醒你有时候离开是为了成长。虽然前路未知且充满挑战，但停留在不再适合的地方会扼杀你的灵魂。倾听内心的声音，勇敢地踏上寻找真我的旅程。',
      reversed: '逆位的圣杯八提示你可能因为害怕未知而拒绝离开，即使你知道现状已经不再适合。你可能在逃避必要的改变，或是过早地放弃了原本应该坚持的东西。这也可能表示你终于准备好回来，完成未竟的事业。现在需要诚实地问自己：我是因为真正的承诺而留下，还是因为恐惧而停滞？有时候最大的勇气是离开，但也要确保你不是在逃避而是在追寻。找到你内心真正的召唤，然后勇敢地跟随它。',
    },
    descriptionEn: {
      upright: 'Eight of Cups depicts a person turning their back on eight neatly arranged cups, embarking on a difficult mountain path as the moon illuminates their solitary journey. This card symbolizes the courage to let go, leave, and seek deeper meaning, representing your preparation to depart from seemingly stable but soul-draining environments. The cups left behind represent material achievements or emotional investments, but an inner calling demands moving forward. This is a card about spiritual exploration and brave transformation, reminding you that sometimes leaving is necessary for growth. Though the path ahead is unknown and challenging, staying where you no longer fit will suffocate your soul. Listen to your inner voice and bravely embark on the journey to find your true self.',
      reversed: 'Reversed, Eight of Cups suggests you may refuse to leave due to fear of the unknown, even knowing the current situation no longer fits. You might be avoiding necessary changes or prematurely abandoning what should be persisted with. This can also indicate finally being ready to return and complete unfinished business. Now requires honestly asking yourself: am I staying due to genuine commitment or fear-based stagnation? Sometimes the greatest courage is leaving, but ensure you\'re not escaping but pursuing. Find your inner true calling, then bravely follow it.',
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
      upright: '圣杯九描绘了一位满面笑容的人物盘腿而坐，双臂交叉，身后整齐排列着九个金色的圣杯。这张牌象征着愿望的实现和内心的满足，代表你已经达到了情感或物质层面的丰盛状态。他自信而喜悦的神态反映出真正的幸福和成就感。这是一张关于享受和感恩的牌，被称为"愿望牌"，提醒你庆祝已经获得的成功。你的努力得到了回报，现在是享受成果的时刻。真正的满足来自内心的喜悦和对所拥有的感恩，而非永无止境的追求。',
      reversed: '逆位的圣杯九警告你可能陷入物质主义或过度放纵，外在的满足无法填补内心的空虚。你可能拥有一切却仍不满足，或是追求享乐变成了逃避内在问题的方式。这也可能表示你的愿望以自私的方式实现，或是成功让你变得自满和傲慢。现在需要反思真正的幸福意味着什么：是外在的拥有，还是内心的和平？重新调整你的价值观，记住分享和感恩才能让喜悦持久。真正的满足来自心灵的富足，而非物质的堆积。',
    },
    descriptionEn: {
      upright: 'Nine of Cups depicts a smiling figure sitting cross-legged with arms folded, nine golden cups neatly arranged behind them. This card symbolizes wish fulfillment and inner contentment, representing you\'ve achieved emotional or material abundance. Their confident and joyful demeanor reflects true happiness and accomplishment. This is a card about enjoyment and gratitude, known as the "wish card," reminding you to celebrate achieved success. Your efforts have been rewarded; now is the moment to enjoy the fruits. True satisfaction comes from inner joy and gratitude for what you have, not endless pursuit.',
      reversed: 'Reversed, Nine of Cups warns you may fall into materialism or overindulgence, with external satisfaction unable to fill inner emptiness. You might have everything yet still feel dissatisfied, or pursuing pleasure has become a way to escape inner issues. This can also indicate wishes fulfilled selfishly, or success making you complacent and arrogant. Now requires reflecting on what true happiness means: external possessions or inner peace? Readjust your values, remembering sharing and gratitude make joy lasting. True contentment comes from spiritual richness, not material accumulation.',
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
      upright: '圣杯十展现了一对夫妻和两个孩子在彩虹下欢庆，十个金色圣杯在天空中排列成拱形。这张牌象征着情感的圆满、家庭的和谐和持久的幸福，代表你在人际关系和情感层面达到了真正的满足。彩虹象征着承诺和希望的实现，绿色的田园风光代表和平与丰盛。这是一张关于爱和归属的牌，提醒你最大的幸福来自与所爱之人的深刻连接。这不仅指家庭，也包括任何让你感到被爱和接纳的社群。珍惜这些连接，它们是生命中最宝贵的礼物。',
      reversed: '逆位的圣杯十提示你可能在家庭或关系中经历冲突和失望。理想化的期望可能与现实发生冲突，或是价值观的差异导致疏远。这也可能表示你过度专注于营造完美的外表，忽略了真实的情感连接。现在需要诚实地评估你的关系：它们是建立在真实还是假象之上？真正的和谐不是没有冲突，而是通过沟通和理解解决分歧。放下完美主义，接纳不完美的真实。有时候，不完美的爱才是最真实的爱。',
    },
    descriptionEn: {
      upright: 'Ten of Cups shows a couple and two children celebrating under a rainbow, with ten golden cups arranged in an arch across the sky. This card symbolizes emotional fulfillment, family harmony, and lasting happiness, representing true satisfaction in relationships and emotional life. The rainbow symbolizes promises kept and hopes realized, while the green pastoral landscape represents peace and abundance. This is a card about love and belonging, reminding you that the greatest happiness comes from deep connection with loved ones. This refers not only to family but any community where you feel loved and accepted. Cherish these connections; they are life\'s most precious gifts.',
      reversed: 'Reversed, Ten of Cups suggests you may be experiencing conflict and disappointment in family or relationships. Idealized expectations might clash with reality, or differences in values cause estrangement. This can also indicate over-focusing on creating perfect appearances while neglecting genuine emotional connection. Now requires honestly assessing your relationships: are they built on authenticity or facade? True harmony isn\'t absence of conflict, but resolving differences through communication and understanding. Release perfectionism and embrace imperfect reality. Sometimes, imperfect love is the most authentic love.',
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
      upright: '圣杯侍从描绘了一位年轻人凝视着圣杯中浮现的鱼，象征着来自潜意识的创意和直觉信息。这张牌象征着情感和创造力的萌芽，代表你正在接收来自内心深处的启发。鱼代表潜意识的智慧和精神的馈赠，年轻人惊奇的表情反映出与内在世界的初次相遇。这是一张关于情感探索和创意表达的牌，鼓励你保持童心般的好奇和开放。圣杯侍从也可能带来情感层面的好消息或新的创意项目。倾听你的直觉，它正在向你低语重要的信息。',
      reversed: '逆位的圣杯侍从提示你可能在情感上表现得不成熟，或是创意受阻无法表达。你可能收到令人失望的消息，或是过于敏感而容易受伤。这也可能表示你忽视直觉的指引，或是沉溺于幻想而无法将创意付诸实践。现在需要在梦想和现实之间找到平衡：感受很重要，但也要学会管理情绪。培养情感智慧，学会既敏感又坚强。相信你的直觉，但也要用理性验证。',
    },
    descriptionEn: {
      upright: 'Page of Cups depicts a young person gazing at a fish emerging from the cup, symbolizing creative and intuitive messages from the subconscious. This card symbolizes the budding of emotions and creativity, representing you\'re receiving inspiration from deep within. The fish represents subconscious wisdom and spiritual gifts, while the young person\'s surprised expression reflects initial encounters with the inner world. This is a card about emotional exploration and creative expression, encouraging you to maintain childlike curiosity and openness. Page of Cups may also bring good news on the emotional front or new creative projects. Listen to your intuition; it\'s whispering important messages.',
      reversed: 'Reversed, Page of Cups suggests you may be emotionally immature, or creativity is blocked and unable to express. You might receive disappointing news, or be overly sensitive and easily hurt. This can also indicate ignoring intuitive guidance, or being lost in fantasy unable to put creativity into practice. Now requires finding balance between dreams and reality: feelings matter, but you must also learn to manage emotions. Cultivate emotional intelligence, learning to be both sensitive and strong. Trust your intuition, but also verify with reason.',
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
      upright: '圣杯骑士展现了一位骑着平静行走的白马的骑士，手持圣杯仿佛献上珍贵的礼物。这张牌象征着浪漫的追求、艺术气质和情感的理想主义，代表你正在追随内心的召唤。他的盔甲装饰着鱼的图案，象征着情感的流动和潜意识的智慧。这是一张关于梦想和浪漫的牌，鼓励你勇敢表达你的感受和创意愿景。圣杯骑士提醒你，追随心的指引并不是软弱，而是真正的勇气。他代表着求婚、创意邀请或情感层面的新提议。让你的心引领道路。',
      reversed: '逆位的圣杯骑士警告你可能过于理想化，活在不切实际的幻想中而忽视现实。你可能情绪化且善变，或是用浪漫承诺操纵他人。这也可能表示你害怕真正的承诺，只享受追求的过程而非真实的连接。现在需要在感性和理性之间找到平衡：梦想很美好，但也要脚踏实地。检查你的承诺是否真诚，你的情感表达是否成熟。真正的爱需要行动支撑，而非仅仅是美丽的词语。',
    },
    descriptionEn: {
      upright: 'Knight of Cups shows a knight on a calmly walking white horse, holding a cup as if offering a precious gift. This card symbolizes romantic pursuit, artistic temperament, and emotional idealism, representing you\'re following your heart\'s calling. His armor is decorated with fish patterns, symbolizing emotional flow and subconscious wisdom. This is a card about dreams and romance, encouraging you to bravely express your feelings and creative vision. Knight of Cups reminds you that following the heart\'s guidance isn\'t weakness, but true courage. He represents proposals, creative invitations, or new emotional propositions. Let your heart lead the way.',
      reversed: 'Reversed, Knight of Cups warns you may be overly idealistic, living in unrealistic fantasies while ignoring reality. You might be moody and fickle, or using romantic promises to manipulate others. This can also indicate fearing genuine commitment, enjoying only the chase rather than real connection. Now requires finding balance between emotion and reason: dreams are beautiful, but stay grounded. Check whether your commitments are sincere, your emotional expressions mature. True love needs action to support it, not just beautiful words.',
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
      upright: '圣杯王后坐在海边的王座上，手持一个精美封闭的圣杯，凝视着它仿佛在冥想。这张牌象征着情感的深度、同理心和直觉智慧，代表你拥有理解和疗愈他人情感的天赋。她的王座装饰着海洋生物和水仙女，象征着潜意识的丰富和情感的流动。这是一张关于情感成熟和慈悲的牌，提醒你真正的力量来自柔软和理解。圣杯王后能够深刻感知他人的需求，同时保持自己的情感边界。她教导我们，滋养他人的前提是先滋养自己。信任你的直觉，它是你最可靠的向导。',
      reversed: '逆位的圣杯王后提示你可能情感不稳定，或是过度依赖他人来获得情感支持。你可能因为同理心过度而承担了他人的情绪负担，或是在照顾他人时忽视了自己的需求。这也可能表示你与自己的直觉失去连接，或是情感边界模糊导致被动和依赖。现在需要重新建立情感的平衡：同情不等于承担，理解不等于失去自我。学会在关怀他人的同时也关怀自己，建立健康的情感边界。你的杯子必须先满，才能倒给他人。',
    },
    descriptionEn: {
      upright: 'Queen of Cups sits on a throne by the sea, holding a beautifully sealed cup and gazing at it as if in meditation. This card symbolizes emotional depth, empathy, and intuitive wisdom, representing your gift for understanding and healing others\' emotions. Her throne is decorated with sea creatures and nymphs, symbolizing the richness of the subconscious and emotional flow. This is a card about emotional maturity and compassion, reminding you that true power comes from softness and understanding. Queen of Cups can deeply perceive others\' needs while maintaining her own emotional boundaries. She teaches us that nurturing others requires first nurturing yourself. Trust your intuition; it\'s your most reliable guide.',
      reversed: 'Reversed, Queen of Cups suggests you may be emotionally unstable or overly dependent on others for emotional support. You might carry others\' emotional burdens due to excessive empathy, or neglect your own needs while caring for others. This can also indicate losing connection with your intuition, or blurred emotional boundaries causing passivity and dependence. Now requires re-establishing emotional balance: compassion doesn\'t equal taking on burdens, understanding doesn\'t equal losing yourself. Learn to care for yourself while caring for others, establish healthy emotional boundaries. Your cup must be full first before you can pour for others.',
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
      upright: '圣杯国王坐在波涛汹涌的海洋中的王座上，手持圣杯却神态平静，象征着在情感风暴中保持冷静和平衡的能力。这张牌象征着情感的成熟掌控、智慧和外交手腕，代表你能够理性地管理情感而不被其淹没。背景中的鱼和船只代表潜意识的力量和生命之旅。这是一张关于情感智慧和领导力的牌，提醒你真正的力量是在理解和控制情感的同时保持同情心。圣杯国王能够调解冲突，以智慧和慈悲引领他人。他教导我们，成熟不是压抑情感，而是学会与之和谐共处。',
      reversed: '逆位的圣杯国王警告你可能在情感上变得冷酷和疏离，或是用情感操控他人。你可能压抑自己的感受以维持控制，或是滥用情感智慧追求个人利益。这也可能表示你在情感和理性之间失去平衡，变得过于理智而缺乏同情。现在需要重新连接你的心：真正的力量来自整合情感和理性，而非压抑或操控。允许自己感受脆弱，这并不会削弱你的力量。真正的情感成熟是既能感受又能掌控，既能同情又能保持边界。',
    },
    descriptionEn: {
      upright: 'King of Cups sits on a throne amid turbulent seas, holding a cup while maintaining calm composure, symbolizing the ability to remain balanced amid emotional storms. This card symbolizes mature emotional mastery, wisdom, and diplomacy, representing your capacity to rationally manage emotions without being overwhelmed. The fish and ships in the background represent subconscious forces and life\'s journey. This is a card about emotional wisdom and leadership, reminding you that true power lies in understanding and controlling emotions while maintaining compassion. King of Cups can mediate conflicts, leading others with wisdom and kindness. He teaches us that maturity isn\'t suppressing emotions, but learning to coexist harmoniously with them.',
      reversed: 'Reversed, King of Cups warns you may become emotionally cold and distant, or use emotions to manipulate others. You might suppress your own feelings to maintain control, or abuse emotional intelligence for personal gain. This can also indicate losing balance between emotion and reason, becoming overly rational and lacking compassion. Now requires reconnecting with your heart: true power comes from integrating emotion and reason, not suppressing or manipulating. Allow yourself to feel vulnerable; it doesn\'t diminish your strength. True emotional maturity is being able to both feel and control, to be compassionate while maintaining boundaries.',
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
      upright: '宝剑王牌展现了一只手从云端伸出，紧握一把直立的宝剑，剑尖穿透金色的王冠。这张牌象征着心智的突破、清晰和真理的力量，代表你正在经历思想上的顿悟和认知上的飞跃。王冠代表成就和胜利，橄榄枝和棕榈叶象征和平与荣誉。这是一张关于智慧和洞察的牌，提醒你真理虽然锋利但能够切断迷雾。宝剑王牌带来新的想法、清晰的沟通和公正的判断。现在是时候用理性和逻辑解决问题，勇敢地说出真相，即使它并不总是受欢迎。',
      reversed: '逆位的宝剑王牌提示你可能陷入思维混乱，难以看清事实真相。你的判断可能被情绪或偏见所蒙蔽，或是过度分析导致瘫痪。这也可能表示真相过于残酷而让人难以接受，或是你在用智力压制他人。现在需要重新审视你的思维模式：是基于事实还是假设？智慧不仅是理性的锋利，还需要同情心的平衡。寻求更多信息，保持开放的心态，记住真理应该是解放而非武器。',
    },
    descriptionEn: {
      upright: 'Ace of Swords shows a hand extending from clouds, firmly grasping an upright sword with its tip piercing a golden crown. This card symbolizes mental breakthrough, clarity, and the power of truth, representing you\'re experiencing intellectual epiphany and cognitive leaps. The crown represents achievement and victory, while olive and palm branches symbolize peace and honor. This is a card about wisdom and insight, reminding you that truth, though sharp, can cut through fog. Ace of Swords brings new ideas, clear communication, and fair judgment. Now is the time to solve problems with reason and logic, bravely speak the truth even if it\'s not always popular.',
      reversed: 'Reversed, Ace of Swords suggests you may be trapped in mental confusion, struggling to see factual truth. Your judgment might be clouded by emotions or bias, or over-analysis is causing paralysis. This can also indicate truth being too brutal to accept, or using intellect to suppress others. Now requires re-examining your thought patterns: based on facts or assumptions? Wisdom isn\'t just rational sharpness; it needs compassion\'s balance. Seek more information, maintain an open mindset, remember truth should liberate not weaponize.',
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
      upright: '宝剑二描绘了一位蒙住双眼的女性，双手各持一把宝剑交叉于胸前，背后是波涛汹涌的海洋。这张牌象征着艰难的抉择和刻意的回避，代表你正处于僵局之中，拒绝面对必须做出的决定。蒙眼布代表自我欺骗或拒绝看清真相，两把剑的平衡象征着选择的困境。这是一张关于停滞和否认的牌，提醒你有时候不做决定本身就是一种选择。虽然保持中立可能暂时感觉安全，但这种平衡是脆弱且不可持续的。移除蒙眼布，直面真相，做出必要的选择。',
      reversed: '逆位的宝剑二表示你终于准备好摘下蒙眼布，面对一直回避的真相。决策的瘫痪正在解除，或是你意识到不能再拖延下去。这也可能表示信息过载让你更加困惑，或是过度分析导致无法行动。现在需要在获取信息和做出决定之间找到平衡：不是所有问题都能有完美的答案。相信你的直觉，接受不确定性。有时候行动比完美更重要，勇敢地迈出第一步。',
    },
    descriptionEn: {
      upright: 'Two of Swords depicts a blindfolded woman holding two swords crossed over her chest, with turbulent seas behind her. This card symbolizes difficult choices and deliberate avoidance, representing you\'re in a stalemate, refusing to face decisions that must be made. The blindfold represents self-deception or refusing to see truth, while the balance of two swords symbolizes the dilemma of choice. This is a card about stagnation and denial, reminding you that sometimes not making a decision is itself a choice. Though remaining neutral may feel temporarily safe, this balance is fragile and unsustainable. Remove the blindfold, face truth, make necessary choices.',
      reversed: 'Reversed, Two of Swords indicates you\'re finally ready to remove the blindfold and face truth you\'ve been avoiding. Decision paralysis is lifting, or you realize you can\'t delay any longer. This can also indicate information overload causing more confusion, or over-analysis preventing action. Now requires finding balance between gathering information and making decisions: not all problems have perfect answers. Trust your intuition, accept uncertainty. Sometimes action matters more than perfection; bravely take the first step.',
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
      upright: '宝剑三展现了一颗被三把宝剑穿透的红心，背景是阴云密布的暴风雨天空。这张牌象征着深刻的心碎、情感的痛苦和失望，代表你正在经历情感或心智层面的伤害。雨云象征着悲伤的释放，宝剑代表带来痛苦的言语或真相。这是一张关于痛苦和悲伤的牌，提醒你允许自己感受伤痛是疗愈的第一步。虽然这段经历充满痛苦，但它也教会我们深刻的真理。不要压抑你的感受，让眼泪流淌，让心灵释放。在经历黑夜后，黎明终将到来。',
      reversed: '逆位的宝剑三带来疗愈的曙光：你正在从心碎中恢复，学习宽恕和放下。最剧烈的痛苦已经过去，现在是时候温柔地照顾受伤的心灵。这也可能表示你在压抑痛苦而非处理它，或是持续沉溺于悲伤无法前进。现在需要在感受和疗愈之间找到平衡：承认痛苦，但不要让它定义你。从经验中学习，但不要让过去的伤害阻止你再次敞开心扉。疗愈需要时间，给自己足够的耐心和慈悲。',
    },
    descriptionEn: {
      upright: 'Three of Swords shows a red heart pierced by three swords, with stormy clouds in the background. This card symbolizes profound heartbreak, emotional pain, and disappointment, representing you\'re experiencing harm on emotional or mental levels. Rain clouds symbolize grief\'s release, while swords represent painful words or truths. This is a card about pain and sorrow, reminding you that allowing yourself to feel hurt is the first step in healing. Though this experience is painful, it also teaches profound truths. Don\'t suppress your feelings; let tears flow, let the heart release. After experiencing night, dawn will eventually come.',
      reversed: 'Reversed, Three of Swords brings the dawn of healing: you\'re recovering from heartbreak, learning forgiveness and letting go. The most intense pain has passed; now is the time to gently care for your wounded heart. This can also indicate you\'re suppressing pain rather than processing it, or continuing to wallow in grief unable to move forward. Now requires finding balance between feeling and healing: acknowledge pain, but don\'t let it define you. Learn from experience, but don\'t let past hurts prevent you from opening your heart again. Healing takes time; give yourself enough patience and compassion.',
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
      upright: '宝剑四描绘了一个人躺在石棺上休息，双手合十呈祈祷姿势，头下三把宝剑悬挂在墙上，第四把宝剑平放在身侧。这张牌象征着必要的休息、静修和内在的准备，代表你需要从生活的战斗中退出暂时修复。彩色玻璃窗暗示着精神的庇护，祈祷的姿态代表冥想和内省。这是一张关于恢复和准备的牌，提醒你休息不是懒惰而是策略。在重新投入战斗之前，你需要时间疗愈伤口、整理思绪。给自己许可去休息，这是为了更好地前进。',
      reversed: '逆位的宝剑四提示你可能已经休息过度导致停滞，或是过于焦虑无法真正放松。你可能抗拒必要的休息，强迫自己继续前进而导致精疲力竭。这也可能表示你正在从休息中恢复，准备重新投入生活。现在需要评估你的状态：是需要继续休息还是该重新行动？真正的休息是积极的恢复，而非消极的逃避。倾听你的身体和心灵，给自己真正需要的东西。',
    },
    descriptionEn: {
      upright: 'Four of Swords depicts a person lying in rest on a stone sarcophagus, hands clasped in prayer position, with three swords hanging on the wall above and a fourth sword laid flat alongside. This card symbolizes necessary rest, retreat, and inner preparation, representing your need to withdraw from life\'s battles temporarily for repair. Stained glass windows suggest spiritual sanctuary, while the prayer posture represents meditation and introspection. This is a card about recovery and preparation, reminding you that rest isn\'t laziness but strategy. Before re-engaging in battle, you need time to heal wounds and organize thoughts. Give yourself permission to rest; it\'s for better forward progress.',
      reversed: 'Reversed, Four of Swords suggests you may have rested excessively leading to stagnation, or be too anxious to truly relax. You might resist necessary rest, forcing yourself to continue forward resulting in exhaustion. This can also indicate you\'re recovering from rest, preparing to re-engage with life. Now requires assessing your state: do you need continued rest or time to act again? True rest is active recovery, not passive escape. Listen to your body and mind, give yourself what you truly need.',
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
      upright: '宝剑五展现了一个得意的人物收集着三把宝剑，而两个失败者垂头丧气地离开。这张牌象征着冲突、不光彩的胜利和自私的行为，代表以牺牲他人为代价赢得胜利。天空阴沉暗示着内疚和不安，胜利者的笑容充满傲慢。这是一张关于代价和道德的牌，提醒你并非所有的胜利都值得庆祝。如果胜利是通过欺骗、背叛或残酷手段获得的，它将是空洞和短暂的。反思你的行为：你是在捍卫正义还是仅仅为了证明自己是对的？有时候放下争斗比赢得战斗需要更大的勇气。',
      reversed: '逆位的宝剑五带来和解的可能：你正在学习从失败中成长，或是准备放下过去的冲突。你可能意识到胜利的代价过高，现在寻求和平和理解。这也可能表示你持续沉溺于过去的失败，或是拒绝承认自己的错误。现在需要在自尊和成长之间做出选择：承认错误不是软弱而是成熟。学会原谅自己和他人，从冲突中汲取智慧而非怨恨。真正的胜利是成为更好的自己，而非击败他人。',
    },
    descriptionEn: {
      upright: 'Five of Swords shows a smug figure collecting three swords while two defeated figures walk away dejected. This card symbolizes conflict, dishonorable victory, and selfish behavior, representing winning at others\' expense. The overcast sky suggests guilt and unease, the victor\'s smile full of arrogance. This is a card about cost and morality, reminding you not all victories are worth celebrating. If victory is achieved through deception, betrayal, or cruelty, it will be hollow and fleeting. Reflect on your actions: are you defending justice or merely proving yourself right? Sometimes releasing the fight requires greater courage than winning the battle.',
      reversed: 'Reversed, Five of Swords brings the possibility of reconciliation: you\'re learning to grow from defeat, or preparing to release past conflicts. You might realize victory\'s cost is too high, now seeking peace and understanding. This can also indicate continuing to wallow in past defeats, or refusing to admit your mistakes. Now requires choosing between ego and growth: admitting mistakes isn\'t weakness but maturity. Learn to forgive yourself and others, extract wisdom not resentment from conflict. True victory is becoming a better self, not defeating others.',
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
      upright: '宝剑六描绘了一艘船载着一位披着斗篷的人和一个孩子，从波涛汹涌的水域驶向平静的远方。这张牌象征着过渡、离开和向更好状态前进，代表你正在从困境中抽离，寻找安宁。船夫象征着引导和支持，六把宝剑插在船上代表着你带走的经验教训。这是一张关于转变和恢复的牌，提醒你有时候离开是最明智的选择。虽然前路未知，但留在原地只会继续受苦。相信这个转变将带你到更平静的水域，疗愈正在旅程中发生。',
      reversed: '逆位的宝剑六提示你可能抗拒必要的改变，因为害怕未知而拒绝离开痛苦的环境。你可能感觉被困住无法前进，或是过渡被推迟。这也可能表示你试图逃避问题而非真正解决它们，或是带着太多过去的包袱无法轻装前行。现在需要诚实地评估：是什么阻止了你前进？真正的疗愈需要你勇敢地踏上旅程。放下那些不再服务于你的东西，相信前方有更好的未来在等待。',
    },
    descriptionEn: {
      upright: 'Six of Swords depicts a boat carrying a cloaked figure and child, sailing from turbulent waters toward calm distance. This card symbolizes transition, leaving, and moving toward better conditions, representing you\'re withdrawing from difficulty, seeking peace. The ferryman symbolizes guidance and support, while six swords stuck in the boat represent lessons carried with you. This is a card about transformation and recovery, reminding you sometimes leaving is the wisest choice. Though the path ahead is unknown, staying put only continues suffering. Trust this transition will take you to calmer waters; healing happens during the journey.',
      reversed: 'Reversed, Six of Swords suggests you may resist necessary change, refusing to leave painful environments due to fear of the unknown. You might feel trapped unable to move forward, or the transition is delayed. This can also indicate trying to escape problems rather than truly solving them, or carrying too much past baggage to travel light. Now requires honest assessment: what prevents you from moving forward? True healing requires you to bravely embark on the journey. Release what no longer serves you, trust a better future awaits ahead.',
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
      upright: '宝剑七展现了一个人偷偷摸摸地拿走五把宝剑，留下两把在营地，背景是远处的帐篷。这张牌象征着策略、欺骗和狡猾的行为，代表你可能在用不太光明正大的方式达成目标。他蹑手蹑脚的姿态暗示着秘密行动，但也可能表示机智地避开冲突。这是一张关于手段和动机的牌，提醒你审视自己的方法是否诚实。有时候策略是必要的，但如果涉及欺骗和背叛，最终会付出代价。问问自己：我是在聪明地解决问题，还是在逃避责任？',
      reversed: '逆位的宝剑七提示秘密即将被揭露，或是你的良心驱使你坦诚。你可能意识到欺骗带来的内疚比暂时的好处更沉重，现在考虑诚实面对。这也可能表示你被发现了，或是有人在欺骗你。现在需要重新评估你的策略：诚实虽然可能带来短期的不适，但长期来看是更健康的选择。承认错误，纠正行为，重建信任。真正的智慧在于用正直的方式达成目标。',
    },
    descriptionEn: {
      upright: 'Seven of Swords shows a person sneaking away with five swords, leaving two behind at camp, with distant tents in the background. This card symbolizes strategy, deception, and cunning behavior, representing you may be achieving goals through less-than-honorable means. The tiptoeing posture suggests secret action, but can also indicate cleverly avoiding conflict. This is a card about methods and motives, reminding you to examine whether your approach is honest. Sometimes strategy is necessary, but if it involves deception and betrayal, there will eventually be a price. Ask yourself: am I cleverly solving problems or avoiding responsibility?',
      reversed: 'Reversed, Seven of Swords suggests secrets are about to be revealed, or your conscience is driving you toward honesty. You might realize guilt from deception weighs heavier than temporary benefits, now considering facing truth. This can also indicate you\'ve been discovered, or someone is deceiving you. Now requires reassessing your strategy: honesty, though potentially bringing short-term discomfort, is the healthier long-term choice. Admit mistakes, correct behavior, rebuild trust. True wisdom lies in achieving goals through integrity.',
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
      upright: '宝剑八描绘了一位被蒙眼、被绑缚的女性，周围插着八把宝剑形成围栏，但仔细观察会发现她可以轻易走出去。这张牌象征着自我设限、受困感和无助，代表你感觉被困住但限制主要来自你的思维。蒙眼布代表拒绝看清真相，绳索象征自我施加的束缚。这是一张关于恐惧和视角的牌，提醒你大多数监狱是我们自己建造的。你拥有的力量和选择比你想象的多，只要你愿意摘下蒙眼布，勇敢地迈出第一步。',
      reversed: '逆位的宝剑八带来解放：你正在摘下蒙眼布，看清困境的真相并找到出路。限制正在瓦解，新的视角让你意识到自己一直拥有自由。这也可能表示你终于准备好寻求帮助，或是开始质疑那些限制你的信念。现在是时候采取行动解放自己：挑战那些自我设限的想法，冒险尝试新的可能性。记住，勇气不是没有恐惧，而是即使恐惧也要前进。你比你想象的更强大。',
    },
    descriptionEn: {
      upright: 'Eight of Swords depicts a blindfolded, bound woman surrounded by eight swords forming a fence, but close observation reveals she could easily walk away. This card symbolizes self-imposed limitations, feeling trapped, and helplessness, representing feeling stuck but restrictions mainly come from your mindset. The blindfold represents refusing to see truth clearly, ropes symbolize self-imposed bindings. This is a card about fear and perspective, reminding you most prisons are self-built. You have more power and choices than you imagine, if only you\'re willing to remove the blindfold and bravely take the first step.',
      reversed: 'Reversed, Eight of Swords brings liberation: you\'re removing the blindfold, seeing the truth of your predicament and finding a way out. Restrictions are crumbling, new perspectives make you realize you\'ve always had freedom. This can also indicate you\'re finally ready to seek help, or beginning to question beliefs that limit you. Now is the time to take action to free yourself: challenge self-limiting thoughts, risk trying new possibilities. Remember, courage isn\'t absence of fear, but moving forward despite it. You\'re stronger than you imagine.',
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
      upright: '宝剑九描绘了一个人在深夜惊醒，双手捂脸坐在床上，九把宝剑悬浮在背景中。这张牌象征着焦虑、恐惧和心理折磨，代表你被担忧和负面思维所困扰。被子上的星座图案暗示着宇宙的秩序，但此刻被恐惧遮蔽。这是一张关于内心煎熬的牌，提醒你大多数恐惧存在于想象中而非现实。你可能将问题放大，或是过度担心尚未发生的事情。虽然痛苦是真实的，但往往比实际情况更严重。寻求支持，用理性审视恐惧，记住黎明总会到来。',
      reversed: '逆位的宝剑九表示焦虑开始缓解，你正在学习应对恐惧和释放担忧。噩梦减少，或是你找到了处理压力的健康方式。这也可能表示你终于准备好寻求专业帮助，或是与他人分享你的痛苦。现在是疗愈的开始：承认焦虑，但不要让它定义你。培养平静的练习，如冥想或日记。记住，寻求帮助是勇气的表现，不是软弱。你不必独自承受这些重担，疗愈是可能的。',
    },
    descriptionEn: {
      upright: 'Nine of Swords depicts a person waking in the night, sitting up in bed with hands covering face, nine swords hovering in the background. This card symbolizes anxiety, fear, and mental torment, representing being plagued by worries and negative thinking. Zodiac patterns on the quilt suggest universal order, but are currently obscured by fear. This is a card about inner anguish, reminding you most fears exist in imagination not reality. You may be magnifying problems or excessively worrying about things yet to happen. Though the pain is real, it\'s often worse than the actual situation. Seek support, examine fears rationally, remember dawn always comes.',
      reversed: 'Reversed, Nine of Swords indicates anxiety beginning to ease; you\'re learning to cope with fears and release worries. Nightmares are decreasing, or you\'ve found healthy ways to handle stress. This can also indicate you\'re finally ready to seek professional help, or share your pain with others. Now is the beginning of healing: acknowledge anxiety, but don\'t let it define you. Cultivate calming practices like meditation or journaling. Remember, seeking help is a sign of courage, not weakness. You don\'t have to bear these burdens alone; healing is possible.',
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
      upright: '宝剑十描绘了一个人背部插着十把剑倒在地上，象征着彻底的失败和痛苦的结束。虽然这是一张令人不安的牌，但背景中的黎明曙光提示着黑暗即将过去，新的一天即将来临。宝剑十代表了一个循环的彻底终结，虽然过程痛苦，但也意味着最坏的时刻已经过去。这张牌提醒我们，有时必须经历彻底的崩溃才能重建，旧的必须完全消亡，新的才能诞生。接受这个结束，因为它为转变和重生创造了空间。',
      reversed: '逆位的宝剑十表示你正在从危机中恢复，最糟糕的时期已经过去。你可能正在学习从失败中吸取教训，开始重建你的生活。逆位也可能表示你拒绝接受某个必要的结束，固执地抓住已经无法挽回的事物。现在需要诚实地面对现实：这个循环真的结束了。放手并不是失败，而是为新开始腾出空间的智慧之举。痛苦正在减轻，治愈已经开始。',
    },
    descriptionEn: {
      upright: 'Ten of Swords depicts a figure lying face down with ten swords in their back, symbolizing complete defeat and painful endings. Though this is a disturbing card, the dawn breaking in the background suggests darkness is passing and a new day is coming. Ten of Swords represents the absolute end of a cycle - though the process is painful, it also means the worst is over. This card reminds us that sometimes we must experience complete collapse to rebuild; the old must die completely for the new to be born. Accept this ending, for it creates space for transformation and rebirth.',
      reversed: 'Reversed, Ten of Swords indicates you\'re recovering from crisis and the worst period has passed. You may be learning lessons from failure and beginning to rebuild your life. The reversal can also suggest refusing to accept a necessary ending, stubbornly clinging to what cannot be salvaged. Now requires honestly facing reality: this cycle truly is over. Letting go is not failure, but the wisdom of making space for new beginnings. The pain is lessening, healing has begun.',
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
      upright: '宝剑侍从站在多风的高地上，警觉地握着剑，象征着充满好奇心和求知欲的心智。云层翻涌代表着思想的活跃和不断变化，侍从年轻的姿态象征着初学者的热情和开放的态度。这张牌代表了新的想法、学习的开始，以及对真相的追求。宝剑侍从鼓励你保持警觉，收集信息，运用你的智慧去探索和质疑。他提醒我们，真正的智慧始于承认自己的无知，并保持对新知识的渴望。',
      reversed: '逆位的宝剑侍从可能表示你的话语变得刻薄或不成熟，或是参与了八卦和闲言碎语。你可能过于挑剔，用言辞伤害他人，或是传播未经证实的信息。逆位也可能表示缺乏深思熟虑就急于表达观点，或是过度怀疑一切而失去了建设性。现在需要在好奇心和责任感之间找到平衡，确保你的话语是真实、善良且有必要的。用你的智慧去建设而非破坏。',
    },
    descriptionEn: {
      upright: 'Page of Swords stands on windy heights, alertly gripping his sword, symbolizing a mind full of curiosity and thirst for knowledge. Churning clouds represent active, ever-changing thoughts, while the page\'s youthful stance embodies beginner\'s enthusiasm and open attitude. This card represents new ideas, the beginning of learning, and pursuit of truth. Page of Swords encourages you to stay alert, gather information, and use your intelligence to explore and question. He reminds us that true wisdom begins with admitting ignorance and maintaining desire for new knowledge.',
      reversed: 'Reversed, Page of Swords may indicate your words becoming harsh or immature, or engaging in gossip and idle talk. You might be overly critical, using words to hurt others, or spreading unverified information. The reversal can also suggest expressing opinions without thorough consideration, or excessive skepticism that loses constructiveness. Now requires finding balance between curiosity and responsibility, ensuring your words are true, kind, and necessary. Use your intelligence to build rather than destroy.',
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
      upright: '宝剑骑士策马疾驰，剑指前方，象征着果断、迅速的行动和不可阻挡的决心。狂风吹动他的披风，代表着思维的敏捷和言辞的锋利。这张牌代表了直接进攻的策略，不顾一切地追求目标的勇气。宝剑骑士提醒你，有时候需要快速果断地行动，不被犹豫和恐惧所困扰。然而，他也警示着过度冲动的危险——在速度和智慧之间需要找到平衡。真正的勇气不仅在于行动的速度，更在于方向的正确。',
      reversed: '逆位的宝剑骑士警告你可能过于鲁莽，在没有充分计划的情况下就冲动行事。你可能用言语伤害他人，或是在冲突中表现得过于激进和不顾后果。逆位也可能表示延迟、停滞，或是失去了前进的动力。现在需要重新评估你的策略：你是在勇敢前进还是盲目冲撞?放慢脚步，思考你的行动将带来什么后果。智慧的行动需要既有勇气又有策略。',
    },
    descriptionEn: {
      upright: 'Knight of Swords charges forward on horseback, sword pointed ahead, symbolizing decisive, swift action and unstoppable determination. Wild winds blow his cape, representing agile thinking and sharp words. This card represents direct offensive strategy and courage to pursue goals at all costs. Knight of Swords reminds you that sometimes rapid, decisive action is needed without being hindered by hesitation and fear. However, he also warns of excessive impulsiveness - balance must be found between speed and wisdom. True courage lies not only in speed of action, but in correctness of direction.',
      reversed: 'Reversed, Knight of Swords warns you may be too reckless, acting impulsively without sufficient planning. You might be hurting others with words, or behaving too aggressively and recklessly in conflicts. The reversal can also indicate delays, stagnation, or lost forward momentum. Now requires reassessing your strategy: are you bravely advancing or blindly charging? Slow down and consider the consequences of your actions. Wise action requires both courage and strategy.',
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
      upright: '宝剑王后端坐王座，一手高举宝剑，一手向前伸展，象征着清晰的判断力和公正的态度。她的眼神锐利而洞察一切，云朵环绕的背景代表着理性思维的高度。这张牌代表了独立的精神，不被情感蒙蔽的客观性，以及说出真相的勇气。宝剑王后教导我们，真正的同理心并非盲目的情感认同，而是在理解的基础上给出诚实的建议。她提醒我们，有时候最大的仁慈就是说出别人不愿听但需要听的真相。',
      reversed: '逆位的宝剑王后可能表示你变得过于冷酷无情，用理性作为武器来伤害他人。你可能过度批判，缺乏同理心，或是将情感完全隔离以至于失去了人性的温暖。逆位也可能表示怨恨和苦涩，过去的伤痛让你筑起了高墙。现在需要在真相和仁慈之间找到平衡，明白智慧不仅包括清晰的思考，也包括理解他人的处境。真正的力量在于既能独立又能连接。',
    },
    descriptionEn: {
      upright: 'Queen of Swords sits enthroned, one hand raising her sword high, the other extending forward, symbolizing clear judgment and fair attitude. Her gaze is sharp and all-perceiving, with cloud-filled background representing the heights of rational thinking. This card represents independent spirit, objectivity unclouded by emotion, and courage to speak truth. Queen of Swords teaches us that true empathy is not blind emotional identification, but honest advice based on understanding. She reminds us that sometimes the greatest kindness is speaking truths others don\'t want to hear but need to.',
      reversed: 'Reversed, Queen of Swords may indicate you\'ve become too cold and ruthless, using rationality as a weapon to hurt others. You might be overly critical, lacking empathy, or isolating emotions so completely that you lose human warmth. The reversal can also suggest resentment and bitterness, with past hurts causing you to build high walls. Now requires finding balance between truth and kindness, understanding that wisdom includes not only clear thinking but also understanding others\' situations. True strength lies in being both independent and connected.',
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
      upright: '宝剑国王端坐王座，右手高举宝剑，左手镇定地放在膝上，象征着智慧、公正和不偏不倚的判断力。他的王座装饰着蝴蝶和新月，代表着思想的转化和直觉的平衡。背景中云层翻滚但天空清澈，象征着即使在混乱中也能保持清晰的头脑。宝剑国王代表了道德的权威，以真理和正义为准则的领导力，以及冷静客观地分析复杂情况的能力。他教导我们，真正的权威来自于智慧和公正，而非强权和控制。',
      reversed: '逆位的宝剑国王警告权力的滥用，或是用逻辑和规则来操控他人。你可能变得过于严苛和教条，缺乏灵活性和同理心。逆位也可能表示不诚实，利用智慧来欺骗而非服务。你可能过度批判，用理性作为武器来压制他人，或是固执己见拒绝倾听不同的观点。现在需要重新检视你的价值观：你是在追求真理还是仅仅想要证明自己正确?真正的领导力包括谦逊、同理心和服务他人的愿望。',
    },
    descriptionEn: {
      upright: 'King of Swords sits enthroned, right hand raising his sword high, left hand resting calmly on his knee, symbolizing wisdom, justice, and impartial judgment. His throne is decorated with butterflies and crescents, representing transformation of thought and balance of intuition. Background clouds churn but the sky is clear, symbolizing maintaining a clear head even in chaos. King of Swords represents moral authority, leadership guided by truth and justice, and ability to analyze complex situations with calm objectivity. He teaches that true authority comes from wisdom and fairness, not force and control.',
      reversed: 'Reversed, King of Swords warns of power abuse, or using logic and rules to manipulate others. You may become too harsh and dogmatic, lacking flexibility and empathy. The reversal can also indicate dishonesty, using intelligence to deceive rather than serve. You might be overly critical, wielding rationality as a weapon to suppress others, or stubbornly refusing to hear different viewpoints. Now requires re-examining your values: are you pursuing truth or merely trying to prove yourself right? True leadership includes humility, empathy, and desire to serve others.',
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
      upright: '星币王牌展示了一只从云端伸出的手，握着一枚金色的星币，下方是郁郁葱葱的花园，象征着物质世界的新机遇和潜在的丰盛。这张牌代表了实际的开始，可能是新工作、商业机会、投资或任何能带来物质收益的事物。花园中的拱门暗示着通往繁荣的大门已经敞开，只要你愿意踏入并耕耘。星币王牌提醒我们，宇宙正在提供实现梦想所需的资源，现在是将想法付诸实践、在物质世界播下种子的时候。',
      reversed: '逆位的星币王牌可能表示错失了一个财务或物质上的机会，或是你对机遇视而不见。可能存在对金钱不健康的态度，如过度贪婪或完全忽视物质需求。逆位也可能表示计划缺乏实际基础，或是资源管理不善导致浪费。现在需要重新评估你的物质目标和价值观，确保你的行动是实际可行的。记住，丰盛需要既有愿景也有实际的行动和明智的管理。',
    },
    descriptionEn: {
      upright: 'Ace of Pentacles shows a hand emerging from clouds, holding a golden pentacle, with a lush garden below, symbolizing new opportunities and potential abundance in the material world. This card represents practical beginnings - possibly a new job, business opportunity, investment, or anything bringing material gain. The archway in the garden suggests the door to prosperity stands open, if you\'re willing to enter and cultivate. Ace of Pentacles reminds us the universe is providing resources needed to realize dreams; now is the time to put ideas into practice and plant seeds in the material world.',
      reversed: 'Reversed, Ace of Pentacles may indicate missing a financial or material opportunity, or being blind to opportunities before you. There may be an unhealthy attitude toward money, such as excessive greed or completely ignoring material needs. The reversal can also suggest plans lacking practical foundation, or poor resource management leading to waste. Now requires reassessing your material goals and values, ensuring your actions are practically viable. Remember, abundance requires both vision and practical action with wise management.',
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
      upright: '星币二描绘了一个人在跳舞般地杂耍两枚星币，背景中波涛汹涌的大海和远处的船只象征着生活的起伏和不断变化。无限符号连接着两枚星币，代表着能量的流动和持续的适应。这张牌代表了在多重责任之间保持平衡，灵活应对生活的变化，以及管理时间和资源的能力。星币二教导我们，生活总是充满变数，关键在于保持轻松和灵活的态度。平衡不是静止的状态，而是持续的舞蹈和调整。',
      reversed: '逆位的星币二表示你正在失去平衡，可能承担了太多责任而无法很好地处理。你可能感到不堪重负，在各个领域都做得不够好，或是拒绝承认自己已经过度承诺。逆位也可能表示缺乏灵活性，固守某种安排即使它已经不再有效。现在需要诚实地评估你的优先级，学会说不，并放下一些不必要的负担。记住，有效的平衡有时意味着减少而非增加。',
    },
    descriptionEn: {
      upright: 'Two of Pentacles depicts a person juggling two pentacles in a dance-like motion, with churning seas and distant ships in the background symbolizing life\'s ups and downs and constant change. The infinity symbol connecting the pentacles represents energy flow and continuous adaptation. This card represents balancing multiple responsibilities, flexibly adapting to life\'s changes, and managing time and resources. Two of Pentacles teaches that life is always full of variables; the key is maintaining a relaxed and flexible attitude. Balance is not a static state, but an ongoing dance of adjustment.',
      reversed: 'Reversed, Two of Pentacles indicates you\'re losing balance, possibly taking on too many responsibilities to handle well. You may feel overwhelmed, performing poorly across all areas, or refusing to admit you\'ve overcommitted. The reversal can also suggest lack of flexibility, clinging to arrangements even when they no longer work. Now requires honestly assessing your priorities, learning to say no, and releasing some unnecessary burdens. Remember, effective balance sometimes means reducing rather than adding.',
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
      upright: '星币三描绘了一位工匠在教堂内工作，与两位设计师或监督者讨论建筑计划，象征着团队协作、技能分享和共同创造。拱形天花板上雕刻的星币代表着通过集体努力实现的成就。这张牌代表了专业技能的发展，团队成员各尽其能，以及通过合作达到更高标准的可能性。星币三提醒我们，最伟大的成就往往来自于不同技能和视角的融合。当每个人都贡献自己的专长时，整体会大于部分之和。',
      reversed: '逆位的星币三可能表示团队合作出现问题，缺乏协调或沟通不畅。可能存在技能不匹配，每个人都在各行其是而没有形成合力。逆位也可能表示对质量标准的妥协，或是不愿意学习和接受他人的建议。现在需要重新审视合作的方式，明确角色和期望，并培养更开放的沟通。记住，真正的合作需要谦逊、尊重和共同的目标。',
    },
    descriptionEn: {
      upright: 'Three of Pentacles depicts a craftsman working in a church, discussing architectural plans with two designers or supervisors, symbolizing team collaboration, skill sharing, and co-creation. The pentacles carved in the arched ceiling represent achievements realized through collective effort. This card represents professional skill development, team members each contributing their abilities, and the possibility of reaching higher standards through cooperation. Three of Pentacles reminds us that the greatest achievements often come from fusing different skills and perspectives. When everyone contributes their expertise, the whole becomes greater than the sum of its parts.',
      reversed: 'Reversed, Three of Pentacles may indicate problems with teamwork, lack of coordination, or poor communication. There may be skill mismatches, with everyone working independently without forming synergy. The reversal can also suggest compromising quality standards, or unwillingness to learn and accept others\' advice. Now requires re-examining collaboration methods, clarifying roles and expectations, and cultivating more open communication. Remember, true cooperation requires humility, respect, and shared goals.',
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
      upright: '星币四描绘一个人紧紧抱着一枚星币，脚下踩着两枚，头顶还有一枚。这个姿势象征着对物质的极度控制和保护欲。城市在背景中，提醒着外部世界的存在，但这个人选择退缩和防御。这张牌代表财务安全和稳定的渴望，但也警告过度控制可能导致停滞不前。当你紧握不放时,能量无法流动,反而阻碍了更大的丰盛。这张牌教导我们,真正的安全感来自内在,而非外在的积累。保护资源是明智的,但不应让恐惧主导你的生活。',
      reversed: '逆位的星币四提示你可能过度执着于物质安全,让恐惧控制了你的决定。这种紧握可能表现为吝啬、控制欲,或是对失去的过度焦虑。逆位也可能表示你正在学习放手,开始理解流动比囤积更健康。这也可能暗示财务上的不安全感,或是意识到物质财富并非幸福的唯一来源。现在是时候审视你与金钱和安全的关系:你是在保护自己,还是在囚禁自己?学会在谨慎和开放之间找到平衡,信任宇宙的丰盛。',
    },
    descriptionEn: {
      upright: 'Four of Pentacles depicts a figure tightly clutching one pentacle, with two under their feet and one crowning their head. This posture symbolizes extreme control and possessiveness over material possessions. The city looms in the background, reminding of the outer world\'s existence, yet this person chooses withdrawal and defense. This card represents the desire for financial security and stability, but warns that excessive control can lead to stagnation. When you grip tightly, energy cannot flow, actually blocking greater abundance. This card teaches that true security comes from within, not from external accumulation. Protecting resources is wise, but fear should not dominate your life.',
      reversed: 'Reversed, Four of Pentacles suggests you may be overly attached to material security, letting fear control your decisions. This tight grip may manifest as stinginess, control issues, or excessive anxiety about loss. The reversal can also indicate you\'re learning to let go, beginning to understand that flow is healthier than hoarding. This may also hint at financial insecurity, or awakening to the reality that material wealth isn\'t the sole source of happiness. Now is the time to examine your relationship with money and security: are you protecting yourself, or imprisoning yourself? Learn to balance caution with openness, trusting in the universe\'s abundance.',
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
      upright: '星币五描绘两个衣衫褴褛的人在雪中艰难前行，背后是一座华丽的教堂，彩色玻璃窗闪耀着五枚星币。他们专注于自己的困境，却没有注意到近在咫尺的庇护所。这张牌象征物质或精神上的贫困、孤立和困难时期。然而，它也包含着重要的讯息：帮助往往就在身边，只是我们因为羞耻、骄傲或绝望而看不见。这张牌提醒我们，在最黑暗的时刻，光明依然存在。困难是暂时的，而寻求帮助是勇气的表现，而非软弱。社群和支持系统就在那里，只需你转身求助。',
      reversed: '逆位的星币五表示你正在从困难中走出，开始看到希望的曙光。这可能意味着财务状况的改善，或是终于接受了他人的帮助和支持。逆位也可能表示你开始认识到自己并非真正孤单，资源比你想象的更丰富。这也可能暗示你正在从受害者心态中解脱，重新掌握自己的力量。然而，逆位也可能警告你拒绝接受帮助，让骄傲阻碍了康复。现在是时候放下羞耻感，敞开心扉接受支持。记住，每个人都会经历困难时期，寻求帮助是智慧和力量的体现。',
    },
    descriptionEn: {
      upright: 'Five of Pentacles depicts two ragged figures struggling through snow, behind them a magnificent church with stained glass windows glowing with five pentacles. They focus on their hardship, not noticing the sanctuary so close at hand. This card symbolizes material or spiritual poverty, isolation, and difficult times. However, it contains an important message: help is often nearby, we just don\'t see it due to shame, pride, or despair. This card reminds us that even in the darkest moments, light still exists. Hardship is temporary, and seeking help is a sign of courage, not weakness. Community and support systems are there, you need only turn and ask.',
      reversed: 'Reversed, Five of Pentacles indicates you\'re emerging from hardship, beginning to see the dawn of hope. This may mean financial improvement, or finally accepting others\' help and support. The reversal can also suggest you\'re recognizing you\'re not truly alone, with more resources than you imagined. This may also indicate you\'re breaking free from victim mentality, reclaiming your power. However, the reversal can also warn of refusing help, letting pride obstruct recovery. Now is the time to release shame and open your heart to support. Remember, everyone faces difficult times, and seeking help demonstrates wisdom and strength.',
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
      upright: '星币六描绘一位富商手持天平，向两位乞丐施舍金币。天平象征公平和平衡，而给予的行为代表慷慨与慈善。这张牌提醒我们，财富的流动是健康的，给予和接受都是必要的。真正的慷慨不仅仅是物质的分享，更是认识到我们都是相互连接的。当你处于给予的位置时，要怀着谦卑和尊重；当你处于接受的位置时，要怀着感恩和尊严。这张牌教导我们，平衡的交换创造和谐，无论你是给予者还是接受者，都是能量循环的重要一环。慷慨的心态会带来更多的丰盛。',
      reversed: '逆位的星币六警告不平衡的权力动态或不公平的交换。这可能表示你在关系中总是给予者，却得不到相应的回报，或是接受帮助时附带了太多条件和控制。逆位也可能表示自私、吝啬，或是利用他人的慷慨。这也可能暗示你因为骄傲而拒绝接受帮助，或是给予时带有隐藏的动机。现在需要审视你的给予和接受模式：它们是否健康和平衡？真正的慷慨不应带有控制或期待，真正的接受也不应带有羞耻。重新建立平等和尊重的交换关系。',
    },
    descriptionEn: {
      upright: 'Six of Pentacles depicts a wealthy merchant holding scales, distributing coins to two beggars. The scales symbolize fairness and balance, while the act of giving represents generosity and charity. This card reminds us that the flow of wealth is healthy, both giving and receiving are necessary. True generosity is not merely material sharing, but recognizing our interconnection. When in the position of giving, approach with humility and respect; when receiving, approach with gratitude and dignity. This card teaches that balanced exchange creates harmony, whether you\'re the giver or receiver, you\'re an essential part of energy\'s circulation. A generous mindset brings greater abundance.',
      reversed: 'Reversed, Six of Pentacles warns of imbalanced power dynamics or unfair exchanges. This may indicate you\'re always the giver in relationships without receiving appropriate return, or accepting help comes with too many strings and control. The reversal can also suggest selfishness, stinginess, or exploiting others\' generosity. This may also hint at refusing help due to pride, or giving with hidden motives. Now requires examining your patterns of giving and receiving: are they healthy and balanced? True generosity should carry no control or expectations, true receiving should carry no shame. Re-establish exchanges based on equality and respect.',
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
      upright: '星币七描绘一位农夫靠在锄头上，凝视着藤蔓上逐渐成熟的七枚星币。他已经辛勤劳作，现在是暂停和评估的时刻。这张牌象征长期投资、耐心等待和反思进展。葡萄藤需要时间生长，不能催促，就像生活中许多有价值的事物一样。这张牌提醒我们，成功不是一蹴而就的，而是持续努力的结果。现在是评估你的方向是否正确的时候：你的投资是否明智？你的努力是否值得？这张牌鼓励你保持耐心，同时也要有智慧地调整策略，确保你在正确的道路上前进。',
      reversed: '逆位的星币七表示你可能对缓慢的进展感到沮丧和不耐烦。你可能质疑自己的努力是否值得，或是想要放弃长期目标而选择短期满足。逆位也可能表示你投资的方向可能需要调整，或是你过度劳累却看不到成果。这也可能暗示拖延症，害怕面对现实的进展评估。现在需要诚实地审视：你的策略是否有效？是需要更多耐心，还是需要改变方向？记住，有时候放慢脚步和重新规划比盲目坚持更有智慧。找到耐心和行动之间的平衡。',
    },
    descriptionEn: {
      upright: 'Seven of Pentacles depicts a farmer leaning on his hoe, gazing at seven pentacles gradually ripening on vines. He has worked diligently, now is the moment to pause and assess. This card symbolizes long-term investment, patient waiting, and reflecting on progress. Grapevines need time to grow and cannot be rushed, like many valuable things in life. This card reminds us that success isn\'t instantaneous, but the result of sustained effort. Now is the time to evaluate if your direction is correct: are your investments wise? Are your efforts worthwhile? This card encourages patience while also wisely adjusting strategies to ensure you\'re moving on the right path.',
      reversed: 'Reversed, Seven of Pentacles indicates you may feel frustrated and impatient with slow progress. You might question whether your efforts are worthwhile, or want to abandon long-term goals for short-term satisfaction. The reversal can also suggest your investment direction may need adjustment, or you\'re overworked without seeing results. This may also hint at procrastination, fearing to face realistic progress assessments. Now requires honest examination: is your strategy effective? Do you need more patience, or a change of direction? Remember, sometimes slowing down and replanning is wiser than blind persistence. Find balance between patience and action.',
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
      upright: '星币八描绘一位工匠专注地雕刻星币，周围已经完成的作品整齐排列，展示着他的进步。他全神贯注于当下的工作，体现了对技艺的热情和对卓越的追求。这张牌象征勤奋、专注和通过重复练习达到精通的过程。远处的城市提醒我们，尽管有外界的诱惑，真正的成就来自于专注和坚持。这张牌教导我们，大师不是天生的，而是通过千锤百炼造就的。享受学习的过程，珍惜每一次进步，将工作本身视为修行。当你全心投入时，工作就变成了艺术。',
      reversed: '逆位的星币八可能表示你失去了对工作的热情，将其视为乏味的苦役而非有意义的追求。这可能表现为完美主义导致的拖延，或是对细节的过度关注而忽略了大局。逆位也可能表示技能发展停滞，缺乏学习的动力，或是走捷径而非踏实努力。这也可能暗示工作与生活失衡，过度劳累导致倦怠。现在需要重新审视你与工作的关系：它是否仍然给你带来满足感？是否需要调整方法或寻找新的灵感？记住，精通需要耐心，但也需要热情。找回你对技艺的初心。',
    },
    descriptionEn: {
      upright: 'Eight of Pentacles depicts a craftsman focused intently on carving pentacles, with completed works neatly arranged around him, showcasing his progress. He is fully absorbed in the present work, embodying passion for craft and pursuit of excellence. This card symbolizes diligence, focus, and the process of achieving mastery through repeated practice. The distant city reminds us that despite external temptations, true achievement comes from focus and persistence. This card teaches that masters are not born but forged through countless refinements. Enjoy the learning process, treasure each improvement, view the work itself as practice. When you commit wholeheartedly, work becomes art.',
      reversed: 'Reversed, Eight of Pentacles may indicate you\'ve lost passion for your work, viewing it as tedious drudgery rather than meaningful pursuit. This can manifest as perfectionism causing procrastination, or excessive focus on details while missing the big picture. The reversal can also suggest stagnant skill development, lack of learning motivation, or taking shortcuts instead of solid effort. This may also hint at work-life imbalance, overwork leading to burnout. Now requires re-examining your relationship with work: does it still bring fulfillment? Do you need to adjust methods or find new inspiration? Remember, mastery requires patience, but also passion. Rediscover your original love for the craft.',
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
      upright: '星币九描绘一位优雅的女士站在繁荣的葡萄园中，手上栖息着一只驯服的猎鹰。九枚星币环绕着她，象征着通过自己的努力获得的丰盛和独立。她的姿态从容自信，展现出自给自足的满足感。葡萄园代表她辛勤培育的成果，猎鹰象征驯服的本能和掌控的力量。这张牌庆祝个人成就、财务独立和自我实现。她提醒我们，真正的财富不仅是物质的丰盛，更是内心的富足和自主的能力。享受你辛勤工作的成果，为自己的成就感到骄傲，同时保持优雅和谦逊。',
      reversed: '逆位的星币九可能表示你为了成功牺牲了太多，物质丰盛却感到空虚和孤独。这可能表现为工作狂倾向，将自我价值完全建立在成就和财富上。逆位也可能表示财务不稳定，或是对独立的过度追求导致孤立。这也可能暗示你难以享受已经拥有的丰盛，总是追求更多而忽略了当下的美好。现在需要重新平衡物质和精神、工作和生活、独立和连接。记住，真正的丰盛包括爱、关系和内心的平静。允许自己既独立又与他人连接，既享受成就也珍惜过程。',
    },
    descriptionEn: {
      upright: 'Nine of Pentacles depicts an elegant lady standing in a prosperous vineyard, with a trained falcon perched on her hand. Nine pentacles surround her, symbolizing abundance and independence achieved through her own efforts. Her posture is composed and confident, displaying the satisfaction of self-sufficiency. The vineyard represents fruits she has diligently cultivated, the falcon symbolizes tamed instincts and controlled power. This card celebrates personal achievement, financial independence, and self-actualization. She reminds us that true wealth is not just material abundance, but inner richness and capacity for autonomy. Enjoy the fruits of your hard work, take pride in your achievements while maintaining grace and humility.',
      reversed: 'Reversed, Nine of Pentacles may indicate you\'ve sacrificed too much for success, experiencing material abundance yet feeling empty and lonely. This can manifest as workaholic tendencies, building self-worth entirely on achievements and wealth. The reversal can also suggest financial instability, or excessive pursuit of independence leading to isolation. This may also hint at difficulty enjoying the abundance you already possess, always chasing more while neglecting present beauty. Now requires rebalancing material and spiritual, work and life, independence and connection. Remember, true abundance includes love, relationships, and inner peace. Allow yourself to be both independent and connected to others, enjoying achievements while treasuring the journey.',
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
      upright: '星币十描绘一个繁荣的家庭场景：三代人聚集在城门下，十枚星币排列成生命之树的图案，象征着代代相传的财富和智慧。老者坐在中央，两只狗围绕着他，代表忠诚和保护。这张牌象征长期的成功、家族遗产、传统和稳定的根基。它不仅代表物质财富的积累，更代表精神财富和价值观的传承。这张牌提醒我们，真正的遗产不只是金钱，还包括智慧、文化和爱的传递。享受稳定和安全，同时也要承担起传承的责任。建立持久的基础，为后代创造丰盛的未来。',
      reversed: '逆位的星币十可能表示家族财富或遗产带来的纷争和压力。这可能表现为继承问题、家庭价值观的冲突，或是传统对个人自由的束缚。逆位也可能表示财务不稳定，长期积累的财富面临风险，或是家庭关系的破裂。这也可能暗示过度依赖家族资源而缺乏个人独立性，或是物质主义导致家庭成员之间的疏离。现在需要重新审视家族和财富的意义：它们是支持还是限制？是连接还是分离？找到传统与创新、依赖与独立、物质与精神之间的平衡。真正的遗产是爱和智慧，而非仅仅是财富。',
    },
    descriptionEn: {
      upright: 'Ten of Pentacles depicts a prosperous family scene: three generations gathered beneath a city gate, ten pentacles arranged in the Tree of Life pattern, symbolizing wealth and wisdom passed through generations. An elder sits centrally, two dogs surrounding him, representing loyalty and protection. This card symbolizes long-term success, family legacy, tradition, and stable foundation. It represents not just material wealth accumulation, but spiritual wealth and values transmission. This card reminds us that true legacy isn\'t just money, but includes wisdom, culture, and love passed down. Enjoy stability and security while also accepting the responsibility of inheritance. Build lasting foundations, creating abundant futures for descendants.',
      reversed: 'Reversed, Ten of Pentacles may indicate disputes and pressure from family wealth or inheritance. This can manifest as inheritance issues, conflicts over family values, or tradition constraining personal freedom. The reversal can also suggest financial instability, accumulated wealth facing risks, or family relationship ruptures. This may also hint at over-reliance on family resources lacking personal independence, or materialism causing alienation among family members. Now requires re-examining the meaning of family and wealth: do they support or restrict? Connect or separate? Find balance between tradition and innovation, dependence and independence, material and spiritual. True legacy is love and wisdom, not merely wealth.',
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
      upright: '星币侍从描绘一个年轻人专注地凝视着手中的星币，仿佛在研究一个珍贵的发现。他站在肥沃的田野上，远处是繁荣的山峦，象征着丰富的可能性和成长的潜力。这张牌代表新的开始、学习的机会、务实的计划和脚踏实地的态度。侍从的专注展现了对知识的渴望和对细节的重视。这张牌鼓励你以初学者的心态探索新的领域，无论是新的技能、学业还是财务项目。保持好奇心和勤奋，将雄心与实际行动相结合。每一次伟大的成就都始于第一步，现在就是迈出那一步的时候。',
      reversed: '逆位的星币侍从可能表示你有很多想法和计划，却迟迟不付诸行动。这可能表现为拖延、缺乏专注，或是计划不切实际、好高骛远。逆位也可能表示学习过程中的挫折，或是对新机会缺乏兴趣和动力。这也可能暗示财务上的不负责任，或是过于关注物质而忽略了精神成长。现在需要审视是什么阻碍了你的进步：是恐惧、懒惰，还是缺乏清晰的方向？将宏大的梦想分解成可行的小步骤，专注于当下可以做的事情。实际行动比完美计划更重要。',
    },
    descriptionEn: {
      upright: 'Page of Pentacles depicts a young person gazing intently at a pentacle in their hands, as if studying a precious discovery. They stand on fertile fields with prosperous mountains in the distance, symbolizing abundant possibilities and growth potential. This card represents new beginnings, learning opportunities, practical plans, and grounded attitude. The Page\'s focus displays thirst for knowledge and attention to detail. This card encourages you to explore new territories with a beginner\'s mind, whether new skills, studies, or financial projects. Maintain curiosity and diligence, combining ambition with practical action. Every great achievement begins with the first step, now is the time to take that step.',
      reversed: 'Reversed, Page of Pentacles may indicate you have many ideas and plans but delay putting them into action. This can manifest as procrastination, lack of focus, or unrealistic plans with lofty ambitions. The reversal can also suggest setbacks in learning processes, or lack of interest and motivation for new opportunities. This may also hint at financial irresponsibility, or over-focusing on material while neglecting spiritual growth. Now requires examining what\'s blocking your progress: fear, laziness, or lack of clear direction? Break grand dreams into actionable small steps, focus on what can be done now. Practical action matters more than perfect planning.',
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
      upright: '星币骑士描绘一位骑士坐在静止的马上，手中稳稳地托着一枚星币。他的马不像其他骑士的马那样奔腾，而是静静站立，象征着稳健和深思熟虑的方法。背景是已耕种的田地，代表辛勤劳作和耐心培育。这张牌象征可靠、负责、坚持和务实的态度。星币骑士不追求速度，而追求质量；不追求冒险，而追求稳定。这张牌教导我们，有时候慢即是快，稳定的进步比急躁的冲刺更能带来持久的成功。信守承诺，脚踏实地，一步一个脚印地朝着目标前进。',
      reversed: '逆位的星币骑士可能表示过度谨慎导致停滞不前，或是僵化的思维方式阻碍了必要的改变。这可能表现为固执、保守过度，或是害怕冒任何风险而错失机会。逆位也可能表示懒惰、缺乏进取心，或是对细节的过度关注导致效率低下。这也可能暗示工作与生活失衡，过度专注于责任而忽略了生活的其他方面。现在需要审视你的方法：稳健是否变成了停滞？谨慎是否变成了恐惧？找到安全和成长、稳定和灵活之间的平衡。有时候，需要勇气去改变已经不再有效的方法。',
    },
    descriptionEn: {
      upright: 'Knight of Pentacles depicts a knight seated on a stationary horse, steadily holding a pentacle in his hands. His horse doesn\'t gallop like other knights\' steeds, but stands quietly, symbolizing steady and deliberate approach. The background shows plowed fields, representing hard work and patient cultivation. This card symbolizes reliability, responsibility, persistence, and practical attitude. The Knight of Pentacles doesn\'t pursue speed but quality; not adventure but stability. This card teaches that sometimes slow is fast, steady progress brings more lasting success than hasty sprints. Keep commitments, stay grounded, advance toward goals step by step.',
      reversed: 'Reversed, Knight of Pentacles may indicate excessive caution leading to stagnation, or rigid thinking blocking necessary change. This can manifest as stubbornness, excessive conservatism, or fear of taking any risks causing missed opportunities. The reversal can also suggest laziness, lack of initiative, or excessive focus on details reducing efficiency. This may also hint at work-life imbalance, over-focusing on responsibilities while neglecting other life aspects. Now requires examining your approach: has steadiness become stagnation? Has caution become fear? Find balance between security and growth, stability and flexibility. Sometimes, courage is needed to change methods that no longer work.',
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
      upright: '星币王后坐在繁花盛开的花园中，膝上托着一枚星币，周围环绕着丰盛的自然景象。她的王座装饰着果实和花卉，象征着生育力和丰饶。一只兔子在她脚边跳跃，代表生命力和繁衍。这张牌象征务实的滋养、物质和精神的丰盛、以及创造舒适安全环境的能力。星币王后既能赚取财富，也懂得享受生活。她提醒我们，真正的丰盛是平衡的：既要工作创造，也要享受成果；既要照顾他人，也要照顾自己。她是大地母亲的实际化身，脚踏实地却充满爱意。',
      reversed: '逆位的星币王后可能表示你在照顾他人时忽视了自己的需求，或是过度工作导致身心疲惫。这可能表现为工作狂倾向，将自我价值完全建立在生产力和物质成就上。逆位也可能表示过度物质主义，追求奢华而失去了生活的真正意义，或是吝啬、不愿与他人分享。这也可能暗示与自然和身体失去连接，忽视健康和自我照顾。现在需要重新平衡给予和接受、工作和休息、物质和精神。记住，你无法从空杯中倒出水。先照顾好自己，才能更好地照顾他人。重新连接大地，滋养你的身心。',
    },
    descriptionEn: {
      upright: 'Queen of Pentacles sits in a blooming garden, holding a pentacle on her lap, surrounded by abundant natural scenery. Her throne is decorated with fruits and flowers, symbolizing fertility and abundance. A rabbit leaps at her feet, representing vitality and reproduction. This card symbolizes practical nurturing, material and spiritual abundance, and the ability to create comfortable, secure environments. The Queen of Pentacles can both earn wealth and enjoy life. She reminds us that true abundance is balanced: work to create, but also enjoy the fruits; care for others, but also care for yourself. She is the practical embodiment of Mother Earth, grounded yet full of love.',
      reversed: 'Reversed, Queen of Pentacles may indicate you\'re neglecting your own needs while caring for others, or overwork causing physical and mental exhaustion. This can manifest as workaholic tendencies, building self-worth entirely on productivity and material achievement. The reversal can also suggest excessive materialism, pursuing luxury while losing life\'s true meaning, or stinginess, unwillingness to share with others. This may also hint at losing connection with nature and body, neglecting health and self-care. Now requires rebalancing giving and receiving, work and rest, material and spiritual. Remember, you cannot pour from an empty cup. Care for yourself first to better care for others. Reconnect with earth, nurture your body and mind.',
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
      upright: '星币国王坐在装饰华丽的王座上，周围环绕着葡萄藤和丰盛的果实，城堡矗立在背景中。他手中稳稳地托着一枚星币，展现出对物质世界的掌控和智慧。他的长袍上绣着葡萄和牛的图案，象征财富的积累和稳固的根基。这张牌代表财务成功、商业头脑、稳定的领导力和物质世界的精通。星币国王不仅懂得如何创造财富，更懂得如何明智地管理和享用它。他提醒我们，真正的财富不仅是积累，更是明智的运用。以长远的眼光投资，用慷慨的心态分享，将物质成功与精神富足相结合。',
      reversed: '逆位的星币国王可能表示过度贪婪、物质主义，或是将自我价值完全建立在财富和地位上。这可能表现为工作狂、控制欲强，或是为了金钱牺牲了道德和关系。逆位也可能表示财务管理不善，奢侈浪费，或是商业决策失误。这也可能暗示固执、顽固，过度保守而错失成长机会，或是滥用权力和资源。现在需要审视你与财富和权力的关系：它们是服务于你的生活，还是控制了你的生活？真正的成功包括健康、关系和内心的平静。金钱是工具，不是目的。重新校准你的价值观，找到物质与精神的平衡。',
    },
    descriptionEn: {
      upright: 'King of Pentacles sits on an ornately decorated throne, surrounded by grapevines and abundant fruit, with a castle standing in the background. He steadily holds a pentacle in his hands, displaying mastery and wisdom over the material world. His robe is embroidered with grapes and bulls, symbolizing wealth accumulation and solid foundation. This card represents financial success, business acumen, stable leadership, and mastery of the material world. The King of Pentacles knows not only how to create wealth, but how to manage and enjoy it wisely. He reminds us that true wealth isn\'t just accumulation, but wise utilization. Invest with long-term vision, share with generous spirit, combining material success with spiritual richness.',
      reversed: 'Reversed, King of Pentacles may indicate excessive greed, materialism, or building self-worth entirely on wealth and status. This can manifest as workaholism, controlling tendencies, or sacrificing morals and relationships for money. The reversal can also suggest poor financial management, extravagant waste, or business decision mistakes. This may also hint at stubbornness, rigidity, excessive conservatism missing growth opportunities, or abusing power and resources. Now requires examining your relationship with wealth and power: do they serve your life, or control it? True success includes health, relationships, and inner peace. Money is a tool, not the goal. Recalibrate your values, find balance between material and spiritual.',
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
  // Check for locale-specific translation (ja, ko, fr)
  const translation = getCardTranslation(card.id, locale);
  if (translation) {
    return {
      id: card.id,
      suit: card.suit,
      imageUrl: card.imageUrl,
      name: translation.name,
      keywords: translation.keywords,
      description: translation.description,
    };
  }

  // zh uses Chinese fields directly; en and unknown locales use English fields
  const useChinese = locale === 'zh';

  return {
    id: card.id,
    name: useChinese ? card.name : (card.nameEn || card.name),
    suit: card.suit,
    keywords: {
      upright: useChinese ? card.keywords.upright : (card.keywordsEn?.upright || card.keywords.upright),
      reversed: useChinese ? card.keywords.reversed : (card.keywordsEn?.reversed || card.keywords.reversed),
    },
    description: {
      upright: useChinese ? card.description.upright : (card.descriptionEn?.upright || card.description.upright),
      reversed: useChinese ? card.description.reversed : (card.descriptionEn?.reversed || card.description.reversed),
    },
    imageUrl: card.imageUrl,
  };
}
