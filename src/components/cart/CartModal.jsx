import { useSelector } from "react-redux";
import CartDetails from "./CartDetails";
import EmptyCart from "./EmptyCart";

function CartModal() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <>
      {/* Title */}
      <h2 className="pt-4 pb-2 text-xl font-semibold">
        My Cart ({cartQuantity})
      </h2>
      {/* Cart Items (scrollable if long) */}
      <div className="flex-1 pr-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
        {cartQuantity > 0 ? <CartDetails /> : <EmptyCart />}
      </div>
    </>
  );
}

export default CartModal;
