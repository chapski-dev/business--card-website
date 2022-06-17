import { Container } from 'components/Container';
import SkillsDescriptionStyle from './SkillsDescription.module.scss';

const infoCards = [
  {
    title: 'BASIC',
    suptitle: 'Responsive design',
    // text: 'Адаптивность и кроссбраузерность. По готовым или индивидуальным решениям.',
    text: 'Lorem ipsum dolor sit, consectetur adipiscing elit. Donec sapien.',
  },
  {
    title: 'SIGNATURE',
    suptitle: ' WordPress & Tilda',
    text: 'Lorem ipsum dolor sit, consectetur adipiscing elit. Donec sapien.',

  },
  {
    title: 'ULTIMATE',
    suptitle: 'React & Redux',
    // text: 'Разработка React приложений и сайтов.',
    text: 'Lorem ipsum dolor sit, consectetur adipiscing elit. Donec sapien.',

  },
];

export const SkillsDescription = () => (
  <section className={SkillsDescriptionStyle.skillsDescription}>
    <Container>
      <div className={SkillsDescriptionStyle.itemsRow}>
        {infoCards.map((item, index) => (
          <div className={SkillsDescriptionStyle.item} data-aos="fade-up" data-aos-duration={(index + 0.5) * 1000}>
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
