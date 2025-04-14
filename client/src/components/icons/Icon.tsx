import React from 'react';
import { IconType } from 'src/types/Icon.types';

const Icon: React.FC<IconType> = ({
    className, size, color, 'aria-label': ariaLabel, path
}) => (
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
        {Array.isArray(path) ? (
            path.map((d, index) => <path key={index} d={d} />)
        ) : (
            <path d={path} />
        )}
    </svg>
);
Icon.defaultProps = {
    className: '',
    size: 16,
    color: 'currentColor',
    'aria-label': 'Icon',
  };
  
export default Icon;