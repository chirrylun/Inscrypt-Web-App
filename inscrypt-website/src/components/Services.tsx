import { Monitor, Smartphone, PenTool, Users } from 'lucide-react';

const services = [
  {
    name: 'Website Design & Development',
    description: 'We create stunning, responsive websites that captivate your audience and drive results.',
    icon: Monitor,
  },
  {
    name: 'Mobile Application Development',
    description: 'Extend your reach with custom mobile apps that engage users on the go.',
    icon: Smartphone,
  },
  {
    name: 'UX/UI Design & Research',
    description: 'Our user-centric approach combines aesthetics with functionality for optimal user experiences.',
    icon: PenTool,
  },
  {
    name: 'In-house Tech Team',
    description: 'Benefit from our dedicated team of experts who collaborate seamlessly to bring your project to fruition.',
    icon: Users,
  },
];

export default function Services() {
  return (
    <div className=" font-sans bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We specialize in crafting digital experiences that elevate your brand.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex font-sans items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}