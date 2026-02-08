import { cloudflare } from "@/config/cloudflare";

const r2 = (path: string) => `${cloudflare.r2.publicUrl}${path}`;

export const personalInfo = {
  name: "Dipanshu Mishra",
  title: "Full Stack Developer",
  email: "dipanshu.a.mishra06@gmail.com",
  phone: "+91 8485974624",
  location: "Vadodara, Gujarat, India",
  bio: "Full Stack Developer with hands-on experience building, maintaining, and scaling production-grade web applications. Currently working at a product-based company, contributing to and leading feature development across multiple client platforms for a European business.",
  resume: "/assests/Main_Resume.pdf",
  social: {
    github: "https://github.com/Dipanshu0612",
    linkedin: "https://www.linkedin.com/in/dipanshu-mishra-696a0622a",
    instagram: "https://www.instagram.com/_.dipanshu._06/",
    leetcode: "https://leetcode.com/Dipanshu0612",
    whatsapp: "https://api.whatsapp.com/send?phone=918485974624&text=Hello!",
  },
};

export const stats = [
  { label: "Production Apps", value: "5+" },
  { label: "Experience", value: "1+ yr" },
  { label: "Technologies", value: "25+" },
  { label: "CGPA", value: "8.93" },
];

// Devicon CDN base
const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

export const skills = {
  frontend: [
    { name: "Next.js", icon: devicon("nextjs", "original") },
    { name: "React.js", icon: devicon("react", "original") },
    { name: "Tailwind CSS", icon: devicon("tailwindcss", "original") },
    { name: "TypeScript", icon: devicon("typescript", "original") },
    { name: "JavaScript", icon: devicon("javascript", "original") },
    { name: "HTML5", icon: devicon("html5", "original") },
    { name: "CSS3", icon: devicon("css3", "original") },
    { name: "Bootstrap", icon: devicon("bootstrap", "original") },
    { name: "Zustand", icon: devicon("zustand", "original") },
    { name: "SSR / ISR", icon: devicon("nextjs", "original") },
    {
      name: "SEO Optimization",
      icon: "https://www.pngfind.com/pngs/m/170-1701498_code-png-code-logo-png-transparent-png.png",
    },
  ],
  backend: [
    { name: "Node.js", icon: devicon("nodejs", "original") },
    { name: "Express.js", icon: devicon("express", "original") },
    {
      name: "REST APIs",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
    },
  ],
  databases: [
    { name: "Supabase", icon: devicon("supabase", "original") },
    { name: "PostgreSQL", icon: devicon("postgresql", "original") },
    { name: "MySQL", icon: devicon("mysql", "original") },
    { name: "MongoDB", icon: devicon("mongodb", "original") },
    { name: "Firebase", icon: devicon("firebase", "original") },
  ],
  languages: [
    { name: "JavaScript (ES6+)", icon: devicon("javascript", "original") },
    { name: "TypeScript", icon: devicon("typescript", "original") },
    { name: "Python", icon: devicon("python", "original") },
    { name: "C++", icon: devicon("cplusplus", "original") },
    { name: "Java", icon: devicon("java", "original") },
    { name: "SQL", icon: "" },
  ],
  cloud: [
    { name: "Vercel", icon: devicon("vercel", "original") },
    { name: "DigitalOcean", icon: devicon("digitalocean", "original") },
    {
      name: "Hetzner",
      icon: "https://avatars.githubusercontent.com/u/30047064?s=200&v=4",
    },
    { name: "Serverless", icon: devicon("vercel", "original") },
  ],
  aiTools: [
    {
      name: "GitHub Copilot",
      icon: "https://images.seeklogo.com/logo-png/42/2/github-copilot-logo-png_seeklogo-428029.png",
    },
    {
      name: "Claude",
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/1280px-Claude_AI_symbol.svg.png",
    },
    {
      name: "GPT Tools",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdM9MEQ0ExL1PmInT3U5I8v63YXBEdoIT0Q&s",
    },
  ],
  tools: [
    { name: "Git", icon: devicon("git", "original") },
    { name: "GitHub", icon: devicon("github", "original") },
    { name: "Postman", icon: devicon("postman", "original") },
    { name: "Figma", icon: devicon("figma", "original") },
    { name: "VS Code", icon: devicon("vscode", "original") },
    {
      name: "Stripe",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQGluJhW7I1NYU7jF77E-9K9I46_ib_DUNHw&s",
    },
  ],
};

