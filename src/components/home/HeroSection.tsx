
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 cyber-grid -z-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 py-2 px-4 rounded-full bg-cyber-purple/10 text-cyber-purple text-sm font-medium">
            Next-Generation Cybersecurity
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold hero-text-animation mb-6">
            Cybersecurity Reinvented: Tools. Training. Testing.
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Shyena Inc provides next-generation cybersecurity tools and services to empower individuals, organizations, and academic institutions against modern threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="relative overflow-hidden group" asChild>
              <Link to="/platform">
                <span className="relative z-10">Try FlagForge</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-cyber-purple/50 hover:border-cyber-purple" asChild>
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
  );
};

export default HeroSection;
