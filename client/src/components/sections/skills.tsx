import { useEffect, useRef, useState } from "react";
import { skills } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

type SkillCategory = "technical" | "tool" | "core";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("technical");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate slide up elements
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

  // Filter skills by category
  const technicalSkills = skills.filter(skill => skill.category === "technical");
  const toolSkills = skills.filter(skill => skill.category === "tool");
  const coreSkills = skills.filter(skill => skill.category === "core");

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center relative overflow-hidden">
          My <span className="text-gradient relative">
            Skills
            <span className="absolute inset-0 animate-shimmer"></span>
          </span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          A showcase of my technical abilities, tools I work with, and core expertise.
        </p>
        
        <div className="max-w-4xl mx-auto animated-slide-up">
          <Tabs defaultValue="technical" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-3 w-full max-w-md overflow-hidden relative">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-700"></div>
                <TabsTrigger value="technical" className="relative z-10 transition-all duration-300 hover:text-primary">
                  <span className="relative">
                    Technical Skills
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </TabsTrigger>
                <TabsTrigger value="tools" className="relative z-10 transition-all duration-300 hover:text-primary">
                  <span className="relative">
                    Tools
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </TabsTrigger>
                <TabsTrigger value="core" className="relative z-10 transition-all duration-300 hover:text-primary">
                  <span className="relative">
                    Core Skills
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform"></span>
                  </span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="technical" className="mt-4 tab-content-transition">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm transform transition-all duration-500 hover:shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center">Programming Languages</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {technicalSkills.map((skill, index) => (
                    <Badge 
                      key={skill.id} 
                      className="px-4 py-2 text-sm bg-blue-100 hover:bg-blue-200 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800 skill-badge"
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        transitionDelay: `${index * 0.05}s` 
                      }}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="tools" className="mt-4 tab-content-transition">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm transform transition-all duration-500 hover:shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center">Tools & Frameworks</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {toolSkills.map((skill, index) => (
                    <Badge 
                      key={skill.id} 
                      className="px-4 py-2 text-sm bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-800 skill-badge"
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        transitionDelay: `${index * 0.05}s` 
                      }}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="core" className="mt-4 tab-content-transition">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm transform transition-all duration-500 hover:shadow-md">
                <h3 className="text-xl font-bold mb-6 text-center">Core Expertise</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {coreSkills.map((skill, index) => (
                    <Badge 
                      key={skill.id} 
                      className="px-4 py-2 text-sm bg-purple-100 hover:bg-purple-200 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800 skill-badge"
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        transitionDelay: `${index * 0.05}s` 
                      }}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