export const allSkillNames = Object.values(skills).flatMap((cat) =>
  cat.map((s) => s.name),
);

export const skillCategories = [
  {
    title: "Frontend",
    skills: skills.frontend,
    icon: "code",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Backend",
    skills: skills.backend,
    icon: "server",
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Databases",
    skills: skills.databases,
    icon: "database",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    title: "Languages",
    skills: skills.languages,
    icon: "terminal",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    title: "Cloud & DevOps",
    skills: skills.cloud,
    icon: "cloud",
    gradient: "from-sky-500 to-blue-400",
  },
  {
    title: "AI Tools",
    skills: skills.aiTools,
    icon: "sparkles",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    title: "Tools",
    skills: skills.tools,
    icon: "wrench",
    gradient: "from-indigo-500 to-blue-400",
  },
];

export const projects = [
  {
    id: 1,
    title: "Restaurant Management Platform",
    description:
      "Large-scale SaaS platform supporting restaurant onboarding, operations, restaurant websites, food ordering, reusable widgets, and SSO-based access. Integrated Stripe payments and payouts with SSR/ISR for SEO optimization.",
    image: r2("/images/project-images/cnf.webp"),
    tags: [
      "Next.js",
      "Next Auth",
      "Stripe",
      "SSR/ISR",
      "Supabase",
      "SEO Optimization",
    ],
    link: "https://clickandfood.sparissimo.world/",
    github: "#",
    featured: true,
    type: "Production",
  },
  {
    id: 2,
    title: "Affiliate & Rewards Platform",
    description:
      "User-facing platform owned end-to-end and delivered for two clients. Enables affiliate link generation, postback management, reward tracking, and earnings visualization via reports and graphs.",
    image: r2("/images/project-images/affiliate.webp"),
    tags: ["Next.js", "Supabase", "Auth", "Analytics", "Charts"],
    link: "https://affiliates.savebucks.app/signin",
    github: "#",
    featured: true,
    type: "Production",
  },
  {
    id: 3,
    title: "Farmer Mart - A eCommerce Platform",
    description:
      "A full-stack marketplace built with Next.js where customers can discover and purchase fresh produce directly from local farmers, while sellers can manage products and track orders from a dedicated dashboard. Built during internship at EnactOn Technologies.",
    image: r2("/images/project-images/farmer-mart.webp"),
    tags: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "Clerk Auth",
      "Stripe",
    ],
    link: "https://farmer-mart.dipanshuu.in/",
    github: "https://github.com/Dipanshu0612/FarmerMart",
    featured: false,
    type: "Internship",
  },
  {
    id: 4,
    title: "LinkedIn Clone",
    description:
      "A LinkedIn clone with user authentication, profile management, post creation, and a responsive design built using NextJs.",
    image: r2("/images/project-images/LinkedIn.webp"),
    tags: ["Next.js", "Tailwind CSS", "MongoDB", "Clerk Auth"],
    link: "https://linkedin-clone.dipanshuu.in/",
    github: "https://github.com/Dipanshu0612/LinkedIn_Clone",
    featured: false,
    type: "Side Project",
  },
  {
    id: 5,
    title: "D's SoulScribe - Your Personal Mental Journal",
    description:
      "A web app that provides users a way to write their mental state. Options are available that the user can select to categorize thier journal entry and they can also select their mood.",
    image: r2("/images/project-images/soulscribe.webp"),
    tags: ["React", "TypeScript", "Tailwind CSS", "localStorage"],
    link: "https://soulscribe.dipanshuu.in/",
    github: "https://github.com/Dipanshu0612/Mental_Jorunal",
    featured: false,
    type: "Internship",
  },
  {
    id: 6,
    title: "PU Transport Management System",
    description:
      "Comprehensive web app for Parul University users to access bus timings, routes, and passes. Includes an admin panel for managing users and buses.",
    image: r2("/images/project-images/PUTMS.webp"),
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://putms.netlify.app/",
    github: "https://github.com/Dipanshu0612/PUTMS",
    featured: false,
    type: "Academic",
  },
  {
    id: 7,
    title: "CPC Canteen Management",
    description:
      "System built during Vadodara Police Hackathon 2023 for police personnel and servicemen for easy access to canteen items and inventory management.",
    image: r2("/images/project-images/CPC.webp"),
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://cpc-canteen-management.netlify.app/",
    github: "https://github.com/Dipanshu0612/CPC_Canteen_Management_System",
    featured: false,
    type: "Hackathon",
  },
  {
    id: 8,
    title: "Basic Banking System",
    description:
      "A banking system where users can view and perform transactions between multiple users. Built during virtual internship at The Sparks Foundation.",
    image: r2("/images/project-images/BasicBanking.webp"),
    tags: ["React", "Tailwind CSS", "Firebase"],
    link: "#",
    github: "#",
    featured: false,
    type: "Internship",
  },

  {
    id: 9,
    title: "House of the Dragon Website",
    description:
      "A clone website of HBO's House of The Dragon TV show featuring trailers, cast information, and series details with engaging animations.",
    image: r2("/images/project-images/HOTD.webp"),
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: "https://house-of-the-dragon-alternate.netlify.app/",
    github: "#",
    featured: false,
    type: "Side Project",
  },
  {
    id: 10,
    title: "Music Player by Emotions",
    description:
      "AI-powered music player that identifies emotions and plays songs accordingly using Python and web technologies.",
    image: r2("/images/project-images/MusicPlayer.webp"),
    tags: ["Python", "AI/ML", "JavaScript"],
    link: "https://music-player-emotions-dipanshu.netlify.app/",
    github: "#",
    featured: false,
    type: "AI/ML",
  },
];

