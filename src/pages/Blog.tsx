
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Calendar, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'Understanding Cross-Site Scripting (XSS) Attacks in 2025',
    excerpt: 'XSS attacks remain a persistent threat. Learn about the latest techniques and how to defend against them.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3',
    date: '2025-05-02',
    author: 'Alex Johnson',
    category: 'Web Security',
    readTime: '8 min read'
  },
  {
    id: '2',
    title: 'Supply Chain Attacks: The Rising Threat to Software Ecosystems',
    excerpt: 'Supply chain attacks have become increasingly sophisticated. Discover how to secure your development pipeline.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3',
    date: '2025-04-28',
    author: 'Maria Rodriguez',
    category: 'Application Security',
    readTime: '12 min read'
  },
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
    id: '4',
    title: 'Building an Effective SOC: Tools, Process, and People',
    excerpt: 'Learn the key components of a modern Security Operations Center and how to optimize its effectiveness.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3',
    date: '2025-04-10',
    author: 'Jordan Williams',
    category: 'Security Operations',
    readTime: '10 min read'
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
  },
  {
    id: '6',
    title: 'Securing Cloud Infrastructure: Best Practices for AWS and Azure',
    excerpt: 'Learn how to implement robust security controls for your cloud environments across major platforms.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3',
    date: '2025-03-25',
    author: 'David Kumar',
    category: 'Cloud Security',
    readTime: '11 min read'
  }
];

const categories = [
  'All',
  'Web Security',
  'Application Security',
  'Binary Exploitation',
  'Security Operations',
  'Threat Detection',
  'Cloud Security',
  'CTF Writeups'
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
              Cybersecurity Insights
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Expert analysis, tips, and tutorials on the latest cybersecurity trends and techniques.
            </p>
            <div className="relative max-w-md mx-auto">
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/50"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="glass-card p-6 rounded-lg sticky top-24">
                <h3 className="text-xl font-bold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {selectedCategory === 'All' ? 'Latest Articles' : selectedCategory}
                </h2>
                <p className="text-white/70">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} {searchTerm ? 'matching your search' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`}>
                    <Card className="glass-card hover:border-cyber-purple/30 transition-all duration-300 h-full">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <Badge className="absolute top-3 left-3" variant="secondary">{post.category}</Badge>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center text-sm text-white/60 gap-4">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {formatDate(post.date)}
                          </div>
                          <div>{post.readTime}</div>
                        </div>
                        <h3 className="text-xl font-bold text-white leading-tight hover:text-cyber-purple transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-white/70 text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-sm text-white/70">By {post.author}</span>
                          <span className="text-cyber-purple flex items-center text-sm">
                            Read More <ChevronRight size={16} className="ml-1" />
                          </span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-white/70">No articles found matching your criteria</p>
                  <Button 
                    variant="ghost" 
                    className="mt-4"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto px-4">
          <div className="glass-card max-w-4xl mx-auto rounded-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-gradient-primary mb-4">
              Stay Updated on Cybersecurity Trends
            </h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest articles, tutorials, and security alerts directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
