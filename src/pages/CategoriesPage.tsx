import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Package, Droplets, Wheat, Sprout, Wrench } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { categories } from '@/data/products';

const CategoriesPage = () => {
  const categoryDetails = [
    {
      id: 'seeds',
      name: 'Seeds',
      count: 45,
      description: 'Premium quality seeds for better harvests',
      icon: Sprout,
      color: 'from-success/20 to-success/10',
      textColor: 'text-success',
      bgColor: 'bg-success/5',
      features: ['High Germination Rate', 'Disease Resistant', 'Organic Certified', 'Premium Quality']
    },
    {
      id: 'fertilizers',
      name: 'Fertilizers',
      count: 32,
      description: 'Natural nutrition for healthy crops',
      icon: Leaf,
      color: 'from-primary/20 to-primary/10',
      textColor: 'text-primary',
      bgColor: 'bg-primary/5',
      features: ['100% Organic', 'Soil Enrichment', 'Natural Pest Control', 'Eco-Friendly']
    },
    {
      id: 'tools',
      name: 'Farm Tools',
      count: 28,
      description: 'Modern equipment for efficient farming',
      icon: Wrench,
      color: 'from-accent/20 to-accent/10',
      textColor: 'text-accent',
      bgColor: 'bg-accent/5',
      features: ['Durable Materials', 'Ergonomic Design', 'Multi-Purpose', 'Long Lasting']
    },
    {
      id: 'irrigation',
      name: 'Irrigation',
      count: 19,
      description: 'Water-efficient solutions for modern farming',
      icon: Droplets,
      color: 'from-primary/20 to-accent/10',
      textColor: 'text-primary',
      bgColor: 'bg-primary/5',
      features: ['Water Efficient', 'Easy Installation', 'Complete Systems', 'Cost Effective']
    },
    {
      id: 'grains',
      name: 'Grains',
      count: 15,
      description: 'Premium quality grains and cereals',
      icon: Wheat,
      color: 'from-warning/20 to-warning/10',
      textColor: 'text-warning-foreground',
      bgColor: 'bg-warning/5',
      features: ['Premium Quality', 'Aged to Perfection', 'Long Grains', 'Aromatic']
    },
    {
      id: 'organic',
      name: 'Organic Products',
      count: 38,
      description: 'Certified organic products for sustainable farming',
      icon: Package,
      color: 'from-success/20 to-primary/10',
      textColor: 'text-success',
      bgColor: 'bg-success/5',
      features: ['Certified Organic', 'Sustainable', 'Natural', 'Environment Friendly']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <span>Home</span>
          <span>/</span>
          <span className="text-foreground font-medium">Categories</span>
        </nav>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="heading-section mb-4">Shop by Categories</h1>
          <p className="text-description max-w-3xl mx-auto">
            Explore our comprehensive range of agriculture products organized by categories. 
            From premium seeds to organic fertilizers, find everything you need for successful farming.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categoryDetails.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className="card-category group animate-fade-in hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className={`p-6 bg-gradient-to-br ${category.color} border-b`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${category.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${category.textColor}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${category.textColor}`}>
                        {category.count}
                      </div>
                      <div className="text-sm text-muted-foreground">Products</div>
                    </div>
                  </div>
                  
                  <h3 className={`text-xl font-semibold ${category.textColor} mb-2 group-hover:translate-x-1 transition-transform duration-300`}>
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </div>

                {/* Category Features */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                        <div className={`w-2 h-2 rounded-full ${category.bgColor} ${category.textColor.replace('text-', 'bg-')}`}></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      Explore Products
                    </span>
                    <ArrowRight className={`h-4 w-4 ${category.textColor} group-hover:translate-x-1 transition-transform duration-300`} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Featured Categories Section */}
        <section className="bg-gradient-to-r from-muted/30 to-muted/10 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="heading-section mb-4">Why Choose Our Categories?</h2>
            <p className="text-description max-w-2xl mx-auto">
              Each category is carefully curated to provide farmers with the best products for their specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Quality Assured</h3>
              <p className="text-muted-foreground text-sm">
                All products undergo rigorous quality checks to ensure the highest standards.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Package className="h-8 w-8 text-success" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Curation</h3>
              <p className="text-muted-foreground text-sm">
                Products selected by agriculture experts with years of farming experience.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Droplets className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Sustainable Solutions</h3>
              <p className="text-muted-foreground text-sm">
                Focus on eco-friendly and sustainable farming practices.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Browse our extensive collection of agriculture products and find everything you need for successful farming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop">
                <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300 hover-lift">
                  Browse All Products
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300 hover-lift">
                  Get Expert Advice
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

export default CategoriesPage;
