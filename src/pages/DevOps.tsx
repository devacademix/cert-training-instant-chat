import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseLayout from '@/components/CourseLayout';

const DevOps = () => {
  const courses = [
    {
      name: "DevOps Foundation",
      description: "Core DevOps principles and cultural transformation",
      level: "Foundation"
    },
    {
      name: "DevOps Leader",
      description: "Leadership skills for DevOps transformation",
      level: "Leadership"
    },
    {
      name: "DevOps Engineering",
      description: "Technical practices and automation tools",
      level: "Engineering"
    },
    {
      name: "Site Reliability Engineering",
      description: "SRE practices and reliability engineering",
      level: "Specialist"
    }
  ];

  return (
    <>
      <Header />
      <CourseLayout
        provider="DevOps"
        title="DevOps Certifications"
        description="Master modern software delivery with DevOps certifications. Learn automation, CI/CD, and reliability engineering practices."
        courses={courses}
        imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
      />
      <Footer />
    </>
  );
};

export default DevOps;