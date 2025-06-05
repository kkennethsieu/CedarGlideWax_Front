import AboutCoverImg from "../components/about/AboutCoverImg";
import AboutDetail1 from "../components/about/AboutDetail1";
import AboutDetail2 from "../components/about/AboutDetail2";
import CollabBanner from "../components/banners/CollabBanner";
import ParallaxHero from "../components/ParallaxHero";
function AboutUs() {
  return (
    <div>
      <AboutCoverImg />
      <ParallaxHero>
        <AboutDetail1 />
      </ParallaxHero>
      <CollabBanner />
      <ParallaxHero>
        <AboutDetail2 />
      </ParallaxHero>
    </div>
  );
}

export default AboutUs;
