export const profile = {
  name: "Amos Anand",
  title: "Software Engineer | Full-Stack Developer",
  tagline: "I design and build reliable, scalable web applications.",
  location: "Garhwa, Jharkhand, India",
  image: "/images/Author.jpg", // file should be at: public/images/Author.jpg
  social: {
    github: "https://github.com/BuiltByAmos-1801",
    linkedin: "https://www.linkedin.com/in/amos-anand-a1a57b390",
    twitter: "https://twitter.com/",
    email: "mailto:builtbiamos@gmail.com",
    resume: "/resume.pdf",
  },
};

export const education = [
  {
    school: "Garhwa Polytechnic",
    degree: "Diploma in Computer Science",
    period: "2024 - 2027",
    highlights: ["Pursuing Diploma in Computer Science with strong focus on software development and web technologies.", "Dean's List"],
  },
  {
    school: "BNT ST. Mary school",
    degree: "Matriculation",
    period: "2023 - 2024",
    highlights: ["Completed Matriculation with strong focus on basic subjects and computer science.", "Passed with 80% marks"],
  }
];



export const certifications = [
  { name: "Domestic Data Entry Operator", 
    issuer: "Shakti Infotech Pvt. Ltd.",
    period: "2025 September - 2025 October",
    highlights: ["Completed Domestic Data Entry Operator course with strong focus on data entry and data management.", "Dean's List"],
  },
];

export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Context API",
    "Bootstrap",
    "Flutter",
  ],
  backend: [
    "Node.js",
    "Express",
    "NestJS",
    "Python",
    "Flask",
    "FastAPI",
    "PHP",
    "Bash Script",
    "PowerShell",
  ],
  tools: [
    "Git",
    "GitHub",
    "GitLab CI",
    "Docker",
    "Prettier",
    "Adobe Acrobat Reader",
    "Adobe Audition",
    "Adobe After Effects",
    "Canva",
    "Figma",
    "Matplotlib",
    "NumPy",
    "Pandas",
    "PyTorch",
    "TensorFlow",
    "scikit-learn",
    "WordPress",
    "Glitch",
    "NPM",
    "Tor",
    "Windows Terminal",
  ],
  database: [
    "MySQL",
    "SQLite",
    "MariaDB",
    "Amazon DynamoDB",
    "Microsoft SQL Server",
  ],
  cloud: [
    "AWS",
    "Google Cloud",
    "Cloudflare",
    "Firebase",
    "Vercel",
  ],
  soft: ["Teamwork", "Problem-solving", "Communication"],
};

  export const projects = [
    {
      title: "BuiltByAmos Official",
      image: "/bbaportfolio.png",
      description: "My main development hub and personal repository for open-source experiments and web tools.",
      tech: ["JavaScript", "HTML", "CSS"],
      links: {
        live: "#",
        github: "https://github.com/BuiltByAmos-1801/BuiltByAmosOfficial"
      },
      details: "This serves as the central hub for my coding experiments, reusable components, and open-source utilities."
    },
    {
      title: "BuiltByAmos Portfolio",
      image: "/bbaportfolio1.png",
      description: "My personal developer portfolio showcasing skills, achievements, and project work.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      links: {
        live: "https://your-infinityfree-link.com", // Replace with your deployed site
        github: "https://github.com/BuiltByAmos-1801/BuiltByAmosPortfolio"
      },
      details: "A modern, responsive portfolio website designed to present my journey as a developer and showcase my work."
    },
    {
      title: "Portfolio BBA",
      image: "/bbalogo.png",
      description: "An alternate version of my developer portfolio built with creative animations and UI improvements.",
      tech: ["React.js", "CSS", "Framer Motion"],
      links: {
        live: "#",
        github: "https://github.com/BuiltByAmos-1801/PortfolioBBA"
      },
      details: "Built for experimentation with motion-based web design and smooth interactive UI elements."
    },
    {
      title: "Website Performance Analyzer",
      image: "/performance.png",
      description: "A tool that analyzes website speed, page size, and optimization score for developers.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js"],
      links: {
        live: "#",
        github: "https://github.com/BuiltByAmos-1801/Website-Performance-Analyzer"
      },
      details: "Built to measure website performance metrics and provide actionable suggestions for improvements."
    },
    {
      title: "SkyTale",
      image: "/skytale.png",
      description: "A data encryption and decryption project inspired by ancient cryptography methods.",
      tech: ["Python"],
      links: {
        live: "#",
        github: "https://github.com/BuiltByAmos-1801/SkyTale"
      },
      details: "Implements encryption logic using Python with a focus on algorithmic security understanding."
    },
    {
      title: "YtDownloader",
      image: "/ytdownload.png",
      description: "A YouTube video downloader for extracting videos in various formats.",
      tech: ["Python", "pytube"],
      links: {
        live: "#",
        github: "https://github.com/BuiltByAmos-1801/YtDownloader"
      },
      details: "Created as a utility project to explore API usage and file handling in Python."
    },
    {
      title: "BuiltByAmos-1801",
      image: "/brand.svg",
      description: "My core GitHub repository for experiments, open-source scripts, and testing projects.",
      tech: ["HTML", "CSS", "JavaScript"],
      links: {
        live: "#",
        github: "https://github.com/BuiltByAmos-1801/BuiltByAmos-1801"
      },
      details: "Contains base projects, templates, and code snippets for my development journey."
    },
    {
      title: "Termux Setup Error Fixer",
      image: "/public.images/termuxerrorfixer.png",
      description: "A Python script to automatically fix setup and dependency issues in Termux.",
      tech: ["Python", "Shell Script"],
      links: {
        live: "#",
        github: "https://github.com/BuiltByAmos-1801/TermuxSetupErrorFixer"
      },
      details: "Automates the correction of environment issues in Termux to streamline the developer setup process."
    },
    {
      title: "MERN E-Commerce Store",
      image: "/public/images/mern.png",
      description: "A full-stack online store application built using the MERN stack.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      links: {
        live: "#",
        github: "https://github.com/BuiltByAmos-1801/MERNECommerceStore"
      },
      details: "Implements cart, checkout, and product management features with responsive design and secure backend."
    },
    {
      title: "Desktop Assistant",
      image: "/bbaAI.png",
      description: "A smart desktop assistant powered by Python to perform automation and voice tasks.",
      tech: ["Python", "SpeechRecognition", "Tkinter"],
      links: {
        live: "#",
        github: "https://github.com/BuiltByAmos-1801/DesktopAssistant"
      },
      details: "Performs quick tasks and system operations via voice control, improving desktop productivity."
    }
  ];  

