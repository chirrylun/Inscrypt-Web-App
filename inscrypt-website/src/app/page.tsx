import Hero from "../components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "../components/Services";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Footer />
    </>
  );
}
