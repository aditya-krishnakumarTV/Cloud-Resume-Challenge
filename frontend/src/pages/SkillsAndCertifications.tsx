import AWSCloudCert from "../assets/aws-certified-cloud-practitioner.png";
import AWSAICert from "../assets/aws-certified-ai-practitioner.png";

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
  ];

  const certificates = [
    {
      title: "AWS Certified Cloud Practitioner",
      image: AWSCloudCert,
      link: "https://www.credly.com/badges/0c7dd0ca-1464-4d93-ba6e-0cd00776be5d/public_url",
      issueDate: "Sep 2025",
      validUntil: "Sep 2028",
      description:
        "Validates overall understanding of AWS Cloud, its services, and basic architectural best practices.",
    },
    {
      title: "AWS Certified AI Practitioner",
      image: AWSAICert,
      link: "https://www.credly.com/badges/bab3f0de-c41a-4112-a88c-ada447a1c6a6/public_url",
      issueDate: "Jan 2026",
      validUntil: "Jan 2029",
      description:
        "Validates knowledge of AI/ML and Gen AI concepts and AWS services related to AI/ML and Gen AI solutions.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-10">
        <div className="text-center space-y-4 p-8">
          <h1 className="text-4xl font-bold font-signature text-gray-900">
            Technical Skills
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
                  <h2 className="text-2xl text-center font-medium font-signature mb-4">
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

        <div className="text-center space-y-4 p-4 mt-4">
          <h1 className="text-4xl font-bold font-signature text-gray-900">
            Certifications
          </h1>
          <p className="text-lg text-gray-700">
            Validating skills and knowledge through recognized industry
            certifications
          </p>
        </div>

        {certificates.map((cert, index) => (
          <div
            className="flex flex-col md:flex-row justify-center items-center space-y-6 p-4 mt-4"
            key={index}
          >
            <div className="w-full p-8 rounded-lg bg-white transition hover:-translate-y-1 hover:shadow-lg shadow-gray-500 ease-in-out duration-400">
              <div className="flex flex-row justify-center items-center flex-wrap gap-10">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <img src={cert.image} alt={cert.title} className="h-35" />
                </a>
                <div className="space-y-4">
                  <h1 className="text-center text-lg font-medium font-signature">
                    {cert.title} | {cert.issueDate} - {cert.validUntil}
                  </h1>
                  <p className="text-center text-gray-600">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsAndCertifications;
