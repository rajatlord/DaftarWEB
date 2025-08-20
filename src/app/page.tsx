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
      {/* <ContactHeader /> */}
      
      <main 
          >
        <Hero />
        <div className="body-container"
       style={{
            display: "flex",
            flexDirection: "column",
            // width: "1152px",
            width: "100%",
            margin: "auto",
          }}>
        <HowItWorks />
        <OurCabs />
        </div>
        {/* <Services /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
