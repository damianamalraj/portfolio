import React from 'react';

import portrait from '@/public/portrait.jpg';
import portfolio from '@/public/portfolio.png';
import booksandquotesImg from '@/public/booksandquotes.png';
import feelgoodImg from '@/public/feelgood.png';
import e_walletImg from '@/public/e-wallet.png';

import { LuGraduationCap } from 'react-icons/lu';
import { PiCertificateBold } from 'react-icons/pi';
import { CgWorkAlt } from 'react-icons/cg';
import { IoIosGitBranch } from 'react-icons/io';
import { TbApi } from 'react-icons/tb';
import { GoLinkExternal } from 'react-icons/go';
import { FaRegFilePdf } from 'react-icons/fa6';
import { AiOutlineFilePdf } from 'react-icons/ai';

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
    reference: {
      name: 'Recomendation Letter',
      url: '/Rekomendationsbrev_Damian_Amalraj_signed.pdf',
      icon: React.createElement(FaRegFilePdf),
    },
  },
  {
    title: 'Web Developer at Displayed Web',
    location: 'Stockholm, Sweden',
    description:
      'Part-time Web Developer, gaining practical experience in web development and content management systems.',
    icon: React.createElement(CgWorkAlt),
    date: 'Apr 2022 - Jun 2022',
    reference: {
      name: 'Recomendation Letter',
      url: '/Letter of Recommendation - Damian Amalraj.pdf',
      icon: React.createElement(FaRegFilePdf),
    },
  },
  {
    title: 'Five Step Coding Challenge Certification by Code Institute',
    location: 'Issued Jul 2022',
    description:
      'Completed the Five Step Coding Challenge, demonstrating proficiency in coding fundamentals.',
    icon: React.createElement(PiCertificateBold),
    date: 'Jul 2022',
    reference: {
      name: 'Certificate',
      url: '/CodeInstitute AACC Certificate _ Code Institute.pdf',
      icon: React.createElement(FaRegFilePdf),
    },
  },
  {
    title: 'Graduated from IT-Högskolan',
    location: 'Stockholm, Sweden',
    description:
      'Achieved a diploma in Computer Software Engineering, focusing on both theoretical and practical aspects of software development.',
    icon: React.createElement(LuGraduationCap),
    date: 'Aug 2021 - May 2023',
    reference: {
      name: 'Diploma',
      url: '/Examensbevis - Damian Clitus Robert Amalraj.pdf',
      icon: React.createElement(FaRegFilePdf),
    },
  },
  {
    title: 'Graduated from Thorildsplans gymnasium',
    location: 'Stockholm, Sweden',
    description:
      'Completed high school with a focus on information technology, aimed at building and shaping the future society.',
    icon: React.createElement(LuGraduationCap),
    date: 'Aug 2017 - Jun 2020',
    reference: {},
  },

  {
    title: 'The Web Developer Bootcamp Certification by Udemy',
    location: 'Issued Feb 2020',
    description:
      'Completed The Web Developer Bootcamp course, acquiring comprehensive web development skills.',
    icon: React.createElement(PiCertificateBold),
    date: 'Feb 2020',
    reference: {
      name: 'Certificate',
      url: '/UC-15578d73-6c30-4ccb-8f79-bd44f9019976.pdf',
      icon: React.createElement(FaRegFilePdf),
    },
  },
] as const;

export const projects = [
  {
    title: 'My Portfolio',
    description:
      'A dynamic portfolio built with Next.js and Tailwind CSS, coded in TypeScript for reliability and speed.',
    tags: ['Next.js', 'TypeScript', 'Context API', 'Tailwind'],
    imageUrl: portfolio,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/damianamalraj/portfolio',
        icon: React.createElement(IoIosGitBranch),
      },
      {
        name: 'Live',
        url: 'https://damianamalraj.vercel.app',
        icon: React.createElement(GoLinkExternal),
      },
    ],
  },
  {
    title: 'Books and Quotes API',
    description:
      'Angular & .NET 6 C# full-stack CRUD app with JWT security & responsive design, hosted on Azure. Project on GitHub.',
    tags: ['.NET', 'Angular', 'SQL Server', 'Bootstrap', 'Azure'],
    imageUrl: booksandquotesImg,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/damianamalraj/books-and-quotes-app',
        icon: React.createElement(IoIosGitBranch),
      },
      {
        name: 'Live',
        url: 'https://damianamalraj.github.io/books-and-quotes-app',
        icon: React.createElement(GoLinkExternal),
      },
      {
        name: 'API',
        url: 'https://books-and-quotes-api.azurewebsites.net/swagger/index.html',
        icon: React.createElement(TbApi),
      },
    ],
  },
  {
    title: 'Feelgood App',
    description:
      "Improved Feelgood's React Native app: bug fixes, new features, enhanced logic, and built a user engagement reporting system.",
    tags: ['React Native', 'TypeScript', 'Redux', 'StyledComponents'],
    imageUrl: feelgoodImg,
    links: [
      {
        name: 'Recomendation Letter',
        url: '/Rekomendationsbrev_Damian_Amalraj_signed.pdf',
        icon: React.createElement(AiOutlineFilePdf),
      },
      {
        name: 'Feelgood App',
        url: 'https://feelgood.se/app',
        icon: React.createElement(GoLinkExternal),
      },
    ],
  },
  {
    title: 'E-Wallet App',
    description:
      'A Vue.js application for credit card management with addition, activation, and storage functionalities.',
    tags: ['Vue.js', 'SASS', 'SPA', 'Form validation'],
    imageUrl: e_walletImg,
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/damianamalraj/e-wallet-vuejs',
        icon: React.createElement(IoIosGitBranch),
      },
      {
        name: 'Live',
        url: 'https://damianamalraj.github.io/e-wallet-vuejs/',
        icon: React.createElement(GoLinkExternal),
      },
    ],
  },
] as const;

export const skills = [
  // Programming Languages
  'HTML',
  'CSS/SASS',
  'JavaScript',
  'TypeScript',
  'C#',
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
  'Express',
  'Nest.js',

  // Databases
  'SQL Server',
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
