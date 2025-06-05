function FilledButton({ className = "", children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2.5 
        bg-main text-white 
        border border-main 
        rounded-lg font-semibold 
        shadow-sm hover:bg-main/90 
        transition-all duration-200 ease-in-out 
        focus:outline-none focus:ring-2 focus:ring-main/50 
        ${className}
      `}
    >
      {children}
    </button>
  );
}

export default FilledButton;
