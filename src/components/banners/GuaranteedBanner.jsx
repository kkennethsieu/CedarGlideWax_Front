import { FaShippingFast, FaLock, FaCommentDollar } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

import GuaranteedItem from "./GuaranteedItem";

const icons = [
  {
    icon: <FaShippingFast size="28" />,
    title: "Free Delivery",
    description: "For all orders over $25",
  },
  {
    icon: <FaLock size="28" />,
    title: "Safe Payment",
    description: "100% Secure Payment",
  },
  {
    icon: <FaCommentDollar size="28" />,
    title: "Shop With Confidence",
    description: "Easy Returns For You",
  },
  {
    icon: <BiSupport size="28" />,
    title: "24/7 Help Center",
    description: "Dedicated Support Team",
  },
];
function GuaranteedBanner() {
  return (
    <div className="mx-auto flex flex-wrap md:justify-between justify-center gap-8 max-w-[1200px] px-4 py-10">
      {icons.map((item) => (
        <GuaranteedItem key={item.title} item={item} />
      ))}
    </div>
  );
}

export default GuaranteedBanner;
