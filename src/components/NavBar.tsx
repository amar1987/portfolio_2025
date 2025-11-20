import Link from 'next/link';
import React, { useState } from 'react';

const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'EXPERIENCE', path: '/experience' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'RECOMMENDATIONS', path: '/recommendations' },
    { name: 'CONTACT', path: '/contact' },
];

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const CloseIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );

    const MenuIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    );

    return (
        <nav className="font-pixel text-sm relative">

            <div className="flex justify-start md:hidden">
                <button
                    onClick={toggleMenu}
                    className="p-2 text-glass-text border border-glass-surface/50 rounded-lg hover:bg-glass-surface/70 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls="mobile-menu"
                >
                    {isOpen ? CloseIcon : MenuIcon}
                </button>
            </div>

            <ul className="hidden md:flex flex-wrap gap-6 justify-center">
                {navItems.map((item) => (
                    <li key={item.path}>
                        <Link href={item.path} passHref legacyBehavior>
                            <a
                                className={`
                                  inline-block px-3 py-1 text-glass-text 
                                  border-b-2 border-transparent 
                                  hover:text-glass-accent hover:border-glass-accent
                                  uppercase transition-all duration-300 ease-in-out cursor-pointer
                                  active:text-glass-secondary
                                `}
                            >
                                {item.name}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>

            {isOpen && (
                <div
                    id="mobile-menu"
                    className="absolute z-10 w-full mt-4 
                               rounded-xl border border-glass-surface/50 
                               bg-glass-surface 
                               shadow-glass-soft transition-all duration-300 ease-in-out md:hidden bg-white"
                >
                    <ul className="flex flex-col py-3 space-y-1">
                        {navItems.map((item) => (
                            <li key={item.path} onClick={() => setIsOpen(false)}>
                                <Link href={item.path} passHref legacyBehavior>
                                    <a
                                        className={`
                                          block px-4 py-2 text-glass-text text-center text-base
                                          hover:bg-glass-accent/20 transition-colors uppercase
                                        `}
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;