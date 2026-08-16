import { MENU } from '../data';
import { COLORS, S, goldGradient } from '../styles';
import { SectionHeader } from './SectionHeader';

interface MenuProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

export function Menu({ activeTab, onTabChange }: MenuProps) {
  const category = MENU[activeTab];

  return (
    <section id="cardapio" className="mp-section" style={{ ...S.section, scrollMarginTop: 80 }}>
      <SectionHeader
        eyebrow="Cardápio"
        title={
          <>
            Do primeiro gole à <span style={{ color: COLORS.pink }}>última mordida</span>
          </>
        }
        lead="Seis categorias, uma cozinha que não fecha antes da última música. Escolha uma aba e se perca por ali."
      />

      <div
        className="reveal"
        style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 34 }}
        role="tablist"
        aria-label="Categorias do cardápio"
      >
        {MENU.map((cat, i) => {
          const active = i === activeTab;
          return (
            <button
              key={cat.name}
              className="mp-tab"
              role="tab"
              aria-selected={active}
              onClick={() => onTabChange(i)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '11px 20px',
                borderRadius: 999,
                fontFamily: 'inherit',
                fontSize: 14,
                fontWeight: active ? 700 : 500,
                cursor: 'pointer',
                background: active ? goldGradient : 'rgba(176,107,255,.05)',
                color: active ? '#251405' : COLORS.muted,
                border: active ? '1px solid transparent' : '1px solid rgba(176,107,255,.28)',
                boxShadow: active ? '0 10px 24px rgba(232,150,61,.28)' : 'none',
              }}
            >
              <span aria-hidden>{cat.icon}</span>
              {cat.name}
            </button>
          );
        })}
      </div>

      <div className="reveal" style={{ ...S.card, padding: 'clamp(18px, 4vw, 32px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
          <span style={{ fontSize: 24 }} aria-hidden>
            {category.icon}
          </span>
          <h3
            style={{
              fontFamily: '"Cinzel", serif',
              fontSize: 'clamp(19px, 3.6vw, 26px)',
              margin: 0,
              color: COLORS.gold,
            }}
          >
            {category.name}
          </h3>
        </div>
        <div
          style={{
            height: 1,
            background: 'linear-gradient(90deg, rgba(176,107,255,.55), rgba(255,158,230,.25), rgba(176,107,255,0))',
            margin: '14px 0 6px',
          }}
        />

        <div
          className="mp-menu-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', columnGap: 28 }}
        >
          {category.items.map((item, idx) => (
            <div
              key={item.name}
              className="mp-item mp-item-row"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '16px 8px',
                borderBottom: idx === category.items.length - 1 ? 'none' : '1px dashed rgba(176,107,255,.2)',
                borderRadius: 10,
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                width={64}
                height={64}
                style={{
                  width: 64,
                  height: 64,
                  minWidth: 64,
                  borderRadius: 14,
                  objectFit: 'cover',
                  border: '1px solid rgba(176,107,255,.25)',
                  display: 'block',
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontWeight: 600, fontSize: 15, color: COLORS.text, lineHeight: 1.35 }}>
                  {item.name}
                </div>
                <div style={{ color: COLORS.muted, fontSize: 12.5, lineHeight: 1.55, marginTop: 4 }}>
                  {item.desc}
                </div>
              </div>
              <div
                style={{
                  fontFamily: '"Cinzel", serif',
                  fontWeight: 700,
                  fontSize: 15,
                  color: COLORS.gold,
                  whiteSpace: 'nowrap',
                }}
              >
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
