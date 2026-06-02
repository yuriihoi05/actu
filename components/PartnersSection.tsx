import Image from "next/image";

const partners = [
  {
    href: "#",
    src: "https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69de06e1c930130f3b6c512a_onur.svg.svg",
    alt: "ONUR",
  },
  {
    href: "#",
    src: "https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69de06c616bbd8ba5a437249_agrobudservuce.svg.svg",
    alt: "Agrobudservice",
  },
  {
    href: "#",
    src: "https://cdn.prod.website-files.com/69ddf8ab1637e24e4f5b673f/69de06bfdc9c08407639ea48_efe.svg.svg",
    alt: "EFE",
  },
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">Наші Партнери</h2>
        <div className="flex flex-col items-center gap-14">
          {/* Row 1: ONUR — 141×141 */}
          <a
            href={partners[0].href}
            className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
          >
            <Image
              src={partners[0].src}
              alt={partners[0].alt}
              width={141}
              height={141}
              className="w-48 h-auto"
            />
          </a>
          {/* Row 2: AGROBUDSERVICE (141×71) + EFE (141×141) */}
          <div className="flex items-center justify-center gap-16">
            <a
              href={partners[1].href}
              className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <Image
                src={partners[1].src}
                alt={partners[1].alt}
                width={141}
                height={71}
                className="w-48 h-auto"
              />
            </a>
            <a
              href={partners[2].href}
              className="grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <Image
                src={partners[2].src}
                alt={partners[2].alt}
                width={141}
                height={141}
                className="w-48 h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
