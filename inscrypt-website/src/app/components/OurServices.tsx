'use client'

import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import { CiCircleChevRight } from "react-icons/ci"
import { IoIosDesktop } from "react-icons/io"
import { CiMobile1 } from "react-icons/ci"
import { BsPalette2 } from "react-icons/bs"
import { RiTeamFill } from "react-icons/ri"
import { IconType } from 'react-icons'
import CTASection from './CTASection'
import { motion } from 'framer-motion'

interface Service {
  name: string
  description: string
  icon: IconType
  color: string
  gradient: string
  link: string
}

interface ServiceCardProps {
  service: Service
  index: number
  isActive: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isActive }) => {
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
  )
}

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

const services: Service[] = [
  {
    name: "Website Design & Development",
    description: "We create stunning, responsive websites that captivate your audience and drive results.",
    icon: IoIosDesktop,
    color: "bg-indigo-600",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    link: "/websitedevelopment"
  },
  {
    name: "Mobile Application Development",
    description: "Extend your reach with custom mobile apps that engage users on the go.",
    icon: CiMobile1,
    color: "bg-blue-600",
    gradient: "bg-gradient-to-br from-blue-500 to-teal-400",
    link: "/mobileappdevelopment"
  },
  {
    name: "UX/UI Design & Research",
    description: "Our user-centric approach combines aesthetics with functionality for optimal user experiences.",
    icon: BsPalette2,
    color: "bg-indigo-600",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    link: "/uxuidesign&research"
  },
  {
    name: "In-house Tech Team",
    description: "Benefit from our dedicated team of experts who collaborate seamlessly to bring your project to fruition.",
    icon: RiTeamFill,
    color: "bg-blue-600",
    gradient: "bg-gradient-to-br from-blue-500 to-teal-400",
    link: "/inhousetechteam"
  },
  {
    name: "Digital Marketing",
    description: "Get your brand in front of your potential customers the right way with a dedicated team of experts.",
    icon: RiTeamFill,
    color: "bg-indigo-600",
    gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
    link: "/digitalmarketing"
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