import Hero from "./components/Hero";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Services from "./components/Services";
import Portfolio from "@/app/components/Portfolio";
import QuickContact from "@/app/components/QuickContact";

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
