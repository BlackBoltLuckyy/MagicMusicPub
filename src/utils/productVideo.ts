// Carrega automaticamente o vídeo de src/assets/products/<slug>/ em build-time.
// Adicionar um vídeo = colocar o arquivo (ex: video.mp4) na pasta do produto: nenhum código precisa mudar.
const modules = import.meta.glob('../assets/products/*/*.{mp4,webm,mov}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const bySlug = new Map<string, string>();

for (const path of Object.keys(modules).sort()) {
  const match = path.match(/\/products\/([^/]+)\/[^/]+$/);
  if (!match) continue;
  const slug = match[1];
  if (!bySlug.has(slug)) bySlug.set(slug, modules[path]);
}

// Retorna o vídeo local da pasta do produto, se existir.
export function productVideo(slug: string): string | undefined {
  return bySlug.get(slug);
}
