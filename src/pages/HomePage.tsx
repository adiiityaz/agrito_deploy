import React from 'react';
import Navigation from '@/components/ui/navigation';
import HeroSection from '@/components/home/hero-section';
import FeaturedCategories from '@/components/home/featured-categories';
import FeaturedProducts from '@/components/home/featured-products';
import Footer from '@/components/ui/footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <FeaturedCategories />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;