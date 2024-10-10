'use client'

import { motion } from 'framer-motion'
import { FaSearchDollar, FaHashtag, FaEnvelope, FaAd, FaChartLine, FaRocket, FaUsers, FaMobileAlt } from 'react-icons/fa'
import Header from '../components/Header'
import { LuMegaphone } from "react-icons/lu";
import Footer from '../components/Footer'

export default function DigitalMarketing() {
  const services = [
    { icon: FaSearchDollar, title: 'Search Engine Optimization (SEO)', description: "Improve your app's visibility in search engine results." },
    { icon: FaHashtag, title: 'Social Media Marketing', description: 'Engage with your audience and build brand awareness on social platforms.' },
    { icon: FaEnvelope, title: 'Email Marketing', description: 'Create targeted email campaigns to nurture leads and retain users.' },
    { icon: FaAd, title: 'Pay-Per-Click Advertising', description: 'Drive targeted traffic to your app with strategic ad placements.' },
    { icon: FaChartLine, title: 'Analytics and Reporting', description: "Gain insights into your app's performance and user behavior."},
    { icon: LuMegaphone, title: 'Content Marketing', description: 'Develop valuable content that attracts and retains your target audience.' },
  ]

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Digital Marketing Solutions
            </motion.h1>
            <motion.p 
              className="mt-4 max-w-3xl mx-auto text-xl text-gray-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Amplify your app's reach and engage your target audience with our comprehensive digital marketing strategies.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
            Our Digital Marketing Services
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <service.icon className="text-4xl text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Our Marketing Approach</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-indigo-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Data-Driven Strategies</h3>
              <p>We use advanced analytics to craft marketing strategies tailored to your app's unique audience and goals.</p>
            </div>
            <div className="bg-indigo-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Multi-Channel Integration</h3>
              <p>Our campaigns span multiple platforms to ensure maximum visibility and engagement for your app.</p>
            </div>
            <div className="bg-indigo-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Continuous Optimization</h3>
              <p>We constantly monitor and refine our strategies to improve performance and ROI.</p>
            </div>
            <div className="bg-indigo-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Brand Consistency</h3>
              <p>Our marketing efforts align seamlessly with your app's branding and messaging for a cohesive user experience.</p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Boost Your App's Success?
            </h2>
            <p className="mt-4 text-xl text-indigo-100">
              Let's create a tailored digital marketing strategy for your app.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}