import CourseLayout from "@/components/CourseLayout";

const Google = () => {
  const courses = [
    {
      name: "Google Cloud Digital Leader",
      description: "Business-focused certification covering Google Cloud transformation and technology solutions.",
      level: "Foundational"
    },
    {
      name: "Google Associate Cloud Engineer",
      description: "Technical certification for deploying applications, monitoring operations, and managing Google Cloud solutions.",
      level: "Associate"
    },
    {
      name: "Google Professional Cloud Architect",
      description: "Advanced certification for designing and managing robust, secure, scalable Google Cloud solutions.",
      level: "Professional"
    },
    {
      name: "Google Professional Data Engineer",
      description: "Specialized certification for data processing systems and machine learning models on Google Cloud.",
      level: "Professional"
    },
    {
      name: "Google Workspace Administrator",
      description: "Administrative certification for managing Google Workspace environments and user productivity.",
      level: "Professional"
    }
  ];

  return (
    <CourseLayout
      provider="Google"
      title="Google Cloud Certifications"
      description="Validate your Google Cloud expertise with industry-recognized certifications. From digital transformation to data engineering and cloud architecture."
      courses={courses}
      imageUrl="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&h=600&fit=crop"
    />
  );
};

export default Google;