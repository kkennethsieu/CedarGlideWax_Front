import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import { motion, AnimatePresence } from "framer-motion";

function Modal({ children }) {
  const isOpen = useSelector((state) => state.modal.open);
  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black bg-opacity-30"
            onClick={() => dispatch(closeModal())}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Modal Drawer */}
          <motion.div
            className="fixed top-0 right-0 w-[30%] min-w-[400px] h-screen bg-white z-50 shadow-lg p-6"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Close button */}
            <div className="flex items-center w-full gap-2 p-4 pb-4 border-b border-gray-200">
              <button
                onClick={() => dispatch(closeModal())}
                className="text-sm font-medium hover:text-blue-600"
              >
                <ArrowBackIosIcon fontSize="small" />
                Keep Shopping
              </button>
            </div>

            {/* Modal Content */}
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Modal;
