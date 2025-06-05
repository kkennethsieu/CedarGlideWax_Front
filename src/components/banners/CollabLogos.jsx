function CollabLogos() {
  return (
    <div className="relative z-10 flex flex-wrap items-center justify-center gap-12 px-6 ">
      {[
        // List logos as an array for cleaner JSX
        { src: "../icons/BataleonLogoWhite.svg", alt: "Bataleon Logo" },
        { src: "../icons/FWTLOGOWhite.svg", alt: "FWT Logo" },
        { src: "../icons/SalomonWhite.svg", alt: "Salomon Logo" },
        { src: "../icons/BurtonWhite.svg", alt: "Burton Logo" },
        { src: "../icons/LIBTECHWhite.svg", alt: "Lib Tech Logo" },
        { src: "../icons/PatagoniaWhite.svg", alt: "Patagonia Logo" },
      ].map(({ src, alt }) => (
        <div
          key={alt}
          className="flex items-center justify-center w-24 sm:w-32"
        >
          <img
            src={src}
            alt={alt}
            className="object-contain max-h-12 sm:max-h-16 drop-shadow-2xl"
          />
        </div>
      ))}
    </div>
  );
}

export default CollabLogos;
