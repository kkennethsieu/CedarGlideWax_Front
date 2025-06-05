function Banner({ image, children }) {
  return (
    <div
      className="relative w-full px-4 py-10 bg-center bg-cover sm:px-8 sm:py-12"
      style={{ backgroundImage: image }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
        {children}
      </div>
    </div>
  );
}

export default Banner;
