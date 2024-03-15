import React from 'react';
// import { CgWorkAlt } from 'react-icons/cg';
// import { FaReact } from 'react-icons/fa';
// import { LuGraduationCap } from 'react-icons/lu';
// import corpcommentImg from '@/public/corpcomment.png';
// import rmtdevImg from '@/public/rmtdev.png';
// import wordanalyticsImg from '@/public/wordanalytics.png';
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

export const experiencesData = [
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
      'The Books and Quotes Web Application, built with Angular and .NET 6 C#, features CRUD functionality for managing books and quotes, secured with JWT authentication and designed responsively for all devices. Hosted on Azure, it showcases my full-stack development skills through its source code on GitHub and live deployment.',
    tags: ['.NET', 'Angular', 'SQL Server', 'Bootstrap', 'Azure'],
    imageUrl: booksandquotesImg,
  },
  {
    title: 'Feelgood App',
    description:
      "At Feelgood, I was a frontend developer, working on React Native and TypeScript. I fixed bugs, added new features, and improved the app's logic. I also implemented a user experience reporting system to track satisfaction levels, enhancing overall user engagement.",
    tags: ['React Native', 'TypeScript', 'Redux', 'StyledComponents'],
    imageUrl: feelgoodImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'GraphQL',
  'Apollo',
  'Express',
  'PostgreSQL',
  'Python',
  'Django',
  'Framer Motion',
] as const;
