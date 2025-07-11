import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const whatsappNumber = "+918603516998";
  const whatsappLink = "https://wa.me/c/918603516998";
  const email = "info@globaltrainingcertifications.org";
  const address = "Andheri East, Mumbai, Maharashtra 400069, India";

  // Generate QR code URL for WhatsApp
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(whatsappLink)}`;

  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get <span className="text-blue-200">Started Today</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Contact us now and take the first step towards your certification success
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardContent className="p-8 text-center">
                  <Phone className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Phone</h3>
                  <a 
                    href={`tel:${whatsappNumber}`}
                    className="text-blue-200 hover:text-white transition-colors text-lg"
                  >
                    {whatsappNumber}
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
                <CardContent className="p-8 text-center">
                  <Mail className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email</h3>
                  <a 
                    href={`mailto:${email}`}
                    className="text-blue-200 hover:text-white transition-colors text-lg break-all"
                  >
                    {email}
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-lg md:col-span-2">
                <CardContent className="p-8 text-center">
                  <MapPin className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Address</h3>
                  <p className="text-blue-200 text-lg">
                    {address}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => window.open(whatsappLink, '_blank')}
                className="bg-white text-primary hover:bg-blue-50 shadow-glow text-xl px-12 py-6"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Start WhatsApp Chat
              </Button>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex justify-center lg:justify-end">
            <Card className="bg-white/10 border-white/20 backdrop-blur-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Scan QR Code</h3>
                <div className="bg-white p-4 rounded-lg inline-block shadow-glow">
                  <img 
                    src={qrCodeUrl} 
                    alt="WhatsApp QR Code"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <p className="text-blue-200 mt-4 text-sm">
                  Scan to open WhatsApp chat
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;