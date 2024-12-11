import React, { ReactNode } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;