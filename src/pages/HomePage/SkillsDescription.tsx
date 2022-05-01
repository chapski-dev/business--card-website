import { Container } from 'components/Container';
import SkillsDescriptionStyle from './SkillsDescription.module.scss';

const infoCards = [
  {
    title: 'Basic',
    suptitle: ' Layout',
    text: 'Адаптивность и кроссбраузерность. По готовым или индивидуальным решениям.',
  },
  {
    title: 'SIGNATURE',
    suptitle: ' WordPress & Tilda',
    text: 'Пересадка сайта на WP и Tilda.',
  },
  {
    title: 'ULTIMATE',
    suptitle: 'React',
    text: 'Разработка React приложений и сайтов.',
  },
];

const SkillsDescription = () => (
  <section className={SkillsDescriptionStyle.skillsDescription}>
    <Container>
      <div className={SkillsDescriptionStyle.itemsRow}>
        {infoCards.map((item) => (
          <div className={SkillsDescriptionStyle.item}>
            <div className={SkillsDescriptionStyle.itemInfo}>
              <h3 className={SkillsDescriptionStyle.itemInfo__title}>{item.title}</h3>
              <span className={SkillsDescriptionStyle.itemInfo__suptitle}>{item.suptitle}</span>
              <span className={SkillsDescriptionStyle.itemInfo__text}>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default SkillsDescription;
