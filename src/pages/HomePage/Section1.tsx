import './Section1.scss'
import mainPage from '../HomePage/img/section1/bg-notebook.jpeg'
import Typewriter from 'typewriter-effect';
// import TypeWriterEffect from 'react-typewriter-effect';

// const TypeWriterEffect = require('react-typewriter-effect');
// import Typical from 'react-typical'


const Section1 = () => {
  // const typeWriter = ["apples", "pears", "bananas"];
  const typewriterText = ['realy cool!', 'awsam!']
  return (
    <section className='section1'>
      <img src={mainPage} alt="" className='section1__bg-image'/>
      <div className="container">
        <div className="section1-title-wrapper">
          <h1 className="section1-title">INSPIRED DESIGN. UNPARALLELED EXPERIENCE. EXEMPLARY SERVICE.</h1>
          <div className='section1-suptitle-wrpaper'>
            Coding is 
            <p className="typed-text">
              <Typewriter 
                options={{
                  strings: ['realy cool!', 'awsome!'],
                  delay: 150,
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1;