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

import { faqCategories } from "@/src/utils";

export const metadata: Metadata = {
  title: "Next-Gen Enterprise Expertise",
  description:
    "Build high-performance enterprise teams with tailored learning solutions, industry insights, and expert guidance from Accredian.",
};

export default function Page() {
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://accredian-clone-five-hazel.vercel.app";

  const allFaqs = faqCategories.flatMap((category) => category.faqs);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Accredian",
    url: baseUrl,
    logo: `${baseUrl}/logo.webp`,
    sameAs: [
      "https://www.facebook.com",
      "https://www.linkedin.com",
      "https://twitter.com",
      "https://www.instagram.com",
      "https://www.youtube.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "enterprise@accredian.com",
      contactType: "customer support",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122015",
      addressCountry: "IN",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Accredian Enterprise",
    url: baseUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const sanitize = (obj: unknown) => {
    return JSON.stringify(obj).replace(/</g, "\\u003c");
  };

  return (
    <>
      {/* JSON-LD Schemas for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitize(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitize(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: sanitize(faqJsonLd) }}
      />

      <Navbar />
      <main>
        <Home />
        <Stats />
        <Clients />
        <AccredianEdge />
        <DomainExpertise />
        <Courses />
        <StrategicSkillEnhancement />
        <CatFramework />
        <ResultsProcess />
        <FAQ />
        <Testimonials />
        <ContactCTA />
        <Footer />
      </main>
    </>
  );
}
