// import { CgWorkAlt } from 'react-icons/cg';
// import { FaReact } from 'react-icons/fa';
// import { LuGraduationCap } from 'react-icons/lu';
import booksandquotesImg from '@/public/booksandquotes.png';
import feelgoodImg from '@/public/feelgood.png';
import portrait from '@/public/portrait.jpg';

export const metadataInfo = {
  title: 'Daniel | Full-Stack Developer',
  description:
    'I am a full-stack developer with 2 years of experience. I specialize in React, Next.js, TypeScript, .NET, SQL and NoSQL databases. I am open to full-time opportunities.',
} as const;

export const portraitImage = portrait;

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiences = [
  {
    title: 'Graduated bootcamp',
    location: 'Miami, FL',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    // icon: React.createElement(LuGraduationCap),
    date: '2019',
  },
  {
    title: 'Front-End Developer',
    location: 'Orlando, FL',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    // icon: React.createElement(CgWorkAlt),
    date: '2019 - 2021',
  },
  {
    title: 'Full-Stack Developer',
    location: 'Houston, TX',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    // icon: React.createElement(FaReact),
    date: '2021 - present',
  },
] as const;

export const projects = [
  {
    title: 'Books and Quotes API',
    description:
      'Books and Quotes Web App, using Angular and .NET 6 C#, features CRUD, JWT security, responsive design, hosted on Azure. Full-stack project on GitHub.',
    tags: ['.NET', 'Angular', 'SQL Server', 'Bootstrap', 'Azure'],
    imageUrl: booksandquotesImg,
  },
  {
    title: 'Feelgood App',
    description:
      'At Feelgood, I enhanced a React Native app by fixing bugs, adding features, and improving logic, plus I developed a user experience reporting system to increase engagement.',
    tags: ['React Native', 'TypeScript', 'Redux', 'StyledComponents'],
    imageUrl: feelgoodImg,
  },
] as const;

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'C#',
  '.NET',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Express',
  'PostgreSQL',
  'Python',
  'Framer Motion',
] as const;
