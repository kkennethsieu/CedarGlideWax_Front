import { motion } from "framer-motion";

function AboutCoverImg() {
  return (
    <div className="relative h-[65vh] sm:h-[70vh] bg-cover bg-center bg-aboutUsBanner">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute top-1/2 left-1/2 max-w-[90%] lg:max-w-3xl w-full transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold md:text-5xl font-gambetta drop-shadow-lg">
            Born in the mountains and fueled by a love for the ride
          </h2>
          <p className="mx-auto mt-6 text-base leading-relaxed sm:text-lg drop-shadow-lg max-w-prose">
            We craft premium snowboard wax for smoother, faster days on snow.
            We're here to help riders get the most out of every session on snow.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutCoverImg;
