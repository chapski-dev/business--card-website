import { motion } from "framer-motion";
import "./Main.scss";
import mainPage from "../HomePage/img/Main/bg-notebook.jpeg";
import Typewriter from "typewriter-effect";
import { useCallback } from "react";

const Main = () => {
  const handleOnClick = useCallback((e: any) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 300,
    });
  }, []);
  return (
    <section className="main">
      <img src={mainPage} alt="" className="main__bg-image" />
      <div className="container">
        <motion.div
          initial={{
            opacity: 0,
            left: -1000,
          }}
          animate={{
            opacity: 1,
            left: 0,
          }}
          className="main-title-wrapper"
        >
          <h1 className="main-title">
            INSPIRED DESIGN. UNPARALLELED EXPERIENCE. EXEMPLARY SERVICE.
          </h1>
          <div className="main-suptitle-wrpaper">
            Coding is
            <p className="typed-text">
              <Typewriter
                options={{
                  strings: ["realy cool!", "awsome!"],
                  delay: 150,
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </div>
        </motion.div>
        <motion.a
          href="#siteExamples"
          className="more-details"
          onClick={handleOnClick}
          initial={{
            opacity: 0,
            right: -800,
          }}
          animate={{
            opacity: 1,
            right: 200,
          }}
        >
          More Details
        </motion.a>
      </div>
    </section>
  );
};

export default Main;
