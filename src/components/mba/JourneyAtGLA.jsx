import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const journeySteps = [
  {
    step: "01",
    title: "Application & Enrollment",
    description: "Submit your application with required documents and complete the enrollment process.",
    duration: "1-2 weeks",
    icon: "📝",
    features: ["Online Application", "Document Submission", "Interview Process", "Enrollment Confirmation"]
  },
  {
    step: "02", 
    title: "Orientation & Onboarding",
    description: "Get familiar with our learning platform and connect with your academic advisor.",
    duration: "1 week",
    icon: "🎯",
    features: ["Platform Training", "Academic Advisor Assignment", "Course Planning", "Student Resources"]
  },
  {
    step: "03",
    title: "Core Coursework",
    description: "Complete foundational business courses covering all essential management concepts.",
    duration: "12 months",
    icon: "📚",
    features: ["Business Fundamentals", "Leadership Skills", "Strategic Thinking", "Global Business"]
  },
  {
    step: "04",
    title: "Specialization & Electives",
    description: "Focus on your chosen specialization and select elective courses of interest.",
    duration: "6 months",
    icon: "🎓",
    features: ["Specialized Courses", "Industry Projects", "Case Studies", "Practical Applications"]
  },
  {
    step: "05",
    title: "Capstone Project",
    description: "Complete a comprehensive business project demonstrating your acquired skills.",
    duration: "3 months",
    icon: "💼",
    features: ["Real Business Problem", "Research & Analysis", "Strategic Recommendations", "Final Presentation"]
  },
  {
    step: "06",
    title: "Graduation & Certification",
    description: "Receive your MBA degree and join our alumni network of successful professionals.",
    duration: "1 month",
    icon: "🎉",
    features: ["Degree Conferral", "Alumni Network Access", "Career Services", "Lifelong Learning"]
  }
];

export function JourneyAtGLA() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Your Journey at GLA Online
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            From application to graduation, we guide you through every step of your MBA journey 
            with comprehensive support and personalized attention.
          </p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500 transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div key={index} className={`relative flex items-start ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-slate-800 transform -translate-x-2 md:-translate-x-1/2 z-10"></div>
                
                {/* Content Card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="text-3xl">{step.icon}</div>
                        <div>
                          <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            Step {step.step}
                          </div>
                          <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                            {step.title}
                          </CardTitle>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>Duration: {step.duration}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                          Key Activities:
                        </h4>
                        <ul className="space-y-1">
                          {step.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Summary */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                24 Months
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                Total Program Duration
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                60 Credits
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                Required for Graduation
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                100% Online
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                Flexible Learning Format
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 