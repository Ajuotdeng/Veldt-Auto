import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import BookingPage from "./components/pages/BookingPage";

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <WhyChooseUs />
              <BookingCTA />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
