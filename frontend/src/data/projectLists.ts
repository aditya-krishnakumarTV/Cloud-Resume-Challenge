import CloudResumeSR from "../assets/cloud-resume-sr.mp4";

interface project {
    title: string;
    description: string;
    codeLink: string;
    projectLink: string | null;
    projectScreenshot: string | null;
    projectScreenshotVideo: string | null;
}

export const projectLists: project[] = [
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