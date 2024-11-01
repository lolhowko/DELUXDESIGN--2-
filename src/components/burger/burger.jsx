import { useState } from 'react';
import './burger.css';

export function Burger() {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <div>
      {visible && (
        <div className="nav__burger burger" onClick={toggleVisibility}>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
          <span className="burger__line"></span>
        </div>
      )}

      {!visible && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">
                ГЛАВНАЯ
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                ПОРТФОЛИО
              </a>
            </li>
            <li className="menu__item">
              <a href="../signin.html" className="menu__link">
                ПУБЛИКАЦИИ
              </a>
            </li>
            <li className="menu__item">
              <a href="../signin.html" className="menu__link">
                КОНТАКТЫ
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Burger;
