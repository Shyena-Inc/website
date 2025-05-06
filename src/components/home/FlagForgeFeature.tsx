
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Terminal, ArrowRight } from 'lucide-react';

const FlagForgeFeature = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-block mb-2 py-1 px-3 rounded-full bg-cyber-purple/10 text-cyber-purple text-sm font-medium">
              Featured Platform
            </div>
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
  );
};

export default FlagForgeFeature;
