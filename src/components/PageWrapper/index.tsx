
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { CameraOutlined, CheckSquareOutlined, FormOutlined, UserOutlined, PhoneOutlined, GithubOutlined } from '@ant-design/icons';
import './index.scss'

const { Header, Content, Footer } = Layout;


const PageWrapper = (props:any) => {
  return (
  <div className="page-wrapper layout">
    <Header>
      <div className="logo">Chapski Dev </div>
      <Menu  mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item className='menu-item' key="home" icon={<CheckSquareOutlined />}>
          <Link className='menu-link' to='/home'>Home Page</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="funiro" icon={<UserOutlined />}>
          <Link className='menu-link' to='/funiro' >Funiro</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="figma-land" icon={<CameraOutlined />}>
          <Link className='menu-link' to='/figma-land'>Figma Land</Link>
        </Menu.Item>
        <Menu.Item className='menu-item' key="it-studio-page" icon={<FormOutlined />}>
          <Link className='menu-link' to='/it-studio-page'>It Studio</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      {props.children}
    </Content>
    <Footer >
      <div className="page-wrapper__footer-contacts">
        <div className="page-wrapper__footer-contacts-title">CONTACT INFORMATION</div>
        <a href="tel:+375291689232" target="_blank" className="page-wrapper__footer-contacts-phone"><PhoneOutlined />Mobile: +375(29)168-92-53</a>
        <a href="https://github.com/chapski-dev" target="_blank" className="page-wrapper__footer-contacts-git"><GithubOutlined />GitHub</a>
        <a href="https://t.me/chapski_a" target="_blank">Telegram</a>
        <a href="http://instagram.com/chapski.a" target="_blank">Instagram</a>
        <a href="#" className="page-wrapper__footer-contacts-mail">alexey.chapski@gmail.com</a>
      </div>
    </Footer>
  </div>
  )
}

export default PageWrapper;