import BigTitleStyled from './BigTitle.module.scss';
  
type BigTitleType = {
  title: string;
}

const BigTitle = ({title}:BigTitleType) => (
  <div data-aos="fade-up" className={BigTitleStyled.titleWrapper}>
    <h2 className={BigTitleStyled.title}>{title}</h2>
  </div>
);

export default BigTitle;