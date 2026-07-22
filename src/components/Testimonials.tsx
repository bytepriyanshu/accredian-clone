"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { testimonials, font_family } from "@/src/utils";

export default function Testimonials() {
  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 2,
    },
    [autoplay]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi]);

  const pageCount = Math.ceil(testimonials.length / 2);

  return (
    <section
      className="md:py-20"
      style={{ fontFamily: font_family }}
    >
      <div className="mx-auto max-w-7xl px-4">
        <header className="text-center">
          <h2 className="text-3xl font-bold text-[#1F2937] sm:text-4xl lg:text-5xl">
            Testimonials from{" "}
            <span className="text-[#2F6CE5]">
              Our Partners
            </span>
          </h2>

          <p className="mt-3 text-lg text-[#4B5563]">
            What{" "}
            <span className="text-[#2F6CE5]">
              Our Clients
            </span>{" "}
            Are Saying
          </p>
        </header>

        <div
          ref={emblaRef}
          className="mt-12 overflow-hidden"
        >
          <div className="-ml-6 flex">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-0 flex-[0_0_100%] pl-6 md:flex-[0_0_50%]"
              >
                <article className="flex h-full min-h-[260px] flex-col rounded-2xl border border-[#D9DEE8] bg-white p-10 shadow-sm">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.company}
                    width={72}
                    height={72}
                    className="mb-8 h-[52px] w-auto object-contain"
                  />

                  <blockquote className="text-[20px] leading-9 text-[#4B5563]">
                    {testimonial.quote}
                  </blockquote>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {Array.from({ length: pageCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                selectedIndex === index
                  ? "bg-[#2F6CE5]"
                  : "bg-[#D3D3D3]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}