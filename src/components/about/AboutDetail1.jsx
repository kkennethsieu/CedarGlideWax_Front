import { useNavigate } from "react-router-dom";
import FilledButton from "../buttons/FilledButton";
import TransparentButton from "../buttons/TransparentButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function AboutDetail1() {
  const nav = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto my-12 px-6 sm:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
      {/* Text Section */}
      <div className="w-full space-y-6 lg:w-1/2">
        <h3 className="text-2xl font-semibold leading-tight sm:text-4xl font-gambetta">
          🏔️ Providing Quality Snowboard Wax Since 1990
        </h3>
        <div className="space-y-5 text-base leading-relaxed text-gray-800 sm:text-lg">
          <p>
            CedarGlide Wax began with a simple mission: create wax that performs
            as hard as the riders who use it. For over three decades, we’ve been
            handcrafting formulas designed to handle real mountain
            conditions—from frozen powder mornings to slushy spring laps.
          </p>
          <p>
            What started in a garage with a hot iron and a passion for perfect
            turns has grown into a trusted name on the slopes. Our roots are
            deep in the snowboarding culture, shaped by late-night tuning
            sessions, local competitions, and countless chairlift conversations.
          </p>
          <p>
            We’ve tested our wax across continents and climates—but our heart
            has always stayed close to home: where the snow is unpredictable,
            the stoke is real, and the ride matters most.
          </p>
          <p>
            Through the years, one thing’s never changed: our commitment to{" "}
            <span className="font-semibold">
              quality, sustainability, and soul
            </span>
            . Whether you're gearing up for your first run or your hundredth
            season, <span className="font-semibold">CedarGlide</span> is wax
            that rides with you.
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-6 lg:justify-center lg:flex-row">
          <button onClick={() => nav("/cedarwax")} className="w-full sm:w-auto">
            <TransparentButton className="flex items-center justify-center w-full gap-2 px-6 py-3">
              Learn More <ArrowForwardIcon />
            </TransparentButton>
          </button>
          <button onClick={() => nav("/cedarwax")} className="w-full sm:w-auto">
            <FilledButton className="flex items-center justify-center w-full gap-2 px-6 py-3">
              Shop Now <ArrowForwardIcon />
            </FilledButton>
          </button>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-col w-[85%] gap-6 lg:w-1/2 md:w-full">
        <img
          src="/products/group_img.png"
          alt="CedarGlide Wax group 1"
          className="w-full hidden lg:inline-block rounded-lg shadow-lg object-cover max-h-[320px]"
        />
        <img
          src="/products/group_img.png"
          alt="CedarGlide Wax group 2"
          className="w-full rounded-lg shadow-lg object-cover max-h-[320px]"
        />
      </div>
    </div>
  );
}

export default AboutDetail1;
