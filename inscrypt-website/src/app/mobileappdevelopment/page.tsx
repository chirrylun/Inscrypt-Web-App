'use client'
import { IoIosDesktop } from "react-icons/io"
import { CiMobile1 } from "react-icons/ci"

import { RiTeamFill } from "react-icons/ri"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaAndroid, FaApple, FaCode, FaRocket, FaCog, FaPaintBrush } from 'react-icons/fa'
import { LuMegaphone } from "react-icons/lu";
import { CiCircleChevRight } from 'react-icons/ci'
import Header from '../components/Header'
import Footer from '../components/Footer'

const services = [
  { 
    icon: FaAndroid, 
    title: 'Android App Development', 
    description: 'Create powerful and user-friendly Android applications that reach a wide audience.',
    features: ['Native Android development', 'Material Design', 'Google Play Store optimization', 'Integration with Android ecosystem']
  },
  { 
    icon: FaApple, 
    title: 'iOS App Development', 
    description: 'Develop sleek and high-performance iOS apps that provide an exceptional user experience.',
    features: ['Swift programming', 'iOS UI/UX best practices', 'App Store optimization', 'iCloud integration']
  },
  { 
    icon: FaCode, 
    title: 'Cross-Platform Development', 
    description: 'Build apps that work seamlessly across multiple platforms, saving time and resources.',
    features: ['React Native', 'Flutter', 'Xamarin', 'Code reusability']
  },
  { 
    icon: FaCog, 
    title:  'App Maintenance & Support', 
    description: 'Ensure your app stays up-to-date and runs smoothly with our ongoing maintenance services.',
    features: ['Regular updates', 'Bug fixes', 'Performance optimization', '24/7 support']
  },
]

const process = [
  { icon: CiMobile1, title: 'Ideation & Planning', description: 'We work with you to refine your app idea and create a comprehensive development plan.' },
  { icon: FaCode, title: 'Design & Development', description: 'Our team designs intuitive interfaces and develops robust, scalable app architecture.' },
  { icon: RiTeamFill, title: 'Testing & Quality Assurance', description: 'Rigorous testing ensures your app is bug-free and performs optimally across all devices.' },
  { icon: FaRocket, title: 'Launch & Marketing', description: 'We assist with app store submissions and provide strategies to maximize your visibility.' },
]

const featureShowcase = [
  { 
    icon: FaPaintBrush, 
    title: 'Intuitive UI/UX', 
    description: 'Our designs focus on user-centric experiences, ensuring your app is both beautiful and easy to use.',
    detail: 'We craft interfaces that users love, combining aesthetics with functionality.'
  },
  { 
    icon: FaCode, 
    title: 'Robust Architecture', 
    description: 'We build apps with scalable, maintainable code that can grow with your business.',
    detail: 'Our tech stack is chosen to provide optimal performance and flexibility.'
  },
  { 
    icon: LuMegaphone, 
    title: 'Marketing Integration', 
    description: 'We bake in features that make your app marketable from day one.',
    detail: 'From social sharing to analytics, we set your app up for success.'
  },
]

export default function MobileAppDevelopment() {
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
              Mobile App Development
            </motion.h1>
            <motion.p 
              className="mt-4 max-w-3xl mx-auto text-xl text-gray-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform your ideas into powerful, user-friendly mobile applications. We create innovative apps that engage users and drive business growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Our Mobile App Services</span>
              <span className="block text-indigo-600 mt-2">Comprehensive Solutions for Every Platform</span>
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
              <span className="block">Our App Development Process</span>
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

      {/* Feature Showcase Section */}
      <section className="bg-indigo-700 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white text-center mb-12">
            The Inscrypt Difference
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
            <span className="block">Ready to bring your app idea to life?</span>
            <span className="block text-indigo-600">Let&apos;s start your mobile app project today.</span>
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