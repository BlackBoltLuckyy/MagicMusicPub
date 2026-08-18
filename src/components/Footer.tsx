import logo from '../assets/brand/logo-magic.png';
import { InstagramIcon, Star } from './icons';

export function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Magic Music Pub" />
      <p className="footer__phrase">Siga a gente e conheça o rolê 🎶</p>
      <a className="btn-ig" href="https://instagram.com/magicmusicpub" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
        @magicmusicpub
      </a>
      <p className="footer__hours">Qua a Dom · 18h às 2h · Vila Madalena, SP</p>
      <p className="footer__spell">
        <Star /> feito com fogo, fritura e um tantinho de magia <Star />
      </p>
    </footer>
  );
}
