import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cartSlice";

function CartItem({ item }) {
  const { title, quantity, total, img } = item;
  const dispatch = useDispatch();
  if (quantity == 0) return;
  return (
    <div className="flex items-center justify-between w-full p-4 border-b border-gray-200">
      {/* Product Image */}
      <img
        src={img}
        className="object-cover w-24 h-24 rounded-md"
        alt={title}
      />

      {/* Product Details & Quantity */}
      <div className="flex flex-col justify-between flex-1 px-4 space-y-2">
        <div>
          <h3 className="text-lg font-semibold">CedarGlide Snowboard Wax</h3>
          <p className="text-sm text-gray-500">Type: {title}</p>
        </div>
        <div className="flex items-center justify-start px-3 py-1 space-x-6 border border-gray-300 rounded-lg w-fit">
          <button onClick={() => dispatch(decreaseQuantity(item))}>
            <RemoveIcon fontSize="small" />
          </button>
          <p className="font-medium text-md">{quantity}</p>
          <button onClick={() => dispatch(increaseQuantity(item))}>
            <AddIcon fontSize="small" />
          </button>
        </div>
      </div>

      {/* Price & Delete */}
      <div className="flex flex-col items-end justify-between h-24">
        <button
          className="text-gray-500 transition hover:text-red-500"
          onClick={() => dispatch(removeFromCart(item))}
        >
          <DeleteOutlineIcon />
        </button>
        <p className="text-lg font-semibold">${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CartItem;
