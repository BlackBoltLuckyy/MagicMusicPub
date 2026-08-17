/*
 * Magic Music Pub — Cardápio online
 *
 * Assets:
 *   - src/assets/logo-magic.png       -> logo real (branca, transparente).
 *   - src/assets/quitutes-da-mel.png  -> selo real (Quitutes da Mel).
 *
 * As fotos dos pratos são do Unsplash (exemplos) — troque as URLs em CATEGORIES pelas fotos reais.
 */
import { useEffect, useRef, useState, type CSSProperties, type SyntheticEvent } from 'react';
import logo from './assets/logo-magic.png';
import seloQuitutes from './assets/quitutes-da-mel.png';

/* ------------------------------------------------------------------ tipos */

type MenuItem = {
  name: string;
  desc: string;
  price: string; // ex: "R$44" — usado quando não há `units`
  img: string;
  imgL?: string; // variante maior/retrato, usada nos cards de Favoritos quando existir
  units?: string[]; // ex: ["2 un · R$28", ...] — quando presente, substitui o preço único
  color?: string; // cor custom do nome do item (vegetariano em verde)
  seal?: boolean; // true = selo "Quitutes da Mel" sobreposto na foto
};

type Category = {
  name: string;
  note?: string;
  isFavorites?: boolean;
  items: MenuItem[];
};

/* ------------------------------------------------------- helpers de imagem */

