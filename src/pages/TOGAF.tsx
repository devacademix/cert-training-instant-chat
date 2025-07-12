import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseLayout from '@/components/CourseLayout';

const TOGAF = () => {
  const courses = [
    {
      name: "TOGAF 9 Foundation",
      description: "Enterprise architecture fundamentals and TOGAF framework",
      level: "Foundation"
    },
    {
      name: "TOGAF 9 Certified",
      description: "Advanced TOGAF methodology and practical application",
      level: "Certified"
    },
    {
      name: "TOGAF Enterprise Architecture",
      description: "Comprehensive enterprise architecture design and implementation",
      level: "Professional"
    }
  ];

  return (
    <>
      <Header />
      <CourseLayout
        provider="TOGAF"
        title="TOGAF Certifications"
        description="Master enterprise architecture with TOGAF framework. Learn architectural design, governance, and digital transformation strategies."
        courses={courses}
      />
      <Footer />
    </>
  );
};

export default TOGAF;