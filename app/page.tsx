import type { Metadata } from "next";

import Clients from "@/src/components/Clients";
import Home from "@/src/components/Home";
import Navbar from "@/src/components/Navbar";
import Stats from "@/src/components/Stats";
import AccredianEdge from "@/src/components/AccredianEdge";
import DomainExpertise from "@/src/components/DomainExpertise";
import Courses from "@/src/components/Courses";
import StrategicSkillEnhancement from "@/src/components/Skill";
import CatFramework from "@/src/components/CatFramework";
import ResultsProcess from "@/src/components/ResultsProcess";
import FAQ from "@/src/components/FAQ/faq-server";
import Testimonials from "@/src/components/Testimonials";
import ContactCTA from "@/src/components/CTA";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Next-Gen Enterprise Expertise",
  description:
    "Build high-performance enterprise teams with tailored learning solutions, industry insights, and expert guidance from Accredian.",
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Stats />
        <Clients />
        <AccredianEdge/>
        <DomainExpertise/>
        <Courses/>
        <StrategicSkillEnhancement/>
        <CatFramework/>
        <ResultsProcess/>
        <FAQ/>
        <Testimonials/>
        <ContactCTA/>
        <Footer/>
      </main>
    </>
  );
}
