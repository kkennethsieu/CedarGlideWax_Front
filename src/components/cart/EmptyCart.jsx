function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6 text-center">
      <p className="text-lg font-semibold text-gray-700">Your cart is empty</p>
      <button className="px-6 py-3 text-sm font-medium text-white transition bg-black rounded-lg hover:bg-gray-800">
        Shop Now
      </button>
    </div>
  );
}

export default EmptyCart;
