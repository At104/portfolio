'use client';

import { motion } from 'framer-motion';

interface AnimatedNameProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedName({ children, className = "" }: AnimatedNameProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.span variants={wordVariants} className="inline-block mr-4">
        Hi, I&apos;m
      </motion.span>
      <motion.span variants={wordVariants} className="inline-block">
        {children}
      </motion.span>
    </motion.h1>
  );
}
