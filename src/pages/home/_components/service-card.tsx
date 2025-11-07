import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <Card className="text-center transition-all duration-300 bg-white rounded-2xl border-0 max-w-[280px] mx-auto hover:scale-105 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
      <CardContent className="pt-8 pb-8 px-6 min-h-[320px] flex flex-col items-center justify-center">
        {/* Icon Circle */}
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#FFE5D9] flex items-center justify-center">
          <Icon className="w-9 h-10 text-[#FF6B35] stroke-[2.5]" />
        </div>

        {/* Title */}
        <h3 className="text-1xl font-bold text-gray-900 mb-4">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-[13px] leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
