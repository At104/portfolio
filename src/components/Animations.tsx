"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, memo } from "react";

interface FadeInOnScrollProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

/**
 * Optimized FadeInOnScroll component with memo to prevent unnecessary re-renders
 * Uses Intersection Observer for efficient scroll detection
 * Only animates once (triggerOnce: true) to reduce computational cost
 */
export const FadeInOnScroll = memo(function FadeInOnScroll({ 
  children, 
  delay = 0, 
  duration = 0.6, 
  direction = "up",
  className = ""
}: FadeInOnScrollProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, // Only trigger once for better performance
    rootMargin: "0px 0px -50px 0px"
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ 
        duration, 
        delay: delay / 1000, // Convert to seconds and reduce delay
        ease: "easeOut"
      }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
});

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

/**
 * Optimized StaggerContainer with memo
 * Animates children in sequence for smooth visual effects
 */
export const StaggerContainer = memo(function StaggerContainer({ 
  children, 
  staggerDelay = 0.1,
  className = ""
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

interface ScaleOnHoverProps {
  children: ReactNode;
  scale?: number;
  className?: string;
}

/**
 * Optimized ScaleOnHover with memo
 * Uses spring animation for natural feel with optimized parameters
 */
export const ScaleOnHover = memo(function ScaleOnHover({ 
  children, 
  scale = 1.05,
  className = ""
}: ScaleOnHoverProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
});
