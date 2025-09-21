import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Users, 
  Target, 
  Award, 
  Heart, 
  Globe, 
  Truck, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp
} from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';

const AboutPage = () => {
  const stats = [
    { number: '10,000+', label: 'Happy Farmers', icon: Users },
    { number: '50,000+', label: 'Products Sold', icon: Leaf },
    { number: '25+', label: 'States Covered', icon: Globe },
    { number: '99%', label: 'Customer Satisfaction', icon: Award }
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We promote eco-friendly farming practices that protect our environment for future generations.',
      color: 'text-success'
    },
    {
      icon: Heart,
      title: 'Farmer First',
      description: 'Every decision we make prioritizes the success and well-being of our farming community.',
      color: 'text-destructive'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'We ensure every product meets the highest standards through rigorous quality checks.',
      color: 'text-primary'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We embrace modern technology to bring cutting-edge solutions to traditional farming.',
      color: 'text-accent'
    }
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      description: 'Agricultural engineer with 20+ years of experience in sustainable farming.',
      image: '/placeholder.svg'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Product',
      description: 'Expert in organic farming and product development for 15+ years.',
      image: '/placeholder.svg'
    },
    {
      name: 'Amit Patel',
      role: 'Technical Director',
      description: 'Specialist in irrigation systems and modern farming technology.',
      image: '/placeholder.svg'
    }
  ];

  const milestones = [
    { year: '2015', title: 'Founded', description: 'Started with a vision to support Indian farmers' },
    { year: '2017', title: 'First 1000', description: 'Reached our first 1000 happy customers' },
    { year: '2019', title: 'Expansion', description: 'Expanded to 10 states across India' },
    { year: '2021', title: 'Digital Platform', description: 'Launched our comprehensive e-commerce platform' },
    { year: '2023', title: '10K Farmers', description: 'Celebrated serving 10,000+ farmers nationwide' },
    { year: '2024', title: 'Innovation', description: 'Introduced AI-powered farming recommendations' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <span>Home</span>
          <span>/</span>
          <span className="text-foreground font-medium">About Us</span>
        </nav>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-success/20 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Leaf className="h-4 w-4" />
            Supporting Farmers Since 2015
          </div>
          
          <h1 className="heading-section mb-6">Growing Success Together</h1>
          <p className="text-description max-w-4xl mx-auto mb-8">
            At Agrito, we believe that every farmer deserves access to quality agriculture products and expert guidance. 
            Our mission is to empower farmers across India with premium seeds, organic fertilizers, modern tools, 
            and sustainable farming solutions that help them achieve better harvests and build prosperous communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <button className="btn-hero">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn-outline">
                Get in Touch
              </button>
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-section mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Agrito was born from a simple yet powerful vision: to bridge the gap between traditional farming 
                  and modern agricultural solutions. Our founder, Rajesh Kumar, started this journey after witnessing 
                  the struggles of small-scale farmers in his village.
                </p>
                <p>
                  What began as a small initiative to provide quality seeds to local farmers has now grown into 
                  India's leading agriculture e-commerce platform, serving thousands of farmers across the country.
                </p>
                <p>
                  Today, we're proud to offer a comprehensive range of products, from premium seeds and organic 
                  fertilizers to modern irrigation systems and farming tools, all backed by expert guidance and 
                  unwavering support.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">Empowering farmers with quality products and sustainable solutions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-success/20 p-3 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">A future where every farmer thrives with modern agriculture</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Our Values</h3>
                    <p className="text-sm text-muted-foreground">Quality, sustainability, and farmer-first approach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">Our Core Values</h2>
            <p className="text-description max-w-2xl mx-auto">
              These principles guide everything we do and shape our commitment to serving the farming community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="card-product text-center group">
                  <div className={`bg-gradient-to-br from-muted/30 to-muted/10 p-6 rounded-t-xl`}>
                    <div className={`bg-white/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">Meet Our Team</h2>
            <p className="text-description max-w-2xl mx-auto">
              Our dedicated team of agriculture experts and professionals work tirelessly to support farmers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-product text-center group">
                <div className="p-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="heading-section mb-4">Our Journey</h2>
            <p className="text-description max-w-2xl mx-auto">
              Key milestones in our mission to support farmers across India.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card-product p-6">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center relative z-10">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Growing Community</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Be part of India's largest community of successful farmers. Get access to quality products, 
              expert advice, and sustainable farming solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 hover-lift">
                  Start Shopping
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300 hover-lift">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
