import { useState, useEffect } from "react";
import { personalInfo } from "@/lib/data";
import ProfileImage from '/Users/aadityasinhjadeja/Downloads/DataInsightHub/images/IMG_9806.jpg.png';

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
            I focus on leveraging AI and data science to solve real-world problems.
            From insights to action - I design systems that learn and scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 btn-hover-effect"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md hover:border-primary dark:hover:border-primary transition-all duration-300 transform hover:scale-105 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <span className="flex items-center">
                  View My Work
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="md:w-1/3 mt-12 md:mt-0 animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto animate-float">
              <div className="absolute inset-0 bg-gradient rounded-full opacity-20 blur-xl animate-pulse"></div>
              <div className="absolute w-12 h-12 bg-blue-500 rounded-full -top-4 -right-4 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute w-8 h-8 bg-purple-500 rounded-full bottom-4 -left-4 opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
              <img
                src={ProfileImage}
                alt={personalInfo.name}
                className="relative rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 shadow-lg transition-all duration-500 hover:shadow-2xl"
              />
              <div className="absolute inset-0 border-4 border-transparent hover:border-primary/20 rounded-full transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
