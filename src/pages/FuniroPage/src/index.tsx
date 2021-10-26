import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './components/Header/Header';
import Section1 from './components/sections/Section1/Section1';
import Section2 from './components/sections/Section2/Section2';
import Section3 from './components/sections/Section3/Section3';
import Section5 from './components/sections/Section5/Section5';
import Footer from './components/Footer/Footer';
import Section6 from './components/sections/Section6/Section6';
import PageWrapper from '../../../components/PageWrapper';


const FuniroPage = () => {
  return (
    <PageWrapper>
      <div className="funiro-page">
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </PageWrapper>
  )
}

export default FuniroPage;