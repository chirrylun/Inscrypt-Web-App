import React from 'react';
import { motion } from 'framer-motion';

import { CiCircleChevRight } from "react-icons/ci"
import { Service } from '../types/Service';
import { services } from '../data/services';




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
    className={`relative p-6 bg-white shadow-xl rounded-lg overflow-hidden mb-12 transition-all duration-300 ease-in-out transform hover:scale-105 ${
      isActive ? 'ring-2 ring-indigo-500' : ''
    }`}
  >
    <div className={`absolute top-0 right-0 w-32 h-32 ${service.gradient} opacity-20 rounded-bl-full`}></div>
    <div className="relative z-10">
      <div className={`inline-flex p-3 rounded-full ${service.color} text-white mb-4`}>
        <service.icon className="h-8 w-8" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
      <p className="text-base text-gray-600 mb-4">{service.description}</p>
      <a href={service.link} className="inline-flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
        Learn more
        <CiCircleChevRight className="ml-2 h-5 w-5" />
      </a>
    </div>
    <div className={`absolute bottom-0 left-0 w-full h-1 ${service.gradient}`}></div>
  </motion.div>
  );
}