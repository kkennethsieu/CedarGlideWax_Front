import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-center bg-cover bg-black/30 bg-blend-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-5xl tracking-wide text-white font-gambetta"
        animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <img src="/logo/horizontalWhite.png" className="w-[350px]" />
      </motion.div>
    </motion.div>
  );
}

export default Loader;
