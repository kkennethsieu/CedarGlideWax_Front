import Banner from "./Banner";
import BannerLogo from "./BannerLogo";
import BannerText from "./BannerText";

function PerformanceBanner() {
  return (
    <Banner image={"url('/images/mountains.jpg')"}>
      <BannerLogo />
      <BannerText>Performance You Can Feel</BannerText>
    </Banner>
  );
}

export default PerformanceBanner;
