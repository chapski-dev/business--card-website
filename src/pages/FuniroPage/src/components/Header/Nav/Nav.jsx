import {useEffect, useState} from 'react'
import NavItem from './NavItem'
import './Nav.scss'

const Nav = () => {
    const [navItem, setNavItems] = useState([]);

    useEffect(() => {
        setNavItems([
            {title: 'Products', list: ['Product 1', 'Product 2', 'Product 3', 'Product 4']},
            {title: 'Rooms', list: ['Room 1', 'Room 2']},
            {title: 'Inspirations', list: []},
        ]);
    }, []);
    return (
      <div className="header__menu">
        <nav className="nav">
          <ul className="nav-items-list">
            {navItem.map((navItem) => (
              <NavItem
                navItem={navItem}
                title={navItem.title}
                list={navItem.list}
              />
            ))}
          </ul>
        </nav>
      </div>
    )
}

Nav.defaulProps = {
    data: []
}

export default Nav;