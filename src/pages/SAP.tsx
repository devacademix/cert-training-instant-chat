import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseLayout from '@/components/CourseLayout';

const SAP = () => {
  const courses = [
    {
      name: "SAP S/4HANA",
      description: "Next-generation ERP suite and digital transformation",
      level: "Professional"
    },
    {
      name: "SAP FICO",
      description: "Financial Accounting and Controlling module",
      level: "Specialist"
    },
    {
      name: "SAP MM",
      description: "Materials Management and procurement processes",
      level: "Specialist"
    },
    {
      name: "SAP SD",
      description: "Sales and Distribution module configuration",
      level: "Specialist"
    },
    {
      name: "SAP ABAP",
      description: "Advanced Business Application Programming",
      level: "Developer"
    }
  ];

  return (
    <>
      <Header />
      <CourseLayout
        provider="SAP"
        title="SAP Certifications"
        description="Master enterprise resource planning with SAP certifications. Learn ERP implementation, customization, and business processes."
        courses={courses}
      />
      <Footer />
    </>
  );
};

export default SAP;