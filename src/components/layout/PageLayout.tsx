
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
}

const PageLayout = ({ children, fullWidth = false, className = '' }: PageLayoutProps) => {
  return (
    <div className={`flex flex-col min-h-screen ${className}`}>
      <Navbar />
      <main className={`flex-grow pt-20 ${fullWidth ? '' : 'container mx-auto px-4'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
