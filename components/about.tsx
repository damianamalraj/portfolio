'use client';

import React, { useEffect } from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="font-medium">Hello there! I'm Damian Amalraj</span>, a
        passionate individual driven by the pursuit of cutting-edge technologies
        and perpetual learning. My journey in the realm of{' '}
        <span className="font-medium">software development</span> is fueled by a
        relentless desire to explore and experiment with the latest
        advancements, whether it's on the{' '}
        <span className="font-medium">front-end</span> or{' '}
        <span className="font-medium">back-end</span>.
      </p>
      <p className="mb-3">
        With hands-on experience in crafting{' '}
        <span className="underline">React</span> and{' '}
        <span className="underline">React Native</span> applications using{' '}
        <span className="underline">Typescript</span>, as well as delving into
        backend development with <span className="underline">C#/.NET</span> and{' '}
        <span className="underline">Node/Express</span>, I've cultivated a
        versatile <span className="italic">skill</span> set that allows me to
        tackle diverse challenges in{' '}
        <span className="font-medium">software development</span>. I thrive in
        dynamic environments where innovation is encouraged, and I'm always
        eager to push the boundaries of what's possible.
      </p>
      <p>
        As a programmer with a keen interest in{' '}
        <span className="font-medium">software development</span>, I'm committed
        to staying at the forefront of technology trends and leveraging emerging
        tools and frameworks to create impactful solutions. I am currently
        looking for a <span className="underline">full-time position</span> as a{' '}
        <span className="font-medium">software developer</span>.
      </p>
    </motion.section>
  );
}
