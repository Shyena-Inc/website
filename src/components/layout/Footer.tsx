import { Link } from 'react-router-dom';
import { Shield, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="neo-blur mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-cyber-purple" />
              <span className="text-lg font-bold text-white">Shyena Security</span>
            </div>
            <p className="text-sm text-white/70">
              Empowering organizations with cutting-edge cybersecurity solutions and training.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-cyber-purple transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-cyber-purple transition-colors">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-cyber-purple transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                onClick={() => window.location.href = 'mailto:info@shyenasecurity.com'}
                className="text-white/70 hover:text-cyber-purple transition-colors"
              >
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-white/70 hover:text-cyber-purple transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-white/70 hover:text-cyber-purple transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-white/70 hover:text-cyber-purple transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-white/70 hover:text-cyber-purple transition-colors">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#ctf" className="text-sm text-white/70 hover:text-cyber-purple transition-colors">CTF Platform</Link>
              </li>
              <li>
                <Link to="/services#training" className="text-sm text-white/70 hover:text-cyber-purple transition-colors">Cybersecurity Training</Link>
              </li>
              <li>
                <Link to="/services#red-blue" className="text-sm text-white/70 hover:text-cyber-purple transition-colors">Red & Blue Team Labs</Link>
              </li>
              <li>
                <Link to="/services#soc" className="text-sm text-white/70 hover:text-cyber-purple transition-colors">SOC Setup</Link>
              </li>
              <li>
                <Link to="/services#pentesting" className="text-sm text-white/70 hover:text-cyber-purple transition-colors">Security Audits</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-white/70 hover:text-cyber-purple transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-white/70 hover:text-cyber-purple transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-sm text-white/70 hover:text-cyber-purple transition-colors">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">
            © {currentYear} Shyena Security. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
