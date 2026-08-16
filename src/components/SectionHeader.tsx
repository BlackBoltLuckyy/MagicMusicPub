import type { ReactNode } from 'react';
import { S } from '../styles';

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
}

export function SectionHeader({ eyebrow, title, lead }: SectionHeaderProps) {
  return (
    <div className="reveal" style={{ marginBottom: 40 }}>
      <div style={S.eyebrow}>{eyebrow}</div>
      <h2 style={S.h2}>{title}</h2>
      {lead ? <p style={S.lead}>{lead}</p> : null}
    </div>
  );
}
