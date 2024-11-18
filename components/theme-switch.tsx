'use client';

import { useTheme } from '@/context/theme-context';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed top-5 right-5 bg-white w-[3.2rem] h-[3.2rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black dark:border-white border-opacity-25 dark:border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <BsSun className="w-[1.1rem] h-[1.1rem]" />
      ) : (
        <BsMoon />
      )}
    </button>
  );
}
