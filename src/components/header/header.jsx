import { useState } from 'react';
import Burger from '../burger/burger';
import './header.css';

export function Header() {
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => setVisible(!visible);

  const [visibleAbout, setVisibleAbout] = useState(true);
  const toggleVisibilityAbout = () => setVisibleAbout(!visibleAbout);

  return (
    <div>
      <div className="header">
        <Burger />
        <a href="#" className="header__logo">
          <img
            src="/public/img/logo.png"
            alt="logo"
            className="header__logo__img"
          />
        </a>
      </div>

      <div className="header__links__box">
        <div className="header__links">
          <div className="header__link" onClick={toggleVisibility}>
            ПОРТФОЛИО
          </div>
          {!visible && (
            <div className="header__links">
              <a href="#" className="header__link_small">
                ИНТЕРЬЕРЫ
              </a>
              <a href="#" className="header__link_small">
                ВЫСТАВКИ
              </a>
            </div>
          )}
        </div>

        <div className="header__links">
          <div className="header__link" onClick={toggleVisibilityAbout}>
            О СТУДИИ
          </div>
          {!visibleAbout && (
            <div className="header__links">
              <a href="#" className="header__link_small">
                КОМАНДА
              </a>
              <a href="#" className="header__link_small">
                ОТЗЫВЫ
              </a>
              <a href="#" className="header__link_small">
                РЕКВИЗИТЫ
              </a>
            </div>
          )}
        </div>
        <div className="header__links">
          <a href="#" className="header__link">
            КОНТАКТЫ
          </a>
        </div>
      </div>

      <div className="header__content">
        <div className="header__content__tittle">
          <div className="header__content__tittle__text">2015</div>
          <div className="header__content__tittle__text_small">
            год основания
          </div>
        </div>
        <div className="header__gorline"></div>

        <div className="header__content__box">
          <div className="header__content__item">
            <div className="header__content__item__tittle">150 +</div>
            <div className="header__content__item__text">
              реализованных проектов
            </div>
          </div>
          <div className="header__vertline"></div>

          <div className="header__content__item">
            <div className="header__content__item__tittle">200 +</div>
            <div className="header__content__item__text">
              разных мероприятий
            </div>
          </div>
          <div className="header__vertline"></div>

          <div className="header__content__item">
            <div className="header__content__item__tittle">300 +</div>
            <div className="header__content__item__text">готовых проектов</div>
          </div>
          <div className="header__vertline"></div>

          <div className="header__content__item">
            <div className="header__content__item__tittle">100 %</div>
            <div className="header__content__item__text">
              довольных клиентов
            </div>
          </div>
        </div>
        <div className="header__gorline"></div>
      </div>
    </div>
  );
}

export default Header;
