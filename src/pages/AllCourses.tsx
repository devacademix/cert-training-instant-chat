import { MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const AllCourses = () => {
  const whatsappLink = "https://wa.me/c/918603516998";

  const courseCategories = [
    {
      name: 'Cisco',
      path: '/cisco',
      description: 'Network infrastructure and security certifications',
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
      description: 'Cloud, productivity and enterprise solutions',
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
      description: 'Amazon Web Services cloud certifications',
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
      description: 'IT fundamentals and cybersecurity',
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
      description: 'Virtualization and cloud infrastructure',
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
      description: 'Google Cloud Platform certifications',
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
      description: 'Database and enterprise applications',
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
      description: 'Project management certifications',
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
      description: 'IT governance and cybersecurity',
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
      description: 'Network security solutions',
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
      description: 'Internal audit certifications',
      subcourses: [
        'CIA (Certified Internal Auditor)',
        'CRMA (Certification in Risk Management Assurance)',
        'QIAL (Qualification in Internal Audit Leadership)'
      ]
    },
    {
      name: 'Snowflake',
      path: '/snowflake',
      description: 'Data platform certifications',
      subcourses: [
        'Snowflake SnowPro Core Certification',
        'Snowflake Advanced Architect',
        'Snowflake Data Engineer',
        'Snowflake Administrator',
        'Snowflake Business Intelligence Integration'
      ]
    },
    {
      name: 'EC-Council',
      path: '/ec-council',
      description: 'Ethical hacking and cybersecurity',
      subcourses: [
        'CEH (Certified Ethical Hacker)',
        'CHFI (Computer Hacking Forensic Investigator)',
        'ECSA (EC-Council Certified Security Analyst)',
        'ECIH (EC-Council Incident Handler)',
        'CEI (Certified Encryption Specialist)'
      ]
    },
    {
      name: 'ITIL',
      path: '/itil',
      description: 'IT service management framework',
      subcourses: [
        'ITIL 4 Foundation',
        'ITIL 4 Managing Professional',
        'ITIL 4 Strategic Leader',
        'ITIL 4 Master',
        'ITIL Service Management'
      ]
    },
    {
      name: 'Prince2',
      path: '/prince2',
      description: 'Project management methodology',
      subcourses: [
        'PRINCE2 Foundation',
        'PRINCE2 Practitioner',
        'PRINCE2 Agile Foundation',
        'PRINCE2 Agile Practitioner'
      ]
    },
    {
      name: 'Juniper',
      path: '/juniper',
      description: 'Network infrastructure solutions',
      subcourses: [
        'JNCIA (Junos Associate)',
        'JNCIS (Junos Specialist)',
        'JNCIP (Junos Professional)',
        'JNCIE (Junos Expert)',
        'Juniper Security'
      ]
    },
    {
      name: 'Salesforce',
      path: '/salesforce',
      description: 'CRM and cloud platform',
      subcourses: [
        'Salesforce Administrator',
        'Salesforce Advanced Administrator',
        'Salesforce Platform Developer',
        'Salesforce App Builder',
        'Salesforce Marketing Cloud'
      ]
    },
    {
      name: 'ServiceNow',
      path: '/servicenow',
      description: 'IT service management platform',
      subcourses: [
        'ServiceNow System Administrator',
        'ServiceNow Application Developer',
        'ServiceNow Implementation Specialist',
        'ServiceNow Certified Master Architect'
      ]
    },
    {
      name: 'Scrum',
      path: '/scrum',
      description: 'Agile project management framework',
      subcourses: [
        'Certified ScrumMaster (CSM)',
        'Certified Scrum Product Owner (CSPO)',
        'Advanced Certified ScrumMaster (A-CSM)',
        'Certified Scrum Developer (CSD)',
        'Professional Scrum Master (PSM)'
      ]
    },
    {
      name: 'Six Sigma',
      path: '/six-sigma',
      description: 'Process improvement methodology',
      subcourses: [
        'Six Sigma White Belt',
        'Six Sigma Yellow Belt',
        'Six Sigma Green Belt',
        'Six Sigma Black Belt',
        'Six Sigma Master Black Belt'
      ]
    },
    {
      name: 'IBM',
      path: '/ibm',
      description: 'Enterprise technology solutions',
      subcourses: [
        'IBM Cloud',
        'IBM Watson',
        'IBM Security',
        'IBM Data Science',
        'IBM DevOps'
      ]
    },
    {
      name: 'SAP',
      path: '/sap',
      description: 'Enterprise resource planning',
      subcourses: [
        'SAP S/4HANA',
        'SAP FICO',
        'SAP MM',
        'SAP SD',
        'SAP ABAP'
      ]
    },
    {
      name: 'Splunk',
      path: '/splunk',
      description: 'Data analytics and monitoring',
      subcourses: [
        'Splunk Core Certified User',
        'Splunk Core Certified Power User',
        'Splunk Enterprise Certified Admin',
        'Splunk Enterprise Certified Architect'
      ]
    },
    {
      name: 'Palo Alto',
      path: '/palo-alto',
      description: 'Next-generation cybersecurity',
      subcourses: [
        'PCNSA (Palo Alto Networks Certified Network Security Administrator)',
        'PCNSE (Palo Alto Networks Certified Network Security Engineer)',
        'PCCSA (Palo Alto Networks Certified Cybersecurity Associate)',
        'PCCSE (Palo Alto Networks Certified Cybersecurity Engineer)'
      ]
    },
    {
      name: 'Kubernetes',
      path: '/kubernetes',
      description: 'Container orchestration platform',
      subcourses: [
        'CKA (Certified Kubernetes Administrator)',
        'CKAD (Certified Kubernetes Application Developer)',
        'CKS (Certified Kubernetes Security Specialist)'
      ]
    },
    {
      name: 'TOGAF',
      path: '/togaf',
      description: 'Enterprise architecture framework',
      subcourses: [
        'TOGAF 9 Foundation',
        'TOGAF 9 Certified',
        'TOGAF Enterprise Architecture'
      ]
    },
    {
      name: 'DevOps',
      path: '/devops',
      description: 'Development and operations practices',
      subcourses: [
        'DevOps Foundation',
        'DevOps Leader',
        'DevOps Engineering',
        'Site Reliability Engineering'
      ]
    },
    {
      name: 'ISTQB',
      path: '/istqb',
      description: 'Software testing certifications',
      subcourses: [
        'ISTQB Foundation Level',
        'ISTQB Advanced Level',
        'ISTQB Expert Level',
        'ISTQB Agile Testing'
      ]
    },
    {
      name: 'IIBA',
      path: '/iiba',
      description: 'Business analysis certifications',
      subcourses: [
        'CBAP (Certified Business Analysis Professional)',
        'CCBA (Certification of Competency in Business Analysis)',
        'ECBA (Entry Certificate in Business Analysis)',
        'CBDA (Certified Business Data Analyst)'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            All <span className="text-blue-200">Certification Courses</span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explore our comprehensive range of worldwide IT/NON-IT certifications with remote support and 100% passing guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open(whatsappLink, '_blank')}
              className="bg-white text-primary hover:bg-blue-50 shadow-glow"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Get Exam Support Now
            </Button>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseCategories.map((category) => (
            <Card key={category.name} className="border-0 shadow-card hover:shadow-glow transition-all duration-300 bg-white group">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {category.subcourses.slice(0, 3).map((course, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      <span>{course}</span>
                    </div>
                  ))}
                  {category.subcourses.length > 3 && (
                    <div className="text-sm text-gray-500 pl-6">
                      +{category.subcourses.length - 3} more courses
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <Link to={category.path}>
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                      View All {category.name} Courses
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open(whatsappLink, '_blank')}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Get Pricing
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help Choosing the Right Certification?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our expert team provides worldwide IT/NON-IT certification support with remote assistance. 
            Contact us for personalized guidance and guaranteed exam success.
          </p>
          <Button
            size="lg"
            onClick={() => window.open(whatsappLink, '_blank')}
            className="bg-primary hover:bg-primary-dark text-white"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Contact Expert on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;