// Itens reaproveitados em mais de uma categoria (Favoritos, Lanches, etc.)
import type { MenuItem } from '../types/menu';
import { u } from '../utils/images';
import { productImages } from '../utils/productImages';

export const MAGIC_BACON: MenuItem = {
  name: 'Magic Bacon',
  desc: 'Burguer artesanal 180g, bacon, catupiry, mussarela, alface e tomate',
  price: 'R$44',
  images: productImages('magic-bacon', [u('1568901346375-23c9450c58cd')]),
};

export const MAGIC_COSTELA: MenuItem = {
  name: 'Magic Costela',
  desc: 'Costela desfiada Alfama, mussarela, catupiry, rúcula e tomate',
  price: 'R$46',
  images: productImages('magic-costela', [u('1594212699903-ec8a3eca50f5')]),
};

export const COXINHAS: MenuItem = {
  name: 'Coxinhas Gourmet',
  desc: 'Frango & catupiry · Costela',
  price: 'R$28',
  images: productImages('coxinhas-gourmet', [u('1585032226651-759b368d7246')]),
  units: ['2 un · R$28', '4 un · R$52', '6 un · R$74'],
  seal: true,
};

export const BATATA_TUDAO: MenuItem = {
  name: 'Batata Tudão',
  desc: 'Cheddar, catupiry e bacon',
  price: 'R$42',
  images: productImages('batata-tudao', [u('1573080496219-bb080dd4f877')]),
};

export const FEITICO_AMORA: MenuItem = {
  name: 'Feitiço de Amora',
  desc: 'Gin, licor de amora, limão-siciliano, alecrim',
  price: 'R$32',
  images: productImages('feitico-de-amora', [u('1514362545857-3bc16c4c7d1b')]),
};

export const MINI_MAGIC: MenuItem = {
  name: 'Mini Magic',
  desc: '4 mini lanches: Magic Cheddar, Magic Bacon, Magic Burguer e X-Músico',
  price: 'R$52',
  images: productImages('mini-magic', [u('1571091718767-18b5b1457add')]),
};

export const MAGIC_PASTRAMI: MenuItem = {
  name: 'Magic Pastrami',
  desc: 'Pastrami curado Berna, mussarela, rúcula e tomate',
  price: 'R$47',
  images: productImages('magic-pastrami', [u('1550547660-d9450f859349')]),
};

export const MAGIC_CHEDDAR: MenuItem = {
  name: 'Magic Cheddar',
  desc: 'Burguer artesanal 180g, cebola caramelizada, cheddar e bacon',
  price: 'R$44',
  images: productImages('magic-cheddar', [u('1586190848861-99aa4a171e90')]),
};

export const HOT_DOG: MenuItem = {
  name: 'Hot Dog',
  desc: 'Salsicha Swiss sem nitrato/corante/baixo sódio, molho de tomate, batata palha e bacon',
  price: 'R$32',
  images: productImages('hot-dog', [u('1619740455993-9e612b1af08a')]),
};

export const MAGIC_VEGETARIANO: MenuItem = {
  name: 'Magic Vegetariano',
  desc: 'Burguer de legumes, mussarela, catupiry, rúcula e tomate',
  price: 'R$38',
  images: productImages('magic-vegetariano', [u('1520072959219-c595dc870360')]),
  color: '#5fce74',
};

export const FRANGO_CHAPA_PALMITO: MenuItem = {
  name: 'Frango na Chapa e Palmito',
  desc: 'Frango, palmito, catupiry e pão',
  price: 'R$54',
  images: productImages('frango-chapa-palmito', [u('1598515214211-89d3c73ae83b')]),
};

export const ALMONDEGAS: MenuItem = {
  name: 'Almôndegas Gourmet',
  desc: 'Recheadas com mussarela e gorgonzola',
  price: 'R$30',
  images: productImages('almondegas-gourmet', [u('1529042410759-befb1204b468')]),
  units: ['2 un · R$30', '4 un · R$56', '6 un · R$80'],
  seal: true,
};

export const PALMITO_EMPANADO: MenuItem = {
  name: 'Palmito Empanado',
  desc: 'Presunto/queijo e geléia de pimenta',
  price: 'R$46',
  images: productImages('palmito-empanado', [u('1548340748-6d2b7d7da280')]),
};

export const TORRESMO_ROLO: MenuItem = {
  name: 'Torresmo de Rolo',
  desc: 'Crocante por fora, macio por dentro',
  price: 'R$42',
  images: productImages('torresmo-de-rolo', [u('1626082927389-6cd097cdc6ec')]),
};

export const DADINHO_TAPIOCA: MenuItem = {
  name: 'Dadinho de Tapioca',
  desc: 'Acompanha geléia de pimenta',
  price: 'R$34',
  images: productImages('dadinho-de-tapioca', [u('1626645738196-c2a7c87a8f58')]),
};
