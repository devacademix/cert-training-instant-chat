import { MessageCircle, ArrowLeft, CheckCircle, Clock, Globe, Award, Users, Shield, BookOpen, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface Course {
  name: string;
  description: string;
  level: string;
}

interface CourseLayoutProps {
  provider: string;
  title: string;
  description: string;
  courses: Course[];
  imageUrl?: string;
}

const CourseLayout = ({ provider, title, description, courses, imageUrl }: CourseLayoutProps) => {
  const whatsappLink = "https://wa.me/c/918603516998";

  const benefits = [
    {
      icon: CheckCircle,
      title: "100% Pass Guarantee",
      description: "We guarantee your success with worldwide IT/NON-IT certifications or provide a full refund"
    },
    {
      icon: Clock,
      title: "24/7 Remote Support",
      description: "Round-the-clock assistance from our expert team available globally"
    },
    {
      icon: Globe,
      title: "Worldwide Support",
      description: "Remote online assistance available in all countries"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Globally recognized IT/NON-IT certifications with guaranteed results"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Learn from certified professionals with proven track record"
    },
    {
      icon: Shield,
      title: "Secure & Trusted",
      description: "100% safe and legitimate certification process"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Home
                </Link>
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  {title}
                  <br />
                  <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                    Certifications
                  </span>
                </h1>
                <div className="w-16 h-1 bg-white"></div>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-blue-100">
                  {description} Get worldwide IT/NON-IT certification support with remote assistance and 100% passing guarantee.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={() => window.open(`${whatsappLink}?text=Hi, I'm interested in ${provider} certifications. Please share more details.`, '_blank')}
                    className="bg-white text-primary hover:bg-blue-50 shadow-glow"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Get Exam Support Now
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100 text-sm">100% Pass Guarantee</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100 text-sm">Worldwide Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100 text-sm">24/7 Remote Help</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-green-400" />
                  <span className="text-blue-100 text-sm">Industry Recognized</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-glow bg-white/10 backdrop-blur-sm border border-white/20">
                <img 
                  src={imageUrl || `https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop`}
                  alt={`${provider} Certification Training`}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-900 p-4 rounded-lg">
                    <div className="text-lg font-bold text-primary">1500+ Successful Candidates</div>
                    <div className="text-sm text-gray-600">Worldwide IT/NON-IT Certifications</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Available <span className="text-primary">{provider}</span> Certifications
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our comprehensive range of {provider} certifications with guaranteed passing support.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 bg-white group">
              <div className="relative h-48 bg-gradient-primary/10 rounded-t-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop`}
                  alt={`${course.name} certification`}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                    {course.level}
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{course.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{course.description}</p>
                <div className="space-y-3">
                  <Button 
                    variant="hero" 
                    className="w-full bg-primary hover:bg-primary-dark text-white"
                    onClick={() => window.open(`${whatsappLink}?text=Hi, I'm interested in ${course.name} certification. Please share the pricing and details.`, '_blank')}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Get Pricing on WhatsApp
                  </Button>
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                      Pass Guarantee
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="h-3 w-3 text-blue-500" />
                      Remote Support
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-primary">{provider}</span> Training?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get worldwide IT/NON-IT certification training with guaranteed results, remote support, and expert guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 bg-white text-center group">
                  <CardContent className="p-8">
                    <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your Certification Journey?</h3>
            <p className="text-xl text-blue-100 mb-8">
              Contact us on WhatsApp for personalized course recommendations, pricing, and enrollment details. 
              Get worldwide IT/NON-IT certification support with 100% passing guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero" 
                size="lg"
                className="bg-white text-primary hover:bg-blue-50 shadow-glow"
                onClick={() => window.open(`${whatsappLink}?text=Hi, I'm interested in ${provider} certifications. Please share more details.`, '_blank')}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact Expert on WhatsApp
              </Button>
              <Button 
                variant="hero" 
                size="lg"
                className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-primary backdrop-blur-sm"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <BookOpen className="h-5 w-5 mr-2" />
                View All Courses
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">1500+</div>
                <div className="text-blue-200 text-sm">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-blue-200 text-sm">Pass Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-blue-200 text-sm">Remote Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseLayout;