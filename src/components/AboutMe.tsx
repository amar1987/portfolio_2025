import { basePath } from '@/utils/basePath';
import Image from 'next/image';

const AboutMe: React.FC = () => (
    <div className="mb-12 p-4">
        <h2 className="font-pixel text-2xl mb-6 border-b-2 pb-1">
            &gt; ABOUT_ME
        </h2>
        <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
                <Image
                    src={`${basePath}/images/Amar.jpeg`}
                    alt="Amar Doekhie"
                    width={200}
                    height={200}
                    className="border-4 object-cover"
                />
            </div>
            <div className="flex-1">
                <p className="font-mono text-base leading-relaxed">
                    Lead Front-End Developer and Solutions Architect with 8+ years of experience designing
                    and delivering scalable web and mobile applications. Skilled in ReactJS, React Native and
                    DevOps practices, with a strong focus on performance, security, and UX excellence.
                    <br /><br />
                    Proven success in leading international teams, mentoring developers, and implementing
                    CI/CD pipelines across distributed environments. Latest project with ANWB
                    Energie on an innovative React Native platform. Open to freelance or remote opportunities
                    across Europe and the United States.
                </p>
            </div>
        </div>
    </div>
);

export default AboutMe;