import Burger from '../burger/burger';
import './header.css';

export function Header() {
  return (
    <div>
      <div className="header">
        <Burger />
        <a href="#" className="header__logo">
          <img src="../img/logo.png" alt="logo" className="header__logo__img" />
        </a>
      </div>

      <div className="header__links">
        <a href="#" className="header__link">
          ПОРТФОЛИО
        </a>
        <a href="#" className="header__link">
          О СТУДИИ
        </a>
        <a href="#" className="header__link">
          КОНТАКТЫ
        </a>
      </div>
    </div>
  );
}

export default Header;
