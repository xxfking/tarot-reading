import type { CardTranslation } from './index';

export const frCardTranslations: Record<number, CardTranslation> = {
  // ===== ARCANES MAJEURS (0-21) =====

  0: {
    name: 'Le Mat',
    keywords: {
      upright: ['innocence', 'spontaneite', 'nouveaux departs', 'liberte', 'aventure'],
      reversed: ['imprudence', 'inconscience', 'prise de risque', 'folie'],
    },
    description: {
      upright:
        "Le Mat symbolise un nouveau depart empreint d'innocence et de spontaneite. Il vous invite a faire confiance a la vie et a vous lancer dans l'inconnu avec un coeur ouvert. C'est le moment d'embrasser la liberte et de suivre votre instinct sans crainte.",
      reversed:
        "Le Mat renverse met en garde contre l'imprudence et le manque de reflexion. Vous prenez peut-etre des risques inconsideres sans mesurer les consequences. Il est temps de ralentir et d'evaluer la situation avant d'agir.",
    },
  },

  1: {
    name: 'Le Bateleur',
    keywords: {
      upright: ['habilete', 'creativite', 'volonte', 'initiative', 'potentiel'],
      reversed: ['manipulation', 'illusion', 'manque de confiance', 'talents gaspilles'],
    },
    description: {
      upright:
        "Le Bateleur represente la maitrise de ses outils et la capacite de manifester ses desirs dans le monde reel. Vous disposez de toutes les ressources necessaires pour reussir. C'est le moment d'agir avec confiance et de mettre vos talents au service de vos ambitions.",
      reversed:
        "Le Bateleur renverse indique une mauvaise utilisation de vos dons ou une tendance a la manipulation. Vos talents restent inexploites par manque de confiance ou de direction. Prenez garde aux illusions que vous vous creez ou que d'autres projettent sur vous.",
    },
  },

  2: {
    name: 'La Papesse',
    keywords: {
      upright: ['intuition', 'sagesse interieure', 'mystere', 'connaissance cachee', 'patience'],
      reversed: ['secrets', 'deconnexion', 'superficialite', 'ignorance'],
    },
    description: {
      upright:
        "La Papesse vous invite a ecouter votre voix interieure et a faire confiance a votre intuition profonde. Elle represente la sagesse qui ne peut etre acquise que par la contemplation et le silence. Les reponses que vous cherchez se trouvent deja en vous.",
      reversed:
        "La Papesse renversee signale une deconnexion avec votre intuition et votre monde interieur. Vous ignorez peut-etre des verites importantes ou vous vous laissez guider uniquement par la logique. Prenez le temps de vous reconnecter a votre sagesse interieure.",
    },
  },

  3: {
    name: "L'Imperatrice",
    keywords: {
      upright: ['abondance', 'fertilite', 'creativite', 'nature', 'sensualite'],
      reversed: ['dependance', 'etouffement', 'blocage creatif', 'insecurite'],
    },
    description: {
      upright:
        "L'Imperatrice incarne l'abondance, la fertilite et la puissance creatrice feminine. Elle annonce une periode de croissance, de prosperite et d'epanouissement dans tous les domaines de votre vie. Laissez-vous porter par le flux naturel de la creation et de la beaute.",
      reversed:
        "L'Imperatrice renversee peut indiquer un blocage creatif ou une dependance affective excessive. Vous etouffez peut-etre vos proches ou vous-meme par un exces de protection. Il est temps de retrouver un equilibre entre donner et recevoir.",
    },
  },

  4: {
    name: "L'Empereur",
    keywords: {
      upright: ['autorite', 'structure', 'stabilite', 'leadership', 'protection'],
      reversed: ['rigidite', 'tyrannie', 'exces de controle', 'inflexibilite'],
    },
    description: {
      upright:
        "L'Empereur represente l'autorite bienveillante, la structure et la stabilite. Il vous encourage a etablir des fondations solides et a prendre le controle de votre vie avec discipline. C'est le moment d'affirmer votre leadership et de poser des limites claires.",
      reversed:
        "L'Empereur renverse met en garde contre l'autoritarisme et la rigidite excessive. Vous exercez peut-etre un controle excessif sur votre entourage ou vous subissez une domination injuste. Apprenez a assouplir votre approche et a lacher prise.",
    },
  },

  5: {
    name: 'Le Pape',
    keywords: {
      upright: ['tradition', 'enseignement', 'spiritualite', 'guidance', 'conformite'],
      reversed: ['dogmatisme', 'rebellion', 'non-conformisme', 'remise en question'],
    },
    description: {
      upright:
        "Le Pape symbolise la transmission du savoir et la sagesse spirituelle. Il vous invite a chercher un guide ou un mentor, ou a devenir vous-meme une source d'enseignement pour les autres. C'est un moment propice a l'apprentissage et a l'approfondissement de vos croyances.",
      reversed:
        "Le Pape renverse peut indiquer un rejet des traditions ou une remise en question des institutions etablies. Vous etes peut-etre en conflit avec les normes sociales ou religieuses. Il est temps de trouver votre propre chemin spirituel, libere des dogmes.",
    },
  },

  6: {
    name: "L'Amoureux",
    keywords: {
      upright: ['amour', 'choix', 'union', 'harmonie', 'valeurs'],
      reversed: ['desaccord', 'desequilibre', 'mauvais choix', 'tentations'],
    },
    description: {
      upright:
        "L'Amoureux represente l'amour authentique, les choix du coeur et l'alignement avec vos valeurs profondes. Cette carte annonce une union harmonieuse ou un choix important qui reflete votre verite interieure. Suivez votre coeur avec sincerite et courage.",
      reversed:
        "L'Amoureux renverse signale un conflit interieur, un desaccord ou un choix difficile entre deux voies. Vous etes peut-etre tiraille entre le desir et la raison, ou vous vivez un desequilibre dans vos relations. Prenez le temps de clarifier vos veritables valeurs.",
    },
  },

  7: {
    name: 'Le Chariot',
    keywords: {
      upright: ['victoire', 'determination', 'conquete', 'avancee', 'maitrise de soi'],
      reversed: ['echec', 'manque de direction', 'agressivite', 'perte de controle'],
    },
    description: {
      upright:
        "Le Chariot annonce une victoire obtenue par la determination et la maitrise de soi. Vous avez la force interieure necessaire pour surmonter tous les obstacles sur votre chemin. Avancez avec confiance et resolvez les tensions opposees en votre faveur.",
      reversed:
        "Le Chariot renverse indique une perte de direction ou un manque de controle sur votre trajectoire. Vos efforts sont peut-etre disperses ou votre agressivite nuit a votre progression. Retrouvez votre equilibre interieur avant de reprendre la route.",
    },
  },

  8: {
    name: 'La Force',
    keywords: {
      upright: ['courage', 'force interieure', 'compassion', 'patience', 'douceur'],
      reversed: ['faiblesse', 'doute de soi', 'brutalite', 'manque de maitrise'],
    },
    description: {
      upright:
        "La Force vous rappelle que le veritable courage reside dans la douceur et la compassion. Elle symbolise la maitrise de vos instincts par la patience plutot que par la violence. Faites preuve de force interieure et apprivoisez vos peurs avec bienveillance.",
      reversed:
        "La Force renversee revele un manque de confiance en soi ou une incapacite a maitriser ses emotions. Vous cedez peut-etre a la brutalite ou, au contraire, vous vous sentez impuissant face aux defis. Retrouvez votre force interieure par l'acceptation de vous-meme.",
    },
  },

  9: {
    name: "L'Hermite",
    keywords: {
      upright: ['introspection', 'solitude', 'recherche de verite', 'sagesse', 'guidance interieure'],
      reversed: ['isolement', 'solitude excessive', 'repli sur soi', 'refus d\'aide'],
    },
    description: {
      upright:
        "L'Hermite vous invite a un temps de retrait et d'introspection pour trouver vos propres reponses. La solitude choisie est une source de sagesse et d'illumination interieure. Prenez le temps de mediter et de vous reconnecter a votre lumiere interieure.",
      reversed:
        "L'Hermite renverse avertit que votre isolement devient excessif et nuit a votre bien-etre. Vous fuyez peut-etre le monde par peur plutot que par choix conscient. Il est temps de sortir de votre coquille et d'accepter l'aide et la compagnie des autres.",
    },
  },

  10: {
    name: 'La Roue de Fortune',
    keywords: {
      upright: ['destin', 'cycles', 'changement', 'chance', 'tournant'],
      reversed: ['malchance', 'resistance au changement', 'stagnation', 'revers'],
    },
    description: {
      upright:
        "La Roue de Fortune annonce un tournant decisif dans votre existence. Les cycles de la vie tournent en votre faveur et de nouvelles opportunites se presentent. Acceptez les changements avec grace car ils font partie du grand cycle de l'evolution.",
      reversed:
        "La Roue de Fortune renversee indique une periode de revers ou de stagnation. Vous resistez peut-etre aux changements necessaires dans votre vie. Rappelez-vous que meme les periodes difficiles sont temporaires et que la roue continuera de tourner.",
    },
  },

  11: {
    name: 'La Justice',
    keywords: {
      upright: ['equite', 'verite', 'loi', 'equilibre', 'responsabilite'],
      reversed: ['injustice', 'malhonnetete', 'desequilibre', 'prejudice'],
    },
    description: {
      upright:
        "La Justice represente l'equite, la verite et la responsabilite de vos actes. Les consequences de vos choix passees se manifestent et l'equilibre est retabli. Agissez avec integrite et acceptez les resultats avec objectivite et honnete.",
      reversed:
        "La Justice renversee met en evidence une situation d'injustice ou de malhonnetete. Vous subissez peut-etre un traitement inegal ou vous evitez de faire face a vos responsabilites. Il est temps de retablir l'equilibre et de faire preuve de transparence.",
    },
  },

  12: {
    name: 'Le Pendu',
    keywords: {
      upright: ['sacrifice', 'lacher-prise', 'suspension', 'changement de perspective', 'patience'],
      reversed: ['resistance', 'sacrifice inutile', 'stagnation', 'egoisme'],
    },
    description: {
      upright:
        "Le Pendu vous invite a voir les choses sous un angle completement nouveau. En acceptant de suspendre votre course et de lacher prise, vous accedez a une sagesse inaccessible autrement. Le sacrifice consenti aujourd'hui ouvrira des portes demain.",
      reversed:
        "Le Pendu renverse indique une resistance au changement de perspective necessaire. Vous vous accrochez a des habitudes ou des croyances qui ne vous servent plus. Cessez de vous sacrifier inutilement et apprenez a lacher prise veritablement.",
    },
  },

  13: {
    name: 'L\'Arcane sans Nom',
    keywords: {
      upright: ['transformation', 'fin', 'renouveau', 'transition', 'liberation'],
      reversed: ['resistance au changement', 'peur de la fin', 'stagnation', 'attachement'],
    },
    description: {
      upright:
        "L'Arcane sans Nom annonce une transformation profonde et necessaire. Une phase de votre vie se termine pour laisser place a un renouveau. Acceptez cette transition comme une liberation qui vous permettra de renaitre plus fort et plus sage.",
      reversed:
        "L'Arcane sans Nom renverse revele une resistance obstinee face aux changements inevitables. Votre peur de la fin ou de la perte vous empeche d'evoluer. Apprenez a lacher prise sur ce qui doit partir pour accueillir ce qui doit venir.",
    },
  },

  14: {
    name: 'Temperance',
    keywords: {
      upright: ['equilibre', 'harmonie', 'patience', 'moderation', 'guerison'],
      reversed: ['exces', 'desequilibre', 'impatience', 'discorde'],
    },
    description: {
      upright:
        "Temperance vous invite a trouver l'equilibre et l'harmonie dans tous les aspects de votre vie. La moderation et la patience sont vos meilleurs allies en ce moment. Melangez les opposees avec grace pour creer une synthese harmonieuse et guerissante.",
      reversed:
        "Temperance renversee signale un manque d'equilibre ou des exces dans votre vie. L'impatience et la discorde perturbent votre harmonie interieure. Retrouvez le chemin de la moderation et prenez soin de restaurer votre equilibre interieur.",
    },
  },

  15: {
    name: 'Le Diable',
    keywords: {
      upright: ['tentation', 'attachement', 'dependance', 'materialisme', 'ombre'],
      reversed: ['liberation', 'rupture des chaines', 'prise de conscience', 'detachement'],
    },
    description: {
      upright:
        "Le Diable met en lumiere les chaines invisibles qui vous retiennent prisonnier: dependances, attachements malsains ou desirs obsessionnels. Cette carte vous invite a examiner honnement ce qui vous asservit. Reconnaissez vos ombres pour mieux vous en liberer.",
      reversed:
        "Le Diable renverse annonce une liberation des chaines qui vous retenaient. Vous prenez conscience de vos dependances et trouvez la force de vous en affranchir. C'est un moment de grande emancipation et de reconquete de votre liberte interieure.",
    },
  },

  16: {
    name: 'La Maison Dieu',
    keywords: {
      upright: ['destruction', 'revelation', 'bouleversement', 'liberation soudaine', 'eveil'],
      reversed: ['catastrophe evitee', 'resistance au changement', 'peur de la ruine', 'reconstruction'],
    },
    description: {
      upright:
        "La Maison Dieu annonce un bouleversement soudain qui ebranle vos certitudes et vos structures etablies. Bien que destructrice en apparence, cette secousse est necessaire pour vous liberer de ce qui etait devenu une prison. L'eclair de verite illumine ce qui etait cache.",
      reversed:
        "La Maison Dieu renversee indique que vous evitez ou retardez une destruction necessaire. Vous vous accrochez desesperement a des structures qui menacent de s'effondrer. Acceptez la necessite du changement avant qu'il ne s'impose de maniere encore plus brutale.",
    },
  },

  17: {
    name: "L'Etoile",
    keywords: {
      upright: ['espoir', 'inspiration', 'serenite', 'renouveau', 'guidance celeste'],
      reversed: ['desespoir', 'deception', 'perte de foi', 'decouragement'],
    },
    description: {
      upright:
        "L'Etoile brille comme un phare d'espoir et d'inspiration apres les epreuves. Elle symbolise la serenite retrouvee et la foi en l'avenir. Ouvrez votre coeur a la beaute du monde et laissez-vous guider par cette lumiere celeste bienveillante.",
      reversed:
        "L'Etoile renversee revele une perte de foi et un sentiment de desespoir. Vous avez du mal a voir la lumiere au bout du tunnel et le decouragement vous gagne. N'oubliez pas que meme dans l'obscurite la plus profonde, l'espoir persiste.",
    },
  },

  18: {
    name: 'La Lune',
    keywords: {
      upright: ['illusion', 'inconscient', 'intuition', 'reves', 'mystere'],
      reversed: ['confusion', 'peurs irrationnelles', 'tromperie revelee', 'clarte'],
    },
    description: {
      upright:
        "La Lune vous plonge dans le monde de l'inconscient, des reves et des illusions. Les choses ne sont pas ce qu'elles semblent etre et votre intuition est votre meilleur guide dans cette obscurite. Explorez vos profondeurs avec courage mais restez vigilant face aux mirages.",
      reversed:
        "La Lune renversee annonce la dissipation des illusions et le retour a la clarte. Les peurs irrationnelles qui vous paralysaient commencent a se dissoudre. La verite emerge enfin des brumes de la confusion et vous pouvez voir les choses telles qu'elles sont.",
    },
  },

  19: {
    name: 'Le Soleil',
    keywords: {
      upright: ['joie', 'succes', 'vitalite', 'epanouissement', 'clarte'],
      reversed: ['tristesse passagere', 'ego excessif', 'optimisme aveugle', 'retard de succes'],
    },
    description: {
      upright:
        "Le Soleil rayonne de joie, de succes et de vitalite. C'est une periode de bonheur authentique et d'epanouissement total ou tout semble enfin s'eclairer. Profitez de cette lumiere bienfaisante et partagez votre rayonnement avec le monde entier.",
      reversed:
        "Le Soleil renverse indique une joie temporairement voilee ou un optimisme excessif qui vous aveugle. Le succes est retarde mais pas annule. Retrouvez une perspective realiste tout en gardant foi en votre capacite a briller.",
    },
  },

  20: {
    name: 'Le Jugement',
    keywords: {
      upright: ['renaissance', 'appel interieur', 'absolution', 'evaluation', 'eveil'],
      reversed: ['doute de soi', 'refus de l\'appel', 'regrets', 'auto-critique excessive'],
    },
    description: {
      upright:
        "Le Jugement sonne l'heure du bilan et de la renaissance spirituelle. Un appel profond resonne en vous, vous invitant a vous elever au-dessus de vos limitations passees. C'est le moment de repondre a votre vocation et d'embrasser votre transformation finale.",
      reversed:
        "Le Jugement renverse indique que vous refusez d'entendre l'appel au changement ou que vous etes paralyse par les regrets. L'auto-critique excessive vous empeche d'avancer et de vous pardonner. Liberez-vous du poids du passe pour accueillir votre renouveau.",
    },
  },

  21: {
    name: 'Le Monde',
    keywords: {
      upright: ['accomplissement', 'plenitude', 'integration', 'voyage', 'aboutissement'],
      reversed: ['inachevement', 'manque de cloture', 'stagnation', 'objectifs non atteints'],
    },
    description: {
      upright:
        "Le Monde represente l'accomplissement supreme et l'aboutissement d'un cycle majeur. Vous atteignez un niveau de plenitude et d'integration remarquable. Celebrez cette reussite totale et preparez-vous a entamer un nouveau chapitre de votre existence avec sagesse.",
      reversed:
        "Le Monde renverse signale un sentiment d'inachevement ou un cycle qui peine a se clore. Les objectifs que vous visiez restent hors de portee malgre vos efforts. Identifiez ce qui manque pour completer votre parcours et trouver la cloture tant attendue.",
    },
  },

  // ===== BATONS (22-35) =====

  22: {
    name: 'As de Batons',
    keywords: {
      upright: ['inspiration', 'creation', 'nouveau depart', 'potentiel', 'enthousiasme'],
      reversed: ['retards', 'manque de motivation', 'faux depart', 'hesitation'],
    },
    description: {
      upright:
        "L'As de Batons annonce une vague d'inspiration et d'energie creatrice. Un nouveau projet ou une opportunite passionnante se presente a vous. Saisissez cette etincelle de potentiel et lancez-vous avec enthousiasme et determination.",
      reversed:
        "L'As de Batons renverse indique un manque de motivation ou des retards dans le demarrage d'un projet. L'inspiration tarde a venir ou se dissipe avant de se concretiser. Prenez le temps de clarifier vos intentions avant de vous engager.",
    },
  },

  23: {
    name: 'Deux de Batons',
    keywords: {
      upright: ['planification', 'decisions', 'vision', 'ambition', 'exploration'],
      reversed: ['indecision', 'peur de l\'inconnu', 'manque de vision', 'imprevus'],
    },
    description: {
      upright:
        "Le Deux de Batons vous place a un carrefour ou de grandes decisions doivent etre prises. Votre vision s'etend au-dela de vos horizons habituels et l'exploration vous appelle. C'est le moment de planifier avec ambition et de choisir votre direction avec audace.",
      reversed:
        "Le Deux de Batons renverse revele une indecision paralysante ou une peur de quitter votre zone de confort. Votre manque de vision vous empeche de progresser. Surmontez vos hesitations et osez regarder au-dela de vos limites actuelles.",
    },
  },

  24: {
    name: 'Trois de Batons',
    keywords: {
      upright: ['expansion', 'prevoyance', 'opportunites', 'leadership', 'progres'],
      reversed: ['obstacles', 'retards', 'manque de preparation', 'frustration'],
    },
    description: {
      upright:
        "Le Trois de Batons confirme que vos projets prennent forme et que l'expansion est en marche. Vos efforts commencent a porter leurs fruits et de nouvelles opportunites se profilent a l'horizon. Gardez une vision claire et continuez a avancer avec prevoyance.",
      reversed:
        "Le Trois de Batons renverse signale des obstacles inattendus ou des retards frustrante dans la realisation de vos plans. Votre manque de preparation nuit a votre progression. Revisitez votre strategie et renforcez vos fondations avant de poursuivre.",
    },
  },

  25: {
    name: 'Quatre de Batons',
    keywords: {
      upright: ['celebration', 'harmonie', 'foyer', 'stabilite', 'reunion'],
      reversed: ['conflit familial', 'instabilite', 'manque d\'harmonie', 'transition difficile'],
    },
    description: {
      upright:
        "Le Quatre de Batons celebre l'harmonie domestique et les reussites partagees. C'est un moment de joie, de reunion et de stabilite dans votre foyer. Profitez de cette periode de celebration et renforcez les liens qui vous unissent a vos proches.",
      reversed:
        "Le Quatre de Batons renverse indique des tensions au sein du foyer ou un manque d'harmonie dans votre environnement. Une transition difficile affecte votre sentiment de stabilite. Travaillez a retablir la paix et la communication dans votre vie domestique.",
    },
  },

  26: {
    name: 'Cinq de Batons',
    keywords: {
      upright: ['conflit', 'competition', 'rivalite', 'tension', 'desaccord'],
      reversed: ['evitement du conflit', 'compromis', 'resolution', 'conflits internes'],
    },
    description: {
      upright:
        "Le Cinq de Batons revele une periode de conflit, de competition et de rivalite. Les tensions et les desaccords sont au premier plan et chacun defend son territoire. Transformez cette energie combative en motivation positive et cherchez le depassement plutot que la destruction.",
      reversed:
        "Le Cinq de Batons renverse suggere un evitement des conflits necessaires ou la recherche d'un compromis. Les rivalites externes s'apaisent mais les conflits interieurs persistent. Trouvez le courage d'aborder les desaccords de maniere constructive.",
    },
  },

  27: {
    name: 'Six de Batons',
    keywords: {
      upright: ['victoire', 'reconnaissance', 'triomphe', 'fierte', 'progres'],
      reversed: ['orgueil', 'echec public', 'manque de reconnaissance', 'arrogance'],
    },
    description: {
      upright:
        "Le Six de Batons celebre une victoire eclatante et la reconnaissance de vos merites. Votre entourage vous acclame et vos efforts sont enfin recompenses. Savourez ce triomphe avec humilite et gratitude tout en avancant vers de nouveaux defis.",
      reversed:
        "Le Six de Batons renverse avertit contre l'orgueil excessif ou un echec aux yeux du public. La reconnaissance que vous esperiez tarde a venir ou se transforme en critique. Restez humble et n'attachez pas votre valeur au regard des autres.",
    },
  },

  28: {
    name: 'Sept de Batons',
    keywords: {
      upright: ['defense', 'perseverance', 'defi', 'courage', 'resilience'],
      reversed: ['abandon', 'epuisement', 'capitulation', 'submersion'],
    },
    description: {
      upright:
        "Le Sept de Batons vous appelle a defendre vos positions avec courage et perseverance. Vous faites face a des defis et des oppositions mais vous avez la force de tenir bon. Restez ferme dans vos convictions et ne cedez pas sous la pression.",
      reversed:
        "Le Sept de Batons renverse revele un epuisement face aux batailles incessantes. Vous envisagez peut-etre d'abandonner la lutte par fatigue ou decouragement. Evaluez si le combat en vaut la peine ou s'il est plus sage de battre en retraite strategiquement.",
    },
  },

  29: {
    name: 'Huit de Batons',
    keywords: {
      upright: ['rapidite', 'mouvement', 'action', 'progres rapide', 'nouvelles'],
      reversed: ['retards', 'precipitation', 'freins', 'dispersion'],
    },
    description: {
      upright:
        "Le Huit de Batons annonce une acceleration soudaine des evenements et un progres rapide. Les choses bougent enfin dans la bonne direction avec une energie dynamique. Profitez de cet elan pour avancer vite mais gardez le cap sur vos objectifs.",
      reversed:
        "Le Huit de Batons renverse signale des retards frustrants ou une precipitation qui mene a des erreurs. L'energie est dispersee et vos actions manquent de cohesion. Ralentissez et canalisez votre energie pour retrouver une progression harmonieuse.",
    },
  },

  30: {
    name: 'Neuf de Batons',
    keywords: {
      upright: ['resilience', 'determination', 'endurance', 'derniere epreuve', 'vigilance'],
      reversed: ['epuisement', 'paranoia', 'obstination', 'refus de lacher prise'],
    },
    description: {
      upright:
        "Le Neuf de Batons represente la resilience face a la derniere epreuve avant la victoire. Vous etes fatigue mais vous tenez bon avec une determination inebranlable. Gardez courage car la ligne d'arrivee est plus proche que vous ne le pensez.",
      reversed:
        "Le Neuf de Batons renverse indique un epuisement profond ou une paranoia qui vous pousse a vous battre contre des ennemis imaginaires. Votre obstination vous nuit plus qu'elle ne vous sert. Acceptez de demander de l'aide et de vous reposer.",
    },
  },

  31: {
    name: 'Dix de Batons',
    keywords: {
      upright: ['fardeau', 'responsabilite', 'surmenage', 'effort', 'accomplissement difficile'],
      reversed: ['delegation', 'liberation', 'epuisement total', 'refus du fardeau'],
    },
    description: {
      upright:
        "Le Dix de Batons symbolise un fardeau lourd a porter, consequence de vos nombreuses responsabilites. Vous approchez de la destination mais le poids de vos obligations est ecrasant. Perseverez encore un peu mais apprenez aussi a deleguer et a partager la charge.",
      reversed:
        "Le Dix de Batons renverse annonce soit une liberation des fardeaux excessifs, soit un effondrement sous leur poids. Vous refusez peut-etre de continuer a porter seul toutes ces responsabilites. C'est le moment de lacher du lest et de redistribuer les charges.",
    },
  },

  32: {
    name: 'Valet de Batons',
    keywords: {
      upright: ['exploration', 'enthousiasme', 'decouverte', 'message', 'potentiel'],
      reversed: ['immaturite', 'impatience', 'manque de direction', 'idees superficielles'],
    },
    description: {
      upright:
        "Le Valet de Batons incarne l'enthousiasme juvenil et l'esprit d'exploration. Un message ou une opportunite stimulante se presente, eveillant votre curiosite et votre creativite. Accueillez cette nouvelle aventure avec l'ouverture d'esprit et la passion de la jeunesse.",
      reversed:
        "Le Valet de Batons renverse revele une immaturite dans l'approche de vos projets ou une impatience destructrice. Vos idees restent superficielles faute d'engagement serieux. Approfondissez votre reflexion et canalisez votre enthousiasme de maniere productive.",
    },
  },

  33: {
    name: 'Cavalier de Batons',
    keywords: {
      upright: ['action', 'aventure', 'passion', 'impulsivite', 'voyage'],
      reversed: ['precipitation', 'frustration', 'retards', 'imprevisibilite'],
    },
    description: {
      upright:
        "Le Cavalier de Batons charge en avant avec une energie passionnee et un desir d'aventure irresistible. Il annonce des voyages, des actions audacieuses et une poursuite energique de vos objectifs. Laissez votre passion vous guider mais gardez un minimum de prudence.",
      reversed:
        "Le Cavalier de Batons renverse met en garde contre la precipitation et l'impulsivite excessive. Votre impatience cause des frustrations et des erreurs evitables. Apprenez a temperer votre fougue et a reflechir avant d'agir pour eviter de bruler les etapes.",
    },
  },

  34: {
    name: 'Reine de Batons',
    keywords: {
      upright: ['confiance', 'charisme', 'determination', 'independance', 'chaleur'],
      reversed: ['jalousie', 'autoritarisme', 'egocentrisme', 'insecurite'],
    },
    description: {
      upright:
        "La Reine de Batons rayonne de confiance et de charisme naturel. Elle incarne une femme independante et determinee qui inspire les autres par sa chaleur et son courage. Embrassez votre pouvoir personnel avec grace et guidez les autres par l'exemple.",
      reversed:
        "La Reine de Batons renversee peut indiquer une jalousie destructrice ou un autoritarisme qui etouffe l'entourage. L'insecurite se cache derriere une facade de confiance. Apprenez a briller sans diminuer les autres et retrouvez une assurance authentique.",
    },
  },

  35: {
    name: 'Roi de Batons',
    keywords: {
      upright: ['leadership', 'vision', 'entrepreneuriat', 'honneur', 'autorite naturelle'],
      reversed: ['tyrannie', 'impatience', 'impulsivite', 'arrogance'],
    },
    description: {
      upright:
        "Le Roi de Batons incarne le leader visionnaire et charismatique qui mene ses projets avec autorite et honneur. Son esprit d'entreprise et sa determination sont contagieux. Prenez les commandes avec assurance et inspirez votre entourage par votre vision ambitieuse.",
      reversed:
        "Le Roi de Batons renverse represente un leader devenu tyrannique ou un entrepreneur dont l'impatience sabote ses propres projets. L'arrogance et l'impulsivite nuisent a votre credibilite. Retrouvez l'humilite et la patience necessaires au veritable leadership.",
    },
  },

  // ===== COUPES (36-49) =====

  36: {
    name: 'As de Coupes',
    keywords: {
      upright: ['amour nouveau', 'emotion', 'intuition', 'ouverture du coeur', 'joie'],
      reversed: ['vide emotionnel', 'amour bloque', 'repression', 'tristesse'],
    },
    description: {
      upright:
        "L'As de Coupes deborde d'amour, d'emotion et de joie pure. Un nouveau sentiment ou une revelation emotionnelle transforme votre coeur. Ouvrez-vous a cette vague d'amour et laissez votre intuition vous guider vers des connexions profondes et authentiques.",
      reversed:
        "L'As de Coupes renverse indique un blocage emotionnel ou un coeur ferme a l'amour. Vous reprimez peut-etre vos sentiments par peur de la vulnerabilite. Autorisez-vous a ressentir et a exprimer vos emotions pour retrouver la joie interieure.",
    },
  },

  37: {
    name: 'Deux de Coupes',
    keywords: {
      upright: ['union', 'partenariat', 'amour reciproque', 'attraction', 'harmonie'],
      reversed: ['rupture', 'desequilibre', 'mesentente', 'separation'],
    },
    description: {
      upright:
        "Le Deux de Coupes celebre l'union de deux ames et la reciprocite des sentiments. Une connexion profonde et harmonieuse se forme entre vous et une autre personne. C'est le moment ideal pour les partenariats, qu'ils soient amoureux ou professionnels.",
      reversed:
        "Le Deux de Coupes renverse signale un desequilibre dans une relation ou une rupture emotionnelle imminente. La reciprocite fait defaut et la communication s'est rompue. Evaluez honnetement si cette relation peut etre reparee ou si une separation est necessaire.",
    },
  },

  38: {
    name: 'Trois de Coupes',
    keywords: {
      upright: ['celebration', 'amitie', 'joie partagee', 'communaute', 'festivite'],
      reversed: ['exces', 'commerage', 'isolement social', 'trahison'],
    },
    description: {
      upright:
        "Le Trois de Coupes est une carte de celebration joyeuse et d'amitie sincere. Le moment est aux festivites, au partage et a la communion avec vos proches. Celebrez vos reussites en bonne compagnie et renforcez les liens d'amitie qui vous sont chers.",
      reversed:
        "Le Trois de Coupes renverse met en garde contre les exces festifs ou les dynamiques de groupe toxiques. Les commerages et les trahisons menacent vos amities. Evaluez la sincerite de votre cercle social et eloignez-vous des relations superficielles.",
    },
  },

  39: {
    name: 'Quatre de Coupes',
    keywords: {
      upright: ['meditation', 'apathie', 'introspection', 'insatisfaction', 'contemplation'],
      reversed: ['renouveau d\'interet', 'motivation retrouvee', 'gratitude', 'ouverture'],
    },
    description: {
      upright:
        "Le Quatre de Coupes revele une periode de contemplation melee d'insatisfaction. Vous vous sentez peut-etre blase ou deconnecte des opportunites qui se presentent. Prenez le temps de l'introspection mais ne laissez pas l'apathie vous faire manquer de belles chances.",
      reversed:
        "Le Quatre de Coupes renverse annonce un reveil de la motivation et un renouveau d'interet pour la vie. L'apathie se dissipe et vous retrouvez la gratitude envers ce que vous possedez deja. Ouvrez les yeux sur les opportunites qui vous entourent.",
    },
  },

  40: {
    name: 'Cinq de Coupes',
    keywords: {
      upright: ['perte', 'chagrin', 'regret', 'deuil', 'deception'],
      reversed: ['acceptation', 'guerison', 'pardon', 'avancer'],
    },
    description: {
      upright:
        "Le Cinq de Coupes exprime le chagrin et les regrets lies a une perte ou une deception. Votre attention se concentre sur ce qui a ete perdu plutot que sur ce qui reste. Accordez-vous le temps du deuil mais n'oubliez pas que des coupes pleines vous attendent encore.",
      reversed:
        "Le Cinq de Coupes renverse marque le debut de la guerison et de l'acceptation apres une periode de chagrin. Vous commencez enfin a pardonner et a tourner la page. Le moment est venu de regarder vers l'avenir avec esperance et de saisir les belles choses qui restent.",
    },
  },

  41: {
    name: 'Six de Coupes',
    keywords: {
      upright: ['nostalgie', 'souvenirs', 'innocence', 'enfance', 'generosite'],
      reversed: ['vivre dans le passe', 'idealisation', 'immaturite', 'attachement au passe'],
    },
    description: {
      upright:
        "Le Six de Coupes evoque la nostalgie tendre et les souvenirs heureux de l'enfance. Une personne ou une situation du passe refait surface, apportant douceur et reconfort. Reconnectez-vous avec votre innocence interieure et partagez votre generosite avec autrui.",
      reversed:
        "Le Six de Coupes renverse avertit contre une idealisation excessive du passe ou une incapacite a vivre dans le present. Vous vous accrochez a des souvenirs au detriment de votre evolution. Honorez votre passe mais concentrez votre energie sur le present et l'avenir.",
    },
  },

  42: {
    name: 'Sept de Coupes',
    keywords: {
      upright: ['illusion', 'fantasme', 'choix multiples', 'imagination', 'reverie'],
      reversed: ['realisme', 'clarte', 'determination', 'desillusion'],
    },
    description: {
      upright:
        "Le Sept de Coupes vous plonge dans un monde de fantasmes et de choix multiples, parfois trompeurs. Votre imagination deborde mais toutes ces possibilites ne sont pas realisables. Faites le tri entre reves realisables et pures illusions avant de vous engager.",
      reversed:
        "Le Sept de Coupes renverse annonce un retour au realisme et a la clarte apres une periode de confusion. Les illusions se dissipent et vous voyez enfin les choses telles qu'elles sont. C'est le moment de faire des choix concrets et determines.",
    },
  },

  43: {
    name: 'Huit de Coupes',
    keywords: {
      upright: ['depart', 'abandon', 'quete de sens', 'lacher prise', 'recherche interieure'],
      reversed: ['stagnation', 'peur de partir', 'attachement', 'errance'],
    },
    description: {
      upright:
        "Le Huit de Coupes vous invite a quitter une situation qui ne vous nourrit plus emotionnellement. Malgre les investissements passes, il est temps de partir en quete de quelque chose de plus profond. Ayez le courage de tourner le dos a ce qui ne vous satisfait plus.",
      reversed:
        "Le Huit de Coupes renverse revele une difficulte a quitter une situation insatisfaisante par peur de l'inconnu. Vous restez dans le confort de la familiarite malgre votre malheur. Trouvez le courage de faire le premier pas vers votre transformation.",
    },
  },

  44: {
    name: 'Neuf de Coupes',
    keywords: {
      upright: ['satisfaction', 'souhait exauce', 'contentement', 'bonheur', 'gratitude'],
      reversed: ['insatisfaction', 'materialisme', 'avidite', 'deception'],
    },
    description: {
      upright:
        "Le Neuf de Coupes est la carte du voeu exauce et de la satisfaction profonde. Vos desirs se realisent et vous goutez a un bonheur veritable et merite. Savourez ce moment de contentement avec gratitude et partagez votre abondance avec ceux qui vous entourent.",
      reversed:
        "Le Neuf de Coupes renverse indique une insatisfaction malgre l'abondance materielle ou un desir qui, une fois exauce, laisse un vide. Le materialisme ne comble pas les besoins de l'ame. Cherchez la satisfaction dans les choses simples et authentiques de la vie.",
    },
  },

  45: {
    name: 'Dix de Coupes',
    keywords: {
      upright: ['bonheur familial', 'harmonie', 'accomplissement emotionnel', 'joie durable', 'paix'],
      reversed: ['dysfonctionnement familial', 'conflits domestiques', 'valeurs brisees', 'desillusion'],
    },
    description: {
      upright:
        "Le Dix de Coupes represente le bonheur familial ultime et l'harmonie emotionnelle complete. L'amour, la paix et la joie regnent dans votre foyer et dans vos relations. Ce reve de bonheur se realise, apportant un accomplissement emotionnel profond et durable.",
      reversed:
        "Le Dix de Coupes renverse revele des dysfonctionnements familiaux ou une facade de bonheur qui se fissure. Les conflits domestiques menacent l'harmonie du foyer. Affrontez les problemes relationnels avec honnete pour reconstruire des fondations emotionnelles solides.",
    },
  },

  46: {
    name: 'Valet de Coupes',
    keywords: {
      upright: ['sensibilite', 'message emotionnel', 'creativite', 'intuition naissante', 'reverie'],
      reversed: ['immaturite emotionnelle', 'blocage creatif', 'hypersensiblite', 'caprice'],
    },
    description: {
      upright:
        "Le Valet de Coupes apporte un message empreint de sensibilite et de douceur. Il represente l'eveil d'une intuition nouvelle ou d'une creativite naissante. Accueillez ces emotions delicates avec ouverture et laissez votre imagination s'exprimer librement.",
      reversed:
        "Le Valet de Coupes renverse indique une immaturite emotionnelle ou une hypersensibilite qui vous paralyse. Vos emotions debordent sans trouver de canal d'expression constructif. Apprenez a gerer vos sentiments avec maturite tout en preservant votre sensibilite.",
    },
  },

  47: {
    name: 'Cavalier de Coupes',
    keywords: {
      upright: ['romantisme', 'proposition', 'charme', 'idealisme', 'invitation'],
      reversed: ['desillusion amoureuse', 'jalousie', 'moodiness', 'promesses non tenues'],
    },
    description: {
      upright:
        "Le Cavalier de Coupes arrive porteur d'une proposition romantique ou d'une invitation touchante. Il incarne le charme, l'idealisme et la quete de la beaute. Ouvrez votre coeur a cette energie romantique et laissez-vous porter par la magie des emotions.",
      reversed:
        "Le Cavalier de Coupes renverse met en garde contre les desillusions amoureuses et les promesses non tenues. L'idealisme cede la place a la jalousie ou a des sautes d'humeur destructrices. Gardez les pieds sur terre dans vos affaires de coeur.",
    },
  },

  48: {
    name: 'Reine de Coupes',
    keywords: {
      upright: ['compassion', 'calme interieur', 'intuition profonde', 'bienveillance', 'empathie'],
      reversed: ['dependance emotionnelle', 'martyre', 'manipulation emotionnelle', 'insecurite'],
    },
    description: {
      upright:
        "La Reine de Coupes incarne la compassion, l'intuition profonde et le calme interieur. Elle navigue dans le monde des emotions avec grace et sagesse. Connectez-vous a votre profondeur emotionnelle et offrez votre bienveillance a ceux qui en ont besoin.",
      reversed:
        "La Reine de Coupes renversee revele une dependance emotionnelle ou une tendance au sacrifice excessif de soi. Vous absorbez les souffrances des autres au detriment de votre propre bien-etre. Apprenez a poser des limites tout en restant empathique.",
    },
  },

  49: {
    name: 'Roi de Coupes',
    keywords: {
      upright: ['maitrise emotionnelle', 'sagesse', 'diplomatie', 'generosite', 'equilibre'],
      reversed: ['manipulation', 'froideur', 'repression emotionnelle', 'volatilite'],
    },
    description: {
      upright:
        "Le Roi de Coupes maitrise ses emotions avec sagesse et diplomatie. Il allie la profondeur des sentiments a la stabilite du jugement. Cultivez cette maturite emotionnelle pour guider les autres avec compassion et prendre des decisions eclairees par le coeur et la raison.",
      reversed:
        "Le Roi de Coupes renverse peut indiquer une manipulation emotionnelle ou une froideur derriere une facade bienveillante. Les emotions sont soit reprimees soit explosives. Retrouvez un equilibre sain entre le controle et l'expression de vos sentiments.",
    },
  },

  // ===== EPEES (50-63) =====

  50: {
    name: "As d'Epees",
    keywords: {
      upright: ['clarte mentale', 'verite', 'percee', 'idee nouvelle', 'justice'],
      reversed: ['confusion', 'brutalite intellectuelle', 'mauvaise utilisation du pouvoir', 'mensonge'],
    },
    description: {
      upright:
        "L'As d'Epees tranche le voile de l'illusion et apporte une clarte mentale eclatante. Une verite ou une idee nouvelle s'impose avec la force de l'evidence. Saisissez ce moment de lucidite pour prendre des decisions justes et percutantes.",
      reversed:
        "L'As d'Epees renverse indique une confusion mentale ou une utilisation destructrice de l'intellect. La verite est deformee ou utilisee comme une arme. Prenez garde a ne pas blesser les autres avec vos mots et retrouvez la clarte dans vos pensees.",
    },
  },

  51: {
    name: "Deux d'Epees",
    keywords: {
      upright: ['indecision', 'impasse', 'equilibre precaire', 'dilemme', 'deni'],
      reversed: ['decision forcee', 'surcharge d\'information', 'anxiete', 'confusion'],
    },
    description: {
      upright:
        "Le Deux d'Epees represente un dilemme ou une impasse ou vous refusez de choisir. Les yeux bandes, vous evitez de voir la situation telle qu'elle est. Il est temps d'affronter la realite et de prendre une decision meme si elle est difficile.",
      reversed:
        "Le Deux d'Epees renverse indique qu'une decision s'impose de force ou que l'anxiete causee par l'indecision devient insupportable. Le surplus d'informations contradictoires vous paralyse. Simplifiez votre reflexion et faites confiance a votre instinct.",
    },
  },

  52: {
    name: "Trois d'Epees",
    keywords: {
      upright: ['chagrin', 'peine de coeur', 'trahison', 'douleur', 'rupture'],
      reversed: ['guerison', 'pardon', 'liberation de la douleur', 'optimisme'],
    },
    description: {
      upright:
        "Le Trois d'Epees transperce le coeur avec la douleur d'une trahison, d'une rupture ou d'un chagrin profond. Cette souffrance est reelle et doit etre pleinement ressentie pour etre depassee. Traversez cette epreuve avec courage car elle porte en elle les germes de la guerison.",
      reversed:
        "Le Trois d'Epees renverse annonce le debut de la guerison apres une periode de grande souffrance emotionnelle. Le pardon commence a remplacer la douleur et vous retrouvez progressivement l'espoir. Laissez la cicatrisation se faire naturellement, sans la forcer.",
    },
  },

  53: {
    name: "Quatre d'Epees",
    keywords: {
      upright: ['repos', 'recuperation', 'meditation', 'retrait', 'recharge'],
      reversed: ['agitation', 'epuisement', 'refus de se reposer', 'burnout'],
    },
    description: {
      upright:
        "Le Quatre d'Epees vous ordonne de faire une pause et de vous accorder un repos bien merite. Votre esprit a besoin de silence et de recuperation apres une periode de stress. Retirez-vous du monde pour mediter et recharger vos energies avant de reprendre le combat.",
      reversed:
        "Le Quatre d'Epees renverse indique un refus de se reposer malgre des signes evidents d'epuisement. L'agitation mentale vous empeche de trouver la paix interieure. Arretez-vous avant que le burnout ne s'installe et accordez-vous la grace du repos.",
    },
  },

  54: {
    name: "Cinq d'Epees",
    keywords: {
      upright: ['defaite', 'conflit', 'victoire amere', 'trahison', 'humiliation'],
      reversed: ['reconciliation', 'acceptation de la defaite', 'rancune', 'vengeance'],
    },
    description: {
      upright:
        "Le Cinq d'Epees revele un conflit ou la victoire a un gout amer. Vous avez peut-etre gagne la bataille mais perdu quelque chose de plus precieux dans le processus. Evaluez si cette victoire meritait le prix paye en termes de relations et de dignite.",
      reversed:
        "Le Cinq d'Epees renverse suggere une possibilite de reconciliation apres un conflit ou l'acceptation d'une defaite douloureuse. La rancune doit etre abandonnee pour que la guerison puisse commencer. Choisissez le pardon plutot que la vengeance pour avancer.",
    },
  },

  55: {
    name: "Six d'Epees",
    keywords: {
      upright: ['transition', 'voyage', 'passage', 'eloignement', 'guerison progressive'],
      reversed: ['resistance au changement', 'bagages emotionnels', 'retour en arriere', 'stagnation'],
    },
    description: {
      upright:
        "Le Six d'Epees annonce un passage vers des eaux plus calmes apres une periode turbulente. Ce voyage, physique ou symbolique, vous eloigne des difficultes pour vous conduire vers un avenir plus serein. La guerison est en cours meme si le chemin reste delicat.",
      reversed:
        "Le Six d'Epees renverse indique une difficulte a quitter une situation penible ou un retour involontaire a des problemes non resolus. Vous transportez des bagages emotionnels qui alourdissent votre voyage. Liberez-vous de ces fardeaux pour avancer veritablement.",
    },
  },

  56: {
    name: "Sept d'Epees",
    keywords: {
      upright: ['ruse', 'strategie', 'tromperie', 'furtivite', 'evasion'],
      reversed: ['revelation', 'remords', 'piege', 'malhonnetete decouverte'],
    },
    description: {
      upright:
        "Le Sept d'Epees evoque la ruse, la strategie secrete ou la tromperie. Quelqu'un agit dans l'ombre, peut-etre vous-meme, pour obtenir un avantage de maniere detournee. Soyez vigilant face aux manipulations et questionnez l'ethique de vos propres strategies.",
      reversed:
        "Le Sept d'Epees renverse annonce que les tromperies sont sur le point d'etre decouvertes. Les mensonges et les manoeuvres secretes sont reveles au grand jour. C'est l'heure des remords et de la confrontation avec les consequences de la malhonnetete.",
    },
  },

  57: {
    name: "Huit d'Epees",
    keywords: {
      upright: ['emprisonnement', 'restriction', 'impuissance', 'victimisation', 'piege mental'],
      reversed: ['liberation', 'autonomisation', 'nouvelle perspective', 'lacher prise'],
    },
    description: {
      upright:
        "Le Huit d'Epees represente un sentiment d'emprisonnement et d'impuissance face a une situation qui semble sans issue. Pourtant, ces chaines sont souvent auto-imposees par vos pensees limitantes. Ouvrez les yeux et realisez que la sortie existe si vous osez bouger.",
      reversed:
        "Le Huit d'Epees renverse annonce une liberation des restrictions mentales qui vous emprisonnaient. Vous retrouvez votre pouvoir personnel et une nouvelle perspective s'ouvre devant vous. Le moment est venu de vous liberer de vos propres pieges mentaux.",
    },
  },

  58: {
    name: "Neuf d'Epees",
    keywords: {
      upright: ['anxiete', 'cauchemars', 'angoisse', 'insomnie', 'peurs nocturnes'],
      reversed: ['espoir', 'guerison', 'surmonter l\'anxiete', 'lumiere au bout du tunnel'],
    },
    description: {
      upright:
        "Le Neuf d'Epees incarne l'anxiete profonde, les cauchemars et les tourments nocturnes de l'esprit. Les peurs et les angoisses vous rongent, souvent de maniere disproportionnee par rapport a la realite. Cherchez du soutien et rappelez-vous que la nuit la plus sombre precede l'aurore.",
      reversed:
        "Le Neuf d'Epees renverse marque la fin d'une periode d'anxiete intense et le retour progressif a la serenite. Les cauchemars se dissipent et l'espoir renait. Vous trouvez enfin les ressources pour surmonter vos angoisses et voir la lumiere au bout du tunnel.",
    },
  },

  59: {
    name: "Dix d'Epees",
    keywords: {
      upright: ['fin brutale', 'trahison', 'effondrement', 'point final', 'rock bottom'],
      reversed: ['renaissance', 'survie', 'lecons apprises', 'nouveau depart force'],
    },
    description: {
      upright:
        "Le Dix d'Epees marque la fin brutale et definitive d'une situation. L'effondrement est total et il n'y a plus rien a sauver. Paradoxalement, toucher le fond est aussi le moment ou la remontee devient possible car le pire est desormais derriere vous.",
      reversed:
        "Le Dix d'Epees renverse indique que vous avez survecu au pire et que la renaissance est en cours. Les lecons douloureuses ont ete apprises et un nouveau depart s'impose. Relevez-vous de cette epreuve avec la sagesse acquise dans la souffrance.",
    },
  },

  60: {
    name: "Valet d'Epees",
    keywords: {
      upright: ['curiosite', 'esprit vif', 'communication', 'nouvelle idee', 'vigilance'],
      reversed: ['commerage', 'espionnage', 'manque de tact', 'cynisme'],
    },
    description: {
      upright:
        "Le Valet d'Epees incarne la curiosite intellectuelle et un esprit vif toujours en eveil. Un message ou une idee nouvelle stimule votre reflexion et aiguise votre sens critique. Gardez l'esprit ouvert et affutez vos capacites de communication et d'analyse.",
      reversed:
        "Le Valet d'Epees renverse met en garde contre les commerages, l'espionnage ou un cynisme destructeur. Votre esprit critique se transforme en arme blessante par manque de tact. Apprenez a utiliser votre intelligence avec bienveillance et discretion.",
    },
  },

  61: {
    name: "Cavalier d'Epees",
    keywords: {
      upright: ['action rapide', 'ambition', 'determination', 'bravoure', 'assaut intellectuel'],
      reversed: ['imprudence', 'agressivite', 'precipitation', 'cruaute verbale'],
    },
    description: {
      upright:
        "Le Cavalier d'Epees fonce vers son objectif avec une determination et une bravoure admirables. L'action est rapide, decisive et portee par une conviction intellectuelle forte. Avancez avec audace vers vos objectifs mais veillez a ne pas piétiner les autres sur votre passage.",
      reversed:
        "Le Cavalier d'Epees renverse represente l'imprudence et l'agressivite verbale qui causent des degats inutiles. La precipitation mene a des erreurs graves et la cruaute de vos mots blesse votre entourage. Temperez votre fougue et mesurez l'impact de vos paroles.",
    },
  },

  62: {
    name: "Reine d'Epees",
    keywords: {
      upright: ['lucidite', 'independance', 'communication claire', 'objectivite', 'perspicacite'],
      reversed: ['froideur', 'amertume', 'cruaute', 'isolement emotionnel'],
    },
    description: {
      upright:
        "La Reine d'Epees tranche dans le vif avec une lucidite et une objectivite remarquables. Elle communique avec clarte et precision, separant l'essentiel du superflu. Adoptez cette approche directe et honnete pour voir les situations telles qu'elles sont reellement.",
      reversed:
        "La Reine d'Epees renversee peut indiquer une froideur excessive ou une amertume qui empoisonne vos relations. Votre lucidite se transforme en cruaute et votre independance en isolement. Retrouvez le lien entre votre esprit aiguise et votre coeur compatissant.",
    },
  },

  63: {
    name: "Roi d'Epees",
    keywords: {
      upright: ['autorite intellectuelle', 'verite', 'logique', 'ethique', 'jugement clair'],
      reversed: ['abus de pouvoir', 'manipulation intellectuelle', 'tyrannie', 'malhonnetete'],
    },
    description: {
      upright:
        "Le Roi d'Epees incarne l'autorite intellectuelle et le jugement impartial fonde sur la logique et l'ethique. Il tranche les dilemmes avec precision et equite. Utilisez votre intelligence et votre sens de la justice pour guider vos decisions et celles des autres.",
      reversed:
        "Le Roi d'Epees renverse represente un abus de pouvoir intellectuel ou une manipulation exercee par la superiorite mentale. La logique est detournee pour servir des fins malhonnetes. Retrouvez l'ethique et l'integrite dans l'exercice de votre autorite.",
    },
  },

  // ===== DENIERS (64-77) =====

  64: {
    name: 'As de Deniers',
    keywords: {
      upright: ['prosperite', 'nouvelle opportunite', 'abondance materielle', 'manifestation', 'fondation'],
      reversed: ['perte financiere', 'occasion manquee', 'instabilite', 'materialisme excessif'],
    },
    description: {
      upright:
        "L'As de Deniers annonce une opportunite concrete de prosperite et d'abondance materielle. Un nouveau projet, un investissement ou une source de revenus se presente a vous. Saisissez cette chance de poser des fondations solides pour votre securite financiere et materielle.",
      reversed:
        "L'As de Deniers renverse met en garde contre une perte financiere ou une opportunite materielle laissee passer. L'instabilite financiere menace ou un exces de materialisme vous eloigne de l'essentiel. Reevaluez votre relation a l'argent et aux biens materiels.",
    },
  },

  65: {
    name: 'Deux de Deniers',
    keywords: {
      upright: ['equilibre', 'adaptation', 'gestion', 'flexibilite', 'jonglage'],
      reversed: ['desequilibre', 'desorganisation', 'surcharge', 'mauvaise gestion'],
    },
    description: {
      upright:
        "Le Deux de Deniers represente l'art de jongler avec les multiples aspects de votre vie avec adresse et flexibilite. Vous gerez habilement vos ressources et vous adaptez aux changements avec agilite. Maintenez cet equilibre dynamique entre vos differentes priorites.",
      reversed:
        "Le Deux de Deniers renverse indique un desequilibre dans la gestion de vos ressources ou une surcharge qui menace de vous faire tout lacher. La desorganisation s'installe et les priorites sont mal definies. Simplifiez vos engagements et retrouvez votre equilibre.",
    },
  },

  66: {
    name: 'Trois de Deniers',
    keywords: {
      upright: ['travail d\'equipe', 'collaboration', 'competence', 'maitrise', 'construction'],
      reversed: ['manque de cohesion', 'mediocrite', 'conflits professionnels', 'negligence'],
    },
    description: {
      upright:
        "Le Trois de Deniers celebre le travail d'equipe, la collaboration et la maitrise artisanale. Vos competences sont reconnues et votre contribution a un projet collectif porte ses fruits. Continuez a perfectionner votre art et a collaborer avec excellence.",
      reversed:
        "Le Trois de Deniers renverse revele un manque de cohesion dans un travail d'equipe ou une mediocrite dans la qualite du travail fourni. Les conflits professionnels nuisent a la productivite. Retrouvez l'esprit de collaboration et l'exigence de qualite.",
    },
  },

  67: {
    name: 'Quatre de Deniers',
    keywords: {
      upright: ['securite', 'conservation', 'stabilite financiere', 'controle', 'epargne'],
      reversed: ['avarice', 'peur de la perte', 'generosite forcee', 'insecurite materielle'],
    },
    description: {
      upright:
        "Le Quatre de Deniers represente la securite materielle et le desir de conserver ce que vous avez acquis. Vous batissez une stabilite financiere solide grace a une gestion prudente. Protegez vos acquis mais veillez a ne pas devenir prisonnier de vos possessions.",
      reversed:
        "Le Quatre de Deniers renverse revele une avarice excessive ou une peur irrationnelle de tout perdre. Votre attachement aux biens materiels vous etouffe et vous isole. Apprenez a relacher votre emprise et a partager vos richesses avec generosite.",
    },
  },

  68: {
    name: 'Cinq de Deniers',
    keywords: {
      upright: ['difficulte financiere', 'precarite', 'exclusion', 'epreuve materielle', 'isolement'],
      reversed: ['amelioration financiere', 'aide trouvee', 'recovery', 'espoir retrouve'],
    },
    description: {
      upright:
        "Le Cinq de Deniers evoque une periode de precarite materielle et d'epreuves financieres. Vous vous sentez exclu et demuni, errant dans le froid en quete de securite. N'hesitez pas a demander de l'aide car les portes s'ouvriront si vous osez frapper.",
      reversed:
        "Le Cinq de Deniers renverse annonce la fin d'une periode de difficulte financiere et le debut de la recovery. L'aide que vous cherchiez se manifeste enfin et la situation s'ameliore. Gardez espoir et accueillez avec gratitude le soutien qui se presente.",
    },
  },

  69: {
    name: 'Six de Deniers',
    keywords: {
      upright: ['generosite', 'partage', 'charite', 'equilibre donner-recevoir', 'aide'],
      reversed: ['dette', 'exploitation', 'conditions attachees', 'generosite interessee'],
    },
    description: {
      upright:
        "Le Six de Deniers represente la generosite, le partage et l'equilibre entre donner et recevoir. Vous etes en position d'aider les autres ou de recevoir une aide precieuse. Cultivez la charite et la gratitude dans vos echanges materiels et emotionnels.",
      reversed:
        "Le Six de Deniers renverse met en garde contre une generosite interessee ou une relation de pouvoir desequilibree basee sur l'argent. Les dettes et les conditions attachees creent de la dependance. Assurez-vous que vos echanges sont equitables et libres de manipulation.",
    },
  },

  70: {
    name: 'Sept de Deniers',
    keywords: {
      upright: ['patience', 'evaluation', 'investissement a long terme', 'perseverance', 'croissance lente'],
      reversed: ['impatience', 'investissement perdu', 'manque de resultats', 'frustration'],
    },
    description: {
      upright:
        "Le Sept de Deniers vous invite a evaluer les fruits de vos efforts avec patience et discernement. La recolte se prepare lentement mais surement et votre investissement a long terme portera ses fruits. Continuez a cultiver vos projets avec perseverance et confiance.",
      reversed:
        "Le Sept de Deniers renverse exprime la frustration face a des resultats qui tardent a se manifester. Vous doutez de la valeur de vos investissements et l'impatience vous guette. Reevaluez votre strategie mais ne renoncez pas trop vite aux projets qui ont du potentiel.",
    },
  },

  71: {
    name: 'Huit de Deniers',
    keywords: {
      upright: ['maitrise', 'apprentissage', 'perfectionnement', 'diligence', 'artisanat'],
      reversed: ['perfectionnisme', 'monotonie', 'manque de passion', 'travail mediocre'],
    },
    description: {
      upright:
        "Le Huit de Deniers celebre le travail assidu et l'engagement vers la maitrise de votre art. Chaque effort vous rapproche de l'excellence et votre diligence est admirable. Continuez a vous perfectionner avec discipline et passion dans votre domaine d'expertise.",
      reversed:
        "Le Huit de Deniers renverse indique un perfectionnisme paralyse ou une perte de passion pour votre travail. La monotonie s'est installee et la qualite en souffre. Retrouvez le sens et l'enthousiasme dans votre activite ou envisagez une nouvelle orientation.",
    },
  },

  72: {
    name: 'Neuf de Deniers',
    keywords: {
      upright: ['abondance', 'independance financiere', 'raffinement', 'reussite personnelle', 'luxe'],
      reversed: ['dependance financiere', 'superficialite', 'exces', 'solitude dorée'],
    },
    description: {
      upright:
        "Le Neuf de Deniers represente l'aboutissement d'un effort personnel menant a l'independance financiere et au raffinement. Vous jouissez des fruits de votre travail dans le confort et l'elegance. Savourez cette abondance meritee tout en restant reconnaissant.",
      reversed:
        "Le Neuf de Deniers renverse peut indiquer une dependance financiere malgre les apparences de richesse, ou une solitude cachee derriere le luxe. La superficialite materielle ne comble pas le vide interieur. Cherchez une richesse plus profonde et authentique.",
    },
  },

  73: {
    name: 'Dix de Deniers',
    keywords: {
      upright: ['heritage', 'richesse familiale', 'stabilite durable', 'tradition', 'legs'],
      reversed: ['conflits d\'heritage', 'perte de patrimoine', 'instabilite familiale', 'rupture avec la tradition'],
    },
    description: {
      upright:
        "Le Dix de Deniers symbolise la richesse durable transmise de generation en generation. Votre patrimoine materiel et spirituel est solide et beneficie a toute votre famille. C'est le moment de consolider votre heritage et de planifier pour les generations futures.",
      reversed:
        "Le Dix de Deniers renverse met en lumiere des conflits familiaux lies a l'heritage ou une perte de patrimoine. Les traditions se brisent et l'instabilite financiere menace les fondations familiales. Travaillez a preserver l'harmonie au-dela des questions materielles.",
    },
  },

  74: {
    name: 'Valet de Deniers',
    keywords: {
      upright: ['etude', 'apprentissage pratique', 'nouvelle competence', 'opportunite concrete', 'diligence'],
      reversed: ['manque de concentration', 'gaspillage', 'paresse', 'objectifs flous'],
    },
    description: {
      upright:
        "Le Valet de Deniers annonce une opportunite d'apprentissage pratique ou le debut d'une nouvelle competence. Avec diligence et application, vous posez les premieres pierres d'un edifice solide. Accueillez cette chance de grandir concretement et investissez dans vos competences.",
      reversed:
        "Le Valet de Deniers renverse revele un manque de concentration ou un gaspillage des opportunites concretes qui se presentent. La paresse ou l'absence d'objectifs clairs nuit a votre progression. Retrouvez la discipline et la motivation necessaires pour avancer.",
    },
  },

  75: {
    name: 'Cavalier de Deniers',
    keywords: {
      upright: ['fiabilite', 'methode', 'patience', 'determination', 'travail assidu'],
      reversed: ['stagnation', 'routine excessive', 'obstination', 'perfectionnisme'],
    },
    description: {
      upright:
        "Le Cavalier de Deniers avance avec methode, patience et une determination a toute epreuve. Il represente le travail assidu et fiable qui mene inevitablement au succes. Adoptez cette approche methodique et perseverante pour atteindre vos objectifs materiels.",
      reversed:
        "Le Cavalier de Deniers renverse indique une stagnation causee par une routine excessive ou une obstination qui vous empeche de vous adapter. Le perfectionnisme paralyse votre progression. Assouplissez votre approche et acceptez que la perfection n'est pas toujours necessaire.",
    },
  },

  76: {
    name: 'Reine de Deniers',
    keywords: {
      upright: ['abondance', 'terre a terre', 'nourriciere', 'securite', 'sens pratique'],
      reversed: ['insecurite materielle', 'possessivite', 'negligence', 'desequilibre travail-vie'],
    },
    description: {
      upright:
        "La Reine de Deniers incarne l'abondance terrestre, le sens pratique et l'instinct nourricier. Elle cree un environnement secure et chaleureux pour ceux qu'elle aime. Connectez-vous a cette energie de prosperite naturelle et prenez soin de votre bien-etre materiel et physique.",
      reversed:
        "La Reine de Deniers renversee peut reveler une insecurite materielle ou une possessivite etouffante envers les personnes et les biens. L'equilibre entre travail et vie personnelle est rompu. Retrouvez un rapport sain a la matiere et prenez soin de vous autant que des autres.",
    },
  },

  77: {
    name: 'Roi de Deniers',
    keywords: {
      upright: ['reussite materielle', 'sens des affaires', 'abondance', 'securite', 'genereux'],
      reversed: ['cupidite', 'materialisme excessif', 'corruption', 'entêtement financier'],
    },
    description: {
      upright:
        "Le Roi de Deniers represente la reussite materielle accomplie et le sens des affaires aiguise. Il a bati son empire avec intelligence et generosite, offrant securite et abondance a son entourage. Incarnez cette sagesse financiere et partagez votre prosperite avec discernement.",
      reversed:
        "Le Roi de Deniers renverse met en garde contre la cupidite, la corruption ou un materialisme qui dévore l'ame. Le pouvoir de l'argent devient une fin en soi et corrompt les relations. Rappelez-vous que la veritable richesse ne se mesure pas uniquement en biens materiels.",
    },
  },
};
