import { Link } from "react-router-dom";
import ParallaxHero from "../ParallaxHero";

export default function OrderNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] p-6 ">
      <div className="max-w-md p-10 text-center bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-6xl font-extrabold text-main">404</h1>
        <h2 className="mb-2 text-2xl font-semibold">Order Not Found</h2>
        <p className="mb-6 text-gray-600">
          We couldn't find an order with that ID. Please check the order number
          and try again.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 font-medium text-white transition rounded bg-main hover:bg-mainDark"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
