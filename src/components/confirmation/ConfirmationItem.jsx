function ConfirmationItem({ item }) {
  const { title, quantity, price, total, img } = item;
  if (quantity === 0) return null;

  return (
    <div className="flex items-center justify-between w-full p-4 border-b border-gray-200">
      {/* Product Image */}
      <img
        src={img}
        className="object-cover w-24 h-24 rounded-md"
        alt={title}
      />

      {/* Product Info */}
      <div className="flex-1 px-4 space-y-1">
        <h3 className="text-base font-semibold">CedarGlide Snowboard Wax</h3>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-sm text-gray-400">Qty: {quantity}</p>
        <p className="text-sm text-gray-400">Unit Price: ${price.toFixed(2)}</p>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="text-lg font-semibold">${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ConfirmationItem;
