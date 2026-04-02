// ===== SOCIAL LINKS =====
const SOCIAL_LINKS = {
  github: {
    url: 'https://github.com/arslanahmadiub',
    label: 'GitHub',
    icon: 'github',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/arslanahmadiub/',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  twitter: {
    url: 'https://x.com/arslanahmadiub',
    label: 'X (Twitter)',
    icon: 'twitter',
  },
  email: {
    url: 'mailto:arslanahmadbwn@gmail.com',
    label: 'Email',
    icon: 'mail',
    address: 'arslanahmadbwn@gmail.com',
  },
  whatsapp: {
    url: 'https://wa.me/923166423843',
    label: 'Chat on WhatsApp',
  },
  phone: {
    url: 'tel:+923166423843',
    label: 'Phone',
    display: '+92 316 6423843',
  },
};

// ===== PERSONAL INFO =====
const PERSONAL_INFO = {
  name: 'Arslan Ahmad',
  role: 'Senior Full-Stack Engineer | Toptal Certified (Top 3%) | AWS Cloud Architect | React, Node.js & Serverless Expert.',
  experience: '6+',
  heroDescription:
    'Dynamic Full Stack Software Engineer with 6+ years of experience building scalable web applications. Skilled in developing robust, API-driven solutions, managing databases, and deploying efficient, high-performance systems. Experienced with modern tools, cloud services, and streamlined development workflows, with a strong focus on performance, user experience, and delivering reliable digital solutions.',
  profileImage: 'assets/images/arslan.png',
  location: 'Lahore, Pakistan',
  topTalLink:"https://www.toptal.com/resume/internal/6029607",
};

