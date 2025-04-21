import { useEffect, useRef } from "react";
import { experiences } from "@/lib/data";
import { FaBuilding, FaGoogle, FaApple, FaAmazon, FaMicrosoft, FaFacebook, FaSpaceShuttle } from "react-icons/fa";
import { SiAdobe, SiNetflix, SiPerplexity, SiSpaceship } from "react-icons/si";

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Function to get company icon based on company name
  const getCompanyIcon = (company: string) => {
    const iconMap: Record<string, JSX.Element> = {
      "Google": <FaGoogle className="text-2xl" />,
      "Microsoft": <FaMicrosoft className="text-2xl" />,
      "Amazon": <FaAmazon className="text-2xl" />,
      "Apple": <FaApple className="text-2xl" />,
      "Facebook": <FaFacebook className="text-2xl" />,
      "Meta": <FaFacebook className="text-2xl" />,
      "Netflix": <SiNetflix className="text-2xl" />,
      "Adobe": <SiAdobe className="text-2xl" />,
    };
  
    const logoMap: Record<string, string> = {
      "Labcorp": "https://companieslogo.com/img/orig/LH-8eb9cabe.png?t=1720244492",
      "Yudi J": "https://media.licdn.com/dms/image/v2/D560BAQGx-HlkGESPsA/company-logo_200_200/company-logo_200_200/0/1719097833405/yudi_j_academy_logo?e=1750896000&v=beta&t=tsQAOh0SuT22rLfVsUH0kFXkyBuu1X-kyg4OPZ4rJUE",
      "ISRO": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Indian_Space_Research_Organisation_Logo.svg/1200px-Indian_Space_Research_Organisation_Logo.svg.png",
      "F13 Technologies": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAclBMVEX////19vb8/Pz4+fkAAADFyMnSzMyknp60tLSyrq63sbHAurkUJy5XYGNLVVnZ2NgjpKdNra95w8Qao6WSzM4wPUMAl5ouo6aIxcZHq63l8/MAj5MkMzm4u7zr9vfN5+gAHSUAiIyu1teZzM2329zj5OWmRir2AAAAi0lEQVR4Ae3NQwIDQRAF0J+xbfP+V0x1xc42eINGCV9msyPJkgTQC1oPZGVH1XTDNE3NsnX7LOi4xPODEFEcxEEQJ2fBFCzLUZRhGJZZcTfIqvo82Kht2xoiKHekvwgOiiCCyViT7KqSiGA/kfntmWfBZSbFRaUDVmcIx1ooNP8QXVewrqOXyZDA/rYg6AwL50JI+AAAAABJRU5ErkJggg==",
      "Machine Learning Club": "https://media.licdn.com/dms/image/v2/C4D0BAQFWH4mt5n2tfg/company-logo_200_200/company-logo_200_200/0/1679206365062?e=1750896000&v=beta&t=hj3cSwcXExizCv5ueiyx6jp8UEii8-hgstZvWeMkZuQ",
      "California State University, Long Beach": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Csulb_seal.JPG",
      "Perplexity": "https://zorgle.co.uk/wp-content/uploads/2024/11/Perplexity-logo.png",
    };
  
    // Check for known icons
    for (const [key, icon] of Object.entries(iconMap)) {
      if (company.toLowerCase().includes(key.toLowerCase())) {
        return icon;
      }
    }
  
    // Check for custom logo image
    for (const [key, path] of Object.entries(logoMap)) {
      if (company.toLowerCase().includes(key.toLowerCase())) {
        return (
          <img
  src={path}
  alt={key}
  className="w-full h-full object-contain rounded-full"
/>

        );
      }
    }
  
    // Fallback if nothing matched
    return (
      <div className="w-8 h-8 flex items-center justify-center text-xl font-bold bg-gray-200 dark:bg-gray-700 rounded-full">
        {company.charAt(0)}
      </div>
    );
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
            }, index * 150);
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
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Work <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="animated-slide-up">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  <span className="text-sm font-medium text-primary px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    {experience.period}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-300 overflow-hidden">
                    {getCompanyIcon(experience.company)}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-600 dark:text-gray-300">{experience.company}</h4>
                    {experience.domain && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">{experience.domain}</p>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-3 mb-4">
                  {experience.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
