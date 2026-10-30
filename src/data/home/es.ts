import type { HomeContent } from './types';

const es: HomeContent = {
  toc: 'En esta página',
  cropWhere: [
    'Feed principal de Instagram y Facebook, cuando un Reel se reproduce entre publicaciones',
    'Cuadrícula del perfil de Instagram (miniaturas 3:4 desde enero de 2025)',
    'Cuadrículas cuadradas antiguas, ubicaciones cuadradas de Facebook y LinkedIn, vistas previas de enlaces',
  ],
  sections: [
    {
      id: 'what',
      title: 'Qué es realmente una zona segura',
      lead: 'Una zona segura es la parte de un vídeo vertical de 1080 × 1920 que ninguna interfaz de la app cubre. En Instagram Reels mide 880 × 1280 px (220 px arriba, 420 px abajo, 60 px a la izquierda y 140 px a la derecha); en TikTok, 870 × 1260 px, y en YouTube Shorts, 880 × 1380 px. Coloca dentro el texto, las caras, los logotipos y las llamadas a la acción.',
      blocks: [
        { p: 'La zona segura es la parte del encuadre vertical sobre la que ninguna plataforma va a dibujar su interfaz. Instagram Reels, TikTok y YouTube Shorts reproducen tu vídeo de borde a borde en un lienzo de 1080 × 1920 píxeles y, encima, pintan sus botones, la descripción, la barra de progreso y la navegación. No hay espacio reservado: la aplicación coloca sus controles directamente sobre tus píxeles, y además añade un degradado oscuro para que su propio texto blanco se lea bien.' },
        { p: 'Por eso un plano que se ve perfecto en el editor puede estropearse al publicarlo. El subtítulo del tercio inferior choca con la descripción y con el nombre del audio; el precio en la esquina del producto desaparece detrás del botón de «me gusta»; la cara del presentador, encuadrada un poco alta, queda bajo las pestañas «Siguiendo / Para ti». El editor no sabe nada de la interfaz que se pondrá encima después, así que ese problema no aparece en la vista previa del escritorio.' },
        { p: 'Una zona segura no es una recomendación estética, sino cuatro márgenes medidos —arriba, derecha, abajo e izquierda— en píxeles del fotograma de entrega. Todo lo que deba verse y leerse (textos, logotipos, rostros, detalles del producto, llamadas a la acción) va dentro del rectángulo que dejan esos márgenes. El fondo, las texturas y el movimiento pueden y deben seguir ocupando todo el 9:16: esa zona sigue viéndose, solo que no es fiable.' },
        { p: 'SafeZoneSnap te permite comprobarlo antes de publicar. Carga una imagen o un vídeo, elige la plataforma y el previsualizador dibuja una simulación fiel de su interfaz, el rectángulo seguro exacto, las zonas tapadas y los recortes que se aplican en el feed y en el perfil. Todo ocurre en tu navegador: tus archivos nunca se suben a ningún servidor.' },
      ],
    },
    {
      id: 'why',
      title: 'Por qué la interfaz aparece donde aparece',
      blocks: [
        { h3: 'La parte inferior siempre es la más cargada' },
        { p: 'Abajo se acumulan la identidad del creador (avatar, nombre de usuario y botón de seguir o suscribirse), la descripción, el audio, la barra de progreso y, en la mayoría de los móviles, la navegación de la app. Son de cuatro a seis filas apiladas, de ahí que los márgenes inferiores se midan en cientos de píxeles: 380 px en Shorts, 420 px en Reels y 480 px en TikTok, donde las descripciones son más largas y los hashtags suelen ocupar otra línea. Los anuncios necesitan todavía más espacio, porque añaden un botón de llamada a la acción.' },
        { h3: 'El borde derecho lleva la columna de acciones' },
        { p: '«Me gusta», comentarios, compartir, guardar y el acceso al audio o al remix se apilan en una columna a la derecha que empieza a media altura y baja hasta la zona de la descripción. Mide entre 120 y 150 px de ancho con sus etiquetas, y por eso el margen derecho siempre es mayor que el izquierdo.' },
        { h3: 'Arriba están las pestañas, la búsqueda y la barra de estado' },
        { p: 'Arriba aparecen la barra de estado del teléfono y una sola fila de la app con el título o el selector de feed y un icono de cámara o búsqueda. Por eso los márgenes superiores son menores: 160 px en Shorts, 180 px en TikTok y 220 px en Reels. Las Historias son la excepción: la barra de progreso, el nombre de la cuenta y el botón de cerrar llevan el área libre hasta unos 250 px.' },
        { h3: 'La forma del móvil cambia, la regla no' },
        { p: 'La mayoría de los móviles actuales tienen pantallas de unos 19,5:9, más alargadas que 9:16. En ellos algunas apps colocan la navegación por debajo del vídeo, de modo que se tapa menos. Como no eliges el móvil de tu público, las zonas seguras se calculan para el peor caso: toda la interfaz encima de todo el fotograma de 1080 × 1920. Si tu contenido supera esa prueba, funciona en cualquier pantalla.' },
      ],
    },
    {
      id: 'specs',
      title: 'Medidas de la zona segura por plataforma',
      lead: 'En un fotograma de 1080 × 1920, mantén el contenido importante dentro de estos márgenes (arriba / abajo / izquierda / derecha): Instagram Reels 220 / 420 / 60 / 140 px, TikTok 180 / 480 / 60 / 150 px, YouTube Shorts 160 / 380 / 60 / 140 px, Historias de Instagram 250 / 250 / 65 / 65 px y anuncios de Reels 250 / 670 / 65 / 65 px. Un diseño válido para las tres apps orgánicas necesita 220 / 480 / 60 / 150 px.',
      blocks: [
        { p: 'La tabla recoge los márgenes que usa cada ajuste de SafeZoneSnap sobre el fotograma estándar de 1080 × 1920. «Zona segura» es el rectángulo que queda tras quitar los cuatro márgenes, y «Útil» es el porcentaje del fotograma que representa. Las filas de Historias y anuncios en Reels siguen la guía publicada por Meta; las de Reels, TikTok y Shorts orgánicos son medidas de referencia tomadas de la interfaz actual de cada app.' },
        { table: 'specs' },
        { h3: 'Instagram Reels' },
        { p: 'Mantén el texto entre x 60–940 e y 220–1500. El nombre de usuario empieza hacia y 1550, con la descripción y el audio debajo. Si el Reel también se verá en el feed principal, ten en cuenta que el recorte 4:5 elimina 285 px arriba y abajo: arriba es un límite más estricto que la propia interfaz de Reels.' },
        { h3: 'TikTok' },
        { p: 'Mantén el texto entre x 60–930 e y 180–1440. TikTok tiene el bloque inferior más alto porque muestra más texto de la descripción, los hashtags suelen saltar de línea y pueden apilarse el audio, los enlaces de TikTok Shop y las etiquetas de efectos. La columna derecha también es algo más ancha por el avatar con su insignia de seguir.' },
        { h3: 'YouTube Shorts' },
        { p: 'Mantén el texto entre x 60–940 e y 160–1540. Shorts ofrece la zona segura orgánica más amplia: el título, el canal y el botón de suscribirse quedan más abajo, y la barra superior solo tiene búsqueda y menú. Los botones de «me gusta» y «no me gusta» empiezan bastante arriba, así que evita también el borde derecho a media altura.' },
        { h3: 'Historias y anuncios en Reels' },
        { p: 'Para las Historias, Meta recomienda dejar libre alrededor del 14 % del fotograma —unos 250 px— arriba y abajo. Para los anuncios en Reels, la recomendación es dejar libres de texto y logotipos el 14 % superior (250 px), el 35 % inferior (670 px) y el 6 % de cada lateral (65 px). Si una pieza va a funcionar como publicación orgánica y como anuncio, diseña con los márgenes del anuncio.' },
      ],
    },
    {
      id: 'crops',
      title: 'Recortes del feed y del perfil: la segunda zona segura',
      lead: 'Un Reel 9:16 que aparece en el feed de Instagram o Facebook se recorta a 4:5 (1080 × 1350), lo que elimina 285 px arriba y abajo. La cuadrícula del perfil de Instagram usa 3:4 (1080 × 1440) y quita 240 px de cada extremo; un cuadrado 1:1 quita 420 px. Los recortes son centrados: mantén el texto entre y 285 e y 1500.',
      blocks: [
        { p: 'Un vídeo vertical no siempre se muestra en 9:16. En el feed principal de Instagram y Facebook se recorta a 4:5; en la cuadrícula de tu perfil se convierte en una miniatura 3:4, el formato que Instagram adoptó en enero de 2025; otras superficies siguen usando 1:1. Todos los recortes se toman desde el centro, quitando la misma franja arriba y abajo.' },
        { table: 'crops' },
        { p: 'En la práctica, la parte superior se estrecha por dos lados: la interfaz de Reels tapa los primeros 220 px y el recorte 4:5 elimina los primeros 285 px. Un titular en y 240 se ve en la pestaña de Reels, pero queda cortado en el feed. Si tu Reel debe funcionar en ambos sitios, toma y 285 como el borde superior real del texto. Y en las portadas, mantén el título dentro del área central de 1080 × 1440 para que no se corte en la cuadrícula del perfil.' },
      ],
    },
    {
      id: 'math',
      title: 'Cómo convertir los márgenes a cualquier resolución',
      blocks: [
        { p: 'Los márgenes se publican en píxeles sobre 1080 × 1920, pero puedes estar editando a 720 × 1280, en 4K vertical o en un lienzo de diseño arbitrario. Como cada plataforma escala tu vídeo a la pantalla, los márgenes escalan en proporción. Conviértelos una vez en porcentajes y te servirán a cualquier tamaño.' },
        { pre: 'arriba%    = arriba    / 1920      derecha%   = derecha   / 1080\nabajo%     = abajo     / 1920      izquierda% = izquierda / 1080\n\nancho_seguro = 1080 − 60 − 140  = 880 px\nalto_seguro  = 1920 − 220 − 420 = 1280 px   (Instagram Reels)' },
        { p: 'Para Reels resultan 11,46 % arriba, 21,88 % abajo, 5,56 % a la izquierda y 12,96 % a la derecha. A 720 × 1280 equivalen a 147, 280, 40 y 93 px; a 2160 × 3840 se duplican hasta 440, 840, 120 y 280 px.' },
        { h3: 'Una sola maqueta para todas las plataformas' },
        { p: 'Si publicas la misma edición en las tres apps, la zona segura es la intersección de todas: toma el mayor margen de cada lado. Para Reels, TikTok y Shorts son 220 px arriba, 150 px a la derecha, 480 px abajo y 60 px a la izquierda, lo que deja un rectángulo de <strong>870 × 1220 px</strong> (x 60–930, y 220–1440), alrededor del 51 % del fotograma. Introduce esos valores en el ajuste Personalizado para tener siempre esa guía universal a la vista.' },
      ],
    },
    {
      id: 'workflow',
      title: 'Cómo comprobar las zonas seguras de un vídeo',
      lead: 'Para comprobar las zonas seguras de un vídeo, exporta un fotograma o un clip corto a 1080 × 1920, suéltalo en el previsualizador de SafeZoneSnap y alterna entre Reels, TikTok y Shorts. Las franjas rayadas en rojo muestran lo que tapa la interfaz y el contorno verde marca el área segura. Pasa el cursor por cualquier elemento y corrige la posición en tu editor.',
      blocks: [
        { ol: [
          '<strong>Exporta un fotograma o un clip corto</strong> a la resolución final, idealmente el momento con más texto en pantalla.',
          '<strong>Suéltalo en el previsualizador</strong> o pega una captura con Ctrl + V. Los vídeos se reproducen en bucle y se pueden recorrer con la barra inferior.',
          '<strong>Cambia de plataforma</strong>: las franjas rayadas marcan lo que queda tapado y el contorno verde es el rectángulo seguro con su tamaño en píxeles.',
          '<strong>Pasa el cursor</strong> por cualquier elemento para ver sus coordenadas exactas y si queda dentro de la zona segura, bajo una parte concreta de la interfaz o fuera del recorte 4:5.',
          '<strong>Comparte el resultado</strong>: «Descargar vista» guarda un PNG de 1080 × 1920 para la aprobación del cliente y «Copiar medidas» deja los márgenes en el portapapeles.',
        ] },
        { p: '«Descargar plantilla» genera un PNG transparente de 1080 × 1920 solo con las guías activas. Colócalo en la pista superior de Premiere Pro, DaVinci Resolve, CapCut o Canva, bloquéalo y desactívalo antes de exportar para que nunca aparezca en el vídeo final.' },
      ],
    },
    {
      id: 'type',
      title: 'Dónde colocar subtítulos, títulos y llamadas a la acción',
      blocks: [
        { ul: [
          '<strong>Subtítulos:</strong> sitúa la línea base del renglón inferior entre y 1180 e y 1420. Así dos líneas quedan libres del bloque de descripción de TikTok, el más exigente, sin tapar la cara de quien habla. Con 1080 px de ancho, un tamaño de 48–64 px en peso grueso se lee bien en el móvil.',
          '<strong>Longitud:</strong> unos 32 caracteres por línea y nunca más de dos líneas a la vez. Un bloque estrecho y centrado es más seguro que uno ancho.',
          '<strong>Ganchos y titulares:</strong> mantenlos entre y 300 e y 900 para que sobrevivan al recorte 4:5 y a la interfaz superior.',
          '<strong>Logotipos:</strong> las marcas de agua en las esquinas casi siempre quedan tapadas; colócalas arriba a la izquierda dentro de la zona segura.',
          '<strong>Llamadas a la acción:</strong> botones, precios y flechas deben quedar por encima del margen inferior. Una flecha que apunta «al enlace de abajo» acaba señalando la interfaz de la plataforma.',
        ] },
        { p: 'Por último, recuerda que las interfaces cambian con las actualizaciones, el idioma y la longitud de la descripción, así que fuentes distintas dan cifras que varían entre 20 y 80 px. Trata cada zona segura como un mínimo y deja un pequeño colchón extra de 40 a 60 px.' },
      ],
    },
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    { q: '¿Se suben mis vídeos o imágenes a algún sitio?', a: 'No. Los archivos se abren directamente en tu navegador y se dibujan en un canvas de tu propio dispositivo. No se envía nada a ningún servidor. Solo se recuerdan tus preferencias de visualización (plataforma, capas, opacidad) en el almacenamiento local del navegador.' },
    { q: '¿Qué resolución debe tener un vídeo vertical?', a: 'Exporta a 1080 × 1920 píxeles (9:16) para Reels, TikTok, Shorts e Historias. Las plataformas aceptan resoluciones mayores como 2160 × 3840; los porcentajes de la zona segura son los mismos a cualquier tamaño.' },
    { q: '¿Cuál es la zona segura de Instagram Reels?', a: 'En un fotograma de 1080 × 1920, deja al menos 220 px arriba, 420 px abajo, 60 px a la izquierda y 140 px a la derecha: queda un área de 880 × 1280 px. Si el Reel también aparecerá en el feed, mantén el texto por debajo de y 285 por el recorte 4:5.' },
    { q: '¿Cuál es la zona segura de TikTok?', a: 'Deja al menos 180 px arriba, 480 px abajo, 60 px a la izquierda y 150 px a la derecha, lo que da un área de 870 × 1260 px.' },
    { q: '¿Existe una zona segura válida para todas las plataformas?', a: 'Sí: usa el mayor margen de cada lado. Para Reels, TikTok y Shorts juntos son 220 px arriba, 150 px a la derecha, 480 px abajo y 60 px a la izquierda, un área de 870 × 1220 px.' },
    { q: '¿Puedo usar la plantilla descargada en CapCut, Premiere o Canva?', a: 'Sí. «Descargar plantilla» guarda un PNG transparente de 1080 × 1920 con las guías activas. Colócalo en la capa superior como referencia y ocúltalo antes de exportar.' },
  ],
  sources: {
    title: 'Fuentes y metodología',
    note: 'Última revisión: octubre de 2026. Los márgenes de Historias y anuncios de Reels siguen los porcentajes publicados por Meta. Los de Reels, TikTok y Shorts orgánicos son mediciones propias de SafeZoneSnap sobre el reproductor actual de cada app a 1080 × 1920, en el peor caso entre formatos de teléfono y redondeadas con margen. TikTok y YouTube no publican márgenes seguros orgánicos; los enlaces siguientes documentan el tamaño del fotograma y el comportamiento del reproductor.',
  },
};

export default es;
