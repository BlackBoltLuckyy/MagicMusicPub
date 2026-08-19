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

// Placeholder genérico (SVG inline) usado enquanto a foto real não existe em assets/products.
// Não depende de nenhum arquivo externo nem de internet.
const PLACEHOLDER = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="#e5e0d8"/>
  <text x="400" y="300" font-family="sans-serif" font-size="28" fill="#9c9285"
    text-anchor="middle" dominant-baseline="middle">Foto em breve</text>
</svg>`)}`;

// Retorna as fotos locais da pasta do produto; se ainda não houver nenhuma, usa o placeholder.
export function productImages(slug: string): string[] {
  const local = bySlug.get(slug);
  return local && local.length > 0 ? local : [PLACEHOLDER];
}