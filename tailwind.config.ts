import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            // --- ORIGINAL RETRO VAPORWAVE PALETTE ---
            'glass-bg': '#F0F4F8',       // Very light background (Light Blue/Gray)
            'glass-surface': '#FFFFFF',  // Pure white for glass elements (used with opacity)
            'glass-text': '#1A202C',     // Dark text for high contrast (Near Black)
            'glass-accent': '#4A90E2',   // Primary Blue accent (highlights)
            'glass-secondary': '#7A3F9D', // Secondary Purple for softer elements (Darker for contrast)
        },
        fontFamily: {
            pixel: ['"Press Start 2P"', 'cursive'],
            mono: ['"VT323"', 'monospace'],
        },
        boxShadow: {
            'retro-outline': '6px 6px 0px 0px #000000', // Heavy 3D shadow
            'retro-button': '3px 3px 0px 0px #000000',  // Lighter button shadow
        },
        extend: {
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
            },
            animation: {
                blink: 'blink 1s step-end infinite',
            },
        },
    },
} satisfies Config;