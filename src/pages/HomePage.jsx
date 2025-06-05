import Faq from "../components/home/Faq";
import HomeNav from "../components/home/HomeNav";
import Newsletter from "../components/banners/Newsletter";
import Products from "../components/Products";
import ReviewBanner from "../components/home/ReviewBanner";
import SnowboardDemo from "../components/home/SnowboardDemo";
import Footer from "../components/Footer";
import ParallaxHero from "../components/ParallaxHero";
import CollabBanner from "../components/banners/CollabBanner";
import PerformanceBanner from "../components/banners/PerformanceBanner";
import { motion } from "framer-motion";
function HomePage() {
  return (
    <>
      {/* Nav */}
      <HomeNav />

      {/* Products */}
      <ParallaxHero>
        <Products title="CedarGlide Snowboard Wax" />
      </ParallaxHero>

      {/* Performance Banner */}
      <PerformanceBanner />

      {/* Board Demo  */}
      <ParallaxHero>
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <SnowboardDemo />
        </motion.div>
      </ParallaxHero>

      {/* Collab Banner  */}
      <CollabBanner />

      <ParallaxHero>
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <ReviewBanner />
        </motion.div>
      </ParallaxHero>

      <ParallaxHero>
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Faq />
        </motion.div>
      </ParallaxHero>

      <Newsletter />
      <Footer />
    </>
  );
}

export default HomePage;
