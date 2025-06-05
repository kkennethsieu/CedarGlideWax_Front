import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShippingBanner from "./banners/ShippingBanner";
import Newsletter from "./banners/Newsletter";

function AppLayout() {
  return (
    <div>
      <div className="sticky top-0 z-30">
        <Navbar />
        <ShippingBanner />
      </div>

      <main>
        <Outlet />
      </main>
      {/* <FooterBanner /> */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default AppLayout;
