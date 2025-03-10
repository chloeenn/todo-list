import React from 'react';

export interface IconType extends React.SVGProps<SVGSVGElement> {
    className?: string;
    size?: number;
    color?: string;
    'aria-label'?: string;
}