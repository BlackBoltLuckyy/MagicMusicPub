// Itens reaproveitados em mais de uma categoria (Favoritos, Lanches, etc.)
import { item } from '../utils/menuItem';

export const MAGIC_BACON = item({
  name: 'Magic Bacon',
  desc: 'Burguer artesanal 180g, bacon, catupiry, mussarela, alface e tomate',
  price: 'R$44',
});

export const MAGIC_COSTELA = item({
  name: 'Magic Costela',
  desc: 'Costela desfiada Alfama, mussarela, catupiry, rúcula e tomate',
  price: 'R$46',
});

export const COXINHAS = item({
  name: 'Coxinhas Gourmet',
  desc: 'Frango & catupiry · Costela',
  price: 'R$28',
  units: ['2 un · R$28', '4 un · R$52', '6 un · R$74'],
  seal: true,
});

export const BATATA_TUDAO = item({
  name: 'Batata Tudão',
  desc: 'Cheddar, catupiry e bacon',
  price: 'R$42',
});

export const FEITICO_AMORA = item({
  name: 'Feitiço de Amora',
  desc: 'Gin, licor de amora, limão-siciliano, alecrim',
  price: 'R$32',
});

export const MINI_MAGIC = item({
  name: 'Mini Magic',
  desc: '4 mini lanches: Magic Cheddar, Magic Bacon, Magic Burguer e X-Músico',
  price: 'R$52',
});

export const MAGIC_PASTRAMI = item({
  name: 'Magic Pastrami',
  desc: 'Pastrami curado Berna, mussarela, rúcula e tomate',
  price: 'R$47',
});

export const MAGIC_CHEDDAR = item({
  name: 'Magic Cheddar',
  desc: 'Burguer artesanal 180g, cebola caramelizada, cheddar e bacon',
  price: 'R$44',
});

export const HOT_DOG = item({
  name: 'Hot Dog',
  desc: 'Salsicha Swiss sem nitrato/corante/baixo sódio, molho de tomate, batata palha e bacon',
  price: 'R$32',
});

export const MAGIC_VEGETARIANO = item({
  name: 'Magic Vegetariano',
  desc: 'Burguer de legumes, mussarela, catupiry, rúcula e tomate',
  price: 'R$38',
  color: '#5fce74',
});

export const FRANGO_CHAPA_PALMITO = item({
  name: 'Frango na Chapa e Palmito',
  desc: 'Frango, palmito, catupiry e pão',
  price: 'R$54',
});

export const ALMONDEGAS = item({
  name: 'Almôndegas Gourmet',
  desc: 'Recheadas com mussarela e gorgonzola',
  price: 'R$30',
  units: ['2 un · R$30', '4 un · R$56', '6 un · R$80'],
  seal: true,
});

export const PALMITO_EMPANADO = item({
  name: 'Palmito Empanado',
  desc: 'Presunto/queijo e geléia de pimenta',
  price: 'R$46',
});

export const TORRESMO_ROLO = item({
  name: 'Torresmo de Rolo',
  desc: 'Crocante por fora, macio por dentro',
  price: 'R$42',
});

export const DADINHO_TAPIOCA = item({
  name: 'Dadinho de Tapioca',
  desc: 'Acompanha geléia de pimenta',
  price: 'R$34',
});