import Image from 'next/image'

export default function CTASection() {
  return (
    <div className="mt-32 bg-indigo-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
      <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
        <div className="lg:self-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to elevate your digital presence?</span>
            <span className="block">Start your project today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Our team of experts is ready to bring your vision to life. Let&apos;s create something amazing together.
          </p>
          <a
            href="/#quick-contact"
            className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-indigo-600 hover:bg-indigo-50"
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
        <Image
          className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
          src="/images/happy-excited-businessteam-celebrating-successful-partnership-enjoying-together-startup-office-diverse-smiling-businesspeople-achievement-business-collaboration-concept-victory.jpg"
          alt="App screenshot"
          width={500}
          height={800}
        />
      </div>
    </div>
  )
}