import {
  Experience,
  Project,
  Education,
  Certification,
  Skill,
  Interest,
  PersonalInfo,
} from './types';

export const personalInfo: PersonalInfo = {
  name: "Aadityasinh Jadeja",
  roles: ["Data Scientist", "Product Manager", "AI Business Fellow"],
  email: "jadeja.aadityasinh2@gmail.com",
  location: "Los Angeles, CA",
  availability: "Full-time / Co-Op",
  about: [
    
    "I'm a data-driven problem solver who loves building AI-powered solutions that actually make a difference. My journey blends product strategy, data science, and storytelling, whether it's analyzing behavior patterns, launching digital experiences, or optimizing performance through insights.",
    "Over the past few years, I've worked across industries, from space research at ISRO to marketing strategy for 500K+ audiences, to supporting students at CSULB. Every experience has shaped the way I think about products, people, and impact.",
    "Outside of work, you'll find me mentoring students, experimenting with Notion dashboards, or grabbing coffee while thinking about the next big idea to build."
    
  ],
  contactInfo: {
    location: "Los Angeles, California, USA",
    email: "jadeja.aadityasinh2@gmail.com",
    phone: ""
  },
  socialLinks: [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/AadityasinhJadeja",
      icon: "fa-github"
    },
    {
      id: 2,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aadityasinh-jadeja/",
      icon: "fa-linkedin-in"
    }
  ]
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Data Scientist Intern",
    company: "Labcorp",
    domain: "Artificial Intelligence(AI)",
    period: "May 2025 - Present",
    description: "Improving Health. Improving Lives. Creating Impact on the AI team.",
    technologies: ["Python", "Machine Learning", "AWS", "GenAI"]
  },
  {
    id: 2,
    title: "Growth Product Manager",
    company: "Yudi J",
    domain: "EdTech - Product Growth",
    period: "March 2025 - Present",
    description: "Led growth strategy for a digital product serving 2,000+ users, focused on helping international students land jobs in the U.S. Designed and executed initiatives across user onboarding, referral programs, and community engagement to improve retention and conversions.",
    technologies: ["Growth Strategy", "Conversion Funnel", "Product Optimization", "Notion"]
  },
  {
    id: 3,
    title: "AI Business Fellow",
    company: "Perplexity",
    domain: "Artificial Intelligence(AI)",
    period: "March 2025 - Present",
    description: "A competitive program designed to develop AI leaders. Engaging in fireside chats with top AI executives, hands-on workshops, and industry networking to explore AI's business impact and drive adoption in real-world workflows.",
    technologies: ["GenAI", "LLM", "Replit", "Promt Engineering"]
  },
  {
    id: 4,
    title: "Peer Mentor",
    company: "California State University, Long Beach",
    domain: "Community Engagement",
    period: "March 2025 - Present",
    description: "I designed and led mental‑health awareness events and peer‑support sessions to foster student well‑being. Promoted campus counseling services and facilitated group discussions to help peers navigate stress, anxiety, and academic challenges. Leveraged social media and targeted outreach to build an inclusive, supportive community.",
    technologies: ["Canva", "Marketing"]
  },
  {
    id: 5,
    title: "Product Marketing Manager",
    company: "Yudi J",
    domain: "EdTech - Content & Digital Marketing",
    period: "June 2024 - August 2024",
    description: "Led content and product strategy for a digital platform serving 500,000+ international students. Translated audience behavior and competitive insights into a data-driven content roadmap. Worked cross-functionally to align product goals with user needs, improved platform engagement, and supported GTM planning for digital offerings.",
    technologies: ["Product Strategy", "Competetive Analysis", "Market Research", "Data Analysis", "Miro", "Notion"]
  },
  {
    id: 6,
    title: "Researcher/Data Scientist",
    company: "Indian Space Research Organization (ISRO)",
    domain: "Space Research",
    period: "January 2024 - April 2024",
    description: "Built automation tool using MATLAB to handle huge satellite datasets – no more manual work! Created a full report generation system that helps scientists present their findings with ease. Honestly, it's one of the proudest things I've built – knowing that something I made will be used by researchers for years.",
    technologies: ["Data Analysis", "MATLAB", "Report Generation", "Data Visualization", "Satellite Payload"]
  },

  {
    id: 7,
    title: "Event Manager",
    company: "Machine Learning Club",
    domain: "AI / Machine Learning",
    period: "January 2023 - December 2023",
    description: "Organized and executed 10+ large-scale events featuring professionals from top Data Science and AI companies. Coordinated cross-functional teams for speaker outreach, logistics, and promotion. Increased member engagement through value-driven programming and continuous feedback cycles.",
    technologies: [" Event strategy", "Operational execution", "Community building", "Stakeholder management", "Marketing"]
  },
  
  {
    id: 8,
    title: "Project Manager",
    company: "F13 Technologies",
    domain: "Cloud Computing",
    period: "July 2022 - October 2022",
    description: "Managed a cross-functional team to enhance product scalability and reduce cloud infrastructure costs. Utilized AWS performance insights to identify service redundancies, improving overall product efficiency. Delivered high-impact reports and led the prioritization of roadmap features based on technical feasibility and business value.",
    technologies: ["AWS", "Stakeholder Communication", "Product Life Cycle", "Slack"]
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "FoodFlow AI",
    description: "Designed an AI-powered system to help retailers minimize food waste and optimize inventory decisions. Led product strategy, system design, and sprint execution - from wireframes and architecture to competitive analysis — delivering a user-friendly prototype that turns waste data into actionable insights.",
    technologies: ["Product Sense","Product Design", "UX & Prototyping", "AI"],
    demoUrl: "https://drive.google.com/file/d/1HipYfYzp1JS90y5_hVdrU0kbDSkW3A3g/view?usp=sharing",
    imageUrl: "https://trellis.net/wp-content/uploads/2025/01/Walmart-Denali-depack-2-1.jpg?w=1024"
  },
  {
    id: 2,
    title: "HERMS - Healthcare Equipment Rental Management System",
    description: "Built a Healthcare Device Rental & Maintenance Tracker to help hospitals efficiently manage medical equipment. Designed end-to-end database models (conceptual, logical, physical) and wrote optimized SQL queries for real-time tracking of device availability, usage, and maintenance. Improved data integrity and enabled actionable insights through structured reporting.",
    technologies: ["SQL","Database Design", "Data Modeling", "Healthcare Operations"],
    demoUrl: "#projects",
    codeUrl: "",
    imageUrl: "https://d2c0db5b8fb27c1c9887-9b32efc83a6b298bb22e7a1df0837426.ssl.cf2.rackcdn.com/17910579-equipment-rental-1400x724.jpeg"
  },
  {
    id: 3,
    title: "HydroVision",
    description: "A data science project tackling California's water contamination crisis by analyzing 2M+ records from 1903–2024. Used logistic regression (95% accuracy) to classify water quality and uncover historical, regional toxicity trends.",
    technologies: ["Python", "Pandas", "Logistic Regression", "Data Analysis","Scikit-learn"],
    codeUrl: "#projects",
    imageUrl: "https://static.wixstatic.com/media/f579f6_281d56daa4fd4eb28b2ed41006df9018~mv2.jpg/v1/fill/w_640,h_400,al_c,q_80,enc_avif,quality_auto/f579f6_281d56daa4fd4eb28b2ed41006df9018~mv2.jpg"
  },
  {
    id: 4,
    title: "Toy Story GPT",
    description: "Built a GPT-style language model using PyTorch to generate Toy Story-themed text. Applied self-attention and transformer techniques to enhance character-specific output accuracy.",
    technologies: ["PyTorch", "Transformers", "Deep Learning", "Natural Language Processing", "GenAI"],
    demoUrl: "#projects",
    codeUrl: "https://github.com/AadityasinhJadeja/ToyStory_GPT_LLM.git",
    imageUrl: "https://static1.colliderimages.com/wordpress/wp-content/uploads/2023/02/toy-story-5.jpg"
  },
  {
    id: 5,
    title: "Sales & Customer Insights Dashboard",
    description: "Created an interactive Tableau dashboard for customer and sales analytics, identifying top buyers, seasonal sales patterns, and key product trends. Enabled better decision-making with dynamic filters.",
    technologies: ["Tableau", "Data Analytics", "KPI Tracking", "Data Visualization"],  
    demoUrl: "https://public.tableau.com/views/SalesCustomerDashboardsDynamic_17260217300630/SalesDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
    imageUrl: "https://www.highspot.com/wp-content/uploads/2023/07/essential-sales-skills.jpg"
  },
  {
    id: 6,
    title: "Solar X-Ray Intensity Analysis",
    description: "Analyzed solar monitor data to identify intensity trends and anomalies. Improved data readability by 50% using Python-based visualizations and Excel, aiding scientific interpretation.",
    technologies: ["Python", "Data Cleaning", "Scientific Analysis", "Excel"],
    demoUrl: "https://solar-xray-monitor-git-main-aadityasinhjadeja96-gmailcom.vercel.app",
    codeUrl: "https://github.com/AadityasinhJadeja/solar-xray-monitor.git",
    imageUrl: "https://cff2.earth.com/uploads/2025/04/16151643/sun_geomagnetic-solar-storm_cme_auroras_1m.webp"
  },
  {
    id: 7,
    title: "Product Purchase Prediction",
    description: "Deployed a Streamlit-based app that predicts product purchase behavior using K-Nearest Neighbors. Trained on social network data to classify intent based on age and salary.",
    technologies: ["Machine Learning", "KNN", "Scikit-Learn", "Binary Classification", "Streamlit"],
    demoUrl: "#projects",
    codeUrl: "#projects", 
    imageUrl: "https://www.hotelestequendama.com.co/assets/cache/uploads/tequendama-hoteles/destinos/cali/shopping/1920x1080/shopping-compras-cali-tequendama-hoteles-colombia-1708514344.jpeg"
  },
  {
    id: 8,
    title: "Notezipper",
    description: "Location-based weather application with 7-day forecasts, radar maps, and severe weather alerts.",
    technologies: ["React"," JavaScript", "HTML", "CSS"],
    codeUrl: "https://github.com/AadityasinhJadeja/NoteZipper.git",
    imageUrl: "https://wp.dailybruin.com/images/50424_webns917evernotepicao.jpg"
  }
];

