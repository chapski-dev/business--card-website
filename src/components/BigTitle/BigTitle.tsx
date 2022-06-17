import { FC } from 'react';
import BigTitleStyled from './BigTitle.module.scss';

type BigTitleType = {
  title: string;
  suptitle?: string;
}

export const BigTitle:FC<BigTitleType> = ({ title, suptitle }) => (
  <div data-aos="fade-up" className={BigTitleStyled.titleWrapper}>
    <h5 className={BigTitleStyled.suptitle}>{suptitle}</h5>
    <h2 className={BigTitleStyled.title}>{title}</h2>
  </div>
);
