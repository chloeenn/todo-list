import React from 'react';
import { IconType } from 'src/types/Icon.types';

export const CheckIcon: React.FC<IconType> = ({
    className,
    size = 16,
    color = 'currentColor',
    'aria-label': ariaLabel,
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
             <path d="M20 6 9 17l-5-5"></path>
        </svg>
    );
};
