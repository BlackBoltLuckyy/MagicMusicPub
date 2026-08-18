import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import type { MenuItem } from '../../types/menu';
import { onImgError } from '../../utils/dom';
import { ChevronIcon } from '../icons';
import seloQuitutes from '../../assets/brand/quitutes-da-mel.png';

export function ProductDetail({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasGallery = item.images.length > 1;

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.classList.add('detail-open');
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.classList.remove('detail-open');
    };
  }, [onClose]);

  const scrollToIndex = (i: number) => {
    const el = galleryRef.current;
    if (!el) return;
    el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const el = galleryRef.current;
    if (!el || el.clientWidth === 0) return;
    setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
  };

  return createPortal(
    <div className="productDetail" role="dialog" aria-modal="true" aria-label={item.name} onClick={onClose}>
      <button type="button" className="productDetail__close" onClick={onClose} aria-label="Fechar">
        ✕
      </button>

      <div className="productDetail__panel" onClick={(e) => e.stopPropagation()}>
        <div className="productDetail__media">
          <div className="productDetail__gallery" ref={galleryRef} onScroll={handleScroll}>
            {item.images.map((src, i) => (
              <img
                key={src}
                className="productDetail__img"
                src={src}
                alt={`${item.name} — foto ${i + 1} de ${item.images.length}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
                onError={onImgError}
              />
            ))}
          </div>

          {item.seal && (
            <img className="seal seal--detail" src={seloQuitutes} alt="Selo Quitutes da Mel" loading="lazy" />
          )}

          {hasGallery && (
            <>
              <button
                type="button"
                className="productDetail__navBtn productDetail__navBtn--prev"
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                aria-label="Foto anterior"
              >
                <ChevronIcon dir="left" />
              </button>
              <button
                type="button"
                className="productDetail__navBtn productDetail__navBtn--next"
                onClick={() => scrollToIndex(Math.min(item.images.length - 1, activeIndex + 1))}
                aria-label="Próxima foto"
              >
                <ChevronIcon dir="right" />
              </button>
              <div className="productDetail__dots">
                {item.images.map((src, i) => (
                  <span key={src} className={`productDetail__dot ${i === activeIndex ? 'is-active' : ''}`} />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="productDetail__body">
          <h2 className="productDetail__name" style={item.color ? { color: item.color } : undefined}>
            {item.name}
          </h2>
          {item.units ? (
            <div className="units units--detail">
              {item.units.map((un) => (
                <span className="unit" key={un}>
                  {un}
                </span>
              ))}
            </div>
          ) : (
            <p className="productDetail__price">{item.price}</p>
          )}
          {item.desc && <p className="productDetail__desc">{item.desc}</p>}
        </div>
      </div>
    </div>,
    document.body
  );
}
