import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const portfolioData = {
  fullName: "Kesavan S",
  titleArray: [
    "MERN Stack Developer",
    "Full-Stack Web Developer",
    "Mobile App Developer",
    "UI/UX Enthusiast"
  ],
  subTitle: "Building digital experiences that inspire and transform ideas into reality",
  resumeLink: "https://drive.google.com/file/d/1HP8qG_Awi58FPKzpl2qdyg7Ts5wyZD9e/view?usp=drive_link"
};

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--portfolio-accent) 0%, transparent 50%)`,
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 2 === 0 ? 'border-2 border-[var(--portfolio-accent)]' : 'bg-[var(--portfolio-accent-blue)]'
            } opacity-20`}
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: i % 3 === 0 ? '50%' : '0',
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-100, -200],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeOut',
            }}
          >
            <Sparkles size={16} className="text-[var(--portfolio-accent)]" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4"
          >
            <motion.span
              className="inline-flex items-center px-4 py-2 bg-[var(--portfolio-accent)]/10 rounded-full text-[var(--portfolio-accent)] font-mono text-sm border border-[var(--portfolio-accent)]/20"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 255, 136, 0.2)',
                  '0 0 40px rgba(0, 255, 136, 0.4)',
                  '0 0 20px rgba(0, 255, 136, 0.2)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              👋 Hello! My name is
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.span 
              className="block text-[var(--portfolio-text-primary)] mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {portfolioData.fullName}
            </motion.span>
          </motion.h1>

          <motion.div
            className="h-20 md:h-24 flex items-center justify-center mb-8"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ delay: 1.0 }}
          >
            <motion.span
              className="text-2xl md:text-4xl lg:text-5xl font-bold gradient-text"
              animate={{
                textShadow: [
                  '0 0 20px rgba(0, 255, 136, 0.5)',
                  '0 0 40px rgba(0, 255, 136, 0.8)',
                  '0 0 20px rgba(0, 255, 136, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Typewriter
                words={portfolioData.titleArray}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </motion.span>
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-[var(--portfolio-text-secondary)] mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.8 }}
          >
            {portfolioData.subTitle}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 2.2 }}
          >
            <motion.a
              href={portfolioData.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-[var(--portfolio-accent)] text-[var(--portfolio-primary)] font-semibold rounded-full hover:bg-transparent hover:text-[var(--portfolio-accent)] border-2 border-[var(--portfolio-accent)] transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-accent-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ zIndex: -1 }}
              />
              <span className="relative flex items-center">
                See Resume
                <Download className="ml-2 group-hover:animate-bounce" size={20} />
              </span>
            </motion.a>

            <motion.button
              className="group px-8 py-4 border-2 border-[var(--portfolio-text-secondary)] text-[var(--portfolio-text-secondary)] hover:border-[var(--portfolio-accent)] hover:text-[var(--portfolio-accent)] transition-all duration-300 rounded-full relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                className="absolute inset-0 bg-[var(--portfolio-accent)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              />
              <span className="relative flex items-center">
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2.8 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-6 h-10 border-2 border-[var(--portfolio-text-secondary)] rounded-full flex justify-center group hover:border-[var(--portfolio-accent)] transition-colors duration-300">
            <motion.div
              className="w-1 h-3 bg-[var(--portfolio-text-secondary)] rounded-full mt-2 group-hover:bg-[var(--portfolio-accent)] transition-colors duration-300"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
          <motion.p
            className="text-xs text-[var(--portfolio-text-muted)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            Scroll Down
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
