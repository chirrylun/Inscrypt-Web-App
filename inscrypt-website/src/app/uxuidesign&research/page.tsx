'use client'

import { motion } from 'framer-motion'
import { FaPaintBrush, FaUsers, FaMobileAlt, FaDesktop, FaChartLine } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function UXUIDesign() {
  const designProcess = [
    { icon: FaUsers, title: 'User Research', description: 'We start by understanding your target audience, their needs, and behaviors.' },
    { icon: FaPaintBrush, title: 'Wireframing', description: 'We create low-fidelity sketches to outline the basic structure of your app.' },
    { icon: FaDesktop, title: 'Prototyping', description: 'We  develop interactive prototypes to test and refine the user experience.' },
    { icon: FaMobileAlt, title: 'UI Design', description: 'We craft visually appealing interfaces that align with your brand identity.' },
    { icon: FaChartLine, title: 'User Testing', description: 'We conduct thorough testing to ensure optimal usability and user satisfaction.' },
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

      {/* Design Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
            Our Design Process
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {designProcess.map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <step.icon className="text-4xl text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Why Choose Inscrypt for UX/UI Design?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-indigo-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">User-Centric Approach</h3>
              <p>We put your users at the heart of every design decision, ensuring intuitive and enjoyable experiences.</p>
            </div>
            <div className="bg-indigo-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Brand Consistency</h3>
              <p>Our designs seamlessly integrate with your brand identity, reinforcing your unique market position.</p>
            </div>
            <div className="bg-indigo-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Data-Driven Design</h3>
              <p>We use analytics and user feedback to continuously improve and optimize your app's design.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}