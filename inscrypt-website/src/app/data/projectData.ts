export interface Deliverable {
  name: string;
  status: 'not-started' | 'in-progress' | 'completed';
  notes: string;
}

export interface Requirement {
  description: string;
  status: 'not-started' | 'in-progress' | 'completed';
}

export interface Phase {
  name: string;
  duration: string;
  deliverables: Deliverable[];
  requirements: Requirement[];
}

export const projectData: Phase[] = [
  {
    name: "Phase One",
    duration: "2 weeks",
    deliverables: [
      { name: "Homepage section", status: "not-started", notes: "Placeholder for homepage section notes" },
      { name: "About us section", status: "not-started", notes: "Placeholder for about us section notes" },
      { name: "What we offer section", status: "not-started", notes: "Placeholder for what we offer section notes" },
      { name: "Success stories section", status: "not-started", notes: "Placeholder for success stories section notes" },
      { name: "Contact us section", status: "not-started", notes: "Placeholder for contact us section notes" },
      { name: "FAQs section", status: "not-started", notes: "Placeholder for FAQs section notes" },
      { name: "Mobile app section", status: "not-started", notes: "Placeholder for mobile app section notes" },
    ],
    requirements: [
      { description: "Business contact information including phone numbers, emails, social media accounts, and other relevant contact information or links if available.", status: "not-started" },
    ],
  },
  {
    name: "Phase Two",
    duration: "2 weeks",
    deliverables: [
      { name: "Sustainability and Innovation section", status: "not-started", notes: "Placeholder for sustainability and innovation section notes" },
      { name: "Social media and Marketing section", status: "not-started", notes: "Placeholder for social media and marketing section notes" },
      { name: "Legal resources and guidance section", status: "not-started", notes: "Placeholder for legal resources and guidance section notes" },
      { name: "Finance and Funding section", status: "not-started", notes: "Placeholder for finance and funding section notes" },
      { name: "Insurance and Risk Management Section", status: "not-started", notes: "Placeholder for insurance and risk management section notes" },
      { name: "Livestock Farming section", status: "not-started", notes: "Placeholder for livestock farming section notes" },
    ],
    requirements: [
      { description: "Provide the list of carbon credit providers and their supporting information including links and contact information where available.", status: "not-started" },
      { description: "Provide social media channels and other relevant social media events and links if available.", status: "not-started" },
      { description: "Provide legal content on land acquisition, leasing and agricultural law compliance", status: "not-started" },
      { description: "Provide relevant information (and contact info) for legal experts and government agencies concerned with agricultural laws.", status: "not-started" },
      { description: "Provide information on available funding options and relevant guides to government schemes and carbon credit registration for additional funding opportunities.", status: "not-started" },
      { description: "Provide relevant information on crop, farming, transportation and shipping insurance.", status: "not-started" },
      { description: "Provide information on both local and international insurance providers", status: "not-started" },
      { description: "Provide guides covering raising key livestock covered in the Mindmap.", status: "not-started" },
      { description: "Provide details and links to key livestock associations covering breeding, fertilization, crop farming and veterinary care.", status: "not-started" },
    ],
  },
  {
    name: "Phase Three",
    duration: "2 weeks",
    deliverables: [
      { name: "Partnerships and Collaboration Opportunities section", status: "not-started", notes: "Placeholder for partnerships and collaboration opportunities section notes" },
      { name: "Community Engagement section", status: "not-started", notes: "Placeholder for community engagement section notes" },
      { name: "Job Board and Internship Opportunities section", status: "not-started", notes: "Placeholder for job board and internship opportunities section notes" },
      { name: "Research and Development section", status: "not-started", notes: "Placeholder for research and development section notes" },
      { name: "Training and Workshops section", status: "not-started", notes: "Placeholder for training and workshops section notes" },
      { name: "Growing Guides and Market Insights section", status: "not-started", notes: "Placeholder for growing guides and market insights section notes" },
      { name: "Directory of agricultural experts and consultants section", status: "not-started", notes: "Placeholder for directory of agricultural experts and consultants section notes" },
    ],
    requirements: [
      { description: "Provide details on local and international partnership opportunities", status: "not-started" },
      { description: "Provide details on community initiatives and empowerment programs", status: "not-started" },
      { description: "Provide youth empowerment initiatives and part ways to empowerment abroad (we will also be displaying other available opportunities fetched via APIs)", status: "not-started" },
      { description: "Provide training programs, workshops focusing on youth and women empowerment", status: "not-started" },
      { description: "Provide opportunities for international job placements.", status: "not-started" },
      { description: "Provide crop cultivation guides including videos for key crops covered in the Mindmap", status: "not-started" },
      { description: "Provide list of experts in key agricultural fields including contact details and areas of specialization", status: "not-started" },
    ],
  },
  {
    name: "Phase Four",
    duration: "2 weeks",
    deliverables: [
      { name: "Supply chain and resources section", status: "not-started", notes: "Placeholder for supply chain and resources section notes" },
      { name: "Industry News and blogs section", status: "not-started", notes: "Placeholder for industry news and blogs section notes" },
      { name: "Marketplace for agricultural products and services section", status: "not-started", notes: "Placeholder for marketplace for agricultural products and services section notes" },
      { name: "Data and Analytics Tools for Farmers section", status: "not-started", notes: "Placeholder for data and analytics tools for farmers section notes" },
    ],
    requirements: [
      { description: "Provide contacts for local and international suppliers, government agencies and farmer associations", status: "not-started" },
      { description: "Provide any available expert articles (We will also be providing available contents we can get for this via APIs)", status: "not-started" },
    ],
  },
];
