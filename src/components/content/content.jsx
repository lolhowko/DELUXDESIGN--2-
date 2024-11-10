import './content.css';
import './contentmedia.css';

export function Content() {
  return (
    <div>
      <div className="content">
        <div className="about">
          <div className="content__box__tittle">
            <div className="content__box__tittle__text">О НАС</div>
            <div className="content__box__tittle__text">01</div>
          </div>
          <div className="content__gorline"></div>
          <div className="about__box">
            <div className="about__box__texts">
              <div className="about__box__text about__box__text_small">
                Мы создаем уникальный дизайн интерьерных решений и выставочных
                пространств. Всегда с нетерпением ждем новых, интересных
                проектов, в которые погружаемся и забываем день сейчас или ночь,
                так как очень любим свою работу и если душа творит, то совсем
                неважно который час. В нашей профессии очень важно следить за
                тенденциями, ценообразованием, наблюдать за интересными
                решениями в мировом сегменте - имея все эти знания, мы предложим
                лучшие решения дизайна относительно Вашего бюджета.
                <br />
                Если у Вас есть мечта - поделитесь ею с нами и мы сделаем все,
                чтоб она стала реальностью!
              </div>
              <div className="about__box__text">
                МЫ - КОМПАНИЯ «ПОЛНОГО ЦИКЛА»
              </div>
              <div className="about__box__text about__box__text_small">
                У нас можно не только разработать дизайн - проект, но и
                полностью его реализовать, с помощью наших надежных партнеров.
                Мы даем гарантию на качество наших услуг.
              </div>
            </div>
            <img
              src="/public/img/aboutbox1.png"
              alt=""
              className="about__box__img"
            />
          </div>
        </div>

        <div className="service">
          <div className="content__box__tittle">
            <div className="content__box__tittle__text">УСЛУГИ</div>
            <div className="content__box__tittle__text">02</div>
          </div>
          <div className="content__gorline"></div>

          <div className="service__box">
            <div className="service___box__item">
              <div className="service__box__content">
                <div className="service__box__tittle">ВЫСТАВКИ</div>
                <div className="service__box__text">
                  Мы разрабатываем дизайн, который не только соответствует
                  Вашему бренду, но и оптимизирует использование пространства
                  для повышения эффективности бизнеса.
                  <span className="service__box__text service__box__text_bold">
                    &nbsp; К нам обращаются с выставочными стендами / ПМЭФ / ВЭФ
                    / фестивалями / форумами / конгрессами / презентациями /
                    EVENT мероприятиями /
                  </span>
                </div>
                <div className="service__box__text">
                  Каждый проект для нас - это креативные решения и новые
                  возможности для личностного роста.
                </div>

                <button className="service__box__button">
                  Скачать и заполнить бриф
                </button>
              </div>

              <img
                src="/public/img/servicebox1.png"
                alt=""
                className="service__box__img service__box__img_1"
              />
            </div>

            <div className="service___box__item">
              <img
                src="/public/img/servicebox2.png"
                alt=""
                className="service__box__img"
              />

              <div className="service__box__content">
                <div className="service__box__tittle">ИНТЕРЬЕРЫ</div>

                <div className="service__box__text">
                  Мы разрабатываем функциональные и привлекательные дизайны для
                  жилых и коммерческих помещений.
                  <span className="service__box__text service__box__text_bold">
                    &nbsp; К нам обращаются с квартирами / загородными домами /
                    отелями / офисными пространствами / ресторанами / корнерами
                    / магазинами / салонами красоты /
                  </span>
                </div>
                <div className="service__box__text service__box__text_down">
                  Каждый проект для нас - это мечта и новая вершина в достижении
                  нашей цели.
                </div>

                <button className="service__box__button">
                  Скачать и заполнить бриф
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="projects">
          <div className="content__box__tittle">
            <div className="content__box__tittle__text">ПРОЕКТЫ</div>
            <div className="content__box__tittle__text">03</div>
          </div>
          <div className="content__gorline"></div>

          <div className="projects__box">
            <div className="projects__box__tittle">ВЫСТАВКИ</div>

            <div className="projects__box__content">
              <div className="projects__box__imgbox">
                <div>
                  <img
                    src="/public/img/projectsexh1.png"
                    alt="projectsexh1"
                    className="projects__box__img"
                  />
                  <div className="projects__box__imgtext">
                    г. Москва, ALPHABET
                  </div>
                </div>
              </div>

              <div className="projects__box__imgbox">
                <div>
                  <img
                    src="/public/img/projectsexh2.png"
                    alt="projectsexh2"
                    className="projects__box__img"
                  />
                  <div className="projects__box__imgtext">
                    г. Москва, ПМЭМ - Калужская область
                  </div>
                </div>
              </div>

              <div className="projects__box__texts">
                <div className="projects__box__text">
                  Вдохновляясь архитектурными формами и новыми современными
                  материалами мы создаем уникальные концепции дизайна, которые
                  отражают индивидуальность Вашего бренда и создают комфортное
                  пространство.
                </div>
                <button className="service__box__button projects__box__button">
                  Смотреть все проекты
                </button>
              </div>
            </div>
          </div>

          <div className="projects__box projects__box_down">
            <div className="projects__box__tittle">ИНТЕРЬЕРЫ</div>
            <div className="projects__box__content">
              <div className="projects__box__imgbox">
                <div>
                  <img
                    src="/public/img/projectsinterior1.png"
                    alt="projectsinterior"
                    className="projects__box__img"
                  />
                  <div className="projects__box__imgtext">
                    г. Москва, жк ВОРОБЬЕВЫ ГОРЫ
                  </div>
                </div>
              </div>

              <div className="projects__box__imgbox">
                <div>
                  <img
                    src="/public/img/projectsinterior2.png"
                    alt="projectsinterior"
                    className="projects__box__img"
                  />
                  <div className="projects__box__imgtext">
                    г. Москва, жк WEST GARDEN
                  </div>
                </div>
              </div>

              <div className="projects__box__texts">
                <div className="projects__box__text">
                  Черпая вдохновение у самой природы, в ее многообразии красок,
                  форм, текстур и рисунков, мы сами стали творцами, научившись
                  создавать удивительные вещи и интерьеры.
                </div>
                <button className="service__box__button projects__box__button">
                  Смотреть все проекты
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="realization">
          <div className="content__box__tittle">
            <div className="content__box__tittle__text">РЕАЛИЗАЦИЯ</div>
            <div className="content__box__tittle__text">04</div>
          </div>
          <div className="content__gorline"></div>

          <div className="realization__content">
            <div className="realization__box">
              <img
                src="/public/img/realizationbig1.png"
                alt="realizationbig"
                className="realization__box__img_big"
              />

              <img
                src="/public/img/realization1.png"
                alt="realizationimg"
                className="realization__box__img"
              />

              <img
                src="/public/img/realization2.png"
                alt="realizationimg"
                className="realization__box__img"
              />

              {/* <div className="realization__box__img_big realization__box__img_big_1"></div>
              <div className="realization__box__img realization__box__img_1"></div>
              <div className="realization__box__img realization__box__img_2"></div> */}
            </div>

            <div className="realization__box">
              <img
                src="/public/img/realizationbig2.png"
                alt="realizationbig"
                className="realization__box__img_big"
              />

              <img
                src="/public/img/realization3.png"
                alt="realizationimg"
                className="realization__box__img"
              />

              <img
                src="/public/img/realization4.png"
                alt="realizationimg"
                className="realization__box__img"
              />
              {/* <div className="realization__box__img_big realization__box__img_big_2"></div>
              <div className="realization__box__img realization__box__img_3"></div>
              <div className="realization__box__img realization__box__img_4"></div> */}
            </div>

            <div className="realization__footer">
              <button className="service__box__button realization__button">
                Смотреть все проекты
              </button>
            </div>
          </div>
        </div>

        <div className="wrnt">
          <div className="content__box__tittle">
            <div className="content__box__tittle__text">ГАРАНТИЯ</div>
            <div className="content__box__tittle__text">05</div>
          </div>
          <div className="content__gorline"></div>

          <div className="wrnt__tittles">
            <p className="wrnt__tittle">ЭМОЦИИ</p>
            <p className="wrnt__tittle">СЧАСТЬЕ</p>
            <p className="wrnt__tittle">НАДЕЖНОСТЬ</p>
          </div>

          <img
            src="/public/img/wrnt.png"
            alt="wrnt clients"
            className="wrnt__box"
          />

          <p className="wrnt__slogan">НАША ГАРАНТИЯ - НАШИ ЗАКАЗЧИКИ</p>

          <img
            src="/public/img/wrntlaptop.png"
            alt="laptop"
            className="wrnt__laptop"
          />
        </div>
      </div>

      <div className="footer">
        <div className="footer__box__tittle">
          <div className="footer__box__tittle__text">КОНТАКТЫ</div>
          <div className="footer__box__tittle__text">05</div>
        </div>
        <div className="content__gorline"></div>

        <div className="footer__content">
          <div className="footer__box">
            <div className="footer__box__contacts">
              <div className="footer__box__contact">
                <div className="footer__box__contact__text">Александр</div>
                <a
                  href="tel:89002451630"
                  className="footer__box__contact__text"
                >
                  8 900 245 16 30
                </a>
              </div>

              <div className="footer__box__contact">
                <div className="footer__box__contact__text">Светлана</div>
                <a
                  href="tel:89002451630"
                  className="footer__box__contact__text"
                >
                  8 906 037 96 56
                </a>
              </div>
            </div>

            <a
              href="mailto:info@deluxedesign.ru"
              className="footer__box__contact__text"
            >
              info@design.ru
            </a>
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

      <img src="/public/img/logo.png" alt="" className="footer__logo" />

      {/* <div className="footer__logo"></div> */}
    </div>
  );
}

export default Content;
