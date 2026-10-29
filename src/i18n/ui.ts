import type { Locale } from '../config/site';
import type { PlatformId } from '../data/platforms';

export interface UiStrings {
  meta: { title: string; description: string };
  hero: { eyebrow: string; h1: string; sub: string };
  nav: { tool: string; specs: string; crops: string; faq: string; guides: string; language: string; skip: string };
  footer: {
    about: string;
    product: string;
    company: string;
    disclaimer: string;
    rights: string;
    links: { about: string; contact: string; privacy: string; terms: string; disclaimer: string; guides: string };
  };
  ad: string;
  tool: {
    platforms: Record<PlatformId, string>;
    sections: { platform: string; media: string; layers: string; framing: string; margins: string; inspector: string; export: string };
    layers: { ui: string; safe: string; danger: string; crop45: string; crop34: string; crop11: string; thirds: string };
    uiOpacity: string;
    fit: string;
    fitCover: string;
    fitContain: string;
    zoom: string;
    recenter: string;
    dropTitle: string;
    dropSub: string;
    browse: string;
    replace: string;
    remove: string;
    margins: { top: string; right: string; bottom: string; left: string };
    readout: { safeArea: string; usable: string; margins: string; cursor: string; region: string };
    status: { idle: string; safe: string; top: string; bottom: string; right: string; left: string; cropped: string };
    actions: { frame: string; template: string; copy: string; reset: string };
    toast: { copied: string; saved: string; badType: string; reset: string; copyFailed: string };
    video: { play: string; pause: string; scrub: string };
    source: Record<'measured' | 'metaAds' | 'metaStories' | 'custom', string>;
    hint: string;
    mock: {
      follow: string; subscribe: string; caption: string; audio: string; reply: string;
      sponsored: string; cta: string; forYou: string; following: string; reels: string; handle: string;
    };
  };
  content: { updated: string; tableHead: { platform: string; top: string; bottom: string; left: string; right: string; area: string; usable: string }; cropHead: { crop: string; size: string; where: string; lost: string } };
}

