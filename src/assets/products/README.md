# Product photos

Cada produto do cardápio tem uma pasta aqui dentro, nomeada com o **slug** do
item (o mesmo slug usado na chamada `productImages('slug', ...)` em
`src/data/menuItems.ts` / `src/data/categories.ts`). A lista completa de slugs
está no fim deste arquivo.

## Como adicionar uma foto

1. Solte o arquivo de imagem (`.jpg`, `.jpeg`, `.png`, `.webp` ou `.avif`)
   dentro da pasta do produto — nada mais precisa mudar.
2. As fotos de uma pasta entram no cardápio na ordem alfabética do nome do
   arquivo. A **primeira** (ordem alfabética) vira a **foto principal** do
   produto (usada nos cards); as demais ficam disponíveis na galeria que abre
   ao clicar na foto.
3. Use prefixos numéricos para controlar a ordem, por exemplo:

```
src/assets/products/magic-bacon/
  01-capa.jpg   // foto principal
  02.jpg
  03.jpg
```

Enquanto uma pasta estiver vazia, o item continua usando a foto placeholder
(Unsplash) definida em `src/data/menuItems.ts` / `categories.ts`. Assim que a
pasta tiver pelo menos um arquivo, a foto local passa a ser usada
automaticamente — sem precisar tocar em nenhum componente ou dado.

## Slugs cadastrados

`magic-bacon`, `magic-costela`, `coxinhas-gourmet`, `batata-tudao`,
`feitico-de-amora`, `mini-magic`, `magic-pastrami`, `magic-cheddar`,
`hot-dog`, `magic-vegetariano`, `frango-chapa-palmito`, `almondegas-gourmet`,
`palmito-empanado`, `torresmo-de-rolo`, `dadinho-de-tapioca`,
`magic-filezinho`, `magic-bauru-roastbeef`, `magic-chicken`, `magic-burguer`,
`x-musico`, `coracao-de-alcatra-acebolado`, `calabresa-acebolada-berna`,
`salame-fatiado`, `palmito-pupunha`, `file-de-frango-empanado`,
`batata-catupiry-bacon`, `batata-cheddar-bacon`, `batata-cheddar-cebola-crispy`,
`batata-frita`, `chope-artesanal-ipa`, `long-neck-pilsen`, `caipirinha-da-casa`,
`refrigerante-lata`, `suco-natural`, `agua-agua-com-gas`.

(`Drink Autoral · Feitiço de Amora`, nas Bebidas, reaproveita as fotos de
`feitico-de-amora` — não tem pasta própria.)

## Cadastrando um produto novo

Se for um item totalmente novo no cardápio, crie a pasta com um slug novo e
chame `productImages('novo-slug', [fallback])` no dado do item, em
`src/data/menuItems.ts` (se reaproveitado entre categorias) ou
`src/data/categories.ts` (se exclusivo de uma categoria).
