import { useNavigate, useParams } from "react-router-dom";
import ConfirmationItem from "../components/confirmation/confirmationItem";
import OrderTotal from "../components/confirmation/OrderTotal";
import ParallaxHero from "../components/ParallaxHero";
import useGetOrder from "../hooks/orders";
import OrderNotFound from "../components/confirmation/OrderNotFound";
import ThankYouBanner from "../components/banners/ThankYouBanner";
import FilledButton from "../components/buttons/FilledButton";

function OrderSummary() {
  const { orderId } = useParams();
  const { isLoading, order } = useGetOrder(orderId);
  const nav = useNavigate();
  if (isLoading) return;

  const currentOrder = order?.[0];

  const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <ParallaxHero>
      {currentOrder ? (
        <>
          <ThankYouBanner />
          <div className="max-w-xl px-6 py-10 mx-auto space-y-6 text-center">
            {/* Logo */}
            <img
              src="/logo/logo.svg"
              alt="CedarGlide Logo"
              className="w-48 mx-auto mb-4"
            />

            {/* Heading */}
            <h3 className="text-2xl font-bold text-gray-800">
              Thank you for your order!
            </h3>
            <p className="text-xl text-gray-600">
              Order #{currentOrder.orderId}
            </p>

            {/* Confirmation Message */}
            <p className="text-base text-gray-700">
              Your order has been confirmed. Below are the details of your
              purchase.
            </p>

            {/* Dates */}
            <div className="space-y-1 text-sm text-gray-700">
              <p>Order Date: {formatDate(currentOrder.orderDate)}</p>
              <p>
                Estimated Delivery: {formatDate(currentOrder.estimatedDelivery)}
              </p>
            </div>

            {/* Items */}
            <div className="pt-6 space-y-4 text-left">
              {currentOrder.items.map((item) => (
                <ConfirmationItem key={item.id} item={item} />
              ))}
            </div>

            {/* Order Total */}
            <div className="pt-4">
              <OrderTotal currentOrder={currentOrder} />
            </div>
          </div>
        </>
      ) : (
        <OrderNotFound />
      )}
      {/* Social Media Section */}
      <div className="mb-10 space-y-6 text-center">
        <div className="flex flex-col items-center gap-2 pt-6">
          <p className="font-medium text-gray-600">Let's Be Friends</p>
          <div className="flex gap-4">
            <img
              src="/icons/twitterBlack.png"
              alt="Twitter"
              className="w-6 h-6 cursor-pointer hover:opacity-75"
            />
            <img
              src="/icons/instagramBlack.png"
              alt="Instagram"
              className="w-6 h-6 cursor-pointer hover:opacity-75"
            />
            <img
              src="/icons/facebookBlack.png"
              alt="Facebook"
              className="w-6 h-6 cursor-pointer hover:opacity-75"
            />
          </div>
        </div>

        {/* Back to Homepage Button */}
        <FilledButton onClick={() => nav("/home")}>
          Back to Homepage
        </FilledButton>
      </div>
    </ParallaxHero>
  );
}

export default OrderSummary;
