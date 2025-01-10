'use client'

import React, { useState } from 'react';
import { Badge } from "./ui/Badge";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/Card";
import { CheckCircle, Circle, ChevronDown } from 'lucide-react';

export interface WebsiteDeliverable {
  name: string;
  status: 'completed' | 'in-progress' | 'not-started';
}

export interface WebsiteRequirement {
  description: string;
  submitted: boolean;
}

export interface WebsiteProjectPhaseProps {
  phase: number;
  duration: string;
  deliverables: WebsiteDeliverable[];
  requirements: WebsiteRequirement[];
}

export const WebsiteProjectPhase: React.FC<WebsiteProjectPhaseProps> = ({ 
  phase, 
  duration, 
  deliverables, 
  requirements 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const completedDeliverables = deliverables.filter(d => d.status === 'completed').length;
  const progressPercentage = (completedDeliverables / deliverables.length) * 100;

 

  return (
    <Card className="mb-8 overflow-hidden bg-white dark:bg-gray-800 shadow-lg">
      <CardHeader 
        className="flex flex-row justify-between cursor-pointer p-8" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Phase {phase} <span className="text-sm font-normal ml-2 text-gray-500">({duration})</span>
        </CardTitle>
        <div className="flex items-center space-x-4">
          <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {completedDeliverables} / {deliverables.length} completed
          </div>
          <ChevronDown 
            className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            size={20}
          />
        </div>
      </CardHeader>
      <div className="px-6 pb-2">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <CardContent className="pt-4">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Deliverables</h3>
            <ul className="space-y-3">
              {deliverables.map((deliverable, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                >
                  <span className="flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200">
                   
                    <span>{deliverable.name}</span>
                  </span>
                  <Badge
                    variant={deliverable.status === 'completed' ? 'default' : 
                            deliverable.status === 'in-progress' ? 'secondary' : 'outline'}
                  >
                    {deliverable.status}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Requirements</h3>
            <ul className="space-y-3">
              {requirements.map((requirement, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                >
                  <span className="flex items-center text-sm space-x-4 text-gray-700 dark:text-gray-200">
                    {requirement.submitted ? (
                      <CheckCircle className="text-green-500" size={20} />
                    ) : (
                      <Circle className="text-gray-400" size={20} />
                    )}
                    <span>{requirement.description}</span>
                  </span>
                  <Badge variant={requirement.submitted ? 'default' : 'outline'}>
                    {requirement.submitted ? 'Submitted' : 'Pending'}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};