import { useRef, useState } from 'react';
import { GlobalStyles } from './components/GlobalStyles';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Menu } from './components/Menu';
import { Shows } from './components/Shows';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { useReveal } from './hooks/useReveal';
import { S } from './styles';

export default function MagicPubMusic() {
  const [activeTab, setActiveTab] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);

  useReveal(rootRef, [activeTab]);

  return (
    <div ref={rootRef} style={S.page}>
      <GlobalStyles />
      <Nav />
      <Hero />
      <Highlights />
      <Menu activeTab={activeTab} onTabChange={setActiveTab} />
      <Shows />
      <Gallery />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
