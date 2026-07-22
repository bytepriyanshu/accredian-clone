import { font_family } from "../utils";

const stats = [
  {
    value: "10K+",
    label: "Professionals Trained For Exceptional Career Success",
  },
  {
    value: "200+",
    label: "Sessions Delivered With Unmatched Learning Excellence",
  },
  {
    value: "5K+",
    label: "Active Learners Engaged In Dynamic Courses",
  },
];

export default function Stats() {
  return (
    <section
      id="stats"
      aria-labelledby="stats-heading"
      className="bg-white px-5 pb-[90px] pt-[52px] sm:pt-[56px]"
      style={{ fontFamily: font_family }}
    >
      <div className="mx-auto max-w-[1080px] text-center">
        <h2
          id="stats-heading"
          className="text-[clamp(2rem,3vw,2.5rem)] font-bold leading-none tracking-normal text-[#1f2937]"
        >
          Our <span className="text-[#2878ee]">Track Record</span>
        </h2>

        <p className="mt-5 text-[18px] font-medium leading-none tracking-normal text-[#374151]">
          The Numbers Behind{" "}
          <span className="text-[#0066ff]">Our Success</span>
        </p>

        <dl className="mt-[60px] grid gap-y-10 md:grid-cols-3 md:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={stat.value}
              className={`flex flex-col items-center px-4 md:min-h-[112px] ${
                index > 0 ? "md:border-l md:border-[#dfe3eb]" : ""
              }`}
            >
              <dt className="inline-flex h-[50px] min-w-[97px] items-center justify-center rounded-full bg-[#d8e9ff] px-5 text-[24px] font-bold leading-none tracking-normal text-[#2878ee]">
                {stat.value}
              </dt>
              <dd className="mt-5 max-w-[330px] text-[16px] font-medium leading-[1.45] tracking-normal text-black">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
