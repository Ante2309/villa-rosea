import logo from "../assets/logo2.png";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12 px-6 md:px-32">
      <div className="fade-trigger max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Lijeva strana */}
        <div className="flex flex-col items-center space-y-3">
          <img className="w-20" src={logo} alt="logo" />
          <div className="text-center">
            <p className="text-white/70 text-lg">
              Put Porta 71, 21224, Slatine
            </p>
          </div>
        </div>

        {/* Sredina – linkovi */}

        {/* Desna strana – copyright */}
        <div className="text-center md:text-right text-white/60 text-lg">
          © {new Date().getFullYear()} WebWhisperer
        </div>
      </div>
    </footer>
  );
}
