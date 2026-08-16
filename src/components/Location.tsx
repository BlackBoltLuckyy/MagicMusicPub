import { HOURS, WHATSAPP_LINK } from '../data';
import { COLORS, S, goldGradient } from '../styles';
import { SectionHeader } from './SectionHeader';

export function Location() {
  return (
    <section id="localizacao" className="mp-section" style={{ ...S.section, scrollMarginTop: 80 }}>
      <SectionHeader
        eyebrow="Onde estamos"
        title={
          <>
            Fácil de achar, <span style={{ color: COLORS.gold }}>difícil de sair</span>
          </>
        }
      />

      <div
        className="mp-loc-grid reveal"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22, alignItems: 'stretch' }}
      >
        <div style={{ ...S.card, padding: 'clamp(20px, 4vw, 32px)' }}>
          <h3 style={{ fontFamily: '"Cinzel", serif', fontSize: 18, margin: '0 0 6px', color: COLORS.gold }}>
            Endereço
          </h3>
          <p style={{ color: COLORS.text, fontSize: 15, lineHeight: 1.7, margin: 0 }}>
            Rua das Lanternas, 218 — Vila Madalena
            <br />
            São Paulo / SP · CEP 05432-020
          </p>
          <p style={{ color: COLORS.muted, fontSize: 13, lineHeight: 1.6, marginTop: 8 }}>
            A 400m do metrô Fradique Coutinho. Estacionamento conveniado na esquina.
          </p>

          <div
            style={{
              height: 1,
              background: 'linear-gradient(90deg, rgba(176,107,255,.4), rgba(176,107,255,0))',
              margin: '22px 0',
            }}
          />

          <h3 style={{ fontFamily: '"Cinzel", serif', fontSize: 18, margin: '0 0 12px', color: COLORS.gold }}>
            Horários
          </h3>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {HOURS.map((h) => (
              <li
                key={h.day}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 12,
                  fontSize: 14,
                  color: COLORS.muted,
                  borderBottom: '1px dashed rgba(176,107,255,.2)',
                  paddingBottom: 8,
                }}
              >
                <span>{h.day}</span>
                <span style={{ color: h.time === 'Fechado' ? '#7a6d92' : COLORS.text, fontWeight: 500 }}>
                  {h.time}
                </span>
              </li>
            ))}
          </ul>

          <div
            style={{
              height: 1,
              background: 'linear-gradient(90deg, rgba(176,107,255,.4), rgba(176,107,255,0))',
              margin: '22px 0',
            }}
          />

          <h3 style={{ fontFamily: '"Cinzel", serif', fontSize: 18, margin: '0 0 10px', color: COLORS.gold }}>
            Contato
          </h3>
          <p style={{ color: COLORS.text, fontSize: 15, lineHeight: 1.8, margin: 0 }}>
            Telefone: (11) 3555-0218
            <br />
            WhatsApp: (11) 99999-9999
          </p>

          <a
            className="mp-btn-primary"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            style={{ ...S.btnPrimary, marginTop: 22 }}
          >
            Chamar no WhatsApp
          </a>
        </div>

        <div
          style={{
            ...S.card,
            position: 'relative',
            minHeight: 380,
            background: 'linear-gradient(140deg, #1b0f2e 0%, #140b22 55%, #0f0a1a 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Mapa ilustrativo da localização"
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(176,107,255,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(176,107,255,.10) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
              maskImage: 'radial-gradient(circle at 50% 50%, #000 30%, transparent 78%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 50%, #000 30%, transparent 78%)',
            }}
          />
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(28deg, transparent 46%, rgba(245,201,107,.22) 47%, rgba(245,201,107,.22) 48.4%, transparent 49%), linear-gradient(-58deg, transparent 62%, rgba(255,158,230,.16) 63%, rgba(255,158,230,.16) 64.2%, transparent 65%)',
            }}
          />

          <div style={{ position: 'relative', textAlign: 'center', zIndex: 2 }}>
            <div
              aria-hidden
              className="mp-glow"
              style={{
                position: 'absolute',
                top: 26,
                left: '50%',
                width: 150,
                height: 150,
                transform: 'translate(-50%,-50%)',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(176,107,255,.5) 0%, rgba(10,6,16,0) 70%)',
              }}
            />
            <div
              className="mp-floaty"
              style={{
                position: 'relative',
                width: 54,
                height: 54,
                margin: '0 auto',
                borderRadius: '50% 50% 50% 4px',
                transform: 'rotate(-45deg)',
                background: goldGradient,
                boxShadow: '0 14px 30px rgba(232,150,61,.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ transform: 'rotate(45deg)', fontSize: 22 }} aria-hidden>
                ✦
              </span>
            </div>
            <div
              style={{
                marginTop: 22,
                fontFamily: '"Cinzel", serif',
                fontSize: 17,
                color: COLORS.text,
                letterSpacing: '.08em',
              }}
            >
              MAGIC PUB MUSIC
            </div>
            <div style={{ color: COLORS.muted, fontSize: 13, marginTop: 6 }}>Vila Madalena · São Paulo</div>
          </div>
        </div>
      </div>
    </section>
  );
}
