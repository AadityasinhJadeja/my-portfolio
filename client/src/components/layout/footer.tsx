import { personalInfo } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left text-gray-600 dark:text-gray-300">
              &copy; {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </div>
          <div>
            <nav className="flex space-x-6">
              <a 
                href="#home" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#projects" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
