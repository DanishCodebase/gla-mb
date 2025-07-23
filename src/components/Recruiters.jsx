import { Marquee } from "./magicui/marquee";

const recruitersLogos = [
  {
    name: "Jindal Steel & Power Limited",
    image: "/logo1.png",
    alt: "Jindal Steel & Power Limited",
  },
  {
    name: "Ntt Data",
    image: "/logo2.png",
    alt: "Ntt Data",
  },
  {
    name: "HDFC Bank",
    image: "/logo3.png",
    alt: "HDFC Bank",
  },
  {
    name: "Tech Mahindra",
    image: "/logo4.png",
    alt: "Tech Mahindra",
  },
  {
    name: "Honda",
    image: "/logo5.png",
    alt: "Honda",
  },
  {
    name: "Amazon",
    image: "/logo6.png",
    alt: "Amazon",
  },
  {
    name: "Afcons",
    image: "/logo7.png",
    alt: "Afcons",
  },
  {
    name: "MU Sigma",
    image: "/logo8.png",
    alt: "MU Sigma",
  },
  {
    name: "Samsung",
    image: "/logo9.png",
    alt: "Samsung",
  },
  {
    name: "Azure Power",
    image: "/logo10.png",
    alt: "Azure Power",
  },
];

export function Recruiters() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(black 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Recruiters
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Recruiters who have partnered with us
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* First Marquee - Forward Direction */}
          <Marquee className="mb-8" pauseOnHover={true}>
            {recruitersLogos.slice(0, 5).map((logo, index) => (
            //   <div
            //     key={`forward-${index}`}
            //     className="flex flex-col items-center justify-center mx-2 w-full bg-white shadow-sm hover:shadow-md transition-all duration-300 h-20"
            //   >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
            //   </div>
            ))}
          </Marquee>
          {/* Second Marquee - Backwar Direction */}
          <Marquee className="mb-8" pauseOnHover={true} reverse>
            {recruitersLogos.slice(5, 10).map((logo, index) => (
            //   <div
            //     key={`forward-${index}`}
            //     className="flex flex-col items-center justify-center mx-2 w-full bg-white shadow-sm hover:shadow-md transition-all duration-300 h-20"
            //   >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  className="object-contain w-full h-full"
                  loading="lazy"
                />
            //   </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
