'use client'

import { motion } from 'framer-motion'
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaShieldAlt, FaCogs } from 'react-icons/fa'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function InHouseTechTeam() {
  const expertise = [
    { icon: FaCode, title: 'Full-Stack Development', description: 'Proficient in both front-end and back-end technologies.' },
    { icon: FaMobileAlt, title: 'Mobile App Development', description: 'Experts in iOS, Android, and cross-platform development.' },
    { icon: FaServer, title: 'Cloud Architecture', description: 'Designing scalable and efficient cloud-based solutions.' },
    { icon: FaDatabase, title: 'Database Management', description: 'Skilled in SQL and NoSQL database design and optimization.' },
    { icon: FaShieldAlt, title: 'Security Implementation', description: 'Ensuring robust security measures in all our applications.' },
    { icon: FaCogs, title: 'DevOps & CI/CD', description: 'Streamlining development processes for faster, reliable deployments.' },
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
              Our In-house Tech Team
            </motion.h1>
            <motion.p 
              className="mt-4 max-w-3xl mx-auto text-xl text-gray-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              A dedicated group of expert developers committed to bringing your vision to life with cutting-edge technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
            Our Technical Expertise
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <skill.icon className="text-4xl text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Advantages Section */}
      <section className="py-20 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">Advantages of Our In-house Team</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-indigo-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Seamless Communication</h3>
              <p>Direct access to our developers ensures clear communication and faster problem-solving.</p>
            </div>
            <div className="bg-indigo-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
              <p>Our in-house team adheres to strict quality standards, ensuring top-notch code and performance.</p>
            </div>
            <div className="bg-indigo-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Agile Development</h3>
              <p>We employ agile methodologies for flexible, iterative development that adapts to your needs.</p>
            </div>
            <div className="bg-indigo-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Long-term Partnership</h3>
              <p>Our team is invested in your success, providing ongoing support and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}