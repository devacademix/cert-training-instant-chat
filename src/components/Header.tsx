import { Phone, Mail, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const whatsappNumber = "+918603516998";
  const whatsappLink = "https://wa.me/c/918603516998";
  const email = "info@globaltrainingcertifications.org";

  const courseCategories = [
    {
      name: 'Cisco',
      path: '/cisco',
      subcourses: [
        'CCNA (Cisco Certified Network Associate)',
        'CCNP (Cisco Certified Network Professional)',
        'CCIE (Cisco Certified Internetwork Expert)',
        'Cisco CyberOps Associate',
        'Cisco DevNet Associate',
        'Cisco Wireless / Collaboration'
      ]
    },
    {
      name: 'Microsoft',
      path: '/microsoft',
      subcourses: [
        'Microsoft Azure (AZ-900, AZ-104, AZ-305)',
        'Microsoft 365 (MS-900, MS-101)',
        'Microsoft Security (SC-900, SC-200)',
        'Windows Server Administration',
        'Power Platform (PL-900, PL-100)',
        'Dynamics 365 (MB-900)'
      ]
    },
    {
      name: 'AWS',
      path: '/aws',
      subcourses: [
        'AWS Cloud Practitioner (CLF-C02)',
        'AWS Solutions Architect (SAA-C03)',
        'AWS Developer Associate',
        'AWS SysOps Administrator',
        'AWS DevOps Engineer',
        'AWS Security Specialty'
      ]
    },
    {
      name: 'CompTIA',
      path: '/comptia',
      subcourses: [
        'CompTIA A+',
        'CompTIA Network+',
        'CompTIA Security+',
        'CompTIA CySA+ (Cybersecurity Analyst)',
        'CompTIA PenTest+',
        'CompTIA CASP+',
        'CompTIA Cloud+'
      ]
    },
    {
      name: 'VMware',
      path: '/vmware',
      subcourses: [
        'VMware vSphere (VCP-DCV)',
        'VMware NSX-T (VCP-NV)',
        'VMware Horizon (VCP-DTM)',
        'VMware Cloud on AWS',
        'VMware vSAN'
      ]
    },
    {
      name: 'Google',
      path: '/google',
      subcourses: [
        'Google Cloud Digital Leader',
        'Google Associate Cloud Engineer',
        'Google Professional Cloud Architect',
        'Google Professional Data Engineer',
        'Google Workspace Administrator'
      ]
    },
    {
      name: 'Oracle',
      path: '/oracle',
      subcourses: [
        'Oracle Cloud Infrastructure (OCI Foundations)',
        'Oracle Database SQL Certified Associate',
        'Oracle Java Certification (OCA, OCP)',
        'Oracle E-Business Suite',
        'Oracle Autonomous Database'
      ]
    },
    {
      name: 'PMI',
      path: '/pmi',
      subcourses: [
        'PMP (Project Management Professional)',
        'CAPM (Certified Associate in Project Management)',
        'PMI-ACP (Agile Certified Practitioner)',
        'PMI-RMP (Risk Management Professional)'
      ]
    },
    {
      name: 'ISACA',
      path: '/isaca',
      subcourses: [
        'CISA (Certified Information Systems Auditor)',
        'CISM (Certified Information Security Manager)',
        'CRISC (Certified in Risk and Information Systems Control)',
        'CGEIT (Certified in the Governance of Enterprise IT)'
      ]
    },
    {
      name: 'Fortinet',
      path: '/fortinet',
      subcourses: [
        'NSE 1 to NSE 8 (Network Security Expert)',
        'FortiGate Firewall Training',
        'Fortinet SD-WAN',
        'Fortinet Secure Access'
      ]
    },
    {
      name: 'IIA',
      path: '/iia',
      subcourses: [
        'CIA (Certified Internal Auditor)',
        'CRMA (Certification in Risk Management Assurance)',
        'QIAL (Qualification in Internal Audit Leadership)'
      ]
    },
    {
      name: 'Snowflake',
      path: '/snowflake',
      subcourses: [
        'Snowflake SnowPro Core Certification',
        'Snowflake Advanced Architect',
        'Snowflake Data Engineer',
        'Snowflake Administrator',
        'Snowflake Business Intelligence Integration'
      ]
    }
  ];

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
        <div className="container mx-auto px-4 py-3">
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex flex-wrap justify-center gap-1">
              {courseCategories.map((category) => (
                <NavigationMenuItem key={category.name}>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10 data-[state=open]:bg-white/10 text-sm px-3 py-1">
                    <a href={category.path} className="flex items-center gap-1">
                      {category.name}
                    </a>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="bg-white text-gray-900 p-4 w-80 shadow-lg rounded-md">
                      <h4 className="font-semibold text-primary mb-3">{category.name} Certifications</h4>
                      <ul className="space-y-2">
                        {category.subcourses.map((course, index) => (
                          <li key={index}>
                            <button
                              onClick={() => window.open(whatsappLink, '_blank')}
                              className="text-left w-full text-sm text-gray-600 hover:text-primary transition-colors hover:bg-gray-50 p-2 rounded"
                            >
                              • {course}
                            </button>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-3 border-t">
                        <button
                          onClick={() => window.open(whatsappLink, '_blank')}
                          className="w-full bg-primary text-white px-4 py-2 rounded text-sm hover:bg-primary-dark transition-colors"
                        >
                          Get Pricing on WhatsApp
                        </button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
};

export default Header;