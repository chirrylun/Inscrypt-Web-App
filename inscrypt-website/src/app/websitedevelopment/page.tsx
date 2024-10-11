'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaMobileAlt, FaShoppingCart, FaSearch, FaPencilRuler, FaRocket, FaLaptopCode, FaServer, FaQuoteLeft } from 'react-icons/fa'
import { CiCircleChevRight } from 'react-icons/ci'
import Header from '../components/Header'
import Footer from '../components/Footer'

const services = [
  { 
    icon: FaLaptopCode, 
    title: 'Custom Web Development', 
    description: 'Tailored solutions to meet your unique business needs. We create scalable, high-performance websites that drive results.',
    features: ['Responsive design', 'Custom CMS integration', 'API development', 'Performance optimization']
  },
  { 
    icon: FaMobileAlt, 
    title: 'Mobile-First Development', 
    description: 'Ensure your website looks and functions flawlessly on all devices with our mobile-first approach.',
    features: ['Progressive Web Apps (PWA)', 'Touch-friendly interfaces', 'Optimized loading times', 'Cross-platform compatibility']
  },
  { 
    icon: FaShoppingCart, 
    title: 'E-commerce Solutions', 
    description: 'Build powerful online stores that drive sales and provide seamless shopping experiences.',
    features: ['Secure payment gateways', 'Inventory management', 'Customer account portals', 'Order tracking systems']
  },
  { 
    icon: FaServer, 
    title: 'Backend Development', 
    description: 'Robust server-side solutions to power your web applications and handle complex business logic.',
    features: ['Database design', 'API development', 'Cloud integration', 'Scalable architecture']
  },
]

const process = [
  { icon: FaPencilRuler, title: 'Discovery & Planning', description: 'We analyze your needs, define project scope, and create a detailed roadmap.' },
  { icon: FaCode, title: 'Development', description: 'Our expert team brings your vision to life with clean, efficient, and scalable code.' },
  { icon: FaSearch, title: 'Testing & Refinement', description: 'Rigorous testing ensures a flawless user experience across all devices and browsers.' },
  { icon: FaRocket, title: 'Launch & Support', description: 'We deploy your site, provide training, and offer ongoing support and maintenance.' },
]

const testimonials = [
  {
    quote: "Working with Inscrypt was a blast. It's hard to imagine how i ever survived handling my business manually. Their eccomerce solution has worked wonders for my peace of mind.",
    author: "Adebanji Oluwalani",
    position: "CEO of AffordablesGh"
  },
  {
    quote: "Very good customer service. Their team was available to carry me along every step of the way. Keep it up",
    author: "Prof. Atinuke Olusola",
    position: "Head of Department, Statistics, KNUST"
  },
  {
    quote: "The team at Inscrypt really understood what we wanted without us having to say much. Our new website looks and feels premium. 5 stars guys",
    author: "Adedayo Micheal",
    position: "Marketing Director at Melula"
  }
]

export default function WebDevelopmentServices() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const processRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (servicesRef.current) {
      Array.from(servicesRef.current.children).forEach((child) => {
        observer.observe(child)
      })
    }

    if (processRef.current) {
      Array.from(processRef.current.children).forEach((child) => {
        observer.observe(child)
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-indigo-50 transform -skew-y-6"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-100 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Web Development Services
            </motion.h1>
            <motion.p 
              className="mt-4 max-w-3xl mx-auto text-xl text-gray-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Elevate your online presence with our cutting-edge web solutions. We craft powerful, scalable, and user-friendly websites tailored to your business needs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Our Expertise</span>
              <span className="block text-indigo-600 mt-2">Comprehensive Web Solutions</span>
            </h2>
          </div>

          <div ref={servicesRef} className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white overflow-hidden shadow-xl rounded-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform opacity-0 translate-y-10 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 relative h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-100 rounded-bl-full"></div>
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                    <service.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base text-gray-500 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CiCircleChevRight className="mr-2 text-indigo-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Our Development Process</span>
              <span className="block text-indigo-600 mt-2">From Concept to Launch</span>
            </h2>
          </div>

          <div ref={processRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <motion.div 
                key={step.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform opacity-0 translate-y-10 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4 mx-auto">
                  <step.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {step.title}
                </h3>
                <p className="text-base text-gray-500 text-center">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to elevate your web presence?</span>
            <span className="block text-indigo-600">Let&apos;s start your project today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
                <CiCircleChevRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-indigo-700 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-xl p-8 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <FaQuoteLeft className="text-indigo-200 text-4xl absolute top-4 left-4 opacity-50" />
                <p className="text-gray-600 mb-4 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.author[0]}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  )
}