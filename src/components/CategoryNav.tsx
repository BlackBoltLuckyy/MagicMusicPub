import { forwardRef, useEffect, useRef, useState } from 'react';
import type { Category } from '../types/menu';
import { ChevronIcon } from './icons';

type CategoryNavProps = {
  categories: Category[];
  active: number;
  onSelect: (index: number) => void;
};

export const CategoryNav = forwardRef<HTMLElement, CategoryNavProps>(function CategoryNav(
  { categories, active, onSelect },
  ref
) {
  const navScrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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

  return (
    <nav className="nav" ref={ref} aria-label="Categorias do cardápio">
      <div className="nav__wrap">
        <div className="nav__scroll" ref={navScrollRef}>
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              type="button"
              className={`chip ${i === active ? 'chip--on' : ''}`}
              aria-current={i === active ? 'true' : undefined}
              onClick={() => onSelect(i)}
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
  );
});
