import { Link, useNavigate } from "react-router-dom";
import TransparentButton from "./buttons/TransparentButton";
import FilledButton from "./buttons/FilledButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { openModal } from "../redux/modalSlice";

function SingleProduct({ product }) {
  const { img, title, description, price, type, id } = product;
  const dispatch = useDispatch();
  const nav = useNavigate();

  const cartItems = useSelector((state) => state.cart.items);
  const item = cartItems.find((item) => item.id == id);
  const quantity = item ? item.quantity : 0;

  function addItem() {
    dispatch(addToCart(product));
    dispatch(openModal());
  }

  return (
    <div className="flex flex-col items-center gap-5 p-6 sm:p-8 w-full max-w-[400px]">
      <Link to="/cedarwax">
        <img
          className="w-full max-w-[350px] rounded-md shadow-md hover:scale-105 transition-all ease-in-out"
          src={img}
          alt={title}
        />
      </Link>
      <div className="space-y-1">
        <h4 className="text-xl font-bold tracking-wide text-center sm:text-2xl drop-shadow-lg font-gambetta">
          {title}
        </h4>
        <h4 className="text-lg font-semibold tracking-wide text-center text-gray-600 sm:text-xl">
          {type}
        </h4>
      </div>
      <p className="text-sm tracking-wide text-center text-gray-700 sm:text-base">
        {description}
      </p>

      <div className="w-full space-y-3">
        <div className="flex justify-center">
          {quantity > 0 ? (
            <FilledButton
              onClick={() => dispatch(openModal())}
              className="flex items-center justify-center gap-3 px-4 py-2 sm:px-6 sm:py-3 w-fit"
            >
              Added to cart
            </FilledButton>
          ) : (
            <TransparentButton
              onClick={addItem}
              className="flex items-center justify-center gap-3 px-4 py-2 sm:px-6 sm:py-3 w-fit"
            >
              Add To Cart | ${price}
            </TransparentButton>
          )}
        </div>
        <div className="flex justify-center">
          <FilledButton
            className="flex items-center justify-center gap-3 px-4 py-2 sm:px-6 sm:py-3 w-fit"
            onClick={() => nav("/cedarwax")}
          >
            Learn More <ArrowForwardIcon />
          </FilledButton>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
