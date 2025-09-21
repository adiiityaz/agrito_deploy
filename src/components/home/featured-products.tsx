import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '@/components/ui/product-card';
import { featuredProducts } from '@/data/products';

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div className="text-center lg:text-left mb-6 lg:mb-0">
            <h2 className="heading-section mb-4">Featured Products</h2>
            <p className="text-description max-w-2xl">
              Discover our top-rated agriculture products trusted by farmers nationwide
            </p>
          </div>
          
          <Link to="/shop">
            <button className="btn-outline">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              className={`animate-fade-in hover-lift`}
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Special Offer: 20% Off on All Seeds
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Limited time offer. Get premium quality seeds at unbeatable prices.
          </p>
          <Link to="/category/seeds">
            <button className="bg-white text-primary hover:bg-white/90 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Shop Seeds Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;