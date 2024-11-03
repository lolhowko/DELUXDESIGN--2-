import './content.css';

export function Content() {
  return (
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
              Мы создаем дизайн, как для себя, как если бы мы были заказчиками и
              какой результат хотели бы получить. Каждый проект для нас - это
              мечта и новая вершина в достижении нашей цели.
            </p>
            <p className="about__box__text about__box__text_small">
              ДИЗАЙН - это вся наша жизнь и бесконечная любовь. Это то, чем мы
              живем, дышим, наслаждаемся и хотим подарить каждому нашему клиенту
              частичку красоты, вкладывая ее в Ваш проект. Доверяя нам - Вы
              получаете уникальный проект, где вложена не только душа и
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

        <div className="projects">
          <div className="content__box__tittle">
            <p className="content__box__tittle__text">ПРОЕКТЫ</p>
            <p className="content__box__tittle__text">03</p>
          </div>
          <div className="content__gorline"></div>

          <div className="projects__box">
            <div className="projects__box__tittle">ИНТЕРЬЕРЫ</div>
            <div className="projects__box__content">
              <div className="projects__box__img"></div>
              <div className="projects__box__img_2"></div>
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
        </div>
      </div>
    </div>
  );
}

export default Content;
