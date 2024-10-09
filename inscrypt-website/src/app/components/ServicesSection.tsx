'use client'

import { useEffect, useRef, useState } from 'react';
import { FaDesktop, FaMobileAlt, FaPencilRuler, FaUsers } from 'react-icons/fa';
import { IoIosDesktop } from "react-icons/io";
import { CiMobile1 } from "react-icons/ci";
import { BsPalette2 } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from './ServiceCard';

const services = [
  {
    name: "Website Design & Development",
    description: "We create stunning, responsive websites that captivate your audience and drive results.",
    icon: IoIosDesktop,
    image: "/images/website-design.jpg",
    color: "bg-blue-500",
  },
  {
    name: "Mobile Application Development",
    description: "Extend your reach with custom mobile apps that engage users on the go.",
    icon: CiMobile1,
    image: "/images/mobile-app.jpg",
    color: "bg-green-500",
  },
  {
    name: "UX/UI Design & Research",
    description: "Our user-centric approach combines aesthetics with functionality for optimal user experiences.",
    icon: BsPalette2,
    image: "/images/ux-ui-design.jpg",
    color: "bg-purple-500",
  },
  {
    name: "In-house Tech Team",
    description: "Benefit from our dedicated team of experts who collaborate seamlessly to bring your project to fruition.",
    icon: RiTeamFill,
    image: "/images/tech-team.jpg",
    color: "bg-red-500",
  },
];

const languages = [
  { name: "Javascript", image: "/images/js_5968292.png" },
  { name: "HTML", image: "/images/html-5_5968267.png" },
  { name: "React", image: "/images/physics_753244.png" },
  { name: "Figma", image: "/images/figma_5968705.png" },
  { name: "Wordpress", image: "/images/social_16021409.png" },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const servicesRef = useRef<HTMLDivElement>(null);
  const seamlessRef = useRef<HTMLDivElement>(null);

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

    if (servicesRef.current) {
      Array.from(servicesRef.current.children).forEach((child) => {
        observer.observe(child);
      });
    }

    if (seamlessRef.current) {
      observer.observe(seamlessRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We specialize in crafting digital experiences that elevate your brand.
          </p>
        </div>

        <div ref={servicesRef} className="mt-16 space-y-12">
          {services.map((service, index) => (
            <ServiceCard
              key={service.name}
              service={service}
              index={index}
              isActive={activeService === index}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#quick-contact"
            className="inline-flex font-sans items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 mt-20">
        <div ref={seamlessRef} className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 opacity-0 translate-y-10 transition-all duration-1000 ease-in-out">
          <div className="lg:mt-0">
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto lg:max-w-none">
              <p className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Seamless experience
              </p>
              <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                We deliver seamless websites built around your brand.
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At Inscrypt, we specialize in crafting digital experiences that
                elevate your brand. Our comprehensive suite of services ensures
                your project receives expert attention from concept to launch.
              </p>

              <div className="mt-6 pr-8 grid grid-cols-5 md:grid-cols-5 md:gap-4 gap-0 lg:grid-cols-5">
                {languages.map((lang) => (
                  <Image
                    src={lang.image}
                    width={50}
                    height={50}
                    alt={`${lang.name} icon`}
                    key={lang.name}
                  />
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/#quick-contact"
                  className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:ml-8">
            <div className="relative aspect-w-5 aspect-h-3 rounded-lg overflow-hidden sm:aspect-w-3 sm:aspect-h-2">
              <Image
                src="/images/people-office-work-day.jpg"
                alt="Seamless experience illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-0 right-0 bg-black bg-opacity-75 p-4 rounded-bl-lg">
                <p className="font-sans font-bold text-4xl text-white">40+</p>
                <p className="font-sans font-normal text-md mt-2 text-white">Projects</p>
                <p className="font-sans font-normal text-md text-white">completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}