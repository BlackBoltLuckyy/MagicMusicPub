import type { MenuItem } from '../types/menu';
import { productImages } from './productImages';
import { productVideo } from './productVideo';
import { slugify } from './slug';

type ItemInput = Omit<MenuItem, 'images' | 'video'> & { slug?: string };

// Monta um MenuItem completo já resolvendo as imagens (locais em assets/products,
// ou placeholder se ainda não houver foto) e o vídeo (se houver um arquivo de vídeo
// na mesma pasta). O slug é derivado do `name`; só passe `slug` na mão se o nome
// tiver algo que não vira slug de forma óbvia.
export function item(input: ItemInput): MenuItem {
  const { slug, ...rest } = input;
  const itemSlug = slug ?? slugify(input.name);
  return {
    ...rest,
    images: productImages(itemSlug),
    video: productVideo(itemSlug),
  };
}