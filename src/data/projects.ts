export interface Project {
  name: string;
  url: string;
  repo: string;
  description: string;
  tags: string[];
}

export const THUMB_PALETTES = [
  { bg: 'linear-gradient(135deg, #1c2620 0%, #2d4034 100%)', accent: '#c8d4c0' },
  { bg: 'linear-gradient(135deg, #2d5a3d 0%, #1f3f2a 100%)', accent: '#f4f0e6' },
  { bg: 'linear-gradient(135deg, #ebe5d4 0%, #d4ccb8 100%)', accent: '#1f3f2a' },
];

export const projects: Project[] = [
  {
    name: 'Gym Trainer AI',
    url: 'https://gym-trainer-ai.vercel.app/',
    repo: 'https://github.com/LeonardoBala/GymTrainerAi',
    description:
      'AI-powered fitness companion that builds personalized workout routines based on goals, experience level and available equipment.',
    tags: ['React', 'AI', 'Vercel'],
  },
  {
    name: 'Uniter',
    url: 'https://uniter-sigma.vercel.app/',
    repo: 'https://github.com/LeonardoBala/Uniter',
    description:
      'Web platform with modern authentication and clean UX. Built with Next.js and TypeScript, deployed on Vercel.',
    tags: ['Next.js', 'TypeScript', 'Vercel'],
  },
  {
    name: 'Archivision',
    url: 'https://archivision-sand.vercel.app/',
    repo: 'https://github.com/LeonardoBala/Archivision',
    description:
      'Architecture & design visualization platform. Modern interface for showcasing creative work.',
    tags: ['React', 'TypeScript', 'Design'],
  },
];
