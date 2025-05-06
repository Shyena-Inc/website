
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import ServicesSection from '@/components/home/ServicesSection';
import FlagForgeFeature from '@/components/home/FlagForgeFeature';
import CompanyFeatures from '@/components/home/CompanyFeatures';
import StatsSection from '@/components/home/StatsSection';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ProductsSection />
      <ServicesSection />
      <FlagForgeFeature />
      <CompanyFeatures />
      <StatsSection />
      <CallToAction />
    </PageLayout>
  );
};

export default Index;
