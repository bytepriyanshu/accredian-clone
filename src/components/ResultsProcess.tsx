import {
  ChartNoAxesColumnIncreasing,
  Monitor,
  MonitorPlay,
} from "lucide-react";
import { font_family } from "../utils";

const steps = [
  {
    number: "1",
    title: "Skill Gap Analysis",
    description:
      "Assess team skill gaps and developmental needs.",
    icon: ChartNoAxesColumnIncreasing,
  },
  {
    number: "2",
    title: "Customized Training Plan",
    description:
      "Create a tailored roadmap addressing organizational goals.",
    icon: Monitor,
  },
  {
    number: "3",
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs.",
    icon: MonitorPlay,
  },
];

export default function ResultsProcess() {
  return (
    <section
      aria-labelledby="results-heading"
      className="bg-white py-16 md:py-20 lg:py-24"
      style={{
        fontFamily: font_family
      }}
      id="how-it-works"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <header className="text-center">
          <h2
            id="results-heading"
            className="text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl lg:text-5xl"
          >
            How We{" "}
            <span className="text-[#2F6CE5]">
              Deliver Results
            </span>{" "}
            That Matter?
          </h2>

          <p className="mt-3 text-base text-[#4B5563] sm:text-lg">
            A Structured Three-Step Approach to{" "}
            <span className="text-[#2F6CE5]">
              Skill Development
            </span>
          </p>
        </header>

        {/* Cards */}

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <article
              key={number}
              className="group relative rounded-2xl border border-[#7CB5FF] bg-[#EEF5FF] px-8 pb-10 pt-12 shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(0,0,0,0.12)]"
            >
              {/* Left Accent */}

              <span className="absolute left-0 top-10 h-36 w-[6px] rounded-r-full bg-[#2F6CE5]" />

              {/* Right Accent */}

              <span className="absolute right-0 top-10 h-36 w-[6px] rounded-l-full bg-[#2F6CE5]" />

              {/* Step Number */}

              <div className="absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#7CB5FF] bg-white text-sm font-bold text-[#1F2937]">
                {number}
              </div>

              {/* Icon */}

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2F6CE5] shadow-lg">
                <Icon
                  className="h-8 w-8 text-white"
                  strokeWidth={2}
                />
              </div>

              {/* Content */}

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-semibold text-[#1F2937]">
                  {title}
                </h3>

                <p className="mx-auto mt-4 max-w-xs text-base leading-7 text-[#4B5563]">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}