import CourseLayout from "@/components/CourseLayout";

const Cisco = () => {
  const courses = [
    {
      name: "CCNA (Cisco Certified Network Associate)",
      description: "Entry-level networking certification covering network fundamentals, routing and switching, and basic security concepts.",
      level: "Associate"
    },
    {
      name: "CCNP (Cisco Certified Network Professional)",
      description: "Professional-level certification for advanced routing, switching, and troubleshooting in complex networks.",
      level: "Professional"
    },
    {
      name: "CCIE (Cisco Certified Internetwork Expert)",
      description: "Expert-level certification demonstrating mastery of Cisco networking technologies and complex network design.",
      level: "Expert"
    },
    {
      name: "Cisco CyberOps Associate",
      description: "Security-focused certification for cybersecurity operations and threat detection using Cisco security tools.",
      level: "Associate"
    },
    {
      name: "Cisco DevNet Associate",
      description: "Developer-focused certification covering network automation, APIs, and software development for networks.",
      level: "Associate"
    },
    {
      name: "Cisco Wireless & Collaboration",
      description: "Specialized certifications for wireless networking and unified communications solutions.",
      level: "Professional"
    }
  ];

  return (
    <CourseLayout
      provider="Cisco"
      title="Cisco Certifications"
      description="Master networking technologies with Cisco's comprehensive certification program. From entry-level CCNA to expert-level CCIE, build your networking career with industry-recognized credentials."
      courses={courses}
    />
  );
};

export default Cisco;