import type { Category, GalleryImg, Highlight, OpeningHour, Show, SocialLink } from './types';

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const HERO_IMG = U('1470229722913-7c0e2dbbafd3', 1800);

export const HIGHLIGHTS: Highlight[] = [
  {
    name: 'Elixir da Meia-Noite',
    desc: 'Gin infusionado em amora e lavanda, tônica de flor de sabugueiro e uma fumaça que some antes do primeiro gole.',
    price: 'R$ 42',
    img: U('1551024709-8f23befc6f87', 900),
    tag: 'Autoral',
  },
  {
    name: 'Bruma Violeta',
    desc: 'Vodka destilada com butterfly pea, limão siciliano e xarope de hibisco. Muda de cor quando ninguém está olhando.',
    price: 'R$ 39',
    img: U('1514362545857-3bc16c4c7d1b', 900),
    tag: 'Mais pedido',
  },
  {
    name: 'Costela do Sétimo Acorde',
    desc: 'Doze horas de defumação lenta, glaze de bourbon com café e farofa crocante de castanha.',
    price: 'R$ 78',
    img: U('1529193591184-b1d58069ecdd', 900),
    tag: 'Da casa',
  },
  {
    name: 'Ritual de Cacau',
    desc: 'Ganache quente de chocolate 70%, pimenta rosa, sorvete de baunilha bourbon e crocante de sal negro.',
    price: 'R$ 34',
    img: U('1541599468348-e96984315921', 900),
    tag: 'Exclusivo',
  },
];

