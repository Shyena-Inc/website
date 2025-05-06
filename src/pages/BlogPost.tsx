
import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ChevronLeft, Share2, BookOpen } from 'lucide-react';

// Mock blog post data (in a real app, this would come from an API)
const blogPosts = [
  {
    id: '1',
    title: 'Understanding Cross-Site Scripting (XSS) Attacks in 2025',
    excerpt: 'XSS attacks remain a persistent threat. Learn about the latest techniques and how to defend against them.',
    content: `
      <p>Cross-Site Scripting (XSS) continues to be one of the most prevalent web security vulnerabilities in 2025. Despite increased awareness and improved defensive tools, attackers are finding new ways to inject malicious scripts into trusted websites.</p>
      
      <h2>Types of XSS Attacks</h2>
      
      <p>There are three main types of XSS attacks:</p>
      
      <ul>
        <li><strong>Reflected XSS</strong>: Non-persistent attacks where malicious scripts are reflected off a web server through URLs</li>
        <li><strong>Stored XSS</strong>: Persistent attacks where the malicious script is stored on the target server</li>
        <li><strong>DOM-based XSS</strong>: Attacks that occur entirely in the browser when client-side JavaScript modifies the DOM</li>
      </ul>
      
      <h2>Modern XSS Attack Vectors</h2>
      
      <p>In 2025, we're seeing sophisticated attackers leverage the following techniques:</p>
      
      <ul>
        <li>Client-side template injection in JavaScript frameworks</li>
        <li>WebSocket-based persistent XSS</li>
        <li>Browser extension vulnerabilities as an XSS entry point</li>
        <li>Bypassing Content Security Policy (CSP) through script gadgets</li>
      </ul>
      
      <p>Perhaps most concerning is the rise of AI-assisted XSS payload generation, which can dynamically modify attack vectors to bypass filters and WAFs.</p>
      
      <h2>Effective XSS Defenses</h2>
      
      <p>To protect your applications from these evolving threats:</p>
      
      <ol>
        <li><strong>Input Validation and Output Encoding</strong>: Validate all user inputs and properly encode outputs based on their context (HTML, JavaScript, CSS, etc.)</li>
        <li><strong>Content Security Policy (CSP)</strong>: Implement a strict CSP that disables inline scripts and restricts sources for external resources</li>
        <li><strong>Modern Framework Features</strong>: Use frameworks that automatically escape outputs and provide built-in XSS protections</li>
        <li><strong>Security Headers</strong>: Implement headers like X-XSS-Protection and X-Content-Type-Options</li>
        <li><strong>Regular Security Testing</strong>: Conduct regular security assessments and penetration testing focused on XSS vulnerabilities</li>
      </ol>
      
      <h2>Code Example: Secure Output Handling in React</h2>
      
      <pre><code>
      // Unsafe implementation (vulnerable to XSS):
      const UnsafeComponent = () => {
        const userInput = getParameterFromUrl('input');
        return <div dangerouslySetInnerHTML={{ __html: userInput }} />;
      };
      
      // Safe implementation:
      const SafeComponent = () => {
        const userInput = getParameterFromUrl('input');
        return <div>{userInput}</div>;  // React automatically escapes content
      };
      </code></pre>
      
      <h2>Conclusion</h2>
      
      <p>XSS vulnerabilities continue to evolve as web applications become more complex. By staying informed about the latest attack techniques and implementing robust defensive measures, organizations can significantly reduce their risk of XSS exploitation.</p>
      
      <p>At Shyena Security, we recommend a defense-in-depth approach, combining proper coding practices, security headers, CSP, and regular testing to effectively mitigate XSS risks.</p>
    `,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3',
    date: '2025-05-02',
    author: 'Alex Johnson',
    authorRole: 'Security Researcher',
    authorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    category: 'Web Security',
    readTime: '8 min read',
    tags: ['XSS', 'Web Security', 'JavaScript', 'Vulnerabilities']
  },
  {
    id: '2',
    title: 'Supply Chain Attacks: The Rising Threat to Software Ecosystems',
    excerpt: 'Supply chain attacks have become increasingly sophisticated. Discover how to secure your development pipeline.',
    content: `
      <p>Supply chain attacks target the least-secured elements in the software development and distribution process. This article examines recent trends and best practices for defense.</p>
      
      <h2>The Growing Threat</h2>
      
      <p>In recent years, we've witnessed several high-profile supply chain attacks targeting widely used software packages and tools. These attacks have demonstrated the devastating impact of compromising a single point in the software supply chain.</p>
      
      <h2>Common Attack Vectors</h2>
      
      <ul>
        <li>Compromising package repositories</li>
        <li>Inserting malicious code during the build process</li>
        <li>Exploiting trusted update mechanisms</li>
        <li>Targeting development tools and dependencies</li>
      </ul>
      
      <h2>Defensive Strategies</h2>
      
      <p>Organizations should implement the following measures to protect against supply chain attacks:</p>
      
      <ol>
        <li>Implement software composition analysis (SCA) tools</li>
        <li>Use signed packages and verify signatures</li>
        <li>Lock dependencies with checksums</li>
        <li>Establish a secure CI/CD pipeline</li>
        <li>Regularly audit third-party code and dependencies</li>
      </ol>
      
      <h2>Conclusion</h2>
      
      <p>Supply chain security requires a holistic approach that addresses vulnerabilities throughout the development lifecycle. By implementing robust verification procedures and monitoring systems, organizations can significantly reduce their exposure to these sophisticated attacks.</p>
    `,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3',
    date: '2025-04-28',
    author: 'Maria Rodriguez',
    authorRole: 'Application Security Lead',
    authorImage: 'https://randomuser.me/api/portraits/women/42.jpg',
    category: 'Application Security',
    readTime: '12 min read',
    tags: ['Supply Chain', 'DevSecOps', 'Software Security', 'CI/CD']
  },
  // Add more blog posts as needed
];

