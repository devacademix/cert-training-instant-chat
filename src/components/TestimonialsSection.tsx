import { Play, CheckCircle, Home, AlertCircle, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "100% Pass-Guaranteed or 100% Money Back!",
      description: "We have a huge experienced technical staff squad to pass the exams without any trainings."
    },
    {
      icon: Home,
      title: "Stay home and pass online exam within 5 days.",
      description: "We offer online based exams. Therefore you don't need to go out from your home for the exam. Many vendors are offering Online Proctored based exam."
    },
    {
      icon: AlertCircle,
      title: "No Risk! No Fraud!",
      description: "We offer the exams with pass guarantee. If you don't see the pass report after the exam we refund your money."
    },
    {
      icon: FileText,
      title: "Score report is available immediately!",
      description: "In the end of exam, you will see the score report and you can check on the exam vendor the status of your exam with your own account."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Video Testimonials Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Passing <span className="text-primary">Live Exams</span>
          </h2>
          
          {/* Video Testimonials Placeholder */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[1, 2, 3].map((video) => (
              <div key={video} className="relative bg-gray-100 rounded-lg overflow-hidden aspect-video shadow-card hover:shadow-glow transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary/10">
                  <div className="bg-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/70 text-white text-sm px-3 py-1 rounded">
                    Live Exam Demo {video}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 bg-white text-center">
                <CardContent className="p-8">
                  <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Success Stories */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Exam <span className="text-primary">Success Stories</span>
          </h3>
          
          <div className="bg-gray-50 rounded-2xl p-8 shadow-card">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Success Story Cards */}
              {[
                { title: "Cisco Certification", count: "500+" },
                { title: "Microsoft Azure", count: "800+" },
                { title: "AWS Solutions", count: "350+" }
              ].map((story, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {story.count}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {story.title}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Successful Candidates
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;