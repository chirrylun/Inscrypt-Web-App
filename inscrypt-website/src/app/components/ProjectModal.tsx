import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types/Project';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="bg-white rounded-lg max-w-2xl w-full p-8"
      onClick={(e) => e.stopPropagation()}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      {project.link === "#" ? (
        <p className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300">Project in Beta</p>
      ) : (
        <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
      >
       View Project
       <ExternalLink className="ml-2 h-4 w-4" />
      </a>
      )} 
      
    </motion.div>
  </motion.div>
);

export default ProjectModal;