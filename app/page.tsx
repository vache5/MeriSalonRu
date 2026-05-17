"use client";

import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import FourthLanding from "@/components/FourthLanding";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LandingLastAddresses from "@/components/LandingLastAddresses";
import LandingFiveTeam from "@/components/LandingFiveTeam";
import LandingSixReviews from "@/components/LandingSixReviews";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home" className="overflow-x-hidden">
        <Hero />
        <Services />
        <Banner />
        <FourthLanding />
        <Gallery />
        <LandingFiveTeam />
        <LandingSixReviews />
        <LandingLastAddresses />
        <Footer />
      </main>
    </>
  );
}
