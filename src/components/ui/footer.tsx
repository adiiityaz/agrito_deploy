import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  CreditCard,
  Shield,
  Truck
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', href: '/about' },
      { name: 'Shop', href: '/shop' },
      { name: 'Categories', href: '/categories' },
      { name: 'Contact', href: '/contact' }
    ],
    'Customer Service': [
      { name: 'Help Center', href: '/help' },
      { name: 'Returns', href: '/returns' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Track Order', href: '/track' }
    ],
    'Categories': [
      { name: 'Seeds', href: '/category/seeds' },
      { name: 'Fertilizers', href: '/category/fertilizers' },
      { name: 'Tools', href: '/category/tools' },
      { name: 'Irrigation', href: '/category/irrigation' }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-48 translate-y-48"></div>
      </div>
      
      <div className="relative z-10">
      {/* Trust Badges Section */}
      <div className="border-b border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-4 group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Quality Assured</h4>
                <p className="text-sm text-white/80">100% genuine products</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Fast Delivery</h4>
                <p className="text-sm text-white/80">Quick nationwide shipping</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4 group hover:scale-105 transition-transform duration-300">
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Secure Payment</h4>
                <p className="text-sm text-white/80">Protected transactions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 text-2xl font-bold mb-6 group">
              <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <span className="font-poppins text-white">Agrito</span>
            </Link>
            <p className="text-white/80 mb-8 max-w-md leading-relaxed">
              Supporting farmers with premium agriculture products. From seeds to harvest, 
              we provide quality solutions for sustainable farming practices across India.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/90">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/90">support@agrito.com</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-white/20 p-2 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <span className="text-white/90">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-lg mb-6 text-white">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 mt-16 pt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-semibold text-xl mb-3 text-white">Stay Updated with Agrito</h4>
              <p className="text-white/80 leading-relaxed">
                Get the latest updates on new products, farming tips, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-primary hover:bg-white/90 font-semibold px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/70">
            © 2024 Agrito. All rights reserved. Made with ❤️ for farmers.
          </p>
          
          <div className="flex items-center gap-6">
            <span className="text-white/70 font-medium">Follow us:</span>
            <div className="flex gap-3">
              <Link to="#" className="bg-white/20 p-2 rounded-lg text-white hover:bg-white/30 transition-colors duration-300 group">
                <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link to="#" className="bg-white/20 p-2 rounded-lg text-white hover:bg-white/30 transition-colors duration-300 group">
                <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link to="#" className="bg-white/20 p-2 rounded-lg text-white hover:bg-white/30 transition-colors duration-300 group">
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link to="#" className="bg-white/20 p-2 rounded-lg text-white hover:bg-white/30 transition-colors duration-300 group">
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;