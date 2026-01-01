import { useState, useEffect } from "react";
import logo from "../assets/logo2.png";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const links = {
    apartments: "apartmani",
    location: "lokacija",
    contact: "kontakt",
    oil: "ulje",
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  // Close language dropdown when clicking outside
  useEffect(() => {
    const close = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".lang-dropdown")) setLangOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const languages = [
    { code: "hr", label: "Hrvatski", flag: "fi fi-hr" },
    { code: "en", label: "English", flag: "fi fi-gb" },
    { code: "it", label: "Italiano", flag: "fi fi-it" },
  ];

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

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-lg md:text-2xl lg:text-3xl text-white font-medium">
            <li
              onClick={() => scrollToSection(links.apartments)}
              className="cursor-pointer hover:-translate-y-1.5 transition"
            >
              {t("nav.apartments")}
            </li>
            <li
              onClick={() => scrollToSection(links.location)}
              className="cursor-pointer hover:-translate-y-1.5 transition"
            >
              {t("nav.location")}
            </li>
            <li
              onClick={() => scrollToSection(links.contact)}
              className="cursor-pointer hover:-translate-y-1.5 transition"
            >
              {t("nav.contact")}
            </li>
            <li
              onClick={() => scrollToSection(links.oil)}
              className="cursor-pointer hover:-translate-y-1.5 transition"
            >
              {t("nav.oil")}
            </li>
          </ul>
        </nav>

        {/* DESKTOP LANG DROPDOWN (unchanged) */}
        <div className="hidden md:block relative lang-dropdown">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center justify-center gap-2 text-white border-l pl-5 text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className="w-5 h-5"
              fill="white"
            >
              <path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z" />
            </svg>
            LANG
            <span className="text-sm">{langOpen ? "▲" : "▼"}</span>
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-black/50 border border-white/20 rounded-lg shadow-lg">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    localStorage.setItem("lang", lang.code);
                    setLangOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-white hover:bg-white/10 flex items-center gap-2"
                >
                  <span className={`${lang.flag} text-xl`}></span>
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* MOBILE: LANG + HAMBURGER */}
        <div className="flex items-center justify-center gap-2 md:hidden">
          {/* Mobile LANG */}
          <div className="relative lang-dropdown">
            <button
              type="button"
              aria-label="Change language"
              onClick={() => setLangOpen(!langOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
                className="w-7 h-7 rounded-full pt-1.5 hover:fill-gray-300 cursor-pointer fill-white hover:scale-105 transition-all duration-300 ease-in-out"
              >
                <path d="M415.9 344L225 344C227.9 408.5 242.2 467.9 262.5 511.4C273.9 535.9 286.2 553.2 297.6 563.8C308.8 574.3 316.5 576 320.5 576C324.5 576 332.2 574.3 343.4 563.8C354.8 553.2 367.1 535.8 378.5 511.4C398.8 467.9 413.1 408.5 416 344zM224.9 296L415.8 296C413 231.5 398.7 172.1 378.4 128.6C367 104.2 354.7 86.8 343.3 76.2C332.1 65.7 324.4 64 320.4 64C316.4 64 308.7 65.7 297.5 76.2C286.1 86.8 273.8 104.2 262.4 128.6C242.1 172.1 227.8 231.5 224.9 296zM176.9 296C180.4 210.4 202.5 130.9 234.8 78.7C142.7 111.3 74.9 195.2 65.5 296L176.9 296zM65.5 344C74.9 444.8 142.7 528.7 234.8 561.3C202.5 509.1 180.4 429.6 176.9 344L65.5 344zM463.9 344C460.4 429.6 438.3 509.1 406 561.3C498.1 528.6 565.9 444.8 575.3 344L463.9 344zM575.3 296C565.9 195.2 498.1 111.3 406 78.7C438.3 130.9 460.4 210.4 463.9 296L575.3 296z" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute -right-10 mt-2 w-40 bg-black/50 backdrop-blur-md shadow-lg z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      localStorage.setItem("lang", lang.code);
                      setLangOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-white hover:bg-white/10 flex items-center gap-2"
                  >
                    <span className={`${lang.flag} text-xl`}></span>
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Hamburger */}
          <button
            className="text-white text-3xl focus:outline-none md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden  transition-all duration-300 ease-out
        ${
          menuOpen
            ? "opacity-100 max-h-screen py-4 mt-4"
            : "opacity-0 max-h-0 py-0 mt-0 overflow-hidden"
        }`}
      >
        <div className="animate-fadeIn px-6 pt-2">
          <ul className="flex flex-col items-center text-white text-2xl font-medium space-y-3">
            <li
              onClick={() => scrollToSection(links.apartments)}
              className="cursor-pointer hover:-translate-y-1 transition"
            >
              {t("nav.apartments")}
            </li>
            <li
              onClick={() => scrollToSection(links.location)}
              className="cursor-pointer hover:-translate-y-1 transition"
            >
              {t("nav.location")}
            </li>
            <li
              onClick={() => scrollToSection(links.contact)}
              className="cursor-pointer hover:-translate-y-1 transition"
            >
              {t("nav.contact")}
            </li>
            <li
              onClick={() => scrollToSection(links.oil)}
              className="cursor-pointer hover:-translate-y-1 transition"
            >
              {t("nav.oil")}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
