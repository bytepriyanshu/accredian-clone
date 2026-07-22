import Image from "next/image";

import { font_family } from "../utils";

const clients = [
  {
    name: "Reliance Industries Limited",
    src: "/clients-images/rel.png",
    width: 917,
    height: 917,
    className: "h-[86px] w-[132px]",
  },
  {
    name: "HCL",
    src: "/clients-images/hcl.png",
    width: 5000,
    height: 7000,
    className: "h-[54px] w-[160px]",
  },
  {
    name: "IBM",
    src: "/clients-images/ibm.png",
    width: 800,
    height: 600,
    className: "h-[64px] w-[112px]",
  },
  {
    name: "CRIF",
    src: "/clients-images/crif.png",
    width: 184,
    height: 82,
    className: "h-[42px] w-[95px]",
  },
  {
    name: "ADP",
    src: "/clients-images/adp.svg",
    width: 70,
    height: 32,
    className: "h-[46px] w-[101px]",
  },
  {
    name: "Bayer",
    src: "/clients-images/bayer.svg",
    width: 1000,
    height: 1000,
    className: "h-[96px] w-[96px]",
  },
];

export default function Clients() {
  return (
    <section
      id="clients"
      aria-labelledby="clients-heading"
      className="bg-white px-5 pb-[70px] pt-[82px]"
      style={{ fontFamily: font_family }}
    >
      <div className="mx-auto max-w-[1210px] text-center">
        <h2
          id="clients-heading"
          className="text-[clamp(2rem,3vw,2.5rem)] font-bold leading-none tracking-normal text-[#1f2937]"
        >
          Our Proven <span className="text-[#2878ee]">Partnerships</span>
        </h2>

        <p className="mt-5 text-[18px] font-medium leading-none tracking-normal text-[#374151]">
          Successful Collaborations With the{" "}
          <span className="text-[#0066ff]">Industry&rsquo;s Best</span>
        </p>

        <ul
          aria-label="Accredian enterprise client partners"
          className="mt-[60px] grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-11 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-0"
        >
          {clients.map((client) => (
            <li key={client.name} className="flex h-[98px] items-center">
              <Image
                src={client.src}
                alt={`${client.name} logo`}
                width={client.width}
                height={client.height}
                sizes="(max-width: 640px) 40vw, (max-width: 1024px) 25vw, 110px"
                className={`${client.className} object-contain ${
                  client.name === "Reliance Industries Limited"
                    ? "scale-125"
                    : client.name === "HCL"
                      ? "scale-140"
                      : client.name === "IBM"
                        ? "scale-125"
                        : ""
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
