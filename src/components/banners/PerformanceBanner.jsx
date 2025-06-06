import Banner from "./Banner";
import BannerLogo from "./BannerLogo";
import BannerText from "./BannerText";

function PerformanceBanner() {
  return (
    <Banner className="bg-mountains">
      <BannerLogo />
      <BannerText>Performance You Can Feel</BannerText>
    </Banner>
  );
}

export default PerformanceBanner;
