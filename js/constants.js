// ===== SOCIAL LINKS =====
const SOCIAL_LINKS = {
  github: {
    url: 'https://github.com/Code-With-Ahmad',
    label: 'GitHub',
    icon: 'github',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/israr-ul-haq-a395b9197',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  email: {
    url: 'mailto:israrulhaq764@gmail.com',
    label: 'Email',
    icon: 'mail',
    address: 'israrulhaq764@gmail.com',
  },
  whatsapp: {
    url: 'https://wa.me/923134696144',
    label: 'Chat on WhatsApp',
  },
  phone: {
    url: 'tel:+923134696144',
    label: 'Phone',
    display: '+92 313 4696144',
  },
};

// ===== PERSONAL INFO =====
const PERSONAL_INFO = {
  name: 'Israr Ul Haq',
  role: 'MERN Stack Developer',
  experience: '6+',
  cvPath: 'assets/Israr ul Haq _ Resume.pdf',
  heroDescription:
    'Israr is a results-driven senior full-stack developer with strong experience in building scalable platforms and cloud-based solutions. He has led teams and delivered high-performance applications serving thousands of users, from real-time systems to complex web platforms. Known for solving challenging technical problems, Israr turns innovative ideas into reliable, production-ready products.',
  profileImage: 'assets/images/israr.jpg',
  location: 'Lahore, Pakistan',
  topTalLink:"https://www.toptal.com/developers/resume/israr-ul-haq",
};

// ===== ABOUT STAT CARDS =====
const ABOUT_STATS = [
  { value: '6+', label: 'Years Experience' },
  { value: '20+', label: 'Technologies Mastered' },
  { value: '5+', label: 'Products Launched' },
  { value: '100%', label: 'Production-Grade Code' },
];
// ===== SKILLS =====
const SKILLS = [
  {
    title: 'Frontend',
    subtitle: 'UI & Client-Side',
    icon: 'layout',
    color: 'primary',
    tags: [
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Redux',
      'React Native',
      'Tailwind CSS',
      'Atomic Design',
      'SVG Animations',
      'PWA',
    ],
  },
  {
    title: 'Backend & Cloud',
    subtitle: 'APIs & Infrastructure',
    icon: 'server',
    color: 'accent',
    tags: [
      'Node.js',
      'Express.js',
      'AdonisJS',
      'GraphQL',
      'REST APIs',
      'AWS Lambda',
      'API Gateway',
      'EventBridge',
      'SQS',
      'Webhooks',
      'Stripe',
    ],
  },
  {
    title: 'Databases',
    subtitle: 'Storage & Data Management',
    icon: 'database',
    color: 'purple-500',
    tags: [
      'PostgreSQL',
      'DynamoDB',
      'MongoDB',
      'SQL',
    ],
  },
  {
    title: 'DevOps & Tools',
    subtitle: 'Workflow & Testing',
    icon: 'wrench',
    color: 'emerald-500',
    tags: [
      'AWS (EC2, S3, Amplify, ECS)',
      'Firebase',
      'CloudWatch',
      'CI/CD',
      'Git',
      'Playwright',
      'Cypress',
      'Jest',
    ],
  },
  {
    title: 'AI & Automation',
    subtitle: 'Emerging Tools',
    icon: 'sparkles',
    color: 'accent',
    tags: [
      'n8n',
      'OpenClaw',
      'Claude Code',
      'Workflow Automation',
    ],
  },
];
// ===== EXPERIENCE =====
const EXPERIENCE = [
  {
    title: 'Senior Software Engineer',
    company: 'Nextek Solutions',
    location: 'Model Town, Lahore',
    period: 'Apr 2025 — Apr 2026',
    badge: 'On-Site Full-Time',
    color: 'primary',
    icon: 'building-2',
    points: [
      'Developed a scalable white-label healthcare platform using React.js, Redux, and AWS Lambda to support diagnostics and lab management workflows across multiple clients.',
      'Ensured system reliability by implementing end-to-end testing with Playwright for critical user journeys and reporting processes.'
    ],
  },

  {
    title: 'Software Engineer',
    company: 'JinnByte',
    location: 'Lahore , Pakistan',
    period: 'Jan 2022 — Mar 2025',
    badge: 'On-Site Full-Time',
    color: 'purple-400',
    icon: 'building-2',
    points: [
      'Built and enhanced multiple marketplace and gaming platforms by integrating real-time features, secure payment systems, and scalable UI architectures, significantly improving user experience and customization.',
      'Optimized operational efficiency through automation, reusable design systems, and progressive web technologies, reducing development and hiring time while increasing user trust and platform performance.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Status200',
    location: 'Lahore , Pakistan',
    period: 'Jun 2020 — Dec 2021',
    badge: 'On-Site Full-Time',
    color: 'sky-400',
    icon: 'landmark',
    points: [
      'I created a modern and creative-looking website design for the photographer and designer',
      'I  catered for the image sizes to ensure a fast-loading website placing emphasis on performance and user experience',
    ],
  },
];

// ===== EDUCATION =====
const EDUCATION = [
  {
    institution: 'National College of Business Administration & Economics (NCBA&E), Lahore',
    degree: "Bachelor of Science in Computer Science",
    period: 'Aug 2016 — June 2020',
    badgeText: 'Graduated',
    badgeId: 'grad',
    color: 'accent',
    icon: 'graduation-cap',
    cgpa: '3.67',
  },

];

// ===== PROJECTS =====
const PROJECTS = [
  {
    title: 'MedFlow LLC',
    icon: 'heart-pulse',
    featured: true,
    tags: ['Healthcare', 'Laboratory'],
    tagColors: ['primary', 'accent'],
    description:
      'A large-scale white-label healthcare platform used by labs and hospitals to manage diagnostics and reporting, enabling scalable and customizable solutions for multiple clients.',
    points: [
      'Built a white-label lab management system using React.js, Redux, and AWS Lambda',
      'Designed scalable architecture to support diagnostics and reporting workflows',
      'Implemented end-to-end testing with Playwright for critical workflows',
    ],
    techStack: ['React.js', 'Redux', 'AWS Lambda', 'Playwright'],
  },
  {
    title: 'Sparrow',
    icon: 'briefcase',
    featured: true,
    tags: ['Marketplace', 'Freelance'],
    tagColors: ['primary', 'accent'],
    description:
      'A US-based work marketplace that connects users with vetted professionals for daily tasks, focusing on trust and efficiency.',
    points: [
      'Integrated in-app chat and profile verification systems',
      'Automated freelancer profile review, reducing hiring time by 40%',
      'Improved user trust by 60% through vetted profile mechanisms',
    ],
    techStack: ['React.js', 'Node.js', 'Real-time Systems'],
  },
  {
    title: 'Dopewarz',
    icon: 'gamepad-2',
    featured: false,
    tags: ['NFT', 'Gaming'],
    tagColors: ['accent'],
    description:
      'An NFT-based gaming platform where users compete and trade rare digital collectibles with enhanced customization features.',
    points: [
      'Integrated SVG-based dynamic elements for real-time asset updates',
      'Enhanced in-game customization and interactivity',
      'Applied atomic design principles, reducing development time by 25%',
    ],
    techStack: ['React.js', 'SVG', 'Web3', 'Atomic Design'],
  },
  {
    title: 'El Ropera',
    icon: 'gavel',
    featured: false,
    tags: ['Marketplace', 'Bidding'],
    tagColors: ['primary'],
    description:
      'A Bolivia-based bidding marketplace enabling users to trade items efficiently with fast and secure payment systems.',
    points: [
      'Integrated QR-based payments via Banco Nacional de Bolivia',
      'Improved payment processing speed by 30%',
      'Delivered PWA solution, reducing mobile app delivery time by 200%',
    ],
    techStack: ['PWA', 'React.js', 'QR Payments'],
  },
  {
    title: 'David Ellis Portfolio',
    icon: 'camera',
    featured: false,
    tags: ['Portfolio', 'Design'],
    tagColors: ['accent'],
    description:
      'A modern portfolio website for a photographer and designer, focused on visual appeal and performance optimization.',
    points: [
      'Designed a modern and creative portfolio UI',
      'Optimized image handling for fast loading performance',
      'Improved overall user experience and responsiveness',
    ],
    techStack: ['HTML', 'CSS', 'JavaScript'],
  },
];

// ===== CONTACT =====
const CONTACT_INFO = {
  description: 'Have a project in mind or want to collaborate? Feel free to reach out!',
  formSubject: 'New Portfolio Contact Message',
};
