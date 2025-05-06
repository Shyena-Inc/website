
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
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,38,53,0.2),rgba(30,38,53,0.2))],radial-gradient(at_30%_20%,rgba(139,92,246,0.15)_0px,transparent_50%),radial-gradient(at_80%_80%,rgba(30,174,219,0.15)_0px,transparent_50%)" />
        <div className="cyber-grid absolute inset-0 opacity-20" />
      </div>
      <Navbar />
      <main className={`flex-grow pt-20 ${fullWidth ? '' : 'container mx-auto px-4'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
