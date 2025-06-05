function BannerText({ children }) {
  return (
    <p className="relative z-10 px-4 text-xl font-bold tracking-wide text-center text-white sm:text-2xl md:text-3xl font-gambetta drop-shadow-lg">
      {children}
    </p>
  );
}

export default BannerText;
