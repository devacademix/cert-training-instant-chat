import CourseLayout from "@/components/CourseLayout";

const Oracle = () => {
  const courses = [
    {
      name: "Oracle Cloud Infrastructure (OCI Foundations)",
      description: "Foundational certification covering Oracle Cloud Infrastructure services and core concepts.",
      level: "Foundational"
    },
    {
      name: "Oracle Database SQL Certified Associate",
      description: "Database fundamentals certification covering SQL, data modeling, and database administration.",
      level: "Associate"
    },
    {
      name: "Oracle Java Certification (OCA, OCP)",
      description: "Java programming certifications from associate to professional levels covering core Java concepts.",
      level: "Associate to Professional"
    },
    {
      name: "Oracle E-Business Suite",
      description: "Enterprise application certification covering ERP implementation and administration.",
      level: "Professional"
    },
    {
      name: "Oracle Autonomous Database",
      description: "Next-generation database certification covering autonomous database management and optimization.",
      level: "Professional"
    }
  ];

  return (
    <CourseLayout
      provider="Oracle"
      title="Oracle Certifications"
      description="Advance your database and cloud skills with Oracle certifications. Cover database administration, Java development, and cloud infrastructure."
      courses={courses}
      imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    />
  );
};

export default Oracle;