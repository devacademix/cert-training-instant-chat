import CourseLayout from "@/components/CourseLayout";

const Snowflake = () => {
  const courses = [
    {
      name: "Snowflake SnowPro Core Certification",
      description: "Foundational certification covering Snowflake cloud data platform fundamentals and core concepts.",
      level: "Core"
    },
    {
      name: "Snowflake Advanced Architect",
      description: "Advanced certification for solution architects designing complex Snowflake implementations.",
      level: "Advanced"
    },
    {
      name: "Snowflake Data Engineer",
      description: "Specialized certification for data engineers building and maintaining data pipelines on Snowflake.",
      level: "Advanced"
    },
    {
      name: "Snowflake Administrator",
      description: "Administrative certification for managing Snowflake environments and user access controls.",
      level: "Advanced"
    },
    {
      name: "Snowflake Business Intelligence Integration",
      description: "Integration certification covering BI tools and analytics platforms with Snowflake.",
      level: "Advanced"
    }
  ];

  return (
    <CourseLayout
      provider="Snowflake"
      title="Snowflake Certifications"
      description="Master the cloud data platform with Snowflake certifications. From core concepts to advanced architecture and data engineering specializations."
      courses={courses}
    />
  );
};

export default Snowflake;