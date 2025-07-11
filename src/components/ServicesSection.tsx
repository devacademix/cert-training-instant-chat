import { CheckCircle, Award, Users, Shield, Clock, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: CheckCircle,
      title: "PASS GUARANTEE",
      description: "We are a long-term player in the industry with a proven (100% Pass Guaranteed) record.",
      color: "bg-green-500"
    },
    {
      icon: Award,
      title: "CERTIFIED EXPERIENCE",
      description: "Passing Without Exam, Our professionals will take your Exam in testing center for you.",
      color: "bg-blue-500"
    },
    {
      icon: Shield,
      title: "SIMPLE BUT SECURE",
      description: "No matter where you locate, you can take your exams and obtain your certifications at home without any effort!",
      color: "bg-purple-500"
    },
    {
      icon: Star,
      title: "WE'RE THE FIRST ONE",
      description: "We are the first IT Exam Substituting Company for worldwide.",
      color: "bg-yellow-500"
    },
    {
      icon: Clock,
      title: "20 YEARS EXPERIENCE",
      description: "With over 5000 clients passed their exam and got the certificates.",
      color: "bg-red-500"
    },
    {
      icon: Users,
      title: "GREAT SUPPORT",
      description: "We're here 24/7 available to serve your request regarding your certifications.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Global Training & Certifications Service in <span className="text-primary">Simple Steps</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;