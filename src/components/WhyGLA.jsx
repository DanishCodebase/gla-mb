// import {
//   Building2,
//   Users,
//   Bot,
//   BookOpen,
//   Truck,
//   MessageSquare,
//   Briefcase,
//   Globe,
// } from "lucide-react";

export default function WhyGLA() {
  const features = [
    {
      title: `Degree from a  <span class="text-green-600 font-bold">NAAC A+</span> Accredited University`,
      description:
        "Earn a prestigious degree from a NAAC A+ accredited institution, ensuring your qualification is recognized and respected worldwide.",
      iconColor: "text-orange-500",
      image: "accreditated.png",
    },
    {
      title: "<span class='text-green-600 font-bold'>Highly Experienced</span> Pool of Faculty Members",
      description:
        "Learn from industry experts and experienced academics who bring real-world insights and cutting-edge knowledge to your education.",
      iconColor: "text-blue-500",
      image: "teacher.png",
    },
    {
      title: "Join a Global Network of <span class='text-green-600 font-bold'>36,000+</span> Alumni",
      description:
        "Connect with a vast network of successful professionals and build valuable relationships that last throughout your career.",
      iconColor: "text-green-500",
      image: "networking.png",
    },
    {
      title: "<span class='text-green-600 font-bold'>Peer Learning</span> through Group Projects & Presentations",
      description:
        "Collaborate with peers on real-world projects, developing teamwork skills and gaining diverse perspectives.",
      iconColor: "text-yellow-500",
      image: "peer-learning.png",
    },
    {
      title: "<span class='text-green-600 font-bold'>Live & Recorded</span> Lectures",
      description:
        "Access both live interactive sessions and recorded content, giving you flexibility to learn at your own pace.",
      iconColor: "text-red-500",
      image: "live.png",
    },
    {
      title: "<span class='text-green-600 font-bold'>Placements</span> Powered by <span class='text-green-600 font-bold'>GLA University</span>",
      description:
        "Access to a wide range of placement opportunities, including internships, job opportunities, and career guidance.",
      iconColor: "text-purple-500",
      image: "hiring.png",
    },
    // {
    //   icon: Briefcase,
    //   title: "Placement opportunities",
    //   description:
    //     "Job interview prep, placement assistance & resume building for students to be job-ready",
    //   iconColor: "text-cyan-500",
    // },
    // {
    //   icon: Globe,
    //   title: "Metaverse Campus",
    //   description:
    //     "Discovering endless possibilities of Amity campus through our metaverse tour",
    //   iconColor: "text-emerald-500",
    // },
  ];

  return (
    <section
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backgroundImage: "url('/why.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
      className="py-16 px-4 md:px-6 lg:px-8 relative"
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="max-w-7xl mx-auto relative z-10 sm:px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white lg:max-w-md">
            Why Choose GLA Online?
          </h2>
          <p className="text-gray-300 text-lg lg:max-w-md lg:text-right">
            Our distinct online methods empower students to learn through
            innovative approaches.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-[#fff3] rounded-2xl p-6 transition-colors"
              >
                {/* Icon */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6">
                  <img
                    src={`/${feature.image}`}
                    alt={feature.title}
                    className="w-16 h-16"
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-white text-xl font-semibold mb-4 leading-tight"
                  dangerouslySetInnerHTML={{ __html: feature.title }}
                />
  
                {/* <p className="text-white text-sm leading-relaxed">
                  {feature.description}
                </p> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
