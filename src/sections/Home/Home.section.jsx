import { IoPlay } from "react-icons/io5";
import HERO_IMAGE from "../../assets/hero-image.png";

const Home = ({ onClick }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full min-h-screen px-4 pt-16 bg-white gap-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Your Future Starts with{" "}
            <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#0EA5E9_0%,_#22D3EE_100%)] animate-text-shine">
              Better Health Care
            </span>
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Affordable, trusted, and tailored to you — we're here to make
            quality care simple and accessible.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-start gap-6">
            <button
              className="px-8 py-3 bg-sky-700 text-white rounded-md text-[17px] font-semibold hover:bg-sky-600 transition"
              onClick={onClick}
            >
              Book Now
            </button>
            <button className="flex items-center gap-3 text-gray-700">
              <div className="w-10 h-10 flex items-center justify-center rounded-full border shadow-md">
                <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center shadow">
                  <IoPlay className="text-white text-lg" />
                </div>
              </div>
              Watch Video
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
        <div className="absolute w-[320px] h-[320px] bg-sky-700 rounded-full z-5" />
        <div className="absolute w-[280px] h-[280px] rounded-full border-4 border-cyan-400 z-8" />
        <img
          src={HERO_IMAGE}
          alt="Doctor"
          className="relative z-10 w-[350px] h-auto"
        />
        <div className="absolute top-6 right-4 bg-white shadow-lg rounded-xl px-4 py-2 flex items-center gap-2 z-20">
          <img
            src={HERO_IMAGE}
            alt="hero image"
            className="w-8 h-8 rounded-full object-contain border border-cyan-600"
          />
          <div>
            <p className="text-sm font-semibold">Dr. Lalita Kalina</p>
            <p className="text-xs text-gray-500">Neurologist</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white shadow-md rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 flex items-center gap-2 z-20">
          <span className="bg-green-500 w-3 h-3 rounded-full"></span>
          100+ Doctors available
        </div>
      </div>
    </div>
  );
};

export default Home;
