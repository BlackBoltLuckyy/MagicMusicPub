import { SHOWS } from '../data';
import { COLORS, S } from '../styles';
import { SectionHeader } from './SectionHeader';

export function Shows() {
  return (
    <section id="shows" className="mp-section" style={{ ...S.section, scrollMarginTop: 80 }}>
      <SectionHeader
        eyebrow="Agenda"
        title={
          <>
            Quem sobe no <span style={{ color: COLORS.neon }}>palco</span> esta semana
          </>
        }
        lead="De quarta a domingo o som é ao vivo. A programação muda toda semana — e às vezes a atração só é revelada na porta."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {SHOWS.map((show) => (
          <div
            key={show.day}
            className="reveal mp-show mp-show-row"
            style={{
              ...S.card,
              display: 'grid',
              gridTemplateColumns: '110px 1fr auto',
              alignItems: 'center',
              gap: 18,
              padding: 'clamp(16px, 3vw, 22px)',
              borderRadius: 16,
            }}
          >
            <div
              style={{
                fontFamily: '"Cinzel", serif',
                fontSize: 15,
                fontWeight: 700,
                color: COLORS.gold,
                letterSpacing: '.06em',
              }}
            >
              {show.day}
            </div>

            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 'clamp(16px, 3vw, 19px)', fontWeight: 600, color: COLORS.text }}>
                {show.artist}
              </div>
              <div style={{ color: COLORS.muted, fontSize: 13, marginTop: 4 }}>{show.genre}</div>
            </div>

            <div
              className="mp-show-right"
              style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'flex-end', flexWrap: 'wrap' }}
            >
              <span
                style={{
                  padding: '6px 14px',
                  borderRadius: 999,
                  border: '1px solid rgba(176,107,255,.3)',
                  color: COLORS.text,
                  fontSize: 13,
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                }}
              >
                {show.time}
              </span>
              <span
                style={{
                  padding: '6px 14px',
                  borderRadius: 999,
                  background: 'rgba(245,201,107,.12)',
                  border: '1px solid rgba(245,201,107,.32)',
                  color: COLORS.gold,
                  fontSize: 13,
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                }}
              >
                Couvert {show.cover}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
