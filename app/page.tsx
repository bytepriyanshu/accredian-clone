import type { Metadata } from "next";

import Clients from "@/src/components/Clients";
import Home from "@/src/components/Home";
import Navbar from "@/src/components/Navbar";
import Stats from "@/src/components/Stats";
import AccredianEdge from "@/src/components/AccredianEdge";
import DomainExpertise from "@/src/components/DomainExpertise";

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
      </main>
    </>
  );
}
