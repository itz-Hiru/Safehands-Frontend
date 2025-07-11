import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext.context";
import CharAvatar from "../Avatar/CharAvatar.component";
import { SIDE_MENU_DATA } from "../../utils/data.util";
import Modal from "../Modals/Modal.component";

const SideMenu = ({ activeMenu }) => {
  const { user, clearUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [confirmLogout, setConfirmLogout] = useState(false);

  const handleClick = (route) => {
    if (route === "logout") {
      setConfirmLogout(true);
    } else {
      navigate(route);
    }
  };

  const handleLogout = () => {
    clearUser();
    navigate("/");
  };
  return (
    <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200/50 p-5 sticky top-[61px] z-20">
      <div className="flex flex-col items-center justify-center mt-5 mb-10">
        {user?.profileImageUrl ? (
          <img
            src={user?.profileImageUrl}
            alt={user?.name}
            className="w-20 h-20 bg-slate-400 rounded-full object-cover"
          />
        ) : (
          <CharAvatar fullName={user?.name} width="w-20" height="h-20" />
        )}
        <h5 className="text-gray-950 font-medium mt-4">{user?.name}</h5>
        <p className="text-gray-700 text-[12px]">{user?.email}</p>
      </div>
      {SIDE_MENU_DATA.map((item, index) => (
        <button
          key={index}
          type="button"
          className={`w-full flex items-center gap-4 text-[15px] cursor-pointer py-3 px-6 rounded-lg mb-3 ${
            activeMenu === item.label
              ? "text-white bg-linear-to-r from-sky-500 to-cyan-400"
              : ""
          }`}
          onClick={() => handleClick(item.path)}
        >
          <item.icon className="text-2xl" />
          {item.label}
        </button>
      ))}
      <Modal
        title="Confirm Logout"
        isOpen={confirmLogout}
        onClose={() => setConfirmLogout(false)}
      >
        <div className="p-5 flex flex-col gap-4">
          <div className="text-[15px] text-slate-700">
            Are you sure you want to logout?
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm font-medium text-red-600 hover:underline cursor-pointer transition-all duration-300"
              onClick={handleLogout}
            >
              Yes
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default SideMenu;
