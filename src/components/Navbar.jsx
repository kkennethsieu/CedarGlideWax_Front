import { NavLink } from "react-router-dom";
import { useState } from "react";
import PersonIcon from "../icons/personIcon";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CartModal from "./cart/CartModal";
import Modal from "./cart/Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../redux/modalSlice";

function Navbar({ className }) {
  const isOpen = useSelector((state) => state.modal.open);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className={`sticky top-0 z-50 bg-gray-50 shadow-sm ${className}`}>
        <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-[1350px] md:px-8">
          {/* Left Logo */}
          <NavLink to="/">
            <img
              className="w-40 md:w-48"
              src="../logo/horizontalBlack.png"
              alt="Logo"
            />
          </NavLink>

          {/* Center Navigation */}
          <nav className="hidden gap-8 text-lg font-medium text-gray-700 md:flex font-chivo">
            {["home", "products", "cedarwax", "about"].map((path) => (
              <NavLink
                key={path}
                to={`/${path}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-black border-b border-gray-500"
                    : "hover:text-gray-800"
                }
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </NavLink>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Hamburger Menu (mobile only) */}
            <PersonIcon />
            <IconButton onClick={() => dispatch(openModal())}>
              <Badge badgeContent={totalQuantity} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="focus:outline-none"
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileOpen && (
          <div className="px-6 py-4 space-y-3 text-lg text-gray-700 bg-white border-t border-gray-200 md:hidden">
            {["home", "products", "cedarwax", "about"].map((path) => (
              <NavLink
                key={path}
                to={`/${path}`}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "block text-black border-b border-gray-400 pb-1"
                    : "block hover:text-gray-800"
                }
              >
                {path.charAt(0).toUpperCase() + path.slice(1)}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* Cart Modal */}
      {isOpen && (
        <Modal>
          <CartModal />
        </Modal>
      )}
    </>
  );
}

export default Navbar;
