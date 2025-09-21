import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import categorySeeds from '@/assets/category-seeds.jpg';
import categoryFertilizers from '@/assets/category-fertilizers.jpg';
import categoryTools from '@/assets/category-tools.jpg';

const FeaturedCategories = () => {
  const categories = [
    {
      id: 'seeds',
      name: 'Premium Seeds',
      description: 'High-quality seeds for better harvest',
      image: categorySeeds,
      productCount: 45,
      color: 'bg-success/10'
    },
    {
      id: 'fertilizers',
      name: 'Organic Fertilizers',
      description: 'Natural nutrition for healthy crops',
      image: categoryFertilizers,
      productCount: 32,
      color: 'bg-primary/10'
    },
    {
      id: 'tools',
      name: 'Farm Tools',
      description: 'Modern equipment for efficient farming',
      image: categoryTools,
      productCount: 28,
      color: 'bg-accent/10'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-section mb-4">Shop by Category</h2>
          <p className="text-description max-w-2xl mx-auto">
            Explore our comprehensive range of agriculture products designed to support your farming journey
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="card-category group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Category Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Product Count Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {category.productCount} Products
                  </span>
                </div>
              </div>

              {/* Category Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {category.name}
                  </h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-200" />
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>

                {/* Color accent */}
                <div className={`w-full h-1 rounded-full ${category.color} group-hover:bg-primary/20 transition-colors duration-300`}></div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Categories Button */}
        <div className="text-center mt-12">
          <Link to="/categories">
            <button className="btn-outline">
              View All Categories
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;