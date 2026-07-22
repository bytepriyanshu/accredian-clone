import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

import { font_family } from "@/src/utils";

const socialLinks = [
  {
    href: "#",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "#",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "#",
    icon: FaTwitter,
    label: "Twitter",
  },
  {
    href: "#",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "#",
    icon: FaYoutube,
    label: "YouTube",
  },
];

const footerLinks = [
  {
    name: "About",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
  {
    name: "Why Accredian",
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-white" style={{ fontFamily: font_family }}>
      <div className="mx-auto max-w-[85rem] px-4 xl:px-8">
        {/* Top */}

        <div className="flex flex-col items-start justify-between gap-8 border-b border-gray-300 pb-8 md:flex-row md:items-center">
          <div>
            <Image src="/logo.webp" alt="Accredian" width={160} height={45} />

            <div className="mt-5 flex items-center gap-5 text-2xl text-gray-700">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-colors hover:text-[#2F6CE5]"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center md:text-right">
            <Button opensEnquiryModal>Enquire Now</Button>

            <p className="mt-3 text-sm text-gray-600">Speak with our Advisor</p>
          </div>
        </div>

        {/* Middle */}

        <div className="grid gap-12 border-b border-gray-300 py-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-black">Accredian</h3>

            <ul className="mt-5 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-lg text-gray-700 transition hover:text-[#2F6CE5]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <address className="not-italic">
            <h3 className="text-2xl font-semibold text-black">Contact Us</h3>

            <p className="mt-5 text-lg text-gray-700">
              Email us:{" "}
              <a
                href="mailto:enterprise@accredian.com"
                className="text-[#2F6CE5] hover:underline"
              >
                enterprise@accredian.com
              </a>
            </p>

            <p className="mt-3 max-w-lg text-lg leading-8 text-gray-700">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram, Haryana
            </p>
          </address>
        </div>

        {/* Bottom */}

        <div className="py-5 text-center">
          <p className="text-base text-gray-600">
            © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
            Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
