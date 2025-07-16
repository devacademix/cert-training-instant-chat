import CourseLayout from "@/components/CourseLayout";

const ISACA = () => {
  const courses = [
    {
      name: "CISA (Certified Information Systems Auditor)",
      description: "Premier certification for IT audit, assurance, control, and security professionals.",
      level: "Professional"
    },
    {
      name: "CISM (Certified Information Security Manager)",
      description: "Advanced certification for information security management and governance professionals.",
      level: "Professional"
    },
    {
      name: "CRISC (Certified in Risk and Information Systems Control)",
      description: "Specialized certification for IT risk management and information systems control professionals.",
      level: "Professional"
    },
    {
      name: "CGEIT (Certified in the Governance of Enterprise IT)",
      description: "Executive-level certification for IT governance and enterprise IT management professionals.",
      level: "Executive"
    }
  ];

  return (
    <CourseLayout
      provider="ISACA"
      title="ISACA Certifications"
      description="Excel in IT governance, risk management, and security with ISACA's prestigious certifications. Globally recognized credentials for IT professionals."
      courses={courses}
      imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop"
    />
  );
};

export default ISACA;