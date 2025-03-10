import React from 'react';
import { IconType } from 'src/types/Icon.types';

export const PlusIcon: React.FC<IconType> = ({
  className,
  size = 16,
  color = 'currentColor',
  'aria-label': ariaLabel = 'Add new task',
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label={ariaLabel}
    >
      <path d="M12 5v14m-7-7h14" />
    </svg>
  );
};