
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, 
  Flag,
  BookOpen, 
  Users, 
  Server,
  Code,
  Shield,
  Terminal,
  Database,
  Lock
} from 'lucide-react';

const Services = () => {
  const location = useLocation();
  const hash = location.hash;
  const ctfRef = useRef<HTMLDivElement>(null);
  const trainingRef = useRef<HTMLDivElement>(null);
  const redBlueRef = useRef<HTMLDivElement>(null);
  const socRef = useRef<HTMLDivElement>(null);
  const pentestingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Comprehensive cybersecurity solutions designed to protect, train, and empower your organization against evolving threats.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-6 bg-black/20 sticky top-16 z-20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="#ctf">CTF Platform</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#training">Training</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#red-blue">Red & Blue Team</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#soc">SOC Setup</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#pentesting">Security Audits</a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTF Platform */}
      <section id="ctf" ref={ctfRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-16 w-16 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-6">
                <Flag size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gradient-primary mb-6">
                FlagForge CTF Platform
              </h2>
              <p className="text-white/80 mb-6">
                Our state-of-the-art Capture The Flag platform provides realistic security challenges for all skill levels. From web application vulnerabilities to reverse engineering, our platform offers a comprehensive learning environment for cybersecurity professionals.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Over 300 unique challenges across different categories</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Dynamic environments with isolated, sandboxed infrastructure</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Real-time scoring and competitive leaderboards</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Guided learning paths from beginner to expert</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Team and individual competition modes</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/platform">Explore FlagForge</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden cyber-border">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3" 
                  alt="CTF Platform" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <Terminal size={16} className="text-cyber-purple" />
                  <span className="text-sm font-medium text-white">Weekly Challenges</span>
                </div>
                <p className="text-xs text-white/70">
                  New challenges released every week to keep skills sharp and current with evolving threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training */}
      <section id="training" ref={trainingRef} className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-xl overflow-hidden cyber-border">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3" 
                  alt="Cybersecurity Training" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-lg max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen size={16} className="text-cyber-purple" />
                  <span className="text-sm font-medium text-white">Expert Instructors</span>
                </div>
                <p className="text-xs text-white/70">
                  Learn from industry professionals with real-world experience in defending against cyber threats.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="h-16 w-16 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-6">
                <BookOpen size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gradient-primary mb-6">
                Cybersecurity Training
              </h2>
              <p className="text-white/80 mb-6">
                Our comprehensive training programs are designed to build and enhance cybersecurity skills at all levels. From foundational security principles to advanced threat hunting, we offer practical, hands-on courses led by industry experts.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Customized training paths for different security roles</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Practical, hands-on exercises and simulations</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">In-person and virtual training options</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Certification preparation for industry standards</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Team training packages for security departments</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/contact">Request Training Info</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Red & Blue Team Labs */}
      <section id="red-blue" ref={redBlueRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-16 w-16 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-6">
                <Users size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gradient-primary mb-6">
                Red & Blue Team Labs
              </h2>
              <p className="text-white/80 mb-6">
                Our advanced simulation environments provide realistic testing grounds for offensive (Red Team) and defensive (Blue Team) security operations, allowing your teams to practice attacking and defending in a safe, controlled setting.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Custom network environments that mirror your infrastructure</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Realistic attack scenarios based on real-world breaches</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Detection and response practice for security teams</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Adversary simulation with expert guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Comprehensive debriefs and improvement recommendations</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden cyber-border">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3" 
                  alt="Red & Blue Team Labs" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <Terminal size={16} className="text-cyber-purple" />
                  <span className="text-sm font-medium text-white">Advanced Simulations</span>
                </div>
                <p className="text-xs text-white/70">
                  Practice with the same tools and techniques used by real-world attackers and defenders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOC Setup */}
      <section id="soc" ref={socRef} className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-square rounded-xl overflow-hidden cyber-border">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3" 
                  alt="SOC Setup" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-lg max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <Server size={16} className="text-cyber-purple" />
                  <span className="text-sm font-medium text-white">24/7 Monitoring</span>
                </div>
                <p className="text-xs text-white/70">
                  Design and implement effective security operations for continuous threat monitoring and response.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="h-16 w-16 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-6">
                <Server size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gradient-primary mb-6">
                SOC Setup Consultation
              </h2>
              <p className="text-white/80 mb-6">
                Building an effective Security Operations Center requires strategic planning, the right tools, and efficient processes. Our expert consultants will guide you through designing, implementing, and optimizing your SOC for maximum effectiveness.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Comprehensive SOC architecture design</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Tool selection and integration guidance</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Process development for incident response</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Alert tuning and management strategies</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Staff training and capability development</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/contact">Get Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Security Audits & Pentesting */}
      <section id="pentesting" ref={pentestingRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-16 w-16 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-6">
                <Code size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gradient-primary mb-6">
                Security Audits & Pentesting
              </h2>
              <p className="text-white/80 mb-6">
                Our comprehensive security assessment services help identify vulnerabilities before attackers do. From network infrastructure to web applications, our expert team conducts thorough penetration tests and security audits to strengthen your security posture.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Web application penetration testing</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Network infrastructure security assessments</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Cloud security configuration reviews</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Wireless network security testing</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <ShieldCheck size={18} />
                  </div>
                  <span className="text-white/70">Detailed reports with remediation guidance</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/contact">Request Assessment</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden cyber-border">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3" 
                  alt="Security Audits" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <Lock size={16} className="text-cyber-purple" />
                  <span className="text-sm font-medium text-white">Comprehensive Reports</span>
                </div>
                <p className="text-xs text-white/70">
                  Receive detailed findings with practical recommendations for remediation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-4">
          <div className="glass-card max-w-4xl mx-auto rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold text-gradient-primary mb-6">
              Ready to Enhance Your Security Posture?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our team of cybersecurity experts is ready to help you implement robust security solutions tailored to your organization's needs.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
