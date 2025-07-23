import { Marquee } from "@/components/magicui/marquee";

const recruiters = [
  {
    name: "Google",
    logo: "https://via.placeholder.com/120x60/4285F4/FFFFFF?text=Google"
  },
  {
    name: "Microsoft",
    logo: "https://via.placeholder.com/120x60/00A4EF/FFFFFF?text=Microsoft"
  },
  {
    name: "Amazon",
    logo: "https://via.placeholder.com/120x60/FF9900/FFFFFF?text=Amazon"
  },
  {
    name: "Apple",
    logo: "https://via.placeholder.com/120x60/000000/FFFFFF?text=Apple"
  },
  {
    name: "Meta",
    logo: "https://via.placeholder.com/120x60/1877F2/FFFFFF?text=Meta"
  },
  {
    name: "Netflix",
    logo: "https://via.placeholder.com/120x60/E50914/FFFFFF?text=Netflix"
  },
  {
    name: "Tesla",
    logo: "https://via.placeholder.com/120x60/CC0000/FFFFFF?text=Tesla"
  },
  {
    name: "Salesforce",
    logo: "https://via.placeholder.com/120x60/00A1E0/FFFFFF?text=Salesforce"
  },
  {
    name: "Adobe",
    logo: "https://via.placeholder.com/120x60/FF0000/FFFFFF?text=Adobe"
  },
  {
    name: "IBM",
    logo: "https://via.placeholder.com/120x60/006699/FFFFFF?text=IBM"
  }
];

export function Recruiters() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Top Companies Hire Our Graduates
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our MBA graduates are highly sought after by leading companies worldwide. 
            Join the ranks of successful professionals who have advanced their careers with us.
          </p>
        </div>

        {/* Recruiters Marquee */}
        <div className="relative">
          {/* First Marquee - Forward Direction */}
          <Marquee 
            className="mb-8"
            pauseOnHover={true}
            repeat={3}
          >
            {recruiters.map((recruiter, index) => (
              <div
                key={`forward-${index}`}
                className="flex items-center justify-center mx-8 min-w-[200px] h-24 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <div className="w-32 h-16 flex items-center justify-center">
                  <img
                    src={recruiter.logo}
                    alt={`${recruiter.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Marquee>

          {/* Second Marquee - Reverse Direction */}
          <Marquee 
            className="mb-8"
            reverse={true}
            pauseOnHover={true}
            repeat={3}
          >
            {recruiters.map((recruiter, index) => (
              <div
                key={`reverse-${index}`}
                className="flex items-center justify-center mx-8 min-w-[200px] h-24 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
              >
                <div className="w-32 h-16 flex items-center justify-center">
                  <img
                    src={recruiter.logo}
                    alt={`${recruiter.name} logo`}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span className="text-sm font-medium">
              Average salary increase of 45% after graduation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 