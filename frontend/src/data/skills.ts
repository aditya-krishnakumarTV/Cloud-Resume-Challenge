interface skill {
    title: string;
    content: string[];
}

export const skills: skill[] = [
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
]