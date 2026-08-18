/*
 * Magic Music Pub — Cardápio online
 *
 * Estrutura:
 *   - src/types      -> tipos do cardápio (MenuItem, Category).
 *   - src/data        -> dados do cardápio (itens reaproveitados + categorias).
 *   - src/utils       -> funções auxiliares (imagens, animação de entrada).
 *   - src/components  -> componentes de UI.
 *   - src/assets/brand    -> logo e selo reais da marca.
 *   - src/assets/products -> convenção para futuras fotos reais dos pratos.
 */
import { useEffect, useRef, useState } from 'react';
import { CATEGORIES } from './data/categories';
import { CategoryNav, Footer, Header, InstagramFab, MenuSection } from './components';

export default function App() {
  const [active, setActive] = useState<number>(0);
  const sectionTopRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const firstRender = useRef(true);

  const category = CATEGORIES[active];

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

      <Header />

      <CategoryNav ref={navRef} categories={CATEGORIES} active={active} onSelect={setActive} />

      <div ref={sectionTopRef} />
      <main className="main">
        <MenuSection key={category.name} category={category} />
      </main>

      <Footer />
      <InstagramFab />
    </div>
  );
}
