import { HERO_IMG, WHATSAPP_LINK } from '../data';
import { COLORS, S } from '../styles';

const STATS = [
  { top: '18h → 2h', bottom: 'Todos os dias' },
  { top: '+40 rótulos', bottom: 'Cervejas & destilados' },
  { top: 'Bandas ao vivo', bottom: 'De quarta a domingo' },
];

export function Hero() {
  return (
    <section
      id="topo"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 20px 70px',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(180deg, rgba(10,6,16,.82) 0%, rgba(20,11,34,.78) 45%, rgba(10,6,16,.96) 100%), radial-gradient(circle at 50% 38%, rgba(176,107,255,.32) 0%, rgba(10,6,16,0) 62%)',
        }}
      />
      <div
        aria-hidden
        className="mp-glow"
        style={{
          position: 'absolute',
          top: '34%',
          left: '50%',
          width: 'min(720px, 92vw)',
          height: 320,
          transform: 'translate(-50%,-50%)',
          background:
            'radial-gradient(ellipse at center, rgba(176,107,255,.55) 0%, rgba(255,158,230,.22) 40%, rgba(10,6,16,0) 72%)',
          filter: 'blur(46px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: 860,
          width: '100%',
        }}
      >
        <div
          className="mp-floaty"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 18px',
            borderRadius: 999,
            border: '1px solid rgba(245,201,107,.4)',
            background: 'rgba(20,11,34,.6)',
            color: COLORS.gold,
            fontSize: 12,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: 26,
          }}
        >
          ♪ Música ao vivo toda noite
        </div>

        <h1
          className="mp-hero-title"
          style={{
            fontFamily: '"Cinzel", serif',
            fontSize: 'clamp(42px, 11vw, 104px)',
            lineHeight: 1.02,
            margin: 0,
            letterSpacing: '.02em',
          }}
        >
          <span style={{ display: 'block', color: COLORS.text }}>Magic Pub</span>
          <span
            style={{
              display: 'block',
              backgroundImage: 'linear-gradient(100deg,#f5c96b 0%,#ff9ee6 48%,#b06bff 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Music
          </span>
        </h1>

        <p
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontStyle: 'italic',
            fontSize: 'clamp(19px, 4vw, 27px)',
            color: '#d9cdec',
            margin: '22px auto 0',
            maxWidth: 620,
            lineHeight: 1.5,
          }}
        >
          Ninguém entra aqui só para beber. Tem sempre um acorde, um copo e uma
          história esperando por você — e a gente nunca conta qual vem primeiro.
        </p>

        <div
          className="mp-hero-actions"
          style={{
            display: 'flex',
            gap: 14,
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: 36,
          }}
        >
          <a
            className="mp-btn-primary"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            style={S.btnPrimary}
          >
            Reservar mesa
          </a>
          <a className="mp-btn-ghost" href="#cardapio" style={S.btnGhost}>
            Ver cardápio
          </a>
        </div>

        <div
          className="mp-hero-stats"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'clamp(20px, 7vw, 64px)',
            marginTop: 52,
            flexWrap: 'wrap',
          }}
        >
          {STATS.map((stat) => (
            <div key={stat.top} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: 'clamp(17px, 3.6vw, 22px)',
                  color: COLORS.gold,
                  fontWeight: 600,
                }}
              >
                {stat.top}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: COLORS.muted,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  marginTop: 6,
                }}
              >
                {stat.bottom}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
