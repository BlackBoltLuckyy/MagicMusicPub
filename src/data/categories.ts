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

      // ---- Cervejas ----
      item({
        name: 'Cervejas Especiais',
        desc: 'Consulte os rótulos disponíveis',
        price: 'R$23',
        group: 'Cervejas',
      }),
      item({
        name: 'Chope de Vinho',
        desc: '600ml · na chopeira',
        price: 'R$18',
        group: 'Cervejas',
      }),
      item({
        name: 'Chope Artesanal',
        desc: '400ml',
        price: 'R$16',
        group: 'Cervejas',
      }),
      item({
        name: 'Heineken 600ml',
        price: 'R$18',
        group: 'Cervejas',
      }),
      item({
        name: 'Original / Spaten',
        desc: '600ml',
        price: 'R$16',
        group: 'Cervejas',
      }),
      item({
        name: 'Antarctica / Amstel',
        desc: '600ml',
        price: 'R$15',
        group: 'Cervejas',
      }),

      // ---- Long Neck ----
      item({
        name: 'Ultra',
        desc: 'Sem glúten · long neck',
        price: 'R$14',
        group: 'Long Neck',
      }),
      item({
        name: 'Corona Extra',
        desc: 'Long neck',
        price: 'R$14',
        group: 'Long Neck',
      }),
      item({
        name: 'Heineken 355ml',
        desc: 'Long neck',
        price: 'R$14',
        group: 'Long Neck',
      }),
      item({
        name: 'Budweiser',
        desc: 'Long neck',
        price: 'R$13',
        group: 'Long Neck',
      }),
      item({
        name: 'Stella Artois',
        desc: 'Long neck',
        price: 'R$13',
        group: 'Long Neck',
      }),
      item({
        name: 'Smirnoff Ice',
        desc: 'Long neck',
        price: 'R$14',
        group: 'Long Neck',
      }),
      item({
        name: 'Skol Beats',
        desc: 'Long neck',
        price: 'R$14',
        group: 'Long Neck',
      }),
      item({
        name: 'Balde de Gelo',
        desc: 'Pra manter a bebida sempre gelada',
        price: 'R$7',
        group: 'Long Neck',
      }),

      // ---- 0% Álcool ----
      item({
        name: 'Heineken 0% Álcool',
        price: 'R$14',
        group: '0% Álcool',
      }),
      item({
        name: 'Corona 0% Álcool',
        price: 'R$14',
        group: '0% Álcool',
      }),
      item({
        name: 'IPA 0% Álcool',
        desc: 'Puro malte',
        price: 'R$15',
        group: '0% Álcool',
      }),
      item({
        name: 'Energético Red Bull',
        price: 'R$15',
        group: '0% Álcool',
      }),
      item({
        name: 'Energético Monster',
        price: 'R$15',
        group: '0% Álcool',
      }),
      item({
        name: 'Soda Italiana',
        desc: 'Diversos sabores',
        price: 'R$20',
        group: '0% Álcool',
      }),
      item({
        name: 'Refrigerantes',
        desc: 'Coca-Cola · Coca Zero · Tônica · Guaraná · Citrus · Soda',
        price: 'R$7',
        group: '0% Álcool',
      }),
      item({
        name: 'Água com Gás',
        price: 'R$6',
        group: '0% Álcool',
      }),
      item({
        name: 'Água Natural',
        price: 'R$5',
        group: '0% Álcool',
      }),
      item({
        name: 'C.D.B.',
        desc: 'Limão · Sal · Gelo',
        price: 'R$5',
        group: '0% Álcool',
      }),

      // ---- Drinks ----
      item({
        name: 'Jägerbomb',
        desc: 'Jägermeister + energético',
        price: 'R$40',
        group: 'Drinks',
      }),
      item({
        name: 'Tanqueray Tônica',
        desc: 'Gin Tanqueray + tônica + especiarias',
        price: 'R$38',
        group: 'Drinks',
      }),
      item({
        name: 'Kaipiroska',
        desc: 'Jägermeister ou vodka Absolut + frutas',
        price: 'R$38',
        group: 'Drinks',
      }),
      item({
        name: 'Maracujack',
        desc: 'Jack Daniels + maracujá + citrus',
        price: 'R$38',
        group: 'Drinks',
      }),
      item({
        name: 'Margarita',
        desc: 'Tequila + licor de laranja + limão',
        price: 'R$38',
        group: 'Drinks',
      }),
      item({
        name: 'Tchay',
        desc: 'Malibu ou whisky + energético + gelo de coco',
        price: 'R$35',
        group: 'Drinks',
      }),
      item({
        name: 'Jack Coke',
        desc: 'Jack Daniels + Coca-Cola',
        price: 'R$34',
        group: 'Drinks',
      }),
      item({
        name: 'Negroni',
        desc: 'Campari + gin + vermute',
        price: 'R$32',
        group: 'Drinks',
      }),
      item({
        name: 'Caipi-Fruta',
        desc: 'Vodka, cachaça ou saquê + frutas',
        price: 'R$30',
        group: 'Drinks',
      }),
      item({
        name: 'Gin Tônica',
        desc: 'Gin + tônica + especiarias',
        price: 'R$25',
        group: 'Drinks',
      }),
      item({
        name: 'Campari Citrus',
        desc: 'Campari + laranja/limão + Schweppes Citrus',
        price: 'R$25',
        group: 'Drinks',
      }),
      item({
        name: 'Cuba-Libre',
        desc: 'Rum ouro + Coca-Cola',
        price: 'R$25',
        group: 'Drinks',
      }),
      item({
        name: 'Óleo de Harley',
        desc: 'Conhaque + licor de cacau',
        price: 'R$20',
        group: 'Drinks',
      }),

      // ---- Destilados · Dose 50ml ----
      item({
        name: 'Jägermeister',
        price: 'R$28',
        group: 'Destilados · Dose 50ml',
      }),
      item({
        name: "Jack Daniel's",
        desc: 'Old No.7 ou Honey',
        price: 'R$28',
        group: 'Destilados · Dose 50ml',
      }),
      item({
        name: 'Vodka Cîroc',
        desc: 'Francesa',
        price: 'R$28',
        group: 'Destilados · Dose 50ml',
      }),
      item({
        name: 'JW Black Label',
        desc: '12 anos',
        price: 'R$28',
        group: 'Destilados · Dose 50ml',
      }),
      item({
        name: 'Gin Tanqueray',
        desc: 'Diversos sabores',
        price: 'R$28',
        group: 'Destilados · Dose 50ml',
      }),
      item({
        name: 'Vodka Absolut',
        desc: 'Sueca',
        price: 'R$28',
        group: 'Destilados · Dose 50ml',
      }),
      item({
        name: 'Tequila José Cuervo',
        desc: 'Prata ou ouro',
        price: 'R$25',
        group: 'Destilados · Dose 50ml',
      }),
      item({
        name: 'JW Red Label',
        desc: '8 anos',
        price: 'R$22',
        group: 'Destilados · Dose 50ml',
      }),

      // ---- Destilados Nacionais · Dose 50ml ----
      item({
        name: 'Destilados Nacionais',
        desc: 'Campari · Domecq · Rum Bacardi · Smirnoff · Gin · Malibu · Passport',
        price: 'R$15',
        group: 'Destilados Nacionais · Dose 50ml',
      }),
      item({
        name: 'Cachaça Artesanal',
        price: 'R$12',
        group: 'Destilados Nacionais · Dose 50ml',
      }),
    ],
  },
];