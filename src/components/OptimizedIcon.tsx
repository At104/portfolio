"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { memo } from "react";

interface OptimizedIconProps {
  icon: IconDefinition;
  className?: string;
  style?: React.CSSProperties;
}

const OptimizedIcon = memo(({ icon, className, style }: OptimizedIconProps) => {
  return <FontAwesomeIcon icon={icon} className={className} style={style} />;
});

OptimizedIcon.displayName = 'OptimizedIcon';

export default OptimizedIcon;

