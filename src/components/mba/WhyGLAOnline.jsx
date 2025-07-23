import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: "🎓",
    title: "Degree from a",
    highlight: "NAAC A+",
    subtitle: "Accredited University",
    description: "Earn a prestigious degree from a NAAC A+ accredited institution, ensuring your qualification is recognized and respected worldwide.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: "👩‍🏫",
    title: "Highly Experienced",
    highlight: "Pool of Faculty",
    subtitle: "Members",
    description: "Learn from industry experts and experienced academics who bring real-world insights and cutting-edge knowledge to your education.",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: "🌍",
    title: "Join a Global Network of",
    highlight: "36,000+",
    subtitle: "Alumni",
    description: "Connect with a vast network of successful professionals and build valuable relationships that last throughout your career.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: "👥",
    title: "Peer Learning through",
    highlight: "Group Projects",
    subtitle: "& Presentations",
    description: "Collaborate with peers on real-world projects, developing teamwork skills and gaining diverse perspectives.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: "▶️",
    title: "Live &",
    highlight: "Recorded",
    subtitle: "Lectures",
    description: "Access both live interactive sessions and recorded content, giving you flexibility to learn at your own pace.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: "📍",
    title: "Placements Powered by",
    highlight: "GLA University",
    subtitle: "",
    description: "Benefit from our strong industry connections and dedicated placement support to launch your career successfully.",
    color: "from-yellow-500 to-orange-500"
  }
];

export function WhyGLAOnline() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white/50 dark:to-slate-900/50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/50 dark:bg-orange-900/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
            Why Choose Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 animate-gradient">
              GLA Online
            </span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Discover the unique advantages that make our online MBA program the perfect choice 
            for ambitious professionals looking to advance their careers.
          </p>
        </div>

        {/* Enhanced Benefits Grid - 2x3 Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <CardContent className="p-8 text-center">
                {/* Enhanced Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-3xl">{benefit.icon}</div>
                </div>
                
                {/* Enhanced Typography */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white leading-tight">
                    {benefit.title}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 font-bold">
                      {benefit.highlight}
                    </span>{" "}
                    {benefit.subtitle}
                  </h3>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Subtle Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Statistics Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
              95%
            </div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">
              Employment Rate
            </div>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
              36K+
            </div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">
              Global Alumni
            </div>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              50+
            </div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">
              Industry Partners
            </div>
          </div>
          
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              24/7
            </div>
            <div className="text-slate-600 dark:text-slate-400 font-medium">
              Student Support
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="font-semibold text-lg">
              Join thousands of successful graduates worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 