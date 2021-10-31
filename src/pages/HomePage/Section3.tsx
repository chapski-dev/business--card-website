import './Section3.scss' 
import cardOneImg from './img/section3/Funiro.png';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

 const Section3 = () => {

  const history = useHistory()

   return (
     <section className='section3'>
       <div className="container">
         <div className="section3-title-wrapper">
           <h2 className='section3-title'>Портфолио</h2>
         </div>
         <div className="section3-items-row">
           <div className="section3-item">
            <div className="section3-item-card section3-item-card__funiro">
                <div className="front">
                  <img src={cardOneImg} alt="Funiro" />
                  <div className="front-info">Funiro</div>
                </div>
                <div className="back">
                  <div className="back-content center">
                    <h2 className='back-content__title'>Funiro</h2>
                    <span className='back-content__discr'>Online furniture shop</span>
                    <Link className='back-content__btn' to='funiro'>Перейти на сайт</Link>
                  </div>
                </div>
            </div>
           </div>
           <div className="section3-item">
            <div className="section3-item-card section3-item-card__figma-land">
                <div className="front">
                  <img src={cardOneImg} alt="" />
                  <div className="front-info">Figma-land</div>
                </div>
                <div className="back">
                  <div className="back-content center">
                    <h2 className='back-content__title'>Figma Land</h2>
                    <span className='back-content__discr'>Some text...</span>
                    <Link className='back-content__btn' to='figma-land'>
                      <span>Перейти на сайт</span>
                    </Link>
                  </div>
                </div>
            </div>
           </div>
           <div className="section3-item">
            <div className="section3-item-card section3-item-card__it-studio">
                <div className="front">
                  <img src={cardOneImg} alt="" />
                  <div className="front-info">IT Studio</div>
                </div>
                <div className="back">
                  <div className="back-content center">
                    <h2 className='back-content__title'>IT-Studio</h2>
                    <span className='back-content__discr'>Some text...</span>
                    <Link className='back-content__btn' to='it-studio-page'>
                      <span>Перейти на сайт</span>
                    </Link>
                  </div>
                </div>
            </div>
           </div>
         </div>
       </div>
     </section>
   )
 }

 export default Section3;