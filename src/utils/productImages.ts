// Carrega automaticamente todas as fotos de src/assets/products/<slug>/ em build-time.
// Adicionar uma foto = colocar o arquivo na pasta do produto: nenhum código precisa mudar.
// A ordem dentro de cada pasta segue a ordem alfabética do nome do arquivo — use prefixos
// numéricos (01-capa.jpg, 02.jpg, ...) para controlar qual foto é a principal.
const modules = import.meta.glob('../assets/products/*/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const bySlug = new Map<string, string[]>();

for (const path of Object.keys(modules).sort()) {
  const match = path.match(/\/products\/([^/]+)\/[^/]+$/);
  if (!match) continue;
  const slug = match[1];
  const list = bySlug.get(slug) ?? [];
  list.push(modules[path]);
  bySlug.set(slug, list);
}

// Retorna as fotos locais da pasta do produto; se ainda não houver nenhuma, usa `fallback`.
export function productImages(slug: string, fallback: string[]): string[] {
  const local = bySlug.get(slug);
  return local && local.length > 0 ? local : fallback;
}
