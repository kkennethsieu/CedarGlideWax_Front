import { useState } from "react";

function FaqItem({ faq }) {
  const { question, answer } = faq;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-4 transition-all border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-xl font-semibold text-left text-gray-800 font-gambetta hover:text-main focus:outline-none"
      >
        <span>{question}</span>
        <span className="text-2xl font-bold text-main">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="leading-7 text-gray-700 font-chivo">{answer}</p>
      </div>
    </div>
  );
}

export default FaqItem;
