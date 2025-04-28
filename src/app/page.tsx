import AboutUs from "@/components/About";
import OurClients from "@/components/Clients";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/Hero/Hero";
import OurPrincipals from "@/components/OurPrincipals";
import ServicesSolutions from "@/components/ServicesSolutions";

export default function Home() {
  return (
    <>
      {/* <ParallaxImage /> */}

      <HeroSection />

      <AboutUs />

      <ServicesSolutions />

      <OurClients />

      <OurPrincipals />

      <ContactUs />
    </>
  );
}
