import './content.css';

export function Content() {
  return (
    <div>
      <div className="content">
        <div className="about">
          <div className="content__box__tittle">
            <p className="content__box__tittle__text">О НАС</p>
            <p className="content__box__tittle__text">01</p>
          </div>
          <div className="content__gorline"></div>
          <div className="about__box">
            <div className="about__box__texts">
              <p className="about__box__text">
                Мы создаем дизайн, как для себя, как если бы мы были заказчиками
                и какой результат хотели бы получить. Каждый проект для нас -
                это мечта и новая вершина в достижении нашей цели.
              </p>
              <p className="about__box__text about__box__text_small">
                ДИЗАЙН - это вся наша жизнь и бесконечная любовь. Это то, чем мы
                живем, дышим, наслаждаемся и хотим подарить каждому нашему
                клиенту частичку красоты, вкладывая ее в Ваш проект. Доверяя нам
                - Вы получаете уникальный проект, где вложена не только душа и
                философия дизайнера, но и стиль, гармония, красота. Мы рады
                воплотить в жизнь любую Вашу идею. Владея всеми техническими
                навоками, нарисуем то, что превратится из мечты в реальность. Вы
                получите уникальный, не повторимый дизайн, с гарантией качества,
                современными идеями и вау эффектом. Мы работаем ради Вас и для
                Вас, и хотим, чтоб красоты вокруг стало больше!
              </p>
            </div>
            <div className="about__box__img"></div>
          </div>
        </div>

        <div className="service">
          <div className="content__box__tittle">
            <p className="content__box__tittle__text">УСЛУГИ</p>
            <p className="content__box__tittle__text">02</p>
          </div>
          <div className="content__gorline"></div>

          <div className="service__box">
            <div className="service___box__item">
              <p className="service__box__tittle">ИНТЕРЬЕРЫ</p>
              <p className="service__box__text">
                Вдохновляясь архитектурными формами и новыми технологиями мы
                создаем гармоничное пространство, с акцентом на практичность и
                комфорт. чвпв апрарарарара прврлплапдла опдлоралорарпв авпьлапьд
                впаппапвапвпвпв пвап.
              </p>
              <button className="service__box__button">
                Скачать и заполнить бриф
              </button>
              <div className="service__box__img"></div>
            </div>
            <div className="service___box__item">
              <div className="service__box__img_2"></div>

              <p className="service__box__tittle">ВЫСТАВКИ</p>
              <p className="service__box__text">
                Черпая вдохновение у самой природы, в ее многообразии красок,
                форм, текстур и рисунков, мы сами стали творцами, научившись
                создавать удивительные вещи и интерьеры.
              </p>
              <button className="service__box__button">
                Скачать и заполнить бриф
              </button>
            </div>
          </div>
        </div>

        <div className="projects">
          <div className="content__box__tittle">
            <p className="content__box__tittle__text">ПРОЕКТЫ</p>
            <p className="content__box__tittle__text">03</p>
          </div>
          <div className="content__gorline"></div>

          <div className="projects__box">
            <div className="projects__box__tittle">ИНТЕРЬЕРЫ</div>
            <div className="projects__box__content">
              <div className="projects__box__imgbox">
                <div className="projects__box__img projects__box__img_1"></div>
                <p className="projects__box__imgtext">
                  г. Москва, жк ВОРОБЬЕВЫ ГОРЫ
                </p>
              </div>

              <div className="projects__box__imgbox">
                <div className="projects__box__img projects__box__img_2"></div>

                <p className="projects__box__imgtext">
                  г. Москва, жк WEST GARDEN
                </p>
              </div>

              <div className="projects__box__texts">
                <div className="projects__box__text">
                  Черпая вдохновение у самой природы, в ее многообразии красок,
                  форм, текстур и рисунков, мы сами стали творцами, научившись
                  создавать удивительные вещи и интерьеры.
                </div>
                <button className="projects__box__button">
                  Смотреть все проекты
                </button>
              </div>
            </div>
          </div>

          <div className="projects__box">
            <div className="projects__box__tittle">ВЫСТАВКИ</div>
            <div className="projects__box__content">
              <div className="projects__box__imgbox">
                <div className="projects__box__img projects__box__img_3"></div>
                <p className="projects__box__imgtext">г. Москва, ALPHABET</p>
              </div>

              <div className="projects__box__imgbox">
                <div className="projects__box__img projects__box__img_4"></div>

                <p className="projects__box__imgtext">
                  г. Москва, ПМЭМ - Калужская область
                </p>
              </div>

              <div className="projects__box__texts">
                <div className="projects__box__text">
                  Вдохновляясь архитектурными формами и новыми технологиями мы
                  создаем гармоничное пространство, с акцентом на практичность и
                  комфорт.
                </div>
                <button className="projects__box__button">
                  Смотреть все проекты
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="realization">
          <div className="content__box__tittle">
            <p className="content__box__tittle__text">РЕАЛИЗАЦИЯ</p>
            <p className="content__box__tittle__text">04</p>
          </div>
          <div className="content__gorline"></div>

          <div className="realization__content">
            <div className="realization__box">
              <img
                src="/img/realizationbig1.png"
                alt="realizationbig"
                className="realization__box__img_big"
              />

              <img
                src="/img/realization1.png"
                alt="realizationimg"
                className="realization__box__img"
              />

              <img
                src="/img/realization2.png"
                alt="realizationimg"
                className="realization__box__img"
              />

              {/* <div className="realization__box__img_big realization__box__img_big_1"></div>
              <div className="realization__box__img realization__box__img_1"></div>
              <div className="realization__box__img realization__box__img_2"></div> */}
            </div>

            <div className="realization__box">
              <img
                src="/img/realizationbig2.png"
                alt="realizationbig"
                className="realization__box__img_big"
              />

              <img
                src="/img/realization3.png"
                alt="realizationimg"
                className="realization__box__img"
              />

              <img
                src="/img/realization4.png"
                alt="realizationimg"
                className="realization__box__img"
              />
              {/* <div className="realization__box__img_big realization__box__img_big_2"></div>
              <div className="realization__box__img realization__box__img_3"></div>
              <div className="realization__box__img realization__box__img_4"></div> */}
            </div>

            <div className="realization__footer">
              <button className="realization__button">
                Смотреть все проекты
              </button>
            </div>
          </div>
        </div>

        <div className="wrnt">
          <div className="content__box__tittle">
            <p className="content__box__tittle__text">ГАРАНТИЯ</p>
            <p className="content__box__tittle__text">05</p>
          </div>
          <div className="content__gorline"></div>

          <div className="wrnt__tittles">
            <p className="wrnt__tittle">ЭМОЦИИ</p>
            <p className="wrnt__tittle">СЧАСТЬЕ</p>
            <p className="wrnt__tittle">НАДЕЖНОСТЬ</p>
          </div>

          <img src="/img/wrnt.png" alt="wrnt clients" className="wrnt__box" />

          <p className="wrnt__slogan">НАША ГАРАНТИЯ - НАШИ ЗАКАЗЧИКИ</p>

          <img
            src="/img/wrntlaptop.png"
            alt="laptop"
            className="wrnt__laptop"
          />
        </div>
      </div>

      <div className="footer">
        <div className="footer__box__tittle">
          <p className="footer__box__tittle__text">КОНТАКТЫ</p>
          <p className="footer__box__tittle__text">05</p>
        </div>
        <div className="content__gorline"></div>

        <div className="footer__content">
          <div className="footer__box">
            <div className="footer__box__contacts">
              <div className="footer__box__contact">
                <div className="footer__box__contact__text">Александр</div>
                <div className="footer__box__contact__text">
                  8 900 245 16 30
                </div>
              </div>

              <div className="footer__box__contact">
                <div className="footer__box__contact__text">Светлана</div>
                <div className="footer__box__contact__text">
                  8 906 037 96 56
                </div>
              </div>
            </div>

            <div className="footer__box__contact__text">info@design.ru</div>
          </div>

          <div className="footer__box footer__box_right">
            <div className="footer__links">
              <a href="https://t.me/DELUXDESIGN_1" className="footer__link">
                <img
                  src="img/telegram.png"
                  alt="telegram"
                  className="footer__link__img"
                />
              </a>
              <a
                href="https://wa.me/message/RL2KWUANQPGWA1"
                className="footer__link"
              >
                <img
                  src="img/whatsapp.png"
                  alt="whatsapp"
                  className="footer__link__img"
                />
              </a>
              <a href="https://vk.com/deluxdesign " className="footer__link">
                <img src="img/vk.png" alt="vk" className="footer__link__img" />
              </a>
            </div>

            <div className="footer__button">НАПИСАТЬ НАМ</div>
          </div>
        </div>
      </div>

      {/* <div className="footer__logo"></div> */}
      <img src="/img/logo.png" alt="" className="footer__logo" />
    </div>
  );
}

export default Content;
