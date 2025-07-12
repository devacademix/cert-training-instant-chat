import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseLayout from '@/components/CourseLayout';

const Splunk = () => {
  const courses = [
    {
      name: "Splunk Core Certified User",
      description: "Basic Splunk searching and reporting skills",
      level: "User"
    },
    {
      name: "Splunk Core Certified Power User",
      description: "Advanced searching, reporting, and knowledge objects",
      level: "Power User"
    },
    {
      name: "Splunk Enterprise Certified Admin",
      description: "Splunk installation, configuration, and administration",
      level: "Administrator"
    },
    {
      name: "Splunk Enterprise Certified Architect",
      description: "Enterprise deployment architecture and design",
      level: "Architect"
    }
  ];

  return (
    <>
      <Header />
      <CourseLayout
        provider="Splunk"
        title="Splunk Certifications"
        description="Master big data analytics with Splunk certifications. Learn data analysis, monitoring, and security intelligence."
        courses={courses}
      />
      <Footer />
    </>
  );
};

export default Splunk;