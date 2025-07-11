import { MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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
}

const CourseLayout = ({ provider, title, description, courses }: CourseLayoutProps) => {
  const whatsappLink = "https://wa.me/c/918603516998";

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <a href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>
          <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{course.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  Level: {course.level}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                <Button 
                  variant="hero" 
                  className="w-full"
                  onClick={() => window.open(`${whatsappLink}?text=Hi, I'm interested in ${course.name} certification. Please share the pricing and details.`, '_blank')}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Get Pricing on WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Start Your Certification Journey?</h3>
            <p className="text-muted-foreground mb-6">
              Contact us on WhatsApp for personalized course recommendations, pricing, and enrollment details.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open(`${whatsappLink}?text=Hi, I'm interested in ${provider} certifications. Please share more details.`, '_blank')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Contact Us on WhatsApp
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseLayout;