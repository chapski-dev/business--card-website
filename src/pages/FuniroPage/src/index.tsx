import "./index.scss";
import Header from "./components/Header/Header";
import Section1 from "./components/sections/Section1/Section1";
import Section2 from "./components/sections/Section2/Section2";
import Section3 from "./components/sections/Section3/Section3";
import Section5 from "./components/sections/Section5/Section5";
import Footer from "./components/Footer/Footer";
import Section6 from "./components/sections/Section6/Section6";

const FuniroPage = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <div className="funiro-page">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
};

export default FuniroPage;
