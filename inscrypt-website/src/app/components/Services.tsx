'use client'

import { useEffect, useRef } from 'react'
import Image from "next/image"
import Link from "next/link"
import { IoIosDesktop } from "react-icons/io"
import { CiMobile1 } from "react-icons/ci"
import { BsPalette2 } from "react-icons/bs"
import { RiTeamFill } from "react-icons/ri"
import { CiCircleChevRight } from "react-icons/ci"

const services = [
  {
    name: "Website Design & Development",
    description: "We create stunning, responsive websites that captivate your audience and drive results.",
    icon: IoIosDesktop,
  },
  {
    name: "Mobile Application Development",
    description: "Extend your reach with custom mobile apps that engage users on the go.",
    icon: CiMobile1,
  },
  {
    name: "UX/UI Design & Research",
    description: "Our user-centric approach combines aesthetics with functionality for optimal user experiences.",
    icon: BsPalette2,
  },
  {
    name: "In-house Tech Team",
    description: "Benefit from our dedicated team of experts who collaborate seamlessly to bring your project to fruition.",
    icon: RiTeamFill,
  },
]

const languages = [
  { name: "Javascript", image: "/images/js_5968292.png" },
  { name: "HTML", image: "/images/html-5_5968267.png" },
  { name: "React", image: "/images/physics_753244.png" },
  { name: "Figma", image: "/images/figma_5968705.png" },
  { name: "Wordpress", image: "/images/social_16021409.png" },
]

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null)
  const seamlessRef = useRef<HTMLDivElement>(null)

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

    if (seamlessRef.current) {
      observer.observe(seamlessRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

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

        <div ref={servicesRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="bg-white overflow-hidden shadow-xl rounded-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform opacity-0 translate-y-10 hover:-translate-y-1"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-100 rounded-bl-full"></div>
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                  <service.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-base text-gray-500 mb-4">
                  {service.description}
                </p>
                <Link href="#" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center transition duration-300">
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
        <div ref={seamlessRef} className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 opacity-0 translate-y-10 transition-all duration-1000 ease-in-out relative">
          <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-100 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
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
          <div className="mt-12 lg:mt-0 lg:ml-8 relative">
            <div className="aspect-w-5 aspect-h-3 rounded-xl overflow-hidden shadow-2xl sm:aspect-w-3 sm:aspect-h-2">
              <Image
                src="/images/people-office-work-day.jpg"
                alt="Seamless experience illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
              <div className="absolute rounded-lg inset-0 bg-gradient-to-tr from-indigo-600 to-pink-400 mix-blend-multiply opacity-20"></div>
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
                <p className="font-sans font-bold text-4xl text-indigo-600">40+</p>
                <p className="font-sans font-medium text-sm mt-1 text-gray-700">Projects</p>
                <p className="font-sans font-medium text-sm text-gray-700">completed</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  )
}