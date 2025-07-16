import CourseLayout from "@/components/CourseLayout";

const AWS = () => {
  const courses = [
    {
      name: "AWS Cloud Practitioner (CLF-C02)",
      description: "Entry-level certification covering AWS cloud fundamentals, services, and basic architectural principles.",
      level: "Foundational"
    },
    {
      name: "AWS Solutions Architect (SAA-C03)",
      description: "Design and deploy scalable, highly available systems on AWS with best practices and cost optimization.",
      level: "Associate"
    },
    {
      name: "AWS Developer Associate",
      description: "Develop and maintain applications on AWS with focus on core AWS services and best practices.",
      level: "Associate"
    },
    {
      name: "AWS SysOps Administrator",
      description: "Deploy, manage, and operate scalable, highly available systems on the AWS platform.",
      level: "Associate"
    },
    {
      name: "AWS DevOps Engineer",
      description: "Professional-level certification for implementing and managing continuous delivery systems on AWS.",
      level: "Professional"
    },
    {
      name: "AWS Security Specialty",
      description: "Specialized certification demonstrating expertise in securing AWS workloads and applications.",
      level: "Specialty"
    }
  ];

  return (
    <CourseLayout
      provider="AWS"
      title="AWS Certifications"
      description="Validate your cloud expertise with Amazon Web Services certifications. From cloud practitioner to specialty levels, master the world's leading cloud platform."
      courses={courses}
      imageUrl="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=600&fit=crop"
    />
  );
};

export default AWS;