const relatedPosts = [
  {
    id: '3',
    title: 'Advanced Binary Exploitation Techniques for CTF Competitions',
    excerpt: 'Sharpen your skills with these advanced binary exploitation methods commonly used in high-level CTF challenges.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3',
    date: '2025-04-15',
    author: 'Tomas Chen',
    category: 'Binary Exploitation',
    readTime: '15 min read'
  },
  {
    id: '5',
    title: 'Threat Hunting Fundamentals: Proactive Defense in Modern Environments',
    excerpt: 'Discover the principles of effective threat hunting and how to implement this proactive security approach.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3',
    date: '2025-04-02',
    author: 'Sophia Lee',
    category: 'Threat Detection',
    readTime: '9 min read'
  }
];

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <PageLayout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-white/70 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/blog">Return to Blog</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-white/70 hover:text-cyber-purple mb-6 transition-colors"
            >
              <ChevronLeft size={16} className="mr-1" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gradient-primary mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 items-center mb-8">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center text-white/70">
                <Calendar size={14} className="mr-1" />
                <span className="text-sm">{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center text-white/70">
                <Clock size={14} className="mr-1" />
                <span className="text-sm">{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden cyber-border">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Author Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass-card p-6 rounded-lg sticky top-24">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                    <img 
                      src={post.authorImage} 
                      alt={post.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white">{post.author}</h3>
                  <p className="text-sm text-white/70">{post.authorRole}</p>
                </div>
                <div className="border-t border-white/10 pt-4 mt-4">
                  <h4 className="text-sm font-medium text-white mb-3">Share this article</h4>
                  <div className="flex justify-center space-x-3">
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                      <Share2 size={18} />
                      <span className="sr-only">Share</span>
                    </button>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      <span className="sr-only">Facebook</span>
                    </button>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                      <span className="sr-only">Twitter</span>
                    </button>
                    <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      <span className="sr-only">LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="prose prose-invert prose-p:text-white/80 prose-headings:text-white prose-strong:text-white/90 prose-code:text-cyber-purple prose-li:text-white/80 max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              <div className="border-t border-white/10 mt-8 pt-6">
                <div className="flex flex-wrap gap-2">
                  {post.tags?.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <BookOpen className="mr-2" size={20} />
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related) => (
                <Link key={related.id} to={`/blog/${related.id}`}>
                  <Card className="glass-card hover:border-cyber-purple/30 transition-all duration-300 h-full">
                    <div className="relative h-40 overflow-hidden rounded-t-lg">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      <Badge className="absolute top-3 left-3" variant="secondary">{related.category}</Badge>
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-lg font-bold text-white leading-tight hover:text-cyber-purple transition-colors">
                        {related.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-white/60">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          {formatDate(related.date)}
                        </div>
                        <div>{related.readTime}</div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default BlogPost;
