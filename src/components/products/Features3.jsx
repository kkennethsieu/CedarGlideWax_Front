import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TransparentButton from "../buttons/TransparentButton";
import { useNavigate } from "react-router-dom";

function Features3() {
  const nav = useNavigate();
  return (
    <section className="px-6 py-20 mx-auto max-w-[1200px] space-y-20">
      <h3 className="pb-4 mx-auto text-4xl font-bold text-center text-gray-900 border-b-4 border-main font-gambetta w-fit">
        Features
      </h3>

      {/* Feature Block 1 */}
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div className="text-center md:w-[50%] space-y-3">
          <h4 className="text-2xl font-semibold font-gambetta">
            Temperature-Specific Formulas
          </h4>
          <p className="leading-relaxed tracking-wide text-gray-700 font-chivo">
            Each wax is crafted for cold, warm, or all-mountain conditions—
            maximizing glide and control in any weather.
          </p>
        </div>
        <img
          src="/images/feature1.jpg"
          alt="Temperature-Specific"
          className="rounded-lg shadow-lg md:w-[45%] object-cover"
        />
      </div>

      {/* Feature Block 2 */}
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <img
          src="/images/feature2.jpg"
          alt="Eco-Friendly Blend"
          className="rounded-lg shadow-lg md:w-[45%] object-cover"
        />
        <div className="text-center md:w-[50%] space-y-3">
          <h4 className="text-2xl font-semibold font-gambetta">
            Eco-Friendly Blend
          </h4>
          <p className="leading-relaxed tracking-wide text-gray-700 font-chivo">
            Made with biodegradable, non-toxic ingredients that are safe for the
            mountains and your board.
          </p>
        </div>
      </div>

      {/* Feature Block 3 */}
      <div className="flex flex-col-reverse items-center justify-between gap-10 md:flex-row">
        <div className="text-center md:w-[50%] space-y-3">
          <h4 className="text-2xl font-semibold font-gambetta">
            Rider-Tested Performance
          </h4>
          <p className="leading-relaxed tracking-wide text-gray-700 font-chivo">
            Tested by real snowboarders to ensure smooth turns, fast runs, and
            long-lasting durability.
          </p>
        </div>
        <img
          src="/images/feature3.jpg"
          alt="Rider-Tested"
          className="rounded-lg shadow-lg md:w-[45%] object-cover"
        />
      </div>

      {/* CTA Button */}
      <div className="flex justify-center" onClick={() => nav("/cedarwax")}>
        <TransparentButton className="flex items-center justify-center gap-3 px-6 py-3 w-fit">
          Learn More <ArrowForwardIcon />
        </TransparentButton>
      </div>
    </section>
  );
}

export default Features3;
