import { Monitor, Smartphone, PenTool, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    name: "Website Design & Development",
    description:
      "We create stunning, responsive websites that captivate your audience and drive results.",
    icon: Monitor,
  },
  {
    name: "Mobile Application Development",
    description:
      "Extend your reach with custom mobile apps that engage users on the go.",
    icon: Smartphone,
  },
  {
    name: "UX/UI Design & Research",
    description:
      "Our user-centric approach combines aesthetics with functionality for optimal user experiences.",
    icon: PenTool,
  },
  {
    name: "In-house Tech Team",
    description:
      "Benefit from our dedicated team of experts who collaborate seamlessly to bring your project to fruition.",
    icon: Users,
  },
];

const languages = [
  { name: "Javascript", image: "/images/js_5968292.png" },
  { name: "HTML", image: "/images/html-5_5968267.png" },
  { name: "React", image: "/images/physics_753244.png" },
  { name: "Figma", image: "/images/figma_5968705.png" },
  { name: "Wordpress", image: "/images/social_16021409.png" },
];

export default function Services() {
  return (
    <div className=" font-sans bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We specialize in crafting digital experiences that elevate your
            brand.
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
                  <h3 className="text-lg font-medium text-gray-900">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {service.description}
                  </p>
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

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-8 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:mt-0">
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto lg:max-w-none">
              <p className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Seamless experience
              </p>
              <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                We deliver seamless websites built around your brand.
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At Inscrypt, we specialize in crafting digital experiences that
                elevate your brand. Our comprehensive suite of services ensures
                your project receives expert attention from concept to launch.
              </p>

              <div className="mt-6 pr-8 grid grid-cols-5 md:grid-cols-5 md:gap-4 gap-0 lg:grid-cols-5">
                {languages.map((lang) => (
                  <Image
                    src={lang.image}
                    width={50}
                    height={50}
                    alt="Proficiency Icon"
                    key={lang.name}
                    {...lang}
                  />
                ))}
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:ml-8">
            <div className="relative aspect-w-5 aspect-h-3 rounded-lg overflow-hidden sm:aspect-w-3 sm:aspect-h-2">
              <Image
                src="/images/people-office-work-day.jpg"
                alt="Seamless experience illustration"
                width={800}
                height={600}
                className="object-cover"
              />
              <div className="absolute top-0 right-0 bg-black p-4 w-fit rounded-tr-md z-20 shadow-md">
                <p className="font-sans font-bold text-4xl text-white">40+</p>
                <p className="font-sans font-normal text-md mt-2 text-white">Projects</p>
                <p className="font-sans font-normal text-md text-white">completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
