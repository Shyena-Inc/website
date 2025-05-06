
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
  ArrowRight
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
              Empowering the Future of Cybersecurity
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Shyena Security provides cutting-edge cybersecurity solutions, training, and advanced CTF challenges to secure and strengthen your digital infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/platform">Explore Challenges</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Us</Link>
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

      {/* Services Overview */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Specialized Services" 
            subtitle="Comprehensive cybersecurity solutions designed to protect your digital assets"
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ServiceCard 
              title="CTF Platform (FlagForge)" 
              description="A cutting-edge Capture The Flag platform with realistic challenges, scoreboards, and hands-on learning environments."
              icon={<Flag size={24} />}
            />
            <ServiceCard 
              title="Cybersecurity Training" 
              description="Comprehensive training programs for security professionals, covering the latest threats, tools, and defense strategies."
              icon={<BookOpen size={24} />}
            />
            <ServiceCard 
              title="Red & Blue Team Labs" 
              description="Realistic simulation environments for offensive and defensive security teams to practice and improve their skills."
              icon={<Users size={24} />}
            />
            <ServiceCard 
              title="SOC Setup Consultation" 
              description="Expert guidance on establishing an effective Security Operations Center tailored to your organization's needs."
              icon={<ShieldCheck size={24} />}
            />
            <ServiceCard 
              title="Security Audits & Pentesting" 
              description="Thorough assessment of your organization's security posture through methodical penetration testing."
              icon={<Code size={24} />}
            />
            <ServiceCard 
              title="Custom Security Solutions" 
              description="Tailored security solutions designed specifically for your organization's unique requirements and challenges."
              icon={<Shield size={24} />}
            />
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild>
              <Link to="/services">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gradient-primary md:text-4xl">
                FlagForge: Our Advanced CTF Platform
              </h2>
              <p className="text-white/80">
                Learn cybersecurity through hands-on challenges in our state-of-the-art Capture The Flag platform. From beginner to expert level, our platform offers a wide range of realistic scenarios to test and improve your skills.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <Shield size={18} />
                  </div>
                  <span className="text-white/70">Real-world vulnerability simulation and exploitation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <Shield size={18} />
                  </div>
                  <span className="text-white/70">Progressive difficulty from beginner to advanced</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <Shield size={18} />
                  </div>
                  <span className="text-white/70">Robust learning resources and hint systems</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <Shield size={18} />
                  </div>
                  <span className="text-white/70">Global leaderboards and team competitions</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button className="group" asChild>
                  <Link to="/platform">
                    Explore Platform 
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
                  <span className="text-sm font-medium text-white">Live Challenges</span>
                </div>
                <p className="text-xs text-white/70">
                  Join thousands of security professionals in our weekly CTF challenges and improve your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Choose Shyena Security" 
            subtitle="Industry-leading expertise with a focus on practical, real-world solutions"
            center
          />
          
          <div className="mt-16 space-y-24">
            <FeatureHighlight
              title="Advanced CTF Challenges"
              description="Our platform offers a wide range of realistic challenges designed to test and improve your cybersecurity skills. From web exploitation to reverse engineering, we cover all aspects of modern security."
              icon={<Flag size={24} />}
              imageUrl="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3"
            />
            
            <FeatureHighlight
              title="Expert-Led Training"
              description="Learn from industry professionals with years of experience in the field. Our training programs are designed to bridge the gap between theoretical knowledge and practical application."
              icon={<BookOpen size={24} />}
              imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3"
              reversed
            />
            
            <FeatureHighlight
              title="Real-World Simulations"
              description="Our Red and Blue Team labs provide realistic environments where security teams can practice attack and defense scenarios based on the latest threats and vulnerabilities."
              icon={<Server size={24} />}
              imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3"
            />
          </div>
        </div>
      </section>

      {/* Testimonials/Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyber-purple">5,000+</div>
              <p className="text-white/70">Active Users</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyber-purple">300+</div>
              <p className="text-white/70">Unique Challenges</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyber-purple">98%</div>
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
              Ready to Strengthen Your Security Posture?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Start your cybersecurity journey with Shyena Security today. Explore our platform, engage with our challenges, and build the skills needed to protect against tomorrow's threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
