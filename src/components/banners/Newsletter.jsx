import Banner from "./Banner";
import BannerText from "./BannerText";
import FilledButton from "../buttons/FilledButton";

function Newsletter() {
  return (
    <Banner className="bg-newsletter">
      <BannerText>Subscribe for Exclusive Wax Deals & Insights</BannerText>
      <form className="z-30 flex flex-col items-center w-full max-w-md gap-3 px-4 mx-auto sm:flex-row">
        <input
          type="email"
          required
          placeholder="Your Email"
          className="flex-1 w-full px-4 py-3 text-sm rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-main"
        />
        <div className="w-full sm:w-auto">
          <FilledButton className="w-full px-6 py-3 text-sm sm:w-auto">
            Submit
          </FilledButton>
        </div>
      </form>
    </Banner>
  );
}

export default Newsletter;
