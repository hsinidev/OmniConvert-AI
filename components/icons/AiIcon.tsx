
import React from 'react';

const AiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M9 4.5a.75.75 0 0 1 .75.75v3.546l.065-.065a3.375 3.375 0 0 1 4.773 0l.065.065V5.25a.75.75 0 0 1 1.5 0v3.546a4.875 4.875 0 0 1-6.891 0V5.25A.75.75 0 0 1 9 4.5ZM12 11.25a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25Z" clipRule="evenodd" />
        <path d="M12.75 18.75a.75.75 0 0 0-1.5 0v.078a5.996 5.996 0 0 0-4.484 2.14a.75.75 0 0 0 1.144.973A4.497 4.497 0 0 1 12 18.75a4.497 4.497 0 0 1 4.59 2.191a.75.75 0 1 0 1.144-.973 5.996 5.996 0 0 0-4.484-2.14v-.078Z" />
    </svg>
);

export default AiIcon;
