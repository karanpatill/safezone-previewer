import type { HomeContent } from './types';

const fr: HomeContent = {
  toc: 'Sur cette page',
  cropWhere: [
    'Fil d’actualité Instagram et Facebook, lorsqu’un Reel se lance entre deux publications',
    'Grille du profil Instagram (vignettes 3:4 depuis janvier 2025)',
    'Anciennes grilles carrées, emplacements carrés Facebook et LinkedIn, aperçus de liens',
  ],
  sections: [
    {
      id: 'what',
      title: 'Ce qu’est vraiment une zone de sécurité',
      lead: 'Une zone de sécurité est la partie d’une vidéo verticale 1080 × 1920 qu’aucune interface d’application ne recouvre. Sur Instagram Reels, elle mesure 880 × 1280 px (220 px en haut, 420 px en bas, 60 px à gauche, 140 px à droite) ; sur TikTok, 870 × 1260 px ; sur YouTube Shorts, 880 × 1380 px. Placez-y textes, visages, logos et appels à l’action.',
      blocks: [
        { p: 'La zone de sécurité est la partie du cadre vertical sur laquelle aucune plateforme ne dessinera son interface. Instagram Reels, TikTok et YouTube Shorts diffusent votre vidéo bord à bord sur un canevas de 1080 × 1920 pixels, puis affichent par-dessus leurs boutons, la légende, la barre de progression et la navigation. Rien n’est réservé : l’application peint ses commandes directement sur vos pixels et ajoute un dégradé sombre pour que son propre texte blanc reste lisible.' },
        { p: 'Voilà pourquoi un plan parfaitement composé dans le logiciel de montage peut se dégrader une fois publié. Le sous-titre du tiers inférieur bute contre la légende et le nom du son ; le prix dans l’angle d’un packshot disparaît derrière le bouton « J’aime » ; le visage du présentateur, cadré un peu haut, se retrouve sous les onglets « Abonnements / Pour toi ». Le logiciel ne connaît pas l’interface qui viendra s’empiler ensuite : le problème n’apparaît donc jamais dans l’aperçu sur ordinateur.' },
        { p: 'Une zone de sécurité n’est pas une préférence esthétique, mais quatre marges mesurées — haut, droite, bas et gauche — exprimées en pixels du fichier livré. Tout ce qui doit être vu et lu (textes, logos, visages, détails produit, appels à l’action) se place dans le rectangle qui reste. Le fond, les textures et le mouvement peuvent et doivent occuper tout le 9:16 : cette zone reste visible, elle n’est simplement pas fiable.' },
        { p: 'SafeZoneSnap vous permet de le vérifier avant de publier. Chargez une image ou une vidéo, choisissez la plateforme : l’aperçu dessine une simulation fidèle de l’interface, le rectangle sûr exact, les zones masquées et les recadrages appliqués dans le fil et sur le profil. Tout se passe dans votre navigateur ; vos fichiers ne sont jamais envoyés sur un serveur.' },
      ],
    },
    {
      id: 'why',
      title: 'Pourquoi l’interface se place là où elle se place',
      blocks: [
        { h3: 'Le bas est toujours la zone la plus chargée' },
        { p: 'En bas s’accumulent l’identité du créateur (photo, nom de compte, bouton S’abonner ou Suivre), la légende, le son, la barre de progression et, sur la plupart des téléphones, la navigation de l’application. Soit quatre à six lignes empilées, d’où des marges basses de plusieurs centaines de pixels : 380 px sur Shorts, 420 px sur Reels et 480 px sur TikTok, où les légendes sont plus longues et les hashtags passent souvent à la ligne. Les publicités demandent encore davantage à cause du bouton d’appel à l’action.' },
        { h3: 'Le bord droit porte la colonne d’actions' },
        { p: 'J’aime, commentaires, partage, enregistrement et raccourci son ou remix sont empilés dans une colonne à droite, qui commence à mi-hauteur et descend jusqu’à la légende. Avec ses libellés, elle mesure 120 à 150 px de large : la marge droite est donc toujours plus grande que la gauche.' },
        { h3: 'En haut : onglets, recherche et barre d’état' },
        { p: 'En haut se trouvent la barre d’état du téléphone et une seule ligne d’interface avec le titre ou le sélecteur de fil et une icône caméra ou recherche. Les marges hautes sont donc plus faibles : 160 px sur Shorts, 180 px sur TikTok et 220 px sur Reels. Les Stories font exception : barre de progression, nom du compte et bouton de fermeture repoussent la zone libre à environ 250 px.' },
        { h3: 'La forme du téléphone change, pas la règle' },
        { p: 'La plupart des smartphones actuels ont un écran proche de 19,5:9, plus allongé que le 9:16. Certaines applications y placent la navigation sous la vidéo et masquent donc moins de choses. Comme vous ne choisissez pas le téléphone de votre public, les zones de sécurité sont calculées pour le pire cas : toute l’interface par-dessus tout le cadre 1080 × 1920.' },
      ],
    },
    {
      id: 'specs',
      title: 'Dimensions de la zone de sécurité par plateforme',
      lead: 'Sur une image 1080 × 1920, gardez le contenu important dans ces marges (haut / bas / gauche / droite) : Instagram Reels 220 / 420 / 60 / 140 px, TikTok 180 / 480 / 60 / 150 px, YouTube Shorts 160 / 380 / 60 / 140 px, Stories Instagram 250 / 250 / 65 / 65 px et publicités Reels 250 / 670 / 65 / 65 px. Une mise en page unique pour les trois applications organiques exige 220 / 480 / 60 / 150 px.',
      blocks: [
        { p: 'Le tableau donne les marges utilisées par chaque préréglage de SafeZoneSnap sur le cadre standard de 1080 × 1920. « Zone sûre » désigne le rectangle restant une fois les quatre marges retirées, et « Utile » la part du cadre qu’il représente. Les lignes Stories et publicités Reels suivent les recommandations publiées par Meta ; Reels, TikTok et Shorts organiques sont des mesures de référence relevées sur l’interface actuelle.' },
        { table: 'specs' },
        { h3: 'Instagram Reels' },
        { p: 'Gardez le texte entre x 60–940 et y 220–1500. Le nom du compte commence vers y 1550, avec la légende et le son en dessous. Si le Reel apparaît aussi dans le fil principal, le recadrage 4:5 retire 285 px en haut et en bas : en haut, c’est plus contraignant que l’interface Reels elle-même.' },
        { h3: 'TikTok' },
        { p: 'Gardez le texte entre x 60–930 et y 180–1440. TikTok a le bloc inférieur le plus haut : la légende affiche plus de texte, les hashtags passent à la ligne, et le son, les liens TikTok Shop et les libellés d’effets peuvent s’empiler. La colonne de droite est aussi un peu plus large à cause de la photo de profil et de son badge.' },
        { h3: 'YouTube Shorts' },
        { p: 'Gardez le texte entre x 60–940 et y 160–1540. Shorts offre la zone sûre organique la plus large : titre, chaîne et bouton S’abonner sont placés plus bas, et la barre supérieure ne contient que la recherche et le menu. Les boutons J’aime / Je n’aime pas commencent assez haut : évitez aussi le bord droit à mi-hauteur.' },
        { h3: 'Stories et publicités Reels' },
        { p: 'Pour les Stories, Meta recommande de laisser libres environ 14 % du cadre — soit 250 px — en haut et en bas. Pour les publicités Reels, la consigne est de garder sans texte ni logo 14 % en haut (250 px), 35 % en bas (670 px) et 6 % sur chaque côté (65 px). Si une même création sert en organique et en publicité, appliquez les marges publicitaires.' },
      ],
    },
    {
      id: 'crops',
      title: 'Recadrages du fil et du profil : la seconde zone de sécurité',
      lead: 'Un Reel 9:16 affiché dans le fil Instagram ou Facebook est recadré en 4:5 (1080 × 1350), ce qui retire 285 px en haut et en bas. La grille du profil Instagram utilise le 3:4 (1080 × 1440) et retire 240 px à chaque extrémité ; un carré 1:1 en retire 420. Les recadrages sont centrés : gardez le texte entre y 285 et y 1500.',
      blocks: [
        { p: 'Une vidéo verticale n’est pas toujours affichée en 9:16. Dans le fil Instagram et Facebook, elle est recadrée en 4:5 ; sur la grille du profil, elle devient une vignette 3:4, format adopté par Instagram en janvier 2025 ; d’autres surfaces utilisent encore le 1:1. Chaque recadrage part du centre et retire deux bandes égales en haut et en bas.' },
        { table: 'crops' },
        { p: 'Concrètement, le haut du cadre est pris en tenaille : l’interface Reels couvre les 220 premiers pixels et le recadrage 4:5 supprime les 285 premiers. Un titre à y 240 est visible dans l’onglet Reels mais coupé dans le fil. Si votre Reel doit fonctionner aux deux endroits, considérez y 285 comme le vrai haut de la zone de texte. Pour les couvertures, gardez le titre dans la zone centrale de 1080 × 1440 afin qu’il ne soit pas coupé sur la grille.' },
      ],
    },
    {
      id: 'math',
      title: 'Convertir les marges à n’importe quelle résolution',
      blocks: [
        { p: 'Les marges sont publiées en pixels sur 1080 × 1920, mais vous montez peut-être en 720 × 1280, en 4K vertical ou sur un canevas de design quelconque. Chaque plateforme met la vidéo à l’échelle de l’écran, donc les marges suivent la même proportion. Convertissez-les une fois en pourcentages et elles valent pour toutes les tailles.' },
        { pre: 'haut%  = haut  / 1920        droite% = droite / 1080\nbas%   = bas   / 1920        gauche% = gauche / 1080\n\nlargeur_sûre = 1080 − 60 − 140  = 880 px\nhauteur_sûre = 1920 − 220 − 420 = 1280 px   (Instagram Reels)' },
        { p: 'Pour Reels, cela donne 11,46 % en haut, 21,88 % en bas, 5,56 % à gauche et 12,96 % à droite. En 720 × 1280, cela fait 147, 280, 40 et 93 px ; en 2160 × 3840, les valeurs doublent : 440, 840, 120 et 280 px.' },
        { h3: 'Une seule mise en page pour toutes les plateformes' },
        { p: 'Si vous publiez le même montage sur les trois applications, la zone sûre est l’intersection de toutes : prenez la plus grande marge de chaque côté. Pour Reels, TikTok et Shorts, cela donne 220 px en haut, 150 px à droite, 480 px en bas et 60 px à gauche, soit un rectangle de <strong>870 × 1220 px</strong> (x 60–930, y 220–1440), environ 51 % du cadre. Saisissez ces valeurs dans le préréglage Personnalisé pour garder ce repère universel à l’écran.' },
      ],
    },
    {
      id: 'workflow',
      title: 'Comment vérifier les zones de sécurité d’une vidéo',
      lead: 'Pour vérifier les zones de sécurité d’une vidéo, exportez une image ou un court extrait en 1080 × 1920, déposez-le dans l’aperçu SafeZoneSnap et passez de Reels à TikTok puis à Shorts. Les bandes rouges hachurées montrent ce que l’interface recouvre et le contour vert délimite la zone sûre. Survolez un élément pour lire ses coordonnées, puis corrigez dans votre logiciel de montage.',
      blocks: [
        { ol: [
          '<strong>Exportez une image ou un court extrait</strong> à la résolution finale, idéalement le moment le plus chargé en texte.',
          '<strong>Déposez-le dans l’aperçu</strong> ou collez une capture avec Ctrl + V. Les vidéos tournent en boucle et se parcourent avec la barre sous le cadre.',
          '<strong>Changez de plateforme</strong> : les bandes hachurées indiquent ce qui est masqué, le contour vert est le rectangle sûr avec sa taille en pixels.',
          '<strong>Survolez n’importe quel élément</strong> pour lire ses coordonnées exactes et savoir s’il est dans la zone sûre, sous une partie de l’interface ou hors du recadrage 4:5.',
          '<strong>Partagez</strong> : « Télécharger l’aperçu » enregistre un PNG 1080 × 1920 pour validation client, « Copier les mesures » place les marges dans le presse-papiers.',
        ] },
        { p: '« Télécharger le gabarit » produit un PNG transparent 1080 × 1920 ne contenant que les repères activés. Placez-le sur la piste supérieure de Premiere Pro, DaVinci Resolve, CapCut ou Canva, verrouillez-la et désactivez-la avant l’export pour qu’il n’apparaisse jamais dans la vidéo publiée.' },
      ],
    },
    {
      id: 'type',
      title: 'Placer sous-titres, titres et appels à l’action',
      blocks: [
        { ul: [
          '<strong>Sous-titres :</strong> placez la ligne de base de la dernière ligne entre y 1180 et y 1420. Deux lignes restent ainsi à l’écart du bloc de légende TikTok, le plus exigeant, sans masquer le visage de l’intervenant. Sur 1080 px de large, un corps de 48 à 64 px en graisse forte se lit bien sur mobile.',
          '<strong>Longueur :</strong> environ 32 caractères par ligne, jamais plus de deux lignes à la fois. Un bloc étroit et centré est plus sûr qu’un bloc large.',
          '<strong>Accroches et titres :</strong> gardez-les entre y 300 et y 900 pour survivre au recadrage 4:5 et à l’interface du haut.',
          '<strong>Logos :</strong> les filigranes dans les angles sont presque toujours masqués ; préférez le coin supérieur gauche, dans la zone sûre.',
          '<strong>Appels à l’action :</strong> boutons, prix et flèches doivent rester au-dessus de la marge basse. Une flèche vers « le lien en dessous » finit par pointer l’interface de l’application.',
        ] },
        { p: 'Enfin, les interfaces évoluent avec les mises à jour, la langue et la longueur des légendes : selon les sources, les chiffres varient de 20 à 80 px. Considérez chaque zone de sécurité comme un minimum et gardez une petite marge supplémentaire de 40 à 60 px.' },
      ],
    },
  ],
  faqTitle: 'Questions fréquentes',
  faqs: [
    { q: 'Mes vidéos ou images sont-elles envoyées quelque part ?', a: 'Non. Les fichiers sont ouverts directement dans votre navigateur et dessinés dans un canvas sur votre propre appareil. Rien n’est envoyé à un serveur. Seules vos préférences d’affichage (plateforme, calques, opacité) sont mémorisées dans le stockage local du navigateur.' },
    { q: 'Quelle résolution pour une vidéo verticale ?', a: 'Exportez en 1080 × 1920 pixels (9:16) pour Reels, TikTok, Shorts et Stories. Les plateformes acceptent des résolutions supérieures comme 2160 × 3840 ; les pourcentages de zone sûre restent les mêmes à toutes les tailles.' },
    { q: 'Quelle est la zone de sécurité d’Instagram Reels ?', a: 'Sur un cadre de 1080 × 1920, gardez au moins 220 px en haut, 420 px en bas, 60 px à gauche et 140 px à droite : il reste une zone de 880 × 1280 px. Si le Reel apparaît aussi dans le fil, gardez le texte sous y 285 à cause du recadrage 4:5.' },
    { q: 'Quelle est la zone de sécurité de TikTok ?', a: 'Gardez au moins 180 px en haut, 480 px en bas, 60 px à gauche et 150 px à droite, soit une zone de 870 × 1260 px.' },
    { q: 'Existe-t-il une zone sûre valable partout ?', a: 'Oui : prenez la plus grande marge de chaque côté. Pour Reels, TikTok et Shorts réunis : 220 px en haut, 150 px à droite, 480 px en bas et 60 px à gauche, soit 870 × 1220 px.' },
    { q: 'Puis-je utiliser le gabarit dans CapCut, Premiere ou Canva ?', a: 'Oui. « Télécharger le gabarit » enregistre un PNG transparent 1080 × 1920 avec les repères actifs. Placez-le sur le calque supérieur comme référence et masquez-le avant l’export.' },
  ],
  sources: {
    title: 'Sources et méthodologie',
    note: 'Dernière révision : octobre 2026. Les marges des Stories et des publicités Reels suivent les pourcentages publiés par Meta. Celles de Reels, TikTok et Shorts en organique sont des mesures réalisées par SafeZoneSnap sur le lecteur actuel de chaque application en 1080 × 1920, dans le pire cas parmi les formats de téléphone, et arrondies avec prudence. TikTok et YouTube ne publient pas de marges organiques ; les liens ci-dessous documentent le format d’image et le comportement du lecteur.',
  },
};

export default fr;
