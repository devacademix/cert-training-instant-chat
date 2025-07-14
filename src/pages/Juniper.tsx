import CourseLayout from '@/components/CourseLayout';

const Juniper = () => {
  const courses = [
    {
      name: "JNCIA (Junos Associate)",
      description: "Foundation-level Junos OS and networking concepts",
      level: "Associate"
    },
    {
      name: "JNCIS (Junos Specialist)",
      description: "Intermediate Junos OS configuration and troubleshooting",
      level: "Specialist"
    },
    {
      name: "JNCIP (Junos Professional)",
      description: "Advanced Junos OS and enterprise networking",
      level: "Professional"
    },
    {
      name: "JNCIE (Junos Expert)",
      description: "Expert-level Junos OS and complex network design",
      level: "Expert"
    },
    {
      name: "Juniper Security",
      description: "Security features and firewall technologies",
      level: "Specialist"
    }
  ];

  return (
    <CourseLayout
      provider="Juniper"
      title="Juniper Certifications"
      description="Master Juniper networking technologies with industry-leading certifications. Learn Junos OS, network security, and enterprise solutions."
      courses={courses}
    />
  );
};

export default Juniper;