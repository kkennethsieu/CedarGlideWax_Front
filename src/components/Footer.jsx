import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="px-6 py-12 text-white bg-main sm:px-12 lg:px-40">
      <div className="flex flex-col justify-between gap-12 lg:flex-row">
        {/* Logo + Copyright */}
        <div className="max-w-md space-y-4">
          <img
            className="w-48 sm:w-60"
            src="../logo/horizontalWhite.png"
            alt="CedarGlide Logo"
          />
          <p className="text-sm text-gray-200">
            © 2025 CedarGlide Wax. All Rights Reserved
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-12 text-sm tracking-wide sm:grid-cols-3 lg:flex">
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-white">Explore</p>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/faq">FAQ</NavLink>
            <NavLink to="/how-it-works">How It Works</NavLink>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-white">Support</p>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/returns">Returns</NavLink>
            <NavLink to="/shipping">Shipping</NavLink>
            <NavLink to="/terms">Terms</NavLink>
            <NavLink to="/privacy">Privacy</NavLink>
          </div>

          {/* Column 3 - Social */}
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-white">Follow Us</p>
            <div className="flex mt-1 space-x-4">
              <img src="../icons/igIcon.svg" alt="Instagram" className="w-5" />
              <img
                src="../icons/facebookIcon.svg"
                alt="Facebook"
                className="w-5"
              />
              <img
                src="../icons/twitterIcon.svg"
                alt="Twitter"
                className="w-5"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
