import { useEffect, useRef } from "react";
import { educations, certifications } from "@/lib/data";
import { 
  FaGoogle, FaMicrosoft, FaAmazon, FaApple, 
  FaLinkedin, FaJava, FaPython, FaReact, 
  FaAws, FaNodeJs, FaCertificate, FaUniversity 
} from "react-icons/fa";

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Function to get cert icon based on issuer
  const getCertIcon = (issuer: string) => {
    const iconMap: Record<string, JSX.Element> = {
      "Google": <FaGoogle className="text-2xl" />,
      "Microsoft": <FaMicrosoft className="text-2xl" />,
      "Amazon": <FaAmazon className="text-2xl" />,
      "AWS": <FaAws className="text-2xl" />,
      "Apple": <FaApple className="text-2xl" />,
      "LinkedIn": <FaLinkedin className="text-2xl" />,
      "Oracle": <FaJava className="text-2xl" />,
      "Python Institute": <FaPython className="text-2xl" />,
      "React": <FaReact className="text-2xl" />,
      "Node.js": <FaNodeJs className="text-2xl" />,
    };
    
    // Check if we have an icon for this issuer
    for (const [key, icon] of Object.entries(iconMap)) {
      if (issuer.toLowerCase().includes(key.toLowerCase())) {
        return icon;
      }
    }
    
    // Default icon if no match found
    return <FaCertificate className="text-2xl" />;
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animatedElements = sectionRef.current?.querySelectorAll('.animated-slide-up');
          animatedElements?.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('in-view');
            }, index * 100);
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="education" className="py-16 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-gradient">Education</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((education) => (
            <div 
              key={education.id} 
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md animated-slide-up"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{education.degree}</h3>
                  <h4 className="text-lg text-gray-600 dark:text-gray-300">{education.institution}</h4>
                </div>
                <span className="text-sm font-medium text-primary px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  {education.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {education.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300">GPA: {education.gpa}</span>
                <i className="fas fa-graduation-cap text-primary"></i>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-6 text-center">Certifications</h3>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {certifications.map((certification) => (
              <div 
                key={certification.id} 
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center animated-slide-up hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 rounded-full text-purple-600 dark:text-purple-300 mr-4 cert-icon-container animate-bounce-subtle">
                  {getCertIcon(certification.issuer)}
                </div>
                <div>
                  <h4 className="font-medium">{certification.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {certification.issuer}, {certification.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
