import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const programmes = [
  {
    title: "General MBA",
    duration: "24 Months",
    credits: "60 Credits",
    description: "Comprehensive business education covering all core business functions with flexibility to choose electives.",
    features: ["Core Business Functions", "Leadership Development", "Strategic Thinking", "Global Perspective"],
    price: "$15,000",
    popular: false,
    icon: "🎯"
  },
  {
    title: "MBA in Finance",
    duration: "24 Months", 
    credits: "60 Credits",
    description: "Specialized program focusing on financial management, investment analysis, and corporate finance.",
    features: ["Financial Analysis", "Investment Management", "Risk Assessment", "Corporate Finance"],
    price: "$16,500",
    popular: true,
    icon: "💰"
  },
  {
    title: "MBA in Marketing",
    duration: "24 Months",
    credits: "60 Credits", 
    description: "Advanced marketing strategies, digital marketing, and brand management for modern businesses.",
    features: ["Digital Marketing", "Brand Strategy", "Consumer Behavior", "Market Research"],
    price: "$16,000",
    popular: false,
    icon: "📈"
  },
  {
    title: "MBA in Human Resources",
    duration: "24 Months",
    credits: "60 Credits",
    description: "Strategic HR management, organizational behavior, and talent development for HR professionals.",
    features: ["Talent Management", "Organizational Development", "Employee Relations", "HR Analytics"],
    price: "$15,500",
    popular: false,
    icon: "👥"
  }
];

export function Programmes() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-800"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold mb-6 shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
            Choose Your Path
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Choose Your MBA Specialization
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive MBA programs are designed to equip you with the skills and knowledge 
            needed to excel in today's dynamic business environment.
          </p>
        </div>

        {/* Enhanced Programmes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {programmes.map((programme, index) => (
            <Card 
              key={index} 
              className={`relative group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                programme.popular ? 'ring-2 ring-blue-500 shadow-xl scale-105' : 'hover:ring-2 hover:ring-blue-200 dark:hover:ring-blue-800'
              } bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm`}
            >
              {programme.popular && (
                <Badge className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="pb-6 text-center">
                <div className="text-4xl mb-4">{programme.icon}</div>
                <CardTitle className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {programme.title}
                </CardTitle>
                <div className="flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {programme.duration}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {programme.credits}
                  </span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed text-center">
                  {programme.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm text-center">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {programme.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-3xl font-bold text-slate-900 dark:text-white">
                        {programme.price}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400 block">
                        Total Program
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Starting from
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      programme.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-lg hover:shadow-xl'
                    } transform hover:-translate-y-1 transition-all duration-300`}
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Additional Info */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 rounded-full shadow-lg border border-green-200 dark:border-green-800">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-semibold">
              All programs are accredited and internationally recognized
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 