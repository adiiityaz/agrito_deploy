import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Shield, Leaf } from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern Agriculture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-success/20 text-success px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Leaf className="h-4 w-4" />
              Premium Agriculture Products
            </div>

            {/* Heading */}
            <h1 className="heading-hero text-white mb-6 animate-slide-up">
              Growing Success
              <span className="block text-primary-light">Together</span>
            </h1>

            {/* Description */}
            <p className="text-description text-white/90 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in animation-delay-200">
              Discover premium seeds, organic fertilizers, and modern farming tools. 
              Supporting farmers with quality products for sustainable agriculture.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in animation-delay-400">
              <Link to="/shop">
                <Button className="btn-hero">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground">
                Learn More
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 animate-fade-in animation-delay-600">
              <div className="flex items-center gap-2 text-white/80">
                <Shield className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Quality Assured</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Truck className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Leaf className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">100% Organic</span>
              </div>
            </div>
          </div>

          {/* Right side - Stats or additional content */}
          <div className="hidden lg:block"></div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent z-5"></div>
    </section>
  );
};

export default HeroSection;