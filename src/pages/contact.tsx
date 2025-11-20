import { socials } from '../data/socials';

const ContactPage: React.FC = () => {
    return (
        <section className="p-4">
            <div className="border-4 border-lime-400 bg-gray-900 p-4 font-pixel  md:w-full lg:w-full">
                <div className="font-mono text-white text-sm mb-4 border-b pb-2">
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
                                <span className="text-white mr-3">
                                    [LINK_{index + 1}]
                                </span>
                                <span className="text-white group-hover:underline">
                                    {social.name}
                                </span>

                                <span className="ml-4 font-pixel ">
                                    {social.name === 'Email' ? '✉️' : '🔗'}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="font-mono text-white text-sm mt-6 pt-4 border-t">
                    C:\&gt; <span className="blink">_</span>
                </div>
            </div>
            <p className="font-pixel text-base  mt-8 text-center">
                &lt; THANK YOU FOR YOUR INTEREST &gt;
            </p>

        </section>
    );
};

export default ContactPage;