export default function Contact() {
  return (
    <section
      id="kontakt"
      className="relative w-full bg-white py-24 px-6 md:px-32 bg-[url('./assets/birdview.jpg')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Sadržaj */}
      <div className="relative z-10">
        {/* Naslov */}
        <div className="fade-trigger flex flex-col items-center space-y-6 mb-16">
          <h2 className="fade-trigger text-4xl md:text-5xl font-bold text-white">
            Kontakt
          </h2>
          <div className="fade-trigger w-24 h-1 bg-white/60 rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Forma */}
          <form className="fade-trigger space-y-6">
            <div className="flex flex-col">
              <label className="text-xl font-medium text-white mb-1">
                Ime i prezime
              </label>
              <input
                type="text"
                className="border border-white/40 bg-black/50 text-white placeholder-white/70 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder="Vaše ime"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xl font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                className="border border-white/40 bg-black/50 text-white placeholder-white/70 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder="Vaš email"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-xl font-medium text-white mb-1">
                Poruka
              </label>
              <textarea
                className="border border-white/40 bg-black/50 text-white placeholder-white/70 rounded-lg px-4 py-3 text-lg h-40 resize-none focus:outline-none focus:ring-2 focus:ring-white/60"
                placeholder="Vaša poruka..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex w-full justify-center px-8 py-3 bg-black text-white rounded-full text-xl font-semibold hover:bg-black/90 transition-transform hover:-translate-y-1.5 cursor-pointer duration-300 border border-white/60"
            >
              Pošalji poruku
            </button>
          </form>

          {/* Kontakt info */}
          <div className="fade-trigger space-y-10 text-white text-2xl">
            <div className="flex flex-col justify-center items-center">
              <h3 className="text-4xl font-semibold text-white mb-2">
                Kontakt informacije
              </h3>
              <p className="text-center leading-relaxed">
                Slobodno nam se javite za rezervacije, dodatne informacije ili
                posebne upite.
              </p>
            </div>

            {/* Ikonice i buttoni */}
            <div className="grid grid-cols-2 gap-3 text-xl">
              {/* WhatsApp */}
              <button
                className="flex items-center gap-3 px-6 py-3 rounded-full text-white text-xl font-semibold 
                           bg-black border border-white 
                            transition hover:-translate-y-1.5 duration-300 cursor-pointer "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  className="w-7 h-7 fill-white transition"
                >
                  <path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" />
                </svg>
                WhatsApp
              </button>

              {/* Poziv */}
              <button
                className="flex items-center gap-3 px-6 py-3 rounded-full text-white text-xl font-semibold 
                           bg-black border border-white 
                            transition hover:-translate-y-1.5 duration-300  cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 fill-white transition"
                >
                  <path d="M164.9 24.6c-7.7-17.8-28-26.5-46.3-19.7l-88 32C12.3 43.3 0 60.1 0 80c0 247.4 200.6 448 448 448 19.9 0 36.7-12.3 43.1-30.6l32-88c6.8-18.3-1.9-38.6-19.7-46.3l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L288 416C200.6 368 144 311.4 96 224l79.3-82.1c13.7-11.1 18.4-30 11.6-46.3l-40-96z" />
                </svg>
                Nazovite
              </button>

              {/* SMS */}
              <button
                className="flex items-center gap-3 px-6 py-3 rounded-full text-white text-xl font-medium 
                           bg-black border border-white 
                            transition hover:-translate-y-1.5 duration-300  cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-6 h-6 fill-white hover:fill-black transition"
                >
                  <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95.2 57.3 131.3C44.5 421.1 2.7 466.5 2.2 467c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116.5-31.8 140.6-50.3C182.3 439.3 218.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32z" />
                </svg>
                SMS
              </button>

              {/* Facebook */}
              <button
                className="flex items-center gap-3 px-6 py-3 rounded-full text-white text-xl font-medium 
                           bg-black border border-white 
                            transition hover:-translate-y-1.5 duration-300  cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-6 h-6 fill-white hover:fill-black transition"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91V127.41c0-25.35 12.42-50.06 52.24-50.06H295V6.26S259.5 0 225.36 0C141.09 0 89.09 54.42 89.09 153.31V195.3H0v92.66h89.09V512h107.82V288z" />
                </svg>
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
