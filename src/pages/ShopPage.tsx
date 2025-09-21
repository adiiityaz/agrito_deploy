import React, { useState } from 'react';
import { Filter, Grid, List, SortAsc, X, ChevronDown } from 'lucide-react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import ProductCard from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { products, categories } from '@/data/products';

const ShopPage = () => {
  const [filteredProducts] = useState(products);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange({ min: '', max: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
          <span>Home</span>
          <span>/</span>
          <span className="text-foreground font-medium">Shop</span>
        </nav>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="heading-section mb-2">Shop Agriculture Products</h1>
          <p className="text-description">
            Discover our complete range of premium agriculture products for modern farming
          </p>
        </div>

        {/* Mobile Filters Overlay */}
        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setShowFilters(false)} />
            <div className="fixed top-0 left-0 bottom-0 w-80 bg-background border-r overflow-y-auto">
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold">Filters</h2>
                  <Button variant="ghost" size="icon" onClick={() => setShowFilters(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="p-4 space-y-6">
                {/* Mobile filter content will go here */}
                <FilterSections 
                  categories={categories}
                  selectedCategories={selectedCategories}
                  toggleCategory={toggleCategory}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  clearFilters={clearFilters}
                />
              </div>
            </div>
          </div>
        )}

        {/* Top Bar with Search and Filters */}
        <div className="bg-card border rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <Input
                type="search"
                placeholder="Search agriculture products..."
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-3">
              {/* Mobile Filter Button */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(true)}
                className="lg:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                {(selectedCategories.length > 0 || priceRange.min || priceRange.max) && (
                  <Badge className="ml-2 bg-primary text-primary-foreground">
                    {selectedCategories.length + (priceRange.min || priceRange.max ? 1 : 0)}
                  </Badge>
                )}
              </Button>

              {/* Sort */}
              <Select defaultValue="featured">
                <SelectTrigger className="w-48">
                  <SortAsc className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>

              {/* View Toggle */}
              <div className="hidden md:flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {(selectedCategories.length > 0 || priceRange.min || priceRange.max) && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t">
              <span className="text-sm font-medium">Active filters:</span>
              {selectedCategories.map(categoryId => {
                const category = categories.find(c => c.id === categoryId);
                return (
                  <Badge key={categoryId} variant="secondary" className="cursor-pointer" onClick={() => toggleCategory(categoryId)}>
                    {category?.name}
                    <X className="h-3 w-3 ml-1" />
                  </Badge>
                );
              })}
              {(priceRange.min || priceRange.max) && (
                <Badge variant="secondary" className="cursor-pointer" onClick={() => setPriceRange({ min: '', max: '' })}>
                  Price: ₹{priceRange.min || '0'} - ₹{priceRange.max || '∞'}
                  <X className="h-3 w-3 ml-1" />
                </Badge>
              )}
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">
                Clear all
              </Button>
            </div>
          )}
        </div>

        <div className="flex gap-6">
          {/* Desktop Sidebar Filters */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-24">
              <FilterSections 
                categories={categories}
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                clearFilters={clearFilters}
              />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing <span className="font-medium">{filteredProducts.length}</span> products
              </p>
              <div className="text-sm text-muted-foreground">
                Results per page: 12
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 mb-12 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="animate-fade-in hover-lift"
                  style={{ animationDelay: `${index * 50}ms` }}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center">
              <div className="flex items-center space-x-1">
                <Button variant="outline" disabled className="px-3 py-2">Previous</Button>
                <Button variant="default" className="px-3 py-2">1</Button>
                <Button variant="outline" className="px-3 py-2">2</Button>
                <Button variant="outline" className="px-3 py-2">3</Button>
                <span className="px-3 py-2 text-muted-foreground">...</span>
                <Button variant="outline" className="px-3 py-2">10</Button>
                <Button variant="outline" className="px-3 py-2">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

// Filter Sections Component
const FilterSections: React.FC<{
  categories: any[];
  selectedCategories: string[];
  toggleCategory: (id: string) => void;
  priceRange: { min: string; max: string };
  setPriceRange: (range: { min: string; max: string }) => void;
  clearFilters: () => void;
}> = ({ categories, selectedCategories, toggleCategory, priceRange, setPriceRange, clearFilters }) => {
  return (
    <div className="space-y-6">
      {/* Clear Filters */}
      {(selectedCategories.length > 0 || priceRange.min || priceRange.max) && (
        <Button variant="outline" onClick={clearFilters} className="w-full">
          Clear All Filters
        </Button>
      )}

      {/* Categories */}
      <div className="bg-card p-4 rounded-lg border">
        <h3 className="font-semibold mb-4 flex items-center">
          Categories
          <ChevronDown className="h-4 w-4 ml-auto" />
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between group">
              <label className="flex items-center space-x-3 cursor-pointer flex-1">
                <input 
                  type="checkbox" 
                  className="rounded border-border" 
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => toggleCategory(category.id)}
                />
                <span className="text-sm group-hover:text-primary transition-colors">{category.name}</span>
              </label>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="bg-card p-4 rounded-lg border">
        <h3 className="font-semibold mb-4 flex items-center">
          Price Range
          <ChevronDown className="h-4 w-4 ml-auto" />
        </h3>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2">
            <Input 
              type="number" 
              placeholder="Min ₹" 
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
            />
            <Input 
              type="number" 
              placeholder="Max ₹"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
            />
          </div>
          <div className="text-xs text-muted-foreground">
            Price range: ₹500 - ₹10,000
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="bg-card p-4 rounded-lg border">
        <h3 className="font-semibold mb-4 flex items-center">
          Rating
          <ChevronDown className="h-4 w-4 ml-auto" />
        </h3>
        <div className="space-y-3">
          {[4, 3, 2].map((rating) => (
            <label key={rating} className="flex items-center space-x-3 cursor-pointer group">
              <input type="checkbox" className="rounded border-border" />
              <div className="flex items-center space-x-1">
                {[...Array(rating)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-warning rounded-sm" />
                ))}
                {[...Array(5 - rating)].map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-muted rounded-sm" />
                ))}
                <span className="text-sm ml-2 group-hover:text-primary transition-colors">
                  {rating}+ Stars
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Special Offers */}
      <div className="bg-card p-4 rounded-lg border">
        <h3 className="font-semibold mb-4">Special Offers</h3>
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input type="checkbox" className="rounded border-border" />
            <span className="text-sm group-hover:text-primary transition-colors">On Sale</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input type="checkbox" className="rounded border-border" />
            <span className="text-sm group-hover:text-primary transition-colors">Free Shipping</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input type="checkbox" className="rounded border-border" />
            <span className="text-sm group-hover:text-primary transition-colors">Bulk Discount</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;