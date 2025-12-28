export default function OViliSection() {
  return (
    <section className="relative w-full bg-[url('./assets/playa.jpg')] bg-center bg-cover py-30 px-6 md:px-32 mt-24">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>

      <div className="fade-trigger relative max-w-5xl mx-auto space-y-10 py-20">
        <h2 className="hero-fade text-4xl md:text-5xl font-bold text-center text-white">
          O Vili Rosea
        </h2>

        <div className="w-28 h-1 bg-white/60 mx-auto rounded-full"></div>

        <p className="hero-fade text-lg md:text-2xl text-white/90 leading-relaxed">
          Naša vila sastoji se od dvije etaže s ukupno dva apartmana. Jedan je
          jednosobni apartman koji sadrži spavaću sobu i kupaonicu te može
          ugostiti do 3 osobe. Drugi je luksuzni četverosobni apartman s četiri
          spavaće sobe i četiri kupaonice, idealan za veće obitelji ili grupe do
          9 gostiju.
        </p>

        <p className="hero-fade text-lg md:text-2xl text-white/90 leading-relaxed">
          Villa Rosea smještena je u blizini Splita – grada prepunog antičkih
          remek‑djela, među kojima je i ljetna palača rimskog cara Dioklecijana
          – te u blizini Trogira, prekrasnog obalnog gradića koji su prije više
          od dvije tisuće godina osnovali stari Grci. Oba grada nalaze se pod
          zaštitom UNESCO‑a.
        </p>

        <p className="hero-fade text-lg md:text-2xl text-white/90 leading-relaxed">
          Vaši domaćini imaju više od 20 godina iskustva u turizmu i stoje vam
          na raspolaganju 24/7, uvijek spremni pomoći kako bi vaš boravak bio
          nezaboravan.
        </p>
      </div>
    </section>
  );
}
