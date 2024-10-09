import Image from 'next/image'

import { CiCircleChevRight } from "react-icons/ci";

export default function CTASection() {
  return (
    <div className="bg-indigo-700 rounded-lg shadow-xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between py-12 lg:py-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to elevate your digital presence?</span>
              <span className="block mt-2">Start your project today.</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-indigo-200">
              Our team of experts is ready to bring your vision to life. Let&apos;s create something amazing together.
            </p>
            <a
              href="/#quick-contact"
              className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50 transition duration-300 ease-in-out"
            >
              Get Started
              <CiCircleChevRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <div className="relative h-64 sm:h-72 md:h-80 lg:h-96">
              <Image
                className="rounded-lg object-cover object-center shadow-2xl"
                src="/images/happy-excited-businessteam-celebrating-successful-partnership-enjoying-together-startup-office-diverse-smiling-businesspeople-achievement-business-collaboration-concept-victory.jpg"
                alt="Team celebrating success"
                layout="fill"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}