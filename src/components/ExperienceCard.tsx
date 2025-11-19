import React from 'react';

interface ExperienceEntry {
    company: string;
    role: string;
    duration: string;
    location: string;
    worktype: string;
    stack: string;
    impacts: string[];
}

interface ExperienceCardProps {
    entry: ExperienceEntry;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ entry }) => {
    return (
        <div className="border-4 border-lime-400 bg-gray-900 p-4 font-pixel md:w-full lg:w-full mb-8">

            <div className="flex-none lg:flex justify-between items-start pb-2">
                <h3 className="md:text-md lg:text-xl text-lime-400  border-b-2 border-lime-400">
                    {entry.role} @ {entry.company}
                </h3>
                <span className="font-mono text-gray-400 text-sm md:ml-4 whitespace-nowrap">
                    {entry.duration}
                </span>
            </div>

            <p className="font-mono text-gray-400 text-sm mb-4">
                {entry.location} - {entry.worktype}
            </p>


            <ul className="space-y-2">
                {entry.impacts.map((impact, index) => (
                    <li key={index} className="font-mono text-white text-sm mt-4 whitespace-pre-wrap">
                        <span className=" mr-3">&gt;</span>
                        <span className="flex-1 leading-relaxed">{impact}</span>
                    </li>
                ))}
            </ul>
            <p className="font-mono text-gray-400 text-sm mt-4">
                [STACK: {entry.stack}]
            </p>
        </div>
    );
};

export default ExperienceCard;