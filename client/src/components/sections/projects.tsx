import { useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  const toggleShowAll = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowAll(!showAll);
    
    // Smooth scroll to the view more button when expanding
    if (!showAll) {
      const element = document.getElementById("view-more-projects");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
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
            requestAnimationFrame(() => {
              el.classList.add('in-view');
            });
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
    <section id="projects" className="py-16 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          My <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one represents a unique challenge and solution.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md animated-slide-up"
              id={index === 5 ? "view-more-projects" : undefined}
              style={{ 
                animationDelay: `${index * 100}ms`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  loading="lazy"
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded transition-all duration-300 hover:bg-primary/20 hover:text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a 
                    href={project.demoUrl} 
                    className="text-primary hover:underline transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="text-gray-600 dark:text-gray-300 hover:text-primary hover:dark:text-primary transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={toggleShowAll}
            className="inline-flex items-center px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-md transition-all duration-300 transform hover:scale-105"
          >
            {showAll ? (
              <>Show Less <i className="fas fa-arrow-up ml-2"></i></>
            ) : (
              <>View All Projects ({projects.length}) <i className="fas fa-arrow-right ml-2"></i></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
