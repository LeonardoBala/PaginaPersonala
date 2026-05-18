export interface EducationEntry {
  period: string;
  title: string;
  institution: string;
  detail: string;
}

export interface LanguageBlock {
  label: string;
  value: string;
}

export const educationEntries: EducationEntry[] = [
  {
    period: '2022 — PRESENT',
    title: 'Tehnologia Informației',
    institution: 'Facultatea de Inginerie Electrică și Tehnologia Informației',
    detail:
      'Universitatea din Oradea, România. Bachelor\'s degree in IT, focus on software engineering, networking and databases.',
  },
  {
    period: '2017 — 2022',
    title: 'Informatica e Telecomunicazioni',
    institution: 'Istituto Omnicomprensivo di Remedello — Bonsignori',
    detail:
      'Diploma tecnica in Informatica, Italia. Foundation in programming, networks and IT systems.',
  },
];

export const languageBlocks: LanguageBlock[] = [
  { label: 'Mother tongues',   value: 'Italiano · Română' },
  { label: 'Other languages',  value: 'English' },
  { label: 'Certifications',   value: 'Cisco IT Essentials · CCNA' },
];
