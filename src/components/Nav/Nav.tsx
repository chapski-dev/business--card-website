import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import NavStyle from './Nav.module.scss';

export const Nav = () => (
  <nav className={NavStyle.nav}>
    <ul className={NavStyle.navList}>
      <li className={NavStyle.navItem}>
        <Link className={NavStyle.navLink} to="/">Home</Link>
      </li>
      <li className={NavStyle.navItem}>
        My Works
        <DownOutlined className={NavStyle.navLinkIcon} />
        <div className={NavStyle.dropdown}>
          <ul className={NavStyle.dropdownList}>
            <li className={NavStyle.dropdownItem}>
              <Link className={NavStyle.dropdownLink} to="/funiro">Funiro</Link>
            </li>
            <li className={NavStyle.dropdownItem}>
              <Link className={NavStyle.dropdownLink} to="/figma-land">Figma Land</Link>
            </li>
            <li className={NavStyle.dropdownItem}>
              <Link className={NavStyle.dropdownLink} to="/it-studio-page">IT-Studio</Link>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </nav>
);
