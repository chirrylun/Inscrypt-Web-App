import Link from 'next/link'
import { Instagram } from 'lucide-react'

export default function Footer() {
  // Replace these with your actual contact details
  const instagramUrl = "https://www.instagram.com/inscrypttech"
  const whatsappNumber = "+2348143653652" // Replace with your WhatsApp number
  const phoneNumber = "+2348143653652" // Replace with your phone number

  return (
    <footer className="bg-black font-sans">
      <div className="max-w-7xl mx-auto py-12 px-8 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h1 className="text-white text-3xl font-bold">Inscrypt</h1>
            <p className="text-white text-base">
              Building digital experiences that matter.
            </p>
            <div className="flex space-x-6">
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:tracking-wider">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-white hover:tracking-wider">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
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
                    <Link href="/#quick-contact" className="text-base text-white hover:text-white">
                      Send a message
                    </Link>
                  </li>

                  <li>
                    <a href={`tel:${phoneNumber}`} className="text-base text-white hover:text-white">
                      Give us a call
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white pt-8">
          <p className="text-base text-white xl:text-center">
            &copy; 2024 The Platform Digital Network Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}