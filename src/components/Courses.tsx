import Image from "next/image";
import { font_family } from "../utils";

const courses = [
  {
    title: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
    image: "/course-images/project-management-v2.webp",
    alt: "Professionals discussing program-specific training.",
  },
  {
    title: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: "/course-images/digital-transformation-v2.webp",
    alt: "Industry-specific technology training.",
  },
  {
    title: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: "/course-images/data-science-v2.webp",
    alt: "Topic-specific professional learning.",
  },
  {
    title: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: "/course-images/senior-management-v2.webp",
    alt: "Professionals collaborating during leadership training.",
  },
];

export default function Courses() {
  return (
    <section
      aria-labelledby="course-segmentation-heading"
      className="bg-white py-14 md:py-20"
      style={{
        fontFamily: font_family,
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}

        <header className="text-center">
          <h2
            id="course-segmentation-heading"
            className="text-3xl font-bold tracking-tight text-[#1F2937] sm:text-4xl lg:text-5xl"
          >
            Tailored <span className="text-[#2F6CE5]">Course Segmentation</span>
          </h2>

          <p className="mt-3 text-base text-[#4B5563] sm:text-lg">
            Explore <span className="text-[#2F6CE5]">Custom-fit Courses</span>{" "}
            Designed to Address Every Professional Focus
          </p>
        </header>

        {/* Cards */}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <article
              key={course.title}
              className="overflow-hidden rounded-xl border border-[#D9DEE8] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
            >
              {/* Image */}

              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:640px) 100vw,
                         (max-width:1280px) 50vw,
                         25vw"
                />
              </div>

              {/* Content */}

              <div className="px-6 py-6 text-center">
                <h3 className="text-2xl font-semibold text-[#2F6CE5]">
                  {course.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-base leading-7 text-[#4B5563]">
                  {course.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
