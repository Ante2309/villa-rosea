import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

type SlideshowProps = {
  images: string[];
};

export default function Slideshow({ images }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [fade, setFade] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  // Swipe (normal mode)
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prev();
    if (diff < -50) next();
  };

  // Swipe (fullscreen mode)
  const handleFullscreenTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleFullscreenTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prev();
    if (diff < -50) next();
  };

  // ESC + arrow keys
  useEffect(() => {
    if (!fullscreen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeFullscreen();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [fullscreen, index]);

  // Disable scroll + prevent layout shift
  useEffect(() => {
    if (fullscreen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }
  }, [fullscreen]);

  const openFullscreen = () => {
    setFullscreen(true);
    setTimeout(() => setFade(true), 10);
  };

  const closeFullscreen = () => {
    setFade(false);
    setTimeout(() => setFullscreen(false), 200);
  };

  return (
    <>
      {/* Slideshow */}
      <div
        className="relative w-full h-[480px] overflow-hidden rounded-xl shadow-xl cursor-pointer"
        onClick={openFullscreen}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[index]}
          className="w-full h-full object-cover transition-opacity duration-500"
          alt="picture"
        />

        {/* Strelice */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white hover:text-emerald-300 text-6xl cursor-pointer transition-transform hover:scale-110"
        >
          ‹
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-emerald-300 text-6xl cursor-pointer transition-transform hover:scale-110"
        >
          ›
        </button>

        {/* Točkice */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${
                i === index ? "bg-white scale-125" : "bg-white/40"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN preko PORTALA */}
      {fullscreen &&
        createPortal(
          <div
            className={`fixed inset-0 flex items-center justify-center backdrop-blur-md bg-black/80 transition-opacity duration-300 z-9999 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeFullscreen}
            onTouchStart={handleFullscreenTouchStart}
            onTouchEnd={handleFullscreenTouchEnd}
          >
            <img
              src={images[index]}
              className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-300 scale-100 hover:scale-[1.02]"
              alt="picture"
            />

            {/* Strelice u fullscreen modu */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-10 top-1/2 -translate-y-1/2 text-white hover:text-emerald-300 text-6xl cursor-pointer transition-transform hover:scale-125"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-10 top-1/2 -translate-y-1/2 text-white hover:text-emerald-300 text-6xl cursor-pointer transition-transform hover:scale-125"
            >
              ›
            </button>
          </div>,
          document.body
        )}
    </>
  );
}
