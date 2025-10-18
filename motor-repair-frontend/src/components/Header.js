// src/components/Header.js
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Contact Bar */}
      <div className="py-2 text-sm text-white bg-brand-primary">
        <div className="container flex justify-between px-4 mx-auto">
          <div className="flex space-x-6">
            <a href="tel:+15551234567" className="transition duration-200 hover:text-brand-orange">
              Phone: (555) 123-4567
            </a>
            <a href="mailto:repair@motorpro.com" className="transition duration-200 hover:text-brand-orange">
              Email: repair@motorpro.com
            </a>
          </div>
          <div>Hours: Mon–Sun 7AM–9PM</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-bold text-brand-primary">MotorPro</a>

          <nav className="hidden space-x-10 lg:flex">
            <a href="/" className="py-2 font-semibold text-gray-800 transition duration-200 border-b-2 border-transparent hover:text-brand-orange hover:border-brand-orange">Home</a>
            <a href="/services" className="py-2 font-semibold text-gray-800 transition duration-200 border-b-2 border-transparent hover:text-brand-orange hover:border-brand-orange">Services</a>
            <a href="/why-choose-us" className="py-2 font-semibold text-gray-800 transition duration-200 border-b-2 border-transparent hover:text-brand-orange hover:border-brand-orange">Why Choose Us</a>
          </nav>

          <div className="items-center hidden space-x-4 md:flex">
            <a href="tel:+15551234567" className="font-medium text-gray-700 hover:text-brand-primary">Emergency? Call Now</a>
            <button className="px-6 py-3 font-bold text-white transition duration-200 rounded-lg bg-brand-orange hover:bg-orange-700">
              Book Online
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 font-semibold text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              MENU
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-200 lg:hidden bg-gray-50">
          <div className="container px-4 py-4 mx-auto">
            <div className="flex flex-col space-y-3">
              <a href="/" className="px-4 py-3 font-semibold text-gray-800 transition duration-200 rounded-lg hover:text-brand-orange hover:bg-white">Home</a>
              <a href="/services" className="px-4 py-3 font-semibold text-gray-800 transition duration-200 rounded-lg hover:text-brand-orange hover:bg-white">Services</a>
              <a href="/why-choose-us" className="px-4 py-3 font-semibold text-gray-800 transition duration-200 rounded-lg hover:text-brand-orange hover:bg-white">Why Choose Us</a>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full px-4 py-3 font-bold text-white transition duration-200 rounded-lg bg-brand-orange hover:bg-orange-700">
                  Book Repair
                </button>
                <div className="mt-3 text-center">
                  <a href="tel:+15551234567" className="text-lg font-semibold text-brand-primary hover:text-orange-600">
                    Call: (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
