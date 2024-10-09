import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IconType } from 'react-icons';
import { FaArrowRight } from 'react-icons/fa';

interface Service {
  name: string;
  description: string;
  image: string;
  color: string;
  icon: IconType;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  isActive: boolean;
}

export default function ServiceCard({ service, index, isActive }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative bg-white shadow-xl rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 ${
        isActive ? 'ring-2 ring-indigo-500' : ''
      }`}
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:w-48"
            src={service.image}
            alt={service.name}
            width={192}
            height={192}
          />
        </div>
        <div className="p-8">
          <div className={`inline-flex p-3 rounded-full ${service.color} text-white mb-4`}>
            <service.icon className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
          <p className="mt-2 text-gray-600">{service.description}</p>
          <div className="mt-4">
            <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-500 transition duration-300 ease-in-out">
              Learn more
              <FaArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}