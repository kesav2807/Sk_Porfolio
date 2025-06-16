import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50 hidden lg:flex flex-col space-y-4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
    >
      {sections.map((section) => (
        <motion.button
          key={section.id}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === section.id
              ? 'bg-[var(--portfolio-accent)] scale-150'
              : 'bg-white/30 hover:bg-[var(--portfolio-accent)] hover:scale-125'
          }`}
          onClick={() => scrollToSection(section.id)}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          title={section.label}
        />
      ))}
    </motion.nav>
  );
}
