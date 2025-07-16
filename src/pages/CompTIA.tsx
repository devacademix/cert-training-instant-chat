import CourseLayout from "@/components/CourseLayout";

const CompTIA = () => {
  const courses = [
    {
      name: "CompTIA A+",
      description: "Foundation certification for IT support professionals covering hardware, software, and troubleshooting.",
      level: "Entry Level"
    },
    {
      name: "CompTIA Network+",
      description: "Networking fundamentals certification covering network design, implementation, and troubleshooting.",
      level: "Intermediate"
    },
    {
      name: "CompTIA Security+",
      description: "Cybersecurity fundamentals certification covering security concepts, risk management, and best practices.",
      level: "Intermediate"
    },
    {
      name: "CompTIA CySA+ (Cybersecurity Analyst)",
      description: "Advanced cybersecurity certification for threat detection, analysis, and response professionals.",
      level: "Intermediate"
    },
    {
      name: "CompTIA PenTest+",
      description: "Penetration testing certification covering vulnerability assessment and ethical hacking techniques.",
      level: "Intermediate"
    },
    {
      name: "CompTIA CASP+ (Advanced Security Practitioner)",
      description: "Advanced security certification for senior security professionals and technical leaders.",
      level: "Advanced"
    },
    {
      name: "CompTIA Cloud+",
      description: "Cloud computing certification covering cloud infrastructure, security, and best practices.",
      level: "Intermediate"
    }
  ];

  return (
    <CourseLayout
      provider="CompTIA"
      title="CompTIA Certifications"
      description="Build your IT career foundation with CompTIA's vendor-neutral certifications. Cover core IT skills from A+ to advanced security and cloud technologies."
      courses={courses}
      imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    />
  );
};

export default CompTIA;