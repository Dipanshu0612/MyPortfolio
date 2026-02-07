export const personalInfo = {
  name: "Dipanshu Mishra",
  title: "Full Stack Developer",
  email: "dipanshu@example.com",
  location: "Vadodara, Gujarat",
  bio: "A tech enthusiast and young developer keen to learn, develop, and compete with the best in the business. Currently pursuing B-Tech in Computer Science at Parul University with expertise in full-stack development.",
  resume: "/Assests/Dipanshu's Resume.pdf",
  social: {
    github: "https://github.com/Dipanshu0612",
    linkedin: "https://www.linkedin.com/in/dipanshu-mishra-696a0622a",
    instagram: "https://www.instagram.com/_.dipanshu._06/",
    whatsapp: "https://api.whatsapp.com/send?phone=918485974624&text=Hello, more information!",
  },
};

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "CGPA", value: "8.9" },
];

export const skills = {
  frontend: [
    { name: "HTML5", icon: "fa-brands fa-html5", level: 95 },
    { name: "CSS3", icon: "fa-brands fa-css3-alt", level: 95 },
    { name: "JavaScript", icon: "fa-brands fa-js", level: 90 },
    { name: "React", icon: "fa-brands fa-react", level: 88 },
    { name: "Next.js", icon: "⚡", level: 85 },
    { name: "TypeScript", icon: "📘", level: 82 },
    { name: "Tailwind CSS", icon: "🎨", level: 92 },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap", level: 90 },
  ],
  backend: [
    { name: "Node.js", icon: "fa-brands fa-node", level: 85 },
    { name: "Express.js", icon: "⚙️", level: 85 },
    { name: "MongoDB", icon: "🍃", level: 80 },
    { name: "MySQL", icon: "🗄️", level: 78 },
    { name: "PHP", icon: "fa-brands fa-php", level: 75 },
  ],
  languages: [
    { name: "C++", icon: "fa-brands fa-cplusplus", level: 88 },
    { name: "Python", icon: "fa-brands fa-python", level: 85 },
    { name: "Java", icon: "fa-brands fa-java", level: 82 },
  ],
  tools: [
    { name: "Git", icon: "fa-brands fa-git-alt", level: 85 },
    { name: "Figma", icon: "fa-brands fa-figma", level: 80 },
    { name: "VS Code", icon: "💻", level: 95 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "PU Transport Management System",
    description: "A comprehensive web app for Parul University users to access bus timings, routes, and passes. Includes an admin panel for managing users and buses.",
    image: "/Project-Images/PUTMS.png",
    tags: ["React", "Node.js", "Express", "MongoDB", "MERN"],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "CPC Canteen Management",
    description: "CPC Canteen Management System to help police personnel and servicemen for easy access to items. Built during Vadodara Police Hackathon 2023.",
    image: "/Project-Images/CPC.png",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://cpc-canteen-management.netlify.app/",
    github: "#",
  },
  {
    id: 3,
    title: "Payment Gateway Integration",
    description: "Razorpay payment gateway integration project. Test mode implementation with complete checkout flow and payment processing.",
    image: "/Project-Images/PaymentGateway.png",
    tags: ["React", "Razorpay", "JavaScript"],
    link: "https://payment-gateway-dipanshu.netlify.app/",
    github: "#",
  },
  {
    id: 4,
    title: "Realtor Clone",
    description: "A React JS application listing houses for rent and sale with modern UI and responsive design using Tailwind CSS.",
    image: "/Project-Images/Realtor.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "House of the Dragon Website",
    description: "Alternative HOTD website featuring trailers, cast information, and series details with engaging animations.",
    image: "/Project-Images/HOTD.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://house-of-the-dragon-alternate.netlify.app/",
    github: "#",
  },
  {
    id: 6,
    title: "Music Player by Emotions",
    description: "AI-powered music player that identifies emotions and plays songs accordingly using Python and web technologies.",
    image: "/Project-Images/MusicPlayer.png",
    tags: ["Python", "AI/ML", "JavaScript", "HTML/CSS"],
    link: "https://music-player-emotions-dipanshu.netlify.app/",
    github: "#",
  },
];

export const education = [
  {
    id: 1,
    institution: "Parul University",
    degree: "B.Tech in Computer Science",
    location: "Vadodara, Gujarat",
    period: "2021 - Present",
    grade: "CGPA: 8.9",
    achievements: [
      "Specialized in Full Stack Development",
      "Active participant in hackathons and coding competitions",
      "Member of technical clubs and societies",
    ],
  },
  {
    id: 2,
    institution: "Reliance Foundation School",
    degree: "Higher Secondary Education",
    location: "Panvel, Maharashtra",
    period: "2019 - 2021",
    grade: "91.8%",
    achievements: [
      "Focused on Science and Mathematics",
      "Participated in various inter-school competitions",
    ],
  },
  {
    id: 3,
    institution: "MES'S HOCL School",
    degree: "Secondary Education",
    location: "Panvel, Maharashtra",
    period: "2012 - 2019",
    grade: "93%",
    achievements: [
      "Consistent academic excellence",
      "Active in sports and cultural activities",
    ],
  },
];

export const experience = [
  {
    id: 1,
    company: "The Sparks Foundation",
    role: "Web Development Intern",
    period: "June 2023 - July 2023",
    location: "Remote",
    description: "Worked on multiple web development projects including payment gateway integration and banking system.",
    responsibilities: [
      "Developed responsive web applications using HTML, CSS, and JavaScript",
      "Integrated Razorpay payment gateway for secure transactions",
      "Built a basic banking system with user management",
      "Collaborated with team members on project requirements",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 2,
    company: "Vadodara Police Hackathon",
    role: "Participant & Developer",
    period: "October 2023",
    location: "Vadodara, Gujarat",
    description: "Developed CPC Canteen Management System for police personnel during the hackathon.",
    responsibilities: [
      "Designed and developed full-stack web application",
      "Implemented user authentication and authorization",
      "Created admin panel for inventory management",
      "Presented solution to judges and stakeholders",
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
];
