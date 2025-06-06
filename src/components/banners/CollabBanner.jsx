import Banner from "./Banner";
import CollabLogos from "./CollabLogos";
import BannerText from "./BannerText";

function CollabBanner() {
  return (
    <Banner className="bg-inCollab">
      <BannerText>In Collaboration With</BannerText>
      <CollabLogos />
    </Banner>
  );
}

export default CollabBanner;
