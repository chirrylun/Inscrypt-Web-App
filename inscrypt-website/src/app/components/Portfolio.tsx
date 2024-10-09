'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CiCircleChevRight } from "react-icons/ci"

interface PortfolioItemProps {
  name: string
  category: string
  image: string
  index: number
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ name, category, image, index }) => (
  <div 
    className="group opacity-0 translate-y-10 transition-all duration-500 ease-in-out transform"
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Image
        src={image}
        alt={name}
        fill
        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
        className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm text-white">{category}</p>
      </div>
    </div>
  </div>
)

export default function Portfolio() {
  const projects = [
    { name: 'Up.Board', category: 'Consultancy Agency', image: '/images/Screen1.jpg' },
    { name: 'Munchies', category: 'Restaurant', image: '/images/Screen3.jpg' },
    { name: 'BlueRidge', category: 'Hotels & Resorts', image: '/images/Screen4.jpg' },
    { name: 'Melula', category: 'Fashion & E-commerce', image: '/images/Screen2.jpg' },
    { name: 'Sweeftly', category: 'E-commerce Startup', image: '/images/Screen6.jpg' },
  ]

  const portfolioRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (portfolioRef.current) {
      Array.from(portfolioRef.current.children).forEach((child) => {
        observer.observe(child)
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white font-sans py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/subtle-dots.png')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-pink-500 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Works</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Featured Projects
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Check out some of our recent work that showcases our expertise and creativity.
          </p>
        </div>
        
        <div ref={portfolioRef} className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          {projects.map((project, index) => (
            <PortfolioItem key={project.name} {...project} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out shadow-sm hover:shadow-md"
          >
            View All Projects
            <CiCircleChevRight className="ml-2" size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}