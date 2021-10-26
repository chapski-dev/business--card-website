import { useEffect, useState } from "react";
import './Footer.scss'
import FooterInfo from './FooterInfo/FooterInfo';
import FooterList from './FooterList/FooterList';

const Footer = () => {

  const [footerMenu, setFooterMenu] = useState([]);
  const [footerAccount, setFooterAccount] = useState([]);
  const [footerConnect, setFooterConnect] = useState([]);



  useEffect(() => {
    setFooterMenu([
      'Menu',
      'Products',
      'Rooms',
      'Inspirations',
      'About Us',
      'Terms & Policy',
    ])
    setFooterAccount([
      'My Account',
      'Checkout',
      'My Cart',
      'My catalog',
    ])
    setFooterConnect([
      'Facebook',
      'Instagram',
      'Twitter',
    ])
  }, []);
  return (
  <footer className="footer">
    <div className="container">
      <div className="footer-content-wrapper">
      <FooterInfo
        title={'Funiro.'}
        location={'Sawojajar Malang, Indonesia'}
        phone={'+6289 456 3455'}
        website={'www.funiro.com'}
      />
      <FooterList 
        title='Menu'
        list={footerMenu}
      />
      <FooterList 
        title='Account'
        list={footerAccount}
      />
      <FooterList 
        title='Stay Connected'
        list={footerConnect}
      />
      {/* <FooterItem /> */}
      </div>
    </div>
  </footer>
  )
}


export default Footer;