export const educations: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Information Systems",
    institution: "California State University, Long Beach",
    period: "May 2026",
    description: "Focused on bridging technology with business through courses in Data Analysis, System Design & Analysis, Deep Learning, Responsible AI, AWS, and Cybersecurity. Currently actively applying concepts to real-world projects and internships.",
    gpa: "4.0/4.0"
  },
  {
    id: 2,
    degree: "B.Tech - Information Technology Engineering",
    institution: "Birla Vishvakarma Mahavidyalaya, Anand",
    period: "May 2024",
    description: "Built a strong foundation in programming, databases, and analytics. Explored Big Data, OOPs, Operating Systems, Computer Networking, Java, and Python while developing a passion for solving real problems using tech.",
    gpa: "3.4/4.0"
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Google Professional Project Management",
    issuer: "Google",
    year: "2025"
  },
  {
    id: 2,
    name: "Google AI Essentials",
    issuer: "Google",
    year: "2024"
  },
  {
    id: 3,
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2022"
  }
];

export const skills: Skill[] = [
  // Technical Skills (Programming Languages)
  {
    id: 1,
    name: "Python",
    category: "technical"
  },
  {
    id: 3,
    name: "Libraries: NumPy, Pandas, Scikit-learn, PyTorch, TensorFlow",
    category: "technical"
  },
  {
    id: 3,
    name: "JavaScript",
    category: "technical"
  },
  {
    id: 4,
    name: "MATLAB",
    category: "technical"
  },
  {
    id: 5,
    name: "SQL",
    category: "technical"
  },
  
  // Tools
  {
    id: 6,
    name: "Tableau",
    category: "tool"
  },
  {
    id: 7,
    name: "Amazon Web Services (AWS)",
    category: "tool"
  },
  {
    id: 8,
    name: "Microsoft Excel",
    category: "tool"
  },
  {
    id: 9,
    name: "Git",
    category: "tool"
  },
  {
    id: 10,
    name: "Miro",
    category: "tool"
  },
  {
    id: 11,
    name: "Jira",
    category: "tool"
  },
  {
    id: 12,
    name: "Slack",
    category: "tool"
  },
  {
    id: 13,
    name: "Notion",
    category: "tool"
  },
  {
    id: 14,
    name: "Canva",
    category: "tool"
  },
  {
    id: 15,
    name: "Trello",
    category: "tool"
  },
  {
    id: 16,
    name: "IBM SPSS",
    category: "tool"
  },

  // Core Skills
  {
    id: 17,
    name: "Requirement Gathering",
    category: "core"
  },
  {
    id: 18,
    name: "Data Analysis",
    category: "core"
  },
  {
    id: 19,
    name: "Supervised Learning",
    category: "core"
  },
  {
    id: 20,
    name: "Unsupervised Learning",
    category: "core"
  },
  {
    id: 21,
    name: "Data Visualization",
    category: "core"
  },
  {
    id: 22,
    name: "Product Roadmap",
    category: "core"
  },
  {
    id: 23,
    name: "Stakeholder Communication",
    category: "core"
  },
  {
    id: 24,
    name: "Agile Methodologies",
    category: "core"
  },
  {
    id: 25,
    name: "Scrum",
    category: "core"
  }
];

export const interests: Interest[] = [
  {
    id: 1,
    name: "Artificial Intelligence",
    icon: "fa-robot"
  },
  {
    id: 2,
    name: "Product Management",
    icon: "fa-product-hunt"
  },
  {
    id: 3,
    name: "Marketing",
    icon: "fa-marketing"
  },
  {
    id: 4,
    name: "Cloud Computing",
    icon: "fa-cloud"
  },
  {
    id: 5,
    name: "Watching Movies",
    icon: "fa-video"
  },
  {
    id: 6,
    name: "Listening to Podcasts",
    icon: "fa-podcast"
  }
];
