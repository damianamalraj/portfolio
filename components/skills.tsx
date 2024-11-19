'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skills } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import SkillsSection from './skills-section';

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>

      <SkillsSection skills={[...skills.programming]} name={'Programming'} />
      <SkillsSection skills={[...skills.frontend]} name={'Frontend'} />
      <SkillsSection skills={[...skills.backend]} name={'Backend'} />
      <SkillsSection skills={[...skills.others]} name={'Others'} />
    </section>
  );
}
