import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";
import ProfileImage from '@/assets/profile.png';

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = personalInfo.roles[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeoutId = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentText.substring(0, prev.length - 1);
        } else {
          return currentText.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000); // pause at end
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % personalInfo.roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, textIndex]);

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-gradient relative inline-block animate-text-wave">
                {personalInfo.name}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer-slow"></span>
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-bold">
                {displayText}
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
              {personalInfo.about[0]}
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="btn-primary"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="btn-secondary"
              >
                View My Work
              </a>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 animate-fade-in-up">
            <img
              src={ProfileImage}
              alt={personalInfo.name}
              className="rounded-full w-64 h-64 object-cover border-4 border-primary/20 shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
