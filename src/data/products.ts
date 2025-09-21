// Product data for Agrito e-commerce
import wheatSeedsImg from "@/assets/product-wheat-seeds.jpg";
import tomatoSeedsImg from "@/assets/product-tomato-seeds.jpg";
import basmatiRiceImg from "@/assets/product-basmati-rice.jpg";
import neemFertilizerImg from "@/assets/product-neem-fertilizer.jpg";
import gardenToolsImg from "@/assets/product-garden-tools.jpg";
import irrigationKitImg from "@/assets/product-irrigation-kit.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  discount?: number;
  badge?: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "wheat-seeds-5kg",
    name: "Organic Wheat Seeds - 5kg Bag",
    price: 999,
    originalPrice: 1199,
    image: wheatSeedsImg,
    category: "Seeds",
    description: "Premium quality organic wheat seeds with high germination rate. Perfect for sustainable farming practices.",
    inStock: true,
    rating: 4.8,
    reviews: 124,
    discount: 17,
    badge: "Bestseller",
    features: ["High germination rate", "Organic certified", "Disease resistant", "Premium quality"]
  },
  {
    id: "tomato-seeds-100g",
    name: "Hybrid Tomato Seeds - 100g Pack",
    price: 649,
    originalPrice: 799,
    image: tomatoSeedsImg,
    category: "Seeds",
    description: "High-yield hybrid tomato seeds producing large, juicy tomatoes. Suitable for both greenhouse and open field cultivation.",
    inStock: true,
    rating: 4.6,
    reviews: 89,
    discount: 19,
    badge: "20% OFF",
    features: ["High yield variety", "Disease resistant", "Large fruit size", "Hybrid seeds"]
  },
  {
    id: "basmati-rice-10kg",
    name: "Premium Basmati Rice - 10kg",
    price: 1899,
    image: basmatiRiceImg,
    category: "Grains",
    description: "Aromatic premium basmati rice with long grains and exceptional taste. Aged to perfection for enhanced flavor.",
    inStock: true,
    rating: 4.9,
    reviews: 256,
    features: ["Aged rice", "Long grains", "Premium quality", "Aromatic"]
  },
  {
    id: "neem-fertilizer-2kg",
    name: "Neem Fertilizer Cake - 2kg",
    price: 750,
    originalPrice: 900,
    image: neemFertilizerImg,
    category: "Fertilizers",
    description: "100% organic neem cake fertilizer that enriches soil and provides natural pest control. Eco-friendly solution for healthy crops.",
    inStock: true,
    rating: 4.7,
    reviews: 178,
    discount: 17,
    badge: "Organic",
    features: ["100% organic", "Natural pest control", "Soil enrichment", "Eco-friendly"]
  },
  {
    id: "garden-tools-5pc",
    name: "Garden Tool Set (5 pcs)",
    price: 2499,
    originalPrice: 2999,
    image: gardenToolsImg,
    category: "Tools",
    description: "Complete garden tool set including spade, hoe, rake, pruner, and hand trowel. Made with durable materials for long-lasting use.",
    inStock: true,
    rating: 4.5,
    reviews: 92,
    discount: 17,
    badge: "Complete Set",
    features: ["5-piece set", "Durable materials", "Ergonomic design", "Multi-purpose"]
  },
  {
    id: "irrigation-kit-100m",
    name: "Drip Irrigation Kit (100m Pipe + Fittings)",
    price: 3499,
    originalPrice: 4199,
    image: irrigationKitImg,
    category: "Irrigation",
    description: "Complete drip irrigation system with 100m pipe and all necessary fittings. Water-efficient solution for modern farming.",
    inStock: true,
    rating: 4.8,
    reviews: 67,
    discount: 17,
    badge: "Water Saving",
    features: ["Complete system", "Water efficient", "Easy installation", "100m coverage"]
  }
];

export const categories = [
  { id: "seeds", name: "Seeds", count: 45 },
  { id: "fertilizers", name: "Fertilizers", count: 32 },
  { id: "tools", name: "Tools", count: 28 },
  { id: "irrigation", name: "Irrigation", count: 19 },
  { id: "grains", name: "Grains", count: 15 },
  { id: "organic", name: "Organic", count: 38 }
];

export const featuredProducts = products.slice(0, 4);
export const newArrivals = products.slice(2, 6);