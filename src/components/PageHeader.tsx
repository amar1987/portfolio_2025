import React from 'react';

const PageHeader: React.FC = () => {
    return (
        <header className="mb-8 p-2 border-b-4 border-retro-border ">
            <h1 className="font-pixel text-4xl sm:text-5xl text-retro-accent tracking-wider leading-none">
                AMAR DOEKHIE'S PORTFOLIO
            </h1>
            <p className="font-mono text-lg text-retro-green mt-1">
                WEB/MOBILE DEV: BUILDING PIXELS, ONE BIT AT A TIME.
            </p>
        </header>
    );
};

export default PageHeader;