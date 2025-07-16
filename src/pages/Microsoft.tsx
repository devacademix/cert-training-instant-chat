import CourseLayout from "@/components/CourseLayout";

const Microsoft = () => {
  const courses = [
    {
      name: "Microsoft Azure (AZ-900, AZ-104, AZ-305)",
      description: "Cloud fundamentals, administration, and architecture certifications for Microsoft Azure platform.",
      level: "Fundamentals to Expert"
    },
    {
      name: "Microsoft 365 (MS-900, MS-101)",
      description: "Modern workplace solutions covering Microsoft 365 fundamentals and enterprise administration.",
      level: "Fundamentals to Associate"
    },
    {
      name: "Microsoft Security (SC-900, SC-200)",
      description: "Security, compliance, and identity fundamentals and security operations analyst certifications.",
      level: "Fundamentals to Associate"
    },
    {
      name: "Windows Server Administration",
      description: "Server infrastructure management, Active Directory, and hybrid cloud integration skills.",
      level: "Associate"
    },
    {
      name: "Power Platform (PL-900, PL-100)",
      description: "Low-code/no-code platform fundamentals and Power Platform app maker certifications.",
      level: "Fundamentals to Associate"
    },
    {
      name: "Dynamics 365 (MB-900)",
      description: "Business applications fundamentals covering CRM and ERP solutions.",
      level: "Fundamentals"
    }
  ];

  return (
    <CourseLayout
      provider="Microsoft"
      title="Microsoft Certifications"
      description="Advance your career with Microsoft's role-based certifications. Cover cloud computing, modern workplace, security, and business applications with hands-on training."
      courses={courses}
      imageUrl="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop"
    />
  );
};

export default Microsoft;