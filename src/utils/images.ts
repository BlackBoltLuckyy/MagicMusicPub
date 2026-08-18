// foto placeholder do item (usada como fallback enquanto não há foto local em assets/products)
export const u = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
