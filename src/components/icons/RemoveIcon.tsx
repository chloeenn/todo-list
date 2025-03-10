import React from 'react';
import { IconType } from 'src/types/Icon.types';

export const RemoveIcon: React.FC<IconType> = ({
    className,
    size = 16,
    color = 'currentColor',
    'aria-label': ariaLabel = "Delete Task",
}) => {
    return (
        <svg
            width={size}
            height={size}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-label={ariaLabel}
        >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
        </svg>
    );
};
