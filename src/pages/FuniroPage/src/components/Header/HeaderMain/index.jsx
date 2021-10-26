import Logo from "../Logo/Logo"
import Nav from "../Nav"
import './style.scss'

const HeaderMain = () => {
  return (
    <div className="header__main">
      <Logo/>
      <Nav/>
    </div>
  )
}

export default HeaderMain;