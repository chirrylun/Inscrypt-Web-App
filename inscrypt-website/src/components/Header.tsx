"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, Briefcase, Phone  } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-8 sm:px-8 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex font-sans items-center">
              <span className="sr-only">Inscrypt</span>
              <h1 className="text-2xl font-bold text-gray-900">Inscrypt</h1>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleMenu}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close menu" : "Open menu"}
              </span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <nav className="hidden font-sans md:flex space-x-10">
          <Link
                    href="/"
                    className="flex items-center text-base font-medium text-gray-900 hover:text-gray-700"
                    onClick={toggleMenu}
                  >
                    <Home className="mr-2 h-5 w-5" aria-hidden="true" /> {/* Home Icon */}
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="flex items-center text-base font-medium text-gray-900 hover:text-gray-700"
                    onClick={toggleMenu}
                  >
                    <Briefcase className="mr-2 h-5 w-5" aria-hidden="true" /> {/* Services Icon */}
                    Our Services
                  </Link>
                  <Link
                    href="/portfolio"
                    className="flex items-center text-base font-medium text-gray-900 hover:text-gray-700"
                    onClick={toggleMenu}
                  >
                    <Briefcase className="mr-2 h-5 w-5" aria-hidden="true" /> {/* Portfolio Icon */}
                    Portfolio
                  </Link>
                  
          </nav>
          <div className="hidden font-sans md:flex items-center justify-end md:flex-1 lg:w-0">
            
            <Link
                    href="/contact"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    onClick={toggleMenu}
                  >
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" /> {/* Contact Icon */}
                    Contact us
                  </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`fixed inset-0 overflow-hidden md:hidden z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={toggleMenu}></div>
        
        {/* Side menu panel */}
        <div
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-all ease-in-out duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">
            <div className="px-4 sm:px-6">
              <div className="flex items-start justify-between">
                <h2 className="text-lg font-sans font-medium text-gray-900">Menu</h2>
                <div className="ml-3 h-7 flex items-center">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={toggleMenu}
                  >
                    <span className="sr-only">Close panel</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
            <div className="font-sans mt-6 relative flex-1 px-4 sm:px-6">
              <div className="absolute inset-0 px-4 sm:px-6">
                <div className="h-full flex flex-col py-6 space-y-6" aria-hidden="true">
                <Link
                    href="/"
                    className="flex items-center text-base font-medium text-gray-900 hover:text-gray-700"
                    onClick={toggleMenu}
                  >
                    <Home className="mr-2 h-5 w-5" aria-hidden="true" /> {/* Home Icon */}
                    Home
                  </Link>
                  <Link
                    href="/services"
                    className="flex items-center text-base font-medium text-gray-900 hover:text-gray-700"
                    onClick={toggleMenu}
                  >
                    <Briefcase className="mr-2 h-5 w-5" aria-hidden="true" /> {/* Services Icon */}
                    Our Services
                  </Link>
                  <Link
                    href="/portfolio"
                    className="flex items-center text-base font-medium text-gray-900 hover:text-gray-700"
                    onClick={toggleMenu}
                  >
                    <Briefcase className="mr-2 h-5 w-5" aria-hidden="true" /> {/* Portfolio Icon */}
                    Portfolio
                  </Link>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    onClick={toggleMenu}
                  >
                    <Phone className="mr-2 h-5 w-5" aria-hidden="true" /> {/* Contact Icon */}
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}