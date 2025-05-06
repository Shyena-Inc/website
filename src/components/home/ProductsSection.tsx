
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/section-heading';
import { ServiceCard } from '@/components/ui/service-card';
import { Button } from '@/components/ui/button';
import { Flag, Eye, Zap, Search, Shield, Code, ArrowRight } from 'lucide-react';

const ProductsSection = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Cybersecurity Products" 
          subtitle="Open-source and commercial tools to protect your digital assets"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <ServiceCard 
            title="FlagForge" 
            description="CTF platform with interactive labs and training exercises for practical cybersecurity skill development."
            icon={<Flag size={24} />}
            link="/platform"
          />
          <ServiceCard 
            title="Secyourall" 
            description="SIEM solution for real-time threat monitoring and comprehensive security event management."
            icon={<Eye size={24} />}
            link="/solutions#siem"
          />
          <ServiceCard 
            title="Secyourflow" 
            description="SOAR platform for automated incident response and security orchestration workflows."
            icon={<Zap size={24} />}
            link="/solutions#soar"
          />
          <ServiceCard 
            title="Secyourscan" 
            description="Dark web monitoring tool to detect and mitigate data breaches and exposed credentials."
            icon={<Search size={24} />}
            link="/solutions#darkweb"
          />
          <ServiceCard 
            title="BhairavOS" 
            description="A secure custom-built operating system designed for enhanced privacy and protection."
            icon={<Shield size={24} />}
            link="/solutions#os"
          />
          <ServiceCard 
            title="GitHub Projects" 
            description="Explore our collection of open-source cybersecurity tools and resources for security professionals."
            icon={<Code size={24} />}
            link="https://github.com/shyenainc"
          />
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild className="group">
            <Link to="/solutions">
              Explore All Solutions
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
