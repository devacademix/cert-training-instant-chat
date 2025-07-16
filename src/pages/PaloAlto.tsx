import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseLayout from '@/components/CourseLayout';

const PaloAlto = () => {
  const courses = [
    {
      name: "PCNSA (Palo Alto Networks Certified Network Security Administrator)",
      description: "Network security administration and firewall management",
      level: "Administrator"
    },
    {
      name: "PCNSE (Palo Alto Networks Certified Network Security Engineer)",
      description: "Advanced network security engineering and design",
      level: "Engineer"
    },
    {
      name: "PCCSA (Palo Alto Networks Certified Cybersecurity Associate)",
      description: "Fundamental cybersecurity concepts and practices",
      level: "Associate"
    },
    {
      name: "PCCSE (Palo Alto Networks Certified Cybersecurity Engineer)",
      description: "Advanced cybersecurity engineering and implementation",
      level: "Engineer"
    }
  ];

  return (
    <>
      <Header />
      <CourseLayout
        provider="Palo Alto"
        title="Palo Alto Networks Certifications"
        description="Master next-generation cybersecurity with Palo Alto Networks certifications. Learn firewall administration and security engineering."
        courses={courses}
        imageUrl="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      />
      <Footer />
    </>
  );
};

export default PaloAlto;