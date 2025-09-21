import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-blue-700 text-white p-6 shadow-md text-center">
        <h1 className="text-4xl font-bold">Motor Repair Garage</h1>
        <p className="text-sm mt-2">Fast • Affordable • Trusted</p>
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
