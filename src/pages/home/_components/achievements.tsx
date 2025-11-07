import { Card, CardContent } from "@/components/ui/card";

interface Achievement {
  id: number;
  number: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    number: "2",
    description: "Major Projects Completed",
  },
  {
    id: 2,
    number: "2",
    description: "Clients Served",
  },
  {
    id: 3,
    number: "2+",
    description: "Years of Team Experience",
  },
];

export default function Achievements() {
  return (
    <div className="py-12 md:py-32 bg-gray-100 -mx-5">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-32">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900">
          Our Achievements
        </h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {achievements.map(achievement => (
            <Card
              key={achievement.id}
              className="bg-white rounded-2xl border-0 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-8 text-center">
                {/* Number */}
                <h3 className="text-5xl md:text-6xl font-bold text-primary mb-4">
                  {achievement.number}
                </h3>

                {/* Description */}
                <p className="text-gray-900 font-semibold text-base md:text-lg">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
