import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
// import Services from "@/components/Services";
import ContactHeader from "@/components/Header/ContactHeader";
import OurCabs from "@/components/OurCabs/OurCabs";

export default function HomePage() {
  return (
    <>
      <ContactHeader />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <OurCabs />
        {/* <Services /> */}
      </main>
      <Footer />
    </>
  );
}
