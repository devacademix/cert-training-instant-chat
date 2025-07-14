import { MessageCircle, Phone, Mail } from "lucide-react";

const Footer = () => {
  const whatsappNumber = "+918603516998";
  const whatsappLink = "https://wa.me/c/918603516998";
  const email = "info@globaltrainingcertifications.org";

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Global Training & Certifications
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for IT certification success. We provide guaranteed pass solutions 
              for all major technology certifications including Cisco, Microsoft, AWS, and more.
            </p>
            <div className="flex gap-4">
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a 
                href={`tel:${whatsappNumber}`}
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a 
                href={`mailto:${email}`}
                className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-4">All Certifications</h4>
            <div className="grid grid-cols-2 gap-1 text-gray-300 text-sm">
              <a href="/cisco" className="hover:text-primary transition-colors">Cisco</a>
              <a href="/microsoft" className="hover:text-primary transition-colors">Microsoft</a>
              <a href="/aws" className="hover:text-primary transition-colors">AWS</a>
              <a href="/comptia" className="hover:text-primary transition-colors">CompTIA</a>
              <a href="/vmware" className="hover:text-primary transition-colors">VMware</a>
              <a href="/google" className="hover:text-primary transition-colors">Google</a>
              <a href="/oracle" className="hover:text-primary transition-colors">Oracle</a>
              <a href="/pmi" className="hover:text-primary transition-colors">PMI</a>
              <a href="/isaca" className="hover:text-primary transition-colors">ISACA</a>
              <a href="/fortinet" className="hover:text-primary transition-colors">Fortinet</a>
              <a href="/ec-council" className="hover:text-primary transition-colors">EC-Council</a>
              <a href="/itil" className="hover:text-primary transition-colors">ITIL</a>
              <a href="/prince2" className="hover:text-primary transition-colors">Prince2</a>
              <a href="/juniper" className="hover:text-primary transition-colors">Juniper</a>
              <a href="/salesforce" className="hover:text-primary transition-colors">Salesforce</a>
              <a href="/servicenow" className="hover:text-primary transition-colors">ServiceNow</a>
              <a href="/scrum" className="hover:text-primary transition-colors">Scrum</a>
              <a href="/six-sigma" className="hover:text-primary transition-colors">Six Sigma</a>
              <a href="/ibm" className="hover:text-primary transition-colors">IBM</a>
              <a href="/sap" className="hover:text-primary transition-colors">SAP</a>
              <a href="/splunk" className="hover:text-primary transition-colors">Splunk</a>
              <a href="/palo-alto" className="hover:text-primary transition-colors">Palo Alto</a>
              <a href="/kubernetes" className="hover:text-primary transition-colors">Kubernetes</a>
              <a href="/togaf" className="hover:text-primary transition-colors">TOGAF</a>
              <a href="/devops" className="hover:text-primary transition-colors">DevOps</a>
              <a href="/istqb" className="hover:text-primary transition-colors">ISTQB</a>
              <a href="/iiba" className="hover:text-primary transition-colors">IIBA</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Global Training & Certifications. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;