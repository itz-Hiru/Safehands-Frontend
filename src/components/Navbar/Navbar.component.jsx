import { useEffect, useRef, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import LOGO from "../../assets/logo.png";
import { NAV_ITEMS } from "../../utils/data.util";
import ProfileInfoCard from "../Card/ProfileInfoCard.component";

const Navbar = ({ onClick, user }) => {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen]);

  const scrollToSection = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-5 md:px-16 lg:px-24 xl:px-32 transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-xs text-black/80 shadow-black/20 py-3 md:py-4"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <button onClick={() => scrollToSection("#home")} className="cursor-pointer">
        <img src={LOGO} alt="website logo" className="h-12 w-auto" />
      </button>

      {/* Desktop navbar */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {NAV_ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(item.path)}
            className="group flex flex-col gap-0.5 text-slate-800 hover:text-sky-500 transition-all duration-300"
          >
            {item.name}
            <div className="h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-sky-400 rounded-full" />
          </button>
        ))}

        {user ? (
          <ProfileInfoCard />
        ) : (
          <button
            type="button"
            className="bg-sky-300 hover:bg-gradient-to-r from-sky-500 to-cyan-400 px-7 py-2 rounded-md text-white text-[16px] font-medium cursor-pointer"
            onClick={onClick}
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile menu icon */}
      <div className="flex items-center gap-3 md:hidden">
        <IoMenu
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-slate-800 cursor-pointer"
        />
      </div>

      {/* Mobile nav bar */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-screen bg-white flex flex-col items-center justify-center gap-6 font-medium text-black transition-all duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <IoClose className="text-2xl" />
        </button>

        {user ? (
          <ProfileInfoCard />
        ) : (
          <button
            type="button"
            className="bg-sky-300 focus-within:bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-[16px] px-8 py-2.5 rounded-md"
            onClick={onClick}
          >
            Login
          </button>
        )}

        {NAV_ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              setIsMenuOpen(false);
              scrollToSection(item.path);
            }}
            className="text-slate-700 focus-within:text-black"
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
