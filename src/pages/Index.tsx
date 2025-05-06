
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/ui/section-heading';
import { ServiceCard } from '@/components/ui/service-card';
import { FeatureHighlight } from '@/components/ui/feature-highlight';
import { 
  Shield, 
  Code, 
  Users, 
  Flag,
  BookOpen,
  ShieldCheck,
  Terminal,
  Server,
  ArrowRight,
  Eye,
  Zap,
  Search,
  Cloud
} from 'lucide-react';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 cyber-grid -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold hero-text-animation mb-6">
              Cybersecurity Reinvented: Tools. Training. Testing.
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Shyena Inc provides next-generation cybersecurity tools and services to empower individuals, organizations, and academic institutions against modern threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/platform">Try FlagForge</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Request VAPT</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Products Section */}
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
            />
            <ServiceCard 
              title="Secyourall" 
              description="SIEM solution for real-time threat monitoring and comprehensive security event management."
              icon={<Eye size={24} />}
            />
            <ServiceCard 
              title="Secyourflow" 
              description="SOAR platform for automated incident response and security orchestration workflows."
              icon={<Zap size={24} />}
            />
            <ServiceCard 
              title="Secyourscan" 
              description="Dark web monitoring tool to detect and mitigate data breaches and exposed credentials."
              icon={<Search size={24} />}
            />
            <ServiceCard 
              title="BhairavOS" 
              description="A secure custom-built operating system designed for enhanced privacy and protection."
              icon={<Shield size={24} />}
            />
            <ServiceCard 
              title="GitHub Projects" 
              description="Explore our collection of open-source cybersecurity tools and resources for security professionals."
              icon={<Code size={24} />}
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild>
              <Link to="/solutions">Explore All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            />
            <ServiceCard 
              title="Web & API Security" 
              description="In-depth security audits for web applications and APIs to protect against OWASP Top 10 vulnerabilities."
              icon={<Code size={24} />}
            />
            <ServiceCard 
              title="Mobile App Security" 
              description="Thorough security testing of mobile applications across platforms to ensure data protection."
              icon={<Terminal size={24} />}
            />
            <ServiceCard 
              title="Cloud Security" 
              description="Assessment and hardening of cloud infrastructure to maintain security in distributed environments."
              icon={<Cloud size={24} />}
            />
            <ServiceCard 
              title="Red Team Assessments" 
              description="Simulated cyber attacks to test your organization's detection and response capabilities."
              icon={<Users size={24} />}
            />
            <ServiceCard 
              title="SOC Setup & Consulting" 
              description="Expert guidance on establishing and optimizing Security Operations Centers for colleges and SMBs."
              icon={<Server size={24} />}
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FlagForge Platform Feature */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gradient-primary md:text-4xl">
                FlagForge: Hands-On Cybersecurity Training
              </h2>
              <p className="text-white/80">
                Build your cybersecurity skills through practical, immersive challenges in our state-of-the-art training platform. FlagForge offers real-world scenarios designed by security experts to prepare you for modern threats.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <Shield size={18} />
                  </div>
                  <span className="text-white/70">Interactive labs with guided learning paths</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <Shield size={18} />
                  </div>
                  <span className="text-white/70">Realistic attack scenarios and defensive techniques</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <Shield size={18} />
                  </div>
                  <span className="text-white/70">Progress tracking and certification preparation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <Shield size={18} />
                  </div>
                  <span className="text-white/70">Community challenges and competitive events</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button className="group" asChild>
                  <Link to="/platform">
                    Try FlagForge Free 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="aspect-video rounded-xl overflow-hidden cyber-border">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3" 
                  alt="FlagForge Platform" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <Terminal size={16} className="text-cyber-purple" />
                  <span className="text-sm font-medium text-white">Interactive Learning</span>
                </div>
                <p className="text-xs text-white/70">
                  Learn by doing with hands-on labs that simulate real-world cybersecurity scenarios and attacks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
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

      {/* Stats Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyber-purple">10K+</div>
              <p className="text-white/70">Active Platform Users</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyber-purple">500+</div>
              <p className="text-white/70">Security Assessments</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyber-purple">50+</div>
              <p className="text-white/70">Open Source Projects</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyber-purple">99%</div>
              <p className="text-white/70">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-4">
          <div className="glass-card max-w-4xl mx-auto rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold text-gradient-primary mb-6">
              Ready to Strengthen Your Security?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you need security tools, professional services, or training, Shyena Inc is your partner in building robust cyber defenses against modern threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
