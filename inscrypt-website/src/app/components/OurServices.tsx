'use client'

import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import ServiceCard from './ServiceCard'
import { Service } from '../types/Service'
import { services } from '../data/services'
import CTASection from './CTASection'

interface ServicesSectionProps {
  services: Service[]
  activeService: number
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services, activeService }) => {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
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