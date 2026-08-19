import { useState } from 'react';
import type { MenuItem } from '../types/menu';
import { revealDelay, onImgError, onActivateKey } from '../utils/dom';
import { ProductDetail } from './productDetail';
import seloQuitutes from '../assets/brand/quitutes-da-mel.png';

export function FavoriteCard({ item, index }: { item: MenuItem; index: number }) {
  const [detailOpen, setDetailOpen] = useState(false);
  const hasGallery = item.images.length > 1;

  return (
    <>
      <article
        className="fav reveal"
        style={revealDelay(index)}
        role="button"
        tabIndex={0}
        aria-label={`Ver detalhes de ${item.name}`}
        onClick={() => setDetailOpen(true)}
        onKeyDown={onActivateKey(() => setDetailOpen(true))}
      >
        <div className="fav__media">
          <img
            className="fav__img"
            src={item.images[0]}
            alt={item.name}
            loading="lazy"
            decoding="async"
            onError={onImgError}
          />
          <span className="fav__badge">⭐ Favorito</span>
          {item.video && <span className="fav__videoBadge" aria-hidden="true">🎬</span>}
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
            {hasGallery && <p className="fav__photoCount">📷 {item.images.length} fotos</p>}
            {item.desc && <p className="fav__desc">{item.desc}</p>}
          </div>
        </div>
      </article>

      {detailOpen && <ProductDetail item={item} onClose={() => setDetailOpen(false)} video={item.video} />}
    </>
  );
}
