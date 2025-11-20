import CloudResumeSR from "../assets/cloud-resume-sr.mp4";

import { Github, Link } from "lucide-react";

function Projects() {
  const projectLists = [
    {
      title: "Cloud Resume Challenge",
      description:
        "This project is built to practice cloud concepts and related tools like GitHub Actions for CI/CD, Terraform for infrastructure-as-code, and a small backend written in Python/JavaScript. It follows the Cloud Resume Challenge by Forrest Brazeal.",
      codeLink:
        "https://github.com/aditya-krishnakumarTV/Cloud-Resume-Challenge",
      projectLink: null,
      projectScreenshot: null,
      projectScreenshotVideo: CloudResumeSR,
    },
  ];

  return (
    <div className="bg-gray-300">
      <div className="max-w-7xl mx-auto p-10">
        <div className="text-center space-y-4 p-8">
          <h1 className="text-4xl font-bold font-signature text-gray-900">
            Project Showcase
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A selection of my notable projects demonstrating my skills and
            expertise in software development.
          </p>
        </div>

        {projectLists.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg transition hover:-translate-y-1 hover:shadow-lg shadow-gray-500 ease-in-out duration-400 p-10"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 items-center justify-center my-auto space-y-4">
                <h2 className="text-2xl font-medium font-signature">
                  {project.title}
                </h2>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-black hover:bg-gray-700 text-white px-4 py-2 rounded-full transition hover:scale-105 hover:shadow-md shadow-gray-400 ease-in-out duration-500"
                  >
                    <Github />
                    <span>View Code</span>
                  </a>
                  {project.projectLink && (
                    <a
                      href={project.projectLink}
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-full transition hover:scale-105 hover:shadow-md shadow-gray-400 ease-in-out duration-500"
                    >
                      <Link />
                      <span>View Project</span>
                    </a>
                  )}
                </div>
              </div>

              <div className="flex-1">
                {project.projectScreenshotVideo &&
                  !project.projectScreenshot && (
                    <video
                      src={project.projectScreenshotVideo}
                      className="h-auto lg:h-60 mx-auto my-10 object-contain rounded-lg shadow-lg shadow-gray-500"
                      autoPlay
                      loop
                      muted
                    />
                  )}

                {!project.projectScreenshotVideo &&
                  project.projectScreenshot && (
                    <img
                      src={project.projectScreenshot}
                      className="h-60 mx-auto my-10 object-cover rounded-lg shadow-lg shadow-gray-500"
                    />
                  )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
