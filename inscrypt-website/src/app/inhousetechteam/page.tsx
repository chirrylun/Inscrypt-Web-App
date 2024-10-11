'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaShieldAlt, FaCogs, FaComments, FaCheckCircle, FaChartLine, FaHandshake } from 'react-icons/fa'
import { CiCircleChevRight } from 'react-icons/ci'
import Header from '../components/Header'
import Footer from '../components/Footer'

const expertise = [
  { icon: FaCode, title: 'Full-Stack Development', description: 'Proficient in both front-end and back-end technologies.', features: ['React', 'Node.js', 'Python', 'Java'] },
  { icon: FaMobileAlt, title: 'Mobile App Development', description: 'Experts in iOS, Android, and cross-platform development.', features: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
  { icon: FaServer, title: 'Cloud Architecture', description: 'Designing scalable and efficient cloud-based solutions.', features: ['AWS', 'Azure', 'Google Cloud', 'Serverless'] },
  { icon: FaDatabase, title: 'Database Management', description: 'Skilled in SQL and NoSQL database design and optimization.', features: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { icon: FaShieldAlt, title: 'Security Implementation', description: 'Ensuring robust security measures in all our applications.', features: ['OAuth', 'JWT', 'Encryption', 'Penetration Testing'] },
  { icon: FaCogs, title: 'DevOps & CI/CD', description: 'Streamlining development processes for faster, reliable deployments.', features: ['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI'] },
]

const teamAdvantages = [
  { icon: FaComments, title: 'Seamless Communication', description: 'Direct access to our developers ensures clear communication and faster problem-solving.' },
  { icon: FaCheckCircle, title: 'Quality Control', description: 'Our in-house team adheres to strict quality standards, ensuring top-notch code and performance.' },
  { icon: FaChartLine, title: 'Agile Development', description: 'We employ agile methodologies for flexible, iterative development that adapts to your needs.' },
  { icon: FaHandshake, title: 'Long-term Partnership', description: 'Our team is invested in your success, providing ongoing support and maintenance.' },
]

export default function InHouseTechTeam() {
  const expertiseRef = useRef<HTMLDivElement>(null)
  const advantagesRef = useRef<HTMLDivElement>(null)

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

    if (expertiseRef.current) {
      Array.from(expertiseRef.current.children).forEach((child) => {
        observer.observe(child)
      })
    }

    if (advantagesRef.current) {
      Array.from(advantagesRef.current.children).forEach((child) => {
        observer.observe(child)
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="font-sans min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-indigo-50 transform -skew-y-6"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-20 transform translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-100 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Our Technical Expertise</span>
              <span className="block text-indigo-600 mt-2">Comprehensive Skills for Your Project Needs</span>
            </h2>
          </div>

          <div ref={expertiseRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((skill, index) => (
              <motion.div
                key={skill.title}
                className="bg-white overflow-hidden shadow-xl rounded-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform opacity-0 translate-y-10 hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="p-6 relative h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-100 rounded-bl-full"></div>
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                    <skill.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-base text-gray-500 mb-4 flex-grow">
                    {skill.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {skill.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CiCircleChevRight className="mr-2 text-indigo-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Advantages Section */}
      <section className="py-20 bg-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-16">
            <span className="block">Advantages of Our In-house Team</span>
            <span className="block text-indigo-200 mt-2">Why Choose Us for Your Project</span>
          </h2>
          <div ref={advantagesRef} className="grid gap-8 md:grid-cols-2">
            {teamAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                className="bg-indigo-800 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform opacity-0 translate-y-10 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <advantage.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{advantage.title}</h3>
                </div>
                <p className="text-indigo-200">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to work with our expert team?</span>
            <span className="block text-indigo-600">Let&apos;s start your project today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get started
                <CiCircleChevRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}