// miniatura / foto padrão do item
const u = (id: string, w = 400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

// crop retrato usado nos cards de Favoritos (9:16)
const uP = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=500&h=889&q=80`;

/* ------------------------------------------- itens reaproveitados (favoritos) */

const MAGIC_BACON: MenuItem = {
  name: 'Magic Bacon',
  desc: 'Burguer artesanal 180g, bacon, catupiry, mussarela, alface e tomate',
  price: 'R$44',
  img: u('1568901346375-23c9450c58cd'),
  imgL: uP('1568901346375-23c9450c58cd'),
};

const MAGIC_COSTELA: MenuItem = {
  name: 'Magic Costela',
  desc: 'Costela desfiada Alfama, mussarela, catupiry, rúcula e tomate',
  price: 'R$46',
  img: u('1594212699903-ec8a3eca50f5'),
  imgL: uP('1594212699903-ec8a3eca50f5'),
};

const COXINHAS: MenuItem = {
  name: 'Coxinhas Gourmet',
  desc: 'Frango & catupiry · Costela',
  price: 'R$28',
  img: u('1585032226651-759b368d7246'),
  imgL: uP('1585032226651-759b368d7246'),
  units: ['2 un · R$28', '4 un · R$52', '6 un · R$74'],
  seal: true,
};

const BATATA_TUDAO: MenuItem = {
  name: 'Batata Tudão',
  desc: 'Cheddar, catupiry e bacon',
  price: 'R$42',
  img: u('1573080496219-bb080dd4f877'),
  imgL: uP('1573080496219-bb080dd4f877'),
};

const FEITICO_AMORA: MenuItem = {
  name: 'Feitiço de Amora',
  desc: 'Gin, licor de amora, limão-siciliano, alecrim',
  price: 'R$32',
  img: u('1514362545857-3bc16c4c7d1b'),
  imgL: uP('1514362545857-3bc16c4c7d1b'),
};

const MINI_MAGIC: MenuItem = {
  name: 'Mini Magic',
  desc: '4 mini lanches: Magic Cheddar, Magic Bacon, Magic Burguer e X-Músico',
  price: 'R$52',
  img: u('1571091718767-18b5b1457add'),
  imgL: uP('1571091718767-18b5b1457add'),
};

const MAGIC_PASTRAMI: MenuItem = {
  name: 'Magic Pastrami',
  desc: 'Pastrami curado Berna, mussarela, rúcula e tomate',
  price: 'R$47',
  img: u('1550547660-d9450f859349'),
  imgL: uP('1550547660-d9450f859349'),
};

const MAGIC_CHEDDAR: MenuItem = {
  name: 'Magic Cheddar',
  desc: 'Burguer artesanal 180g, cebola caramelizada, cheddar e bacon',
  price: 'R$44',
  img: u('1586190848861-99aa4a171e90'),
  imgL: uP('1586190848861-99aa4a171e90'),
};

const HOT_DOG: MenuItem = {
  name: 'Hot Dog',
  desc: 'Salsicha Swiss sem nitrato/corante/baixo sódio, molho de tomate, batata palha e bacon',
  price: 'R$32',
  img: u('1619740455993-9e612b1af08a'),
  imgL: uP('1619740455993-9e612b1af08a'),
};

const MAGIC_VEGETARIANO: MenuItem = {
  name: 'Magic Vegetariano',
  desc: 'Burguer de legumes, mussarela, catupiry, rúcula e tomate',
  price: 'R$38',
  img: u('1520072959219-c595dc870360'),
  imgL: uP('1520072959219-c595dc870360'),
  color: '#5fce74',
};

const FRANGO_CHAPA_PALMITO: MenuItem = {
  name: 'Frango na Chapa e Palmito',
  desc: 'Frango, palmito, catupiry e pão',
  price: 'R$54',
  img: u('1598515214211-89d3c73ae83b'),
  imgL: uP('1598515214211-89d3c73ae83b'),
};

const ALMONDEGAS: MenuItem = {
  name: 'Almôndegas Gourmet',
  desc: 'Recheadas com mussarela e gorgonzola',
  price: 'R$30',
  img: u('1529042410759-befb1204b468'),
  imgL: uP('1529042410759-befb1204b468'),
  units: ['2 un · R$30', '4 un · R$56', '6 un · R$80'],
  seal: true,
};

const PALMITO_EMPANADO: MenuItem = {
  name: 'Palmito Empanado',
  desc: 'Presunto/queijo e geléia de pimenta',
  price: 'R$46',
  img: u('1548340748-6d2b7d7da280'),
  imgL: uP('1548340748-6d2b7d7da280'),
};

const TORRESMO_ROLO: MenuItem = {
  name: 'Torresmo de Rolo',
  desc: 'Crocante por fora, macio por dentro',
  price: 'R$42',
  img: u('1626082927389-6cd097cdc6ec'),
  imgL: uP('1626082927389-6cd097cdc6ec'),
};

const DADINHO_TAPIOCA: MenuItem = {
  name: 'Dadinho de Tapioca',
  desc: 'Acompanha geléia de pimenta',
  price: 'R$34',
  img: u('1626645738196-c2a7c87a8f58'),
  imgL: uP('1626645738196-c2a7c87a8f58'),
};

/* ----------------------------------------------------------------- cardápio */

const CATEGORIES: Category[] = [
  {
    name: 'Favoritos da casa',
    isFavorites: true,
    note: 'Os mais pedidos da galera — vai no certo.',
    items: [
      MINI_MAGIC,
      MAGIC_COSTELA,
      MAGIC_PASTRAMI,
      MAGIC_CHEDDAR,
      HOT_DOG,
      MAGIC_VEGETARIANO,
      FRANGO_CHAPA_PALMITO,
      COXINHAS,
      ALMONDEGAS,
      PALMITO_EMPANADO,
      TORRESMO_ROLO,
      DADINHO_TAPIOCA,
    ],
  },
  {
    name: 'Lanches',
    note: 'Todos os lanches acompanham batata frita McCain (100g) e Molho Especial. Lanches de hambúrguer no Pão Brioche; os demais no Baguete Parmesão.',
    items: [
      MINI_MAGIC,
      {
        name: 'Magic Filézinho',
        desc: 'Coração de alcatra, mussarela, bacon, rúcula e tomate',
        price: 'R$48',
        img: u('1544025162-d76694265947'),
      },
      MAGIC_COSTELA,
      {
        name: 'Magic Bauru Roastbeef',
        desc: 'Lagarto bovino curado Berna, mussarela e tomate',
        price: 'R$45',
        img: u('1553979459-d2229ba7433b'),
      },
      MAGIC_PASTRAMI,
      MAGIC_BACON,
      MAGIC_CHEDDAR,
      {
        name: 'Magic Chicken',
        desc: 'Filé de frango, mussarela, catupiry, bacon, alface e tomate',
        price: 'R$41',
        img: u('1606728035253-49e8a23146de'),
      },
      {
        name: 'Magic Burguer',
        desc: 'Burguer artesanal 180g, catupiry, mussarela, alface e tomate',
        price: 'R$40',
        img: u('1552332386-f8dd00dc2f85'),
      },
      HOT_DOG,
      {
        name: 'X-Músico',
        desc: 'Burguer Angus 120g, mussarela, alface e tomate',
        price: 'R$39',
        img: u('1551538827-9c037cb4f32a'),
      },
      MAGIC_VEGETARIANO,
    ],
  },
  {
    name: 'Porções na chapa',
    items: [
      FRANGO_CHAPA_PALMITO,
      {
        name: 'Coração de Alcatra Acebolado',
        desc: 'Acompanha pão e vinagrete',
        price: 'R$58',
        img: u('1600891964092-4316c288032e'),
      },
      {
        name: 'Calabresa Acebolada Berna',
        desc: 'Acompanha pão e vinagrete',
        price: 'R$46',
        img: u('1529692236671-f1f6cf9683ba'),
      },
    ],
  },
  {
    name: 'Porções frias',
    items: [
      {
        name: 'Salame Fatiado',
        desc: 'Fatiado na hora, pra acompanhar o chope',
        price: 'R$42',
        img: u('1541529086526-db283c563270'),
      },
      {
        name: 'Palmito Pupunha',
        desc: 'Leve, fresquinho e cheio de charme',
        price: 'R$44',
        img: u('1512621776951-a57141f2eefd'),
      },
    ],
  },
  {
    name: 'Coxinhas & almôndegas',
    note: 'Não misturamos unidades entre coxinhas e almôndegas.',
    items: [COXINHAS, ALMONDEGAS],
  },
  {
    name: 'Petiscos fritos',
    items: [
      PALMITO_EMPANADO,
      TORRESMO_ROLO,
      {
        name: 'Filé de Frango Empanado',
        desc: 'Douradinho, do jeito que todo mundo gosta',
        price: 'R$44',
        img: u('1562967914-608f82629710'),
      },
      DADINHO_TAPIOCA,
      BATATA_TUDAO,
      {
        name: 'Batata + Catupiry e Bacon',
        desc: 'Clássico que nunca sobra na mesa',
        price: 'R$38',
        img: u('1630431341973-02e1b662ec35'),
      },
      {
        name: 'Batata + Molho Cheddar e Bacon',
        desc: 'Cheddar cremoso e bacon crocante',
        price: 'R$38',
        img: u('1518013431117-eb1465fa5752'),
      },
      {
        name: 'Batata + Cheddar e Cebola Crispy',
        desc: 'Com aquele crocante de cebola por cima',
        price: 'R$38',
        img: u('1541592106381-b31e9677c0e5'),
      },
      {
        name: 'Batata Frita',
        desc: 'Simples, sequinha e sem erro',
        price: 'R$28',
        img: u('1573080496219-bb080dd4f877'),
      },
    ],
  },
  {
    name: 'Bebidas',
    items: [
      {
        name: 'Chope Artesanal IPA (400ml)',
        desc: 'Gelado, com colarinho e tudo mais',
        price: 'R$18',
        img: u('1535958636474-b021ee887b13'),
      },
      {
        name: 'Long Neck Pilsen (355ml)',
        desc: 'A parceira oficial do show',
        price: 'R$12',
        img: u('1618183479302-1e0aa382c36b'),
      },
      {
        name: 'Drink Autoral · Feitiço de Amora',
        desc: 'Gin, licor de amora, limão-siciliano, alecrim',
        price: 'R$32',
        img: FEITICO_AMORA.img,
        imgL: FEITICO_AMORA.imgL,
      },
      {
        name: 'Caipirinha da Casa',
        desc: 'Do limão clássico ao que a fruta do dia mandar',
        price: 'R$24',
        img: u('1541546006121-5c3bc5e8c7b9'),
      },
      {
        name: 'Refrigerante (lata 350ml)',
        desc: 'Sempre no gelo',
        price: 'R$8',
        img: u('1622483767028-3f66f32aef97'),
      },
      {
        name: 'Suco Natural',
        desc: 'Laranja, maracujá ou abacaxi com hortelã',
        price: 'R$14',
        img: u('1613478223719-2ab802602423'),
      },
      {
        name: 'Água / Água com Gás (500ml)',
        desc: 'Pra segurar o rolê até o último bis',
        price: 'R$6',
        img: u('1560023907-5f339617ea30'),
      },
    ],
  },
];

/* ------------------------------------------------------------- utilitários */

const revealDelay = (i: number): CSSProperties =>
  ({ '--d': `${Math.min(i, 9) * 55}ms` }) as CSSProperties;

const onImgError = (e: SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.classList.add('img--failed');
};

const Star = ({ className = '' }: { className?: string }) => (
  <span className={`star ${className}`} aria-hidden="true">
    ✦
  </span>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.4" cy="6.6" r="1.3" fill="currentColor" />
  </svg>
);

const ChevronIcon = ({ dir }: { dir: 'left' | 'right' }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
    <path
      d={dir === 'right' ? 'M9 5l7 7-7 7' : 'M15 5l-7 7 7 7'}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* --------------------------------------------------------- render de itens */

function FavoriteCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <article className="fav reveal" style={revealDelay(index)}>
      <div className="fav__media">
        <img
          className="fav__img"
          src={item.imgL ?? item.img}
          alt={item.name}
          loading="lazy"
          decoding="async"
          onError={onImgError}
        />
        <span className="fav__badge">⭐ Favorito</span>
        {item.seal && (
          <img className="seal seal--fav" src={seloQuitutes} alt="Selo Quitutes da Mel" loading="lazy" />
        )}
        <div className="fav__body">
          <h3 className="fav__name" style={item.color ? { color: item.color } : undefined}>
            {item.name}
          </h3>
          {item.units ? (
            <div className="units units--fav">
              {item.units.map((un) => (
                <span className="unit" key={un}>
                  {un}
                </span>
              ))}
            </div>
          ) : (
            <p className="fav__price">{item.price}</p>
          )}
          {item.desc && <p className="fav__desc">{item.desc}</p>}
        </div>
      </div>
    </article>
  );
}

function ItemRow({ item, index }: { item: MenuItem; index: number }) {
  return (
    <article className="row reveal" style={revealDelay(index)}>
      <div className="row__thumbWrap">
        <img
          className="row__thumb"
          src={item.img}
          alt={item.name}
          loading="lazy"
          decoding="async"
          onError={onImgError}
        />
        {item.seal && (
          <img className="seal seal--row" src={seloQuitutes} alt="Selo Quitutes da Mel" loading="lazy" />
        )}
      </div>

      <div className="row__main">
        <h3 className="row__name" style={item.color ? { color: item.color } : undefined}>
          <Star />
          {item.name}
        </h3>
        {item.desc && <p className="row__desc">{item.desc}</p>}
        {item.units && (
          <div className="units">
            {item.units.map((un) => (
              <span className="unit" key={un}>
                {un}
              </span>
            ))}
          </div>
        )}
      </div>

      {!item.units && <div className="row__price">{item.price}</div>}
    </article>
  );
}

/* ------------------------------------------------------------------- app */

export default function App() {
  const [active, setActive] = useState<number>(0);
  const sectionTopRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const navScrollRef = useRef<HTMLDivElement | null>(null);
  const firstRender = useRef(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const category = CATEGORIES[active];

  // mostra/some as setas da nav conforme a posição do scroll horizontal
  useEffect(() => {
    const el = navScrollRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft < max - 4);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  // animações de entrada ao rolar
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    nodes.forEach((n) => {
      n.classList.remove('in');
      io.observe(n);
    });
    return () => io.disconnect();
  }, [active]);

  // ao trocar de categoria, sobe suavemente até o topo da seção
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const anchor = sectionTopRef.current;
    const navH = navRef.current?.offsetHeight ?? 0;
    if (!anchor) return;
    const top = anchor.getBoundingClientRect().top + window.scrollY - navH - 8;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }, [active]);

  return (
    <div className="app">
      <div className="glow" aria-hidden="true" />

      {/* ---------------------------------------------------------- header */}
      <header className="header">
        <img className="header__logo" src={logo} alt="Magic Music Pub" />
        <div className="rule" aria-hidden="true" />
        <h1 className="header__title">Cardápio</h1>
        <p className="header__year">2026</p>
        <div className="rule" aria-hidden="true" />
        <p className="header__tag">
          <Star /> bar · cozinha · música ao vivo <Star />
        </p>
      </header>

      {/* ------------------------------------------------------------- nav */}
      <nav className="nav" ref={navRef} aria-label="Categorias do cardápio">
        <div className="nav__wrap">
          <div className="nav__scroll" ref={navScrollRef}>
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat.name}
                type="button"
                className={`chip ${i === active ? 'chip--on' : ''}`}
                aria-current={i === active ? 'true' : undefined}
                onClick={() => setActive(i)}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <span className={`nav__fade nav__fade--left ${canScrollLeft ? 'is-visible' : ''}`} aria-hidden="true">
            <ChevronIcon dir="left" />
          </span>
          <span className={`nav__fade nav__fade--right ${canScrollRight ? 'is-visible' : ''}`} aria-hidden="true">
            <ChevronIcon dir="right" />
          </span>
        </div>
      </nav>

      {/* --------------------------------------------------------- conteúdo */}
      <div ref={sectionTopRef} />
      <main className="main">
        <section className="section" key={category.name}>
          <header className="section__head reveal">
            <h2 className="section__title">{category.name}</h2>
            <div className="section__line" aria-hidden="true" />
          </header>

          {category.note && <p className="note reveal">{category.note}</p>}

          {category.isFavorites ? (
            <div className="favGrid">
              {category.items.map((item, i) => (
                <FavoriteCard key={item.name} item={item} index={i} />
              ))}
            </div>
          ) : (
            <div className="rows">
              {category.items.map((item, i) => (
                <ItemRow key={item.name} item={item} index={i} />
              ))}
            </div>
          )}

          <p className="section__foot reveal">
            <Star /> Preços sujeitos a alteração · consulte a equipe <Star />
          </p>
        </section>
      </main>

      {/* ---------------------------------------------------------- rodapé */}
      <footer className="footer">
        <img className="footer__logo" src={logo} alt="Magic Music Pub" />
        <p className="footer__phrase">Siga a gente e conheça o rolê 🎶</p>
        <a
          className="btn-ig"
          href="https://instagram.com/magicmusicpub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
          @magicmusicpub
        </a>
        <p className="footer__hours">Qua a Dom · 18h às 2h · Vila Madalena, SP</p>
        <p className="footer__spell">
          <Star /> feito com fogo, fritura e um tantinho de magia <Star />
        </p>
      </footer>

      {/* ------------------------------------------------------ botão fixo */}
      <a
        className="fab"
        href="https://instagram.com/magicmusicpub"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir o Instagram do Magic Music Pub"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}
