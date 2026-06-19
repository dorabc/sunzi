// 三十六计 · 完整数据
// 数据结构说明：
//   id          序号（1-36）
//   group       所属套路（胜战计 / 敌战计 / 攻战计 / 混战计 / 并战计 / 败战计）
//   name        计名
//   pinyin      计名拼音
//   meaning     计名直译（一句话点题）
//   original    原文（解语，源自《三十六计》原典，含易理）
//   notes       注音注释（难认字与关键词）
//   translation 白话译文
//   annotation  按语（原典按语，精选）
//   analysis    兵法解析与典型史例
//   image       配图文件名（占位，放于 images/ 目录）
//   prompt      AI 绘图提示词（中国水墨风格）

const GROUPS = [
  { key: '胜战计', subtitle: '处于绝对优势地位之计谋', range: [1, 6] },
  { key: '敌战计', subtitle: '势均力敌时所用之计谋', range: [7, 12] },
  { key: '攻战计', subtitle: '进攻取胜所用之计谋', range: [13, 18] },
  { key: '混战计', subtitle: '局势混乱时所用之计谋', range: [19, 24] },
  { key: '并战计', subtitle: '对付友军反为敌之计谋', range: [25, 30] },
  { key: '败战计', subtitle: '处于劣势败局时之计谋', range: [31, 36] },
];

