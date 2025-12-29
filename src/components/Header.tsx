import { useState, useEffect } from "react";
import logo from "../assets/logo2.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fade-down fixed top-0 w-full z-50 backdrop-blur-sm transition-all duration-300 min-h-16
        ${
          scrolled
            ? "bg-black/50 py-3"
            : "bg-linear-to-b from-black/40 to-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="/">
          <img
            className={`drop-shadow-lg transition-all duration-300 cursor-pointer hover:scale-110
              ${scrolled ? "w-10 md:w-14" : "w-12 md:w-16"}`}
            src={logo}
            alt="Logo"
          />
        </a>

        {/* Desktop navigacija */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-lg md:text-2xl lg:text-3xl text-white font-medium">
            {["Apartmani", "Lokacija", "Kontakt", "Maslinovo ulje"].map(
              (item) => (
                <li
                  key={item}
                  className="transition-transform duration-300 hover:-translate-y-1.5 hover:text-stone-100 cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Desktop jezični gumbi */}
        <div className="hidden md:flex space-x-2">
          {["hr", "en", "it"].map((lang) => (
            <button
              key={lang}
              className="min-w-10 px-3.5 py-1.5 rounded-full border border-white bg-transparent text-white text-center transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer"
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Hamburger meni (mobitel) */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile meni */}
      <div
        className={`md:hidden backdrop-blur-md overflow-hidden transition-all duration-300 ease-out
          ${menuOpen ? "max-h-[500px] mt-4 pb-4" : "max-h-0 mt-0 pb-0"}`}
      >
        <div className="animate-fadeIn px-6 pt-4">
          <ul className="flex flex-col items-center text-white text-xl font-medium px-6 space-y-4">
            {["Apartmani", "Lokacija", "Kontakt", "Maslinovo ulje"].map(
              (item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:-translate-y-1 transition-transform duration-300"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          {/* Tanka linija */}
          <div className="w-full h-px bg-white/30 my-4"></div>

          {/* Jezični gumbi */}
          <div className="flex justify-center space-x-3 px-6">
            {["hr", "en", "it"].map((lang) => (
              <button
                key={lang}
                className="min-w-10 px-3 py-1.5 rounded-full border border-white bg-transparent text-white text-center transition-transform hover:-translate-y-1.5 duration-300"
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
