import { Layout, Menu, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import {
  CheckSquareOutlined, PhoneOutlined, GithubOutlined, DownOutlined,
} from '@ant-design/icons';
import './PageWrapper.scss';

const { Header, Content, Footer } = Layout;

export function PageWrapper({ children }:any) {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link className="menu-link" to="/funiro">Funiro</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Link className="menu-link" to="/figma-land">Figma Land</Link>
      </Menu.Item>
      <Menu.Item>
        <Link className="menu-link" to="/it-studio-page">It Studio</Link>
      </Menu.Item>
    </Menu>
  );
  const handleOnClick = (e:any) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 100,
    });
  };
  return (
    <div className="page-wrapper layout">
      <Header style={{ zIndex: 9999 }}>
        <Link to="/" className="logo">Chapski Dev</Link>
        <Menu mode="horizontal">
          <Menu.Item className="menu-item" key="home" icon={<CheckSquareOutlined />}>
            <Link className="menu-link" to="/">Home Page</Link>
          </Menu.Item>
          <Menu.Item className="menu-item" key="about-me" icon={<CheckSquareOutlined />}>
            <a className="menu-link" href="#about-me" onClick={handleOnClick}>About Me</a>
          </Menu.Item>
          <Dropdown overlay={menu}>
            <a href="/#" role="button" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              My Works
              {' '}
              <DownOutlined />
            </a>
          </Dropdown>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        {children}
      </Content>
      <Footer>
        <div data-aos="fade-right" className="page-wrapper__footer-contacts">
          <div className="page-wrapper__footer-contacts-title">CONTACT INFORMATION</div>
          <a href="tel:+375291689232" target="_blank" className="page-wrapper__footer-contacts-phone" rel="noreferrer">
            <PhoneOutlined />
            Mobile: +375(29)168-92-53
          </a>
          <a href="https://github.com/chapski-dev" target="_blank" className="page-wrapper__footer-contacts-git" rel="noreferrer">
            <GithubOutlined />
            GitHub
          </a>
          <a href="https://t.me/chapski_a" target="_blank" rel="noreferrer">Telegram</a>
          <a href="http://instagram.com/chapski.a" target="_blank" rel="noreferrer">Instagram</a>
          <a href="/#" className="page-wrapper__footer-contacts-mail">alexey.chapski@gmail.com</a>
        </div>
      </Footer>
    </div>
  );
}
