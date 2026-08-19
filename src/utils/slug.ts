// Gera o slug (nome da pasta em assets/products) a partir do nome do produto.
// Ex: "Magic Bacon" -> "magic-bacon"
export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}