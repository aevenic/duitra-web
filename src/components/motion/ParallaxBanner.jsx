import React from "react";

const ParallaxBanner = ({ src, height, speed, pospx, pos }) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const offset = window.scrollY * speed;
      ref.current.style.backgroundPosition = `center calc(${pospx} ${pos} ${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`w-full ${height}`}
      style={{
        backgroundImage: `url('${src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        willChange: "background-position"
      }}
    />
  );
};

export default ParallaxBanner;
