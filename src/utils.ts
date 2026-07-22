import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

// Font Family
export const font_family='Circular Std, Circular, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'

// FAQ Categories data
export type FAQ = {
  question: string;
  answer: string;
};

export type FAQCategory = {
  id: string;
  title: string;
  faqs: FAQ[];
};

export const faqCategories: FAQCategory[] = [
  {
    id: "course",
    title: "About the Course",
    faqs: [
      {
        question:
          "What types of corporate training programs does Accredian offer?",
        answer:
          "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, technology, data, AI, fintech, and digital transformation.",
      },
      {
        question: "What domain specializations are available?",
        answer:
          "Programs are available across Product, Leadership, Gen-AI, Tech & Data, Operations, Digital Enterprise, and FinTech.",
      },
    ],
  },

  {
    id: "delivery",
    title: "About the Delivery",
    faqs: [
      {
        question:
          "Can the courses be customized for specific industries or teams?",
        answer:
          "Yes. Programs can be fully customized based on your industry, team size, business goals, and required outcomes.",
      },
      {
        question: "Who are the instructors for these programs?",
        answer:
          "Courses are delivered by experienced industry leaders, practitioners, and subject-matter experts with real-world experience.",
      },
      {
        question: "What formats are the programs delivered in?",
        answer:
          "Training can be delivered online, onsite, hybrid, self-paced, or instructor-led depending on organizational requirements.",
      },
    ],
  },

  {
    id: "misc",
    title: "Miscellaneous",
    faqs: [
      {
        question: "How can I enroll my organization?",
        answer:
          "Simply contact our team through the enquiry form and we'll schedule a consultation.",
      },
      {
        question: "Do you provide completion certificates?",
        answer:
          "Yes. Participants receive certificates after successfully completing the program.",
      },
    ],
  },
];


// Testimonials Data
export type Testimonial = {
  id: number;
  company: string;
  logo: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    company: "Bayer",
    logo: "/clients-images/bayer.svg",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    id: 2,
    company: "Reliance Industries",
    logo: "/clients-images/rel.png",
    quote:
      "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense and their support team is always there to help our employees.",
  },
  {
    id: 3,
    company: "HCL",
    logo: "/clients-images/hcl.png",
    quote:
      "The programs were practical, engaging, and tailored perfectly to our organization's goals. Our teams experienced immediate improvements in their day-to-day performance.",
  },
  {
    id: 4,
    company: "ADP",
    logo: "/clients-images/adp.svg",
    quote:
      "Accredian delivered an exceptional learning experience with outstanding mentors and seamless execution. We look forward to partnering again for future initiatives.",
  },
];


// Footer Data
export const footerLinks = [
  {
    title: "Accredian",
    links: [
      {
        label: "About",
        href: "#",
      },
      {
        label: "Blog",
        href: "#",
      },
      {
        label: "Why Accredian",
        href: "#",
      },
    ],
  },
];



export const socialLinks = [
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