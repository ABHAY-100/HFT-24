"use client";

import Image from "next/image";
import BlobAnimation from "../components/BlobAnimation";
import Footer from "../components/Footer";
import About from "../components/About/About";
import Prizes from "../components/prizes/prizes";
import Partners from "../components/Partners/partners";
import CountdownTimer from "../components/Countdown/Countdown";
import Navbar from "../components/Navbar";
import AccordionImageGallery from "../components/ImageGallery";
import WhyParticipate from "../components/WhyParticipate/WhyParticipate";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/ContactPage";
import Intro from "../components/Intro";
import TimelineSection from "../components/Timeline/Timeline";

export default function Home() {
  return (
    <div className="text-white">
      <Navbar />
      <BlobAnimation />

      {/* <CountdownTimer
        targetDate={new Date("December 21, 2024 09:30:00").getTime()}
      /> */}

      {/* <Intro /> */}
      <About />
      <WhyParticipate />
      <Prizes />
      <Partners />
      {/* <Highlights /> */}
      <TimelineSection />
      {/* <AccordionImageGallery /> */}
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
