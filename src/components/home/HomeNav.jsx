import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import { motion } from "framer-motion";

function HomeNav() {
  const nav = useNavigate();

  return (
    <div className="relative w-full h-[750px] bg-cover bg-center px-6 py-6 bg-homepage">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Navbar className="z-20 bg-transparent" />
      </motion.div>
      {/* Content */}

      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 mx-auto max-w-7xl sm:px-12">
        <div className="flex flex-col items-center space-y-6 text-center lg:h-[600px] sm:space-y-8 lg:text-left  lg:space-y-0 lg:flex-row lg:justify-between ">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <div className="flex-1 max-w-lg lg:mb-auto">
              <h1 className="text-4xl font-extrabold leading-tight text-white font-gambetta drop-shadow-lg sm:text-5xl">
                Find Your Dream <br /> Snowboard Wax Here!
              </h1>
              <p className="max-w-md mt-4 text-base leading-relaxed text-white font-chivo sm:text-lg drop-shadow-md">
                A quality wax collection for all levels. Ready To Take You
                Through The Season With Style And Maximum Performance.
              </p>
            </div>
          </motion.div>

          {/* Right Buttons pushed to bottom and same width */}

          <div className="w-full max-w-sm mt-6 lg:ml-auto lg:h-full lg:flex lg:flex-col lg:justify-end lg:gap-4">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-4">
                <button
                  onClick={() => nav("/products")}
                  className="flex-1 px-6 py-4 font-semibold text-white transition-colors duration-300 border border-white rounded-lg shadow-lg hover:bg-white hover:text-black"
                >
                  Explore
                </button>

                <button
                  onClick={() => nav("/cedarwax")}
                  className="flex-1 px-6 py-4 font-semibold text-black transition-colors duration-300 bg-white border border-gray-300 rounded-lg shadow-lg hover:bg-gray-100"
                >
                  Shop Now
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNav;
