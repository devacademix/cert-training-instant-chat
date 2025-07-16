import CourseLayout from "@/components/CourseLayout";

const PMI = () => {
  const courses = [
    {
      name: "PMP (Project Management Professional)",
      description: "Gold standard certification for project managers demonstrating leadership and project management expertise.",
      level: "Professional"
    },
    {
      name: "CAPM (Certified Associate in Project Management)",
      description: "Entry-level certification for project team members and those new to project management.",
      level: "Associate"
    },
    {
      name: "PMI-ACP (Agile Certified Practitioner)",
      description: "Agile project management certification covering multiple agile methodologies and practices.",
      level: "Professional"
    },
    {
      name: "PMI-RMP (Risk Management Professional)",
      description: "Specialized certification for project risk management professionals and risk assessment experts.",
      level: "Professional"
    }
  ];

  return (
    <CourseLayout
      provider="PMI"
      title="PMI Certifications"
      description="Lead successful projects with PMI's globally recognized project management certifications. From traditional to agile methodologies and risk management."
      courses={courses}
      imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    />
  );
};

export default PMI;