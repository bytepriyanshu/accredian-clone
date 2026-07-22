"use client";
import { font_family } from "../utils";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  domain: string;
  candidates: string;
  mode: string;
  location: string;
}

const EMPTY_FORM: EnquiryFormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  domain: "",
  candidates: "",
  mode: "",
  location: "",
};

// Swap these for whatever domains/modes are relevant to your offering.
const DOMAIN_OPTIONS = [
  "Data Science",
  "Product Management",
  "Cloud Computing",
  "Cybersecurity",
  "Digital Marketing",
  "Business Analytics",
];

const MODE_OPTIONS = ["Online", "Offline", "Hybrid"];

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: EnquiryFormData) => void;
  imageSrc?: string;
  imageAlt?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  onSubmit,
  imageSrc = "/business-v2.webp",
  imageAlt = "Two professionals shaking hands after a business discussion",
}: EnquiryModalProps) {
  const [formData, setFormData] = useState<EnquiryFormData>(EMPTY_FORM);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock background scroll while the modal is open.
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Close on Escape and move focus to the close button on open.
  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(formData);
    setFormData(EMPTY_FORM);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={(event) => {
        // Close only when the overlay itself (not the dialog) is clicked.
        if (event.target === event.currentTarget) onClose();
      }}
      style={{
        fontFamily: font_family
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-modal-title"
        className="flex w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl sm:flex-row"
      >
        {/* Illustration — hidden on small screens to keep the form the focus */}
        <div className="relative hidden w-1/2 bg-blue-100 sm:block">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 640px) 0px, 50vw"
            className="object-cover"
            priority={false}
          />
        </div>

        {/* Form panel */}
        <div className="max-h-[90vh] w-full overflow-y-auto p-6 sm:w-1/2">
          <div className="flex items-center justify-between pb-2">
            <h2
              id="enquiry-modal-title"
              className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl"
            >
              Enquire Now
            </h2>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close enquiry form"
              className="rounded-full p-1 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-4 text-black">
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full border-b-2 border-neutral-200 bg-white px-2 py-3 text-sm font-normal outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full border-b-2 border-neutral-300 bg-white px-2 py-2 text-sm font-normal outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Phone number
              </label>
              <div className="mt-2 flex items-center border-b-2 border-neutral-300 px-2 py-2.5 focus-within:border-blue-500">
                <span
                  className="shrink-0 whitespace-nowrap text-sm leading-none text-gray-600"
                  aria-hidden="true"
                >
                  🇮🇳 +91
                </span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="min-w-0 flex-1 bg-white px-2 py-0 text-sm font-normal leading-none outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="sr-only">
                Company name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Enter company name"
                value={formData.company}
                onChange={handleChange}
                className="mt-2 w-full border-b-2 border-neutral-300 bg-white px-2 py-2 text-sm font-normal outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="domain" className="sr-only">
                Domain of interest
              </label>
              <select
                id="domain"
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                className="mt-2 w-full border-b-2 border-neutral-300 bg-white px-2 py-2 text-sm font-normal text-gray-700 outline-none transition focus:border-blue-500"
              >
                <option value="">Select Domain</option>
                {DOMAIN_OPTIONS.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="candidates" className="sr-only">
                Number of candidates
              </label>
              <input
                id="candidates"
                name="candidates"
                type="number"
                min={1}
                placeholder="Enter No. of candidates"
                value={formData.candidates}
                onChange={handleChange}
                className="mt-2 w-full border-b-2 border-neutral-300 bg-white px-2 py-2 text-sm font-normal outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="mode" className="sr-only">
                Mode of delivery
              </label>
              <select
                id="mode"
                name="mode"
                required
                value={formData.mode}
                onChange={handleChange}
                className="mt-2 w-full border-b-2 border-neutral-300 bg-white px-2 py-2 text-sm font-normal text-gray-700 outline-none transition focus:border-blue-500"
              >
                <option value="">Select Mode of Delivery *</option>
                {MODE_OPTIONS.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                autoComplete="address-level2"
                placeholder="Eg: Gurugram, Delhi, India"
                value={formData.location}
                onChange={handleChange}
                className="mt-2 w-full border-b-2 border-neutral-300 bg-white px-2 py-2 text-sm font-normal outline-none transition focus:border-blue-500"
              />
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}