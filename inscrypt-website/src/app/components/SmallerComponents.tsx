import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const IntroSection: React.FC = () => (
  <div className="h-screen flex flex-col items-center justify-center snap-start">
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-6xl font-bold mb-8"
    >
      Our Portfolio
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-xl mb-12 max-w-2xl text-center"
    >
      Explore our latest projects and see how we bring digital ideas to life.
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="animate-bounce"
    >
      <ChevronDown className="h-12 w-12" />
    </motion.div>
  </div>
);

export const CallToActionSection: React.FC = () => (
  <div className="h-screen flex flex-col items-center justify-center snap-start bg-gradient-to-b from-black to-indigo-900">
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-4xl font-bold mb-8"
    >
      Ready to start your project?
    </motion.h2>
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      href="/contact"
      className="inline-flex items-center px-8 py-4 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 text-lg font-semibold"
    >
      Get in touch <ArrowRight className="ml-2 h-6 w-6" />
    </motion.a>
  </div>
);

interface ProjectIndicatorsProps {
  activeProject: number;
  totalProjects: number;
}

export const ProjectIndicators: React.FC<ProjectIndicatorsProps> = ({ activeProject, totalProjects }) => (
  <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
    <div className="flex space-x-2">
      {Array.from({ length: totalProjects }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
            activeProject === index ? 'bg-white' : 'bg-gray-500'
          }`}
        />
      ))}
    </div>
  </div>
);