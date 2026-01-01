import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className="relative h-screen w-full bg-[url('./assets/okucnica.jpg')] bg-center bg-cover flex items-center">
      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-8 md:px-16">
        {/* Naslov */}
        <h1 className="hero-fade text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-xl text-wrap">
          {t("hero.title")}
        </h1>

        {/* Opis */}
        <p className="hero-fade-delay mt-6 text-2xl md:text-3xl lg:text-4xl text-white/90 drop-shadow-lg max-w-xl ">
          {t("hero.desc")}
        </p>

        {/* Gumb */}
        <button className="hero-fade-delay-2 mt-8 px-6 py-3 bg-black ackdrop-blur-md text-white font-semibold rounded-full border border-white/40 hover:bg-black/80 transition-all duration-300  cursor-pointer hover:-translate-y-1.5 text-xl">
          {t("hero.button")}
        </button>
      </div>
    </section>
  );
}
