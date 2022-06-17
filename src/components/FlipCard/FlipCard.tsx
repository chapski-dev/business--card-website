import { Link } from 'react-router-dom';
import { FC } from 'react';
import flipCardStyle from './FlipCard.module.scss';

type FlipCardType = {
  title: string;
  image?: string;
  url?: string;
  animationDuration?: number;
};

export const FlipCard: FC<FlipCardType> = ({
  title, image, url, animationDuration,
}) => (
  <div
    className={flipCardStyle.card}
    data-aos-duration={animationDuration}
    data-aos="fade-up"
  >
    <div className={flipCardStyle.cardWrapper}>
      <div
        className={`${flipCardStyle.cardInfo} ${flipCardStyle.cardInfo} __${title
          .toLowerCase()
          .replace(/ /g, '-')}`}
      >
        <div className={flipCardStyle.front}>
          <img src={image} alt="img" />
          <div className={flipCardStyle.frontInfo}>{title}</div>
        </div>
        <div className={flipCardStyle.back}>
          <div
            className={`${flipCardStyle.backContent} ${flipCardStyle.center}`}
          >
            {/* <h2 className={flipCardStyle.backContent__title}>{title}</h2> */}
            {/* <a className={flipCardStyle.backContent__btn} href={url || '/'}>
              <span>Перейти на сайт</span>
            </a> */}
            <Link className={flipCardStyle.backContent__btn} to={url || '/'}>
              <span>Перейти на сайт</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
