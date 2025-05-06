
import { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Clock,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Have questions or want to learn more about our services? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-card p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    placeholder="Company Name" 
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <select 
                    id="subject" 
                    name="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md bg-white/5 border border-white/10 text-white"
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Service Information">Service Information</option>
                    <option value="FlagForge Platform">FlagForge Platform</option>
                    <option value="Training & Workshops">Training & Workshops</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Career Information">Career Information</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="How can we help you?" 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 resize-none"
                  />
                </div>
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <a href="mailto:info@shyenasecurity.com" className="text-white/70 hover:text-cyber-purple transition-colors">
                      info@shyenasecurity.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <a href="tel:+15551234567" className="text-white/70 hover:text-cyber-purple transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Business Hours</h3>
                    <p className="text-white/70">
                      Monday - Friday: 9am - 6pm EST
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Headquarters</h3>
                    <address className="text-white/70 not-italic">
                      123 Cyber Street<br />
                      New York, NY 10001<br />
                      United States
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 h-10 w-10 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Social</h3>
                    <div className="flex space-x-4 mt-2">
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
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-3">Emergency Support</h3>
                <p className="text-white/70 mb-4">
                  For urgent security incidents requiring immediate attention:
                </p>
                <div className="flex items-center">
                  <Phone className="mr-2 text-cyber-purple" size={18} />
                  <span className="text-white">24/7 Incident Response:</span>
                  <a href="tel:+15551237890" className="ml-2 text-cyber-purple hover:underline">
                    +1 (555) 123-7890
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="aspect-video max-w-5xl mx-auto rounded-xl overflow-hidden cyber-border">
            <div className="w-full h-full bg-black/30 flex items-center justify-center">
              <p className="text-white/70">Map placeholder - In a real implementation, this would be a Google Map or similar interactive map showing the company location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services and company"
            center
          />
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">How quickly do you respond to inquiries?</h3>
              <p className="text-white/70">
                We aim to respond to all inquiries within 24 business hours. For urgent matters, please use our emergency support line.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">Do you offer remote services?</h3>
              <p className="text-white/70">
                Yes, most of our services can be provided remotely. Our FlagForge platform is cloud-based, and our training and consulting services are available both remotely and on-site.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">Can you provide custom security solutions?</h3>
              <p className="text-white/70">
                Absolutely. We specialize in developing tailored security solutions based on your organization's specific needs, industry requirements, and threat landscape.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h3 className="text-lg font-bold text-white mb-2">How do I access the FlagForge platform?</h3>
              <p className="text-white/70">
                After registration, you'll receive login credentials for the FlagForge platform. If you're interested in a demo, please contact us directly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
