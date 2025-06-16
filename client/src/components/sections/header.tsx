import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Code2, Briefcase } from 'lucide-react';

// Portfolio data matching your structure
const portfolioData = {
  fullName: "Kesavan S",
  email: "kesevansunder007@gmail.com",
  socialLinks: {
    github: "https://github.com/kesav2807",
    linkedin: "https://www.linkedin.com/in/kesavansunder/"
  }
};

const navigation = [
  { name: 'Home', href: '#hero', icon: '' },
  { name: 'About', href: '#about', icon: '' },
  { name: 'Projects', href: '#projects', icon: '' },
  { name: 'Skills', href: '#skills', icon: '' },
  { name: 'Contact', href: '#contact', icon: '' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigation.map(nav => nav.href.substring(1));
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[var(--portfolio-primary)]/90 backdrop-blur-md border-b border-[var(--portfolio-accent)]/20 shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-accent-blue)] flex items-center justify-center"
              whileHover={{ 
                scale: 1.1, 
                rotate: 360,
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Code2 className="text-[var(--portfolio-primary)]" size={20} />
            </motion.div>
            <motion.span
              className="text-xl font-bold text-[var(--portfolio-text-primary)]"
              whileHover={{ 
                background: 'linear-gradient(45deg, var(--portfolio-accent), var(--portfolio-accent-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
              transition={{ duration: 0.3 }}
            >
              {portfolioData.fullName}
            </motion.span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.href.substring(1)
                    ? 'text-[var(--portfolio-accent)] bg-[var(--portfolio-accent)]/10'
                    : 'text-[var(--portfolio-text-primary)] hover:text-[var(--portfolio-accent)]'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(0, 255, 136, 0.1)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <span className="text-base">{item.icon}</span>
                  <span>{item.name}</span>
                </span>
                
        
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--portfolio-accent)] rounded-full"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            
  
            <motion.button
              onClick={scrollToContact}
              className="relative px-6 py-2 bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-accent-blue)] text-[var(--portfolio-primary)] font-semibold rounded-full hover:from-[var(--portfolio-accent-blue)] hover:to-[var(--portfolio-accent-purple)] transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 8px 25px rgba(0, 255, 136, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[var(--portfolio-accent-blue)] to-[var(--portfolio-accent-purple)] opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
              <span className="relative flex items-center space-x-2">
                <Briefcase size={16} />
                <span>Hire Me</span>
              </span>
            </motion.button>
          </div>

        
          <motion.button
            className="md:hidden p-2 text-[var(--portfolio-text-primary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </nav>


        <motion.div
          className={`md:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <motion.div
            className="py-4 space-y-2"
            initial={{ y: -20 }}
            animate={{ y: isMobileMenuOpen ? 0 : -20 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? 'text-[var(--portfolio-accent)] bg-[var(--portfolio-accent)]/10 border border-[var(--portfolio-accent)]/20'
                    : 'text-[var(--portfolio-text-primary)] hover:text-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)]/5'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ delay: 0.1 + index * 0.05 }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center space-x-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.name}</span>
                </span>
              </motion.button>
            ))}
            
          
            <motion.button
              onClick={scrollToContact}
              className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-accent-blue)] text-[var(--portfolio-primary)] font-semibold rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20
              }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center justify-center space-x-2">
                <Briefcase size={16} />
                <span>Hire Me</span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>


      {isScrolled && (
        <motion.div
          className="absolute inset-0 bg-[var(--portfolio-primary)]/80 backdrop-blur-md -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.header>
  );
}
