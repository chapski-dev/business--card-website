import './Section2.scss'


const Section2 = () => {
  return (
    <section className='section2'>
      <div className="container">
        <div className="section2-items-row">
          <div className="section2-item">
            <div className="section2-item-info">
              <h3 className="section2-item-info__title">Basic</h3>
              <span className='section2-item-info__suptitle'>Layout</span>
              <span className="section2-item-info__text">Адаптивность и кроссбраузерность. По готовым или индивидуальным решениям.</span>
            </div>
          </div>
          <div className="section2-item">
            <div className="section2-item-info">
              <h3 className="section2-item-info__title">SIGNATURE</h3>
              <span className='section2-item-info__suptitle'>WordPress & Tilda</span>
              <span className="section2-item-info__text">Пересадка сайта на WP и Tilda.</span>
            </div>
          </div>
          <div className="section2-item">
            <div className="section2-item-info">
              <h3 className="section2-item-info__title">ULTIMATE</h3>
              <span className='section2-item-info__suptitle'>React</span>
              <span className="section2-item-info__text">Разработка React приложений и сайтов.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2;