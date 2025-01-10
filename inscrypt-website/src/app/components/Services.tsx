'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import Link from "next/link"
import { motion, useAnimation } from 'framer-motion'
import { CiCircleChevRight } from "react-icons/ci"
import { IconType } from "react-icons"
import { FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa'
import { Service } from '../types/Service'
import { services } from '../data/services'

const languages = [
  { name: "Javascript", image: "/images/js_5968292.png" },
  { name: "HTML", image: "/images/html-5_5968267.png" },
  { name: "React", image: "/images/physics_753244.png" },
  { name: "Figma", image: "/images/figma_5968705.png" },
  { name: "Wordpress", image: "/images/social_16021409.png" },
  { name: "Ai Proficiency", image: "/images/neural_11772943.png" },
]

interface CreativeContent {
  icon: IconType;
  title: string;
  description: string;
}

const creativeContent: CreativeContent[] = [
  { icon: FaLightbulb, title: 'Innovative Solutions', description: 'We bring fresh ideas to every project' },
  { icon: FaRocket, title: 'Rapid Development', description: 'Fast-paced, efficient project delivery' },
  { icon: FaUsers, title: 'Client-Centric Approach', description: 'Your vision, our expertise' },
]

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const seamlessRef = useRef<HTMLDivElement>(null)
  const creativeContentRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (servicesRef.current) {
      Array.from(servicesRef.current.children).forEach((child) => {
        if (child instanceof HTMLElement) {
          observer.observe(child)
        }
      })
    }

    if (seamlessRef.current) {
      observer.observe(seamlessRef.current)
    }

    if (creativeContentRef.current) {
      observer.observe(creativeContentRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const creativeContentObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start('visible')
            creativeContentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (creativeContentRef.current) {
      creativeContentObserver.observe(creativeContentRef.current)
    }

    return () => {
      creativeContentObserver.disconnect()
    }
  }, [controls])

  return (
    <div className="font-sans bg-gradient-to-b from-gray-50 to-white py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-indigo-50 transform -skew-y-6"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-100 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            <span className="block">Our Services</span>
            <span className="block text-indigo-600 mt-2">Elevating Your Digital Presence</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We specialize in crafting digital experiences that transform your brand and drive growth.
          </p>
        </div>

        <div ref={servicesRef} className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
          {services.map((service: Service, index: number) => (
            <div
              key={service.name}
              className={`bg-white overflow-hidden shadow-xl rounded-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform opacity-0 translate-y-10 hover:-translate-y-1 ${
                index === 4 ? 'md:col-span-3 lg:col-span-1' : ''
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-6 relative h-full flex flex-col">
                <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-100 rounded-bl-full"></div>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-base text-gray-500 mb-4 flex-grow">
                  {service.description}
                </p>
                <Link href={service.link} className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition duration-300 mt-auto">
                  Learn more <CiCircleChevRight className='ml-2' size={24}/>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/#quick-contact"
            className="inline-flex font-sans items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            Get Started
            <CiCircleChevRight className='ml-2' size={24}/>
          </Link>
        </div>
      </div>

      <div className="bg-white mt-32">
        <div ref={seamlessRef} className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-100 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:mt-0 relative z-10">
              <div className="prose prose-indigo prose-lg text-gray-500 mx-auto lg:max-w-none">
                <p className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                  Seamless Experience
                </p>
                <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  We deliver seamless websites built around your brand.
                </h2>
                <p className="mt-4 text-xl text-gray-500">
                  At Inscrypt, we specialize in crafting digital experiences that
                  elevate your brand. Our comprehensive suite of services ensures
                  your project receives expert attention from concept to launch.
                </p>

                <div className="mt-10 flex flex-wrap gap-6">
                  {languages.map((lang) => (
                    <div key={lang.name} className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
                      <Image
                        src={lang.image}
                        width={24}
                        height={24}
                        alt={`${lang.name} icon`}
                      />
                      <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Link
                    href="/#quick-contact"
                    className="inline-flex px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out"
                  >
                    Start a project
                    <CiCircleChevRight className='ml-2' size={24}/>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Creative Content for Smaller Screens */}
            <div className="mt-12 lg:mt-0 lg:ml-8 relative">
              <div className="lg:hidden">
                <motion.div
                  ref={creativeContentRef}
                  animate={controls}
                  initial="hidden"
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 50 }
                  }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-indigo-700 rounded-lg p-6 text-white relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600 rounded-full opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {creativeContent.map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center text-center"
                      >
                        <item.icon className="text-3xl mb-2" />
                        <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-indigo-200">{item.description}</p>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="col-span-2 mt-4 bg-white bg-opacity-10 rounded-lg p-4"
                    >
                      <p className="font-sans font-bold text-4xl">25+</p>
                      <p className="font-sans font-medium text-sm mt-1">Projects completed</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Image for Larger Screens */}
              <div className="hidden lg:block aspect-w-5 aspect-h-3 rounded-xl overflow-hidden shadow-2xl sm:aspect-w-3 sm:aspect-h-2">
                <Image
                  src="/images/people-office-work-day.jpg"
                  alt="Seamless experience illustration"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-pink-400 mix-blend-multiply opacity-20"></div>
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">Explore Our Work</span>
                </div>
              </div>
              <div className="hidden lg:block absolute -bottom-4 -right-4 w-32 h-32 bg-pink-100 rounded-full opacity-50"></div>
              <div className="hidden lg:block absolute top-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg transform rotate-3 transition-transform duration-300 hover:rotate-0">
                <p className="font-sans font-bold text-4xl text-indigo-600">25+</p>
                <p className="font-sans font-medium text-sm mt-1 text-gray-700">Projects</p>
                <p className="font-sans font-medium text-sm text-gray-700">completed</p>
              </div>
              <div className="hidden lg:block absolute -left-4 top-1/2 transform -translate-y-1/2">
                <div className="bg-white rounded-full p-2 shadow-lg">
                  <div className="bg-indigo-600 rounded-full p-2">
                    <CiCircleChevRight className="text-white" size={32} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}