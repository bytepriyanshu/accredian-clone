import Image from "next/image";
import { font_family } from "../utils";

export default function AccredianEdge() {
  return (
    <section
      aria-labelledby="accredian-edge-heading"
      className="bg-white py-8 md:py-16 lg:py-20"
      style={{
        fontFamily: font_family,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header className="text-center">
          <h2
            id="accredian-edge-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            The <span className="text-[#2F80ED]">Accredian Edge</span>
          </h2>

          <p className="mt-3 text-base text-gray-600 sm:text-lg font-semibold">
            Key Aspects of{" "}
            <span className="text-[#2F80ED]">Our Strategic Training</span>
          </p>
        </header>

        {/* Timeline Image */}
        <div className="mt-10 md:mt-14">
          <Image
            src="/accredian-edge-usp-v3.svg"
            alt="Accredian Edge timeline showcasing tailored solutions, expert guidance, innovative framework, advanced technology, diverse offerings, proven impact, and flexible delivery."
            width={1550}
            height={800}
            priority
            sizes="(max-width: 640px) 100vw,
                   (max-width: 1024px) 95vw,
                   1280px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
