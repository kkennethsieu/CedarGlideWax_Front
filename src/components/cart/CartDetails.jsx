import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

function CartDetails() {
  const cart = useSelector((state) => state.cart.items);
  return (
    <div>
      <div>
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <CartTotal />
    </div>
  );
}

export default CartDetails;
