import CourseLayout from '@/components/CourseLayout';

const Scrum = () => {
  const courses = [
    {
      name: "Certified ScrumMaster (CSM)",
      description: "Fundamental Scrum framework and ScrumMaster role",
      level: "Foundation"
    },
    {
      name: "Certified Scrum Product Owner (CSPO)",
      description: "Product ownership and backlog management in Scrum",
      level: "Foundation"
    },
    {
      name: "Advanced Certified ScrumMaster (A-CSM)",
      description: "Advanced ScrumMaster techniques and leadership",
      level: "Advanced"
    },
    {
      name: "Certified Scrum Developer (CSD)",
      description: "Technical practices for Scrum development teams",
      level: "Specialist"
    },
    {
      name: "Professional Scrum Master (PSM)",
      description: "Professional-level Scrum mastery and expertise",
      level: "Professional"
    }
  ];

  return (
    <CourseLayout
      provider="Scrum"
      title="Scrum Certifications"
      description="Master agile project management with Scrum framework. Learn ScrumMaster, Product Owner, and development team practices."
      courses={courses}
      imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
    />
  );
};

export default Scrum;