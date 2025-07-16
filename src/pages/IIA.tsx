import CourseLayout from "@/components/CourseLayout";

const IIA = () => {
  const courses = [
    {
      name: "CIA (Certified Internal Auditor)",
      description: "Premier certification for internal audit professionals demonstrating competency and professionalism.",
      level: "Professional"
    },
    {
      name: "CRMA (Certification in Risk Management Assurance)",
      description: "Specialized certification for risk management and assurance professionals in internal audit.",
      level: "Professional"
    },
    {
      name: "QIAL (Qualification in Internal Audit Leadership)",
      description: "Leadership certification for senior internal audit professionals and CAEs.",
      level: "Executive"
    }
  ];

  return (
    <CourseLayout
      provider="IIA"
      title="IIA Certifications"
      description="Advance your internal audit career with The Institute of Internal Auditors' globally recognized certifications. Build expertise in audit, risk, and governance."
      courses={courses}
      imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
    />
  );
};

export default IIA;