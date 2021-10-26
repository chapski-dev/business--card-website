import PageWrapper from "../../components/PageWrapper";
import Section1 from './Section1';
import Section2 from "./Section2";
import Section3 from "./Section3";


const HomePage = () => {
  return (
    <PageWrapper>
    <div className="home-page">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
    </PageWrapper>
  )
}

export default HomePage;