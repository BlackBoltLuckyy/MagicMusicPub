import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MagicPubMusic from './MagicPubMusic';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MagicPubMusic />
  </StrictMode>
);
