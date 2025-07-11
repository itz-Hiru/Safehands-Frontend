import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.component";
import { UserContext } from "../context/userContext.context";
import Modal from "../components/Modals/Modal.component";
import Login from "./authenticaton/Login.page";
import Signup from "./authenticaton/Signup.page";
import Home from "../sections/Home/Home.section";

const LandingPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      if (user.role === "Admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    }
  };
  return (
    <div>
      <Navbar onClick={() => setOpenAuthModal(true)} user={user} />
      <div className="px-4 md:px-16 lg:px-24 xl:px-32">
        <Home onClick={handleCTA} />
      </div>
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
