"use client";

import { useState } from "react";
import { ChevronRight, Headset } from "lucide-react";

import { font_family } from "@/src/utils";
import EnquiryModal, {type EnquiryFormData } from "./EnquiryModal";

export default function ContactCTA() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleEnquirySubmit = (data: EnquiryFormData) => {
    // Replace with your API call, e.g.:
    // await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(data) });
    console.log("Enquiry submitted:", data);
  };

  return (
    <section className="lg:mt-6" style={{ fontFamily: font_family }}>
      <div className="mx-auto max-w-[85rem] px-4 xl:px-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#2F6CE5] px-6 py-8 md:px-12 md:py-10">
          {/* Radial Background */}
          <div className="absolute inset-0">
            <div className="absolute right-[-220px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full border border-white/5" />
            <div className="absolute right-[-150px] top-1/2 h-[560px] w-[560px] -translate-y-1/2 rounded-full border border-white/5" />
            <div className="absolute right-[-80px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-white/10" />
            <div className="absolute right-[10px] top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full border border-white/10" />

            <div className="absolute right-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.03)_55%,transparent_100%)]" />
          </div>

          <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Left */}
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-center">
              {/* Icon */}
              <div className="h-20 w-20 flex-shrink-0 rounded-2xl bg-slate-200/30 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
                  <Headset className="h-10 w-10 text-[#2F6CE5]" strokeWidth={2} />
                </div>
              </div>

              {/* Text */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold text-white md:text-[36px] md:leading-[44px]">
                  Want to Learn More About Our Training Solutions?
                </h2>

                <p className="mt-2 text-base font-medium text-blue-100 md:text-xl">
                  Get Expert Guidance for Your Team&apos;s Success!
                </p>
              </div>
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={() => setIsEnquiryOpen(true)}
              className="flex h-14 w-full max-w-[200px] items-center justify-center gap-2 rounded-xl bg-white px-6 text-lg font-semibold text-[#2F6CE5] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50"
            >
              Contact Us
              <ChevronRight className="h-5 w-5" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        onSubmit={handleEnquirySubmit}
      />
    </section>
  );
}