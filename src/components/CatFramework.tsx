import Image from "next/image";
import { font_family } from "../utils";

export default function CatFramework() {
  return (
    <section
      aria-labelledby="cat-framework-heading"
      className="py-14 md:py-20 lg:py-24 bg-[radial-gradient(circle_at_center,_#7cb5ff28_0%,_#ffffff_70%)]"
      style={{
        fontFamily: font_family,
      }}
      id="cat"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <header className="text-center">
          <h2
            id="cat-framework-heading"
            className="text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl lg:text-5xl"
          >
            The{" "}
            <span className="text-[#2F6CE5]">
              CAT Framework
            </span>
          </h2>

          <p className="mt-3 text-base text-[#4B5563] sm:text-lg">
            Our Proven Approach to{" "}
            <span className="text-[#2F6CE5]">
              Learning Excellence
            </span>
          </p>
        </header>

        {/* Framework Image */}

        <div className="mt-10 md:mt-14 lg:mt-16">
          <Image
            src="/catV2.svg"
            alt="The CAT Framework illustrating three learning stages: Concept, Application, and Tools."
            width={800}
            height={460}
            priority={false}
            // sizes="
            //   (max-width:640px) 100vw,
            //   (max-width:1024px) 95vw,
            //   1280px
            // "
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}