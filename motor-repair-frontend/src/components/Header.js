import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Contact Bar */}
      <div className="py-2 text-sm text-white bg-orange-700">
        <div className="container flex justify-between px-4 mx-auto">
          <div className="flex space-x-6">
            <a href="tel:+15551234567" className="transition hover:text-yellow-300">
              Phone: (555) 123-4567
            </a>
            <a href="mailto:repair@motorpro.com" className="transition hover:text-yellow-300">
              Email: repair@motorpro.com
            </a>
          </div>
          <div>Hours: Mon–Sun 7AM–9PM</div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-orange-700">
            MotorPro
          </Link>

          <nav className="hidden space-x-10 lg:flex">
            <Link
              to="/"
              className="pb-1 font-semibold text-gray-800 transition border-b-2 border-transparent hover:text-orange-700 hover:border-orange-700"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="pb-1 font-semibold text-gray-800 transition border-b-2 border-transparent hover:text-orange-700 hover:border-orange-700"
            >
              Services
            </Link>
            <Link
              to="/why-choose-us"
              className="pb-1 font-semibold text-gray-800 transition border-b-2 border-transparent hover:text-orange-700 hover:border-orange-700"
            >
              Why Choose Us
            </Link>
          </nav>

          <div className="items-center hidden space-x-4 md:flex">
            <a
              href="tel:+15551234567"
              className="font-medium text-gray-700 hover:text-orange-700"
            >
              Emergency? Call Now
            </a>
            <button className="px-6 py-3 font-bold text-white transition bg-orange-700 rounded-lg hover:bg-orange-800">
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
              <Link
                to="/"
                className="px-4 py-3 font-semibold text-gray-800 transition rounded-lg hover:text-orange-700 hover:bg-white"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="px-4 py-3 font-semibold text-gray-800 transition rounded-lg hover:text-orange-700 hover:bg-white"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/why-choose-us"
                className="px-4 py-3 font-semibold text-gray-800 transition rounded-lg hover:text-orange-700 hover:bg-white"
                onClick={() => setMenuOpen(false)}
              >
                Why Choose Us
              </Link>

              <div className="pt-4 border-t border-gray-200">
                <button className="w-full px-4 py-3 font-bold text-white transition bg-orange-700 rounded-lg hover:bg-orange-800">
                  Book Repair
                </button>
                <div className="mt-3 text-center">
                  <a
                    href="tel:+15551234567"
                    className="text-lg font-semibold text-orange-700 hover:text-orange-800"
                  >
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
