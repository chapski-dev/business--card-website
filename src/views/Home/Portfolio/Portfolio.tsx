import { useEffect, useState } from 'react';
import { BigTitle } from 'components/BigTitle';
import { Container } from 'components/Container';
import cardOneImg from 'assets/img/Home/Portfolio/Funiro.png';
// import cardOneImg from 'assets/img/Home/Portfolio/FuniroFull.png';
import cardTwoImg from 'assets/img/Home/Portfolio/FigmaLand.png';
// import cardTwoImg from 'assets/img/Home/Portfolio/FigmaLandFull.png';
import cardThreeImg from 'assets/img/Home/Portfolio/IT-Studio.png';
import cardForeImg from 'assets/img/Home/Portfolio/NewGeneration.png';
import { FUNIRO_URL } from 'variables/urls';
import elipsis from 'assets/img/Home/elipsis.png';
import SmoothUpCard from 'components/SmoothUpCard/SmoothUpCard';
import PortfolioStyle from './Portfolio.module.scss';

type SitesType = {
  title: string;
  description: string;
  image?: string;
  url: string;
  price: number;
};

export const Portfolio = () => {
  const [sites, setSites] = useState<SitesType[]>([]);
  useEffect(() => {
    setSites([
      {
        title: 'Funiro',
        description: 'Internet Shop where you can add some products in cart',
        image: cardOneImg,
        url: FUNIRO_URL,
        price: 99,

      },
      {
        title: 'Figma Land',
        description: 'Internet Shop where you can add some products in cart',
        image: cardTwoImg,
        url: 'figma-land',
        price: 99,

      },
      {
        title: 'IT Studio',
        description: 'Internet Shop where you can add some products in cart',
        image: cardThreeImg,
        url: 'it-studio-page',
        price: 99,

      },
      {
        title: 'Новое Поколение',
        description: 'Internet Shop where you can add some products in cart',
        image: cardForeImg,
        url: 'https://new-generation.webclick.by/',
        price: 400,
      },
    ]);
  }, []);
  return (
    <section className={PortfolioStyle.portfolio} id={PortfolioStyle.portfolio}>
      <img src={elipsis} className={PortfolioStyle.elipsis} alt="fireSpot" />
      <Container>
        <BigTitle
          title="Portfolio"
          suptitle="Best practice what you can see here."
        />
        <div className={PortfolioStyle.itemsRow}>
          {sites.map((item, index) => (
            <SmoothUpCard
              animationDuration={index * 1000}
              title={item.title}
              description={item.description}
              image={item.image}
              url={item.url}
              price={item.price}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
