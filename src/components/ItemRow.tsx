import { useState } from 'react';
import type { MenuItem } from '../types/menu';
import { revealDelay, onImgError, onActivateKey } from '../utils/dom';
import { Star } from './icons';
import { ProductDetail } from './productDetail';
import seloQuitutes from '../assets/brand/quitutes-da-mel.png';

export function ItemRow({ item, index }: { item: MenuItem; index: number }) {
  const [detailOpen, setDetailOpen] = useState(false);
  const hasGallery = item.images.length > 1;

  return (
    <>
      <article
        className="row reveal"
        style={revealDelay(index)}
        role="button"
        tabIndex={0}
        aria-label={`Ver detalhes de ${item.name}`}
        onClick={() => setDetailOpen(true)}
        onKeyDown={onActivateKey(() => setDetailOpen(true))}
      >
        <div className="row__thumbWrap">
          <img
            className="row__thumb"
            src={item.images[0]}
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
          {hasGallery && <p className="row__photoCount">📷 {item.images.length} fotos</p>}
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

      {detailOpen && <ProductDetail item={item} onClose={() => setDetailOpen(false)} />}
    </>
  );
}
