import './Header.scss';
import Nav from './Nav';
import Search from "./Search";
import UserActions from './UserActions';
import Logo from './Logo/Logo';
import HeaderMain from './HeaderMain/index';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content-wrapper">
          <HeaderMain/>
            <Search />
          <UserActions />
        </div>
      </div>
    </header>
  );
}

export default Header;