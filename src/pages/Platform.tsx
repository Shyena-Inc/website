
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Flag, 
  Trophy, 
  Users, 
  BookOpen, 
  Terminal, 
  ShieldCheck,
  Server,
  Database,
  Code,
  Monitor
} from 'lucide-react';

const Platform = () => {
  const challengeCategories = [
    {
      name: 'Web Exploitation',
      description: 'Test your skills in finding and exploiting common web vulnerabilities',
      icon: <Code size={20} />,
      count: 78,
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      name: 'Binary Exploitation',
      description: 'Discover and exploit vulnerabilities in binary applications',
      icon: <Terminal size={20} />,
      count: 45,
      color: 'bg-red-500/10 text-red-400'
    },
    {
      name: 'Cryptography',
      description: 'Break cryptographic implementations and decode secret messages',
      icon: <Lock size={20} />,
      count: 36,
      color: 'bg-green-500/10 text-green-400'
    },
    {
      name: 'Forensics',
      description: 'Analyze digital evidence to solve cybersecurity challenges',
      icon: <Search size={20} />,
      count: 53,
      color: 'bg-amber-500/10 text-amber-400'
    },
    {
      name: 'Reverse Engineering',
      description: 'Disassemble and understand code to reveal its secrets',
      icon: <Code size={20} />,
      count: 41,
      color: 'bg-purple-500/10 text-purple-400'
    },
    {
      name: 'Network Security',
      description: 'Explore vulnerabilities in network protocols and configurations',
      icon: <Server size={20} />,
      count: 32,
      color: 'bg-cyan-500/10 text-cyan-400'
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              FlagForge CTF Platform
            </h1>
            <p className="text-xl text-white/80 mb-8">
              The premier platform for learning and mastering cybersecurity skills through hands-on, real-world challenges and exercises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/register">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/login">Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Meet FlagForge" 
            subtitle="A next-generation platform designed for cybersecurity professionals and enthusiasts"
            center 
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="space-y-6">
              <p className="text-white/80">
                FlagForge is our flagship Capture The Flag (CTF) platform designed to provide hands-on cybersecurity training and skills assessment through realistic challenges and competitions. Whether you're a beginner looking to learn the fundamentals or an expert honing advanced skills, FlagForge offers a comprehensive environment for cybersecurity education.
              </p>
              <p className="text-white/80">
                Our platform hosts over 300 unique challenges across multiple security domains, from web application security to reverse engineering. Each challenge is designed to simulate real-world scenarios, allowing you to apply theoretical knowledge to practical situations.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-cyber-purple">
                      <Users size={24} />
                    </div>
                    <h3 className="font-medium text-white">5,000+</h3>
                  </div>
                  <p className="text-sm text-white/70">Active users worldwide</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-cyber-purple">
                      <Flag size={24} />
                    </div>
                    <h3 className="font-medium text-white">300+</h3>
                  </div>
                  <p className="text-sm text-white/70">Unique challenges</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-cyber-purple">
                      <Trophy size={24} />
                    </div>
                    <h3 className="font-medium text-white">120+</h3>
                  </div>
                  <p className="text-sm text-white/70">Competitions hosted</p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-cyber-purple">
                      <BookOpen size={24} />
                    </div>
                    <h3 className="font-medium text-white">25+</h3>
                  </div>
                  <p className="text-sm text-white/70">Learning paths</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden cyber-border">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3" 
                  alt="FlagForge Platform" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">Realistic Environments</h3>
                    <p className="text-sm text-white/80">
                      Practice in sandboxed environments that mimic real-world systems and vulnerabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Key Features" 
            subtitle="What makes FlagForge the premier platform for cybersecurity training"
            center 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="glass-card p-6">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Dynamic Challenge Environments
              </h3>
              <p className="text-white/70 text-sm">
                Each challenge runs in isolated containers with real vulnerabilities, providing a safe but authentic learning environment.
              </p>
            </Card>
            <Card className="glass-card p-6">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Trophy size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Competitive Leaderboards
              </h3>
              <p className="text-white/70 text-sm">
                Track your progress against peers with real-time scoring and global leaderboards that recognize top performers.
              </p>
            </Card>
            <Card className="glass-card p-6">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Team Collaboration
              </h3>
              <p className="text-white/70 text-sm">
                Form teams to tackle challenges together, sharing knowledge and developing collaborative security skills.
              </p>
            </Card>
            <Card className="glass-card p-6">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Structured Learning Paths
              </h3>
              <p className="text-white/70 text-sm">
                Follow guided learning tracks that build your skills progressively from fundamentals to advanced techniques.
              </p>
            </Card>
            <Card className="glass-card p-6">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Skill Assessment
              </h3>
              <p className="text-white/70 text-sm">
                Gauge your cybersecurity proficiency with detailed performance metrics and skill ratings across different domains.
              </p>
            </Card>
            <Card className="glass-card p-6">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Monitor size={24} />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Custom Events & Competitions
              </h3>
              <p className="text-white/70 text-sm">
                Organize private competitions for your team or organization with customized challenges and scoring.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Challenge Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Challenge Categories" 
            subtitle="Explore a diverse range of cybersecurity domains"
            center 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {challengeCategories.map((category, index) => (
              <Card key={index} className="glass-card hover:border-cyber-purple/30 transition-all duration-300">
                <div className="p-6">
                  <div className={`h-12 w-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                    {category.icon}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-medium text-white">
                      {category.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {category.count} challenges
                    </Badge>
                  </div>
                  <p className="text-white/70 text-sm mb-4">
                    {category.description}
                  </p>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link to="/register">Explore Challenges</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Screenshots */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Platform Preview" 
            subtitle="Get a glimpse of the FlagForge interface and features"
            center 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="relative rounded-xl overflow-hidden cyber-border">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3" 
                alt="Challenge Interface" 
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">Challenge Interface</h3>
                  <p className="text-sm text-white/80">
                    Interactive environment for solving security challenges
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden cyber-border">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3" 
                alt="Leaderboard" 
                className="w-full h-full object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">Leaderboard & Profiles</h3>
                  <p className="text-sm text-white/80">
                    Track progress and compete with security professionals worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Users Say" 
            subtitle="Feedback from cybersecurity professionals using FlagForge"
            center 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <Card className="glass-card p-6">
              <p className="text-white/80 mb-6 text-sm italic">
                "FlagForge has been instrumental in building my team's security skills. The realistic challenges and competitive elements keep everyone engaged and continuously improving."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple mr-3">
                  <span>MJ</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Michael Johnson</h4>
                  <p className="text-xs text-white/60">CISO, TechSecure Inc.</p>
                </div>
              </div>
            </Card>
            <Card className="glass-card p-6">
              <p className="text-white/80 mb-6 text-sm italic">
                "As someone transitioning into cybersecurity, FlagForge provided the perfect environment to build practical skills. The learning paths were particularly helpful in guiding my development."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple mr-3">
                  <span>SR</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Sarah Rodriguez</h4>
                  <p className="text-xs text-white/60">Security Analyst</p>
                </div>
              </div>
            </Card>
            <Card className="glass-card p-6">
              <p className="text-white/80 mb-6 text-sm italic">
                "We use FlagForge for our internal security training and hiring assessments. It's been a game-changer for identifying talent and keeping our team's skills sharp."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-cyber-purple/20 flex items-center justify-center text-cyber-purple mr-3">
                  <span>DK</span>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">David Kim</h4>
                  <p className="text-xs text-white/60">Security Team Lead, DataGuard</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-4">
          <div className="glass-card max-w-4xl mx-auto rounded-xl p-10 text-center">
            <h2 className="text-3xl font-bold text-gradient-primary mb-6">
              Ready to Test Your Skills?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of cybersecurity professionals on FlagForge and start building your practical security skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/register">Register Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Platform;

// Missing imports added during component function definition
function Search(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
}

function Lock(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
}
