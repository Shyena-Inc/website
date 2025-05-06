
import { SectionHeading } from '@/components/ui/section-heading';
import { FeatureHighlight } from '@/components/ui/feature-highlight';
import { Code, Users, BookOpen } from 'lucide-react';

const CompanyFeatures = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Why Choose Shyena Inc" 
          subtitle="Next-generation security solutions backed by expertise and innovation"
          center
        />
        
        <div className="mt-16 space-y-24">
          <FeatureHighlight
            title="Open Source & Commercial Solutions"
            description="We believe in both accessible security tools for all and premium solutions for enterprises with advanced needs. Our dual approach ensures everyone can improve their security posture."
            icon={<Code size={24} />}
            imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3"
          />
          
          <FeatureHighlight
            title="Expert-Led Security Services"
            description="Our team of certified security professionals brings years of industry experience to every assessment, audit, and consultation, ensuring you receive actionable insights and robust protection."
            icon={<Users size={24} />}
            imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3"
            reversed
          />
          
          <FeatureHighlight
            title="Education & Empowerment"
            description="We don't just provide security solutions—we empower your team with the knowledge and tools to maintain a strong security posture long after our engagement ends."
            icon={<BookOpen size={24} />}
            imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyFeatures;
