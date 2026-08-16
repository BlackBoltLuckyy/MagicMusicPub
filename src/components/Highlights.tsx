import { HIGHLIGHTS } from '../data';
import { COLORS, S } from '../styles';
import { SectionHeader } from './SectionHeader';

export function Highlights() {
  return (
    <section className="mp-section" style={S.section}>
      <SectionHeader
        eyebrow="Destaques"
        title={
          <>
            O que sai da <span style={{ color: COLORS.gold }}>cozinha secreta</span>
          </>
        }
        lead="Receitas criadas pela nossa equipe e testadas em noites cheias. Se estiver em dúvida, comece por qualquer um destes quatro."
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 22,
        }}
      >
        {HIGHLIGHTS.map((item) => (
          <article
            key={item.name}
            className="reveal mp-card"
            style={{ ...S.card, display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden' }}>
              <img
                className="mp-card-img"
                src={item.img}
                alt={item.name}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: 12,
                  left: 12,
                  padding: '5px 12px',
                  borderRadius: 999,
                  background: 'rgba(10,6,16,.78)',
                  border: '1px solid rgba(245,201,107,.45)',
                  color: COLORS.gold,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                }}
              >
                {item.tag}
              </span>
            </div>

            <div style={{ padding: '18px 18px 22px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
                <h3
                  style={{
                    fontFamily: '"Cinzel", serif',
                    fontSize: 17,
                    margin: 0,
                    color: COLORS.text,
                    lineHeight: 1.3,
                  }}
                >
                  {item.name}
                </h3>
                <span
                  style={{
                    fontFamily: '"Cinzel", serif',
                    color: COLORS.gold,
                    fontWeight: 700,
                    fontSize: 16,
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.price}
                </span>
              </div>
              <p style={{ color: COLORS.muted, fontSize: 13.5, lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
