// Project data from data.md section 5

export interface FeaturedProject {
  title: string;
  slug: 'paper-genai' | 'hbs-admin-portal' | 'spice-garden' | 'zapr';
  summary: string;
  whatItDoes: string[];
  stack: string[] | 'TODO';
  liveUrl?: string;
  isComingSoon?: boolean;
  githubUrl?: string;
  isPrivateRepo?: boolean;
  screenshot: string | 'TODO';
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
    screenshot: 'TODO',
  },
  {
    title: 'HBS Admin Portal',
    slug: 'hbs-admin-portal',
    summary: 'An office management system for a school. Staff manage student fees, class attendance and other records in one place.',
    whatItDoes: [
      'Student fee management',
      'Class attendance',
      'Other school office records (owner to list exact modules: TODO)',
      'Sign-in handled by Clerk',
    ],
    stack: ['React', 'Next.js', 'Python', 'FastAPI', 'Clerk'],
    isPrivateRepo: true,
    screenshot: 'TODO',
  },
  {
    title: 'Spice Garden',
    slug: 'spice-garden',
    summary: 'A table ordering system for a restaurant. Each table has a QR code, and customers order from their phone.',
    whatItDoes: [
      'Every table has a QR code that carries its table number',
      'Scanning opens the menu',
      'The customer places the order from the menu',
      'The order appears on the kitchen screen',
    ],
    stack: 'TODO',
    githubUrl: 'https://github.com/codebymz/spice-garden-restaurant',
    screenshot: 'TODO',
  },
  {
    title: 'ZAPR',
    slug: 'zapr',
    summary: 'A file conversion tool that converts documents between formats.',
    whatItDoes: [
      'Converts files from one format to another, for example PPT to PDF, PDF to Excel, Excel to Word',
    ],
    stack: ['React', 'Python'],
    isComingSoon: true,
    githubUrl: 'https://github.com/codebymz/zapr',
    screenshot: 'TODO',
  },
];

export const otherProjects: OtherProject[] = [
  {
    name: 'Speed Lab',
    description: 'A typing speed test and an internet speed test.',
    stack: ['React', 'Python', 'FastAPI'],
    liveUrl: 'https://speed-lab.vercel.app',
    githubUrl: 'https://github.com/codebymz/Speed-Lab',
  },
  {
    name: 'MZ Nexora',
    description: "Website for the owner's agency, with a chatbot that answers questions about the company.",
    stack: 'TODO',
    liveUrl: 'https://mznexora.vercel.app',
    githubUrl: 'https://github.com/codebymz/mznexora',
  },
];
