import './Section1.scss'


const Section1 = () => {
  return (
    <section className="section1">
      <div className="container">
        <div className="section1-item-main">
          <h2 className="section1-item-main__title">High-Quality Furniture Just For You</h2>
          <div className="section1-item-main__discr">Our furniture is made from selected and best quality materials that are suitable for your dream home</div>
          <button className="section1-item-main__btn fill-btn">Shop Now</button>
        </div>
        <div className="section1-item-second">
          <h4 className="section1-item-second__title">Bohauss</h4>
          <div className="section1-item-second__discr">Luxury big sofa 2-seat</div>
          <div className="section1-item-second__price">Rp 17.000.000</div>
        </div>
      </div>
    </section>
  )
}

export default Section1;