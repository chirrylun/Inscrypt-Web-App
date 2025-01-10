import { WebsiteProjectPhaseProps, WebsiteProjectPhase } from "./WebsiteProjectPhase";
import { Wrench } from 'lucide-react';

const WebsiteBuildProgress: React.FC = () => {
    const projectData: WebsiteProjectPhaseProps[] = [
      {
        phase: 1,
        duration: '7 weeks',
        deliverables: [
          { name: 'Market Research & Design Requirements Analysis', status: 'not-started' },
          { name: 'Competitor Analysis', status: 'not-started' },
          { name: 'User Persona Development', status: 'not-started' },
          { name: 'Feature Specification Documentation', status: 'not-started' },
          { name: 'Technical Stack Finalization', status: 'not-started' },
          { name: 'User Flow Mapping', status: 'not-started' },
          { name: 'Wireframing', status: 'not-started' },
          { name: 'UI Design System Creation', status: 'not-started' },
          { name: 'High-fidelity Mockups', status: 'not-started' },
          { name: 'Interactive Prototype', status: 'not-started' },
          { name: 'Accessibility Reviews', status: 'not-started' },
        ],
        requirements: [
          { 
            description: 'List of top 5 similar competitor platforms',
            submitted: false
          },
          { 
            description: 'Current brand guideline documentation',
            submitted: false
          },
        ],
      },
      {
        phase: 2,
        duration: '12 weeks',
        deliverables: [
            { name: 'Project architecture setup', status: 'not-started' },
            { name: 'Authentication System Implementation', status: 'not-started' },
            { name: 'State Management Configuration', status: 'not-started' },
            { name: 'Component Library Setup', status: 'not-started' },
            { name: 'Responsive Framework Implementation', status: 'not-started' },
            { name: 'User Dashboard Development', status: 'not-started' },
            { name: 'Marketplace Functionality', status: 'not-started' },
            { name: 'AI Diagnostics Tools Integration', status: 'not-started' },
            { name: 'Blockchain Traceability Features', status: 'not-started' },
            { name: 'Training Platform Interface', status: 'not-started' },
            { name: 'Community & Forum Features', status: 'not-started' },
            { name: 'Experts Directory Implementation', status: 'not-started' },
            { name: 'Search Functionality', status: 'not-started' },
            { name: 'Resource Library Implementation', status: 'not-started' },
            { name: 'Content Management Interface', status: 'not-started' },
            { name: 'Analytics & Tranactions dashboard', status: 'not-started' },
            { name: 'Internationalization & Multi-language Support', status: 'not-started' },
            { name: 'Technical documentation for all implemented features', status: 'not-started' },
        ],
        requirements: [
          
        ],
      },
      {
        phase: 3,
        duration: '8 weeks',
        deliverables: [
          { name: 'Database design and setup', status: 'not-started' },
          { name: 'API architecture design', status: 'not-started' },
          { name: 'Cloud infrastructure configuration', status: 'not-started' },
          { name: 'Security implementation', status: 'not-started' }
        
        ],
        requirements: [
         
        ],
      },
      {
        phase: 4,
        duration: '8 weeks',
        deliverables: [
          { name: 'Test Environment Setup', status: 'not-started' },
          { name: 'Unit Testing', status: 'not-started' },
          { name: 'Integration Testing', status: 'not-started' },
          { name: 'Performance Testing', status: 'not-started' },
          { name: 'User acceptance testing', status: 'not-started' },
          { name: 'Security Assessment', status: 'not-started' },
          { name: 'Complete test coverage report and security audit results', status: 'not-started' },
          { name: 'Bug Fixes and Refinements', status: 'not-started' },
        ],
        requirements: [
          
        ],
      },

      {
        phase: 5,
        duration: '4 weeks',
        deliverables: [
          { name: 'Production environment setup', status: 'not-started' },
          { name: 'CI/CD pipeline configuration', status: 'not-started' },
          { name: 'Documentation completion', status: 'not-started' },
          { name: 'Security hardening', status: 'not-started' },
          { name: 'Launch procedures', status: 'not-started' },
          { name: 'Support system setup', status: 'not-started' },
          
        ],
        requirements: [
          
        ],
      }
    ];
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
            <div className="flex flex-row items-center mb-8 gap-4"><Wrench 
           color="black"
            size={27}
          />
          <h1 className="text-2xl lg:text-4xl font-bold  text-center text-gray-800 dark:text-gray-100">
            Greenfield Core Website Development Progress
          </h1></div>
        
          {projectData.map((phase, index) => (
            <WebsiteProjectPhase key={index} {...phase} />
          ))}
        </div>
      </div>
    );
  };
  
  export default WebsiteBuildProgress;