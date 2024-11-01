import { useState } from 'react';
import './burger.css';

export function Burger() {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!visible);

  return (
    <div>
      <div className="nav__burger burger" onClick={toggleVisibility}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>

      {!visible && (
        <div className="nav__menu menu">
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">
                Главное
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                О компании
              </a>
            </li>
            <li className="menu__item">
              <a href="../signin.html" className="menu__link">
                Портфолио
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Burger;
