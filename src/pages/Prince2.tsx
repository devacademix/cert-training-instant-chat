import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseLayout from '@/components/CourseLayout';

const Prince2 = () => {
  const courses = [
    {
      name: "PRINCE2 Foundation",
      description: "Learn the fundamentals of PRINCE2 project management methodology",
      level: "Foundation"
    },
    {
      name: "PRINCE2 Practitioner",
      description: "Apply PRINCE2 principles in real-world project scenarios",
      level: "Intermediate"
    },
    {
      name: "PRINCE2 Agile Foundation",
      description: "Combine PRINCE2 with agile delivery methods",
      level: "Foundation"
    },
    {
      name: "PRINCE2 Agile Practitioner",
      description: "Advanced agile project management with PRINCE2",
      level: "Intermediate"
    }
  ];

  return (
    <>
      <Header />
      <CourseLayout
        provider="PRINCE2"
        title="PRINCE2 Certifications"
        description="Master project management with PRINCE2 methodology. Learn structured approach to project management and agile delivery methods."
        courses={courses}
      />
      <Footer />
    </>
  );
};

export default Prince2;