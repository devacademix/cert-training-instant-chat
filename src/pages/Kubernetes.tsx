import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseLayout from '@/components/CourseLayout';

const Kubernetes = () => {
  const courses = [
    {
      name: "CKA (Certified Kubernetes Administrator)",
      description: "Kubernetes cluster administration and management",
      level: "Administrator"
    },
    {
      name: "CKAD (Certified Kubernetes Application Developer)",
      description: "Application development and deployment on Kubernetes",
      level: "Developer"
    },
    {
      name: "CKS (Certified Kubernetes Security Specialist)",
      description: "Kubernetes security best practices and implementation",
      level: "Specialist"
    }
  ];

  return (
    <>
      <Header />
      <CourseLayout
        provider="Kubernetes"
        title="Kubernetes Certifications"
        description="Master container orchestration with Kubernetes certifications. Learn cluster administration, application development, and security."
        courses={courses}
        imageUrl="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
      />
      <Footer />
    </>
  );
};

export default Kubernetes;