import './src/essects/css/animate.css'
import './src/essects/css/main.scss'
import './src/essects/css/reset.css'
import './src/essects/css/style.scss'
import './src/essects/css/style-mob.css'
import PageWrapper from '../../components/PageWrapper'




const FigmaLandPage = () => {
  window.scrollTo({
    top:0,
    behavior: 'smooth',
  });
  return (
    <PageWrapper>
      <div className="figma-land-page">
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <a href="#"><img src="./FigmaLandPage/img/Nav_logo.png" alt="Логотип" className="nav_logo"/></a>
                    <nav className="nav_links">
                      <ul>
                          <a href="#" className="nav_link">Home</a>
                          <a href="#" className="nav_link">Product</a>
                          <a href="#" className="nav_link">About</a>
                          <a href="#" className="nav_link">Contact</a>
                      </ul>
                    </nav>
                    <button className="button nav_button">Sign up</button>
                </nav>
                <main className="main">
                    <div className="main_title animate__animated animate__backInLeft">Find the Best Solution in Seconds</div>
                    <div className="main_suptitle animate__animated animate__backInRight">If debugging is the process of removing software bugs.</div>
                    <div className="main_buttons">
                        <button className="button button_active main_button">get started</button>
                        <button className="button button_empty">try for free</button>
                    </div>
                    <img src="./FigmaLandPage/img/screen.png" alt="" className="main_img animate__animated animate__backInUp"/>
                </main>
            </div>
        </header>
        <section className="section__info_links">
            <div className="container">
                <div className="section_title title">FigmaLand was Built Specifically for You</div>
                <div className="section_galary">
                    <div className="section-box wow animate__animated animate__fadeInUp">
                        <img src="./FigmaLandPage/img/sec_box_1.png" alt="" className="section_box_img"/>
                        <div className="section__box-title">Management</div>
                        <div className="section__box-suptitle">Slate helps you see how many 
                            more days you need to work 
                            to reach your financial goal 
                            for the month and year.</div>
                        <a href="" className="section__box-link">Learn More</a>
                    </div>
                    <div className="section-box section-box_active wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                        <img src="./FigmaLandPage/img/sec_box_2.png" alt="" className="section_box_img"/>
                        <div className="section__box-title">Customer Support</div>
                        <div className="section__box-suptitle">Slate helps you see how many 
                            more days you need to work 
                            to reach your financial goal 
                            for the month and year.</div>
                        <a href="" className="section__box-link">Learn More</a>
                    </div>
                    <div className="section-box wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                        <img src="./FigmaLandPage/img/sec_box_3.png" alt="" className="section-box__img"/>
                        <div className="section__box-title">Collaborative</div>
                        <div className="section__box-suptitle">Slate helps you see how many 
                            more days you need to work 
                            to reach your financial goal 
                            for the month and year.</div>
                        <a href="" className="section__box-link">Learn More</a>
                    </div>
                </div>
              </div>
        </section>
        <div className="procces">
            <div className="container">
                <div className="procces-items">
                    <div className="procces__info_mob">
                        <div className="title procces_title">Quick & Easy Process</div>
                        <div className="suptitle procces_suptitle">Most calendars are designed for teams. Slate is designed 
                            for freelancers who want a simple way to plan
                            their schedule.</div>
                    </div>
                    <div className="procces__info">
                        <div className="procces__text">
                            <div className="title procces_title ">Quick & Easy Process</div>
                            <div className="suptitle procces_suptitle">Most calendars are designed for teams. Slate is designed 
                                for freelancers who want a simple way to plan
                                their schedule.</div>
                        </div>
                        <div className="procces__buttons">
                            <button className="button button_blue procces_button-first">sign up for free</button>
                            <button className="button button_empty-blue">find out more</button>
                        </div>
                    </div>
                    <img src="./FigmaLandPage/img/procces-img.png" alt="" className="procces-img wow animate__animated animate__fadeInRightBig"/>
                </div>
            </div>
        </div>
        <div className="operations">
            <div className="container">
                <div className="operations-items">
                    <div className="operations__info_mob">
                        <div className="title operation__title">Perfect for Operations HR and Finance</div>
                        <div className="suptitle operation__suptitle">Most calendars are designed for teams. Slate is designed<br/>
                          for freelancers who want a simple way to plan <br/>
                          their schedule.
                        </div>
                    </div>
                    <img src="./FigmaLandPage/img/operations.png" alt="" className="operations-img wow animate__animated animate__fadeInLeftBig"/>
                    <div className="operations__info">
                        <div className="operations__text">
                            <div className="title operation__title">Perfect for Operations HR and Finance</div>
                            <div className="suptitle operation__suptitle">Most calendars are designed for teams. Slate is designed<br/>
                              for freelancers who want a simple way to plan <br/>
                                their schedule.</div>
                        </div>
                        <button className="button button_blue operation__button">Button</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="solutions">
            <div className="container">
                <div className="solutions-items">
                    <div className="solution__text_mob">
                      <div className="title solution_title">Perfect solution for small businesse</div>
                      <div className="suptitle solution_suptitle">Being a freelancer is a <br/> rollercoaster of emotions.<br/>We built Slate to keep your <br/>freelance business less stressful.<br/>We'd love to show you <br/>what we're building...</div>
                    </div>
                    <div className="solution__text">
                        <div className="solution__info">
                            <div className="title solution_title">Perfect solution for small businesse</div>
                            <div className="suptitle solution_suptitle">Being a freelancer is a <br/> rollercoaster of emotions.<br/>We built Slate to keep your <br/>freelance business less stressful.<br/>We'd love to show you <br/>what we're building...</div>
                        </div>
                        <div className="buttons-solutins">
                            <button className="button button_blue solution_button-left">sign up for free</button>
                            <button className="button button_empty-blue solution">find out more</button> 
                        </div>
                    </div>
                    <img src="./FigmaLandPage/img/solutin-img.png" alt="" className="solution-img"/>
                </div>
            </div>
        </div>
        <div className="pricing">
            <div className="container">
                <div className="pricing-items">
                    <div className="pricing-items__text">
                        <div className="title">Simple Pricing for Your Team</div>
                        <div className="suptitle pricing-items_suptitle">Slate helps you see how many more days you need </div>
                    </div>
                    <div className="pricing-galary">
                        <div className="pricing-box wow animate__animated animate__fadeInUp">
                            <div className="title pricing-box_title">Education</div>
                            <div className="suptitle pricing-box_suptitle">Br/ief price Description</div>
                            <img src="./FigmaLandPage/img/pricing-1.png" alt="" className="pricing__box-img"/>
                            <div className="pricing-info">
                                <div className="pricing__count">
                                    <div className="pricing__numb">0</div>
                                    <div className="pricing__count-text">
                                        <p className="pricing__simbol">$</p>
                                        <p className="pricing__mounth">Per/ month</p>
                                    </div>
                                </div>
                                <p className="pricing__p">Only 2 Operators</p>
                                <p className="pricing__p">Abandoned Cart</p>
                                <p className="pricing__p">Facebook & Instagram Ads</p>
                                <p className="pricing__p pricing__p_mode">Order Notifications</p>
                                <p className="pricing__p pricing__p_mode">Landing Pages</p>
                                <button className="button button_blue button_pricing">Order Now</button>
                            </div>
                        </div>
                        <div className="pricing-box wow animate__animated animate__fadeInUp" data-wow-delay=".5s">
                            <div className="title pricing-box_title">Professional</div>
                            <div className="suptitle pricing-box_suptitle">Br/ief price Description</div>
                            <img src="./FigmaLandPage/img/pricing-2.png" alt="" className="pricing__box-img"/>
                            <div className="pricing-info">
                                <div className="pricing__count">
                                    <div className="pricing__numb">10</div>
                                    <div className="pricing__count-text">
                                        <p className="pricing__simbol">$</p>
                                        <p className="pricing__mounth">Per/ month</p>
                                    </div>
                                </div>
                                <p className="pricing__p">Only 2 Operators</p>
                                <p className="pricing__p">Abandoned Cart</p>
                                <p className="pricing__p">Facebook & Instagram Ads</p>
                                <p className="pricing__p">Order Notifications</p>
                                <p className="pricing__p pricing__p_mode">Landing Pages</p>
                                <button className="button button_blue button_pricing">Order Now</button>
                            </div>
                        </div>
                        <div className="pricing-box wow animate__animated animate__fadeInUp" data-wow-delay="1s">
                            <div className="title pricing-box_title">Business</div>
                            <div className="suptitle pricing-box_suptitle">Br/ief price Description</div>
                            <img src="./FigmaLandPage/img/pricing-3.png" alt="" className="pricing__box-img"/>
                            <div className="pricing-info">
                                <div className="pricing__count">
                                    <div className="pricing__numb">99</div>
                                    <div className="pricing__count-text">
                                        <p className="pricing__simbol">$</p>
                                        <p className="pricing__mounth">Per/ month</p>
                                    </div>
                                </div>
                                <p className="pricing__p">Only 2 Operators</p>
                                <p className="pricing__p">Abandoned Cart</p>
                                <p className="pricing__p">Facebook & Instagram Ads</p>
                                <p className="pricing__p">Order Notifications</p>
                                <p className="pricing__p">Landing Pages</p>
                                <button className="button button_blue button_pricing">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="subscribe">
            <div className="container">
                <div className="subscribe__items">
                    <div className="title subscribe_title">SUBSCRIBE</div>
                    <div className="suptitle subscribe_suptitle">Subscribe to get exclusive news & offer</div>
                    <div className="subscribe__input">
                        <input type="text" className="input" placeholder="Enter Your Adress Email"/>
                        <button className="button button_blue subscribe_button">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
        <footer className="footer wow animate__animated animate__fadeInUp">
            <div className="container">
                <div className="footer__items">
                    <div className="footer__links-items">
                        <div className="footer__links-wrapper">
                            <div className="footer__links">
                                <a href="" className="footer__link">Price Item One</a>
                                <a href="" className="footer__link">Price Item Two</a>
                                <a href="" className="footer__link">Price Item Three</a>
                            </div>
                            <div className="footer__links">
                                <a href="" className="footer__link">Price Item One</a>
                                <a href="" className="footer__link">Price Item Two</a>
                                <a href="" className="footer__link">Price Item Three</a>
                            </div>
                        </div>
                        <div className="footer__text">Just type what's on your mind </div>
                    </div>
                    <img src="./FigmaLandPage/img/footer-img.png" alt="" className="footer_img"/>
                    <div className="footer_contacts">
                        <div className="footer__place"> <img src="./FigmaLandPage/img/footer-place.png" alt="" className="footer__img-place"/>
                            7480 Mockingbird Hill undefined </div>
                        <div className="footer__phone"> <img src="./FigmaLandPage/img/footer-phone.png" alt=""/><a href="tel:2395550108" className="tel_link">(239) 555-0108</a></div>
                        <div className="footer__networks">
                            <a href="" className="footer_networks-img"><img src="./FigmaLandPage/img/twitter.png" alt="" className="network-twitter"/></a>
                            <a href="" className="footer_networks-img"><img src="./FigmaLandPage/img/faceboock.png" alt="" className="network-twitter"/></a>
                            <a href="" className="footer_networks-img"><img src="./FigmaLandPage/img/inst.png" alt="" className="network-twitter"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <script src="./FigmaLandPage/js/wow.min.js"></script>
          {/* <script src="../../"></script> */}
        <script>
          new WOW().init();
        </script>
      </div>
    </PageWrapper>
  )
}

export default FigmaLandPage;