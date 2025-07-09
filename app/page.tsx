import Hero from "@/app/components/Hero";
import ExploreProducts from "./components/ExploreProducts";
import Assurance from "./components/Assurance";
import Connect from "./components/Connect";
import WhatsappChat from "./components/Whatsapp"; // 👈 ADD THIS
import { fetchHero } from "@/app/lib/fetchHero";
import { fetchBanner } from "@/app/lib/fetchBanner";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

export default async function Home() {
    const heroData = await fetchHero();
    const bannerData = await fetchBanner();

  return (
    <>
      <Banner images={bannerData[0]?.images || []} />
      <Hero {...heroData}/>
      <ExploreProducts />
      <Assurance />
      <Connect />
      <WhatsappChat />
      <Footer />
    </>
  );
}
