import AWSCloudCert from "../assets/aws-certified-cloud-practitioner.png";
import AWSAICert from "../assets/aws-certified-ai-practitioner.png";

interface Certificate {
    title: string;
    image: string;
    link: string;
    issueDate: string;
    validUntil: string;
    description: string;
}

export const certificates: Certificate[] = [
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
