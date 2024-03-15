import { useActiveSectionContext } from '@/context/active-section-context';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import type { SectionName } from './types';

export function useSectionInView(SectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLasClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLasClick > 1000) {
      setActiveSection(SectionName);
    }
  }, [inView, setActiveSection, timeOfLasClick, SectionName]);

  return { ref };
}
