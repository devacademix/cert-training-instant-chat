import { Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const whatsappNumber = "+918603516998";
  const whatsappLink = "https://wa.me/c/918603516998";
  const email = "info@globaltrainingcertifications.org";

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top contact bar */}
      <div className="bg-gradient-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-4">
              <a href={`mailto:${email}`} className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                <Mail className="h-4 w-4" />
                {email}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-100">For Order/Enquiry:</span>
              <a href={`tel:${whatsappNumber}`} className="flex items-center gap-1 hover:text-blue-200 transition-colors">
                <Phone className="h-4 w-4" />
                {whatsappNumber}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-primary">
                GLOBAL<span className="text-primary-dark">TRAINING</span>
              </h1>
              <p className="text-sm text-muted-foreground">HELPING YOU REAL TIME ONLINE</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-1 py-3">
            {[
              { name: 'Cisco', path: '/cisco' },
              { name: 'Microsoft', path: '/microsoft' },
              { name: 'AWS', path: '/aws' },
              { name: 'CompTIA', path: '/comptia' },
              { name: 'VMware', path: '/vmware' },
              { name: 'Google', path: '/google' },
              { name: 'Oracle', path: '/oracle' },
              { name: 'PMI', path: '/pmi' },
              { name: 'ISACA', path: '/isaca' },
              { name: 'Fortinet', path: '/fortinet' },
              { name: 'IIA', path: '/iia' },
              { name: 'Snowflake', path: '/snowflake' }
            ].map((cert) => (
              <a 
                key={cert.name} 
                href={cert.path}
                className="px-3 py-1 hover:bg-white/10 rounded cursor-pointer transition-colors text-sm"
              >
                {cert.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;