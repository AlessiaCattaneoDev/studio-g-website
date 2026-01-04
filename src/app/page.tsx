import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative noise-overlay min-h-screen">
      <Navigation />
      <Hero />
      <div className="section-container">
        <div className="section-divider" />
      </div>
      <About />
      <div className="section-container">
        <div className="section-divider" />
      </div>
      <Services />
      <div className="section-container">
        <div className="section-divider" />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
