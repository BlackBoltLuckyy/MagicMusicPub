export interface MenuItem {
  name: string;
  desc: string;
  price: string;
  img: string;
}

export interface Category {
  name: string;
  icon: string;
  items: MenuItem[];
}

export interface Highlight {
  name: string;
  desc: string;
  price: string;
  img: string;
  tag: string;
}

export interface Show {
  day: string;
  artist: string;
  genre: string;
  time: string;
  cover: string;
}

export interface GalleryImg {
  src: string;
  alt: string;
  span?: number;
}

export interface OpeningHour {
  day: string;
  time: string;
}

export interface SocialLink {
  label: string;
  href: string;
  path: string;
}
