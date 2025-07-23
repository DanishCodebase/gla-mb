import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Enhanced Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              {/* Enhanced Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-sm font-semibold shadow-lg transform hover:scale-105 transition-all duration-300">
                <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                Online MBA Program
              </div>
              
              {/* Enhanced Typography */}
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight tracking-tight">
                Transform Your Career with Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient">
                  Online MBA
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-light">
                Advance your career with our accredited online MBA program. 
                Flexible learning, industry-relevant curriculum, and expert faculty 
                to help you achieve your professional goals.
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                Start Your Application
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-4 text-lg font-semibold border-2 hover:bg-slate-50 dark:hover:bg-slate-800 transform hover:-translate-y-1 transition-all duration-300">
                Download Brochure
              </Button>
            </div>
            
            {/* Enhanced Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  500+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Students Enrolled
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  95%
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Employment Rate
                </div>
              </div>
              <div className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  24/7
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  Support Available
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Enhanced Contact Form */}
          <div className="lg:pl-8">
            <Card className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <CardTitle className="text-3xl font-bold text-slate-900 dark:text-white">
                  Get Your Free Consultation
                </CardTitle>
                <p className="text-slate-600 dark:text-slate-400 text-lg">
                  Speak with our admissions team today
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-semibold">
                      First Name
                    </Label>
                    <Input id="firstName" placeholder="John" className="h-12 text-base" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-semibold">
                      Last Name
                    </Label>
                    <Input id="lastName" placeholder="Doe" className="h-12 text-base" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold">
                    Email Address
                  </Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-12 text-base" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold">
                    Phone Number
                  </Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="h-12 text-base" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-sm font-semibold">
                    Years of Experience
                  </Label>
                  <select 
                    id="experience" 
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  Request Free Consultation
                </Button>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 text-center leading-relaxed">
                  By submitting this form, you agree to our privacy policy and consent to being contacted by our team.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 