// ===== ABOUT STAT CARDS =====
const ABOUT_STATS = [
  { value: '6+', label: 'Years of Experience' },
  { value: '20+', label: 'Tech Stack' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Dedicated Support' },
];

// ===== SKILLS =====
const SKILLS = [
  {
    title: 'Frontend',
    subtitle: 'UI & Client-Side',
    icon: 'layout',
    color: 'primary',
    tags: ['JavaScript', 'React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'HTML5' , 'CSS3' , 'Responsive Web Design' , 'WebSocket'],
  },
  {
    title: 'Backend & Cloud',
    subtitle: 'APIs & Infrastructure',
    icon: 'server',
    color: 'accent',
    tags: ['Node.js','Express.js', 'GraphQL', 'REST APIs','AWS Lambda', 'AWS S3' , 'API Gateway', 'AWS VPC' , 'AWS EC2' , 'AWS Amplify' , 'Google APIs' , 'Firebase', 'VPS ',  'DigitalOcean' , 'Microservices Architecture' , 'Authentication (JWT, OAuth)' , 'Web Security Best Practices' , 'Server Management'],
  },
  {
    title: 'Databases',
    subtitle: 'Storage & Queries',
    icon: 'database',
    color: 'purple-500',
    tags: ['MongoDB','MySQL','PostgreSQL','DynamoDB','SQL'],
  },
  {
    title: 'DevOps & Tools',
    subtitle: 'Workflow & Automation',
    icon: 'wrench',
    color: 'emerald-500',
    tags: ['Git', 'GitHub' , 'GitHub Actions', 'CI/CD Pipelines', 'Docker', 'Nginx' , 'Linux/Unix' , 'Cloud Deployment' , 'Performance Optimization' , 'Agile Methodologies' , 'Scrum'],
  },
];

// ===== EXPERIENCE =====
const EXPERIENCE = [
  {
    title: 'Full-Stack Developer',
    company: 'Nextek Solutions',
    location: 'Model Town, Lahore , Pakistan',
    period: 'Dec 2022 — Present',
    badge: 'On-Site - Full-Time',
    color: 'primary',
    icon: 'building-2',
    points: [
      'Built a full-stack application using React, Node.js, and AWS Lambda with GraphQL DataStore, improving real-time data sync and user experience by 25%.',
      'Implemented AWS Amplify and DynamoDB for a cost-efficient, secure backend, reducing infrastructure costs by 30% and enhancing billing transaction scalability'
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Infostack Tech',
    location: 'Lahore , Pakistan',
    period: 'Dec 2021 — Dec 2022',
    badge: 'On-Site - Full-Time',
    color: 'purple-400',
    icon: 'building-2',
    points: [
      'Developed and implemented a new online billing flow for Crewmama, a US-based shoots service platform with 11K+ active users, using Node.js, React, and MySQL, improving transaction efficiency by 20%.',
      'Acted as a full-stack engineer, resolving critical production issues and maintaining system reliability for Crewmama’s global services, leveraging Node.js for backend and React for frontend development.',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Spark AI',
    location: 'Lahore , Pakistan',
    period: 'May 2020 — Nov 2021',
    badge: 'On-Site - Full-Time',
    color: 'sky-400',
    icon: 'landmark',
    points: [
      'Contributed to the full-stack development of Powrsale (app.powrsale.com), a social commerce escrow platform, using Node.js and React, enhancing secure transaction flows for online buyers and sellers.',
      'Engineered GlobalHot20(globalhot20.com), a platform showcasing global trending videos,leveraging Node.js and MySQL to deliver real-time content updates forenhanced user engagement.',
    ],
  },
];

// ===== EDUCATION =====
const EDUCATION = [
  {
    institution: 'Islamia University of Bahawalpur',
    degree: "BS Computer Science",
    period: 'Feb 2016 — Feb 2020',
    badgeText: 'Graduated',
    badgeId: 'grad',
    color: 'accent',
    icon: 'graduation-cap',
    cgpa: '3.5',
  },
];

// ===== PROJECTS =====
const PROJECTS = [
  {
    title: 'Medflow LLC',
    icon: 'heart-pulse',
    featured: true,
    tags: ['Healthcare', 'Laboratory'],
    tagColors: ['primary', 'accent'],
    description:
      'A comprehensive Laboratory Management System for the healthcare industry. The platform is split into two core modules — <span class="text-gray-900 dark:text-white font-medium">Alpha (LIS)</span> and <span class="text-gray-900 dark:text-white font-medium">Omega (Billing)</span> — that together handle the full lifecycle from patient testing to revenue management.',
    modules: [
      {
        name: 'MedFlow Alpha (LIS)',
        subtitle: 'Laboratory Information System',
        icon: 'flask-conical',
        color: 'primary',
        points: [
          'Manages patient records, test orders, and lab results',
          'Handles report generation and real-time data processing',
          'Built feature modules and performance optimizations',
        ],
        // link: 'https://www.portal.medflowllc.com/',
        // linkText: 'Visit Alpha Portal',
      },
      {
        name: 'MedFlow Omega',
        subtitle: 'Billing & Revenue Management',
        icon: 'receipt',
        color: 'accent',
        points: [
          'Manages billing workflows and revenue cycle',
          'Handles invoicing, claims, and payment tracking',
          'Contributed to module enhancements and UI improvements',
        ],
        // link: 'https://www.colab.medflowllc.com/',
        // linkText: 'Visit Omega Portal',
      },
    ],
    techStack: ['React.js', 'GraphQL', 'AWS Amplify', 'AWS Lambda', 'DynamoDB', 'CloudWatch'],
  },
  {
    title: 'Ecommerce Platform',
    icon: 'shopping-cart',
    featured: false,
    tags: ['E-Commerce'],
    tagColors: ['accent'],
    points: [
      'Built a modern eCommerce UI with responsive design',
      'Implemented cart, authentication, and product management',
      'Integrated APIs and improved user experience',
    ],
    techStack: ['Next.js', 'Stripe', 'Node.js', 'MongoDB'],
  },
];

// ===== CONTACT =====
const CONTACT_INFO = {
  description: 'Have a project in mind or want to collaborate? Feel free to reach out!',
  formSubject: 'New Portfolio Contact Message',
};
