import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Custom keyframes — radi bez tailwind.config.js */}
      <style>
        {`
          @keyframes bounceSlow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
        `}
      </style>

      <button
        onClick={scrollToTop}
        className={`
          cursor-pointer fixed bottom-8 right-8 z-50
          w-14 h-14 rounded-full
          bg-black text-white 
          flex items-center justify-center
          shadow-lg border border-white/70
          transition-all duration-300
          hover:-translate-y-2 hover:scale-105
          ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        style={{
          animation: "bounceSlow 2.4s infinite",
        }}
      >
        {/* Strelica */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="w-6 h-6 fill-white"
        >
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.3l105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
        </svg>
      </button>
    </>
  );
}
