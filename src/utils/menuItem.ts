import type { MenuItem } from '../types/menu';
import { productImages } from './productImages';
import { slugify } from './slug';

type ItemInput = Omit<MenuItem, 'images'> & { slug?: string };

// Monta um MenuItem completo já resolvendo as imagens (locais em assets/products,
// ou placeholder se ainda não houver foto). O slug é derivado do `name`;
// só passe `slug` na mão se o nome tiver algo que não vira slug de forma óbvia.
export function item(input: ItemInput): MenuItem {
  const { slug, ...rest } = input;
  return {
    ...rest,
    images: productImages(slug ?? slugify(input.name)),
  };
}