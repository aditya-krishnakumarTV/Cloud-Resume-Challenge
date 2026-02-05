import { useEffect, useState } from "react";

import { gsap } from "gsap";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { certificates } from "../data/certificates";

const Certificates = () => {
  const [currentCertIndex, setCurrentCertIndex] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      "#certificates-container",
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.inOut" },
    );
  }, [currentCertIndex]);

  const handleNextCertClick = () => {
    if (currentCertIndex === certificates.length - 1) {
      return;
    }

    setCurrentCertIndex((prevIndex): number =>
      prevIndex === certificates.length - 1 ? prevIndex : prevIndex + 1,
    );
  };

  const handlePrevCertClick = () => {
    if (currentCertIndex === 0) {
      return;
    }

    setCurrentCertIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1,
    );
  };

  const arrowButtonClass =
    "p-3 rounded-lg bg-gray-500 text-white hover:bg-gray-700 hover:scale-105 hover:shadow-lg transition ease-in-out duration-500";

  return (
    <section>
      <div className="text-center space-y-4 p-4 mt-4">
        <h1 className="text-4xl font-bold font-signature text-gray-900">
          Certifications
        </h1>
        <p className="text-lg text-gray-700">
          Continuously enhancing skills and validating expertise through
          certifications
        </p>
      </div>

      {certificates.map(
        (cert, index) =>
          index === currentCertIndex && (
            <div
              className="flex flex-col md:flex-row justify-center items-center space-y-6 p-4 mt-4"
              key={index}
              id="certificates-container"
            >
              <div
                className="w-full p-8 rounded-lg bg-white transition hover:-translate-y-1 hover:shadow-lg shadow-gray-500 ease-in-out duration-400"
                id="certificates-card"
              >
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
          ),
      )}

      <div className="flex justify-center items-center space-x-6 mt-8">
        <h2 className="text-gray-600 italic">
          {currentCertIndex + 1} / {certificates.length}
        </h2>
      </div>

      <div className="flex justify-center items-center space-x-6 mt-8">
        <button
          className={
            arrowButtonClass +
            (currentCertIndex === 0
              ? " opacity-50 cursor-not-allowed"
              : " cursor-pointer")
          }
          id="prev"
          disabled={currentCertIndex === 0}
          onClick={handlePrevCertClick}
        >
          <ChevronLeft />
        </button>
        <button
          className={
            arrowButtonClass +
            (currentCertIndex === certificates.length - 1
              ? " opacity-50 cursor-not-allowed"
              : " cursor-pointer")
          }
          id="next"
          disabled={currentCertIndex === certificates.length - 1}
          onClick={handleNextCertClick}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Certificates;
