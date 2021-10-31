import PageWrapper from "../../../components/PageWrapper"
import './essects/css/style.scss'


const ItStudioPage = () => {
  window.scrollTo({
    top:0,
    behavior: 'smooth',
  });
  return (
    <PageWrapper>
      <div className="it-studio-page">
        {/* <link rel="stylesheet" href="./essects/css/style.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet"> */}
        <header className="header">
            <div className="nav_block">
                <div className="container">
                    <nav className="nav">
                        <a href="" className="nav_item active">Главная</a>
                        <a href="" className="nav_item">Наши проекты</a>
                        <a href="" className="nav_item">Услуги</a>
                        <a href="" className="nav_item">Новости</a>
                        <a href="" className="nav_item">Контакты</a>
                    </nav>
                </div>
            </div>
            <div className="section-1__img-wrapper">
              <img src="./ItStudioPage/img/first_img.png" alt="" />
            </div>
        </header>

        <section className="section-1">
            {/* <div className="section-1__img-wrapper">
              <img src="./ItStudioPage/img/offers_img.png" alt="" />
            </div> */}
            <div className="title_info">
                <p>Передовая IT студия</p>
                <h1>Мы создаем легкие решения сложных задач и проблем</h1>
            </div>
            <button className="button">Наши проекты</button>
        </section>

        <main className="main">
            <div className="container">
                <div className="main_title">
                    <div className="main_info">
                        <h2>Мы создаем мобильные приложения
                                для крупных корпораций</h2>
                        <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. </p>
                    </div>
                </div>

                <div className="service_row">
                    <div className="service_item">
                        <img src="./essects/img/Papers-pan.png" alt="" className="service_img"/>
                        <div className="service_info_hover">
                            <div className="service_title">Создание сайтов</div>
                            <div className="service_discrip">Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</div>
                        </div>
                    </div>
                    <div className="service_item">
                        <img src="./essects/img/Papers-pan.png" alt="" className="service_img"/>
                        <div className="service_info_hover">
                            <div className="service_title">Создание сайтов</div>
                            <div className="service_discrip">Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</div>
                        </div>
                    </div>
                    <div className="service_item">
                        <img src="./essects/img/Papers-pan.png" alt="" className="service_img"/>
                        <div className="service_info_hover">
                            <div className="service_title">Создание сайтов</div>
                            <div className="service_discrip">Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <button className="button">Наши проекты</button>

        <div className="about">
            <div className="container">
                <div className="about_us">
                    <div className="about_info">
                        <div className="about_title">Высокие стандарты разработки</div>
                        <div className="about_suptitle">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.  стандартной "рыбой" для текстов на латинице с начала XVI века. </div>
                        <a href="#" className="about_link">Подробнее о компании</a>   
                    </div>
                    <div className="about_img"><img src="./essects/img/about_img.png" alt=""/></div>
                </div>

            <div className="statistics">
                <div className="stat_item">
                    <div className="stat_img"><img src="./essects/img/window.png" alt=""/></div>
                    <div className="stat_info">
                        <div className="stat_numbers">125</div>
                        <div className="stat_discr">Our projects</div>
                    </div>
                </div>
                <div className="stat_item">
                    <div className="stat_img"><img src="./essects/img/window.png" alt=""/></div>
                    <div className="stat_info">
                        <div className="stat_numbers">125</div>
                        <div className="stat_discr">Our projects</div>
                    </div>
                </div>
                <div className="stat_item">
                    <div className="stat_img"><img src="./essects/img/window.png" alt=""/></div>
                    <div className="stat_info">
                        <div className="stat_numbers">125</div>
                        <div className="stat_discr">Our projects</div>
                    </div>
                </div>
                <div className="stat_item">
                    <div className="stat_img"><img src="./essects/img/window.png" alt=""/></div>
                    <div className="stat_info">
                        <div className="stat_numbers">125</div>
                        <div className="stat_discr">Our projects</div>
                    </div>
                </div>
                <div className="stat_item">
                    <div className="stat_img"><img src="./essects/img/window.png" alt=""/></div>
                    <div className="stat_info">
                        <div className="stat_numbers">125</div>
                        <div className="stat_discr">Our projects</div>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className="offers">
            <div className="container">
                <div className="offer_header">
                    <div className="offer_title">Наши работы, на которых мы специализируемся</div>
                    <button className="button">Все услуги</button>
                </div>
                <div className="offer_section">
                    <div className="offer_item">
                        <img src="./essects/img/offers_img.png" alt="" className="offer_img"/>
                        <div className="offer_item_title"><span>01.</span> Исследование и упаковка</div>
                        <div className="offer_item_disc">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</div>
                        <a href="#" className="about_link">Подробнее</a> 
                    </div>
                    <div className="offer_item">
                        <img src="./essects/img/offers_img.png" alt="" className="offer_img"/>
                        <div className="offer_item_title"><span>01.</span> Исследование и упаковка</div>
                        <div className="offer_item_disc">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</div>
                        <a href="#" className="about_link">Подробнее</a> 
                    </div>
                    <div className="offer_item">
                        <img src="./essects/img/offers_img.png" alt="" className="offer_img"/>
                        <div className="offer_item_title"><span>01.</span> Исследование и упаковка</div>
                        <div className="offer_item_disc">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</div>
                        <a href="#" className="about_link">Подробнее</a> 
                    </div>
                </div>
            </div>
        </div>
        <div className="progects">
            <div className="container">
                <div className="prog_info">
                  <div className="prog_title">Наши проекты</div>
                  <div className="prog_suptitle">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. </div>
                </div>
                <div className="prog_items">
                  <img src="./essects/img/progects_img.png" alt="" className="prog_img"/>
                  <img src="./essects/img/progects_img.png" alt="" className="prog_img"/>
                  <img src="./essects/img/progects_img.png" alt="" className="prog_img"/>
                  <img src="./essects/img/progects_img.png" alt="" className="prog_img"/>
                </div>
                <button className="button">Все проекты</button>
            </div>
        </div>

    <div className="about_movie">
        <div className="container">
            <div className="about_mov_title">Видео о нашей работе</div>
            <div className="about_mov_suptitle">Просто посмотрите, как мы работаем</div>
            <div className="about_video">
                <img src="./essects/img/about_video.png" alt=""/>
                <button className="about_video_button">Смотреть видео</button>
            </div>
            <div className="feedback">
                <div className="feedback_title">Подпишитесь на нашу рассылку</div>
                <div className="feedback_suptitle">Полезные статьи, акции, новости - получите все это сейчас!</div>
                <div className="feedback_inputzone">
                    <input name="" id=""  className="input_mail" placeholder="Ваш e-mail"></input>
                    <button className="input_button">Подписаться</button>
                </div>
                <div className="feedback_ps">Мы не шлем спам, и передаем никому ваши данные.</div>
            </div>
        </div>
    </div>

    <footer className="footer">
        <div className="container">
            <div className="footer_info">
                <div className="footer_info_title">
                    Контактная информация
                    <div className="footer_list message">test@test.ru</div>
                    <div className="footer_list phone">+8 777 555 66 99</div>
                    <div className="footer_list location">Москва, Бульвар Ленина 33</div>
                </div>
                <div className="footer_info_title">
                    Основные ссылки
                    <a href='#' className="footer_list">Главная</a>
                    <a href='#' className="footer_list">Наши проекты</a>
                    <a href='#' className="footer_list">Наши услуги</a>
                    <a href='#' className="footer_list">Контакты</a>
                </div>
                <div className="footer_info_title">
                    Наши проекты
                    <a href='#' className="footer_list">РосНано</a>
                    <a href='#' className="footer_list">Сколково</a>
                    <a href='#' className="footer_list">Проект “Восток”</a>
                    <a href='#' className="footer_list">ТЭЦ Калининграда</a>
                </div>
                <div className="footer_info_title">
                    Социальные сети
                    <a href='#' className="footer_list">VK.com</a>
                    <a href='#' className="footer_list">Instagram</a>
                    <a href='#' className="footer_list">Facebook</a>
                    <a href='#' className="footer_list">Twitter</a>
                </div>
            </div>
            <div className="last">(с) 2019. Все права защищены.</div>
        </div>
      </footer>
      </div>
    </PageWrapper>
  )
}

export default ItStudioPage;