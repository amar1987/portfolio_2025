import Link from 'next/link';
import React from 'react';



const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'RECOMMENDATIONS', path: '/recommendations' },
    { name: 'CONTACT', path: '/contact' },
];

const NavBar: React.FC = () => {
    return (
        <nav className="font-pixel text-sm">
            <ul className="flex flex-wrap gap-6 justify-center">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <Link href={item.path} passHref legacyBehavior>
                            <a
                                // Styling for a high-contrast glass link in light mode
                                className={`
                  inline-block px-3 py-1 text-glass-text 
                  border-b-2 border-transparent 
                  hover:text-glass-accent hover:border-glass-accent
                  uppercase transition-all duration-300 ease-in-out cursor-pointer
                  hover:shadow-lg
                  active:text-glass-secondary
                `}
                            >
                                {item.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;