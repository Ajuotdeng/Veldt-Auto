import React from 'react';
import { Wrench, Oil, Car, Battery } from 'lucide-react';

const services = [
  { title: "Engine Diagnostics", icon: <Wrench className="w-10 h-10 text-blue-600" /> },
  { title: "Oil Changes", icon: <Oil className="w-10 h-10 text-blue-600" /> },
  { title: "Brake Repairs", icon: <Car className="w-10 h-10 text-blue-600" /> },
  { title: "Battery Service", icon: <Battery className="w-10 h-10 text-blue-600" /> },
];

const Services = () => (
  <section className="py-16 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-10">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
      {services.map((item, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
        >
          <div className="mb-4 flex justify-center">{item.icon}</div>
          <h3 className="text-xl font-semibold">{item.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
