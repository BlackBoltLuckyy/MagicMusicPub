import type { CSSProperties } from 'react';

export const COLORS = {
  bg: '#0a0610',
  panel: '#140b22',
  mid: '#3a2456',
  neon: '#b06bff',
  gold: '#f5c96b',
  amber: '#e8963d',
  pink: '#ff9ee6',
  text: '#efe9f5',
  muted: '#a99cc0',
};

export const goldGradient = 'linear-gradient(135deg,#f5c96b,#e8963d)';
export const cardBorder = `1px solid rgba(176,107,255,.18)`;

export const S: Record<string, CSSProperties> = {
  page: {
    background: COLORS.bg,
    color: COLORS.text,
    fontFamily: '"Poppins", system-ui, -apple-system, sans-serif',
    minHeight: '100vh',
    overflowX: 'hidden',
    position: 'relative',
  },
  section: {
    maxWidth: 1180,
    margin: '0 auto',
    padding: '84px 20px',
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: '.28em',
    textTransform: 'uppercase',
    color: COLORS.neon,
    fontWeight: 600,
    marginBottom: 12,
  },
  h2: {
    fontFamily: '"Cinzel", serif',
    fontSize: 'clamp(28px, 5vw, 44px)',
    lineHeight: 1.15,
    margin: 0,
    color: COLORS.text,
  },
  lead: {
    color: COLORS.muted,
    fontSize: 'clamp(14px, 2.4vw, 16px)',
    lineHeight: 1.7,
    maxWidth: 620,
    marginTop: 14,
  },
  card: {
    background: COLORS.panel,
    border: cardBorder,
    borderRadius: 20,
    boxShadow: '0 18px 40px rgba(58,36,86,.28)',
    overflow: 'hidden',
  },
  btnPrimary: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    background: goldGradient,
    color: '#251405',
    fontWeight: 700,
    fontSize: 15,
    padding: '14px 28px',
    borderRadius: 999,
    border: 'none',
    cursor: 'pointer',
    textDecoration: 'none',
    boxShadow: '0 10px 26px rgba(232,150,61,.32)',
    fontFamily: 'inherit',
  },
  btnGhost: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    background: 'rgba(176,107,255,.06)',
    color: COLORS.text,
    fontWeight: 600,
    fontSize: 15,
    padding: '13px 26px',
    borderRadius: 999,
    border: '1px solid rgba(176,107,255,.45)',
    cursor: 'pointer',
    textDecoration: 'none',
    fontFamily: 'inherit',
  },
};

export const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@1,400;1,500&family=Poppins:wght@300;400;500;600;700&display=swap');

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; background: #0a0610; }

.reveal { opacity: 0; transform: translateY(34px); transition: opacity .8s ease, transform .8s ease; }
.reveal.in { opacity: 1; transform: translateY(0); }

@keyframes floaty {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes glowpulse {
  0%, 100% { opacity: .38; transform: scale(1); }
  50% { opacity: .78; transform: scale(1.08); }
}

@keyframes wa-pulse {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,.55), 0 10px 26px rgba(0,0,0,.4); }
  70% { transform: scale(1.06); box-shadow: 0 0 0 18px rgba(37,211,102,0), 0 10px 26px rgba(0,0,0,.4); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37,211,102,0), 0 10px 26px rgba(0,0,0,.4); }
}

.mp-floaty { animation: floaty 4.5s ease-in-out infinite; }
.mp-glow { animation: glowpulse 5s ease-in-out infinite; }
.mp-wa { animation: wa-pulse 2.4s ease-in-out infinite; }

.mp-navlink { position: relative; color: #a99cc0; text-decoration: none; font-size: 14px; font-weight: 500; transition: color .25s ease; }
.mp-navlink:hover, .mp-navlink:focus-visible { color: #f5c96b; outline: none; }
.mp-navlink::after { content: ''; position: absolute; left: 0; bottom: -6px; height: 1px; width: 0; background: linear-gradient(90deg,#f5c96b,#ff9ee6); transition: width .3s ease; }
.mp-navlink:hover::after, .mp-navlink:focus-visible::after { width: 100%; }

.mp-btn-primary { transition: transform .25s ease, box-shadow .25s ease, filter .25s ease; }
.mp-btn-primary:hover, .mp-btn-primary:focus-visible { transform: translateY(-2px); filter: brightness(1.06); box-shadow: 0 16px 34px rgba(232,150,61,.42); outline: none; }

.mp-btn-ghost { transition: border-color .25s ease, background .25s ease, transform .25s ease; }
.mp-btn-ghost:hover, .mp-btn-ghost:focus-visible { border-color: rgba(176,107,255,.9); background: rgba(176,107,255,.14); transform: translateY(-2px); outline: none; }

.mp-card { transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease; }
.mp-card:hover { transform: translateY(-6px); border-color: rgba(176,107,255,.45); box-shadow: 0 26px 54px rgba(176,107,255,.22); }
.mp-card:hover .mp-card-img { transform: scale(1.07); }
.mp-card-img { transition: transform .6s ease; }

.mp-tab { transition: transform .25s ease, border-color .25s ease, color .25s ease, background .25s ease; }
.mp-tab:hover { transform: translateY(-2px); }
.mp-tab:focus-visible { outline: 2px solid rgba(176,107,255,.7); outline-offset: 3px; }

.mp-item { transition: background .3s ease, padding-left .3s ease; }
.mp-item:hover { background: rgba(176,107,255,.06); }

.mp-show { transition: background .3s ease, border-color .3s ease; }
.mp-show:hover { background: rgba(176,107,255,.07); border-color: rgba(176,107,255,.4); }

.mp-gal { overflow: hidden; border-radius: 16px; border: 1px solid rgba(176,107,255,.18); }
.mp-gal img { transition: transform .7s ease, filter .7s ease; filter: saturate(.92) brightness(.88); }
.mp-gal:hover img { transform: scale(1.08); filter: saturate(1.05) brightness(1); }

.mp-social { transition: transform .25s ease, background .25s ease, color .25s ease, border-color .25s ease; }
.mp-social:hover { transform: translateY(-3px); background: rgba(176,107,255,.16); border-color: rgba(176,107,255,.55); color: #f5c96b; }

.mp-wa-link { transition: filter .25s ease; }
.mp-wa-link:hover { filter: brightness(1.08); }

@media (max-width: 900px) {
  .mp-loc-grid { grid-template-columns: 1fr !important; }
  .mp-hero-title { letter-spacing: 0 !important; }
}

@media (max-width: 720px) {
  .mp-navlinks { display: none !important; }
  .mp-hero-stats { gap: 18px !important; }
  .mp-menu-grid { grid-template-columns: 1fr !important; }
  .mp-show-row { grid-template-columns: 1fr !important; gap: 6px !important; text-align: left !important; }
  .mp-show-right { justify-content: flex-start !important; }
  .mp-hero-actions { flex-direction: column !important; align-items: stretch !important; }
  .mp-hero-actions > a { width: 100%; }
}

@media (max-width: 520px) {
  .mp-section { padding-left: 16px !important; padding-right: 16px !important; }
  .mp-item-row { gap: 12px !important; }
  .mp-gallery { grid-template-columns: repeat(2, 1fr) !important; }
  .mp-nav-cta { padding: 10px 18px !important; font-size: 13px !important; }
}

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1 !important; transform: none !important; transition: none !important; }
  .mp-floaty, .mp-glow, .mp-wa { animation: none !important; }
  html { scroll-behavior: auto; }
}
`;
