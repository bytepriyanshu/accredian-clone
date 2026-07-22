import Image from "next/image";
import Link from "next/link";
import { font_family } from "../utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/#stats", label: "Stats" },
  { href: "/#clients", label: "Clients" },
  { href: "/#accredian-edge", label: "Accredian Edge" },
  { href: "/#cat", label: "CAT" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faqs", label: "FAQs" },
  { href: "/#testimonials", label: "Testimonials" },
];

export default function Navbar() {
  return (
    <header
      className="border-b border-slate-200 bg-white shadow-[0_3px_7px_rgba(15,23,42,0.12)]"
      style={{
        fontFamily:font_family,
      }}
    >
      <div className="mx-auto flex h-20 w-full max-w-339.5 items-center justify-between px-5 lg:px-0">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo.webp"
            alt="Accredian"
            width={165}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden min-[950px]:block"
        >
          <ul className="flex items-center gap-8">
            {navigation.map(({ href, label }) => {
              const isHome = href === "/";

              return (
                <li key={label}>
                  <Link
                    href={href}
                    aria-current={isHome ? "page" : undefined}
                    className={`inline-flex h-20 items-center pt-0.5 text-[16px] font-medium decoration-[3px] underline-offset-11 transition-colors ${
                      isHome
                        ? "text-[#1A73E8] underline decoration-[#1A73E8]"
                        : "text-black decoration-transparent hover:text-[#1A73E8] hover:decoration-[#1A73E8] hover:underline"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <details className="relative min-[950px]:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-md text-slate-900 transition hover:bg-slate-100 marker:hidden [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open navigation menu</span>

            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>

          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 top-[calc(100%+12px)] z-50 w-64 overflow-hidden rounded-xl border border-slate-200 bg-white py-2 shadow-xl"
          >
            <ul>
              {navigation.map(({ href, label }) => {
                const isHome = href === "/";

                return (
                  <li key={label}>
                    <Link
                      href={href}
                      aria-current={isHome ? "page" : undefined}
                      className={`block px-5 py-3 text-[16px] font-medium transition-colors ${
                        isHome
                          ? "bg-blue-50 text-[#2878ee]"
                          : "text-slate-900 hover:bg-blue-50 hover:text-[#2878ee]"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