export const experience = [
  {
    company: "Joyal Services Pvt Ltd",
    role: "Manager",
    period: "2024 – Present",
    points: [
      "Managing software development initiatives and delivery timelines",
      "Coordinating staffing solutions for construction sites and partner companies",
      "Collaborating across teams to ensure quality and on‑time releases",
    ],
  },
  {
    company: "Shakti Infotech Pvt. Ltd.",
    role: "Domestic Data Entry Operator",
    period: "September – November 2025",
    points: [
      "Handled structured data entry and validation tasks with accuracy",
      "Maintained records and generated basic reports as required",
    ],
  },
];

export const posts = [
  {
    title: "Optimizing React Performance",
    excerpt: "Practical tips for profiling and reducing unnecessary renders...",
    href: "/blog/optimizing-react-performance",
    date: "2025-05-10",
    tags: ["React", "Performance"],
    content:
      "React apps can feel slow due to unnecessary re-renders and heavy bundles.\n\nIn this post, we cover memoization (useMemo/useCallback), virtualization for large lists, code splitting with dynamic imports, and profiling tools to identify hotspots. We also look at when to use React.memo and when it hurts."
  },
  {
    title: "A Practical Guide to TypeScript",
    excerpt: "Patterns for safe, readable type systems...",
    href: "/blog/a-practical-guide-to-typescript",
    date: "2025-06-02",
    tags: ["TypeScript"],
    content:
      "TypeScript improves confidence but can add complexity.\n\nThis guide walks through common patterns: discriminated unions, narrowing, utility types, proper generics, and avoiding any. We include examples to refactor JS codebases incrementally without blocking delivery."
  },
  {
    title: "Getting Started with Next.js 14",
    excerpt: "App Router basics, file conventions, and server/client components.",
    href: "/blog/getting-started-with-nextjs-14",
    date: "2025-07-15",
    tags: ["Next.js"],
    content:
      "Next.js 14 emphasizes the App Router with server components, layouts, and loading states.\n\nWe set up routes, metadata, dynamic segments, and data fetching. We also cover when to mark a file with 'use client' and how to share types across server and client boundaries."
  },
  {
    title: "Tailwind CSS Tips for Clean UI",
    excerpt: "Utility-first workflows, theming, and responsive patterns.",
    href: "/blog/tailwind-css-tips-for-clean-ui",
    date: "2025-08-03",
    tags: ["Tailwind", "CSS"],
    content:
      "Tailwind enables fast iteration when used with conventions.\n\nWe discuss extracting components, using design tokens, dark mode strategies, container queries, and keeping class names maintainable with composition and variants."
  },
  {
    title: "Node.js API Best Practices",
    excerpt: "Structuring controllers, validation, errors, and security basics.",
    href: "/blog/nodejs-api-best-practices",
    date: "2025-09-20",
    tags: ["Node.js", "API"],
    content:
      "Robust APIs need clear structure and safety.\n\nWe cover route modularization, schema validation (zod), error handling with typed results, authentication basics, rate limiting, and observability hooks for logging and metrics."
  },
];

export const testimonials = [
  {
    name: "Ashish Kumar",
    role: "Client, Ranchi",
    quote: "Amos developed our complete pharmacy website and store, Rapid Cure Pharma, with excellent attention to detail and professionalism."
  },
  {
    name: "Sadiq Ali Khan",
    role: "Rapper",
    quote: "I got my artist website built by Amos, where I can promote new rap videos and share my lifestyle. The site is fast, well-designed, and easy to update. Highly recommended!"
  },
  {
    name: "Prashant Kumar",
    role: "Director, Joyal Services Pvt Ltd",
    quote: "Amos is a reliable manager who helped streamline our software projects at Joyal Services Pvt Ltd. His technical and leadership skills are commendable."
  },
];


