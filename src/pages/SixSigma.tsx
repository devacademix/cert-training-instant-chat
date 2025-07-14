import CourseLayout from '@/components/CourseLayout';

const SixSigma = () => {
  const courses = [
    {
      name: "Six Sigma White Belt",
      description: "Introduction to Six Sigma methodology and principles",
      level: "Foundation"
    },
    {
      name: "Six Sigma Yellow Belt",
      description: "Basic Six Sigma tools and problem-solving techniques",
      level: "Basic"
    },
    {
      name: "Six Sigma Green Belt",
      description: "Intermediate Six Sigma project leadership and analysis",
      level: "Intermediate"
    },
    {
      name: "Six Sigma Black Belt",
      description: "Advanced Six Sigma leadership and complex project management",
      level: "Advanced"
    },
    {
      name: "Six Sigma Master Black Belt",
      description: "Expert-level Six Sigma coaching and organizational transformation",
      level: "Expert"
    }
  ];

  return (
    <CourseLayout
      provider="Six Sigma"
      title="Six Sigma Certifications"
      description="Master process improvement with Six Sigma methodology. Learn quality management, statistical analysis, and lean principles."
      courses={courses}
    />
  );
};

export default SixSigma;