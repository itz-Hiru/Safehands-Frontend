import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.component";
import { UserContext } from "../context/userContext.context";
import Modal from "../components/Modals/Modal.component";
import Login from "./authenticaton/Login.page";
import Signup from "./authenticaton/Signup.page";
import Home from "../sections/Home/Home.section";
import AboutSection from "../sections/AboutSection.section";
import TestimonialSection from "../components/TestimonialSection.component";
import Footer from "../components/Footer.component";
import ServicesSection from "../sections/ServicesSection.section";


const LandingPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onClick={() => setOpenAuthModal(true)} user={user} />

      <main className="flex-grow">
        <div id="home" className="px-4 md:px-16 lg:px-24 xl:px-32">
          <Home onClick={handleCTA} />
        </div>

        <div id="about" className="scroll-mt-28">
          <AboutSection />
        </div>

        <div id="services"><ServicesSection /></div>

        <div id="testimonials">
          <TestimonialSection />
        </div>
      </main>

      <Footer />

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <Signup setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;
