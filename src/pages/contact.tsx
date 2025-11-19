import React from 'react';
import { socials } from '../data/socials'; // Import the new data file

const ContactPage: React.FC = () => {
    return (
        <section className="p-4">
            <div className="border-4 border-lime-400 bg-gray-900 p-4 font-pixel  md:w-full lg:w-full">
                <div className="font-mono text-white text-sm mb-4 border-b border-retro-border pb-2">
                    C:\&gt; run contact_module.sh
                </div>

                <ul className="space-y-4">
                    {socials.map((social, index) => (
                        <li key={social.name}>
                            <a
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-mono text-white hover:text-retro-accent transition-colors duration-150 flex items-center group"
                            >
                                {/* Command Prefix */}
                                <span className="text-white mr-3">
                                    [LINK_{index + 1}]
                                </span>

                                {/* Social Name */}
                                <span className="text-white group-hover:underline">
                                    {social.name}
                                </span>

                                {/* Status/Icon Indicator (Using an Emoji as a fallback for the icon) */}
                                <span className="ml-4 font-pixel text-retro-red">
                                    {social.name === 'Email' ? '✉️' : '🔗'}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="font-mono text-white text-sm mt-6 pt-4 border-t border-retro-border">
                    C:\&gt; <span className="blink">_</span>
                </div>
            </div>

            {/* Optional: Call to Action below the box */}
            <p className="font-pixel text-base  mt-8 text-center">
                &lt; THANK YOU FOR YOUR INTEREST &gt;
            </p>

        </section>
    );
};

export default ContactPage;