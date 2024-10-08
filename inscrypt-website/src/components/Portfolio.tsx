'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image'

interface PortfolioItemProps {
  name: string;
  category: string;
  image: string;
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ name, category, image, index }) => (
  <div 
    className="group opacity-0 translate-y-10 transition-all duration-500 ease-in-out transform"
    style={{ transitionDelay: `${index * 100}ms` }}
  >
    <div className="relative w-full h-64 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
      />
    </div>
    <h3 className="mt-4 text-sm text-gray-700">{name}</h3>
    <p className="mt-1 text-lg font-medium text-gray-900">{category}</p>
  </div>
)

export default function Portfolio() {
  const projects = [
    { name: 'Up.Board', category: 'Consultancy Agency', image: '/images/Screen1.jpg' },
    { name: 'Munchies', category: 'Restaurant', image: '/images/Screen3.jpg' },
    { name: 'BlueRidge', category: 'Hotels & Resorts', image: '/images/Screen4.jpg' },
    { name: 'Melula', category: 'Fashion & E-commerce', image: '/images/Screen2.jpg' },
  ]

  const portfolioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (portfolioRef.current) {
      Array.from(portfolioRef.current.children).forEach((child) => {
        observer.observe(child);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="bg-white font-sans py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Our Works</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Featured Projects
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Check out some of our recent work that showcases our expertise and creativity.
          </p>
        </div>
        <div ref={portfolioRef} className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {projects.map((project, index) => (
            <PortfolioItem key={project.name} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}