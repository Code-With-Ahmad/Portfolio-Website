// ===== SOCIAL LINKS =====
const SOCIAL_LINKS = {
  github: {
    url: 'https://github.com/Code-With-Ahmad',
    label: 'GitHub',
    icon: 'github',
  },
  linkedin: {
    url: 'https://www.linkedin.com/in/muhammad-ahmad-1aq/',
    label: 'LinkedIn',
    icon: 'linkedin',
  },
  twitter: {
    url: 'https://x.com/ahmadnaeem6277',
    label: 'X (Twitter)',
    icon: 'twitter',
  },
  email: {
    url: 'mailto:devahmadofficial@gmail.com',
    label: 'Email',
    icon: 'mail',
    address: 'devahmadofficial@gmail.com',
  },
  whatsapp: {
    url: 'https://wa.me/923221008034',
    label: 'Chat on WhatsApp',
  },
  phone: {
    url: 'tel:+923221008034',
    label: 'Phone',
    display: '+92 322 1008034',
  },
};

// ===== PERSONAL INFO =====
const PERSONAL_INFO = {
  name: 'Ahmad',
  role: 'Web Developer',
  experience: '1.5+',
  heroDescription:
    'Passionate web developer with experience in building scalable and user-friendly applications. Skilled in modern frontend technologies and focused on writing clean, efficient, and maintainable code.',
  profileImage: 'assets/images/ahmad.png',
  location: 'Lahore, Pakistan',
};

// ===== ABOUT STAT CARDS =====
const ABOUT_STATS = [
  { value: '1.5+', label: 'Years of Experience' },
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
    tags: ['JavaScript', 'React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'Context API', 'Pug', 'Mono Repo'],
  },
  {
    title: 'Backend & Cloud',
    subtitle: 'APIs & Infrastructure',
    icon: 'server',
    color: 'accent',
    tags: ['Node.js', 'GraphQL', 'API Integration', 'AWS Amplify', 'AWS Subscription', 'AWS Lambda', 'Stripe', 'ORM' , "Payload CMS"],
  },
  {
    title: 'Databases',
    subtitle: 'Storage & Queries',
    icon: 'database',
    color: 'purple-500',
    tags: ['DynamoDB', 'PostgreSQL', 'SQL', 'MongoDB'],
  },
  {
    title: 'DevOps & Tools',
    subtitle: 'Workflow & Automation',
    icon: 'wrench',
    color: 'emerald-500',
    tags: ['Git', 'GitHub Actions', 'CloudWatch', 'Cursor AI', 'Prompt Engineering'],
  },
];

// ===== EXPERIENCE =====
const EXPERIENCE = [
  {
    title: 'Web Developer',
    company: 'Nextek Solutions',
    location: 'Model Town, Lahore',
    period: 'Feb 2025 — Apr 2026',
    badge: 'Recent',
    color: 'primary',
    icon: 'building-2',
    points: [
      '1+ year of professional experience in web development',
      'Worked on real-world scalable applications including Medflow LLC',
      'Contributed to feature development, performance optimization, and module enhancements',
      'Collaborated with cross-functional teams to deliver high-quality solutions',
    ],
  },
  {
    title: 'Web Developer Trainee',
    company: 'SeeBiz Pvt Ltd',
    location: 'Jail Road, Lahore',
    period: 'Aug 2024 — Dec 2024',
    badge: 'Trainee',
    color: 'accent',
    icon: 'building-2',
    points: [
      'Trained in professional web development workflows and best practices',
      'Gained hands-on experience with real-world projects and team collaboration',
    ],
  },
  {
    title: 'Web Developer Intern',
    company: 'Delta Tech Solutions',
    location: 'Zam Zam Mall , Baghbanpura , Lahore',
    period: 'Mar 2024 — Jul 2024',
    badge: 'Internship',
    color: 'purple-400',
    icon: 'building-2',
    points: [
      'Completed a 3-month internship focused on web development',
      'Built and contributed to live projects under professional mentorship',
    ],
  },
  {
    title: 'Web Development Bootcamp',
    company: 'University of Engineering and Technology (UET), Lahore',
    location: 'Singhpura, Lahore',
    period: 'Jun 2023 — Aug 2023',
    badge: 'Bootcamp',
    color: 'sky-400',
    icon: 'landmark',
    points: [
      'Completed an intensive 3-month web development bootcamp',
      'Built foundational skills in HTML, CSS, JavaScript, and modern frameworks',
    ],
  },
];

// ===== EDUCATION =====
const EDUCATION = [
  {
    institution: 'Gomal University',
    degree: "Bachelor's Degree (BSCS)",
    period: 'Sept 2022 — Sept 2026',
    badgeText: 'Graduating 2026',
    badgeId: 'grad-status',
    color: 'accent',
    icon: 'graduation-cap',
    cgpa: '3.5',
  },
  {
    institution: 'Apex College',
    degree: 'Intermediate in Computer Science (ICS)',
    period: '2020 — 2022',
    badgeText: 'Completed',
    color: 'primary',
    icon: 'book-open',
    location: 'Daroghawala, Lahore',
  },
  {
    institution: 'Dar-e-Arqam School',
    degree: 'Matriculation',
    period: '2008 — 2020',
    badgeText: 'Completed',
    color: 'gray',
    icon: 'school',
    location: 'SalamatPura, Lahore',
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
