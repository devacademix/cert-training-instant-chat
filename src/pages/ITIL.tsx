import CourseLayout from '@/components/CourseLayout';

const ITIL = () => {
  const courses = [
    {
      name: "ITIL 4 Foundation",
      description: "Core concepts of IT service management and ITIL framework",
      level: "Foundation"
    },
    {
      name: "ITIL 4 Managing Professional",
      description: "Practical skills for IT service management professionals",
      level: "Intermediate"
    },
    {
      name: "ITIL 4 Strategic Leader",
      description: "Strategic planning and digital transformation leadership",
      level: "Advanced"
    },
    {
      name: "ITIL 4 Master",
      description: "Highest level of ITIL expertise and competency",
      level: "Expert"
    },
    {
      name: "ITIL Service Management",
      description: "Comprehensive service management practices",
      level: "Intermediate"
    }
  ];

  return (
    <CourseLayout
      provider="ITIL"
      title="ITIL Certifications"
      description="Master IT Service Management with ITIL 4 framework. Learn best practices for delivering exceptional IT services and digital transformation."
      courses={courses}
    />
  );
};

export default ITIL;