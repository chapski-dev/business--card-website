import BigTitle from "../../components/BigTitle/BigTitle";
import AboutMeStyle from "./AboutMe.module.scss";
import ProfileImg from "./img/ProfileImg.jpg";

const AboutMe = () => {
  return (
    <section className={AboutMeStyle.aboutMeSection} id="about-me">
      <div className="container">
        <BigTitle
        title="About Me"
        />
        <div className={AboutMeStyle.infoWrapper}>
          <div className={AboutMeStyle.imgWrapper}>
            <img src={ProfileImg} alt="" />
          </div>
          <div className={AboutMeStyle.description}>
            <p>
              Меня зовут Лиза, и я занимаюсь дизайном уже несколько лет, до
              этого 5 лет работала SMM-специалистом.
            </p>
            <p>
              Мне нравится все: оформлять Instagram для бизнесов, создавать
              функциональные веб-сайты и приложения, рисовать оригинальные
              иллюстрации и многое другое.
            </p>
            <p>
              Уверена, мы сможем создать с вами что-то особенное! Просто
              напишите мне, и мы детально все обсудим.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
