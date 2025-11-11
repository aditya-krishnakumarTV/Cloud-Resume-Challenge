function SkillsAndCertifications() {
  const skills = [
    {
      title: "Programming Languages",
      content: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"],
    },
    {
      title: "Frameworks",
      content: ["Angular", "React"],
    },
    {
      title: "Styling Frameworks",
      content: ["Bootstrap", "Angular Material", "TailwindCSS"],
    },
    {
      title: "Cloud & DevOps",
      content: [
        "AWS Services",
        "Terraform & CloudFormation",
        "GitHub Actions (CI/CD)",
        "Docker",
      ],
    },
    {
      title: "Certifications",
      content: ["AWS Certified Cloud Practitioner"],
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto p-10">
        <div className="text-center space-y-4 p-8">
          <h1 className="text-4xl font-bold font-signature text-gray-900">
            Skills & Certifications
          </h1>
          <p className="text-lg text-gray-700">
            Building solutions and projects with hands-on experience and
            continuous learning
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  className="p-6 rounded-lg bg-white transition hover:-translate-y-1 hover:shadow-lg shadow-gray-500 ease-in-out duration-400"
                  key={index}
                >
                  <h2 className="text-2xl text-center font-semibold font-signature mb-4">
                    {skill.title}
                  </h2>
                  <div className="flex flex-row flex-wrap gap-3 p-4">
                    {skill.content.map((item, index) => (
                      <div
                        className="border rounded-2xl text-center w-max py-1 px-3 transition hover:scale-105 hover:shadow-md shadow-gray-400 ease-in-out duration-500"
                        key={index}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsAndCertifications;
