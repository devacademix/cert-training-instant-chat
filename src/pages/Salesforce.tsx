import CourseLayout from '@/components/CourseLayout';

const Salesforce = () => {
  const courses = [
    {
      name: "Salesforce Administrator",
      description: "Core Salesforce administration and configuration skills",
      level: "Associate"
    },
    {
      name: "Salesforce Advanced Administrator",
      description: "Advanced administrative features and automation",
      level: "Advanced"
    },
    {
      name: "Salesforce Platform Developer",
      description: "Custom application development on Salesforce platform",
      level: "Professional"
    },
    {
      name: "Salesforce App Builder",
      description: "Design and build custom applications declaratively",
      level: "Intermediate"
    },
    {
      name: "Salesforce Marketing Cloud",
      description: "Email marketing, automation, and customer journeys",
      level: "Specialist"
    }
  ];

  return (
    <CourseLayout
      provider="Salesforce"
      title="Salesforce Certifications"
      description="Master the world's #1 CRM platform with Salesforce certifications. Learn administration, development, and specialized cloud solutions."
      courses={courses}
    />
  );
};

export default Salesforce;