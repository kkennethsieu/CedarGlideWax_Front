import { useEffect, useState } from "react";

function ParallaxHero({ children }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffsetY(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative overflow-hidden">
      {/* Background Layer */}

      <div
        className="absolute top-0 left-0 w-full h-full duration-75 ease-linear transform bg-center bg-cover will-change-transform bg-parallax"
        style={{
          transform: `scale(${1 + offsetY * 0.00058})`,
        }}
      ></div>
      {/* Overlay for brightness/contrast */}

      <div className="absolute top-0 left-0 z-10 w-full h-full bg-gray-50 opacity-95"></div>
      {/* Foreground Content */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}

export default ParallaxHero;
