'use client'

import React, { useState, useEffect } from 'react'
import { Monitor, Smartphone, PenTool, Users, LucideIcon } from 'lucide-react'
import Footer from './Footer'

import CTASection from './CTASection'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface Service {
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  image: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  isActive: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isActive }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative p-6 bg-white shadow-xl rounded-lg overflow-hidden mb-12 ${
        isActive ? 'ring-2 ring-indigo-500' : ''
      }`}
    >
      <div className="md:flex md:items-center">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:w-64 rounded-lg"
            src={service.image}
            alt={service.name}
            width={256}
            height={192}
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-6">
          <div className={`inline-flex p-3 rounded-full ${service.color} text-white mb-4`}>
            <service.icon className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
          <p className="mt-3 text-base text-gray-500">{service.description}</p>
          <div className="mt-4">
            <a href="#" className="inline-flex items-center text-indigo-600 hover:text-indigo-500">
              Learn more
              <Users className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

interface ServicesSectionProps {
  services: Service[];
  activeService: number;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services, activeService }) => {
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
  )
}

const services: Service[] = [
  {
    name: "Website Design & Development",
    description: "We create stunning, responsive websites that captivate your audience and drive results.",
    icon: Monitor,
    color: "bg-blue-500",
    image: "/images/woman-working-laptop.jpg",
  },
  {
    name: "Mobile Application Development",
    description: "Extend your reach with custom mobile apps that engage users on the go.",
    icon: Smartphone,
    color: "bg-green-500",
    image: "/images/mobile-app.jpg",
  },
  {
    name: "UX/UI Design & Research",
    description: "Our user-centric approach combines aesthetics with functionality for optimal user experiences.",
    icon: PenTool,
    color: "bg-purple-500",
    image: "/images/people-working-marketing-agency.jpg",
  },
  {
    name: "In-house Tech Team",
    description: "Benefit from our dedicated team of experts who collaborate seamlessly to bring your project to fruition.",
    icon: Users,
    color: "bg-red-500",
    image: "/images/3836169.jpg",
  },
]

const OurServices: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <main>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Elevate your digital presence with our comprehensive suite of services
            </p>
          </div>

          <ServicesSection services={services} activeService={activeService} />
          
          <CTASection />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default OurServices