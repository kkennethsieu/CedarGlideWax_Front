import Banner from "./Banner";
import BannerLogo from "./BannerLogo";
import BannerText from "./BannerText";

function FooterBanner() {
  return (
    <Banner image={"url('/images/cedarWaxBanner.jpg')"}>
      <BannerLogo />
      <BannerText> We Can’t Wait To Get You Back Out Shredding</BannerText>
    </Banner>
  );
}

export default FooterBanner;
