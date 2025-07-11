import Navbar from "../components/Navbar/Navbar.component";
import Footer from "../components/Footer.component";
import TestimonialSection from "../components/TestimonialSection.component";

const TestimonialsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32 py-6">
        <TestimonialSection />
      </main>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;
