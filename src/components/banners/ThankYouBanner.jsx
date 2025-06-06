import Banner from "./Banner";
import CollabLogos from "./CollabLogos";
import BannerText from "./BannerText";

function ThankYouBanner() {
  return (
    <Banner className="bg-orderBanner">
      <BannerText>
        Thank You For Your Order! <br /> Let Us Know If You Have Questions!
      </BannerText>
    </Banner>
  );
}

export default ThankYouBanner;
