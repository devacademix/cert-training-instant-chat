import { MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/c/918603516998";

  return (
    <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-blue-600/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                GUARANTEED
                <br />
                <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  SUCCESS
                </span>
              </h1>
              <div className="w-16 h-1 bg-white"></div>
            </div>
            
            <div className="space-y-4">
              <p className="text-xl text-blue-100">
                Pass your certification exams with our proven methods and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="bg-white text-primary hover:bg-blue-50 shadow-glow text-lg px-8 py-6"
                >
                  <MessageCircle className="h-6 w-6 mr-2" />
                  Get Started Now
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-blue-100">100% Pass Guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-blue-100">24/7 Support</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-blue-100">Expert Guidance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="text-blue-100">Instant Results</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Global Training & Certifications Success"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;