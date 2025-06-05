import Products from "../components/Products";
import ParallaxHero from "../components/ParallaxHero";
import PerformanceBanner from "../components/banners/PerformanceBanner";
import Features3 from "../components/products/Features3";
import HowToUse from "../components/products/HowToUse";
import GuaranteedBanner from "../components/banners/GuaranteedBanner";

function ProductsPage() {
  return (
    <div>
      <img className="" src="/products/group_img_banner.png" />
      <ParallaxHero>
        <Products title="Peak Performance Awaits You" />
      </ParallaxHero>
      <PerformanceBanner />
      <ParallaxHero>
        <Features3 />
      </ParallaxHero>
      <ParallaxHero>
        <GuaranteedBanner />
      </ParallaxHero>
      <ParallaxHero>
        <HowToUse />
      </ParallaxHero>
    </div>
  );
}

export default ProductsPage;
