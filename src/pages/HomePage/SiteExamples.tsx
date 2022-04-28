import './SiteExamples.scss';
import Aos from 'aos';
import { useEffect, useState } from 'react';
import cardOneImg from './img/SiteExamples/Funiro.png';
import cardTwoImg from './img/SiteExamples/Figma-Land.png';
import cardThreeImg from './img/SiteExamples/IT-Studio.png';
import { RollUpCards } from '../../components/RollUpCards';
import { BigTitle } from '../../components/BigTitle';

type SitesType = {
  title: string;
  text: string;
  image?: string;
  url: string;
};

const SiteExamples = () => {
  const [sites, setSites] = useState<SitesType[]>([]);
  useEffect(() => {
    setSites([
      {
        title: 'Funiro',
        text: 'Internet Shop where you can add some products in cart',
        image: cardOneImg,
        url: 'funiro',
      },
      {
        title: 'Figma Land',
        text: 'Internet Shop where you can add some products in cart',
        image: cardTwoImg,
        url: 'figma-land',
      },
      {
        title: 'IT Studio',
        text: 'Internet Shop where you can add some products in cart',
        image: cardThreeImg,
        url: 'it-studio-page',
      },
    ]);
    Aos.init({ duration: 800 });
  }, []);
  return (
    <section className="siteExamples" id="siteExamples">
      <div className="container">
        <BigTitle title="Portfolio" />
        <div className="siteExamples-items-row">
          {sites.map((item) => (
            <RollUpCards
              title={item.title}
              text={item.text}
              image={item.image}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteExamples;