export const education = [
  {
    id: 1,
    institution: "Parul University",
    degree: "B.Tech - Computer Science and Engineering",
    location: "Gujarat, India",
    period: "Dec 2021 - Jun 2025",
    grade: "CGPA: 8.93 / 10",
    achievements: [
      "Specialized in Full Stack Development and DSA",
      "Technical Co-Lead at Explorer Club, Parul Institute of Technology",
      "Student Innovation Ambassador at Parul Innovation & Entrepreneurship Research Centre",
      "Active participant in hackathons and coding competitions",
    ],
  },
  {
    id: 2,
    institution: "Reliance Foundation School",
    degree: "Higher Secondary (HSC) - CBSE",
    location: "Panvel, Maharashtra",
    period: "Jun 2019 - May 2021",
    grade: "91.80%",
    achievements: [
      "Focused on Science and Mathematics",
      "Participated in various inter-school competitions",
    ],
  },
  {
    id: 3,
    institution: "MES's HOCL School",
    degree: "Secondary (SSC) - CBSE",
    location: "Panvel, Maharashtra",
    period: "Apr 2012 - May 2019",
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
    company: "EnactOn Technologies Pvt. Ltd.",
    role: "Junior Full Stack Developer",
    type: "Full-time",
    period: "Jun 2025 - Present",
    duration: "9 mos",
    location: "Surat, India (Remote)",
    description:
      "Building and scaling production-grade client applications with a focus on feature ownership. Designing, implementing, and shipping features across multiple Next.js and React platforms deployed on Vercel and DigitalOcean. Actively improving code quality, optimizing performance, and resolving bottlenecks for long-term scalability.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Vercel",
      "DigitalOcean",
      "Typescript",
      "Tailwind CSS",
      "Git",
    ],
  },
  {
    id: 2,
    company: "EnactOn Technologies Pvt. Ltd.",
    role: "Full Stack Developer - Intern",
    type: "Internship",
    period: "Dec 2024 - May 2025",
    duration: "6 mos",
    location: "Surat, India (On-site)",
    description:
      "Contributed to frontend and backend development on live projects using React, Node.js, and TypeScript. Focused on improving existing systems — identifying performance issues, refactoring code, and optimizing data access patterns. This laid the foundation for my transition into a full-time role.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "mySQL",
      "PostgreSQL",
    ],
  },
  {
    id: 3,
    company: "Parul Innovation & Entrepreneurship Research Centre",
    role: "Student Innovation Ambassador",
    type: "Campus Role",
    period: "Sep 2023 - Jul 2025",
    duration: "1 yr 11 mos",
    location: "Vadodara, India (On-site)",
    description:
      "Innovation Ambassador at Parul Innovation & Entrepreneurship Research Centre. Promoted innovation culture, assisted in organizing startup events and hackathons, including Vadodara Startup Festival, Vadodara Hackathon, and bridged the gap between students and industry opportunities.",
    technologies: [],
  },
  {
    id: 4,
    company: "Explorer Club, Parul Institute of Technology",
    role: "Technical Co-Lead",
    type: "Campus Leadership",
    period: "Feb 2023 - Nov 2024",
    duration: "1 yr 10 mos",
    location: "Vadodara, India",
    description:
      "Led the technical team organizing cultural and technical events (500+ participants). Managed events including Engineers Day, CineClick, and WCL. Previously served as Technical Team Member from Jun 2022.",
    technologies: [],
  },
  {
    id: 5,
    company: "The Sparks Foundation",
    role: "Web Development Intern",
    type: "Internship",
    period: "May 2023 - Jun 2023",
    duration: "2 mos",
    location: "Remote",
    description:
      "Built a basic banking site with multi-user transactions using ReactJS, Tailwind CSS and Firebase. Integrated Razorpay Payment Gateway for a donation-based project.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "JavaScript",
      "Razorpay",
    ],
  },
  {
    id: 6,
    company: "Vadodara Startup Festival",
    role: "Technical Team Member",
    type: "Volunteering",
    period: "Dec 2022",
    duration: "1 mo",
    location: "Vadodara, India",
    description:
      "Worked in the Technical Team, assisting companies on campus, filtering students, and helping companies identify potential interns throughout the festival.",
    technologies: [],
  },
];

