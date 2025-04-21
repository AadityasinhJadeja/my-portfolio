import { useEffect, useRef } from "react";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Feel free to connect with me for any work or collaboration opportunities.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md animated-slide-up">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-lg p-3 mr-4">
                    <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {personalInfo.contactInfo.location}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-lg p-3 mr-4">
                    <i className="fas fa-envelope text-primary text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      <a href={`mailto:${personalInfo.contactInfo.email}`} className="hover:text-primary transition-colors">
                        {personalInfo.contactInfo.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-4 text-lg">Connect With Me</h4>
                <div className="flex flex-wrap gap-4">
                  {personalInfo.socialLinks.map((social) => (
                    <a 
                      key={social.id}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group"
                    >
                      <div className="bg-gray-100 dark:bg-gray-700 w-12 h-12 flex items-center justify-center rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform group-hover:scale-110">
                        <i className={`fab ${social.icon} text-xl`}></i>
                      </div>
                      <p className="text-xs text-center mt-1 text-gray-500">{social.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400">
                Thank you for visiting my portfolio. I'm currently looking for {personalInfo.availability}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}