import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

// Skills data with technology icons from CDN
const skillsData = [
  {
    title: "Frontend",
    skillname: [
      { 
        name: "React Native", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB"
      },
      { 
        name: "React", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB"
      }, 
      { 
        name: "HTML", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "#E34F26"
      }, 
      { 
        name: "CSS", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "#1572B6"
      }, 
      { 
        name: "JavaScript", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "#F7DF1E"
      }, 
      { 
        name: "Bootstrap", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        color: "#7952B3"
      }
    ]
  },
  {
    title: "Backend",
    skillname: [
      { 
        name: "Node.js", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#339933"
      },
      { 
        name: "Express.js", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "#000000"
      }, 
      { 
        name: "NPM", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
        color: "#CB3837"
      },
      { 
        name: "MongoDB", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#47A248"
      },
      { 
        name: "Postman", 
        icon: "https://www.svgrepo.com/show/354202/postman-icon.svg",
        color: "#4479A1"
      }
    ]
  },
  {
    title: "Others",
    skillname: [
      { 
        name: "Git", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "#F05032"
      }, 
      { 
        name: "GitHub", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        color: "#181717"
      }, 
      { 
        name: "VS Code", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "#007ACC"
      }, 
      { 
        name: "Photoshop", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg",
        color: "#31A8FF"
      },
      { 
        name: "Figma", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
        color: "#F24E1E"
      }
    ]
  }
];

const colors = [
  'var(--portfolio-accent)',
  'var(--portfolio-accent-blue)',
  'var(--portfolio-accent-purple)',
];

export function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, var(--portfolio-accent) 2px, transparent 2px),
                           radial-gradient(circle at 80% 80%, var(--portfolio-accent-blue) 2px, transparent 2px)`,
          backgroundSize: '100px 100px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-4 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[var(--portfolio-text-secondary)]">Skills &</span>
            <span className="gradient-text"> Technologies</span>
            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-accent-blue)] rounded-full"
              initial={{ width: 0 }}
              animate={isIntersecting ? { width: '250px' } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.h2>
          <motion.p 
            className="text-xl text-[var(--portfolio-text-muted)] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            I work with cutting-edge technologies to build scalable and performant applications
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="relative"
              variants={scaleIn}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + categoryIndex * 0.2 }}
            >
              {/* Category Container */}
              <motion.div
                className="glass-effect rounded-3xl p-8 h-full border-2 border-transparent hover:border-opacity-30 transition-all duration-500"
                style={{ 
                  borderColor: colors[categoryIndex % colors.length],
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: `0 20px 40px rgba(0, 255, 136, 0.2)`,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Category Title */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + categoryIndex * 0.2 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold"
                    style={{ 
                      background: `linear-gradient(135deg, ${colors[categoryIndex % colors.length]}, ${colors[(categoryIndex + 1) % colors.length]})`,
                      color: 'var(--portfolio-primary)',
                    }}
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: categoryIndex * 2,
                    }}
                  >
                    {category.title.charAt(0)}
                  </motion.div>
                  <h3 
                    className="text-2xl font-bold mb-2"
                    style={{ color: colors[categoryIndex % colors.length] }}
                  >
                    {category.title}
                  </h3>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skillname.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="group relative p-4 bg-[var(--portfolio-primary)]/30 rounded-xl border border-[var(--portfolio-text-muted)]/20 hover:border-opacity-60 transition-all duration-300 cursor-pointer backdrop-blur-sm"
                      style={{ 
                        borderColor: `${colors[categoryIndex % colors.length]}30`,
                        backgroundColor: `${skill.color}05`
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: 0.7 + categoryIndex * 0.2 + skillIndex * 0.1,
                        type: "spring",
                        stiffness: 300
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: `0 8px 25px ${skill.color}30`,
                        borderColor: skill.color,
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Skill Icon */}
                      <motion.div
                        className="w-12 h-12 mx-auto mb-3 flex items-center justify-center"
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          scale: 1.1
                        }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400,
                          duration: 0.6
                        }}
                      >
                        <motion.img
                          src={skill.icon}
                          alt={`${skill.name} technology icon`}
                          className="w-full h-full object-contain drop-shadow-md"
                          style={{
                            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
                          }}
                          whileHover={{
                            filter: [
                              'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                              `drop-shadow(0 8px 16px ${skill.color}40)`,
                              'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))'
                            ]
                          }}
                          transition={{ duration: 0.3 }}
                          onError={(e) => {
                            // Fallback to initials if CDN image fails
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full rounded-full flex items-center justify-center text-lg font-bold text-white"
                                     style="background: ${skill.color}; box-shadow: 0 4px 12px ${skill.color}40;">
                                  ${skill.name.charAt(0)}
                                </div>
                              `;
                            }
                          }}
                        />
                      </motion.div>

                      {/* Skill Name */}
                      <motion.p
                        className="text-center text-sm font-medium text-[var(--portfolio-text-secondary)] group-hover:text-[var(--portfolio-text-primary)] transition-colors duration-300"
                        style={{ fontSize: '0.75rem' }}
                      >
                        {skill.name}
                      </motion.p>

                      {/* Hover Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        style={{ background: colors[categoryIndex % colors.length] }}
                      />

                      {/* Floating Particles on Hover */}
                      <motion.div
                        className="absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100"
                        style={{ background: colors[categoryIndex % colors.length] }}
                        animate={{
                          y: [-5, -15, -5],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Floating Decorative Element */}
                <motion.div
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-60"
                  style={{ background: colors[categoryIndex % colors.length] }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: categoryIndex * 1,
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "20+", label: "Technologies" },
              { number: "6+", label: "Projects" },
              { number: "2+", label: "Years Experience" },
              { number: "100%", label: "Passion" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.p
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: colors[index % colors.length] }}
                  animate={{
                    textShadow: [
                      `0 0 10px ${colors[index % colors.length]}50`,
                      `0 0 20px ${colors[index % colors.length]}80`,
                      `0 0 10px ${colors[index % colors.length]}50`,
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.5,
                  }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-[var(--portfolio-text-secondary)] text-sm font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
