import {
  Brain,
  Globe,
  Lightbulb,
  Settings,
  UserRound,
  ChartColumn,
  Wallet,
} from "lucide-react";
import { font_family } from "../utils";

const expertise = [
  {
    title: "Product & Innovation Hub",
    icon: Lightbulb,
  },
  {
    title: "Gen-AI Mastery",
    icon: Brain,
  },
  {
    title: "Leadership Elevation",
    icon: UserRound,
  },
  {
    title: "Tech & Data Insights",
    icon: ChartColumn,
  },
  {
    title: "Operations Excellence",
    icon: Settings,
  },
  {
    title: "Digital Enterprise",
    icon: Globe,
  },
  {
    title: "Fintech Innovation Lab",
    icon: Wallet,
    center: true,
  },
];

function Card({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ElementType;
}) {
  return (
    <article
      className="
        flex h-[110px] flex-col items-center justify-center
        rounded-2xl border border-[#E5E7EB]
        bg-white
        shadow-[0_6px_20px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.12)]
      "
    >
      <Icon
        className="mb-4 h-11 w-11 text-[#356AE6]"
        strokeWidth={2.2}
      />

      <h3
        className="
          px-4
          text-center
          text-lg
          font-semibold
          leading-snug
          text-[#1F2937]
        "
      >
        {title}
      </h3>
    </article>
  );
}

export default function DomainExpertise() {
  return (
    <section
      aria-labelledby="domain-expertise-heading"
      className="bg-white py-16 md:py-20"
      style={{
              fontFamily: font_family,
            }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <header className="text-center">
          <h2
            id="domain-expertise-heading"
            className="text-4xl font-bold tracking-tight text-[#1F2937]"
          >
            Our{" "}
            <span className="text-[#356AE6]">
              Domain Expertise
            </span>
          </h2>

          <p className="mt-3 text-lg text-[#4B5563]">
            <span className="text-[#356AE6]">
              Specialized Programs
            </span>{" "}
            Designed to Fuel Innovation
          </p>
        </header>

        {/* Cards */}

        <div className="mt-14">
          {/* Desktop */}

          <div className="hidden gap-5 md:grid md:grid-cols-3">
            {expertise.slice(0, 6).map(({ title, icon: Icon }) => (
              <Card
                key={title}
                title={title}
                Icon={Icon}
              />
            ))}

            <div className="col-span-3 flex justify-center">
              <div className="w-full max-w-[340px]">
                <Card
                  title={expertise[6].title}
                  Icon={expertise[6].icon}
                />
              </div>
            </div>
          </div>

          {/* Mobile */}

          <div className="grid gap-5 md:hidden">
            {expertise.map(({ title, icon: Icon }) => (
              <Card
                key={title}
                title={title}
                Icon={Icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}