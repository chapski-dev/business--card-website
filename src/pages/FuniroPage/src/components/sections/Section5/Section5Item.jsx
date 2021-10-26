import './Section5Item.scss'


const Section5Item = (props) => {
  return (
    <div className="section5-item">
      <div className="section5-item__img-wrapper">
        <img src={`/FuniroPage/img/section5${props.img}`} alt="" />
      </div>
      <div className="section5-item__info-wrapper">
        <div className="section5-item__discr">{props.title}</div>
        <div className="section5-item__date">{props.date}</div>
      </div>
    </div>
  )
}

export default Section5Item;