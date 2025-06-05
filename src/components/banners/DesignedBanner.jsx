import Banner from "./Banner";
import BannerLogo from "./BannerLogo";
import BannerText from "./BannerText";

function DesignedBanner() {
  return (
    <Banner image={"url('/images/banner3.jpg')"}>
      <BannerLogo />
      <BannerText>
        Designed for the Ride Built for Glide, Grip, and Speed
      </BannerText>
    </Banner>
  );
}

export default DesignedBanner;
