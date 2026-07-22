import Image from "next/image";

import Button from "./Button";
import { font_family } from "../utils";

const benefits = [
  "Tailored Solutions",
  "Industry Insights",
  "Expert Guidance",
];

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[22px] w-[22px] shrink-0"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" stroke="#17AE54" strokeWidth="2" />
      <path
        d="m8 12 2.5 2.5L16 9"
        stroke="#17AE54"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <section
      aria-labelledby="home-heading"
      className="px-3.5 py-2 my-4 mt-12"
      style={{
        fontFamily:font_family
      }}
    >
      <div className="relative mx-auto min-h-[482px] max-w-[1264px] overflow-hidden rounded-[22px] bg-[#eef7ff]">
        <div className="relative z-10 max-w-[650px] px-[clamp(1.5rem,5vw,3.75rem)] pb-8 pt-6 md:pb-0 md:pt-3.5">
          <h1
            id="home-heading"
            className="max-w-[570px] text-[clamp(3.25rem,6vw,4.75rem)] font-extrabold leading-[0.94] tracking-normal text-black"
          >
            Next-Gen{" "}
            <span className="text-[#2878ee]">
              Expertise
            </span>{" "}
            For Your{" "}
            <span className="text-[#2878ee]">
              Enterprise
            </span>
          </h1>

          <p className="mt-10 max-w-[420px] text-[clamp(1.25rem,2vw,1.625rem)] font-medium leading-[1.24] tracking-normal text-black">
            Cultivate high-performance teams through expert learning.
          </p>

          <ul
            aria-label="Enterprise learning benefits"
            className="mt-11 flex flex-wrap items-center gap-x-4 gap-y-3 text-[16px] font-medium leading-none text-black"
          >
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2">
                <CheckIcon />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="my-8">
            <Button aria-label="Enquire now about enterprise learning" opensEnquiryModal>
              Enquire Now
            </Button>
          </div>
        </div>

        <div className="pointer-events-none relative mx-auto -mt-2 h-[330px] w-full max-w-[620px] md:absolute md:bottom-0 md:right-[-1px] md:mt-0 md:h-full md:max-w-[654px] lg:max-w-[660px]">
          <Image
            src="/corporate-big-hero-v4.webp"
            alt="Business professionals representing enterprise learning expertise"
            fill
            priority
            sizes="(max-width: 768px) 90vw, 660px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