export const achievements = [
  {
    title: "NPTEL Software Engineering - Top 5%",
    description:
      "Secured Top 5% rank in NPTEL Online Course of Software Engineering through IIT Kharagpur",
    icon: "trophy",
  },
  {
    title: "CodeChef Starters 45 - Rank 1315",
    description:
      "Secured a Rank of 1315 out of 15,000+ participants in CodeChef's Starters 45",
    icon: "medal",
  },
  {
    title: "C++ Certification - CISCO",
    description: "Certified in C++ Programming by CISCO Networking Academy",
    icon: "certificate",
  },
];

export const certifications = [
  {
    title: "Software Engineering",
    issuer: "NPTEL / IIT Kharagpur",
    badge: "Top 5%",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "C++ Programming",
    issuer: "CISCO Networking Academy",
    badge: "Certified",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Full Stack Development",
    issuer: "Professional Experience",
    badge: "Production",
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "CodeChef Competitive Coding",
    issuer: "CodeChef Starters 45",
    badge: "Rank 1315",
    color: "from-blue-500 to-cyan-400",
  },
];

export const gallery = [
  {
    title: "EnactOn Technologies - Work Life",
    cover: r2("/images/gallery-images/enacton/enacton-1.webp"),
    description: "Building production-grade platforms for European clients",
    images: [
      r2("/images/gallery-images/enacton/enacton-1.webp"),
      r2("/images/gallery-images/enacton/enacton-2.webp"),
      r2("/images/gallery-images/enacton/enacton-3.webp"),
      r2("/images/gallery-images/enacton/enacton-4.webp"),
      r2("/images/gallery-images/enacton/enacton-5.webp"),
    ],
  },
  {
    title: "Explorer Club - Technical Co-Lead",
    cover: r2("/images/gallery-images/explorer/explorer-1.webp"),
    description:
      "Leading technical events at Parul Institute of Technology with 500+ participants",
    images: [
      r2("/images/gallery-images/explorer/explorer-1.webp"),
      r2("/images/gallery-images/explorer/explorer-2.webp"),
      r2("/images/gallery-images/explorer/explorer-3.webp"),
      r2("/images/gallery-images/explorer/explorer-4.webp"),
      r2("/images/gallery-images/explorer/explorer-5.webp"),
      r2("/images/gallery-images/explorer/explorer-6.webp"),
      r2("/images/gallery-images/explorer/explorer-7.webp"),
      r2("/images/gallery-images/explorer/explorer-8.webp"),
      r2("/images/gallery-images/explorer/explorer-9.webp"),
      r2("/images/gallery-images/explorer/explorer-10.webp"),
      r2("/images/gallery-images/explorer/explorer-last.webp"),
    ],
  },
  {
    title: "Vadodara Startup Festival",
    cover: r2("/images/gallery-images/vsf/vsf-1.webp"),
    description: "Volunteering as Technical Team Member at the startup fest",
    images: [
      r2("/images/gallery-images/vsf/vsf-1.webp"),
      r2("/images/gallery-images/vsf/vsf-2.webp"),
      r2("/images/gallery-images/vsf/vsf-3.webp"),
      r2("/images/gallery-images/vsf/vsf-4.webp"),
      r2("/images/gallery-images/vsf/vsf-5.webp"),
      r2("/images/gallery-images/vsf/vsf-6.webp"),
      r2("/images/gallery-images/vsf/vsf-7.webp"),
      r2("/images/gallery-images/vsf/vsf-last.webp"),
    ],
  },
  {
    title: "Parul University - Campus Life",
    cover: r2("/images/gallery-images/parul/parul-0.webp"),
    description: "B.Tech Computer Science journey and campus activities",
    images: [
      r2("/images/gallery-images/parul/parul-0.webp"),
      r2("/images/gallery-images/parul/parul-1.webp"),
      r2("/images/gallery-images/parul/parul-2.webp"),
      r2("/images/gallery-images/parul/parul-3.webp"),
      r2("/images/gallery-images/parul/parul-5.webp"),
      r2("/images/gallery-images/parul/parul-6.webp"),
      r2("/images/gallery-images/parul/parul-7.webp"),
      r2("/images/gallery-images/parul/parul-8.webp"),
      r2("/images/gallery-images/parul/parul-9.webp"),
      r2("/images/gallery-images/parul/parul-10.webp"),
      r2("/images/gallery-images/parul/parul-11.webp"),
    ],
  },
  {
    title: "Innovation Ambassador",
    cover: r2("/images/gallery-images/pierc/pierc-1.webp"),
    description: "Student Innovation Ambassador at Parul Innovation Centre",
    images: [
      r2("/images/gallery-images/pierc/pierc-1.webp"),
      r2("/images/gallery-images/pierc/pierc-2.webp"),
      r2("/images/gallery-images/pierc/pierc-3.webp"),
      r2("/images/gallery-images/pierc/pierc-4.webp"),
      r2("/images/gallery-images/pierc/pierc-5.webp"),
    ],
  },
];
