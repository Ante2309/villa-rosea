import { useState, useRef } from "react";

type SlideshowProps = {
  images: string[];
};

export default function Slideshow({ images }: SlideshowProps) {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  // Swipe
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) prev();
    if (diff < -50) next();
  };

  return (
    <>
      {/* Slideshow */}
      <div
        className="relative w-full h-[480px] overflow-hidden rounded-xl shadow-xl cursor-pointer"
        onClick={() => setFullscreen(true)}
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
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60 text-xl cursor-pointer"
        >
          ‹
        </button>

        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60 text-xl cursor-pointer"
        >
          ›
        </button>

        {/* Točkice */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_: string, i: number) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-white" : "bg-white/40"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN */}
      {fullscreen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setFullscreen(false)}
        >
          <img
            src={images[index]}
            className="max-w-[90%] max-h-[90%] object-contain"
            alt="picture"
          />

          {/* Strelice u fullscreen modu */}
          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-10 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer text-5xl"
          >
            ‹
          </button>

          <button
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-10 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 cursor-pointer text-5xl"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
