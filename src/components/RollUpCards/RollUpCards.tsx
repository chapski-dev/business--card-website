import { Link } from "react-router-dom";
import { FC } from "react";
import './RollUpCards.scss'

type RollUpCardsType = {
  title: string;
  text: string;
  image?: string;
  url?: string;
};

export const RollUpCards: FC<RollUpCardsType> = ({ title, text, image, url }) => {
  return (
    <div className="item">
      <div data-aos="fade-right" className="item__description">
        <h3 className="item__description-title">{title}</h3>
        <p className="item__description-text">{text}</p>
      </div>
      <div data-aos="fade-left" className="item-card-wrapper">
        <div
          className={`item-card item-card__${title.toLowerCase().replace(/ /g, '-')}`}
        >
          <div className="front">
            <img src={image} alt="img" />
            <div className="front-info">{title}</div>
          </div>
          <div className="back">
            <div className="back-content center">
              <h2 className="back-content__title">{title}</h2>
              <Link className="back-content__btn" to={url || "/"}>
                <span>
                  Перейти на сайт
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

