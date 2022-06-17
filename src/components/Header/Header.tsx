import { Nav } from 'components/Nav';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import HeaderStyle from './Header.module.scss';

export const Header = memo(() => (
  <header className={HeaderStyle.header}>
    <Link className={HeaderStyle.logo} to="/">Chapski Dev</Link>
    <Nav />
  </header>
));
/* <Header style={{ zIndex: 9999 }}>
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
  </Header> */
// const menu = (
//   <Menu>
//     <Menu.Item key="0">
//       <Link className="menu-link" to="/funiro">Funiro</Link>
//     </Menu.Item>
//     <Menu.Item key="1">
//       <Link className="menu-link" to="/figma-land">Figma Land</Link>
//     </Menu.Item>
//     <Menu.Item>
//       <Link className="menu-link" to="/it-studio-page">It Studio</Link>
//     </Menu.Item>
//   </Menu>
// );
// const handleOnClick = (e:any) => {
// e.preventDefault();
// const target = e.target.getAttribute('href');
// const location = document.querySelector(target).offsetTop;

//   window.scrollTo({
//     left: 0,
//     top: location - 100,
//   });
// };
