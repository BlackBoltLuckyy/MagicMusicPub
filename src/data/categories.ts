import type { Category } from '../types/menu';
import { u } from '../utils/images';
import { productImages } from '../utils/productImages';
import {
  ALMONDEGAS,
  BATATA_TUDAO,
  COXINHAS,
  DADINHO_TAPIOCA,
  FEITICO_AMORA,
  FRANGO_CHAPA_PALMITO,
  HOT_DOG,
  MAGIC_BACON,
  MAGIC_CHEDDAR,
  MAGIC_COSTELA,
  MAGIC_PASTRAMI,
  MAGIC_VEGETARIANO,
  MINI_MAGIC,
  PALMITO_EMPANADO,
  TORRESMO_ROLO,
} from './menuItems';

export const CATEGORIES: Category[] = [
  {
    name: 'Favoritos da casa',
    isFavorites: true,
    note: 'Os mais pedidos da galera — vai no certo.',
    items: [
      MINI_MAGIC,
      MAGIC_COSTELA,
      MAGIC_PASTRAMI,
      MAGIC_CHEDDAR,
      HOT_DOG,
      MAGIC_VEGETARIANO,
      FRANGO_CHAPA_PALMITO,
      COXINHAS,
      ALMONDEGAS,
      PALMITO_EMPANADO,
      TORRESMO_ROLO,
      DADINHO_TAPIOCA,
    ],
  },
  {
    name: 'Lanches',
    note: 'Todos os lanches acompanham batata frita McCain (100g) e Molho Especial. Lanches de hambúrguer no Pão Brioche; os demais no Baguete Parmesão.',
    items: [
      MINI_MAGIC,
      {
        name: 'Magic Filézinho',
        desc: 'Coração de alcatra, mussarela, bacon, rúcula e tomate',
        price: 'R$48',
        images: productImages('magic-filezinho', [u('1544025162-d76694265947')]),
      },
      MAGIC_COSTELA,
      {
        name: 'Magic Bauru Roastbeef',
        desc: 'Lagarto bovino curado Berna, mussarela e tomate',
        price: 'R$45',
        images: productImages('magic-bauru-roastbeef', [u('1553979459-d2229ba7433b')]),
      },
      MAGIC_PASTRAMI,
      MAGIC_BACON,
      MAGIC_CHEDDAR,
      {
        name: 'Magic Chicken',
        desc: 'Filé de frango, mussarela, catupiry, bacon, alface e tomate',
        price: 'R$41',
        images: productImages('magic-chicken', [u('1606728035253-49e8a23146de')]),
      },
      {
        name: 'Magic Burguer',
        desc: 'Burguer artesanal 180g, catupiry, mussarela, alface e tomate',
        price: 'R$40',
        images: productImages('magic-burguer', [u('1552332386-f8dd00dc2f85')]),
      },
      HOT_DOG,
      {
        name: 'X-Músico',
        desc: 'Burguer Angus 120g, mussarela, alface e tomate',
        price: 'R$39',
        images: productImages('x-musico', [u('1551538827-9c037cb4f32a')]),
      },
      MAGIC_VEGETARIANO,
    ],
  },
  {
    name: 'Porções na chapa',
    items: [
      FRANGO_CHAPA_PALMITO,
      {
        name: 'Coração de Alcatra Acebolado',
        desc: 'Acompanha pão e vinagrete',
        price: 'R$58',
        images: productImages('coracao-de-alcatra-acebolado', [u('1600891964092-4316c288032e')]),
      },
      {
        name: 'Calabresa Acebolada Berna',
        desc: 'Acompanha pão e vinagrete',
        price: 'R$46',
        images: productImages('calabresa-acebolada-berna', [u('1529692236671-f1f6cf9683ba')]),
      },
    ],
  },
  {
    name: 'Porções frias',
    items: [
      {
        name: 'Salame Fatiado',
        desc: 'Fatiado na hora, pra acompanhar o chope',
        price: 'R$42',
        images: productImages('salame-fatiado', [u('1541529086526-db283c563270')]),
      },
      {
        name: 'Palmito Pupunha',
        desc: 'Leve, fresquinho e cheio de charme',
        price: 'R$44',
        images: productImages('palmito-pupunha', [u('1512621776951-a57141f2eefd')]),
      },
    ],
  },
  {
    name: 'Coxinhas & almôndegas',
    note: 'Não misturamos unidades entre coxinhas e almôndegas.',
    items: [COXINHAS, ALMONDEGAS],
  },
  {
    name: 'Petiscos fritos',
    items: [
      PALMITO_EMPANADO,
      TORRESMO_ROLO,
      {
        name: 'Filé de Frango Empanado',
        desc: 'Douradinho, do jeito que todo mundo gosta',
        price: 'R$44',
        images: productImages('file-de-frango-empanado', [u('1562967914-608f82629710')]),
      },
      DADINHO_TAPIOCA,
      BATATA_TUDAO,
      {
        name: 'Batata + Catupiry e Bacon',
        desc: 'Clássico que nunca sobra na mesa',
        price: 'R$38',
        images: productImages('batata-catupiry-bacon', [u('1630431341973-02e1b662ec35')]),
      },
      {
        name: 'Batata + Molho Cheddar e Bacon',
        desc: 'Cheddar cremoso e bacon crocante',
        price: 'R$38',
        images: productImages('batata-cheddar-bacon', [u('1518013431117-eb1465fa5752')]),
      },
      {
        name: 'Batata + Cheddar e Cebola Crispy',
        desc: 'Com aquele crocante de cebola por cima',
        price: 'R$38',
        images: productImages('batata-cheddar-cebola-crispy', [u('1541592106381-b31e9677c0e5')]),
      },
      {
        name: 'Batata Frita',
        desc: 'Simples, sequinha e sem erro',
        price: 'R$28',
        images: productImages('batata-frita', [u('1573080496219-bb080dd4f877')]),
      },
    ],
  },
  {
    name: 'Bebidas',
    items: [
      {
        name: 'Chope Artesanal IPA (400ml)',
        desc: 'Gelado, com colarinho e tudo mais',
        price: 'R$18',
        images: productImages('chope-artesanal-ipa', [u('1535958636474-b021ee887b13')]),
      },
      {
        name: 'Long Neck Pilsen (355ml)',
        desc: 'A parceira oficial do show',
        price: 'R$12',
        images: productImages('long-neck-pilsen', [u('1618183479302-1e0aa382c36b')]),
      },
      {
        name: 'Drink Autoral · Feitiço de Amora',
        desc: 'Gin, licor de amora, limão-siciliano, alecrim',
        price: 'R$32',
        images: FEITICO_AMORA.images,
      },
      {
        name: 'Caipirinha da Casa',
        desc: 'Do limão clássico ao que a fruta do dia mandar',
        price: 'R$24',
        images: productImages('caipirinha-da-casa', [u('1541546006121-5c3bc5e8c7b9')]),
      },
      {
        name: 'Refrigerante (lata 350ml)',
        desc: 'Sempre no gelo',
        price: 'R$8',
        images: productImages('refrigerante-lata', [u('1622483767028-3f66f32aef97')]),
      },
      {
        name: 'Suco Natural',
        desc: 'Laranja, maracujá ou abacaxi com hortelã',
        price: 'R$14',
        images: productImages('suco-natural', [u('1613478223719-2ab802602423')]),
      },
      {
        name: 'Água / Água com Gás (500ml)',
        desc: 'Pra segurar o rolê até o último bis',
        price: 'R$6',
        images: productImages('agua-agua-com-gas', [u('1560023907-5f339617ea30')]),
      },
    ],
  },
];
