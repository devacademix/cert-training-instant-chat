import CourseLayout from '@/components/CourseLayout';

const ServiceNow = () => {
  const courses = [
    {
      name: "ServiceNow System Administrator",
      description: "Core platform administration and configuration",
      level: "Administrator"
    },
    {
      name: "ServiceNow Application Developer",
      description: "Custom application development on ServiceNow platform",
      level: "Developer"
    },
    {
      name: "ServiceNow Implementation Specialist",
      description: "Specialized implementation and deployment expertise",
      level: "Specialist"
    },
    {
      name: "ServiceNow Certified Master Architect",
      description: "Expert-level architecture and solution design",
      level: "Master"
    }
  ];

  return (
    <CourseLayout
      provider="ServiceNow"
      title="ServiceNow Certifications"
      description="Master enterprise service management with ServiceNow certifications. Learn platform administration, development, and implementation."
      courses={courses}
      imageUrl="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
    />
  );
};

export default ServiceNow;