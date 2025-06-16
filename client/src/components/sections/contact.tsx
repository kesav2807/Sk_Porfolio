import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, MessageCircle, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { fadeInLeft, fadeInRight, fadeInUp } from '@/lib/animations';
import { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

// Contact data matching your portfolio structure
const contactData = {
  contactParagraph: "I'm currently open to work and get involved in new projects, so get in touch if you'd like to Hire me or work together.",
  email: "kesevansunder007@gmail.com",
  socialLinks: {
    github: "https://github.com/kesav2807",
    linkedin: "https://www.linkedin.com/in/kesavansunder/"
  }
};

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: contactData.email,
    color: 'var(--portfolio-accent)',
    href: `mailto:${contactData.email}`,
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Madurai, India',
    color: 'var(--portfolio-accent-purple)',
  },
  {
    icon: MessageCircle,
    title: 'Let\'s Chat',
    value: 'Available for projects',
    color: 'var(--portfolio-accent-blue)',
  },
];

const socialLinks = [
  { 
    icon: Github, 
    url: contactData.socialLinks.github, 
    color: 'var(--portfolio-text-secondary)',
    name: 'GitHub'
  },
  { 
    icon: Linkedin, 
    url: contactData.socialLinks.linkedin, 
    color: 'var(--portfolio-accent-blue)',
    name: 'LinkedIn'
  },
];

export function Contact() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_7y5lb2s',     // Your EmailJS service ID
        'template_w0iws5p',    // Your template ID
        form.current!,
        'gsUeQzHtQCm6vF56H'     // Your EmailJS public key
      )
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current?.reset();
          setSubmitStatus('success');
        },
        (error) => {
          alert('❌ Message failed to send. Please try again later.');
          console.error(error);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-[var(--portfolio-secondary)] relative overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `conic-gradient(from 45deg, var(--portfolio-accent), var(--portfolio-accent-blue), var(--portfolio-accent-purple), var(--portfolio-accent))`,
          backgroundSize: '200px 200px',
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
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
              <span className="text-[var(--portfolio-text-secondary)]">Let's</span>
              <span className="gradient-text"> Connect</span>
              <motion.div
                className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-[var(--portfolio-accent)] to-[var(--portfolio-accent-blue)] rounded-full"
                initial={{ width: 0 }}
                animate={isIntersecting ? { width: '200px' } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </motion.h2>
            <motion.p 
              className="text-xl text-[var(--portfolio-text-muted)] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              {contactData.contactParagraph}
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-3xl font-bold mb-6 text-[var(--portfolio-text-primary)]">
                  Get in touch
                </h3>
                <p className="text-lg text-[var(--portfolio-text-secondary)] leading-relaxed mb-8">
                  Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
                </p>
              </motion.div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    className="group flex items-center space-x-4 p-4 rounded-xl bg-[var(--portfolio-primary)]/30 backdrop-blur-sm border border-[var(--portfolio-text-muted)]/20 hover:border-opacity-60 transition-all duration-300"
                    style={{ borderColor: `${info.color}30` }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isIntersecting ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: `0 8px 25px ${info.color}20`,
                      borderColor: info.color,
                    }}
                  >
                    <motion.div 
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${info.color}20` }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <info.icon 
                        className="text-[var(--portfolio-text-primary)]" 
                        size={24}
                        style={{ color: info.color }}
                      />
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-semibold text-[var(--portfolio-text-primary)] mb-1">
                        {info.title}
                      </p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-[var(--portfolio-text-secondary)] hover:text-[var(--portfolio-accent)] transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[var(--portfolio-text-secondary)]">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <h4 className="text-lg font-semibold mb-4 text-[var(--portfolio-text-primary)]">
                  Follow me on:
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm border border-[var(--portfolio-text-muted)]/20"
                      style={{ backgroundColor: `${social.color}20` }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: social.color,
                        borderColor: social.color,
                        boxShadow: `0 8px 25px ${social.color}40`,
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isIntersecting ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.0 + index * 0.1 }}
                    >
                      <social.icon 
                        className="text-[var(--portfolio-text-primary)] group-hover:text-[var(--portfolio-primary)] transition-colors duration-300" 
                        size={20} 
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              animate={isIntersecting ? "visible" : "hidden"}
              className="relative"
            >
              <motion.div
                className="glass-effect rounded-3xl p-8 border border-[var(--portfolio-accent)]/20"
                whileHover={{ 
                  boxShadow: '0 20px 40px rgba(0, 255, 136, 0.1)',
                  borderColor: 'var(--portfolio-accent)',
                }}
                transition={{ duration: 0.3 }}
              >
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 }}
                    >
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 }}
                    >
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-black placeholder-gray-400"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 }}
                  >
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 text-black placeholder-gray-400 resize-none"
                      required
                    />
                  </motion.div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <span className="flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <CheckCircle className="mr-2" size={20} />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </span>
                  </motion.button>
                </form>

                {/* Floating Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 rounded-full opacity-60"
                  style={{ background: 'var(--portfolio-accent)' }}
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full opacity-40"
                  style={{ background: 'var(--portfolio-accent-blue)' }}
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 180, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
