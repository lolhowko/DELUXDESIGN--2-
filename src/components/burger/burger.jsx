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
          <div className="menu__list">
            <div className="menu__item">
              <a href="#" className="menu__link">
                ГЛАВНАЯ
              </a>
            </div>

            <div className="menu__item_big">
              <div className="menu__item">
                <a href="#" className="menu__link">
                  ПОРТФОЛИО
                </a>
              </div>
              <div className="menu__item">
                <a href="#" className="menu__link_small">
                  ИНТЕРЬЕРЫ
                </a>
              </div>
              <div className="menu__item">
                <a href="#" className="menu__link_small">
                  ВЫСТАВКИ
                </a>
              </div>
            </div>

            <div className="menu__item_big">
              <div className="menu__item">
                <a href="../signin.html" className="menu__link">
                  О СТУДИИ
                </a>
              </div>
              <div className="menu__item">
                <a href="../signin.html" className="menu__link_small">
                  КОМАНДА
                </a>
              </div>
              <div className="menu__item">
                <a href="../signin.html" className="menu__link_small">
                  ОТЗЫВЫ
                </a>
              </div>
              <div className="menu__item">
                <a href="../signin.html" className="menu__link_small">
                  РЕКВИЗИТЫ
                </a>
              </div>
            </div>

            <div className="menu__item">
              <a href="../signin.html" className="menu__link">
                ПУБЛИКАЦИИ
              </a>
            </div>
            <div className="menu__item">
              <a href="../signin.html" className="menu__link">
                КОНТАКТЫ
              </a>
            </div>
          </div>

          <div className="menu__contact">
            <a
              href="mailto:info@deluxdesign.ru"
              className="menu__contact__link"
            >
              info@deluxdesign.ru
            </a>
            <div className="">
              <p className="menu__contact__link">Александр</p>
              <p className="menu__contact__link">8 900 245 16 30</p>
            </div>

            <div className="">
              <p className="menu__contact__link">Светлана</p>
              <p className="menu__contact__link">8 906 037 96 56</p>
            </div>

            <button className="menu__contact__button">НАПИСАТЬ НАМ</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Burger;
