import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './SmoothUpCard.scss';

type SmoothUpCardType = {
  animationDuration?: number;
  description: string;
  title: string;
  image?: string;
  url?: string;
  price?: number;
};

const SmoothUpCard: FC<SmoothUpCardType> = ({
  title,
  image,
  url,
  animationDuration,
  description,
  price,
}) => (
  <div
    className="card"
    data-aos-duration={animationDuration}
    data-aos="fade-up"
  >
    <img src={image} alt="" className="card__img" />

    <div className="card__data">
      <h1 className="card__title">{title}</h1>
      <span className="card__price">{`$ ${price}`}</span>
      <p className="card__description">{description}</p>
      {url ? (
        <Link to={url} className="card__button">
          Visit Site
        </Link>
      ) : (
        <a href={url} className="card__button">
          Visit Site
        </a>
      )}
    </div>
  </div>
);

export default SmoothUpCard;
