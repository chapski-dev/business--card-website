import './SkillsDescription.scss';

const SkillsDescription = () => (
  <section className="skillsDescription">
    <div className="container">
      <div className="skillsDescription-items-row">
        <div className="skillsDescription-item">
          <div className="skillsDescription-item-info">
            <h3 className="skillsDescription-item-info__title">Basic</h3>
            <span className="skillsDescription-item-info__suptitle">Layout</span>
            <span className="skillsDescription-item-info__text">Адаптивность и кроссбраузерность. По готовым или индивидуальным решениям.</span>
          </div>
        </div>
        <div className="skillsDescription-item">
          <div className="skillsDescription-item-info">
            <h3 className="skillsDescription-item-info__title">SIGNATURE</h3>
            <span className="skillsDescription-item-info__suptitle">WordPress & Tilda</span>
            <span className="skillsDescription-item-info__text">Пересадка сайта на WP и Tilda.</span>
          </div>
        </div>
        <div className="skillsDescription-item">
          <div className="skillsDescription-item-info">
            <h3 className="skillsDescription-item-info__title">ULTIMATE</h3>
            <span className="skillsDescription-item-info__suptitle">React</span>
            <span className="skillsDescription-item-info__text">Разработка React приложений и сайтов.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsDescription;
