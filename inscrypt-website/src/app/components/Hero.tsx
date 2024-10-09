'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useAnimation } from 'framer-motion'
import { CiCircleChevRight } from "react-icons/ci";

export default function Hero() {
  const controls = useAnimation()
  const imageControls = useAnimation()
  const ref = useRef(null)

  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    })
    imageControls.start({
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    })
  }, [controls, imageControls])

  return (
    <div className=" relative font-sans overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-700 rounded-full opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-12 relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={imageControls}
              className="relative h-full w-full"
            >
              <Image
                className="h-full w-full object-cover"
                src="/images/afro-american-woman-working-laptop.jpg"
                alt="People working on laptops"
                layout="fill"
              />
              <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div>
            </motion.div>
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ y: 50, opacity: 0 }}
              animate={controls}
            >
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Design, Develop, Build</span>
                <span className="block text-indigo-200">with Inscrypt</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                Reach out and get started on your next project. We deliver seamless websites built around your brand.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <Link href="/portfolio" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 transition-colors duration-300 sm:px-8">
                    View Portfolio
                  </Link>
                  <Link href="/#quick-contact" className="flex items-center  px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 transition-colors duration-300 sm:px-8">
                    Get in touch
                    <CiCircleChevRight className='ml-2' size={20}/>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-0 right-0 -mt-20 -mr-20 w-40 h-40 bg-indigo-500 rounded-full opacity-10"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 bg-purple-500 rounded-full opacity-10"
          ></motion.div>
        </div>
      </div>
    </div>
  )
}