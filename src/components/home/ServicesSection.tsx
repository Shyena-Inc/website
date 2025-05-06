
import { Link } from 'react-router-dom';
import { SectionHeading } from '@/components/ui/section-heading';
import { ServiceCard } from '@/components/ui/service-card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Code, Terminal, Cloud, Users, Server, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Professional Security Services" 
          subtitle="Expert cybersecurity services tailored to your organization's needs"
          center
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <ServiceCard 
            title="VAPT" 
            description="Comprehensive vulnerability assessment and penetration testing to identify and remediate security weaknesses."
            icon={<ShieldCheck size={24} />}
            link="/services#vapt"
          />
          <ServiceCard 
            title="Web & API Security" 
            description="In-depth security audits for web applications and APIs to protect against OWASP Top 10 vulnerabilities."
            icon={<Code size={24} />}
            link="/services#web-api"
          />
          <ServiceCard 
            title="Mobile App Security" 
            description="Thorough security testing of mobile applications across platforms to ensure data protection."
            icon={<Terminal size={24} />}
            link="/services#mobile"
          />
          <ServiceCard 
            title="Cloud Security" 
            description="Assessment and hardening of cloud infrastructure to maintain security in distributed environments."
            icon={<Cloud size={24} />}
            link="/services#cloud"
          />
          <ServiceCard 
            title="Red Team Assessments" 
            description="Simulated cyber attacks to test your organization's detection and response capabilities."
            icon={<Users size={24} />}
            link="/services#red-team"
          />
          <ServiceCard 
            title="SOC Setup & Consulting" 
            description="Expert guidance on establishing and optimizing Security Operations Centers for colleges and SMBs."
            icon={<Server size={24} />}
            link="/services#soc"
          />
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild className="group">
            <Link to="/services">
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
