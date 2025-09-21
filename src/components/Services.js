const services = [
  { title: "Engine Diagnostics", emoji: "🔧" },
  { title: "Oil Changes", emoji: "🛢️" },
  { title: "Brake Repairs", emoji: "🛑" },
  { title: "Battery Service", emoji: "🔋" },
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
          <div className="text-4xl mb-4">{item.emoji}</div>
          <h3 className="text-xl font-semibold">{item.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
