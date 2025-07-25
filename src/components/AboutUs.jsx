"use client";

const AboutUs = () => {
  const features = [
    {
      title: "Flexible Schedule",
      description: "Weekend and evening classes to fit your work schedule",
      bgColor: "bg-blue-100",
    },
    {
      title: "Comprehensive Curriculum",
      description: "Our 8 specialisations covers all management aspects",
      bgColor: "bg-green-100",
    },
    {
      title: "Industry Focus",
      description:
        "Real-world projects and case studies from leading companies",
      bgColor: "bg-yellow-100",
    },
    {
      title: "Professional Development",
      description: "Enhanced attitude and professional integrity development",
      bgColor: "bg-red-100",
    },
  ];

  const handleApplyNowClick = (e) => {
    e.preventDefault();
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="py-16 sm:py-20 relative xl:mr-0 lg:mr-5 mr-0">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <div className="w-full flex-col justify-start lg:items-start gap-3 flex">
                  <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold font-manrope sm:text-start text-center">
                    About GLA Online
                  </h2>
                  <p className="text-gray-500 text-[17px] font-normal leading-relaxed sm:text-start text-center">
                    Start your career with GLA University's Online MBA — a
                    UGC-entitled, NAAC A+ accredited program designed for
                    working professionals. Gain industry-relevant skills, learn
                    from top faculty, and enjoy the flexibility of 100% online
                    learning. Enroll now to lead with confidence!
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex ${feature.bgColor}`}
                    >
                      <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-base font-normal leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <a
              href="#contact-form"
              onClick={handleApplyNowClick}
              className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex"
            >
              <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">
                Apply Now
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-indigo-600 ml-2 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[564px] h-full sm:bg-black/85 rounded-3xl sm:border border-gray-200 relative">
              <picture>
                {/* Large devices - use about-lg.webp */}
                <source media="(min-width: 1024px)" srcSet="/about-lg.webp" />
                {/* Small and medium devices - use about.webp */}
                <source media="(max-width: 1023px)" srcSet="/about.webp" />
                {/* Fallback image */}
                <img
                  className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                  src="/about.webp"
                  alt="about Us image"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
