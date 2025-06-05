import StarRating from "./StarRating";
import AddIcon from "@mui/icons-material/Add";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentTypes from "./PaymentTypes";
import { useState } from "react";
import { addToCart } from "../../redux/cartSlice";
import { openModal } from "../../redux/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import TransparentButton from "../buttons/TransparentButton";
import FilledButton from "../buttons/FilledButton";
import useProducts from "../../hooks/useProducts";

function ProductDetail() {
  const { isLoading, products } = useProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  if (isLoading) return;
  const selectedProduct = products[currentIndex];
  const item = cartItems.find((item) => item.id == selectedProduct.id);
  const quantity = item ? item.quantity : 0;

  function addItem(product) {
    dispatch(addToCart(product));
    dispatch(openModal());
  }
  return (
    <div className="w-full p-6 mx-auto space-y-5 ">
      <h3 className="text-4xl font-semibold tracking-wide font-gambetta drop-shadow-lg">
        CedarGlide Snowboard Wax
      </h3>
      <div className="flex space-x-6 tracking-wide">
        <p>5K Sold</p>
        <StarRating value={4.9} />
        <p>4.9</p>
        <p>(102 Reviews)</p>
      </div>
      <p className="text-lg tracking-wide">
        Handcrafted, high-performance snowboard wax. Infused with subtle cedar
        essence and designed for all-mountain conditions.
      </p>
      <p className="flex items-center space-x-4">
        <span className="text-2xl font-bold">
          ${selectedProduct.price.toFixed(2)}
        </span>
        <span className="text-red-600 line-through">
          ${selectedProduct.discount.toFixed(2)}
        </span>
      </p>

      {/* TYPE OF PRODUCT */}
      <div className="space-y-4">
        <p className="text-lg">Type: {selectedProduct.title}</p>
        <div className="flex gap-4">
          {products.map((product, index) => (
            <img
              key={product.id}
              src={product.img}
              alt={product.title}
              onClick={() => setCurrentIndex(index)}
              className={`w-20 h-20 object-cover rounded-lg border-2 cursor-pointer ${
                currentIndex === index
                  ? "border-blue-500 scale-105"
                  : "border-gray-300 hover:border-blue-300"
              } transition-transform`}
            />
          ))}
        </div>
      </div>

      {/* ADD BUTTONS */}
      <div className="flex flex-row gap-4 lg:flex-col">
        {quantity > 0 ? (
          <FilledButton
            className="flex items-center justify-center w-full gap-3 px-6 py-3"
            onClick={() => dispatch(openModal())}
          >
            Added To Cart
          </FilledButton>
        ) : (
          <TransparentButton
            onClick={() => addItem(products[currentIndex])}
            className="flex items-center justify-center w-full gap-3 px-6 py-3"
          >
            <AddIcon /> Add To Cart
          </TransparentButton>
        )}

        <FilledButton className="w-full">
          <ShoppingCartIcon />
          Buy Now
        </FilledButton>
      </div>

      {/* PAYMENTS */}
      <PaymentTypes />
    </div>
  );
}

export default ProductDetail;
