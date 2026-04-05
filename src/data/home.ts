export interface NavLink {
  href: string;
  title: string;
  label: string;
}

export interface HeroData {
  eyebrow: string;
  name: string;
  role: string;
  description: string;
  cvHref: string;
  githubHref: string;
  linkedinHref: string;
  photoSrc: string;
  photoAlt: string;
}

export interface AboutHighlight {
  title: string;
  text: string;
}

export interface SkillsGroup {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  points: string[];
}

export interface EducationItem {
  badge: string;
  title: string;
  org: string;
  date: string;
  pdfHref: string;
  previewClass: string;
  thumbSrc: string;
  thumbAlt: string;
  ariaLabel: string;
}

export interface FeaturedProject {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  tags: string[];
  codeHref: string;
  detailsHref?: string;
}

export const navLinks: NavLink[] = [
  { href: '#home', title: 'home', label: 'HOME' },
  { href: '#about', title: 'about', label: 'ABOUT' },
  { href: '#proyectos', title: 'projects', label: 'PROJECTS' },
  { href: '#experiencia', title: 'experience', label: 'EXPERIENCE' },
  { href: '#educacion', title: 'education', label: 'EDUCATION' },
  { href: '#contact', title: 'contact', label: 'CONTACT' }
];

export const heroData: HeroData = {
  eyebrow: 'Software Engineer',
  name: 'Valentina Morales',
  role: 'Software Engineer / Backend Developer',
  description:
    'I design backend architectures, ship cloud deployments, and build AI-powered automations that help businesses move faster, from system design to production.',
  cvHref: '/CV_Valentina_Morales_Sanchez_go_and_python.pdf',
  githubHref: 'https://github.com/ValenMorales',
  linkedinHref: 'https://www.linkedin.com/in/valentina-morales-sanchez-a1916a1b6/',
  photoSrc: '/assets/perfil.jpeg',
  photoAlt: 'Valentina Morales'
};

export const aboutLead =
  'Software Engineer with 2 years of experience building backend and web solutions with a strong focus on reliability and execution quality.';

export const aboutParagraphs = [
  'I work with Python and Go across API integrations, data workflows, and software automation. My current work includes analyzing complex code implementations, debugging edge cases, and validating behavior in containerized environments.',
  'I am especially interested in Linux systems, scalable backend architecture, and shipping practical features that improve product performance and team velocity.'
];

export const aboutHighlights: AboutHighlight[] = [
  {
    title: 'Backend Engineering',
    text: 'Python, Go, APIs, and service-to-service integrations.'
  },
  {
    title: 'Code Quality',
    text: 'Debugging, edge-case analysis, and correctness validation.'
  },
  {
    title: 'Automation',
    text: 'Workflow scripting to reduce repetitive operational tasks.'
  },
  {
    title: 'Environment',
    text: 'Docker and Linux-based execution for reliable delivery.'
  }
];

export const skillsGroups: SkillsGroup[] = [
  {
    title: 'Languages',
    items: ['Python', 'Go', 'JavaScript', 'TypeScript', 'SQL']
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Django', 'Flask', 'REST APIs', 'Automation Workflows']
  },
  {
    title: 'Infra & Tools',
    items: ['Docker', 'Linux', 'Git', 'PostgreSQL', 'MySQL']
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    period: 'Aug 2025 - Present',
    role: 'Software Engineer for AI Training',
    company: 'Scale AI',
    points: [
      'Analyze and evaluate complex software engineering tasks using Python, Go, and JavaScript.',
      'Debug implementations, identify logical gaps, and validate edge cases in multi-language codebases.',
      'Reproduce behavior in containerized environments to ensure technical correctness and execution reliability.'
    ]
  },
  {
    period: 'Aug 2024 - Aug 2025',
    role: 'Software Engineer',
    company: 'Kommit',
    points: [
      'Built and maintained backend services and API integrations across web platforms.',
      'Developed automation workflows to reduce repetitive operational tasks and improve delivery speed.',
      'Worked with Python, PHP, and SQL-based processing to support production-ready features.'
    ]
  }
];

export const educationItems: EducationItem[] = [
  {
    badge: 'Degree',
    title: 'B.Sc. in Systems Engineering (Computer Science equivalent)',
    org: 'Universidad Autonoma de Manizales',
    date: '2020 - 2025',
    pdfHref: '/acta_grado.pdf',
    previewClass: 'education-preview--cv',
    thumbSrc: '/assets/education-thumbs/acta_grado.png',
    thumbAlt: 'Degree certificate thumbnail',
    ariaLabel: 'Open degree document PDF'
  },
  {
    badge: 'Certification',
    title: 'Aptis English Test (B2)',
    org: 'British Council',
    date: 'Completed in 2023',
    pdfHref: '/aptis_results.pdf',
    previewClass: 'education-preview--aptis',
    thumbSrc: '/assets/education-thumbs/aptis_results.png',
    thumbAlt: 'Aptis credential thumbnail',
    ariaLabel: 'Open Aptis credential PDF'
  },
  {
    badge: 'Certification',
    title: 'Machine Learning with MATLAB',
    org: 'MathWorks',
    date: 'Completed in 2023',
    pdfHref: '/machine_learning.pdf',
    previewClass: 'education-preview--matlab',
    thumbSrc: '/assets/education-thumbs/machine_learning.png',
    thumbAlt: 'Machine learning certificate thumbnail',
    ariaLabel: 'Open MATLAB certificate PDF'
  }
];

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Code Beaters',
    imageSrc: '/assets/codebeaters.png',
    imageAlt: 'Code Beaters project preview',
    description: 'Platform for creating and solving algorithm and SQL challenges.',
    tags: ['Web App', 'Algorithms', 'SQL'],
    codeHref: 'https://github.com/JustTwoDevs',
    detailsHref: '/projects'
  },
  {
    title: 'Rest Food',
    imageSrc: '/assets/popular-foods.png',
    imageAlt: 'Rest Food project preview',
    description: 'Responsive restaurant landing page built as a frontend design exercise.',
    tags: ['HTML', 'CSS', 'Responsive'],
    codeHref: 'https://github.com/ValenMorales/RestFood',
    detailsHref: '/projects'
  },
  {
    title: 'Data Structures',
    imageSrc: '/assets/mapa.png',
    imageAlt: 'Data Structures project preview',
    description: 'Interactive visual implementation of core data structures using Python.',
    tags: ['Python', 'Pygame', 'Data Structures'],
    codeHref: 'https://github.com/ValenMorales/final-proyect',
    detailsHref: '/projects'
  },
  {
    title: 'Chat App',
    imageSrc: '/assets/sockets.png',
    imageAlt: 'Chat App project preview',
    description: 'Messaging application with user auth, friends, groups, and real-time chat.',
    tags: ['Real-time', 'Sockets', 'Web App'],
    codeHref: 'https://github.com/ValenMorales/chat-app'
  },
  {
    title: 'Sharability',
    imageSrc: '/assets/sharability.png',
    imageAlt: 'Sharability project preview',
    description: 'Skill-sharing platform concept with payments and service exchange flows.',
    tags: ['Product UI', 'Marketplace', 'Design System'],
    codeHref: 'https://github.com/ValenMorales/practice'
  }
];
