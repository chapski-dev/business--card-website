import './FooterList.scss'


const FooterList = (props) => {


  if (props.list.length) {
    return (
      <div className="footer-item-list">
         <div className="footer-item-list__title">
           {props.title}
         </div>
         <ul>
           {props.list.map((itemList) => (
            <li>
              <a href="#">{itemList}</a>
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    return null
  }
}

export default FooterList;