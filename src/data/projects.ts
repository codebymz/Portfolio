// Project data from data.md section 5

export interface FeaturedProject {
  title: string;
  slug: 'paper-genai' | 'hbs-admin-portal' | 'spice-garden' | 'zapr' | 'speed-lab' | 'mznexora' | string;
  summary: string;
  whatItDoes: string[];
  stack: string[] | 'TODO';
  liveUrl?: string;
  isComingSoon?: boolean;
  githubUrl?: string;
  isPrivateRepo?: boolean;
  screenshot?: string | 'TODO';
  videoUrl?: string;
  images?: string[];
}

export interface OtherProject {
  name: string;
  description: string;
  stack: string[] | 'TODO';
  liveUrl?: string;
  githubUrl?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Paper GenAI',
    slug: 'paper-genai',
    summary: 'Students in classes 9 to 12 pick one of their books and generate an exam paper from it.',
    whatItDoes: [
      'Generates a paper from a chosen book',
      'MCQ quizzes with scoring, so students can check their exam preparation',
      'A chatbot for study questions',
      'Save, print and download generated papers',
      'Light and dark theme',
    ],
    stack: ['React', 'Next.js', 'Python', 'FastAPI', 'RAG', 'Gemini API', 'Groq API'],
    liveUrl: 'https://paper-genai.vercel.app',
    githubUrl: 'https://github.com/codebymz/paper-genai',
    screenshot: '/projects/paper-genai.jpg',
  },
  {
    title: 'HBS Admin Portal',
    slug: 'hbs-admin-portal',
    summary: 'An office management system for a school. Staff manage student fees, class attendance and other records in one place.',
    whatItDoes: [
      'Student fee management',
      'Class attendance',
      'Other school office records and student administration',
      'Sign-in handled securely by Clerk',
    ],
    stack: ['React', 'Next.js', 'Python', 'FastAPI', 'Clerk'],
    isPrivateRepo: true,
    screenshot: '/projects/hbs-admin-portal.png',
  },
  {
    title: 'Spice Garden',
    slug: 'spice-garden',
    summary: 'A table ordering system for a restaurant. Each table has a QR code, and customers order from their phone.',
    whatItDoes: [
      'Every table has a QR code that carries its table number',
      'Scanning opens the interactive digital menu',
      'The customer places the order directly from their phone',
      'The order appears instantly on the kitchen display screen',
    ],
    stack: ['React', 'Next.js', 'FastAPI', 'Tailwind CSS'],
    githubUrl: 'https://github.com/codebymz/spice-garden-restaurant',
    screenshot: 'TODO',
  },
  {
    title: 'ZAPR',
    slug: 'zapr',
    summary: 'A file conversion tool that converts documents between multiple formats quickly and securely.',
    whatItDoes: [
      'Converts files between multiple formats, such as PPT to PDF, PDF to Excel, Excel to Word',
      'Client-side file validation and optimized server conversion pipeline',
      'Instant download of converted files',
    ],
    stack: ['React', 'Python', 'FastAPI'],
    isComingSoon: true,
    githubUrl: 'https://github.com/codebymz/zapr',
    screenshot: 'TODO',
  },
  {
    title: 'Speed Lab',
    slug: 'speed-lab',
    summary: 'A high-performance typing speed test and network speed diagnostic web application.',
    whatItDoes: [
      'Accurate typing test measuring Words Per Minute (WPM) and accuracy percentage',
      'Network speed test measuring ping latency, download speed, and upload throughput',
      'Interactive real-time charts and score tracking',
    ],
    stack: ['React', 'Python', 'FastAPI'],
    liveUrl: 'https://speed-lab.vercel.app',
    githubUrl: 'https://github.com/codebymz/Speed-Lab',
    screenshot: '/projects/speed-lab.png',
  },
  {
    title: 'MZ Nexora',
    slug: 'mznexora',
    summary: 'Official agency platform for MZ Nexora, featuring an AI chatbot that answers questions about services and solutions.',
    whatItDoes: [
      'Digital agency services and portfolio showcase',
      'Integrated intelligent chatbot answering customer inquiries in real time',
      'Consultation booking and lead generation system',
      'Fully responsive modern liquid glass UI',
    ],
    stack: ['React', 'Next.js', 'FastAPI', 'AI Chatbot', 'Tailwind CSS'],
    liveUrl: 'https://mznexora.vercel.app',
    githubUrl: 'https://github.com/codebymz/mznexora',
    screenshot: '/projects/mznexora.png',
  },
];

export const otherProjects: OtherProject[] = [];
