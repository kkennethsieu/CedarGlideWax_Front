function OrderTotal({ currentOrder }) {
  const subtotal = currentOrder.items.reduce(
    (sum, item) => sum + item.total,
    0
  );
  const shipping = +(subtotal * 0.1).toFixed(2);
  const tax = +(subtotal * 0.09).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);

  return (
    <div className="w-full mx-auto mt-10 space-y-4 text-gray-700">
      {/* Subtotal */}
      <div className="flex justify-between text-base sm:text-lg">
        <span>Items Subtotal</span>
        <span className="font-medium">${subtotal.toFixed(2)}</span>
      </div>

      {/* Shipping */}
      <div className="flex justify-between text-base sm:text-lg">
        <span>Shipping</span>
        <span className="font-medium">${shipping.toFixed(2)}</span>
      </div>

      {/* Tax */}
      <div className="flex justify-between text-base sm:text-lg">
        <span>Taxes</span>
        <span className="font-medium">${tax.toFixed(2)}</span>
      </div>

      {/* Total */}
      <div className="flex justify-between pt-4 mt-4 text-lg font-semibold text-gray-900 border-t border-gray-300 sm:text-xl">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default OrderTotal;
