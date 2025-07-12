import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseLayout from '@/components/CourseLayout';

const ISTQB = () => {
  const courses = [
    {
      name: "ISTQB Foundation Level",
      description: "Software testing fundamentals and basic techniques",
      level: "Foundation"
    },
    {
      name: "ISTQB Advanced Level",
      description: "Advanced testing techniques and management",
      level: "Advanced"
    },
    {
      name: "ISTQB Expert Level",
      description: "Expert-level testing strategy and optimization",
      level: "Expert"
    },
    {
      name: "ISTQB Agile Testing",
      description: "Testing practices in agile development environments",
      level: "Specialist"
    }
  ];

  return (
    <>
      <Header />
      <CourseLayout
        provider="ISTQB"
        title="ISTQB Testing Certifications"
        description="Master software testing with ISTQB certifications. Learn testing methodologies, automation, and quality assurance practices."
        courses={courses}
      />
      <Footer />
    </>
  );
};

export default ISTQB;