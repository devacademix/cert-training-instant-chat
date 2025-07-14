import { MessageCircle, CheckCircle, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SubcourseLayoutProps {
  courseName: string;
  provider: string;
  description: string;
  level: string;
  duration?: string;
  imageUrl?: string;
}

const SubcourseLayout = ({ 
  courseName, 
  provider, 
  description, 
  level, 
  duration = "40-60 hours",
  imageUrl = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop"
}: SubcourseLayoutProps) => {
  const whatsappNumber = "+918603516998";
  const whatsappLink = "https://wa.me/c/918603516998";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {provider}
              </span>
              <span className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                {level}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              {courseName}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Get Course Details
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(`tel:${whatsappNumber}`, '_blank')}
                className="flex items-center gap-2"
              >
                Call Now: {whatsappNumber}
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src={imageUrl}
              alt={courseName}
              className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">100% Pass Guarantee</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                We guarantee your success with our proven training methodology
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Expert Instructors</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Learn from industry experts with real-world experience
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Flexible Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {duration} of comprehensive training at your pace
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Worldwide Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Globally recognized certification with remote support
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Course Benefits */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-2xl">What You'll Learn</CardTitle>
            <CardDescription>
              Comprehensive curriculum designed for real-world application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Core Concepts</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    Fundamental principles and best practices
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    Industry standard methodologies
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    Real-world case studies and scenarios
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-primary">Practical Skills</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    Hands-on lab exercises and projects
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    Exam preparation and practice tests
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    Career guidance and interview preparation
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join thousands of successful professionals who have advanced their careers with our 
              worldwide IT/NON-IT certifications and remote support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp for Instant Support
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(`tel:${whatsappNumber}`, '_blank')}
                className="flex items-center gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Call Now: {whatsappNumber}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SubcourseLayout;