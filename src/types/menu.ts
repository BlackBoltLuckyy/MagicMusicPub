export type MenuItem = {
  name: string;
  desc: string;
  price: string; // ex: "R$44" — usado quando não há `units`
  images: string[]; // primeira = imagem principal do card; as demais ficam na galeria
  units?: string[]; // ex: ["2 un · R$28", ...] — quando presente, substitui o preço único
  color?: string; // cor custom do nome do item (vegetariano em verde)
  seal?: boolean; // true = selo "Quitutes da Mel" sobreposto na foto
};

export type Category = {
  name: string;
  note?: string;
  isFavorites?: boolean;
  items: MenuItem[];
};
