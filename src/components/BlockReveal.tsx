import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

interface BlockRevealProps {
  children: ReactNode;
  /** Stagger delay in milliseconds. */
  delay?: number;
  className?: string;
}

/**
 * Reveals its children by "dropping" them into place from above and locking —
 * the page building up out of tetromino blocks as you scroll. Fires once.
 * Respects prefers-reduced-motion (renders in place, no motion).
 */
export function BlockReveal({ children, delay = 0, className = "" }: BlockRevealProps) {
  const reduce = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
    rootMargin: "0px 0px -60px 0px",
  });

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -48 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -48 }}
      transition={{ type: "spring", stiffness: 280, damping: 24, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
