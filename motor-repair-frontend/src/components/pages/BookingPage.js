import BookingCTA from "../BookingCTA";

export default function BookingPage() {
  return (
    <section className="min-h-screen py-16 bg-gray-50">
      <div className="container px-4 mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold text-orange-700">
          Schedule Your Service Appointment
        </h1>
        <p className="max-w-2xl mx-auto mb-10 text-gray-700">
          Book your vehicle repair or maintenance service in just a few easy steps. 
          Choose your preferred time, and our team will confirm your appointment shortly.
        </p>
      </div>

      <div className="max-w-3xl p-8 mx-auto bg-white rounded-lg shadow-md">
        <BookingCTA />
      </div>
    </section>
  );
}
