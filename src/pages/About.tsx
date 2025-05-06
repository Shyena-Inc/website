
import PageLayout from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/ui/section-heading";
import { Shield, Flag, Award, Users, Code, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              About Shyena Security
            </h1>
            <p className="text-xl text-white/80 mb-8">
              We're a team of cybersecurity experts dedicated to empowering organizations and individuals with the knowledge and tools to defend against evolving digital threats.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-6">
                <Shield size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/70">
                A world where organizations of all sizes have the knowledge and tools to effectively protect themselves against cyber threats, enabling a secure digital future for everyone.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-6">
                <Flag size={24} />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/70">
                To democratize cybersecurity expertise through practical, hands-on training, realistic simulations, and accessible knowledge resources that empower both organizations and individuals to build robust security capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Story" center />
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-p:text-white/70 prose-headings:text-white">
              <p>
                Shyena Security was founded in 2019 by a team of cybersecurity veterans who recognized a critical gap in the industry: while threats were evolving rapidly, training and skill development weren't keeping pace.
              </p>
              <p>
                The founders, having worked in various security roles from ethical hacking to SOC operations, saw that traditional security training often failed to prepare professionals for real-world scenarios. Theoretical knowledge wasn't enough – security teams needed practical, hands-on experience with modern attack techniques and defense strategies.
              </p>
              <p>
                This realization led to the development of FlagForge, our flagship Capture The Flag platform, designed to bridge the gap between academic knowledge and practical application. What started as a training tool for a small group of security enthusiasts quickly grew into a comprehensive platform used by thousands of professionals worldwide.
              </p>
              <p>
                Today, Shyena Security has expanded beyond the CTF platform to offer a full range of cybersecurity services, including specialized training, red and blue team labs, and security consulting. Our team has grown to include experts from diverse backgrounds in cybersecurity, but our mission remains the same: to empower organizations with the practical skills and knowledge needed to defend against modern threats.
              </p>
              <p>
                The name "Shyena" comes from a species of falcon known for its sharp vision and agility – qualities we believe are essential in the ever-changing landscape of cybersecurity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide our work and partnerships"
            center 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="glass-card p-6 rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
              <p className="text-white/70 text-sm">
                We maintain the highest ethical standards in all our operations, ensuring trust and reliability in every engagement.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-white/70 text-sm">
                We continuously push the boundaries of cybersecurity training and technology to stay ahead of evolving threats.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
              <p className="text-white/70 text-sm">
                We believe in the power of community and work closely with our clients and partners to achieve shared security goals.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
              <p className="text-white/70 text-sm">
                We strive for the highest quality in everything we do, from platform development to client training.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Security First</h3>
              <p className="text-white/70 text-sm">
                We prioritize security in all our operations, living the principles we teach to others.
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-cyber-purple/10 flex items-center justify-center text-cyber-purple mb-4">
                <Flag size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Empowerment</h3>
              <p className="text-white/70 text-sm">
                We are committed to democratizing cybersecurity knowledge, making it accessible to all organizations regardless of size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Leadership Team" 
            subtitle="Meet the experts behind Shyena Security"
            center 
          />
          <div className="flex justify-center mt-8">
            <p className="text-white/70 text-center max-w-lg">
              Our leadership team section is currently being updated with the profiles of our cybersecurity experts and company leaders.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
