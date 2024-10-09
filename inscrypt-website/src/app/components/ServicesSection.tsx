import React from "react";
import ServiceCard from "./ServiceCard";
import {  LucideIcon } from 'lucide-react';

interface Service {
  name: string;
  image: string;
  color: string;
  icon: LucideIcon;
  description: string;
}

interface ServicesSectionProps {
  services: Service[];
  activeService: number;
}

export default function ServicesSection({
  services,
  activeService,
}: ServicesSectionProps) {
  return (
    <div className="mt-20">
      {services.map((service, index) => (
        <ServiceCard
          key={service.name}
          service={service}
          index={index}
          isActive={activeService === index}
        />
      ))}
    </div>
  );
}
