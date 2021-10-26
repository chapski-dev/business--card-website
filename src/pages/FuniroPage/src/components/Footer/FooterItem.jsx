import FooterInfo from './FooterInfo';
import FooterList from './FooterList';
import './FooterItem.scss'


const FooterItem = (props) => {
  if ( <FooterList />) {
    return (
      props.list.map(() => (
      <div className="footer-item">
        <FooterList />
      </div>
      ))
    )
  } else if ( <FooterInfo /> ) {
    return (
      props.list.map(() => (
      <div className="footer-item">
        <FooterInfo />
      </div>
      ))
    )
  }
}

export default FooterItem;



