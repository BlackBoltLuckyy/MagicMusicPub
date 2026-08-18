import logo from '../assets/brand/logo-magic.png';
import { Star } from './icons';

export function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Magic Music Pub" />
      <div className="rule" aria-hidden="true" />
      <h1 className="header__title">Cardápio</h1>
      <p className="header__year">2026</p>
      <div className="rule" aria-hidden="true" />
      <p className="header__tag">
        <Star /> bar · cozinha · música ao vivo <Star />
      </p>
    </header>
  );
}
