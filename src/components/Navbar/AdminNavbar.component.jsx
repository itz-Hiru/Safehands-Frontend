import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineX, HiOutlineMenu } from "react-icons/hi";
import SideMenu from "../Menu/SideMenu.component";

const AdminNavbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className="flex gap-5 bg-white border-b border-gray-200/50 backdrop-blur-[2px] py-6 px-4 md:px-16 lg:px-24 xl:px-32 sticky top-0 z-30">
      <button
        type="button"
        className="block lg:hidden text-black -mt-1"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (
          <HiOutlineX className="text-2xl" />
        ) : (
          <HiOutlineMenu className="text-2xl" />
        )}
      </button>
      <Link to="/" className="cursor-default">
        <span className="text-2xl text-black font-bold">Safe Hands</span>
      </Link>
      {openSideMenu && (
        <div className="fixed top-[61px] -ml-4 bg-white">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default AdminNavbar;
