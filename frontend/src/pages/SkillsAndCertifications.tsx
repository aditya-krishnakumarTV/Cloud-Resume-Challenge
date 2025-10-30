function SkillsAndCertifications() {
  const programming_languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Python",
  ];
  const frameworks = ["Angular", "React"];
  const styling_frameworks = ["Bootstrap", "Angular Material", "TailwindCSS"];
  const cloud_and_devops = [
    "AWS Services",
    "Terraform & CloudFormation",
    "GitHub Actions (CI/CD)",
    "Docker",
  ];
  const certifications = ["AWS Certified Cloud Practitioner"];

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto p-10">
        <div className="text-center space-y-4 p-8">
          <h1 className="text-4xl font-bold text-gray-900">
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
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center font-semibold mb-4">
                  Programming Languages
                </h2>
                <div className="flex flex-row flex-wrap gap-3 p-4">
                  {programming_languages.map((lang) => (
                    <div
                      className="border rounded-2xl text-center w-max py-1 px-3"
                      key={lang}
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center font-semibold mb-4">
                  Frameworks
                </h2>
                <div className="flex flex-row flex-wrap gap-3 p-4">
                  {frameworks.map((fw) => (
                    <div
                      className="border rounded-2xl text-center w-max py-1 px-3"
                      key={fw}
                    >
                      {fw}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center font-semibold mb-4">
                  Styling Frameworks
                </h2>
                <div className="flex flex-row flex-wrap gap-3 p-4">
                  {styling_frameworks.map((sf) => (
                    <div
                      className="border rounded-2xl text-center w-max py-1 px-3"
                      key={sf}
                    >
                      {sf}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-center font-semibold mb-4">
                  Cloud & DevOps
                </h2>
                <div className="flex flex-row flex-wrap gap-3 p-4">
                  {cloud_and_devops.map((cd) => (
                    <div
                      className="border rounded-2xl text-center w-max py-1 px-3"
                      key={cd}
                    >
                      {cd}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl text-center font-semibold mb-4">
                  Certifications
                </h2>
                <div className="flex flex-row flex-wrap gap-3 p-4">
                  {certifications.map((cert) => (
                    <div
                      className="border rounded-2xl text-center w-max py-1 px-3"
                      key={cert}
                    >
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsAndCertifications;