export const MENU: Category[] = [
  {
    name: 'Drinks autorais',
    icon: '🍸',
    items: [
      {
        name: 'Elixir da Meia-Noite',
        desc: 'Gin, amora, lavanda, tônica de sabugueiro e defumação de alecrim.',
        price: 'R$ 42',
        img: U('1551024709-8f23befc6f87', 200),
      },
      {
        name: 'Bruma Violeta',
        desc: 'Vodka butterfly pea, limão siciliano e xarope de hibisco.',
        price: 'R$ 39',
        img: U('1514362545857-3bc16c4c7d1b', 200),
      },
      {
        name: 'Feitiço de Cobre',
        desc: 'Mezcal, laranja queimada, agave e um toque de pimenta defumada.',
        price: 'R$ 46',
        img: U('1536935338788-846bb9981813', 200),
      },
      {
        name: 'Neon Tropical',
        desc: 'Cachaça envelhecida, maracujá, capim-santo e espuma cítrica.',
        price: 'R$ 36',
        img: U('1470337458703-46ad1756a187', 200),
      },
      {
        name: 'Segredo do Bartender',
        desc: 'Você diz o humor, a gente inventa o resto. Sem cardápio, sem repetição.',
        price: 'R$ 48',
        img: U('1546171753-97d7676e4602', 200),
      },
      {
        name: 'Lua Cheia (sem álcool)',
        desc: 'Kombucha de gengibre, pêra, alecrim e tônica seca.',
        price: 'R$ 26',
        img: U('1497534446932-c925b458314e', 200),
      },
    ],
  },
  {
    name: 'Cervejas',
    icon: '🍺',
    items: [
      {
        name: 'IPA Contra-Regra',
        desc: 'Lúpulo cítrico, amargor médio, 500ml. Produção local exclusiva.',
        price: 'R$ 28',
        img: U('1608270586620-248524c67de9', 200),
      },
      {
        name: 'Weiss do Terceiro Set',
        desc: 'Trigo alemão, notas de banana e cravo, 600ml.',
        price: 'R$ 26',
        img: U('1535958636474-b021ee887b13', 200),
      },
      {
        name: 'Stout Cortina Fechada',
        desc: 'Café torrado, chocolate amargo e final aveludado, 355ml.',
        price: 'R$ 30',
        img: U('1571613316887-6f8d5cbf7ef7', 200),
      },
      {
        name: 'Pilsen da Casa',
        desc: 'Leve, gelada e sempre no ponto. Chope 400ml.',
        price: 'R$ 18',
        img: U('1436076863939-06870fe779c2', 200),
      },
      {
        name: 'Session Sour de Frutas',
        desc: 'Refrescante e ácida, com frutas vermelhas, 500ml.',
        price: 'R$ 29',
        img: U('1518099074172-2e47ee6cfdc0', 200),
      },
    ],
  },
  {
    name: 'Petiscos',
    icon: '🍤',
    items: [
      {
        name: 'Bolinho de Costela Defumada',
        desc: '8 unidades com geleia de pimenta e maionese de limão.',
        price: 'R$ 46',
        img: U('1541529086526-db283c563270', 200),
      },
      {
        name: 'Camarão na Manteiga de Ervas',
        desc: 'Camarões salteados, alho confitado e pão de fermentação natural.',
        price: 'R$ 68',
        img: U('1559339352-11d035aa65de', 200),
      },
      {
        name: 'Batata Rústica do Pub',
        desc: 'Alecrim, parmesão curado e maionese defumada.',
        price: 'R$ 34',
        img: U('1573080496219-bb080dd4f877', 200),
      },
      {
        name: 'Tábua de Frios da Meia-Noite',
        desc: 'Queijos artesanais, embutidos, castanhas e mel trufado.',
        price: 'R$ 82',
        img: U('1452195100486-9cc805987862', 200),
      },
      {
        name: 'Frango Crocante com Mel Picante',
        desc: 'Empanado leve, mel de pimenta e gergelim tostado.',
        price: 'R$ 42',
        img: U('1562967914-608f82629710', 200),
      },
    ],
  },
  {
    name: 'Lanches & salgados',
    icon: '🍔',
    items: [
      {
        name: 'Burger Contramão',
        desc: '180g de blend angus, cheddar inglês, cebola caramelizada e pão brioche.',
        price: 'R$ 48',
        img: U('1568901346375-23c9450c58cd', 200),
      },
      {
        name: 'Smash Duplo Neon',
        desc: 'Dois smashs, queijo prato, picles e molho secreto da casa.',
        price: 'R$ 52',
        img: U('1550547660-d9450f859349', 200),
      },
      {
        name: 'Sanduíche de Pernil Lento',
        desc: 'Pernil desfiado 8h, vinagrete de laranja e pão na chapa.',
        price: 'R$ 44',
        img: U('1553909489-cd47e0907980', 200),
      },
      {
        name: 'Coxinha Cremosa da Casa',
        desc: '4 unidades com catupiry artesanal e molho de pimenta biquinho.',
        price: 'R$ 32',
        img: U('1626082927389-6cd097cdc6ec', 200),
      },
      {
        name: 'Veggie Portobello',
        desc: 'Portobello grelhado, queijo vegano, rúcula e maionese de castanha.',
        price: 'R$ 45',
        img: U('1520072959219-c595dc870360', 200),
      },
    ],
  },
  {
    name: 'Pratos principais',
    icon: '🍽️',
    items: [
      {
        name: 'Costela do Sétimo Acorde',
        desc: '12h de defumação, glaze de bourbon, purê rústico e farofa crocante.',
        price: 'R$ 78',
        img: U('1529193591184-b1d58069ecdd', 200),
      },
      {
        name: 'Ancho ao Ponto Certo',
        desc: '300g grelhado na brasa, batatas confitadas e manteiga de ervas.',
        price: 'R$ 96',
        img: U('1546964124-0cce460f38ef', 200),
      },
      {
        name: 'Risoto de Cogumelos Selvagens',
        desc: 'Arbóreo cremoso, mix de cogumelos, parmesão curado e azeite trufado.',
        price: 'R$ 72',
        img: U('1476124369491-e7addf5db371', 200),
      },
      {
        name: 'Salmão em Crosta de Gergelim',
        desc: 'Salmão selado, legumes na brasa e molho cítrico de maracujá.',
        price: 'R$ 89',
        img: U('1467003909585-2f8a72700288', 200),
      },
      {
        name: 'Massa Nero da Casa',
        desc: 'Fettuccine de tinta de lula, camarões e bisque suave.',
        price: 'R$ 84',
        img: U('1621996346565-e3dbc646d9a9', 200),
      },
    ],
  },
  {
    name: 'Sobremesas',
    icon: '🍰',
    items: [
      {
        name: 'Ritual de Cacau',
        desc: 'Ganache quente 70%, pimenta rosa, sorvete de baunilha e sal negro.',
        price: 'R$ 34',
        img: U('1541599468348-e96984315921', 200),
      },
      {
        name: 'Cheesecake de Frutas Vermelhas',
        desc: 'Base crocante, creme aveludado e calda morna de berries.',
        price: 'R$ 30',
        img: U('1533134242443-d4fd215305ad', 200),
      },
      {
        name: 'Petit Gâteau Encantado',
        desc: 'Casquinha crocante, centro derretido e sorvete de creme.',
        price: 'R$ 32',
        img: U('1624353365286-3f8d62daad51', 200),
      },
      {
        name: 'Pudim Defumado',
        desc: 'Pudim clássico com calda de caramelo defumado e flor de sal.',
        price: 'R$ 26',
        img: U('1488477181946-6428a0291777', 200),
      },
    ],
  },
];

