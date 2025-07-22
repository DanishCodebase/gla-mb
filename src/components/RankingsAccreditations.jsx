import { Marquee } from "./magicui/marquee";

const accreditationLogos = [
  {
    name: "ACCA Think Ahead",
    image: "/c-acca.jpg",
    alt: "ACCA Think Ahead Accreditation",
  },
  {
    name: "Association of Indian Universities",
    image: "/c-aiu.jpg",
    alt: "AIU Accreditation",
  },
  {
    name: "IACBE",
    image: "/c-iacb.jpg",
    alt: "International Accreditation Council for Business Education",
  },
  {
    name: "IAU",
    image: "/c-iau.jpg",
    alt: "International Association of Universities",
  },
  {
    name: "NAAC",
    image: "/c-naac.jpg",
    alt: "National Assessment and Accreditation Council",
  },
  {
    name: "NIRF",
    image: "/c-nirf.jpg",
    alt: "National Institutional Ranking Framework",
  },
  {
    name: "Times Higher Education",
    image: "/c-times.jpg",
    alt: "THE World University Rankings",
  },
  {
    name: "UGC",
    image: "/c-ugc.jpg",
    alt: "University Grants Commission",
  },
  {
    name: "WES",
    image: "/c-wes.jpg",
    alt: "World Education Services",
  },
];

const accreditationLogosMobile = [
  {
    name: "WES",
    image: "/c-wes.jpg",
    alt: "World Education Services",
  },
  {
    name: "Times Higher Education",
    image: "/c-times.jpg",
    alt: "THE World University Rankings",
  },
  {
    name: "UGC",
    image: "/c-ugc.jpg",
    alt: "University Grants Commission",
  },
  {
    name: "NAAC",
    image: "/c-naac.jpg",
    alt: "National Assessment and Accreditation Council",
  },
  {
    name: "NIRF",
    image: "/c-nirf.jpg",
    alt: "National Institutional Ranking Framework",
  },
  {
    name: "IACBE",
    image: "/c-iacb.jpg",
    alt: "International Accreditation Council for Business Education",
  },
  {
    name: "IAU",
    image: "/c-iau.jpg",
    alt: "International Association of Universities",
  },
  {
    name: "ACCA Think Ahead",
    image: "/c-acca.jpg",
    alt: "ACCA Think Ahead Accreditation",
  },
  {
    name: "Association of Indian Universities",
    image: "/c-aiu.jpg",
    alt: "AIU Accreditation",
  },
];

export function RankingsAccreditations() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Rankings & Accreditations
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Recognized by leading accreditation bodies and ranking institutions
            worldwide
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* First Marquee - Forward Direction */}
          <Marquee className="mb-8" pauseOnHover={true}>
            {accreditationLogos.map((logo, index) => (
              <div
                key={`forward-${index}`}
                className="flex flex-col items-center justify-center mx-2 w-full bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 h-20"
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="object-contain w-full h-full px-8 py-2 sm:py-1 rounded-md"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
          <Marquee
            className="mb-8 sm:hidden"
            reverse={true}
            pauseOnHover={true}
          >
            {accreditationLogosMobile.map((logo, index) => (
              <div
                key={`forward-${index}`}
                className="flex flex-col items-center justify-center mx-2 w-full bg-white rounded-md shadow-sm hover:shadow-md transition-all duration-300 h-20"
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="object-contain w-full h-full px-8 py-2 sm:py-1 rounded-md"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
