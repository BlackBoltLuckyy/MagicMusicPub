import type { Category } from '../types/menu';
import { item } from '../utils/menuItem';
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
      item({
        name: 'Magic Filézinho',
        desc: 'Coração de alcatra, mussarela, bacon, rúcula e tomate',
        price: 'R$48',
      }),
      MAGIC_COSTELA,
      item({
        name: 'Magic Bauru Roastbeef',
        desc: 'Lagarto bovino curado Berna, mussarela e tomate',
        price: 'R$45',
      }),
      MAGIC_PASTRAMI,
      MAGIC_BACON,
      MAGIC_CHEDDAR,
      item({
        name: 'Magic Chicken',
        desc: 'Filé de frango, mussarela, catupiry, bacon, alface e tomate',
        price: 'R$41',
      }),
      item({
        name: 'Magic Burguer',
        desc: 'Burguer artesanal 180g, catupiry, mussarela, alface e tomate',
        price: 'R$40',
      }),
      HOT_DOG,
      item({
        name: 'X-Músico',
        desc: 'Burguer Angus 120g, mussarela, alface e tomate',
        price: 'R$39',
      }),
      MAGIC_VEGETARIANO,
    ],
  },
  {
    name: 'Porções na chapa',
    items: [
      FRANGO_CHAPA_PALMITO,
      item({
        name: 'Coração de Alcatra Acebolado',
        desc: 'Acompanha pão e vinagrete',
        price: 'R$58',
      }),
      item({
        name: 'Calabresa Acebolada Berna',
        desc: 'Acompanha pão e vinagrete',
        price: 'R$46',
      }),
    ],
  },
  {
    name: 'Porções frias',
    items: [
      item({
        name: 'Salame Fatiado',
        desc: 'Fatiado na hora, pra acompanhar o chope',
        price: 'R$42',
      }),
      item({
        name: 'Palmito Pupunha',
        desc: 'Leve, fresquinho e cheio de charme',
        price: 'R$44',
      }),
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
      item({
        name: 'Filé de Frango Empanado',
        desc: 'Douradinho, do jeito que todo mundo gosta',
        price: 'R$44',
      }),
      DADINHO_TAPIOCA,
      BATATA_TUDAO,
      item({
        name: 'Batata + Catupiry e Bacon',
        desc: 'Clássico que nunca sobra na mesa',
        price: 'R$38',
      }),
      item({
        name: 'Batata + Molho Cheddar e Bacon',
        desc: 'Cheddar cremoso e bacon crocante',
        price: 'R$38',
      }),
      item({
        name: 'Batata + Cheddar e Cebola Crispy',
        desc: 'Com aquele crocante de cebola por cima',
        price: 'R$38',
      }),
      item({
        name: 'Batata Frita',
        desc: 'Simples, sequinha e sem erro',
        price: 'R$28',
      }),
    ],
  },
  {
    name: 'Bebidas',
    items: [
      item({
        name: 'Chope Artesanal IPA (400ml)',
        desc: 'Gelado, com colarinho e tudo mais',
        price: 'R$18',
      }),
      item({
        name: 'Long Neck Pilsen (355ml)',
        desc: 'A parceira oficial do show',
        price: 'R$12',
      }),
      {
        name: 'Drink Autoral · Feitiço de Amora',
        desc: 'Gin, licor de amora, limão-siciliano, alecrim',
        price: 'R$32',
        images: FEITICO_AMORA.images,
      },
      item({
        name: 'Caipirinha da Casa',
        desc: 'Do limão clássico ao que a fruta do dia mandar',
        price: 'R$24',
      }),
      item({
        name: 'Refrigerante (lata 350ml)',
        desc: 'Sempre no gelo',
        price: 'R$8',
      }),
      item({
        name: 'Suco Natural',
        desc: 'Laranja, maracujá ou abacaxi com hortelã',
        price: 'R$14',
      }),
      item({
        name: 'Água / Água com Gás (500ml)',
        desc: 'Pra segurar o rolê até o último bis',
        price: 'R$6',
      }),
    ],
  },
];