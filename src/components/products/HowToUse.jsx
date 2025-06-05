import HowToUseItem from "./HowToUseItem";
import FilledButton from "../buttons/FilledButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const tasks = [
  {
    img: "/products/step1.jpg",
    title: "1. Clean & Prep",
    description:
      "Remove old wax, dirt, and grime with a scraper and secure it on a flat surface.",
  },
  {
    img: "/products/step2.jpg",
    title: "2. Drip & Iron",
    description:
      "Drip wax evenly by holding it against a warm waxing iron. Spread the wax across the base with slow, even passes.",
  },
  {
    img: "/products/step3.jpg",
    title: "3. Let It Set",
    description: "Allow wax to cool and harden completely (about 30 minutes).",
  },
  {
    img: "/products/step4.jpg",
    title: "4. Scrape & Buff",
    description: "Scrape off the extra wax and brush the base for max glide.",
  },
];

function HowToUse() {
  const nav = useNavigate();

  return (
    <section className="max-w-[1200px] px-6 mx-auto my-20">
      <h3 className="pb-6 mx-auto text-4xl font-bold text-center text-gray-900 border-b-4 sm:text-3xl border-main font-gambetta w-fit">
        How To Use
      </h3>

      <div className="grid grid-cols-1 mt-10 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {tasks.map((item) => (
          <HowToUseItem key={item.img} item={item} />
        ))}
      </div>

      <div className="flex justify-center md:mt-10">
        <FilledButton
          onClick={() => nav("/cedarwax")}
          className="flex items-center justify-center gap-3 px-6 py-3 w-fit"
        >
          Shop Now <ArrowForwardIcon />
        </FilledButton>
      </div>
    </section>
  );
}

export default HowToUse;
