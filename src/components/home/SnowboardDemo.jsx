import { useNavigate } from "react-router-dom";
import FilledButton from "../buttons/FilledButton";
import Feature from "./Feature";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function SnowboardDemo() {
  const nav = useNavigate();
  return (
    <section className="max-w-[1200px] mx-auto m-16 px-6 flex flex-col gap-12">
      {/* Header */}
      <div className="flex flex-col items-center gap-6 mb-10 max-w-[800px] mx-auto text-center">
        <h2 className="pb-6 text-2xl font-bold tracking-wide text-gray-900 border-b-4 sm:text-3xl font-gambetta border-main drop-shadow-lg w-fit">
          Where Wax Meets Higher Expectations
        </h2>
        <p className="text-base md:text-lg font-chivo tracking-wide leading-relaxed max-w-[600px] text-gray-700">
          Handcrafted, high-performance snowboard wax. Infused with subtle cedar
          essence and designed for all-mountain conditions.
        </p>
      </div>

      {/* Features + Image Section */}
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
        {/* Left Features */}
        <div className="flex flex-col justify-center gap-16 max-w-[450px] w-full">
          <Feature
            img="../icons/speed.svg"
            title="Increases Speed"
            description="Wax reduces friction between your base and the snow, so you ride faster—especially on flat or sticky terrain."
          />
          <Feature
            img="../icons/temp.svg"
            title="Adapts to Temperature"
            description="Different waxes are designed for cold, warm, or mixed conditions so your board performs better in any season."
          />
        </div>

        {/* Center Image */}
        <img
          className="object-contain w-40 sm:w-56 md:w-72"
          src="../images/snowboard.png"
          alt="Snowboard with wax features"
          loading="lazy"
        />

        {/* Right Features */}
        <div className="flex flex-col justify-center gap-16 max-w-[450px] w-full px-4">
          <Feature
            img="../icons/control.svg"
            title="Better Control"
            description="A smooth, well-waxed board gives you more consistent turns and better edge transitions."
          />
          <Feature
            img="../icons/board.svg"
            title="Protects the Base"
            description="Wax seals the pores of your snowboard base, preventing it from drying out or getting damaged by debris."
          />
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-6">
        <FilledButton
          className="flex items-center justify-center gap-3 px-6 py-3 w-fit"
          onClick={() => nav("/cedarwax")}
        >
          Learn More <ArrowForwardIcon />
        </FilledButton>
      </div>
    </section>
  );
}

export default SnowboardDemo;
