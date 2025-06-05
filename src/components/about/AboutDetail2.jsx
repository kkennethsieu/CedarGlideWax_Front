import { useNavigate } from "react-router-dom";
import FilledButton from "../buttons/FilledButton";
import TransparentButton from "../buttons/TransparentButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function AboutDetail2() {
  const nav = useNavigate();

  return (
    <div className="max-w-[1200px] mx-auto my-12 px-6 sm:px-16 flex flex-col-reverse lg:flex-row items-center gap-12">
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

      {/* Text Section */}
      <div className="w-full space-y-6 lg:w-1/2">
        <h3 className="text-2xl font-semibold leading-tight sm:text-4xl font-gambetta">
          🌲 Rooted in the Ride
        </h3>

        {/* DESCRIPTION */}
        <div className="space-y-5 text-base leading-relaxed text-gray-800 sm:text-lg">
          <p>
            Every bar of <span className="font-semibold">CedarGlide</span> is
            crafted with purpose: smooth glides, clean turns, and a deep respect
            for the mountain. We’re not just a wax brand—we’re riders, makers,
            and dreamers who live for that crisp morning carve and the last run
            under a setting sun.
          </p>
          <p>
            Born from the backcountry and shaped by local lines, CedarGlide is
            about more than performance. It's about connection. To your board.
            To your crew. To the land beneath you.
          </p>
          <p>
            With sustainable ingredients, small-batch blends, and scents
            inspired by alpine forests and winter air, each bar is a tribute to
            the soul of snowboarding.
          </p>
          <p>
            This isn’t mass-produced. This is{" "}
            <span className="italic">
              hand-poured, rider-tested, and mountain-approved
            </span>
            .
          </p>
          <p>
            CedarGlide is for those who chase more than speed—for those who ride
            with intention.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col gap-4 mt-6 lg:flex-row lg:justify-center">
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
    </div>
  );
}

export default AboutDetail2;
