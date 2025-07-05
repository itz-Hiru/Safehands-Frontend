import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.component";
import { UserContext } from "../context/userContext.context";
import Modal from "../components/Modals/Modal.component";
import Login from "./authenticaton/Login.page";
import Signup from "./authenticaton/Signup.page";

const LandingPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");
  return (
    <div>
      <Navbar onClick={() => setOpenAuthModal(true)} user={user} />
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
