import { SOCIAL_LINKS, WHATSAPP_LINK } from '../data';
import { COLORS, S } from '../styles';

export function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(176,107,255,.16)',
        background: 'linear-gradient(180deg, rgba(20,11,34,.7) 0%, rgba(10,6,16,1) 100%)',
        marginTop: 20,
      }}
    >
      <div className="mp-section" style={{ ...S.section, textAlign: 'center', paddingBottom: 44 }}>
        <div className="reveal">
          <div style={{ ...S.eyebrow, color: COLORS.pink }}>Última chamada</div>
          <h2 style={{ ...S.h2, marginBottom: 14 }}>Sua mesa está te esperando</h2>
          <p style={{ ...S.lead, margin: '0 auto 30px' }}>
            Reserve pelo WhatsApp e a gente separa o melhor canto da casa — aquele de
            frente pro palco, onde o som chega antes de todo mundo.
          </p>

          <a
            className="mp-btn-primary"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            style={{ ...S.btnPrimary, padding: '17px 38px', fontSize: 16 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.38-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" />
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38a9.87 9.87 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23z" />
            </svg>
            Reservar no WhatsApp
          </a>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 40, flexWrap: 'wrap' }}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                className="mp-social"
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(176,107,255,.28)',
                  background: 'rgba(176,107,255,.06)',
                  color: COLORS.muted,
                }}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>

          <div
            style={{
              marginTop: 36,
              paddingTop: 24,
              borderTop: '1px solid rgba(176,107,255,.14)',
              color: '#7a6d92',
              fontSize: 12.5,
              lineHeight: 1.8,
            }}
          >
            <div style={{ fontFamily: '"Cinzel", serif', color: COLORS.muted, letterSpacing: '.14em', marginBottom: 8 }}>
              ✦ MAGIC PUB MUSIC
            </div>
            © {new Date().getFullYear()} Magic Pub Music · Todos os direitos reservados.
            <br />
            Beba com moderação. Venda proibida para menores de 18 anos.
          </div>
        </div>
      </div>
    </footer>
  );
}
