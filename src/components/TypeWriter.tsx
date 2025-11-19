'use client';

import { useState, useEffect, memo } from 'react';

interface TypeWriterProps {
  texts: string[];
  speed?: number;
  delay?: number;
  initialDelay?: number;
  className?: string;
}

/**
 * Optimized TypeWriter component with memo
 * Uses efficient state management and cleanup for smooth animations
 */
const TypeWriter = memo(function TypeWriter({ texts, speed = 100, delay = 2000, initialDelay = 0, className = "" }: TypeWriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Initial delay before starting the animation
    if (!hasStarted && initialDelay > 0) {
      const initialTimeout = setTimeout(() => {
        setHasStarted(true);
      }, initialDelay);
      return () => clearTimeout(initialTimeout);
    } else if (!hasStarted) {
      setHasStarted(true);
    }
  }, [hasStarted, initialDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setIsPaused(true);
        }
      }
    }, isDeleting ? speed / 2 : isPaused ? delay : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentTextIndex, texts, speed, delay, hasStarted]);

  if (!hasStarted) {
    return (
      <span className={className}>
        <span className="invisible">|</span>
      </span>
    );
  }

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
});

export default TypeWriter;
