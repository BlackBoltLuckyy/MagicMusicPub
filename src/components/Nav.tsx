import { WHATSAPP_LINK } from '../data';
import { COLORS, S } from '../styles';

export function Nav() {
  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 900,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        background: 'rgba(10,6,16,.72)',
        borderBottom: '1px solid rgba(176,107,255,.14)',
      }}
    >
      <nav
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: '14px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        <a
          href="#topo"
          style={{
            fontFamily: '"Cinzel", serif',
            fontWeight: 700,
            fontSize: 'clamp(15px, 3.4vw, 19px)',
            letterSpacing: '.12em',
            color: COLORS.text,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ color: COLORS.gold, marginRight: 6 }}>✦</span>
          MAGIC PUB
        </a>

        <div className="mp-navlinks" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a className="mp-navlink" href="#cardapio">
            Cardápio
          </a>
          <a className="mp-navlink" href="#shows">
            Shows
          </a>
          <a className="mp-navlink" href="#localizacao">
            Onde estamos
          </a>
        </div>

        <a
          className="mp-btn-primary mp-nav-cta"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          style={{ ...S.btnPrimary, padding: '11px 22px', fontSize: 14 }}
        >
          Reservar
        </a>
      </nav>
    </header>
  );
}
