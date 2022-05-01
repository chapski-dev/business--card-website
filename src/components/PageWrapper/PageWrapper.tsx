import { Layout } from 'antd';
import './PageWrapper.scss';
import { FC, memo, ReactNode } from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

const { Content } = Layout;

type PageWrapperType = {
  children: ReactNode
}

export const PageWrapper:FC<PageWrapperType> = memo(({ children }) => (
  <div className="page-wrapper layout">
    <Header />
    <Content style={{ padding: '0 50px' }}>
      {children}
    </Content>
    <Footer />
  </div>
));
