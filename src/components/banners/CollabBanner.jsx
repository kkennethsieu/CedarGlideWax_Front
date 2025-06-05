import Banner from "./Banner";
import CollabLogos from "./CollabLogos";
import BannerText from "./BannerText";

function CollabBanner() {
  return (
    <Banner image={"url('/images/inCollab.jpg')"}>
      <BannerText>In Collaboration With</BannerText>
      <CollabLogos />
    </Banner>
  );
}

export default CollabBanner;
