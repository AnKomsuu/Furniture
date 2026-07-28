"use client";

import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Catalog from "@/components/Catalog";
import Calculator from "@/components/Calculator";
import PriceList from "@/components/PriceList";
import Reviews from "@/components/Reviews";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import { WORKSHOP_NAME } from "@/data";

export default function Home() {
  const calculatorRef = useRef<HTMLDivElement>(null);

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header workshopName={WORKSHOP_NAME} />
      <Hero workshopName={WORKSHOP_NAME} onCalculateClick={scrollToCalculator} />
      <About />
      <Catalog />
      <div ref={calculatorRef}>
        <Calculator />
      </div>
      <PriceList />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}
