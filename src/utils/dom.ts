import type { CSSProperties, KeyboardEvent, SyntheticEvent } from 'react';

export const revealDelay = (i: number): CSSProperties =>
  ({ '--d': `${Math.min(i, 9) * 55}ms` }) as CSSProperties;

export const onImgError = (e: SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.classList.add('img--failed');
};

// permite ativar elementos com role="button" via teclado (Enter / Espaço)
export const onActivateKey = (handler: () => void) => (e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    handler();
  }
};
