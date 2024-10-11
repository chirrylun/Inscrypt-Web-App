import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types/Project';
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
    onClick={onClick}
  >
    <Image
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
      <p className="text-gray-600">{project.category}</p>
    </div>
  </motion.div>
);

export default ProjectCard;