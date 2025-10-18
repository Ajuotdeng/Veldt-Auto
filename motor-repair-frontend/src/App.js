import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <header className="p-6 text-center text-black shadow-md bg-brand-orange-700">
        <h1 className="text-4xl font-bold">Motor Repair Garage</h1>
        <p className="mt-2 text-sm">Fast • Affordable • Trusted</p>
      </header>

      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <BookingCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
