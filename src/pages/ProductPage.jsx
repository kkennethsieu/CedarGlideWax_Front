import { NavLink } from "react-router-dom";
import ParallaxHero from "../components/ParallaxHero";
import ImageSlider from "../components/singleProduct/ImageSlider";
import ProductDetail from "../components/singleProduct/ProductDetail";
import DesignedBanner from "../components/banners/DesignedBanner";
import TwoFeatures from "../components/singleProduct/TwoFeatures";
import CollabBanner from "../components/banners/CollabBanner";
import ReviewSection from "../components/singleProduct/ReviewSection";

function ProductPage() {
  return (
    <div>
      {/* PRODUCT SECTION ON TOP */}
      <ParallaxHero>
        <div className="my-16 max-w-[1200px] mx-auto px-4 sm:px-6">
          <nav className="mb-6 text-sm sm:text-base">
            <NavLink to="/home" className="hover:underline">
              Home /
            </NavLink>
            <NavLink to="/products" className="hover:underline">
              Products /
            </NavLink>
            <NavLink to="/cedarwax" className="font-semibold hover:underline">
              CedarGlide Snowboard Wax
            </NavLink>
          </nav>
          <div className="flex flex-col justify-center gap-4 lg:flex-row lg:gap-6">
            <ImageSlider />
            <ProductDetail />
          </div>
        </div>
      </ParallaxHero>

      {/* BANNER SECTION*/}

      <DesignedBanner />

      {/* FEATURE SECTION */}
      <ParallaxHero>
        <TwoFeatures />
      </ParallaxHero>

      <CollabBanner />
      <ParallaxHero>
        <ReviewSection />
      </ParallaxHero>
    </div>
  );
}

export default ProductPage;
