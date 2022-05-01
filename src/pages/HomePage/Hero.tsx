import Typewriter from 'typewriter-effect';
// import { useCallback } from 'react';
import { AnimateGrid } from 'components/AninateGrid';
import { Container } from 'components/Container';
import HeroStyle from './Hero.module.scss';

const Hero = () => {
  const handleOnClick = (e: any) => {
    e.preventDefault();
    // const target = e.target.getAttribute('href');
    console.log(e);
    // const location = document.querySelector(target).offsetTop;

    // window.scrollTo({
    //   left: 0,
    //   top: location - 300,
    // });
  };
  return (
    <section className={HeroStyle.hero}>
      <AnimateGrid />
      <Container>
        <div className={HeroStyle.infoWrapper}>
          <div className={HeroStyle.titleWrapper}>
            <h1 className={HeroStyle.title}>
              INSPIRED DESIGN. EXEMPLARY SERVICE.
            </h1>
            <div className={HeroStyle.suptitleWrpaper}>
              Coding is
              <div className={HeroStyle.typedText}>
                <Typewriter
                  options={{
                    strings: ['realy cool!', 'awsome!'],
                    delay: 150,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
          </div>
          <a
            href="#siteExamples"
            onClick={() => handleOnClick}
            className={HeroStyle.btn}
          >
            <div className={HeroStyle.contentWrapper}>
              <div>
                <strong>More Details</strong>
              </div>
            </div>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
