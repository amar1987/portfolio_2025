import React, { ReactNode } from 'react';
import Head from 'next/head';
import NavBar from './NavBar';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Amar Doekhie&apos;s Portfolio</title>
            </Head>
            <div className="min-h-screen bg-glass-bg flex flex-col items-center p-4">
                <main className="
            w-full max-w-7xl 
            bg-glass-surface/50 text-glass-text 
            backdrop-blur-lg 
            rounded-2xl 
            flex flex-col min-h-screen 
            shadow-xl  border-glass-surface/50
            p-2 md:p-6 sm:p-10
        ">
                    <div className="mb-6 pb-4 border-b border-glass-surface/40">
                        <NavBar />
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <div className="font-mono text-base text-glass-text">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Layout;