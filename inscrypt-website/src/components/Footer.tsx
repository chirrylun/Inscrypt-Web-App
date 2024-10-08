import Link from 'next/link'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black font-sans">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h1 className="text-white text-3xl font-bold">Inscrypt</h1>
            <p className="text-white text-base">
              Building digital experiences that matter.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:tracking-wider">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-white hover:tracking-wider">
                <span className="sr-only">WhatsApp</span>
                
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About Us</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/services" className="text-base text-white hover:text-white">
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/portfolio" className="text-base text-white hover:text-white">
                      Portfolio
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Get in Touch</h3>
                <ul role="list" className="mt-4 space-y-4">
                  <li>
                    <Link href="/contact" className="text-base text-white hover:text-white">
                      Send a message
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-white hover:text-white">
                      Give us a call
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-white xl:text-center">
            &copy; 2024 The Platform Digital Network Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}