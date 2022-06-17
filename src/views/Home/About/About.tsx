import { BigTitle } from 'components/BigTitle';
import { Container } from 'components/Container';
import ProfileImg from 'assets/img/Home/About/ProfileImg.jpg';
import AboutMeStyle from './About.module.scss';

export const About = () => (
  <section className={AboutMeStyle.aboutMe} id={AboutMeStyle.aboutMe}>
    <Container>
      <BigTitle
        title="About Me"
        suptitle="Let's get to know each other and get to know each other better!"
      />
      <div className={AboutMeStyle.infoWrapper}>
        <div data-aos="fade-up" className={AboutMeStyle.imgWrapper}>
          <img src={ProfileImg} alt="" />
        </div>
        <div className={AboutMeStyle.description} data-aos="fade-up">
          <p>
            Меня зовут Лёша, и я занимаюсь разработкой уже несколько лет, до
            этого 5 лет работала SMM-специалистом.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, molestiae tempora sapiente perferendis autem aliquid tenetur doloremque in suscipit, minima minus ea sunt numquam quidem libero quaerat eligendi dolorum? Dolor!
          </p>
          <p>
            Уверен, мы сможем создать с вами что-то особенное! Просто
            напишите мне, и мы детально все обсудим.
          </p>
        </div>
      </div>
    </Container>
  </section>
);
