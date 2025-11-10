import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import OurCabs from "@/components/OurCabs/OurCabs";

export default function HomePage() {
  return (
    <>
      <main
      >
        <Hero /><div
          className="body-container"
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   marginLeft: "150px",
          //   marginRight: "150px"
          // }}
        >

          <HowItWorks />
          <OurCabs />
        </div>
      </main>
    </>
  );
}
