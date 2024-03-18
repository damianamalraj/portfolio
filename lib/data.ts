import React from 'react';

import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import { PiCertificateBold } from 'react-icons/pi';

import booksandquotesImg from '@/public/booksandquotes.png';
import feelgoodImg from '@/public/feelgood.png';
import portrait from '@/public/portrait.jpg';

export const metadataInfo = {
  title: 'Damian | Full-Stack Developer',
  description:
    'I am a full-stack developer with 2 years of experience. I specialize in React, Next.js, TypeScript, .NET, SQL and NoSQL databases. I am open to full-time opportunities.',
} as const;

export const portraitImg = portrait;

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
    title: 'Software Developer Internship at Redmind',
    location: 'Stockholm, Sweden',
    description:
      'Internship position as a Software Developer, enhancing my skills in software development and contributing to projects.',
    icon: React.createElement(CgWorkAlt),
    date: 'Aug 2022 - May 2023',
  },
  {
    title: 'Web Developer at Displayed Web',
    location: 'Stockholm, Sweden',
    description:
      'Part-time Web Developer, gaining practical experience in web development and content management systems.',
    icon: React.createElement(CgWorkAlt),
    date: 'Apr 2022 - Jun 2022',
  },
  {
    title: 'Five Step Coding Challenge Certification by Code Institute',
    location: 'Issued Jul 2022',
    description:
      'Completed the Five Step Coding Challenge, demonstrating proficiency in coding fundamentals.',
    icon: React.createElement(PiCertificateBold),
    date: 'Jul 2022',
  },
  {
    title: 'Graduated from IT-Högskolan',
    location: 'Stockholm, Sweden',
    description:
      'Achieved a diploma in Computer Software Engineering, focusing on both theoretical and practical aspects of software development.',
    icon: React.createElement(LuGraduationCap),
    date: 'Aug 2021 - May 2023',
  },
  {
    title: 'Graduated from Thorildsplans gymnasium',
    location: 'Stockholm, Sweden',
    description:
      'Completed high school with a focus on information technology, aimed at building and shaping the future society.',
    icon: React.createElement(LuGraduationCap),
    date: 'Aug 2017 - Jun 2020',
  },

  {
    title: 'The Web Developer Bootcamp Certification by Udemy',
    location: 'Issued Feb 2020',
    description:
      'Completed The Web Developer Bootcamp course, acquiring comprehensive web development skills.',
    icon: React.createElement(PiCertificateBold),
    date: 'Feb 2020',
  },
] as const;

export const projects = [
  {
    title: 'Books and Quotes API',
    description:
      'Angular & .NET 6 C# full-stack CRUD app with JWT security & responsive design, hosted on Azure. Project on GitHub.',
    tags: ['.NET', 'Angular', 'SQL Server', 'Bootstrap', 'Azure'],
    imageUrl: booksandquotesImg,
  },
  {
    title: 'Feelgood App',
    description:
      "Improved Feelgood's React Native app: bug fixes, new features, enhanced logic, and built a user engagement reporting system.",
    tags: ['React Native', 'TypeScript', 'Redux', 'StyledComponents'],
    imageUrl: feelgoodImg,
  },
] as const;

export const skills = [
  // Programming Languages
  'HTML',
  'CSS/SASS',
  'JavaScript',
  'TypeScript',
  'C#',
  'Python',
  'SQL',

  // Frontend Development
  'React',
  'Next.js',
  'Vue.js',
  'Angular',
  'React Native',
  'Redux',
  'Tailwind',

  // Backend Development
  '.NET',
  'Node.js',
  'FastApi',
  'Nest.js',
  'Express',

  // Databases
  'MongoDB',
  'PostgreSQL',

  // Testing & Quality Assurance
  'Jest (TDD)',
  'Cypress',

  // DevOps & CI/CD
  'Bash',
  'Docker',
  'GitHub Actions CI/CD',

  // Cloud Services
  'Azure',

  // Project Management
  'Scrum',
  'Kanban',

  // Other Technologies
  'Git',
] as const;
