import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="py-8 border-t border-[var(--portfolio-text-muted)]">
      <div className="container mx-auto px-6 text-center">
        <motion.p
          className="text-[var(--portfolio-text-muted)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          © 2025 KesavanSK. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
