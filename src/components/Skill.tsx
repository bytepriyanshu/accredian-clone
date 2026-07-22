import Image from "next/image";
import {
  MonitorCheck,
  MonitorX,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";
import { font_family } from "../utils";

const audiences = [
  {
    title: "Tech Professionals",
    description:
      "Enhance expertise, embrace tech, drive innovation.",
    icon: MonitorCheck,
  },
  {
    title: "Non-Tech Professionals",
    description:
      "Adapt digitally, collaborate in tech environments.",
    icon: MonitorX,
  },
  {
    title: "Emerging Professionals",
    description:
      "Develop powerful skills for rapid career growth.",
    icon: GraduationCap,
  },
  {
    title: "Senior Professionals",
    description:
      "Strengthen leadership, enhance strategic decisions.",
    icon: BriefcaseBusiness,
  },
];

export default function StrategicSkillEnhancement() {
  return (
    <section
      aria-labelledby="strategic-skill-enhancement-heading"
      className="py-14 md:py-20"
      style={{
        fontFamily:font_family
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-xl bg-[#2F6CE5] shadow-lg">
          <div className="grid gap-12 p-8 lg:grid-cols-[440px_1fr] lg:p-12">
            {/* Left Side */}

            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-xl font-medium text-white/95">
                  Who Should Join?
                </p>

                <h2
                  id="strategic-skill-enhancement-heading"
                  className="mt-3 text-4xl font-bold leading-tight text-white lg:text-5xl"
                >
                  Strategic Skill
                  <br />
                  Enhancement
                </h2>
              </div>

              <div className="mt-10 flex justify-center lg:justify-start">
                <Image
                  src="/imagehuman.png"
                  alt="Professionals representing learners from different career backgrounds."
                  width={460}
                  height={540}
                  className="h-auto w-full max-w-[320px] object-contain lg:max-w-[360px]"
                  priority={false}
                />
              </div>
            </div>

            {/* Right Side */}

            <div className="grid gap-x-12 gap-y-14 sm:grid-cols-2">
              {audiences.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="flex flex-col"
                >
                  <Icon
                    className="mb-5 h-14 w-14 text-white"
                    strokeWidth={2.1}
                  />

                  <h3 className="text-2xl font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mt-2 max-w-sm text-lg leading-8 text-white/90">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}