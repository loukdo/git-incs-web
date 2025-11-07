import { useState } from "react";
import { PortfolioCard } from "./portfolio-card";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Picasso City Garden",
    category: "UX/UI Design",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Xtreme 4x4 Cambodia",
    category: "Marketing and Advertising",
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&h=400&fit=crop",
  },
  {
    id: 3,
    title: "EcoGarden Living",
    category: "UX/UI Design",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    category: "Website Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Brand Identity Design",
    category: "Marketing and Advertising",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Mobile Banking App",
    category: "UX/UI Design",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop",
  },
  {
    id: 7,
    title: "Corporate Website",
    category: "Website Development",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Lead Magnet Campaign",
    category: "Lead Generation",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
  },
  {
    id: 9,
    title: "SEO Optimization Project",
    category: "SEO/SEM",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=500&h=400&fit=crop",
  },
];

const categories = [
  { name: "All", count: portfolioData.length },
  {
    name: "UX/UI Design",
    count: portfolioData.filter(item => item.category === "UX/UI Design")
      .length,
  },
  {
    name: "Website Development",
    count: portfolioData.filter(item => item.category === "Website Development")
      .length,
  },
  {
    name: "Marketing and Advertising",
    count: portfolioData.filter(
      item => item.category === "Marketing and Advertising"
    ).length,
  },
  {
    name: "Lead Generation",
    count: portfolioData.filter(item => item.category === "Lead Generation")
      .length,
  },
  {
    name: "SEO/SEM",
    count: portfolioData.filter(item => item.category === "SEO/SEM").length,
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPortfolio =
    activeCategory === "All"
      ? portfolioData
      : portfolioData.filter(item => item.category === activeCategory);

  return (
    <div className="py-12 md:py-20 bg-white -mx-5">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-32">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
          Our Portfolio
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-12">
          {categories.map(category => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                activeCategory === category.name
                  ? "bg-[#FF6B35] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name} {category.name !== "All" && `(${category.count})`}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPortfolio.map(item => (
            <PortfolioCard
              key={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
