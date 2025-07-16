import CourseLayout from "@/components/CourseLayout";

const Fortinet = () => {
  const courses = [
    {
      name: "NSE 1 to NSE 8 (Network Security Expert)",
      description: "Comprehensive security certification program from foundations to expert-level network security.",
      level: "Associate to Expert"
    },
    {
      name: "FortiGate Firewall Training",
      description: "Specialized training for FortiGate firewall configuration, management, and troubleshooting.",
      level: "Professional"
    },
    {
      name: "Fortinet SD-WAN",
      description: "Software-defined WAN certification covering secure connectivity and network optimization.",
      level: "Professional"
    },
    {
      name: "Fortinet Secure Access",
      description: "Zero trust network access and secure remote connectivity certification program.",
      level: "Professional"
    }
  ];

  return (
    <CourseLayout
      provider="Fortinet"
      title="Fortinet Certifications"
      description="Strengthen your cybersecurity expertise with Fortinet's Network Security Expert program. Master next-generation firewall and security technologies."
      courses={courses}
      imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
    />
  );
};

export default Fortinet;