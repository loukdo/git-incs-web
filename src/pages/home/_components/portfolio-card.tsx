import { Card, CardContent } from "@/components/ui/card";

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
}

export function PortfolioCard({ title, category, image }: PortfolioCardProps) {
  return (
    <Card className="overflow-hidden border-0 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <CardContent className="p-6 bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{category}</p>
      </CardContent>
    </Card>
  );
}
