import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "GIT Inc. transformed our digital presence with an outstanding web application. Their team is professional, innovative, and highly skilled. Truly a pleasure to work this is me when i am free time is that so the it so me hello hello hello hello hello",
    name: "Alice Chen",
    company: "Tech Innovators Co.",
  },
  {
    id: 2,
    quote:
      "The mobile app developed by GIT Inc. exceeded our expectations. It is incredibly user-friendly and has significantly boosted our customer engagement. Highly recommend their services.",
    name: "Robert Garcia",
    company: "Growth Ventures Ltd.",
  },
  {
    id: 3,
    quote:
      "Their cloud solutions streamlined our operations and improved our efficiency dramatically. GIT Inc. delivered beyond what we thought was possible.",
    name: "Sarah Kim",
    company: "Future Dynamics Corp.",
  },
];

export default function ClientsFeedback() {
  return (
    <div className="py-12 md:py-32 bg-gray-100 -mx-5">
      <div className="max-w-8xl mx-auto px-4 md:px-8 lg:px-32">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map(testimonial => (
            <Card
              key={testimonial.id}
              className="bg-white rounded-2xl border-0 transition-shadow duration-300"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-4">
                  <Quote className="w-10 h-10 text-black my-" />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 italic mb-6 leading-relaxed line-clamp-5 text-center px-4">
                  {testimonial.quote}
                </p>

                <div className="border-t border-gray-200 pt-4 text-center">
                  {/* Client Name */}
                  <p className="text-primary font-bold text-lg mb-1">
                    {testimonial.name}
                  </p>

                  {/* Company */}
                  <p className="text-gray-600 text-sm">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
