import { GALLERY } from '../data';
import { COLORS, S } from '../styles';
import { SectionHeader } from './SectionHeader';

export function Gallery() {
  return (
    <section className="mp-section" style={S.section}>
      <SectionHeader
        eyebrow="Galeria"
        title={
          <>
            Um pedaço das nossas <span style={{ color: COLORS.pink }}>noites</span>
          </>
        }
        lead="Fotos reais de quem passou por aqui. O resto só acontece ao vivo."
      />

      <div
        className="reveal mp-gallery"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gridAutoRows: 10,
          gap: 14,
        }}
      >
        {GALLERY.map((img) => (
          <figure key={img.src} className="mp-gal" style={{ margin: 0, gridRow: `span ${img.span ?? 20}` }}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
