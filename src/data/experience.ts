export interface Experience {
  date: string;
  title: string;
  company: string;
  desc: string;
  tags: string[];
}

export const experiences: Experience[] = [
  {
    date: '2025',
    title: 'Software Developer Intern',
    company: 'Lateral',
    desc: 'Am construit de la zero o aplicație .NET: schemă de DB, repository pattern, controllere REST, DTO-uri cu AutoMapper, unit tests. Workflow agil cu Jira, Git și code reviews.',
    tags: ['.NET', 'C#', 'Azure', 'Docker', 'Postman'],
  },
  {
    date: '2024',
    title: 'Hacktech OTH — Healthcare AI',
    company: 'Hackathon · 3 zile · echipă de 6',
    desc: 'Aplicație web cu AI care îmbunătățește interacțiunea pacient-medic. Am proiectat UX/UI și am construit frontend-ul, plus video demo de prezentare.',
    tags: ['React', 'Tailwind', 'AI', 'UX/UI'],
  },
  {
    date: '2024',
    title: 'Software Developer Intern',
    company: 'Plexus',
    desc: 'Aplicație C# cu Entity Framework și MySQL pentru CRUD complet. Aplicație internă de inventar cu AppSheet. Documentație tehnică și ghiduri pentru utilizatori.',
    tags: ['C#', 'MySQL', 'Entity Framework', 'AppSheet'],
  },
  {
    date: '2023',
    title: 'Hackathon OTH — Smart City',
    company: 'Hackathon · echipă de 5',
    desc: 'Aplicație web pentru cetățenii din Oradea: monitorizare în timp real a stațiilor de încărcare electrică. Frontend cu Google Maps API și React, backend cu Node + Sockets.io.',
    tags: ['React', 'Node.js', 'Sockets.io', 'Google Maps'],
  },
];
