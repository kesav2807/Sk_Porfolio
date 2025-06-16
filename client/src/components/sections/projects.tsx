import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const projects = [
  {
    id: 1,
    projectName: "Cafe-7 app",
    projectType: "React Native",
    description: "The Café7 application is designed to transform the way customers interact with their favorite café...",
    projectImage: ["https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/34/18/46/cafe-coffee-day.jpg?w=900&h=500&s=1"],
    techStack: [
      { name: "React Native", image: "react" },
      { name: "Node.js", image: "node" },
      { name: "Expo", image: "netlify" },
      { name: "MongoDB", image: "mdb" }
    ],
    githubLink: "https://github.com/kesav2807/Cafe-7",
    liveLink: "https://docs.google.com/presentation/d/1bNGVS7dnOkNvGLOXjmvXAzT_ceHvpCS6/edit#slide=id.p1"
  },
  {
    id: 2,
    projectName: "Netflix Clone",
    projectType: "HTML & CSS, JavaScript",
    description: "A complete Netflix clone with responsive design...",
    projectImage: ["https://prospected.com/wp-content/uploads/2019/12/Featured-netflix-image.jpg"],
    techStack: [
      { name: "HTML", image: "html" },
      { name: "CSS", image: "css" },
      { name: "JavaScript", image: "javascript" }
    ],
    githubLink: "https://github.com/kesav2807/Nefliex",
    liveLink: "https://kesav2807.github.io/Nefliex/"
  },
  {
    id: 3,
    projectName: "Food Delivery",
    projectType: "React JS",
    description: "Food Delivery Website offering a seamless and responsive experience...",
    projectImage: ["data:image/jpeg;base64,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"],
    techStack: [
      { name: "React", image: "react" },
      { name: "JavaScript", image: "javascript" },
      { name: "CSS", image: "css" }
    ],
    githubLink: "",
    liveLink: "https://fooddeliverywebsite-2s1b.onrender.com"
  },
  {
    id: 4,
    projectName: "E-Commerce",
    projectType: "MERN Stack",
    description: "E-Commerce Website with smooth shopping experience...",
    projectImage: ["https://www.zweb123.com/wp-content/uploads/2024/10/eCommerce-Website-by-Z-Web-Solutions.jpg"],
    techStack: [
       { name: "React", image: "react" },
      { name: "Node.js", image: "node" },
      { name: "MongoDB", image: "mdb" },
      { name: "Express", image: "express" }
    ],
    githubLink: "",
    liveLink: "https://ecom-pegx.onrender.com/"
  },
  {
    id: 5,
    projectName: "ToDO App",
    projectType: "MERN Stack",
    description: "To-Do List application with CRUD functionality...",
    projectImage: ["https://i.ytimg.com/vi/9wiWzu_tRB0/maxresdefault.jpg"],
    techStack: [
      { name: "React", image: "react" },
      { name: "Node.js", image: "node" },
      { name: "MongoDB", image: "mdb" },
      { name: "Express", image: "express" }
    ],
    githubLink: "https://github.com/kesav2807/Currency",
    liveLink: "https://todoapp-one-smoky.vercel.app/"
  },
  {
    id: 6,
    projectName: "College Transport Management System",
    projectType: "MERN Stack",
    description: "College Transport Management with real-time tracking and booking...",
    projectImage: ["https://goschooler.com/wp-content/uploads/2021/05/Copy-of-Untitled-1.png"],
    techStack: [
      { name: "React", image: "react" },
      { name: "Node.js", image: "node" },
      { name: "MongoDB", image: "mdb" },
      { name: "Express", image: "express" }
    ],
    githubLink: "",
    liveLink: "https://transportation-managementsystem-frontnend.onrender.com"
  }
];

const tagColors = [
  'var(--portfolio-accent)',
  'var(--portfolio-accent-blue)',
  'var(--portfolio-accent-purple)',
];

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section id="projects" className="py-20 bg-[var(--portfolio-secondary)] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, var(--portfolio-accent) 1px, transparent 1px),
              linear-gradient(-45deg, var(--portfolio-accent-blue) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        />
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
            <span className="text-[var(--portfolio-text-secondary)]">Featured</span>
            <span className="gradient-text"> Projects</span>
            <motion.div
              className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-accent-blue)] rounded-full"
              initial={{ width: 0 }}
              animate={isIntersecting ? { width: '200px' } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </motion.h2>
          <motion.p
            className="text-xl text-[var(--portfolio-text-muted)] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            Here are some of my recent projects that showcase my skills and creativity in modern web development.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isIntersecting ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative glass-effect rounded-2xl overflow-hidden cursor-pointer transform-gpu"
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1], type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative overflow-hidden h-48">
                <motion.img
                  src={project.projectImage[0]}
                  alt={`${project.projectName} - Project Demo`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  onError={(e) => {
                    const fallbackImages = [
                      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600',
                      'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&w=800&h=600',
                      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600',
                      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=600'
                    ];
                    e.currentTarget.src = fallbackImages[index % fallbackImages.length];
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="flex space-x-4">
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[var(--portfolio-accent)] rounded-full text-[var(--portfolio-primary)] hover:bg-[var(--portfolio-accent-blue)] transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    {project.githubLink && (
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-[var(--portfolio-text-secondary)] rounded-full text-[var(--portfolio-primary)] hover:bg-[var(--portfolio-accent-purple)] transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </motion.div>
                <motion.div
                  className="absolute top-4 left-4 px-3 py-1 bg-[var(--portfolio-accent)]/20 backdrop-blur-sm rounded-full border border-[var(--portfolio-accent)]/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="text-xs font-medium text-[var(--portfolio-accent)]">
                    {project.projectType}
                  </span>
                </motion.div>
              </div>

              <div className="p-6 space-y-4">
                <motion.h3
                  className="text-xl font-bold text-[var(--portfolio-text-primary)] group-hover:text-[var(--portfolio-accent)] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  {project.projectName}
                </motion.h3>
                <p className="text-[var(--portfolio-text-secondary)] text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => {
                    const color = tagColors[techIndex % tagColors.length];
                    return (
                      <motion.span
                        key={tech.name}
                        className="px-2 py-1 text-xs rounded-full border font-medium"
                        style={{
                          backgroundColor: `${color}15`,
                          borderColor: `${color}40`,
                          color: color
                        }}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: `0 0 15px ${color}40`
                        }}
                      >
                        {tech.name}
                      </motion.span>
                    );
                  })}
                </div>
                <div className="flex gap-4 pt-2">
                  {project.liveLink && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[var(--portfolio-accent)] hover:text-[var(--portfolio-accent-blue)] transition-colors text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <Play className="mr-1" size={14} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors text-sm font-medium"
                      whileHover={{ x: 5 }}
                    >
                      <Github className="mr-1" size={14} />
                      Source Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.a
            href="https://github.com/kesav2807"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-accent-blue)] text-[var(--portfolio-primary)] font-semibold rounded-full hover:from-[var(--portfolio-accent-blue)] hover:to-[var(--portfolio-accent-purple)] transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-2" size={20} />
            View All Projects
            <motion.div className="ml-2" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
