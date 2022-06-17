import { PageWrapper } from 'components/PageWrapper';
import { Hero } from 'views/Home/Hero';
import { About } from 'views/Home/About';
import { SkillsDescription } from 'views/Home/SkillsDescription';
import { Portfolio } from 'views/Home/Portfolio';
import Aos from 'aos';

export const HomePage = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  Aos.init({ duration: 800 });
  return (
    <PageWrapper>
      <div className="home-page">
        <Hero />
        <SkillsDescription />
        <Portfolio />
        <About />
      </div>
    </PageWrapper>
  );
};
