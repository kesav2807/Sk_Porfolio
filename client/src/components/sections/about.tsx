import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

// Portfolio data matching your structure
const aboutData = {
  aboutDescription: [
    "Hello! I'm Kesavan, a proficient full-stack web developer based in Madurai, India.",
    "Since my first coding venture, I've been captivated by the world of technology. I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js), React Native, and MongoDB, with a passion for creating seamless, scalable applications.",
    "I'm currently focusing on developing apps that enhance user experiences, streamline business operations, and provide innovative solutions. I also have experience in mobile app development with React Native and enjoy combining design with development to create intuitive, user-friendly UIs.",
    "If you're intrigued by my work and the projects I've been working on, feel free to explore them below or reach out for potential collaborations!"
  ],
  skills: [
    { name: 'React', color: 'var(--portfolio-accent)' },
    { name: 'React Native', color: 'var(--portfolio-accent-blue)' },
    { name: 'Node.js', color: 'var(--portfolio-accent-purple)' },
    { name: 'MongoDB', color: 'var(--portfolio-accent)' },
    { name: 'Express.js', color: 'var(--portfolio-accent-blue)' },
    { name: 'JavaScript', color: 'var(--portfolio-accent-purple)' },
  ]
};

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, var(--portfolio-accent) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, var(--portfolio-accent-blue) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-2 relative">
                <span className="text-[var(--portfolio-text-secondary)]">About</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-accent-blue)] rounded-full"
                  initial={{ width: 0 }}
                  animate={isIntersecting ? { width: '30%' } : {}}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </h2>
            </motion.div>
            <div className="space-y-4">
              {aboutData.aboutDescription.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-[var(--portfolio-text-secondary)] leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

          
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-[var(--portfolio-text-primary)]">
                Technologies I work with:
              </h3>
              <div className="flex flex-wrap gap-3">
                {aboutData.skills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    className="group relative px-4 py-2 bg-[var(--portfolio-secondary)] border rounded-full text-sm font-medium cursor-pointer overflow-hidden"
                    style={{ 
                      borderColor: skill.color,
                      color: skill.color,
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 20px ${skill.color}40`,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                      style={{ background: skill.color }}
                    />
                    <span className="relative">{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={isIntersecting ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Image */}
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img 
                  src="/images/about/my img.jpg"
                  alt="Kesavan S - Full Stack Developer" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // Fallback to a professional placeholder if image fails to load
                    e.currentTarget.src = "https://i.postimg.cc/8PTCm28K/my-img.jpg";
                  }}
                />
                
                {/* Overlay Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[var(--portfolio-primary)]/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-4 border-[var(--portfolio-accent)] opacity-60"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full opacity-40"
                style={{
                  background: `linear-gradient(135deg, var(--portfolio-accent-blue), var(--portfolio-accent-purple))`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, -180, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="absolute top-1/2 -left-4 w-16 h-16 border-2 border-[var(--portfolio-accent-purple)] opacity-30 rotate-45"
                animate={{
                  x: [-5, 5, -5],
                  rotate: [45, 90, 45],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Gradient Background */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 blur-xl"
                style={{
                  background: `linear-gradient(135deg, var(--portfolio-accent), var(--portfolio-accent-blue))`,
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Stats or Achievement Cards */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-[var(--portfolio-secondary)] p-4 rounded-xl border border-[var(--portfolio-accent)]/20 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <motion.p
                  className="text-2xl font-bold text-[var(--portfolio-accent)]"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(0, 255, 136, 0.5)',
                      '0 0 20px rgba(0, 255, 136, 0.8)',
                      '0 0 10px rgba(0, 255, 136, 0.5)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  2+
                </motion.p>
                <p className="text-sm text-[var(--portfolio-text-secondary)]">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
