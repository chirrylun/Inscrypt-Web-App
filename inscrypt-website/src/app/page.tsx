import Hero from "../components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "../components/Services";
import Portfolio from "@/components/Portfolio";
import QuickContact from "@/components/QuickContact";

export default function Home() {

  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <QuickContact/>
      <Footer />
    </>
  );
}
