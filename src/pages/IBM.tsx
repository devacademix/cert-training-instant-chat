import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseLayout from '@/components/CourseLayout';

const IBM = () => {
  const courses = [
    {
      name: "IBM Cloud",
      description: "IBM Cloud platform services and architecture",
      level: "Professional"
    },
    {
      name: "IBM Watson",
      description: "AI and machine learning with IBM Watson",
      level: "Specialist"
    },
    {
      name: "IBM Security",
      description: "Enterprise security solutions and QRadar",
      level: "Professional"
    },
    {
      name: "IBM Data Science",
      description: "Data analytics and machine learning on IBM platform",
      level: "Professional"
    },
    {
      name: "IBM DevOps",
      description: "DevOps practices and tools on IBM Cloud",
      level: "Professional"
    }
  ];

  return (
    <>
      <Header />
      <CourseLayout
        provider="IBM"
        title="IBM Certifications"
        description="Master enterprise technology with IBM certifications. Learn cloud computing, AI, security, and data science solutions."
        courses={courses}
        imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
      />
      <Footer />
    </>
  );
};

export default IBM;