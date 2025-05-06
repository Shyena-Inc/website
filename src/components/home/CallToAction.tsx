
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
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
            <Button size="lg" className="relative overflow-hidden group" asChild>
              <Link to="/contact">
                <span className="relative z-10">Contact Our Team</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyber-purple to-cyber-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-cyber-purple/50 hover:border-cyber-purple" asChild>
              <Link to="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
