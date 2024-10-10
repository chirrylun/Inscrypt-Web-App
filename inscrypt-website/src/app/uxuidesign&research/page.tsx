'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaPaintBrush, FaUsers, FaMobileAlt, FaDesktop, FaChartLine, FaLightbulb, FaPencilRuler, FaEye } from 'react-icons/fa'
import { CiCircleChevRight } from 'react-icons/ci'
import Header from '../components/Header'
import Footer from '../components/Footer'

const services = [
  { 
    icon: FaPaintBrush, 
    title: 'UI Design', 
    description: 'Create visually stunning and intuitive user interfaces that captivate your audience.',
    features: ['Custom icon design', 'Color palette selection', 'Typography optimization', 'Visual hierarchy']
  },
  { 
    icon: FaUsers, 
    title: 'UX Research', 
    description: "Understand your users' needs and behaviors to create products that truly resonate.",
    features: ['User interviews', 'Usability testing', 'Persona development', 'Journey mapping']
  },
  { 
    icon: FaMobileAlt, 
    title: 'Mobile-First Design', 
    description: 'Ensure your digital products shine on every device, starting with mobile.',
    features: ['Responsive layouts', 'Touch-friendly interfaces', 'Performance optimization', 'Cross-device consistency']
  },
  { 
    icon: FaDesktop, 
    title: 'Web Design', 
    description: 'Craft engaging web experiences that keep users coming back.',
    features: ['Responsive web design', 'Interactive prototypes', 'Accessibility compliance', 'Cross-browser compatibility']
  },
]

const process = [
  { icon: FaLightbulb, title: 'Discovery', description: 'We dive deep into your brand, users, and goals to inform our design strategy.' },
  { icon: FaPencilRuler, title: 'Wireframing', description: 'We create low-fidelity layouts to establish the core structure of your product.' },
  { icon: FaPaintBrush, title: 'Visual Design', description: 'We bring your product to life with color, typography, and engaging visuals.' },
  { icon: FaEye, title: 'User Testing', description: 'We validate our designs with real users to ensure an optimal experience.' },
]

const featureShowcase = [
  { 
    icon: FaUsers, 
    title: 'User-Centered Approach', 
    description: 'We put your users at the heart of every design decision.',
    detail: 'Our designs are built on a foundation of user research and testing.'
  },
  { 
    icon: FaPaintBrush, 
    title: 'Aesthetic Excellence', 
    description: 'We create visually stunning designs that elevate your brand.',
    detail: 'Our designers blend creativity with strategic thinking for impactful results.'
  },
  { 
    icon: FaChartLine, 
    title: 'Data-Driven Design', 
    description: 'We use analytics and user feedback to continuously improve our designs.',
    detail: 'Our iterative process ensures your product evolves with user needs.'
  },
]

export default function UXUIDesign() {
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
              UX/UI Design Excellence
            </motion.h1>
            <motion.p 
              className="mt-4 max-w-3xl mx-auto text-xl text-gray-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting intuitive and visually stunning interfaces that delight users and drive engagement.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Our UX/UI Design Services</span>
              <span className="block text-indigo-600 mt-2">Tailored Solutions for Every Platform</span>
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

      {/* Design Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Our Design Process</span>
              <span className="block text-indigo-600 mt-2">From Concept to Pixel-Perfect Design</span>
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

      {/* Feature Showcase Section */}
      <section className="bg-indigo-700 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">
            The Inscrypt Design Advantage
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {featureShowcase.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="text-5xl text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <p className="text-sm text-indigo-600">{feature.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to elevate your digital experience?</span>
            <span className="block text-indigo-600">Let's start your UX/UI design project today.</span>
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

      <Footer/>
    </div>
  )
}