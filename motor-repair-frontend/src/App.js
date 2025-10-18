import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />

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
