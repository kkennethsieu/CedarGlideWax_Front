function TransparentButton({ className = "", children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2.5 
        border border-main text-main 
        rounded-lg font-medium 
        hover:bg-main hover:text-white 
        transition-all duration-200 ease-in-out 
        focus:outline-none focus:ring-2 focus:ring-main/50 
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default TransparentButton;
