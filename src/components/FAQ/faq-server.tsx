import FAQClient from "./faq-client";
import { faqCategories } from "@/src/utils";
import { font_family } from "@/src/utils";

export default function FAQSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-white py-16 md:py-20"
      style={{
        fontFamily: font_family,
      }}
      id="faqs"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl lg:text-5xl"
            style={{
              fontFamily: font_family,
            }}
          >
            Frequently Asked <span className="text-[#2F6CE5]">Questions</span>
          </h2>
        </header>

        <FAQClient categories={faqCategories} />
      </div>
    </section>
  );
}
