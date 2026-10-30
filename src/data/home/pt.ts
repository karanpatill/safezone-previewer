import type { HomeContent } from './types';

const pt: HomeContent = {
  toc: 'Nesta página',
  cropWhere: [
    'Feed principal do Instagram e do Facebook, quando o Reel toca entre as publicações',
    'Grade do perfil do Instagram (miniaturas 3:4 desde janeiro de 2025)',
    'Grades quadradas antigas, posicionamentos quadrados do Facebook e LinkedIn, prévias de links',
  ],
  sections: [
    {
      id: 'what',
      title: 'O que é, de fato, uma zona segura',
      lead: 'Uma zona segura é a parte de um vídeo vertical de 1080 × 1920 que nenhuma interface do app cobre. No Instagram Reels ela mede 880 × 1280 px (220 px no topo, 420 px embaixo, 60 px à esquerda e 140 px à direita); no TikTok, 870 × 1260 px; e no YouTube Shorts, 880 × 1380 px. Mantenha textos, rostos, logos e chamadas para ação dentro dela.',
      blocks: [
        { p: 'Zona segura é a parte do quadro vertical sobre a qual nenhuma plataforma vai desenhar a própria interface. Instagram Reels, TikTok e YouTube Shorts exibem o seu vídeo de ponta a ponta numa tela de 1080 × 1920 pixels e, por cima dele, desenham botões, legenda, barra de progresso e navegação. Não existe espaço reservado: o app pinta os controles direto sobre os seus pixels e ainda aplica um degradê escuro para que o texto branco dele fique legível.' },
        { p: 'É por isso que um quadro perfeito no editor pode desandar depois de publicado. A legenda do terço inferior bate na descrição e no nome do áudio; o preço no canto do produto some atrás do botão de curtir; o rosto do apresentador, enquadrado um pouco alto, fica sob as abas «Seguindo / Para você». O editor não sabe nada da interface que será empilhada depois, então o problema não aparece na prévia do computador.' },
        { p: 'Uma zona segura não é sugestão estética: são quatro margens medidas — topo, direita, base e esquerda — em pixels do quadro final. Tudo que precisa ser visto e lido (textos, logos, rostos, detalhes do produto, chamadas para ação) vai dentro do retângulo que sobra. Fundo, textura e movimento podem e devem continuar ocupando o 9:16 inteiro: essa área continua visível, só não é confiável.' },
        { p: 'Com o SafeZoneSnap você confere isso antes de postar. Carregue uma imagem ou um vídeo, escolha a plataforma e o visualizador desenha uma simulação fiel da interface, o retângulo seguro exato, as áreas cobertas e os cortes aplicados no feed e no perfil. Tudo roda no seu navegador; seus arquivos nunca são enviados a nenhum servidor.' },
      ],
    },
    {
      id: 'why',
      title: 'Por que a interface fica onde fica',
      blocks: [
        { h3: 'A base é sempre a parte mais cheia' },
        { p: 'Embaixo ficam a identidade do criador (foto, @ e botão de seguir ou de inscrição), a legenda, o áudio, a barra de progresso e, na maioria dos celulares, a navegação do app. São de quatro a seis linhas empilhadas, por isso as margens inferiores são medidas em centenas de pixels: 380 px no Shorts, 420 px no Reels e 480 px no TikTok, onde as legendas são mais longas e as hashtags costumam quebrar linha. Anúncios ocupam ainda mais espaço por causa do botão de chamada para ação.' },
        { h3: 'A lateral direita carrega a coluna de ações' },
        { p: 'Curtir, comentar, compartilhar, salvar e o atalho de áudio ou remix ficam empilhados numa coluna à direita, que começa no meio do quadro e desce até a área da legenda. Com os rótulos, ela tem de 120 a 150 px de largura — por isso a margem direita é sempre maior que a esquerda.' },
        { h3: 'No topo ficam abas, busca e barra de status' },
        { p: 'Em cima aparecem a barra de status do celular e uma única linha do app com título ou seletor de feed e um ícone de câmera ou busca. Daí as margens superiores menores: 160 px no Shorts, 180 px no TikTok e 220 px no Reels. Stories são a exceção: barra de progresso, nome da conta e botão de fechar levam a área livre a cerca de 250 px.' },
        { h3: 'O formato do celular muda, a regra não' },
        { p: 'A maioria dos celulares atuais tem tela por volta de 19,5:9, mais alta que 9:16. Neles, alguns apps colocam a navegação abaixo do vídeo e cobrem menos. Como você não escolhe o aparelho do seu público, as zonas seguras são calculadas para o pior caso: a interface inteira sobre o quadro inteiro de 1080 × 1920.' },
      ],
    },
    {
      id: 'specs',
      title: 'Medidas da zona segura por plataforma',
      lead: 'Num quadro de 1080 × 1920, mantenha o conteúdo importante dentro destas margens (topo / base / esquerda / direita): Instagram Reels 220 / 420 / 60 / 140 px, TikTok 180 / 480 / 60 / 150 px, YouTube Shorts 160 / 380 / 60 / 140 px, Stories do Instagram 250 / 250 / 65 / 65 px e anúncios no Reels 250 / 670 / 65 / 65 px. Um layout único para os três apps orgânicos precisa de 220 / 480 / 60 / 150 px.',
      blocks: [
        { p: 'A tabela mostra as margens usadas em cada predefinição do SafeZoneSnap no quadro padrão de 1080 × 1920. «Zona segura» é o retângulo que sobra depois de tirar as quatro margens e «Útil» é a fração do quadro que ele representa. As linhas de Stories e de anúncios em Reels seguem a orientação publicada pela Meta; Reels, TikTok e Shorts orgânicos são medições de referência do layout atual de cada app.' },
        { table: 'specs' },
        { h3: 'Instagram Reels' },
        { p: 'Mantenha o texto entre x 60–940 e y 220–1500. O @ começa por volta de y 1550, com a legenda e o áudio logo abaixo. Se o Reel também aparecer no feed principal, lembre que o corte 4:5 remove 285 px em cima e embaixo — no topo, isso é mais restritivo do que a própria interface do Reels.' },
        { h3: 'TikTok' },
        { p: 'Mantenha o texto entre x 60–930 e y 180–1440. O TikTok tem o bloco inferior mais alto: mostra mais texto da legenda, as hashtags quebram linha e áudio, links do TikTok Shop e rótulos de efeitos podem se empilhar. A coluna direita também é um pouco mais larga por causa da foto do perfil com o selo de seguir.' },
        { h3: 'YouTube Shorts' },
        { p: 'Mantenha o texto entre x 60–940 e y 160–1540. O Shorts tem a maior zona segura orgânica: título, canal e botão de inscrição ficam mais baixos, e a barra superior só tem busca e menu. Os botões de gostei e não gostei começam bem alto, então evite também a borda direita no meio do quadro.' },
        { h3: 'Stories e anúncios em Reels' },
        { p: 'Para Stories, a Meta recomenda deixar livres cerca de 14% do quadro — uns 250 px — no topo e na base. Para anúncios em Reels, a orientação é deixar sem texto nem logos 14% do topo (250 px), 35% da base (670 px) e 6% de cada lateral (65 px). Se a mesma peça vai rodar como post orgânico e como anúncio, use as margens do anúncio.' },
      ],
    },
    {
      id: 'crops',
      title: 'Cortes do feed e do perfil: a segunda zona segura',
      lead: 'Um Reel 9:16 exibido no feed do Instagram ou do Facebook é cortado para 4:5 (1080 × 1350), o que remove 285 px do topo e da base. A grade do perfil do Instagram usa 3:4 (1080 × 1440) e remove 240 px de cada ponta; um quadrado 1:1 remove 420 px. Os cortes são centralizados, então mantenha o texto entre y 285 e y 1500.',
      blocks: [
        { p: 'Um vídeo vertical nem sempre aparece em 9:16. No feed principal do Instagram e do Facebook ele é cortado em 4:5; na grade do perfil vira uma miniatura 3:4, formato que o Instagram adotou em janeiro de 2025; outras superfícies ainda usam 1:1. Todos os cortes partem do centro e removem faixas iguais em cima e embaixo.' },
        { table: 'crops' },
        { p: 'Na prática, o topo é apertado por dois lados: a interface do Reels cobre os primeiros 220 px e o corte 4:5 remove os primeiros 285 px. Um título em y 240 aparece na aba do Reels, mas some no feed. Se o seu Reel precisa funcionar nos dois lugares, considere y 285 como o topo real do texto. Nas capas, mantenha o título dentro da área central de 1080 × 1440 para que ele não seja cortado na grade.' },
      ],
    },
    {
      id: 'math',
      title: 'Como converter as margens para qualquer resolução',
      blocks: [
        { p: 'As margens são publicadas em pixels sobre 1080 × 1920, mas você pode estar editando em 720 × 1280, em 4K vertical ou numa tela de design qualquer. Como cada plataforma redimensiona o vídeo para a tela, as margens escalam na mesma proporção. Converta uma vez em porcentagens e elas servem para qualquer tamanho.' },
        { pre: 'topo%  = topo  / 1920       direita%  = direita  / 1080\nbase%  = base  / 1920       esquerda% = esquerda / 1080\n\nlargura_segura = 1080 − 60 − 140  = 880 px\naltura_segura  = 1920 − 220 − 420 = 1280 px   (Instagram Reels)' },
        { p: 'No Reels isso dá 11,46% no topo, 21,88% na base, 5,56% à esquerda e 12,96% à direita. Em 720 × 1280 viram 147, 280, 40 e 93 px; em 2160 × 3840 dobram para 440, 840, 120 e 280 px.' },
        { h3: 'Um só layout para todas as plataformas' },
        { p: 'Se você publica a mesma edição nos três apps, a zona segura é a interseção de todas: pegue a maior margem de cada lado. Para Reels, TikTok e Shorts juntos, são 220 px no topo, 150 px à direita, 480 px na base e 60 px à esquerda, o que deixa um retângulo de <strong>870 × 1220 px</strong> (x 60–930, y 220–1440), cerca de 51% do quadro. Coloque esses valores na predefinição Personalizado para manter esse guia universal na tela.' },
      ],
    },
    {
      id: 'workflow',
      title: 'Como verificar as zonas seguras de um vídeo',
      lead: 'Para verificar as zonas seguras de um vídeo, exporte um quadro ou um clipe curto em 1080 × 1920, solte-o no visualizador do SafeZoneSnap e alterne entre Reels, TikTok e Shorts. As faixas vermelhas hachuradas mostram o que a interface cobre e o contorno verde marca a área segura. Passe o cursor sobre qualquer elemento e corrija a posição no seu editor.',
      blocks: [
        { ol: [
          '<strong>Exporte um quadro ou um clipe curto</strong> na resolução final, de preferência o momento com mais texto na tela.',
          '<strong>Solte no visualizador</strong> ou cole uma captura com Ctrl + V. Vídeos tocam em loop e podem ser percorridos pela barra abaixo do quadro.',
          '<strong>Alterne as plataformas</strong>: as faixas listradas mostram o que fica coberto e o contorno verde é o retângulo seguro, com o tamanho em pixels.',
          '<strong>Passe o cursor</strong> sobre qualquer elemento para ver as coordenadas exatas e saber se ele está na zona segura, atrás de uma parte da interface ou fora do corte 4:5.',
          '<strong>Compartilhe</strong>: «Baixar prévia» salva um PNG de 1080 × 1920 para aprovação do cliente e «Copiar medidas» leva as margens para a área de transferência.',
        ] },
        { p: '«Baixar modelo» gera um PNG transparente de 1080 × 1920 apenas com os guias ativos. Coloque-o na trilha de cima no Premiere Pro, DaVinci Resolve, CapCut ou Canva, trave a trilha e desative-a antes de exportar para que ele nunca vá parar no vídeo final.' },
      ],
    },
    {
      id: 'type',
      title: 'Onde colocar legendas, títulos e chamadas para ação',
      blocks: [
        { ul: [
          '<strong>Legendas:</strong> posicione a linha de base da linha de baixo entre y 1180 e y 1420. Assim duas linhas ficam livres do bloco de legenda do TikTok, o mais exigente, sem cobrir o rosto de quem fala. Com 1080 px de largura, fonte de 48–64 px em peso forte lê bem no celular.',
          '<strong>Comprimento:</strong> cerca de 32 caracteres por linha e nunca mais de duas linhas por vez. Um bloco estreito e centralizado é mais seguro que um largo.',
          '<strong>Ganchos e títulos:</strong> mantenha entre y 300 e y 900 para sobreviver ao corte 4:5 e à interface superior.',
          '<strong>Logos:</strong> marcas-d’água nos cantos quase sempre ficam cobertas; use o canto superior esquerdo dentro da zona segura.',
          '<strong>Chamadas para ação:</strong> botões, preços e setas precisam ficar acima da margem inferior. Uma seta apontando para «o link aqui embaixo» acaba apontando para a interface do app.',
        ] },
        { p: 'Por fim, lembre que as interfaces mudam com atualizações, idioma e tamanho da legenda, por isso fontes diferentes trazem números que variam de 20 a 80 px. Trate toda zona segura como um mínimo e deixe uma pequena folga extra de 40 a 60 px.' },
      ],
    },
  ],
  faqTitle: 'Perguntas frequentes',
  faqs: [
    { q: 'Meus vídeos ou imagens são enviados para algum lugar?', a: 'Não. Os arquivos são abertos direto no navegador e desenhados num canvas no seu próprio aparelho. Nada vai para servidor nenhum. Só as suas preferências de visualização (plataforma, camadas, opacidade) ficam salvas no armazenamento local do navegador.' },
    { q: 'Qual deve ser a resolução de um vídeo vertical?', a: 'Exporte em 1080 × 1920 pixels (9:16) para Reels, TikTok, Shorts e Stories. As plataformas aceitam resoluções maiores, como 2160 × 3840; as porcentagens da zona segura são as mesmas em qualquer tamanho.' },
    { q: 'Qual é a zona segura do Instagram Reels?', a: 'Num quadro de 1080 × 1920, deixe pelo menos 220 px no topo, 420 px na base, 60 px à esquerda e 140 px à direita: sobra uma área de 880 × 1280 px. Se o Reel também for aparecer no feed, mantenha o texto abaixo de y 285 por causa do corte 4:5.' },
    { q: 'Qual é a zona segura do TikTok?', a: 'Deixe pelo menos 180 px no topo, 480 px na base, 60 px à esquerda e 150 px à direita, o que resulta numa área de 870 × 1260 px.' },
    { q: 'Existe uma zona segura que funcione em todas as plataformas?', a: 'Sim: use a maior margem de cada lado. Para Reels, TikTok e Shorts juntos, são 220 px no topo, 150 px à direita, 480 px na base e 60 px à esquerda, uma área de 870 × 1220 px.' },
    { q: 'Posso usar o modelo baixado no CapCut, Premiere ou Canva?', a: 'Pode. «Baixar modelo» salva um PNG transparente de 1080 × 1920 com os guias ativos. Coloque na camada superior como referência e oculte antes de exportar.' },
  ],
  sources: {
    title: 'Fontes e metodologia',
    note: 'Última revisão: outubro de 2026. As margens de Stories e anúncios no Reels seguem os percentuais publicados pela Meta. As de Reels, TikTok e Shorts orgânicos são medições próprias do SafeZoneSnap no player atual de cada app em 1080 × 1920, considerando o pior caso entre formatos de celular e arredondadas para mais. O TikTok e o YouTube não publicam margens seguras orgânicas; os links abaixo documentam o tamanho do quadro e o comportamento do player.',
  },
};

export default pt;
