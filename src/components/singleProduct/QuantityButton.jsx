import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function QuantityButton({ initialAmount = 1, onChange }) {
  const [amount, setAmount] = useState(initialAmount);
  console.log(amount);

  const increase = () => {
    const newAmount = amount + 1;
    setAmount(newAmount);
    if (onChange) onChange(newAmount);
  };

  const decrease = () => {
    const newAmount = amount > 1 ? amount - 1 : 1;
    setAmount(newAmount);
    if (onChange) onChange(newAmount);
  };

  return (
    <div className="space-y-3">
      <p className="text-lg">Quantity</p>
      <div className="flex items-center justify-center px-3 py-2 space-x-8 border border-gray-300 w-[30%] rounded-lg">
        <button onClick={increase}>
          <AddIcon />
        </button>
        <p>{amount}</p>
        <button onClick={decrease}>
          <RemoveIcon />
        </button>
      </div>
    </div>
  );
}

export default QuantityButton;
