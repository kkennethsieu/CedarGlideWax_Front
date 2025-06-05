import { useSelector } from "react-redux";

function CartTotal() {
  const subTotal = useSelector((state) => state.cart.totalAmount);
  const shipping = subTotal * 0.1;
  const totalAmount = subTotal + shipping;

  const cart = useSelector((state) => state.cart.items);
  console.log(cart);

  async function makePayment() {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: cart }),
    });

    console.log(cart);
    const data = await res.json();

    if (data.url) {
      window.location.assign(data.url);
    } else {
      console.log("no Url returned from stripe session");
    }
    // forward user to stripe
  }

  return (
    <div className="pt-6 space-y-4 border-t border-gray-200">
      {/* Subtotal */}
      <div className="flex justify-between text-sm">
        <p className="text-gray-600">Items Subtotal</p>
        <p className="font-medium">${subTotal.toFixed(2)}</p>
      </div>

      {/* Shipping */}
      <div className="flex justify-between text-sm">
        <p className="text-gray-600">Shipping</p>
        <p className="font-medium">${shipping.toFixed(2)}</p>
      </div>

      {/* Estimated Total */}
      <div className="flex justify-between pt-2 text-base font-semibold border-t border-gray-200">
        <p>Estimated Total</p>
        <p>${totalAmount.toFixed(2)}</p>
      </div>

      {/* Checkout Button */}
      <button
        onClick={makePayment}
        className="w-full py-3 text-sm font-medium text-white transition bg-black rounded-lg hover:bg-gray-800"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartTotal;