export const SHOWS: Show[] = [
  { day: 'Quarta', artist: 'Violeta Elétrica', genre: 'Rock alternativo', time: '21h00', cover: 'R$ 20' },
  { day: 'Quinta', artist: 'Os Andarilhos da Lua', genre: 'MPB & samba-funk', time: '21h30', cover: 'R$ 25' },
  { day: 'Sexta', artist: 'Trio Âmbar', genre: 'Jazz & soul', time: '22h00', cover: 'R$ 35' },
  { day: 'Sábado', artist: 'Miragem Neon', genre: 'Eletrônico ao vivo', time: '22h30', cover: 'R$ 40' },
  { day: 'Domingo', artist: 'Clube do Blues Tardio', genre: 'Blues & clássicos', time: '20h00', cover: 'Grátis' },
];

export const GALLERY: GalleryImg[] = [
  { src: U('1514933651103-005eec06c04b', 900), alt: 'Ambiente do pub em uma noite cheia', span: 26 },
  { src: U('1470337458703-46ad1756a187', 700), alt: 'Coquetel autoral servido no balcão', span: 18 },
  { src: U('1493225457124-a3eb161ffa5f', 900), alt: 'Banda tocando ao vivo no palco', span: 20 },
  { src: U('1543007630-9710e4a00a20', 700), alt: 'Público dançando durante o show', span: 24 },
  { src: U('1572116469696-31de0f17cc34', 700), alt: 'Balcão de drinks com luz neon', span: 18 },
  { src: U('1516450360452-9312f5e86fc7', 900), alt: 'Guitarrista em luz roxa', span: 22 },
  { src: U('1517248135467-4c7edcad34c4', 900), alt: 'Mesa com petiscos compartilhados', span: 20 },
  { src: U('1566417713940-fe7c737a9ef2', 700), alt: 'Bartender preparando coquetel', span: 24 },
  { src: U('1485686531765-ba63b07845a7', 900), alt: 'Detalhe de luzes do salão', span: 18 },
];

export const HOURS: OpeningHour[] = [
  { day: 'Segunda', time: 'Fechado' },
  { day: 'Terça', time: '18h → 00h' },
  { day: 'Quarta e Quinta', time: '18h → 01h' },
  { day: 'Sexta e Sábado', time: '18h → 02h' },
  { day: 'Domingo', time: '17h → 23h' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z',
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    path: 'M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z',
  },
  {
    label: 'Spotify',
    href: 'https://spotify.com',
    path: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.59 14.43a.62.62 0 0 1-.86.21c-2.35-1.44-5.31-1.76-8.8-.96a.62.62 0 1 1-.28-1.22c3.81-.87 7.09-.5 9.73 1.11.3.18.39.57.21.86zm1.22-2.72a.78.78 0 0 1-1.07.26c-2.69-1.66-6.79-2.14-9.98-1.17a.78.78 0 1 1-.45-1.49c3.64-1.1 8.16-.57 11.25 1.33.36.22.48.7.25 1.07zm.11-2.84c-3.23-1.92-8.55-2.09-11.63-1.16a.93.93 0 1 1-.54-1.79c3.54-1.07 9.42-.87 13.13 1.34a.93.93 0 1 1-.96 1.6z',
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com',
    path: 'M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 0 1 0-5.18c.27 0 .53.04.77.12v-3.13a5.72 5.72 0 0 0-.77-.05A5.68 5.68 0 1 0 15.54 15.4V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.24-1.48z',
  },
];

export const WHATSAPP_LINK =
  'https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20reservar%20uma%20mesa%20no%20Magic%20Pub%20Music';
