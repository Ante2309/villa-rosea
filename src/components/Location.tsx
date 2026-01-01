export default function Location() {
  return (
    <section
      id="lokacija"
      className="w-full bg-white mb-24 py-24 px-6 md:px-32"
    >
      {/* Naslov */}
      <div className="fade-trigger flex flex-col items-center space-y-6 mb-16">
        <h2 className="fade-trigger text-4xl md:text-5xl font-bold text-black">
          Lokacija
        </h2>
        <div className="fade-trigger w-24 h-1 bg-gray-300 rounded-full"></div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center ">
        {/* Tekst */}
        <div className="fade-trigger space-y-6">
          <p className="text-xl md:text-2xl  text-gray-700 leading-relaxed">
            Villa Rosea nalazi se u mirnom priobalnom naselju između Splita i
            Trogira, dvaju UNESCO dragulja udaljenih svega nekoliko minuta
            vožnje. Smještena je u tihoj ulici okruženoj borovom šumom, idealnoj
            za opuštanje, a najbliža plaža nalazi se na samo nekoliko minuta
            hoda.
          </p>

          <div className="w-full h-px bg-gray-300"></div>

          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            Split je poznat po Dioklecijanovoj palači i bogatoj povijesti, dok
            je Trogir jedan od najljepših primorskih gradića na Jadranu, osnovan
            prije više od dvije tisuće godina. Lokacija vile omogućuje savršenu
            ravnotežu između mira, prirode i blizine svih važnih sadržaja.
          </p>
        </div>

        {/* Mapa */}
        <div className="fade-trigger w-full h-[400px] rounded-xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.471139435478!2d16.335478976530503!3d43.50096836226303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1335687325b02b9d%3A0x544f4576823fbc7a!2sVilla%20Rosea!5e1!3m2!1shr!2hr!4v1766705739631!5m2!1shr!2hr"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
