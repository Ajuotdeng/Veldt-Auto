import React from "react";
import { Wrench, Droplet, CarFront, Battery } from "lucide-react";

const services = [
  { title: "Engine Diagnostics", icon: Wrench },
  { title: "Oil Changes", icon: Droplet },
  { title: "Brake Repairs", icon: CarFront },
  { title: "Battery Service", icon: Battery },
];

const Services = () => (
  <section className="py-16 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-10">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
      {services.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <Icon className="w-10 h-10 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
          </div>
        );
      })}
    </div>
  </section>
);

export default Services;
