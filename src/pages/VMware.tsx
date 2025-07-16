import CourseLayout from "@/components/CourseLayout";

const VMware = () => {
  const courses = [
    {
      name: "VMware vSphere (VCP-DCV)",
      description: "Data center virtualization certification covering vSphere installation, configuration, and management.",
      level: "Professional"
    },
    {
      name: "VMware NSX-T (VCP-NV)",
      description: "Network virtualization certification for software-defined networking and micro-segmentation.",
      level: "Professional"
    },
    {
      name: "VMware Horizon (VCP-DTM)",
      description: "Desktop and application virtualization certification for end-user computing solutions.",
      level: "Professional"
    },
    {
      name: "VMware Cloud on AWS",
      description: "Hybrid cloud certification covering VMware SDDC running natively on AWS infrastructure.",
      level: "Professional"
    },
    {
      name: "VMware vSAN",
      description: "Hyper-converged infrastructure certification for software-defined storage solutions.",
      level: "Professional"
    }
  ];

  return (
    <CourseLayout
      provider="VMware"
      title="VMware Certifications"
      description="Master virtualization and cloud infrastructure with VMware certifications. Learn to design, deploy, and manage virtualized data center environments."
      courses={courses}
      imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    />
  );
};

export default VMware;