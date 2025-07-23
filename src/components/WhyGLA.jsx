import { Building2, Users, Bot, BookOpen, Truck, MessageSquare, Briefcase, Globe } from "lucide-react"

export default function WhyGLA() {
  const features = [
    {
      icon: Building2,
      title: "Industry Visits for Real-World Exposure",
      description: "Experience hands-on learning through visits to top industry workplaces.",
      iconColor: "text-orange-500",
    },
    {
      icon: Users,
      title: "Dedicated Academic Advisors",
      description: "Dedicated experts and advisor to guide you at every step of your professional career",
      iconColor: "text-blue-500",
    },
    {
      icon: Bot,
      title: "AI-Professor AMI",
      description: "Powered by Chat-GPT 4 and open AI-driven technology for online learning",
      iconColor: "text-green-500",
    },
    {
      icon: BookOpen,
      title: "Diverse learning mediums",
      description: "E-books, printed & audio books, videos to cater your preferences & unique learning",
      iconColor: "text-yellow-500",
    },
    {
      icon: Truck,
      title: "Doorstep delivery of books",
      description: "India's only online university to provide physical books to read at your door step",
      iconColor: "text-red-500",
    },
    {
      icon: MessageSquare,
      title: "beSocial - Student Community Platform",
      description: "Where 75,000+ students connect, engage, and grow.",
      iconColor: "text-purple-500",
    },
    {
      icon: Briefcase,
      title: "Placement opportunities",
      description: "Job interview prep, placement assistance & resume building for students to be job-ready",
      iconColor: "text-cyan-500",
    },
    {
      icon: Globe,
      title: "Metaverse Campus",
      description: "Discovering endless possibilities of Amity campus through our metaverse tour",
      iconColor: "text-emerald-500",
    },
  ]

  return (
    <section className="bg-gray-900 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12 gap-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white lg:max-w-md">Why Choose Amity online?</h2>
          <p className="text-gray-300 text-lg lg:max-w-md lg:text-right">
            Our distinct online methods empower students to learn through innovative approaches.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6">
                  <IconComponent className={`w-8 h-8 ${feature.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-white text-xl font-semibold mb-4 leading-tight">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
