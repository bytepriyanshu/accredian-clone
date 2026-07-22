"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQCategory } from "@/src/utils";
import { font_family } from "@/src/utils";

type Props = {
  categories: FAQCategory[];
};

export default function FAQClient({ categories }: Props) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(0);

  const currentCategory = categories[activeCategory];

  const changeCategory = (index: number) => {
    setActiveCategory(index);
    setOpenFAQ(0);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="mt-14 grid gap-12 lg:grid-cols-[280px_1fr]" style={{
            fontFamily: font_family
          }}>
      {/* Categories */}

      <aside>
        <nav className="space-y-6">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => changeCategory(index)}
              className={`flex h-16 w-full items-center justify-center rounded-lg border text-xl font-semibold transition-all duration-300
                ${
                  activeCategory === index
                    ? "border-transparent bg-white text-[#2F6CE5] shadow-[0_6px_18px_rgba(0,0,0,0.10)]"
                    : "border-[#D7D7D7] bg-white text-[#6B7280] hover:border-[#2F6CE5]"
                }`}
            >
              {category.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* FAQs */}

      <div>
        <div className="space-y-2">
          {currentCategory.faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border-b border-[#ECECEC]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-5 py-6 text-left"
              >
                <h3
                  className={`text-xl font-semibold transition-colors ${
                    openFAQ === index
                      ? "text-[#2F6CE5]"
                      : "text-[#1F2937]"
                  }`}
                >
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 ${
                    openFAQ === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-300 ${
                  openFAQ === index
                    ? "grid-rows-[1fr] pb-6"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-4xl text-lg leading-8 text-[#4B5563]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}

        <div className="pt-12 text-center">
          <button
            className="rounded-lg bg-[#2F6CE5] px-10 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-[#245FD4]"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}