'use client'

import React from 'react';
import ProjectPhase, { ProjectPhaseProps } from '../components/ProjectPhase';

const ProjectProgress: React.FC = () => {
  const projectData: ProjectPhaseProps[] = [
    {
      phase: 1,
      duration: '2 weeks',
      deliverables: [
        { name: 'Homepage section', status: 'not-started' },
        { name: 'About us section', status: 'not-started' },
        { name: 'What we offer section', status: 'not-started' },
        { name: 'Success stories section', status: 'not-started' },
        { name: 'Contact us section', status: 'not-started' },
        { name: 'FAQs sections', status: 'not-started' },
        { name: 'Mobile app section', status: 'not-started' },
      ],
      requirements: [
        { 
          description: 'Business contact information including phone numbers, emails, social media accounts, and other relevant contact information or links if available.',
          submitted: false
        },
      ],
    },
    {
      phase: 2,
      duration: '2 weeks',
      deliverables: [
        { name: 'Sustainability and Innovation section', status: 'not-started' },
        { name: 'Social media and Marketing section', status: 'not-started' },
        { name: 'Legal resources and guidance section', status: 'not-started' },
        { name: 'Finance and Funding section', status: 'not-started' },
        { name: 'Insurance and Risk Management Section', status: 'not-started' },
        { name: 'Livestock Farming section', status: 'not-started' },
      ],
      requirements: [
        { description: 'List of carbon credit providers and their supporting information', submitted: false },
        { description: 'Social media channels and other relevant social media events and links', submitted: false },
        { description: 'Legal content on land acquisition, leasing and agricultural law compliance', submitted: false },
        { description: 'Information for legal experts and government agencies concerned with agricultural laws', submitted: false },
        { description: 'Information on available funding options and relevant guides', submitted: false },
        { description: 'Information on crop, farming, transportation and shipping insurance', submitted: false },
        { description: 'Information on both local and international insurance providers', submitted: false },
        { description: 'Guides covering raising key livestock', submitted: false },
        { description: 'Details and links to key livestock associations', submitted: false },
      ],
    },
    {
      phase: 3,
      duration: '2 weeks',
      deliverables: [
        { name: 'Partnerships and Collaboration Opportunities section', status: 'not-started' },
        { name: 'Community Engagement section', status: 'not-started' },
        { name: 'Job Board and Internship Opportunities section', status: 'not-started' },
        { name: 'Research and Development section', status: 'not-started' },
        { name: 'Training and Workshops section', status: 'not-started' },
        { name: 'Growing Guides and Market Insights section', status: 'not-started' },
        { name: 'Directory of agricultural experts and consultants section', status: 'not-started' },
      ],
      requirements: [
        { description: 'Details on local and international partnership opportunities', submitted: false },
        { description: 'Details on community initiatives and empowerment programs', submitted: false },
        { description: 'Youth empowerment initiatives and pathways to empowerment abroad', submitted: false },
        { description: 'Training programs, workshops focusing on youth and women empowerment', submitted: false },
        { description: 'Opportunities for international job placements', submitted: false },
        { description: 'Crop cultivation guides including videos for key crops', submitted: false },
        { description: 'List of experts in key agricultural fields including contact details and areas of specialization', submitted: false },
      ],
    },
    {
      phase: 4,
      duration: '2 weeks',
      deliverables: [
        { name: 'Supply chain and resources section', status: 'not-started' },
        { name: 'Industry News and blogs section', status: 'not-started' },
        { name: 'Marketplace for agricultural products and services section', status: 'not-started' },
        { name: 'Data and Analytics Tools for Farmers section', status: 'not-started' },
      ],
      requirements: [
        { description: 'Contacts for local and international suppliers, government agencies and farmer associations', submitted: false },
        { description: 'Available expert articles', submitted: false },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          Website Frontend Content Build Progress
        </h1>
        {projectData.map((phase, index) => (
          <ProjectPhase key={index} {...phase} />
        ))}
      </div>
    </div>
  );
};

export default ProjectProgress;