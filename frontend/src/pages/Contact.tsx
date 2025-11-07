import { Phone, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { getVisitorCount } from "../api/visitorCounter";

function Contact() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const data = await getVisitorCount();
        console.log("Visitor count data:", data);
        setVisitorCount(data);
      } catch (error) {
        console.error("Failed to load visitor count:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7972914071",
      href: "tel:+917972914071",
    },
    {
      icon: Mail,
      label: "Email",
      value: "adityakrishnakumar12@gmail.com",
      href: "mailto:adityakrishnakumar12@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/aditya-krishnakumar-335530221/",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View GitHub Profile",
      href: "https://github.com/aditya-krishnakumarTV",
    },
  ];

  return (
    <div className="bg-gray-500">
      <div className="max-w-7xl mx-auto p-10">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Contact Me</h1>
          <p className="text-lg text-white">
            I'd love to hear from you! Whether you have a question, want to
            collaborate, or just want to say hello, feel free to reach out.
          </p>
          {loading ? (
            <p className="text-md text-white mb-8">Loading visitor count...</p>
          ) : (
            <p className="text-md text-white mb-8">
              You are visitor #{visitorCount?.toLocaleString() ?? "0"}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-6 gap-8">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="container flex items-center space-x-4 p-4 m-1 rounded-lg border border-white bg-gray-200 transition hover:-translate-y-1 hover:shadow-lg shadow-white ease-in-out duration-400"
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                <item.icon />
              </div>
              <div className="flex-1">
                <p className="font-medium text-lg">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm"
                    target={item.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      item.href.startsWith("http") ? "noopener noreferrer" : ""
                    }
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