export const ui: Record<Locale, UiStrings> = {
  en: {
    meta: {
      title: 'Safe Zone Checker for Reels, TikTok & Shorts (1080×1920) — SafeZoneSnap',
      description: 'Drop a video or image and see exactly where Instagram Reels, TikTok and YouTube Shorts buttons and captions will cover it. Pixel-accurate 9:16 safe zones, feed crops and downloadable overlay templates. Runs in your browser.',
    },
    hero: {
      eyebrow: 'Free · Private · No upload',
      h1: 'See what the app will cover before you post',
      sub: 'Load a vertical video or image, switch between Reels, TikTok, Shorts and Stories, and check every caption, face and call-to-action against pixel-measured safe zones on a 1080 × 1920 canvas.',
    },
    nav: { tool: 'Previewer', specs: 'Specs', crops: 'Feed crops', faq: 'FAQ', guides: 'Guides', language: 'Language', skip: 'Skip to the previewer' },
    footer: {
      about: 'SafeZoneSnap is an independent, browser-based utility for creators, editors and social teams who need to know where platform interfaces sit on a vertical frame.',
      product: 'Product',
      company: 'Company',
      disclaimer: 'Not affiliated with, endorsed by or sponsored by Meta, Instagram, TikTok, ByteDance, Google or YouTube. Product names are trademarks of their respective owners.',
      rights: 'All rights reserved.',
      links: { about: 'About', contact: 'Contact', privacy: 'Privacy Policy', terms: 'Terms of Service', disclaimer: 'Disclaimer', guides: 'Creator guides' },
    },
    ad: 'Advertisement',
    tool: {
      platforms: { reels: 'Reels', tiktok: 'TikTok', shorts: 'Shorts', story: 'Stories', reelsAds: 'Reels Ads', custom: 'Custom' },
      sections: { platform: 'Platform', media: 'Media', layers: 'Layers', framing: 'Framing', margins: 'Custom margins', inspector: 'Inspector', export: 'Export' },
      layers: { ui: 'App interface', safe: 'Safe zone outline', danger: 'Covered-area tint', crop45: '4:5 feed crop', crop34: '3:4 profile grid', crop11: '1:1 square crop', thirds: 'Rule of thirds' },
      uiOpacity: 'Interface opacity',
      fit: 'Scaling',
      fitCover: 'Fill frame',
      fitContain: 'Fit inside',
      zoom: 'Zoom',
      recenter: 'Re-center',
      dropTitle: 'Drop a video or image',
      dropSub: 'MP4, MOV, WebM, JPG, PNG, WebP. Files stay on your device.',
      browse: 'Choose file',
      replace: 'Replace',
      remove: 'Remove',
      margins: { top: 'Top', right: 'Right', bottom: 'Bottom', left: 'Left' },
      readout: { safeArea: 'Safe area', usable: 'Usable frame', margins: 'Margins T / R / B / L', cursor: 'Cursor', region: 'Region' },
      status: { idle: 'Hover the frame to inspect a point', safe: 'Inside the safe zone', top: 'Behind the top bar', bottom: 'Behind the caption area', right: 'Behind the action buttons', left: 'Inside the edge padding', cropped: 'cropped in the 4:5 feed' },
      actions: { frame: 'Download preview', template: 'Download overlay', copy: 'Copy specs', reset: 'Reset' },
      toast: { copied: 'Specs copied to clipboard', saved: 'PNG saved', badType: 'That file type is not supported', reset: 'Settings restored to defaults', copyFailed: 'Clipboard unavailable in this browser' },
      video: { play: 'Play', pause: 'Pause', scrub: 'Video position' },
      source: {
        measured: 'Reference margins measured from the current app layout on a 1080 × 1920 frame.',
        metaAds: 'Meta’s published Reels ad guidance: keep 14% top, 35% bottom and 6% of each side free of text and logos.',
        metaStories: 'Meta’s Stories guidance: keep roughly 14% (250 px) at the top and bottom clear.',
        custom: 'Set your own margins, for example to match a client brand template.',
      },
      hint: 'Drag to reposition · Ctrl + scroll to zoom · Arrow keys nudge',
      mock: {
        follow: 'Follow', subscribe: 'Subscribe', caption: 'Anything placed down here sits under the caption…', audio: 'Original audio', reply: 'Send message',
        sponsored: 'Sponsored', cta: 'Learn more', forYou: 'For You', following: 'Following', reels: 'Reels', handle: 'yourbrand',
      },
    },
    content: {
      updated: 'Last reviewed',
      tableHead: { platform: 'Platform', top: 'Top', bottom: 'Bottom', left: 'Left', right: 'Right', area: 'Safe area', usable: 'Usable' },
      cropHead: { crop: 'Crop', size: 'Size', where: 'Where it appears', lost: 'Lost top & bottom' },
    },
  },

  es: {
    meta: {
      title: 'Zona segura para Reels, TikTok y Shorts (1080×1920) — SafeZoneSnap',
      description: 'Sube un vídeo o imagen y comprueba dónde taparán los botones y textos de Instagram Reels, TikTok y YouTube Shorts. Zonas seguras 9:16 al píxel, recortes del feed y plantillas descargables. Funciona en tu navegador.',
    },
    hero: {
      eyebrow: 'Gratis · Privado · Sin subir archivos',
      h1: 'Mira qué tapará la app antes de publicar',
      sub: 'Carga un vídeo o imagen vertical, cambia entre Reels, TikTok, Shorts e Historias y comprueba subtítulos, caras y llamadas a la acción frente a zonas seguras medidas al píxel en un lienzo de 1080 × 1920.',
    },
    nav: { tool: 'Previsualizador', specs: 'Medidas', crops: 'Recortes', faq: 'Preguntas', guides: 'Guías', language: 'Idioma', skip: 'Ir al previsualizador' },
    footer: {
      about: 'SafeZoneSnap es una herramienta independiente que funciona en el navegador, pensada para creadores, editores y equipos de redes que necesitan saber dónde se sitúa la interfaz de cada plataforma.',
      product: 'Producto',
      company: 'Empresa',
      disclaimer: 'Sin afiliación ni respaldo de Meta, Instagram, TikTok, ByteDance, Google o YouTube. Los nombres de producto son marcas de sus respectivos propietarios.',
      rights: 'Todos los derechos reservados.',
      links: { about: 'Acerca de', contact: 'Contacto', privacy: 'Privacidad', terms: 'Términos', disclaimer: 'Aviso legal', guides: 'Guías (inglés)' },
    },
    ad: 'Publicidad',
    tool: {
      platforms: { reels: 'Reels', tiktok: 'TikTok', shorts: 'Shorts', story: 'Historias', reelsAds: 'Anuncios Reels', custom: 'Personalizado' },
      sections: { platform: 'Plataforma', media: 'Archivo', layers: 'Capas', framing: 'Encuadre', margins: 'Márgenes personalizados', inspector: 'Inspector', export: 'Exportar' },
      layers: { ui: 'Interfaz de la app', safe: 'Contorno de zona segura', danger: 'Tinte de zonas tapadas', crop45: 'Recorte 4:5 del feed', crop34: 'Cuadrícula 3:4 del perfil', crop11: 'Recorte cuadrado 1:1', thirds: 'Regla de los tercios' },
      uiOpacity: 'Opacidad de la interfaz',
      fit: 'Escalado',
      fitCover: 'Llenar',
      fitContain: 'Encajar',
      zoom: 'Zoom',
      recenter: 'Centrar',
      dropTitle: 'Suelta un vídeo o una imagen',
      dropSub: 'MP4, MOV, WebM, JPG, PNG, WebP. Los archivos no salen de tu dispositivo.',
      browse: 'Elegir archivo',
      replace: 'Cambiar',
      remove: 'Quitar',
      margins: { top: 'Arriba', right: 'Derecha', bottom: 'Abajo', left: 'Izquierda' },
      readout: { safeArea: 'Zona segura', usable: 'Área útil', margins: 'Márgenes Ar / Der / Ab / Izq', cursor: 'Cursor', region: 'Región' },
      status: { idle: 'Pasa el cursor por el marco para inspeccionar', safe: 'Dentro de la zona segura', top: 'Detrás de la barra superior', bottom: 'Detrás de la descripción', right: 'Detrás de los botones', left: 'En el margen lateral', cropped: 'recortado en el feed 4:5' },
      actions: { frame: 'Descargar vista', template: 'Descargar plantilla', copy: 'Copiar medidas', reset: 'Restablecer' },
      toast: { copied: 'Medidas copiadas al portapapeles', saved: 'PNG guardado', badType: 'Ese tipo de archivo no es compatible', reset: 'Ajustes restablecidos', copyFailed: 'El portapapeles no está disponible' },
      video: { play: 'Reproducir', pause: 'Pausar', scrub: 'Posición del vídeo' },
      source: {
        measured: 'Márgenes de referencia medidos sobre la interfaz actual en un marco de 1080 × 1920.',
        metaAds: 'Guía publicada por Meta para anuncios en Reels: deja libre de texto y logotipos el 14 % superior, el 35 % inferior y el 6 % de cada lado.',
        metaStories: 'Guía de Meta para Historias: deja libre aproximadamente el 14 % (250 px) arriba y abajo.',
        custom: 'Define tus propios márgenes, por ejemplo para ajustarte a la plantilla de un cliente.',
      },
      hint: 'Arrastra para mover · Ctrl + rueda para zoom · Flechas para ajustar',
      mock: {
        follow: 'Seguir', subscribe: 'Suscribirse', caption: 'Lo que pongas aquí queda bajo la descripción…', audio: 'Audio original', reply: 'Enviar mensaje',
        sponsored: 'Publicidad', cta: 'Más información', forYou: 'Para ti', following: 'Siguiendo', reels: 'Reels', handle: 'tumarca',
      },
    },
    content: {
      updated: 'Última revisión',
      tableHead: { platform: 'Plataforma', top: 'Arriba', bottom: 'Abajo', left: 'Izq.', right: 'Der.', area: 'Zona segura', usable: 'Útil' },
      cropHead: { crop: 'Recorte', size: 'Tamaño', where: 'Dónde aparece', lost: 'Se pierde arriba y abajo' },
    },
  },

  pt: {
    meta: {
      title: 'Zona segura para Reels, TikTok e Shorts (1080×1920) — SafeZoneSnap',
      description: 'Envie um vídeo ou imagem e veja exatamente onde os botões e legendas do Instagram Reels, TikTok e YouTube Shorts vão cobrir. Zonas seguras 9:16 no pixel, cortes do feed e modelos para baixar. Roda no navegador.',
    },
    hero: {
      eyebrow: 'Grátis · Privado · Sem upload',
      h1: 'Veja o que o app vai cobrir antes de postar',
      sub: 'Carregue um vídeo ou imagem vertical, alterne entre Reels, TikTok, Shorts e Stories e confira legendas, rostos e chamadas para ação contra zonas seguras medidas no pixel em uma tela de 1080 × 1920.',
    },
    nav: { tool: 'Visualizador', specs: 'Medidas', crops: 'Cortes do feed', faq: 'Dúvidas', guides: 'Guias', language: 'Idioma', skip: 'Ir para o visualizador' },
    footer: {
      about: 'O SafeZoneSnap é uma ferramenta independente que roda no navegador, feita para criadores, editores e times de social media que precisam saber onde a interface de cada plataforma fica no quadro vertical.',
      product: 'Produto',
      company: 'Empresa',
      disclaimer: 'Sem afiliação, endosso ou patrocínio da Meta, Instagram, TikTok, ByteDance, Google ou YouTube. Os nomes de produtos são marcas de seus respectivos donos.',
      rights: 'Todos os direitos reservados.',
      links: { about: 'Sobre', contact: 'Contato', privacy: 'Privacidade', terms: 'Termos de uso', disclaimer: 'Aviso legal', guides: 'Guias (em inglês)' },
    },
    ad: 'Publicidade',
    tool: {
      platforms: { reels: 'Reels', tiktok: 'TikTok', shorts: 'Shorts', story: 'Stories', reelsAds: 'Anúncios Reels', custom: 'Personalizado' },
      sections: { platform: 'Plataforma', media: 'Arquivo', layers: 'Camadas', framing: 'Enquadramento', margins: 'Margens personalizadas', inspector: 'Inspetor', export: 'Exportar' },
      layers: { ui: 'Interface do app', safe: 'Contorno da zona segura', danger: 'Destaque das áreas cobertas', crop45: 'Corte 4:5 do feed', crop34: 'Grade 3:4 do perfil', crop11: 'Corte quadrado 1:1', thirds: 'Regra dos terços' },
      uiOpacity: 'Opacidade da interface',
      fit: 'Escala',
      fitCover: 'Preencher',
      fitContain: 'Encaixar',
      zoom: 'Zoom',
      recenter: 'Centralizar',
      dropTitle: 'Solte um vídeo ou imagem',
      dropSub: 'MP4, MOV, WebM, JPG, PNG, WebP. Os arquivos ficam no seu dispositivo.',
      browse: 'Escolher arquivo',
      replace: 'Trocar',
      remove: 'Remover',
      margins: { top: 'Topo', right: 'Direita', bottom: 'Base', left: 'Esquerda' },
      readout: { safeArea: 'Zona segura', usable: 'Área útil', margins: 'Margens T / D / B / E', cursor: 'Cursor', region: 'Região' },
      status: { idle: 'Passe o cursor sobre o quadro para inspecionar', safe: 'Dentro da zona segura', top: 'Atrás da barra superior', bottom: 'Atrás da legenda', right: 'Atrás dos botões de ação', left: 'Na margem lateral', cropped: 'cortado no feed 4:5' },
      actions: { frame: 'Baixar prévia', template: 'Baixar modelo', copy: 'Copiar medidas', reset: 'Redefinir' },
      toast: { copied: 'Medidas copiadas', saved: 'PNG salvo', badType: 'Esse tipo de arquivo não é suportado', reset: 'Configurações redefinidas', copyFailed: 'Área de transferência indisponível' },
      video: { play: 'Reproduzir', pause: 'Pausar', scrub: 'Posição do vídeo' },
      source: {
        measured: 'Margens de referência medidas sobre o layout atual do app em um quadro de 1080 × 1920.',
        metaAds: 'Orientação publicada pela Meta para anúncios em Reels: deixe 14% do topo, 35% da base e 6% de cada lateral livres de texto e logotipos.',
        metaStories: 'Orientação da Meta para Stories: deixe cerca de 14% (250 px) livres no topo e na base.',
        custom: 'Defina suas próprias margens, por exemplo para seguir o modelo de um cliente.',
      },
      hint: 'Arraste para mover · Ctrl + rolagem para zoom · Setas para ajustar',
      mock: {
        follow: 'Seguir', subscribe: 'Inscrever-se', caption: 'O que ficar aqui embaixo some atrás da legenda…', audio: 'Áudio original', reply: 'Enviar mensagem',
        sponsored: 'Patrocinado', cta: 'Saiba mais', forYou: 'Para você', following: 'Seguindo', reels: 'Reels', handle: 'suamarca',
      },
    },
    content: {
      updated: 'Última revisão',
      tableHead: { platform: 'Plataforma', top: 'Topo', bottom: 'Base', left: 'Esq.', right: 'Dir.', area: 'Zona segura', usable: 'Útil' },
      cropHead: { crop: 'Corte', size: 'Tamanho', where: 'Onde aparece', lost: 'Perdido em cima e embaixo' },
    },
  },

  fr: {
    meta: {
      title: 'Zone de sécurité Reels, TikTok et Shorts (1080×1920) — SafeZoneSnap',
      description: 'Déposez une vidéo ou une image et voyez précisément où les boutons et légendes d’Instagram Reels, TikTok et YouTube Shorts vont la masquer. Zones de sécurité 9:16 au pixel près, recadrages du fil et gabarits téléchargeables. Dans votre navigateur.',
    },
    hero: {
      eyebrow: 'Gratuit · Privé · Aucun envoi',
      h1: 'Voyez ce que l’application va masquer avant de publier',
      sub: 'Chargez une vidéo ou une image verticale, basculez entre Reels, TikTok, Shorts et Stories, et vérifiez sous-titres, visages et appels à l’action face à des zones de sécurité mesurées au pixel sur un canevas 1080 × 1920.',
    },
    nav: { tool: 'Aperçu', specs: 'Mesures', crops: 'Recadrages', faq: 'FAQ', guides: 'Guides', language: 'Langue', skip: 'Aller à l’aperçu' },
    footer: {
      about: 'SafeZoneSnap est un outil indépendant qui fonctionne dans le navigateur, conçu pour les créateurs, monteurs et équipes social media qui doivent savoir où se place l’interface de chaque plateforme.',
      product: 'Produit',
      company: 'Société',
      disclaimer: 'Ni affilié, ni approuvé, ni sponsorisé par Meta, Instagram, TikTok, ByteDance, Google ou YouTube. Les noms de produits sont des marques de leurs propriétaires respectifs.',
      rights: 'Tous droits réservés.',
      links: { about: 'À propos', contact: 'Contact', privacy: 'Confidentialité', terms: 'Conditions', disclaimer: 'Avertissement', guides: 'Guides (en anglais)' },
    },
    ad: 'Publicité',
    tool: {
      platforms: { reels: 'Reels', tiktok: 'TikTok', shorts: 'Shorts', story: 'Stories', reelsAds: 'Pubs Reels', custom: 'Personnalisé' },
      sections: { platform: 'Plateforme', media: 'Fichier', layers: 'Calques', framing: 'Cadrage', margins: 'Marges personnalisées', inspector: 'Inspecteur', export: 'Exporter' },
      layers: { ui: 'Interface de l’app', safe: 'Contour de la zone sûre', danger: 'Teinte des zones masquées', crop45: 'Recadrage 4:5 du fil', crop34: 'Grille de profil 3:4', crop11: 'Recadrage carré 1:1', thirds: 'Règle des tiers' },
      uiOpacity: 'Opacité de l’interface',
      fit: 'Mise à l’échelle',
      fitCover: 'Remplir',
      fitContain: 'Contenir',
      zoom: 'Zoom',
      recenter: 'Recentrer',
      dropTitle: 'Déposez une vidéo ou une image',
      dropSub: 'MP4, MOV, WebM, JPG, PNG, WebP. Les fichiers restent sur votre appareil.',
      browse: 'Choisir un fichier',
      replace: 'Remplacer',
      remove: 'Retirer',
      margins: { top: 'Haut', right: 'Droite', bottom: 'Bas', left: 'Gauche' },
      readout: { safeArea: 'Zone sûre', usable: 'Surface utile', margins: 'Marges H / D / B / G', cursor: 'Curseur', region: 'Zone' },
      status: { idle: 'Survolez le cadre pour inspecter un point', safe: 'Dans la zone de sécurité', top: 'Sous la barre supérieure', bottom: 'Sous la légende', right: 'Sous les boutons d’action', left: 'Dans la marge latérale', cropped: 'coupé dans le fil 4:5' },
      actions: { frame: 'Télécharger l’aperçu', template: 'Télécharger le gabarit', copy: 'Copier les mesures', reset: 'Réinitialiser' },
      toast: { copied: 'Mesures copiées', saved: 'PNG enregistré', badType: 'Ce type de fichier n’est pas pris en charge', reset: 'Réglages réinitialisés', copyFailed: 'Presse-papiers indisponible' },
      video: { play: 'Lecture', pause: 'Pause', scrub: 'Position de la vidéo' },
      source: {
        measured: 'Marges de référence mesurées sur l’interface actuelle, cadre 1080 × 1920.',
        metaAds: 'Recommandation publiée par Meta pour les publicités Reels : laisser 14 % en haut, 35 % en bas et 6 % sur chaque côté sans texte ni logo.',
        metaStories: 'Recommandation Meta pour les Stories : laisser environ 14 % (250 px) libres en haut et en bas.',
        custom: 'Définissez vos propres marges, par exemple pour suivre la charte d’un client.',
      },
      hint: 'Glisser pour déplacer · Ctrl + molette pour zoomer · Flèches pour ajuster',
      mock: {
        follow: 'Suivre', subscribe: 'S’abonner', caption: 'Ce que vous placez ici passe sous la légende…', audio: 'Son original', reply: 'Envoyer un message',
        sponsored: 'Sponsorisé', cta: 'En savoir plus', forYou: 'Pour toi', following: 'Abonnements', reels: 'Reels', handle: 'votremarque',
      },
    },
    content: {
      updated: 'Dernière vérification',
      tableHead: { platform: 'Plateforme', top: 'Haut', bottom: 'Bas', left: 'Gauche', right: 'Droite', area: 'Zone sûre', usable: 'Utile' },
      cropHead: { crop: 'Recadrage', size: 'Taille', where: 'Où il s’applique', lost: 'Perdu en haut et en bas' },
    },
  },

  de: {
    meta: {
      title: 'Safe Zone für Reels, TikTok & Shorts (1080×1920) — SafeZoneSnap',
      description: 'Video oder Bild hineinziehen und genau sehen, wo Buttons und Bildunterschriften von Instagram Reels, TikTok und YouTube Shorts den Inhalt verdecken. Pixelgenaue 9:16-Safe-Zones, Feed-Zuschnitte und Overlay-Vorlagen zum Download. Läuft im Browser.',
    },
    hero: {
      eyebrow: 'Kostenlos · Privat · Kein Upload',
      h1: 'Sieh vor dem Posten, was die App verdeckt',
      sub: 'Lade ein Hochkant-Video oder -Bild, wechsle zwischen Reels, TikTok, Shorts und Stories und prüfe Untertitel, Gesichter und Call-to-Actions gegen pixelgenau vermessene Safe Zones auf einer 1080 × 1920-Fläche.',
    },
    nav: { tool: 'Vorschau', specs: 'Maße', crops: 'Feed-Zuschnitte', faq: 'FAQ', guides: 'Ratgeber', language: 'Sprache', skip: 'Zur Vorschau springen' },
    footer: {
      about: 'SafeZoneSnap ist ein unabhängiges Browser-Tool für Creator, Cutter und Social-Media-Teams, die wissen müssen, wo die Oberfläche jeder Plattform im Hochkantbild liegt.',
      product: 'Produkt',
      company: 'Unternehmen',
      disclaimer: 'Nicht verbunden mit, unterstützt oder gesponsert von Meta, Instagram, TikTok, ByteDance, Google oder YouTube. Produktnamen sind Marken ihrer jeweiligen Inhaber.',
      rights: 'Alle Rechte vorbehalten.',
      links: { about: 'Über uns', contact: 'Kontakt', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', disclaimer: 'Haftungsausschluss', guides: 'Ratgeber (Englisch)' },
    },
    ad: 'Anzeige',
    tool: {
      platforms: { reels: 'Reels', tiktok: 'TikTok', shorts: 'Shorts', story: 'Stories', reelsAds: 'Reels-Ads', custom: 'Eigene' },
      sections: { platform: 'Plattform', media: 'Datei', layers: 'Ebenen', framing: 'Bildausschnitt', margins: 'Eigene Ränder', inspector: 'Inspektor', export: 'Export' },
      layers: { ui: 'App-Oberfläche', safe: 'Safe-Zone-Rahmen', danger: 'Verdeckte Bereiche einfärben', crop45: '4:5-Feed-Zuschnitt', crop34: '3:4-Profilraster', crop11: '1:1-Quadrat', thirds: 'Drittelregel' },
      uiOpacity: 'Deckkraft der Oberfläche',
      fit: 'Skalierung',
      fitCover: 'Füllen',
      fitContain: 'Einpassen',
      zoom: 'Zoom',
      recenter: 'Zentrieren',
      dropTitle: 'Video oder Bild hier ablegen',
      dropSub: 'MP4, MOV, WebM, JPG, PNG, WebP. Dateien bleiben auf deinem Gerät.',
      browse: 'Datei wählen',
      replace: 'Ersetzen',
      remove: 'Entfernen',
      margins: { top: 'Oben', right: 'Rechts', bottom: 'Unten', left: 'Links' },
      readout: { safeArea: 'Safe Zone', usable: 'Nutzbare Fläche', margins: 'Ränder O / R / U / L', cursor: 'Cursor', region: 'Bereich' },
      status: { idle: 'Mit dem Cursor über das Bild fahren', safe: 'Innerhalb der Safe Zone', top: 'Unter der oberen Leiste', bottom: 'Unter der Bildunterschrift', right: 'Unter den Aktions-Buttons', left: 'Im Randabstand', cropped: 'im 4:5-Feed abgeschnitten' },
      actions: { frame: 'Vorschau laden', template: 'Overlay laden', copy: 'Maße kopieren', reset: 'Zurücksetzen' },
      toast: { copied: 'Maße in die Zwischenablage kopiert', saved: 'PNG gespeichert', badType: 'Dieser Dateityp wird nicht unterstützt', reset: 'Einstellungen zurückgesetzt', copyFailed: 'Zwischenablage nicht verfügbar' },
      video: { play: 'Abspielen', pause: 'Pause', scrub: 'Videoposition' },
      source: {
        measured: 'Referenzränder, gemessen an der aktuellen App-Oberfläche auf einem 1080 × 1920-Frame.',
        metaAds: 'Metas veröffentlichte Vorgabe für Reels-Anzeigen: oben 14 %, unten 35 % und seitlich je 6 % frei von Text und Logos halten.',
        metaStories: 'Metas Vorgabe für Stories: oben und unten etwa 14 % (250 px) freihalten.',
        custom: 'Eigene Ränder festlegen, etwa passend zur Vorlage eines Kunden.',
      },
      hint: 'Ziehen zum Verschieben · Strg + Mausrad zum Zoomen · Pfeiltasten zum Feinjustieren',
      mock: {
        follow: 'Folgen', subscribe: 'Abonnieren', caption: 'Alles hier unten liegt unter der Bildunterschrift…', audio: 'Original-Audio', reply: 'Nachricht senden',
        sponsored: 'Gesponsert', cta: 'Mehr dazu', forYou: 'Für dich', following: 'Folge ich', reels: 'Reels', handle: 'deinemarke',
      },
    },
    content: {
      updated: 'Zuletzt geprüft',
      tableHead: { platform: 'Plattform', top: 'Oben', bottom: 'Unten', left: 'Links', right: 'Rechts', area: 'Safe Zone', usable: 'Nutzbar' },
      cropHead: { crop: 'Zuschnitt', size: 'Größe', where: 'Wo er greift', lost: 'Oben und unten verloren' },
    },
  },

  hi: {
    meta: {
      title: 'Reels, TikTok और Shorts के लिए सेफ़ ज़ोन चेकर (1080×1920) — SafeZoneSnap',
      description: 'वीडियो या इमेज डालें और ठीक-ठीक देखें कि Instagram Reels, TikTok और YouTube Shorts के बटन और कैप्शन उसे कहाँ ढक देंगे। पिक्सेल-सटीक 9:16 सेफ़ ज़ोन, फ़ीड क्रॉप और डाउनलोड करने लायक ओवरले टेम्पलेट। सब कुछ आपके ब्राउज़र में।',
    },
    hero: {
      eyebrow: 'मुफ़्त · प्राइवेट · कोई अपलोड नहीं',
      h1: 'पोस्ट करने से पहले देखें कि ऐप क्या ढक देगा',
      sub: 'वर्टिकल वीडियो या इमेज खोलें, Reels, TikTok, Shorts और Stories के बीच बदलें, और 1080 × 1920 कैनवास पर पिक्सेल से नापे गए सेफ़ ज़ोन के हिसाब से सबटाइटल, चेहरे और कॉल-टू-एक्शन जाँचें।',
    },
    nav: { tool: 'प्रीव्यूअर', specs: 'माप', crops: 'फ़ीड क्रॉप', faq: 'सवाल-जवाब', guides: 'गाइड', language: 'भाषा', skip: 'सीधे प्रीव्यूअर पर जाएँ' },
    footer: {
      about: 'SafeZoneSnap एक स्वतंत्र, ब्राउज़र में चलने वाला टूल है, जो उन क्रिएटर्स, एडिटर्स और सोशल मीडिया टीमों के लिए बना है जिन्हें यह जानना होता है कि वर्टिकल फ़्रेम पर हर प्लेटफ़ॉर्म का इंटरफ़ेस कहाँ आता है।',
      product: 'प्रोडक्ट',
      company: 'कंपनी',
      disclaimer: 'Meta, Instagram, TikTok, ByteDance, Google या YouTube से संबद्ध, समर्थित या प्रायोजित नहीं। सभी प्रोडक्ट नाम उनके संबंधित मालिकों के ट्रेडमार्क हैं।',
      rights: 'सर्वाधिकार सुरक्षित।',
      links: { about: 'हमारे बारे में', contact: 'संपर्क', privacy: 'गोपनीयता नीति', terms: 'सेवा की शर्तें', disclaimer: 'अस्वीकरण', guides: 'गाइड (अंग्रेज़ी)' },
    },
    ad: 'विज्ञापन',
    tool: {
      platforms: { reels: 'Reels', tiktok: 'TikTok', shorts: 'Shorts', story: 'Stories', reelsAds: 'Reels विज्ञापन', custom: 'कस्टम' },
      sections: { platform: 'प्लेटफ़ॉर्म', media: 'फ़ाइल', layers: 'लेयर', framing: 'फ़्रेमिंग', margins: 'कस्टम मार्जिन', inspector: 'इंस्पेक्टर', export: 'एक्सपोर्ट' },
      layers: { ui: 'ऐप इंटरफ़ेस', safe: 'सेफ़ ज़ोन की रेखा', danger: 'ढके हिस्सों पर रंग', crop45: '4:5 फ़ीड क्रॉप', crop34: '3:4 प्रोफ़ाइल ग्रिड', crop11: '1:1 स्क्वेयर क्रॉप', thirds: 'रूल ऑफ़ थर्ड्स' },
      uiOpacity: 'इंटरफ़ेस की पारदर्शिता',
      fit: 'स्केलिंग',
      fitCover: 'फ़्रेम भरें',
      fitContain: 'पूरा दिखाएँ',
      zoom: 'ज़ूम',
      recenter: 'बीच में करें',
      dropTitle: 'वीडियो या इमेज यहाँ छोड़ें',
      dropSub: 'MP4, MOV, WebM, JPG, PNG, WebP. फ़ाइलें आपके डिवाइस पर ही रहती हैं।',
      browse: 'फ़ाइल चुनें',
      replace: 'बदलें',
      remove: 'हटाएँ',
      margins: { top: 'ऊपर', right: 'दाएँ', bottom: 'नीचे', left: 'बाएँ' },
      readout: { safeArea: 'सेफ़ एरिया', usable: 'उपयोगी फ़्रेम', margins: 'मार्जिन ऊ / दा / नी / बा', cursor: 'कर्सर', region: 'हिस्सा' },
      status: { idle: 'किसी बिंदु को जाँचने के लिए फ़्रेम पर कर्सर ले जाएँ', safe: 'सेफ़ ज़ोन के अंदर', top: 'ऊपरी बार के नीचे', bottom: 'कैप्शन वाले हिस्से के नीचे', right: 'एक्शन बटनों के नीचे', left: 'किनारे की पैडिंग में', cropped: '4:5 फ़ीड में कट जाएगा' },
      actions: { frame: 'प्रीव्यू डाउनलोड', template: 'ओवरले डाउनलोड', copy: 'माप कॉपी करें', reset: 'रीसेट' },
      toast: { copied: 'माप क्लिपबोर्ड पर कॉपी हो गए', saved: 'PNG सेव हो गया', badType: 'यह फ़ाइल टाइप सपोर्टेड नहीं है', reset: 'सेटिंग्स डिफ़ॉल्ट पर लौट आईं', copyFailed: 'इस ब्राउज़र में क्लिपबोर्ड उपलब्ध नहीं है' },
      video: { play: 'चलाएँ', pause: 'रोकें', scrub: 'वीडियो की स्थिति' },
      source: {
        measured: '1080 × 1920 फ़्रेम पर मौजूदा ऐप लेआउट से नापे गए रेफ़रेंस मार्जिन।',
        metaAds: 'Reels विज्ञापनों के लिए Meta की प्रकाशित गाइडलाइन: ऊपर 14%, नीचे 35% और दोनों तरफ़ 6% हिस्सा टेक्स्ट और लोगो से खाली रखें।',
        metaStories: 'Stories के लिए Meta की गाइडलाइन: ऊपर और नीचे लगभग 14% (250 px) खाली रखें।',
        custom: 'अपने मार्जिन ख़ुद तय करें, जैसे किसी क्लाइंट के ब्रांड टेम्पलेट के हिसाब से।',
      },
      hint: 'खिसकाने के लिए ड्रैग करें · ज़ूम के लिए Ctrl + स्क्रॉल · बारीक़ी के लिए ऐरो की',
      mock: {
        follow: 'फ़ॉलो', subscribe: 'सब्सक्राइब', caption: 'यहाँ नीचे रखी हर चीज़ कैप्शन के पीछे छिप जाती है…', audio: 'ओरिजिनल ऑडियो', reply: 'मैसेज भेजें',
        sponsored: 'प्रायोजित', cta: 'और जानें', forYou: 'आपके लिए', following: 'फ़ॉलोइंग', reels: 'Reels', handle: 'aapkabrand',
      },
    },
    content: {
      updated: 'आख़िरी समीक्षा',
      tableHead: { platform: 'प्लेटफ़ॉर्म', top: 'ऊपर', bottom: 'नीचे', left: 'बाएँ', right: 'दाएँ', area: 'सेफ़ एरिया', usable: 'उपयोगी' },
      cropHead: { crop: 'क्रॉप', size: 'साइज़', where: 'कहाँ दिखता है', lost: 'ऊपर-नीचे कटता है' },
    },
  },
};
