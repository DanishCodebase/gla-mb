import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: "🏭",
    title: "Industry Visits for Real-World Exposure",
    description: "Experience hands-on learning through visits to top industry workplaces and corporate environments.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: "💬",
    title: "Dedicated Academic Advisors",
    description: "Dedicated experts and advisors to guide you at every step of your professional career journey.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: "🤖",
    title: "AI-Enhanced Learning Platform",
    description: "Powered by advanced AI-driven technology for personalized online learning experiences.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "📚",
    title: "Diverse Learning Mediums",
    description: "E-books, printed & audio books, videos to cater to your preferences & unique learning style.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: "📦",
    title: "Doorstep Delivery of Books",
    description: "India's premier online university to provide physical books delivered right to your doorstep.",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: "🌐",
    title: "GLA Connect - Student Community Platform",
    description: "Where 50,000+ students connect, engage, and grow together in a vibrant learning community.",
    color: "from-yellow-500 to-green-500"
  },
  {
    icon: "💼",
    title: "Placement Opportunities",
    description: "Job interview prep, placement assistance & resume building for students to be job-ready.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: "🥽",
    title: "Virtual Campus Experience",
    description: "Discovering endless possibilities of GLA campus through our immersive virtual tour experience.",
    color: "from-green-500 to-emerald-500"
  }
];

export function WhyChooseGLA() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-800/50"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-900/20 rounded-full blur-3xl"></div>
      
      {/* Subtle Background Image Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  GLA Online?
                </span>
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Our distinct online methods empower students to learn through innovative approaches 
                and cutting-edge technology.
              </p>
            </div>
            
            {/* Optional: Add a visual element or stats */}
            <div className="hidden lg:block">
              <div className="w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Features Grid - 2x4 Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <CardContent className="p-6 text-center">
                {/* Enhanced Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-2xl">{feature.icon}</div>
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Subtle Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="font-semibold text-lg">
              Join our innovative learning community today
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 