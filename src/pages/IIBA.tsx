import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseLayout from '@/components/CourseLayout';

const IIBA = () => {
  const courses = [
    {
      name: "CBAP (Certified Business Analysis Professional)",
      description: "Advanced business analysis practices and leadership",
      level: "Professional"
    },
    {
      name: "CCBA (Certification of Competency in Business Analysis)",
      description: "Core business analysis competencies and techniques",
      level: "Competency"
    },
    {
      name: "ECBA (Entry Certificate in Business Analysis)",
      description: "Entry-level business analysis fundamentals",
      level: "Entry"
    },
    {
      name: "CBDA (Certified Business Data Analyst)",
      description: "Data analysis and business intelligence expertise",
      level: "Specialist"
    }
  ];

  return (
    <>
      <Header />
      <CourseLayout
        provider="IIBA"
        title="IIBA Business Analysis Certifications"
        description="Master business analysis with IIBA certifications. Learn requirements gathering, stakeholder management, and data analysis."
        courses={courses}
      />
      <Footer />
    </>
  );
};

export default IIBA;