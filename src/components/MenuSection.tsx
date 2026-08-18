import type { Category } from '../types/menu';
import { FavoriteCard } from './FavoriteCard';
import { ItemRow } from './ItemRow';
import { Star } from './icons';

export function MenuSection({ category }: { category: Category }) {
  return (
    <section className="section">
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
  );
}