const STRATAGEMS = [
  // ───────────────── 第一套 · 胜战计 ─────────────────
  {
    id: 1, group: '胜战计', name: '瞒天过海', pinyin: 'mán tiān guò hǎi',
    meaning: '用伪装的假象迷惑对方，在公开行动中暗藏玄机。',
    original: '备周则意怠，常见则不疑。阴在阳之内，不在阳之对。太阳，太阴。',
    notes: [
      { char: '怠', pinyin: 'dài', note: '松懈、懈怠。' },
      { char: '阴', pinyin: 'yīn', note: '此处指机密、隐秘的谋略。' },
      { char: '阳', pinyin: 'yáng', note: '此处指公开、暴露在外的行动。' },
    ],
    translation: '防备周全时反而容易松懈轻敌，习以为常的事物往往不再引起怀疑。秘密的计谋往往隐藏在公开的事物之中，而非与公开的事物相对立。最公开的，恰恰潜藏着最隐秘的。',
    annotation: '阴谋作为，不能于背时秘处行之。夜半行窃、僻巷杀人，愚俗之行，非谋士之所为也。',
    analysis: '“瞒天过海”重在“瞒”：以人们司空见惯、习以为常的现象作掩护，把真实意图隐藏在公开行动之中。典型史例为唐太宗征辽东，大将薛仁贵设计将畏惧渡海的太宗请入“海边富户”精心布置的彩幕大屋宴饮，待风浪止息揭幕，三十万大军已渡海登岸。',
    image: 'img-01.png',
    prompt: 'Traditional Chinese ink wash painting (shuimo), aged rice paper texture. An emperor in Tang dynasty robes feasting inside a large tent of colorful silk curtains, unaware the entire structure rests on a fleet of war ships crossing a misty sea. Soft ink gradients, muted indigo and ochre, vermilion seal stamp in corner, minimalist composition with vast empty negative space, calligraphic brushwork, fog over rolling waves.'
  },
  {
    id: 2, group: '胜战计', name: '围魏救赵', pinyin: 'wéi wèi jiù zhào',
    meaning: '避实击虚，攻击敌方要害以解除己方之围。',
    original: '共敌不如分敌，敌阳不如敌阴。',
    notes: [
      { char: '共', pinyin: 'gòng', note: '集中、正面对抗。' },
      { char: '分', pinyin: 'fēn', note: '分散、使其兵力分开。' },
      { char: '敌阳', pinyin: 'dí yáng', note: '攻击敌人锋芒正盛之处。' },
      { char: '敌阴', pinyin: 'dí yīn', note: '攻击敌人空虚薄弱之处。' },
    ],
    translation: '与其集中兵力正面攻击强敌，不如设法分散它的兵力再各个击破；与其攻打敌人气势正盛的锋芒，不如攻击它空虚薄弱的要害。',
    annotation: '治兵如治水：锐者避其锋，如导疏；弱者塞其虚，如筑堰。',
    analysis: '不直接救援被围之处，而是攻击敌人后方空虚的要害，迫使其回师自救，围困自然解除。战国时齐国孙膑救赵，不赴邯郸正面解围，而直捣魏都大梁，魏将庞涓回师，齐军在桂陵设伏大败魏军，是为“围魏救赵”。',
    image: 'img-02.png',
    prompt: 'Traditional Chinese ink wash painting on old silk. A war chariot army turning back in haste toward a distant walled capital city, while another army quietly lays an ambush in a narrow river valley with reeds. Loose expressive ink strokes, pale grey mountains fading into mist, a single red banner, vast negative space, vermilion seal, classical Warring States atmosphere.'
  },
  {
    id: 3, group: '胜战计', name: '借刀杀人', pinyin: 'jiè dāo shā rén',
    meaning: '借助第三方的力量去打击敌人，自己不出面。',
    original: '敌已明，友未定，引友杀敌，不自出力，以《损》推演。',
    notes: [
      { char: '友未定', pinyin: 'yǒu wèi dìng', note: '盟友的态度尚未明朗。' },
      { char: '引', pinyin: 'yǐn', note: '引导、设法促使。' },
      { char: '损', pinyin: 'sǔn', note: '《易经》损卦，损人而利己之象。' },
    ],
    translation: '敌人的情况已经明朗，而盟友的态度还未确定。此时应设法引导盟友去攻击敌人，自己不必直接出力，可借《易经·损卦》之理推演运用。',
    annotation: '敌象已露，而另一势力又起，将有所图，则当借此一方之力以毁敌方之力。',
    analysis: '自己不动手，巧妙利用矛盾，借第三者之手除掉对手，既达目的又不损己力。郑桓公欲取郐国，故意写下郐国良臣名单佯称将封赏，郐君中计尽杀忠臣，郑遂轻取其国，正是“借刀”之术。',
    image: 'img-03.png',
    prompt: 'Traditional Chinese ink wash painting, aged paper. A scholar-strategist in flowing robes standing calmly in shadow, while in the lit foreground two other warriors clash with swords. Subtle ink tones, a faint reflection of a blade, restrained vermilion accent, deep negative space, atmospheric mist, calligraphy column on the side, classical and ominous mood.'
  },
  {
    id: 4, group: '胜战计', name: '以逸待劳', pinyin: 'yǐ yì dài láo',
    meaning: '养精蓄锐，等待疲惫之敌，伺机制胜。',
    original: '困敌之势，不以战；损刚益柔。',
    notes: [
      { char: '逸', pinyin: 'yì', note: '安闲、休整。' },
      { char: '劳', pinyin: 'láo', note: '疲劳、困乏。' },
      { char: '损刚益柔', pinyin: 'sǔn gāng yì róu', note: '削弱敌之刚强，增益己之柔韧。' },
    ],
    translation: '使敌人陷入困顿之势，不一定非要通过交战来实现；可以采取以静制动的方式，逐步削弱敌人的锐气，增强自己的实力。',
    annotation: '此即致敌之法也。兵书云：“凡先处战地而待敌者佚，后处战地而趋战者劳。”',
    analysis: '掌握战场主动，养精蓄锐、以静制动，待敌方师老兵疲、锐气消尽再后发制人。三国时陆逊抗刘备，坚守不战数月，待蜀军暑热懈怠、连营深入，一举火烧连营七百里，大破之于夷陵。',
    image: 'img-04.png',
    prompt: 'Traditional Chinese ink wash landscape. A calm general seated under a pine tree on a cliff, sipping tea, while far below an exhausted army trudges through a hot dusty valley. Serene cool ink tones contrasting with a faint warm haze in the valley, vast misty mountains, single red seal, generous negative space, meditative atmosphere.'
  },
  {
    id: 5, group: '胜战计', name: '趁火打劫', pinyin: 'chèn huǒ dǎ jié',
    meaning: '趁敌方危难混乱之机，果断出手获取利益。',
    original: '敌之害大，就势取利，刚决柔也。',
    notes: [
      { char: '害', pinyin: 'hài', note: '灾难、危机。' },
      { char: '就势', pinyin: 'jiù shì', note: '顺着形势、趁机。' },
      { char: '刚决柔', pinyin: 'gāng jué róu', note: '以刚强果断之势制服柔弱混乱之敌。' },
    ],
    translation: '当敌方陷入严重危机之时，就应趁势出击，夺取利益。这正是以刚强果断之势去战胜处于柔弱混乱状态之敌的道理。',
    annotation: '敌害在内，则劫其地；敌害在外，则劫其民；内外交害，则劫其国。',
    analysis: '抓住对方内忧外患、自顾不暇的时机果断出击，事半功倍。越王勾践趁吴国天灾、精兵北上争霸、国内空虚之机举兵伐吴，终灭强吴，即是“趁火打劫”的典型。',
    image: 'img-05.png',
    prompt: 'Traditional Chinese ink wash painting. A burning city wall with billowing smoke at night, while shadowy armored figures slip through a broken gate to seize treasure. Dramatic ink blacks against glowing ember-orange, sparks rising like ink splatter, tense diagonal composition, vermilion seal, aged paper, smoke dissolving into negative space.'
  },
  {
    id: 6, group: '胜战计', name: '声东击西', pinyin: 'shēng dōng jī xī',
    meaning: '制造假象迷惑敌人，攻其不备之处。',
    original: '敌志乱萃，不虞，坤下兑上之象，利其不自主而取之。',
    notes: [
      { char: '萃', pinyin: 'cuì', note: '聚集；此处指敌心思纷乱聚结不定。' },
      { char: '不虞', pinyin: 'bù yú', note: '没有料到、未加防备。' },
      { char: '坤下兑上', pinyin: 'kūn xià duì shàng', note: '《易经》萃卦之象，喻人心动摇之势。' },
    ],
    translation: '敌人心志混乱而失去判断，对各种情况都缺乏防备，正如萃卦所示人心动摇之象。应趁敌方失去自主、不能控制局面之机果断出击取胜。',
    annotation: '西汉，七国反，周亚夫坚壁不战。吴兵奔壁之东南陬，亚夫使备西北。已而吴兵果攻西北，遂不得入。',
    analysis: '表面张扬于东，实则发力于西，以佯动调动敌人、扰乱其判断，再攻其不备。东汉班超出使西域，欲击莎车，故意佯装退兵、声张东去，待龟兹大军东追，班超连夜回师猛攻莎车，一举破之。',
    image: 'img-06.png',
    prompt: 'Traditional Chinese ink wash painting. To the east, loud drums and waving banners with a feinting crowd of soldiers; to the west, a silent column of cavalry charging an unguarded gate at dawn. Split composition, bold ink banners on one side, quiet sweeping strokes on the other, muted earth tones, single vermilion seal, misty dawn light, classical battle scroll feel.'
  },

  // ───────────────── 第二套 · 敌战计 ─────────────────
  {
    id: 7, group: '敌战计', name: '无中生有', pinyin: 'wú zhōng shēng yǒu',
    meaning: '以虚假掩护真实，由虚转实出奇制胜。',
    original: '诳也，非诳也，实其所诳也。少阴、太阴、太阳。',
    notes: [
      { char: '诳', pinyin: 'kuáng', note: '欺骗、虚假。' },
      { char: '实其所诳', pinyin: 'shí qí suǒ kuáng', note: '把原本虚假的变为真实。' },
    ],
    translation: '用假象欺骗敌人，但又不是单纯的欺骗，而是要在适当时机把假象变为真实。由小的假象，到大的假象，再到真实的行动——虚虚实实，使敌人无从分辨。',
    annotation: '无而示有，诳也。诳不可久而易觉，故无不可以终无。无中生有，则由诳而真，由虚而实矣。',
    analysis: '先以假象麻痹敌人，待其松懈轻信，再化虚为实、出其不意。唐安史之乱中张巡守雍丘，夜以草人缒城“借箭”得十万支，敌习以为常后改缒死士五百突袭，大破令狐潮营，正是“无中生有”。',
    image: 'img-07.png',
    prompt: 'Traditional Chinese ink wash painting at night. Straw figures shaped like soldiers being lowered from a city wall on ropes, bristling with enemy arrows, under a pale moon. Eerie blue-grey ink tones, scattered arrows like ink flecks, ghostly silhouettes blurring between real and fake, vermilion seal, aged paper, mysterious atmosphere.'
  },
  {
    id: 8, group: '敌战计', name: '暗度陈仓', pinyin: 'àn dù chén cāng',
    meaning: '正面佯攻迷惑敌人，暗中迂回出奇制胜。',
    original: '示之以动，利其静而有主，益动而巽。',
    notes: [
      { char: '度', pinyin: 'dù', note: '同“渡”，越过、通过。' },
      { char: '陈仓', pinyin: 'chén cāng', note: '古地名，今陕西宝鸡，汉军暗中进军处。' },
      { char: '巽', pinyin: 'xùn', note: '《易经》巽卦，谦逊、潜入之意。' },
    ],
    translation: '故意以明显的行动迷惑敌人，使敌人专注于固守其防线；自己则暗中迂回行动，出其不意地发起攻击。',
    annotation: '奇出于正，无正则不能出奇。不明修栈道，则不能暗度陈仓。',
    analysis: '以公开的正面行动吸引敌人注意力，暗中另辟蹊径直取要害。楚汉相争，韩信派人大张旗鼓修复被烧毁的栈道以麻痹章邯，暗地却率主力抄小道偷渡陈仓，一举平定三秦，“明修栈道，暗度陈仓”由此而来。',
    image: 'img-08.png',
    prompt: 'Traditional Chinese ink wash painting. In the foreground, laborers conspicuously repairing a burned wooden plank road clinging to a sheer cliff; far in the misty background, a hidden army marches single-file through a secret mountain gorge. Steep ink-washed cliffs, layered fog, contrast between visible and concealed, vermilion seal, classical Han dynasty scroll style.'
  },
  {
    id: 9, group: '敌战计', name: '隔岸观火', pinyin: 'gé àn guān huǒ',
    meaning: '坐观敌方内乱，待其自毙再坐收其利。',
    original: '阳乖序乱，阴以待逆。暴戾恣睢，其势自毙。顺以动豫，豫顺以动。',
    notes: [
      { char: '乖', pinyin: 'guāi', note: '违背、错乱。' },
      { char: '恣睢', pinyin: 'zì suī', note: '放纵暴戾、肆意妄为。' },
      { char: '豫', pinyin: 'yù', note: '《易经》豫卦，安顺、待时而动之意。' },
    ],
    translation: '当敌方内部矛盾激化、秩序大乱时，应静观其变，等待其内部走向崩溃。敌人凶暴乖戾、自相残杀，其势必然自取灭亡。要顺应形势、待机而动。',
    annotation: '乖气浮张，逼则受敌之协攻，退则乱自相戕。',
    analysis: '当敌方内部出现矛盾、自相残杀时，切忌操之过急逼其团结，应静观其变、坐待其乱，再坐收渔利。曹操北征乌桓，袁尚、袁熙投奔辽东公孙康，曹操按兵不动，公孙康果然斩二袁首级来献，不战而收其利。',
    image: 'img-09.png',
    prompt: 'Traditional Chinese ink wash painting. A lone figure standing calmly on the near bank of a wide river, watching a distant encampment across the water consumed by chaotic fire and smoke. Reflective water in pale ink, flames rendered in restrained orange-red on the far shore, deep stillness in foreground, vast negative space, vermilion seal, contemplative mood.'
  },
  {
    id: 10, group: '敌战计', name: '笑里藏刀', pinyin: 'xiào lǐ cáng dāo',
    meaning: '外示友善以麻痹对方，暗中布置伺机加害。',
    original: '信而安之，阴以图之，备而后动，勿使有变。刚中柔外也。',
    notes: [
      { char: '信而安之', pinyin: 'xìn ér ān zhī', note: '使敌人信任并安心。' },
      { char: '图', pinyin: 'tú', note: '图谋、算计。' },
      { char: '刚中柔外', pinyin: 'gāng zhōng róu wài', note: '内心刚狠而外表柔和。' },
    ],
    translation: '设法使敌人相信我方并放松戒备，暗中却积极策划图谋；做好充分准备后再行动，不让敌人有所察觉而生变故。这就是外表柔和、内里刚狠的策略。',
    annotation: '兵书云：辞卑而益备者，进也；……故凡敌人之巧言令色，皆杀机之外露也。',
    analysis: '表面笑脸相迎、和善可亲，暗中却暗藏杀机、伺机下手。战国时秦将公孙鞅与魏将公子卬本为旧交，鞅修书叙旧、约会盟欢饮，乘魏军不备伏兵擒卬，大破魏军，即“笑里藏刀”。',
    image: 'img-10.png',
    prompt: 'Traditional Chinese ink wash painting. Two officials in elegant robes smiling and bowing to each other at a banquet, but one conceals a curved dagger behind his sleeve, its faint metallic gleam visible. Warm lantern-lit ink tones, a subtle cold glint of steel, delicate brushwork on robes, tense undercurrent, vermilion seal, aged silk texture.'
  },
  {
    id: 11, group: '敌战计', name: '李代桃僵', pinyin: 'lǐ dài táo jiāng',
    meaning: '以局部牺牲换取全局胜利，舍小保大。',
    original: '势必有损，损阴以益阳。',
    notes: [
      { char: '僵', pinyin: 'jiāng', note: '枯死、僵死。' },
      { char: '损阴益阳', pinyin: 'sǔn yīn yì yáng', note: '舍弃局部小利以保全整体大局。' },
    ],
    translation: '当战局发展到必然要有所损失的时候，就应当舍弃局部的、次要的利益，去保全整体的、根本的利益。',
    annotation: '我敌之情，各有长短。战争之事，难得全胜，而胜负之诀，即在长短之相较。',
    analysis: '语出乐府《鸡鸣》“桃生露井上，李树生桃旁；虫来啮桃根，李树代桃僵”。战国田忌赛马，孙膑以下等马对齐王上等马（弃一局），再以上等对中等、中等对下等，二胜一负赢得全局，是“舍局部、保全局”的典范。',
    image: 'img-11.png',
    prompt: 'Traditional Chinese ink wash painting. A peach tree and a plum tree growing side by side; the plum tree withered and gnawed at the roots by insects while the peach tree blossoms healthily. Delicate ink branches, pink peach blossoms in muted wash, one bare sacrificial tree, symbolic and poetic, vast negative space, vermilion seal, classical garden mood.'
  },
  {
    id: 12, group: '敌战计', name: '顺手牵羊', pinyin: 'shùn shǒu qiān yáng',
    meaning: '善于捕捉时机，把握敌方微小的疏漏获利。',
    original: '微隙在所必乘，微利在所必得。少阴，少阳。',
    notes: [
      { char: '隙', pinyin: 'xì', note: '空隙、破绽、可乘之机。' },
      { char: '乘', pinyin: 'chéng', note: '利用、趁机。' },
      { char: '微利', pinyin: 'wēi lì', note: '微小的利益。' },
    ],
    translation: '敌人出现的微小破绽也一定要趁机利用，微小的利益也一定要设法获取。要善于将敌方细小的疏忽转化为我方的胜机。',
    annotation: '大军动处，其隙甚多，乘间取利，不必以胜。胜固可用，败亦可用。',
    analysis: '在主要行动之外，善于发现并抓住敌方一切微小的可乘之机，随手获利、积小胜为大胜。行军作战中处处留意敌之疏漏，遇隙即取，看似不起眼，却能积累优势、扰乱敌方。',
    image: 'img-12.png',
    prompt: 'Traditional Chinese ink wash painting. A large army column marching across a plain raising dust, while at the edge a single soldier quietly leads away a stray sheep unnoticed. Sweeping panoramic ink strokes for the army, tiny intimate detail of the sheep, warm earth tones, humor and cunning, vermilion seal, aged paper, classical pastoral feel.'
  },

  // ───────────────── 第三套 · 攻战计 ─────────────────
  {
    id: 13, group: '攻战计', name: '打草惊蛇', pinyin: 'dǎ cǎo jīng shé',
    meaning: '试探侦察以查明虚实，再决定行动。',
    original: '疑以叩实，察而后动；复者，阴之媒也。',
    notes: [
      { char: '叩实', pinyin: 'kòu shí', note: '探明真实情况。' },
      { char: '复', pinyin: 'fù', note: '反复试探、再三侦察。' },
      { char: '媒', pinyin: 'méi', note: '媒介、手段。' },
    ],
    translation: '遇到可疑的情况，应当先探明虚实，弄清真相后再行动；反复进行侦察试探，正是发现敌方隐情的有效手段。',
    annotation: '敌力不露，阴谋深沉，未可轻进，应遍探其锋。',
    analysis: '本意为告诫：行动不当反而会惊动敌人、暴露己方意图。引申为通过试探侦察摸清敌方虚实。唐代王鲁为官贪腐，民众告其下属，王鲁见状惊惧批注“汝虽打草，吾已惊蛇”，成语由此而来。',
    image: 'img-13.png',
    prompt: 'Traditional Chinese ink wash painting. A hand parting tall reeds and grass with a stick, startling a coiled snake that rears up hissing among the blades. Dynamic grass strokes in green-grey ink, the serpent rendered in sinuous wet brushwork, sense of sudden alertness, vermilion seal, aged paper, tense natural scene.'
  },
  {
    id: 14, group: '攻战计', name: '借尸还魂', pinyin: 'jiè shī huán hún',
    meaning: '借助某种已无用的事物或名义来达成目的。',
    original: '有用者，不可借；不能用者，求借。借不能用者而用之，匪我求童蒙，童蒙求我。',
    notes: [
      { char: '尸', pinyin: 'shī', note: '比喻已无生命力、可被利用的旧事物或名号。' },
      { char: '童蒙', pinyin: 'tóng méng', note: '《易经》中指蒙昧无知者，此处喻可被借用之人。' },
      { char: '匪', pinyin: 'fěi', note: '同“非”，不是。' },
    ],
    translation: '凡是有作为、有主见的力量，往往不易被人利用；而那些没有作为、无法自立的力量，反而会主动来求助于人。要善于利用这种“无用之物”为我所用——不是我去求那蒙昧者，而是蒙昧者来求我。',
    annotation: '换代之际，凡言“逆取顺守”者，多假托一以为号召。',
    analysis: '借助某种旧的名义、招牌或已被遗忘的事物，赋予其新的内容为我所用。秦末陈胜吴广起义，假借已死的公子扶苏与楚将项燕之名号召天下，迅速聚集声势，即“借尸还魂”之术。',
    image: 'img-14.png',
    prompt: 'Traditional Chinese ink wash painting. A Daoist altar at dusk with rising incense smoke forming the ghostly silhouette of a warrior emerging from an old robe and banner. Ethereal grey smoke transitioning into a human form, candlelight in warm ink, mystical and uncanny, ancient banner with faded characters, vermilion seal, atmospheric negative space.'
  },
  {
    id: 15, group: '攻战计', name: '调虎离山', pinyin: 'diào hǔ lí shān',
    meaning: '设法引诱敌人离开有利地势，再行制服。',
    original: '待天以困之，用人以诱之，往蹇来返。',
    notes: [
      { char: '调', pinyin: 'diào', note: '调动、引诱使之移动。' },
      { char: '蹇', pinyin: 'jiǎn', note: '《易经》蹇卦，艰难、险阻之意。' },
      { char: '往蹇来返', pinyin: 'wǎng jiǎn lái fǎn', note: '前往艰险，引敌返出再制之。' },
    ],
    translation: '利用不利于敌人的自然条件去围困它，用人为的假象去引诱它。让敌人主动离开险要的据点，前往对其不利之地，再加以制服。',
    annotation: '兵书曰：下政攻城。若攻坚，则自取败亡矣。敌既得地利，则不可争其地。',
    analysis: '当敌人占据有利地势、难以强攻时，设法将其引诱出来，使其脱离凭借，再加以歼灭。东汉虞诩平羌，故意示弱增灶、诱羌军离开险隘追击，再设伏强弩齐发大破之，即“调虎离山”。',
    image: 'img-15.png',
    prompt: 'Traditional Chinese ink wash painting. A fierce tiger descending from a misty mountain lair, lured by a decoy down into an open valley where hidden hunters wait. Powerful tiger in bold wet ink strokes, layered mountain mist behind, sense of the beast leaving its stronghold, tension, vermilion seal, aged paper, dramatic classical composition.'
  },
  {
    id: 16, group: '攻战计', name: '欲擒故纵', pinyin: 'yù qín gù zòng',
    meaning: '故意放松，使敌松懈斗志，再一举擒获。',
    original: '逼则反兵，走则减势。紧随勿迫。累其气力，消其斗志，散而后擒，兵不血刃。需，有孚，光。',
    notes: [
      { char: '擒', pinyin: 'qín', note: '捉拿、擒获。' },
      { char: '纵', pinyin: 'zòng', note: '放纵、故意放走。' },
      { char: '需', pinyin: 'xū', note: '《易经》需卦，等待、待时之意。' },
      { char: '孚', pinyin: 'fú', note: '诚信、把握。' },
    ],
    translation: '把敌人逼得太紧，它会拼死反扑；让它逃走，反而会消减其气势。应当紧紧跟随而不过分相逼，以消耗它的体力、瓦解它的斗志，待其溃散后再行擒获，便能兵不血刃。这正合需卦“待时而有把握、前途光明”之理。',
    annotation: '所谓纵者，非放之也，随之，而稍松之耳。',
    analysis: '对暂时难以彻底制服的对手，故意放松、不穷追，使其丧失警惕与斗志，再一举降服，从根本上瓦解抵抗。三国诸葛亮平南中，对孟获七擒七纵，终使其心悦诚服、永不再反，是“攻心为上”的经典。',
    image: 'img-16.png',
    prompt: 'Traditional Chinese ink wash painting. A general on horseback deliberately releasing a captured chieftain who walks free across an open plain, while the army watches patiently from a ridge. Wide serene landscape, restraint and wisdom in composition, soft ink mountains, a sense of calm control, vermilion seal, aged paper, classical Three Kingdoms mood.'
  },
  {
    id: 17, group: '攻战计', name: '抛砖引玉', pinyin: 'pāo zhuān yǐn yù',
    meaning: '以小利或假象引诱敌人上当，再取大利。',
    original: '类以诱之，击蒙也。',
    notes: [
      { char: '抛', pinyin: 'pāo', note: '投出、扔出。' },
      { char: '砖', pinyin: 'zhuān', note: '比喻不值钱的小利、诱饵。' },
      { char: '蒙', pinyin: 'méng', note: '蒙昧受骗、上当之敌。' },
    ],
    translation: '用相类似的事物作诱饵去引诱敌人，趁其受骗上当、懵懂无知之机予以打击。',
    annotation: '诱敌之法甚多，最妙之法，不在疑似之间，而在类同，以固其惑。',
    analysis: '用微小的代价或相似的假象作诱饵，引诱贪利或无知的敌人就范，再换取更大的胜利。春秋楚国伐绞，故意派无兵保护的樵夫诱绞军出城掳掠，待绞军麻痹倾巢而出，楚伏兵尽歼之，迫绞订城下之盟。',
    image: 'img-17.png',
    prompt: 'Traditional Chinese ink wash painting. A single plain brick lying on a path as bait, while a piece of translucent jade glows faintly in the distance; a greedy figure reaches for the brick unaware of a trap. Symbolic minimalist composition, contrast of dull brick and luminous jade, subtle ink wash, vermilion seal, aged paper, allegorical mood.'
  },
  {
    id: 18, group: '攻战计', name: '擒贼擒王', pinyin: 'qín zéi qín wáng',
    meaning: '抓住敌方首脑或要害，瓦解其全部力量。',
    original: '摧其坚，夺其魁，以解其体。龙战于野，其道穷也。',
    notes: [
      { char: '魁', pinyin: 'kuí', note: '首领、头目。' },
      { char: '解其体', pinyin: 'jiě qí tǐ', note: '瓦解敌方的整体组织。' },
      { char: '龙战于野', pinyin: 'lóng zhàn yú yě', note: '《易经》语，喻强敌一旦失去首领则势穷力竭。' },
    ],
    translation: '摧毁敌人的主力，擒获敌方的首领，就能瓦解它的整体战斗力。强龙一旦离开依托在荒野中争斗，便会陷入穷途末路。',
    annotation: '攻胜则利不胜取。取小遗大，卒之利、将之累、帅之害、功之亏也。',
    analysis: '作战要抓住关键，集中力量擒获敌方首脑、摧毁其指挥核心，敌军群龙无首便会全线崩溃。唐将张巡守睢阳，乱军中辨不出叛将尹子奇，遂以蒿杆为箭射敌，敌拾箭报告主将，张巡即令神箭手射中尹子奇之目，叛军大乱。',
    image: 'img-18.png',
    prompt: 'Traditional Chinese ink wash battle painting. Amid a chaotic clash of soldiers, an archer takes precise aim at the enemy commander on a horse beneath a large banner. Swirling ink melee in the background blurred, sharp focus on the single targeted leader, dynamic tension, a streaking arrow, vermilion seal, aged paper, epic classical war scroll.'
  },

  // ───────────────── 第四套 · 混战计 ─────────────────
  {
    id: 19, group: '混战计', name: '釜底抽薪', pinyin: 'fǔ dǐ chōu xīn',
    meaning: '从根本上消除敌方的依凭，瓦解其气势。',
    original: '不敌其力，而消其势，兑下乾上之象。',
    notes: [
      { char: '釜', pinyin: 'fǔ', note: '古代的锅。' },
      { char: '薪', pinyin: 'xīn', note: '柴火。' },
      { char: '兑下乾上', pinyin: 'duì xià qián shàng', note: '《易经》履卦之象，以柔克刚之理。' },
    ],
    translation: '当不能在正面硬拼中战胜强敌时，就设法从根本上消减它的气势——如同水沸难止，与其扬汤止沸，不如抽去锅底的柴薪。这正合履卦以柔克刚之象。',
    annotation: '水沸者，力也，火之力也，阳中之阳也，锐不可当；薪者，火之魄也，即力之势也，阴中之阴也，近而无害。',
    analysis: '避开敌人锋芒，从根本上摧毁其赖以存在的依凭（如粮草、士气、根基），釜底抽薪，势必瓦解。官渡之战，曹操亲率精兵奇袭袁绍屯粮重地乌巢，烧其辎重，袁军军心崩溃，曹操以弱胜强，正是抽其“薪”。',
    image: 'img-19.png',
    prompt: 'Traditional Chinese ink wash painting. A large cauldron boiling furiously over a fire, while a hand reaches underneath to pull out the burning firewood, the flames about to die. Rising steam in soft ink, glowing embers being withdrawn, symbolic and clear composition, warm and cool ink contrast, vermilion seal, aged paper, philosophical mood.'
  },
  {
    id: 20, group: '混战计', name: '浑水摸鱼', pinyin: 'hún shuǐ mō yú',
    meaning: '趁敌方混乱无主之机，从中取利。',
    original: '乘其阴乱，利其弱而无主。随，以向晦入宴息。',
    notes: [
      { char: '浑', pinyin: 'hún', note: '浑浊、混乱。' },
      { char: '阴乱', pinyin: 'yīn luàn', note: '内部的混乱。' },
      { char: '向晦入宴息', pinyin: 'xiàng huì rù yàn xī', note: '《易经》随卦语，顺应天时、随机而动。' },
    ],
    translation: '趁着敌人内部出现混乱，利用其虚弱而又群龙无主之机，使它顺从于我。要像随卦所示那样，顺应时势、随机应变地行动。',
    annotation: '动荡之际，数力冲撞，弱者依违无主，敌蔽而不察，我随而取之。',
    analysis: '主动制造或利用敌方的混乱局面，趁其无暇辨别、指挥失灵之机谋取利益。战乱纷争之时，局势浑浊不清，善谋者趁势浑水摸鱼，化乱为利，正如鱼水浑浊时易于捕捉。',
    image: 'img-20.png',
    prompt: 'Traditional Chinese ink wash painting. A fisherman reaching into muddy turbulent water to grab fish, the water clouded and swirling. Murky grey-brown ink washes, fish shadows half-hidden in the turbid water, a calm opportunistic hand, ripples in calligraphic strokes, vermilion seal, aged paper, earthy folk atmosphere.'
  },
  {
    id: 21, group: '混战计', name: '金蝉脱壳', pinyin: 'jīn chán tuō qiào',
    meaning: '保留原有阵势的外形，暗中转移主力脱身。',
    original: '存其形，完其势；友不疑，敌不动。巽而止，蛊。',
    notes: [
      { char: '蝉', pinyin: 'chán', note: '昆虫，蜕皮时留下空壳。' },
      { char: '壳', pinyin: 'qiào', note: '外壳，比喻原有的伪装阵势。' },
      { char: '蛊', pinyin: 'gǔ', note: '《易经》蛊卦，整治、变动之意。' },
    ],
    translation: '保存原有阵地的形貌，维持完整的声势，使盟友不生疑虑、敌人不敢妄动。自己则像蝉蜕壳一般，暗中悄然脱身转移。这正合蛊卦“顺势而隐、伺机变动”之理。',
    annotation: '共友击敌，坐观其势。倘另有一敌，则须去而存势。',
    analysis: '在危急关头保留原有阵势的外壳以稳住敌人，暗中将主力悄然转移、脱离险境。三国诸葛亮病逝五丈原，蜀军秘不发丧，依原阵从容退兵，司马懿疑其诈不敢追，“死诸葛走生仲达”，即金蝉脱壳。',
    image: 'img-21.png',
    prompt: 'Traditional Chinese ink wash painting. An empty translucent cicada shell still clinging to a tree branch, while the real cicada has flown away into misty distance. Extremely delicate ink rendering of the hollow shell, golden morning light, sense of quiet escape and absence, vast empty space, vermilion seal, aged paper, poetic and subtle.'
  },
  {
    id: 22, group: '混战计', name: '关门捉贼', pinyin: 'guān mén zhuō zéi',
    meaning: '封锁退路，围歼孤立弱小之敌。',
    original: '小敌困之，剥，不利有攸往。',
    notes: [
      { char: '困', pinyin: 'kùn', note: '围困、封锁。' },
      { char: '剥', pinyin: 'bō', note: '《易经》剥卦，剥落、消蚀之意。' },
      { char: '攸往', pinyin: 'yōu wǎng', note: '所往、有所行动。' },
    ],
    translation: '对于势单力薄的小股敌人，应当将其包围困住、聚而歼之。正如剥卦所示，此时不宜让敌人有逃脱奔走的余地。',
    annotation: '捉贼而必关门者，非恐其逸也，恐其逸而为他人所得也。',
    analysis: '对孤立、弱小之敌，先断其退路再加以围歼，使其无法逃脱，亦防其逃后另生祸患。长平之战，白起佯败诱赵括追击，再断其退路与粮道，将四十万赵军重重围困，终致其全军覆没，即“关门捉贼”。',
    image: 'img-22.png',
    prompt: 'Traditional Chinese ink wash painting. A small band of trapped soldiers surrounded inside a walled courtyard, the heavy wooden gate being barred shut from outside. Encircling shadowy troops, claustrophobic composition, the sealed gate emphasized, cold ink tones, sense of no escape, vermilion seal, aged paper, tense classical scene.'
  },
  {
    id: 23, group: '混战计', name: '远交近攻', pinyin: 'yuǎn jiāo jìn gōng',
    meaning: '结交远方、攻取近邻，逐步扩张。',
    original: '形禁势格，利从近取，害以远隔。上火下泽。',
    notes: [
      { char: '禁', pinyin: 'jìn', note: '受地形限制、阻隔。' },
      { char: '格', pinyin: 'gé', note: '阻碍、格挡。' },
      { char: '上火下泽', pinyin: 'shàng huǒ xià zé', note: '《易经》睽卦之象，相互背离之意。' },
    ],
    translation: '当受地形所限、形势所阻，难以远征之时，攻取近处的目标有利，而越过近敌去攻打远敌则有害。这正如睽卦“火上泽下、彼此乖离”之象，宜利用敌国之间的矛盾。',
    annotation: '混战之局，纵横捭阖之中，各自取利。远不可攻，而可以利相结；近者交之，反使变生肘腋。',
    analysis: '与远方之国结交以稳住后方，集中力量攻取邻近之敌，得寸即为己之寸，逐步蚕食。秦相范雎为秦昭王定“远交近攻”之策，结好齐楚、先取韩魏，奠定了秦最终统一六国的根本方略。',
    image: 'img-23.png',
    prompt: 'Traditional Chinese ink wash map-like painting. A strategist points at an ancient silk map; a friendly handshake gesture reaches toward a distant state while a sword points at the neighboring one. Antique cartographic ink style, faded territory boundaries, brush-drawn mountains and rivers, vermilion seals marking states, scholarly war-room atmosphere, aged paper.'
  },
  {
    id: 24, group: '混战计', name: '假道伐虢', pinyin: 'jiǎ dào fá guó',
    meaning: '借通行之名，行吞并之实，一举两得。',
    original: '两大之间，敌胁以从，我假以势。困，有言不信。',
    notes: [
      { char: '假道', pinyin: 'jiǎ dào', note: '借路、借道通行。' },
      { char: '虢', pinyin: 'guó', note: '春秋时小国名。' },
      { char: '胁', pinyin: 'xié', note: '威胁、胁迫。' },
    ],
    translation: '对于处在两个大国之间的小国，当敌方以武力威胁它屈从时，我方应趁机以援助为名，假借“借道”之势将势力渗入。这正合困卦“空言难取信”之理——须以实际行动控制它。',
    annotation: '假地用兵之举，非巧言可诳，必其势不受我之胁从，则不能不允我之假道。',
    analysis: '以借道、援助等名义为掩护，将力量渗入目标，待时机成熟反客为主、一举吞并。春秋晋国向虞国借道伐虢，灭虢之后回师顺势灭虞，“唇亡齿寒”“假道伐虢”两典皆出于此。',
    image: 'img-24.png',
    prompt: 'Traditional Chinese ink wash painting. An army being welcomed through the open gate of a small state, the host lord bowing graciously, unaware the guests intend conquest. Two-faced tension, open gate, marching troops with concealed intent, autumnal ink tones, falling leaves symbolizing "lips gone, teeth cold", vermilion seal, aged paper.'
  },

  // ───────────────── 第五套 · 并战计 ─────────────────
  {
    id: 25, group: '并战计', name: '偷梁换柱', pinyin: 'tōu liáng huàn zhù',
    meaning: '暗中改换关键，使对方丧失主力或根本。',
    original: '频更其阵，抽其劲旅，待其自败，而后乘之，曳其轮也。',
    notes: [
      { char: '梁', pinyin: 'liáng', note: '房梁，比喻关键支撑。' },
      { char: '劲旅', pinyin: 'jìng lǚ', note: '精锐部队、骨干力量。' },
      { char: '曳其轮', pinyin: 'yè qí lún', note: '《易经》语，牵制其车轮使之不能前行。' },
    ],
    translation: '设法多次变动友军（或敌军）的阵容部署，暗中抽调其精锐骨干，使其力量空虚、自趋失败，然后趁机加以控制或吞并。这正如牵住车轮使其不能前行。',
    annotation: '阵有纵横，天衡为梁，地轴为柱。梁柱以精兵为之，故观其阵，则知精兵之所在。',
    analysis: '暗中抽换事物的关键部分，使其名存实亡、为我所控。秦始皇死于沙丘，赵高、李斯伪造诏书，废扶苏而立胡亥，偷换了帝国的“梁柱”，正是“偷梁换柱”的典型政治权谋。',
    image: 'img-25.png',
    prompt: 'Traditional Chinese ink wash painting. Inside a grand wooden hall at night, shadowy figures secretly replacing a load-bearing pillar with a hollow one while the structure stands unchanged outside. Intricate timber architecture in ink line work, dim lantern light, secrecy and structural metaphor, vermilion seal, aged paper, intrigue atmosphere.'
  },
  {
    id: 26, group: '并战计', name: '指桑骂槐', pinyin: 'zhǐ sāng mà huái',
    meaning: '旁敲侧击、杀鸡儆猴，以威慑使人服从。',
    original: '大凌小者，警以诱之。刚中而应，行险而顺。',
    notes: [
      { char: '凌', pinyin: 'líng', note: '统御、震慑。' },
      { char: '警', pinyin: 'jǐng', note: '警告、警示。' },
      { char: '刚中而应', pinyin: 'gāng zhōng ér yìng', note: '《易经》语，刚强适中而上下响应。' },
    ],
    translation: '强者统御弱者、上级驾驭下属时，要善于用警告、震慑的方式来诱导、使之顺服。做到刚强而适度，便能上下响应；即使采取强硬手段，也能行险而顺利。',
    annotation: '率数未服者以对敌，若策之不行，而利诱之，又反启其疑，于是反以诱敌之法者，诱我也。',
    analysis: '不直接针对某对象，而是借惩戒他人、旁敲侧击来警示、震慑真正的目标，树立威信。司马穰苴受命统军，借监军庄贾迟到当众斩之以立军威，三军震栗、令行禁止，即“杀一儆百、指桑骂槐”之效。',
    image: 'img-26.png',
    prompt: 'Traditional Chinese ink wash painting. A stern general pointing at a mulberry tree while his harsh gaze is truly directed at a locust tree nearby; soldiers stand at rigid attention, intimidated. Symbolic two trees in ink, authority and implied threat, disciplined ranks, cool austere tones, vermilion seal, aged paper, atmosphere of military discipline.'
  },
  {
    id: 27, group: '并战计', name: '假痴不癫', pinyin: 'jiǎ chī bù diān',
    meaning: '假装愚钝不露锋芒，暗中等待时机。',
    original: '宁伪作不知不为，不伪作假知妄为。静不露机，云雷屯也。',
    notes: [
      { char: '痴', pinyin: 'chī', note: '痴呆、愚钝（伪装）。' },
      { char: '癫', pinyin: 'diān', note: '癫狂、轻举妄动。' },
      { char: '屯', pinyin: 'zhūn', note: '《易经》屯卦，蓄势待发、艰难初始之意。' },
    ],
    translation: '宁可假装糊涂、按兵不动，也绝不要假装精明而轻举妄动。要像屯卦所示，沉静不露声色、不显露真实意图，如同云雷涌动而未发，暗中积蓄力量、等待时机。',
    annotation: '假作不知而实知，假作不为而实不可为，或将有所为。司马懿之假病昏以诛曹爽……',
    analysis: '故意装出痴愚、麻痹大意的样子掩盖锋芒与野心，使对手放松戒备，暗中积蓄力量、伺机而动。三国司马懿装病示弱，骗过曹爽，待其松懈后发动高平陵之变，一举夺取曹魏大权，是“假痴不癫”的极致。',
    image: 'img-27.png',
    prompt: 'Traditional Chinese ink wash painting. An old minister feigning frailty and dotage, slumped and drooling on a couch, while his eyes hold a hidden sharp gleam of cunning. Subtle psychological portrait in restrained ink, deceptive weakness, faint storm clouds outside the window, vermilion seal, aged paper, quietly sinister mood.'
  },
  {
    id: 28, group: '并战计', name: '上屋抽梯', pinyin: 'shàng wū chōu tī',
    meaning: '诱敌深入绝境，断其退路而制之。',
    original: '假之以便，唆之使前，断其援应，陷之死地。遇毒，位不当也。',
    notes: [
      { char: '梯', pinyin: 'tī', note: '梯子，比喻退路与依凭。' },
      { char: '唆', pinyin: 'suō', note: '怂恿、诱使。' },
      { char: '遇毒', pinyin: 'yù dú', note: '《易经》噬嗑卦语，喻贪进而遭祸。' },
    ],
    translation: '故意给敌人以方便、露出可乘之机，引诱怂恿它深入冒进，然后切断它的后援与退路，将它置于死地。敌人贪进受困，正如噬嗑卦“遇毒”之象，因其所处位置不当而自招祸患。',
    annotation: '唆者，利使之也。利使之而不先为之便，或猜疑而不前，故抽梯之局，须先置梯。',
    analysis: '先以利诱使敌深入，再撤去其退路与接应，使之陷入孤立死地。亦指为求真言而绝其旁顾——刘琦借登楼撤梯，使诸葛亮无可推脱，献“申生在内而亡、重耳在外而安”自保之策。',
    image: 'img-28.png',
    prompt: 'Traditional Chinese ink wash painting. A figure who has climbed onto a rooftop or high pavilion, while below someone quietly removes the ladder, stranding him against the sky. Tall isolated structure, sense of no return, the withdrawn ladder emphasized, sparse ink composition, dramatic height, vermilion seal, aged paper.'
  },
  {
    id: 29, group: '并战计', name: '树上开花', pinyin: 'shù shàng kāi huā',
    meaning: '借势布局，虚张声势以壮大表面阵容。',
    original: '借局布势，力小势大。鸿渐于陆，其羽可用为仪也。',
    notes: [
      { char: '局', pinyin: 'jú', note: '局面、形势、可借之条件。' },
      { char: '鸿渐于陆', pinyin: 'hóng jiàn yú lù', note: '《易经》渐卦语，鸿雁渐飞至高处。' },
      { char: '仪', pinyin: 'yí', note: '仪仗、声势、可资借助的羽翼。' },
    ],
    translation: '善于借助某种局面来布成有利的阵势，即使自身力量弱小，也能造出强大的声势。正如鸿雁渐飞登高，它华美的羽毛可以作为壮大仪仗之用——借外物以壮己势。',
    annotation: '此树本无花，而树则可以有花，剪彩贴之，不细察者不易发觉。',
    analysis: '本身实力有限时，借助外部条件、伪装造势，使阵容显得强大，以震慑或迷惑敌人。三国张飞据长坂桥，令士卒于林中马尾拖枝扬尘、虚张声势，独骑横矛厉声怒喝，曹军疑有伏兵不敢进，即“树上开花”。',
    image: 'img-29.png',
    prompt: 'Traditional Chinese ink wash painting. A bare winter tree onto which artificial silk blossoms have been tied, from a distance appearing to bloom magnificently. Delicate fake flowers among bare branches, illusion of abundance, soft pink wash against grey twigs, theme of false grandeur, vermilion seal, aged paper, poetic deception.'
  },
  {
    id: 30, group: '并战计', name: '反客为主', pinyin: 'fǎn kè wéi zhǔ',
    meaning: '由被动变主动，逐步掌控全局。',
    original: '乘隙插足，扼其主机，渐之进也。',
    notes: [
      { char: '隙', pinyin: 'xì', note: '空隙、可乘之机。' },
      { char: '扼', pinyin: 'è', note: '扼住、控制。' },
      { char: '主机', pinyin: 'zhǔ jī', note: '关键枢纽、要害。' },
    ],
    translation: '趁着对方出现空隙时插足进入，进而扼住其要害枢纽，由次要、被动的地位逐步转为主导、主动的地位——这是循序渐进、逐步掌控的过程。',
    annotation: '为人驱使者为奴，为人尊处者为客，能立足者为渐客，能制人者为主。',
    analysis: '从客居、附庸的被动地位入手，趁隙渗透、步步为营，最终反客为主、掌握主动权。袁绍以客将身份借韩馥之地立足，渐握军政实权，终迫韩馥让出冀州，反客为主，鸠占鹊巢。',
    image: 'img-30.png',
    prompt: 'Traditional Chinese ink wash painting. A guest who arrived humbly at a host\'s hall now seated in the master\'s chair, while the former host stands aside diminished. Shift of power composition, the central seat emphasized, subtle reversal of postures, dignified interior in ink, vermilion seal, aged paper, atmosphere of quiet usurpation.'
  },

  // ───────────────── 第六套 · 败战计 ─────────────────
  {
    id: 31, group: '败战计', name: '美人计', pinyin: 'měi rén jì',
    meaning: '以柔克刚，从内部瓦解强敌的意志。',
    original: '兵强者，攻其将；将智者，伐其情。将弱兵颓，其势自萎。利用御寇，顺相保也。',
    notes: [
      { char: '伐其情', pinyin: 'fá qí qíng', note: '攻击瓦解其情志、意志。' },
      { char: '颓', pinyin: 'tuí', note: '颓废、消沉。' },
      { char: '萎', pinyin: 'wěi', note: '萎靡、衰败。' },
    ],
    translation: '对于兵力强大的敌人，要设法制服其将帅；对于足智多谋的将帅，则要设法消磨其意志情志。将帅斗志衰退、士兵萎靡，敌人的气势自然衰败。善用此法以柔制敌、御退强寇，便能顺势保全自己。',
    annotation: '兵强将智，不可以敌，势必事之。事之以土地，以增其势，如六国之事秦……',
    analysis: '对实力强大、难以正面取胜之敌，从其将帅的意志、私欲入手，以美色软化、内部瓦解。越王勾践献西施于吴王夫差，使其沉湎声色、荒废国政、疏远忠良，吴国日衰，终为越所灭。',
    image: 'img-31.png',
    prompt: 'Traditional Chinese ink wash painting. An elegant court beauty in flowing silk dancing before an enchanted king in a lavish palace, his weapons and state documents cast aside and forgotten. Graceful figure in fine line brushwork, intoxicating banquet atmosphere, decline hidden in luxury, soft warm ink tones, vermilion seal, aged silk texture.'
  },
  {
    id: 32, group: '败战计', name: '空城计', pinyin: 'kōng chéng jì',
    meaning: '兵力空虚时故意示弱以虚，使敌生疑不进。',
    original: '虚者虚之，疑中生疑；刚柔之际，奇而复奇。',
    notes: [
      { char: '虚者虚之', pinyin: 'xū zhě xū zhī', note: '兵力本已空虚，却更显其空虚。' },
      { char: '疑中生疑', pinyin: 'yí zhōng shēng yí', note: '在敌人疑虑之上再添疑虑。' },
      { char: '奇', pinyin: 'qí', note: '出人意料的奇险之策。' },
    ],
    translation: '本来兵力空虚，却故意把空虚的样子更公开地显露出来，使本就多疑的敌人更加疑惑不定。在己方刚柔（强弱）转换的关头，这是奇险之中又出奇险的险招。',
    annotation: '虚虚实实，兵无常势。虚而示虚，诸葛而后，不乏其人。',
    analysis: '在己方无力御敌的危急关头，故意暴露“空虚”，以镇定坦然之态制造疑阵，使谨慎多疑之敌不敢贸然进攻。诸葛亮失街亭后，于西城兵微将寡之际大开城门、焚香抚琴，司马懿疑有伏兵，引兵而退，是为“空城计”。',
    image: 'img-32.png',
    prompt: 'Traditional Chinese ink wash painting. A lone strategist in robes calmly playing a guqin atop an open, undefended city gate, while a vast suspicious army hesitates below. Wide-open empty gate, two old servants sweeping, eerie calm versus massed troops, tension of bluff, misty city walls, vermilion seal, aged paper, iconic Three Kingdoms scene.'
  },
  {
    id: 33, group: '败战计', name: '反间计', pinyin: 'fǎn jiàn jì',
    meaning: '利用敌方间谍或制造矛盾，使敌自相猜疑。',
    original: '疑中之疑。比之自内，不自失也。',
    notes: [
      { char: '间', pinyin: 'jiàn', note: '离间、间谍。' },
      { char: '疑中之疑', pinyin: 'yí zhōng zhī yí', note: '在敌人的疑阵中再布疑阵。' },
      { char: '比之自内', pinyin: 'bǐ zhī zì nèi', note: '《易经》比卦语，从敌人内部下手。' },
    ],
    translation: '在敌人布下的疑阵之中再巧施疑计，将计就计、从其内部加以离间。如此既能瓦解敌人，又不致使自己蒙受损失。',
    annotation: '间者，使敌自相疑忌也；反间者，因敌之间而间之也。',
    analysis: '利用敌方派来的间谍为我所用，或散布假情报，制造敌方内部猜忌、自相残杀。赤壁之战前，周瑜故意设宴并伪造书信，诱使蒋干盗书，致曹操误杀深谙水战的蔡瑁、张允，自毁水军主将，即“反间计”。',
    image: 'img-33.png',
    prompt: 'Traditional Chinese ink wash painting. A spy secretly stealing a planted forged letter from a sleeping host\'s desk by candlelight, falling into a trap. Dim flickering candle, a deceptive document, stealthy posture, web of suspicion implied, deep shadows in ink, vermilion seal, aged paper, atmosphere of intrigue and double-cross.'
  },
  {
    id: 34, group: '败战计', name: '苦肉计', pinyin: 'kǔ ròu jì',
    meaning: '故意自伤以取信于敌，行间谍诈降之实。',
    original: '人不自害，受害必真；假真真假，间以得行。童蒙之吉，顺以巽也。',
    notes: [
      { char: '苦肉', pinyin: 'kǔ ròu', note: '故意伤害自己的身体。' },
      { char: '间', pinyin: 'jiàn', note: '此处指离间、诈降的计谋得以施行。' },
      { char: '巽', pinyin: 'xùn', note: '《易经》巽卦，顺从、潜伏之意。' },
    ],
    translation: '人一般不会自己伤害自己，所以一旦“受害”，敌人便信以为真。利用这种心理，真真假假、虚实交织，离间诈降之计便能顺利施行。这正合“蒙昧者顺从而受惠”之吉象——以柔顺潜伏取信于敌。',
    annotation: '间者，使敌人相疑也；反间者，因敌之间而间之也；苦肉者，自害以取信也。',
    analysis: '故意自我伤害、制造受迫害的假象，骗取敌人信任，以行诈降、卧底之实。赤壁之战，老将黄盖与周瑜定计，当众受重责杖刑、佯装怨恨而诈降曹操，曹操深信不疑，黄盖遂得以火船突袭，火烧赤壁。',
    image: 'img-34.png',
    prompt: 'Traditional Chinese ink wash painting. An old general kneeling and being flogged before the assembled troops, bloodied but resolute, secretly part of a deception plan. Public punishment scene, restrained depiction of suffering, hidden determination in the face, somber ink tones with faint blood-red accents, vermilion seal, aged paper, dramatic sacrifice.'
  },
  {
    id: 35, group: '败战计', name: '连环计', pinyin: 'lián huán jì',
    meaning: '多计连用、环环相扣，使敌自累而溃。',
    original: '将多兵众，不可以敌，使其自累，以杀其势。在师中吉，承天宠也。',
    notes: [
      { char: '连环', pinyin: 'lián huán', note: '一计扣一计、接连使用。' },
      { char: '自累', pinyin: 'zì lèi', note: '使敌自我牵制、自相拖累。' },
      { char: '杀其势', pinyin: 'shā qí shì', note: '削弱、消减敌人的气势。' },
    ],
    translation: '当敌人将广兵多、不可力敌之时，应当设法使它自我牵制、自相拖累，从而削弱它的气势。能在用兵中善用此法而得当，便如得天佑助、吉利无虞。',
    annotation: '大凡用计者，非一计之可孤行，必有数计以辅之也。如庞统使曹操战舰勾连，而后纵火焚之。',
    analysis: '一计套一计、数计连环并用，使敌彼此牵制、漏洞百出，再一举击破。赤壁之战，王允先以貂蝉行美人计离间董卓吕布，又设连环；庞统则诱曹操铁索连船，黄盖火攻，环环相扣，终破曹军。',
    image: 'img-35.png',
    prompt: 'Traditional Chinese ink wash painting. A fleet of warships chained together by heavy iron links on a great river at dusk, soon to be engulfed in fire. Long row of bound ships, ominous calm before disaster, iron chains rendered in dark ink, distant fire-boat approaching, smoky orange horizon, vermilion seal, aged paper, epic foreboding.'
  },
  {
    id: 36, group: '败战计', name: '走为上', pinyin: 'zǒu wéi shàng',
    meaning: '全局不利时主动撤退，保存实力以图再起。',
    original: '全师避敌。左次无咎，未失常也。',
    notes: [
      { char: '走', pinyin: 'zǒu', note: '撤退、退却（非败逃）。' },
      { char: '全师', pinyin: 'quán shī', note: '保全军队的实力。' },
      { char: '左次无咎', pinyin: 'zuǒ cì wú jiù', note: '《易经》师卦语，退守驻扎而无过失。' },
    ],
    translation: '在敌强我弱、全局明显不利的形势下，主动撤退、保全军队实力以避开强敌，是上策。正如师卦所示，适时退守驻扎并无过错，这并不违背用兵的常理。',
    annotation: '敌势全胜，我不能战，则：必降、必和、必走。降则全败，和则半败，走则未败。未败者，胜之转机也。',
    analysis: '三十六计的总诀。当形势极端不利、无法取胜时，主动、有计划地撤退，保存实力、避免决战，方能留得青山、伺机再起——“走”不是逃，而是为转败为胜创造条件。',
    image: 'img-36.png',
    prompt: 'Traditional Chinese ink wash landscape. A general leading his orderly army in a calm, deliberate retreat along a winding mountain road into the misty distance at dawn, banners intact, preserving strength. Vast serene mountains, a disciplined column not a rout, sense of wisdom in withdrawal, soft dawn ink tones, hopeful horizon, vermilion seal, aged paper.'
  },
];

// 导出（浏览器全局 + 可选模块）
if (typeof window !== 'undefined') {
  window.GROUPS = GROUPS;
  window.STRATAGEMS = STRATAGEMS;
}
