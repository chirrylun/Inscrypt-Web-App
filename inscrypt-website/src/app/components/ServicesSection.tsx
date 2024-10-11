'use client'

import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { Service } from '../types/Service';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';


export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const seamlessRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (servicesRef.current) {
      Array.from(servicesRef.current.children).forEach((child) => {
        observer.observe(child);
      });
    }

    if (seamlessRef.current) {
      observer.observe(seamlessRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We specialize in crafting digital experiences that elevate your brand.
          </p>
        </div>

        <div ref={servicesRef} className="mt-16 space-y-12">
          {services.map((service : Service, index : number) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
              isActive={activeService === index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#quick-contact"
            className="inline-flex font-sans items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </div>
      </div>

      
    </div>
  );
}