import CourseLayout from '@/components/CourseLayout';

const ECCouncil = () => {
  const courses = [
    {
      name: "CEH (Certified Ethical Hacker)",
      description: "Learn ethical hacking techniques and cybersecurity fundamentals",
      level: "Intermediate"
    },
    {
      name: "CHFI (Computer Hacking Forensic Investigator)",
      description: "Master digital forensics and incident response",
      level: "Advanced"
    },
    {
      name: "ECSA (EC-Council Certified Security Analyst)",
      description: "Advanced penetration testing and security analysis",
      level: "Advanced"
    },
    {
      name: "ECIH (EC-Council Incident Handler)",
      description: "Incident handling and response procedures",
      level: "Intermediate"
    },
    {
      name: "CEI (Certified Encryption Specialist)",
      description: "Encryption technologies and cryptography",
      level: "Advanced"
    }
  ];

  return (
    <CourseLayout
      provider="EC-Council"
      title="EC-Council Certifications"
      description="Master cybersecurity with globally recognized EC-Council certifications. Learn ethical hacking, digital forensics, and advanced security techniques."
      courses={courses}
    />
  );
};

export default ECCouncil;