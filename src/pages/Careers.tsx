
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Award, 
  Users, 
  BookOpen, 
  Calendar, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';

const Careers = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Build a career at the forefront of cybersecurity innovation with Shyena Security.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Why Join Shyena Security?" 
            subtitle="Discover the benefits of being part of our cybersecurity team"
            center 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="glass-card p-6">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Work on Cutting-Edge Technology
              </h3>
              <p className="text-white/70 text-sm">
                Develop and implement innovative cybersecurity solutions that address the most challenging threats in the industry.
              </p>
            </Card>
            <Card className="glass-card p-6">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Collaborative Environment
              </h3>
              <p className="text-white/70 text-sm">
                Join a team of passionate cybersecurity experts who work together to solve complex security challenges.
              </p>
            </Card>
            <Card className="glass-card p-6">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Continuous Learning
              </h3>
              <p className="text-white/70 text-sm">
                Access to ongoing training, certifications, and industry conferences to keep your skills at the cutting edge.
              </p>
            </Card>
            <Card className="glass-card p-6">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Competitive Compensation
              </h3>
              <p className="text-white/70 text-sm">
                Enjoy comprehensive benefits packages, competitive salaries, and performance-based incentives.
              </p>
            </Card>
            <Card className="glass-card p-6">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Calendar size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Flexible Work Environment
              </h3>
              <p className="text-white/70 text-sm">
                Remote and hybrid options available for many positions, with flexible scheduling to maintain work-life balance.
              </p>
            </Card>
            <Card className="glass-card p-6">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Career Growth
              </h3>
              <p className="text-white/70 text-sm">
                Clear paths for advancement and opportunities to grow both technically and professionally within the company.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Current Openings" 
            subtitle="Explore our available positions and find your next opportunity"
            center 
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <Card className="glass-card overflow-hidden hover:border-cyber-purple/30 transition-all duration-300">
              <div className="p-6 border-b border-white/10">
                <div className="flex flex-wrap justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Senior Penetration Tester</h3>
                    <p className="text-white/70 text-sm mt-1">Remote (US-Based)</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge>Full-time</Badge>
                    <Badge variant="outline">Senior</Badge>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/80 mb-4">
                  We're seeking an experienced penetration tester to join our security services team. In this role, you'll conduct comprehensive security assessments for our clients, identifying vulnerabilities and providing remediation guidance.
                </p>
                <Button className="w-full sm:w-auto" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </div>
            </Card>
            
            <Card className="glass-card overflow-hidden hover:border-cyber-purple/30 transition-all duration-300 mt-6">
              <div className="p-6 border-b border-white/10">
                <div className="flex flex-wrap justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Security Research Engineer</h3>
                    <p className="text-white/70 text-sm mt-1">Hybrid (NYC Office)</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge>Full-time</Badge>
                    <Badge variant="outline">Mid-Senior</Badge>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/80 mb-4">
                  As a Security Research Engineer, you'll help develop new security challenges for our FlagForge platform, research emerging threats, and create educational content on cybersecurity topics.
                </p>
                <Button className="w-full sm:w-auto" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </div>
            </Card>
            
            <Card className="glass-card overflow-hidden hover:border-cyber-purple/30 transition-all duration-300 mt-6">
              <div className="p-6 border-b border-white/10">
                <div className="flex flex-wrap justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">Security Operations Analyst</h3>
                    <p className="text-white/70 text-sm mt-1">Remote (US-Based)</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge>Full-time</Badge>
                    <Badge variant="outline">Entry-Mid</Badge>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/80 mb-4">
                  Join our SOC team to monitor and respond to security threats for our clients. You'll analyze security alerts, investigate incidents, and implement defensive measures to protect critical assets.
                </p>
                <Button className="w-full sm:w-auto" asChild>
                  <Link to="/contact">Apply Now</Link>
                </Button>
              </div>
            </Card>
            
            <div className="text-center mt-12">
              <p className="text-white/70 mb-4">
                Don't see a position that matches your skills? We're always looking for passionate cybersecurity experts to join our team.
              </p>
              <Button variant="outline" asChild>
                <Link to="/contact">Submit Your Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Internship & Mentorship */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-16 w-16 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-6">
                <GraduationCap size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gradient-primary mb-6">
                Internship & Mentorship Programs
              </h2>
              <p className="text-white/80 mb-6">
                At Shyena Security, we're committed to developing the next generation of cybersecurity professionals through our comprehensive internship and mentorship programs.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <Shield size={18} />
                  </div>
                  <span className="text-white/70">Paid internships with hands-on experience in real security projects</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <Shield size={18} />
                  </div>
                  <span className="text-white/70">One-on-one mentorship from experienced security professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <Shield size={18} />
                  </div>
                  <span className="text-white/70">Structured learning path with training resources and workshops</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-cyber-purple">
                    <Shield size={18} />
                  </div>
                  <span className="text-white/70">Opportunities to work on the FlagForge platform and create challenges</span>
                </li>
              </ul>
              <Button asChild>
                <Link to="/contact" className="group">
                  Apply for Internship
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden cyber-border">
                <img 
                  src="https://images.unsplash.com/photo-1598212767906-6eb16da3fe25?ixlib=rb-4.0.3" 
                  alt="Internship Program" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card p-4 rounded-lg max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCap size={16} className="text-cyber-purple" />
                  <span className="text-sm font-medium text-white">Career Development</span>
                </div>
                <p className="text-xs text-white/70">
                  Many of our full-time team members started in our internship program.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Team Culture" 
            subtitle="What it's like to work at Shyena Security"
            center 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4 mx-auto">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation-Driven</h3>
              <p className="text-white/70">
                We encourage creative thinking and constantly push the boundaries of what's possible in cybersecurity.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4 mx-auto">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Collaborative</h3>
              <p className="text-white/70">
                We believe great security comes from diverse perspectives working together toward common goals.
              </p>
            </div>
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4 mx-auto">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Always Learning</h3>
              <p className="text-white/70">
                In a rapidly evolving field, we prioritize continuous education and skills development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-4">
          <div className="glass-card max-w-4xl mx-auto rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold text-gradient-primary mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Whether you're an experienced security professional or just starting your cybersecurity journey, we'd love to hear from you.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">Apply Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
