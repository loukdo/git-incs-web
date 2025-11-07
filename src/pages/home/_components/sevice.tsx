import React from "react";
import { ServiceCard } from "./service-card";
import {
  Monitor,
  Smartphone,
  Cloud,
  Palette,
  Code,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "Crafting responsive, high-performance web applications tailored to your business needs",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Building native and cross-platform mobile apps that deliver seamless user experiences",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud infrastructure to power your digital transformation",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating captivating and intuitive designs that engage and delight your users",
  },
  {
    icon: Code,
    title: "Maintenance & Support",
    description:
      "Developing bespoke software solutions that solve your unique business challenges",
  },
];

export default function Service() {
  return (
    <div className="py-20 bg-gray-secondary -mx-5">
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Our Services
        </h2>

        {/* Center all cards in one row */}
        <div className="flex justify-center flex-wrap gap-8">
          {services.map(service => (
            <div key={service.title} className="w-[300px]">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
