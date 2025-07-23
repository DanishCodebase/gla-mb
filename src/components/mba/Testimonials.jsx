import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp Inc.",
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    quote: "The GLA Online MBA transformed my career. The flexible learning format allowed me to balance work and studies, while the industry-relevant curriculum gave me the skills to advance to a leadership role.",
    rating: 5,
    specialization: "MBA in Marketing",
    graduationYear: "2023"
  },
  {
    name: "Michael Chen",
    role: "Senior Financial Analyst",
    company: "Global Finance Ltd.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "The finance specialization was exactly what I needed. The professors brought real-world experience, and the networking opportunities helped me secure a position at a top financial firm.",
    rating: 5,
    specialization: "MBA in Finance",
    graduationYear: "2023"
  },
  {
    name: "Emily Rodriguez",
    role: "HR Manager",
    company: "Innovation Corp",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "The HR specialization provided me with strategic insights that I immediately applied in my role. The online format was perfect for my busy schedule, and the support team was always helpful.",
    rating: 5,
    specialization: "MBA in Human Resources",
    graduationYear: "2022"
  },
  {
    name: "David Thompson",
    role: "Business Development Manager",
    company: "Startup Ventures",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "The general MBA program gave me a comprehensive understanding of business operations. The capstone project was particularly valuable, helping me develop strategic thinking skills.",
    rating: 5,
    specialization: "General MBA",
    graduationYear: "2022"
  },
  {
    name: "Lisa Wang",
    role: "Product Manager",
    company: "Digital Solutions",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    quote: "The program exceeded my expectations. The quality of instruction was outstanding, and the career services team helped me transition into a product management role with a 40% salary increase.",
    rating: 5,
    specialization: "MBA in Marketing",
    graduationYear: "2023"
  },
  {
    name: "James Wilson",
    role: "Operations Director",
    company: "Manufacturing Plus",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    quote: "The online format was perfect for my work schedule. The faculty were accessible and supportive, and the practical projects helped me implement new strategies at my company.",
    rating: 5,
    specialization: "General MBA",
    graduationYear: "2022"
  }
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400">
          {i < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            What Our Graduates Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Hear from our successful alumni who have transformed their careers 
            and achieved their professional goals through our MBA program.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <StarRating rating={testimonial.rating} />
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      {testimonial.role} at {testimonial.company}
                    </p>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.specialization}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Class of {testimonial.graduationYear}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <blockquote className="text-slate-600 dark:text-slate-300 leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              98%
            </div>
            <div className="text-slate-600 dark:text-slate-400 text-sm">
              Student Satisfaction
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              45%
            </div>
            <div className="text-slate-600 dark:text-slate-400 text-sm">
              Average Salary Increase
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              6 Months
            </div>
            <div className="text-slate-600 dark:text-slate-400 text-sm">
              Average Time to Promotion
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              500+
            </div>
            <div className="text-slate-600 dark:text-slate-400 text-sm">
              Successful Graduates
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="font-medium">
              Join our community of successful professionals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
} 