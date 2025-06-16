import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      setTimeout(onComplete, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-[var(--portfolio-primary)] flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[var(--portfolio-accent)]/30 border-t-[var(--portfolio-accent)] rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[var(--portfolio-accent)] font-mono text-lg">
          Loading Experience...
        </p>
      </div>
    </motion.div>
  );
}
