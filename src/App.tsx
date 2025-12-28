import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutVilla from "./components/AboutVilla";
import Location from "./components/Location";
import { useEffect } from "react";
import Contact from "./components/Contact";
import Apartments from "./components/Apartments";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-trigger");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div>
      <ScrollToTop />
      <Header />
      <HeroSection />
      <Apartments />
      <AboutVilla />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
