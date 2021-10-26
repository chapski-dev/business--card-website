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
           <div className="section3-item-card">
              <div className="front">
                <img src={cardOneImg} alt="" />
                <div className="front-info">Funiro</div>
              </div>
              <div className="back">
                <div className="back-content center">
                  <h2>Text</h2>
                  <span>text</span>
                  <Link to='funiro'>Перейти на сайт</Link>
                </div>
              </div>
           </div>
           <div className="section3-item-card">
              <div className="front">
                <img src={cardOneImg} alt="" />
                <div className="front-info">Figma-land</div>
              </div>
              <div className="back">
                <div className="back-content center">
                  <h2>Text</h2>
                  <span>text</span>
                  <Link to='figma-land'>Перейти на сайт</Link>
                 </div>
              </div>
           </div><div className="section3-item-card">
              <div className="front">
                <img src={cardOneImg} alt="" />
                <div className="front-info">IT Studio</div>
              </div>
              <div className="back">
                <div className="back-content center">
                  <h2>Text</h2>
                  <span>text</span>
                  <button>
                    <Link to='it-studio-page'>Перейти на сайт</Link>
                  </button>
                </div>
              </div>
           </div>
         </div>
       </div>
     </section>
   )
 }

 export default Section3;