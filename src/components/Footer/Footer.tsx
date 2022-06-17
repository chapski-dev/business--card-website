import { PhoneOutlined, GithubOutlined } from '@ant-design/icons';
import { Container } from 'components/Container';
import footerBg from 'assets/img/Home/fr-bg.png';
import FooterStyle from './Footer.module.scss';

export const Footer = () => (
  <footer className={FooterStyle.footer}>
    <Container>
      <div data-aos="fade-right" className="page-wrapper__footer-contacts">
        <div className="page-wrapper__footer-contacts-title">
          CONTACT INFORMATION
        </div>
        <a
          href="tel:+375291689232"
          target="_blank"
          className="page-wrapper__footer-contacts-phone"
          rel="noreferrer"
        >
          <PhoneOutlined />
          Mobile: +375(29)168-92-53
        </a>
        <a
          href="https://github.com/chapski-dev"
          target="_blank"
          className="page-wrapper__footer-contacts-git"
          rel="noreferrer"
        >
          <GithubOutlined />
          GitHub
        </a>
        <a href="https://t.me/chapski_a" target="_blank" rel="noreferrer">
          Telegram
        </a>
        <a
          href="http://instagram.com/chapski.a"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <a
          href="/#"
          type="email"
          className="page-wrapper__footer-contacts-mail"
        >
          alexey.chapski@gmail.com
        </a>
      </div>
    </Container>
    <img src={footerBg} alt="footerBg" className={FooterStyle.footerBg} />
  </footer>
);
