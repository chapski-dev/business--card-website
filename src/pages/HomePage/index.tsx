import PageWrapper from "../../components/PageWrapper/PageWrapper";
import Main from './Main';
import SkillsDescription from './SkillsDescription';
import SiteExamples from './SiteExamples';
import AboutMe from "./AboutMe";



const HomePage = () => {
  window.scrollTo({
    top:0,
    behavior: 'smooth',
  });
  return (
    <PageWrapper>
    <div className="home-page">
      <Main />
      <SkillsDescription />
      <SiteExamples />
      <AboutMe />
    </div>
    </PageWrapper>
  )
}

export default HomePage;