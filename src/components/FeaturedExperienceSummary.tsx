import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../data/experience';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/portfolio_2025' : '';

const FeaturedExperienceSummary: React.FC = () => {
    const featuredExperience = experienceData.slice(0, 2);

    return (
        <div className="mt-12">
            <h2 className="font-pixel md:text-2xl mb-6 border-b-2 pr-8">
                &gt; FEATURED_EXPERIENCE
            </h2>

            <div className="flex-none md:flex flex-row justify-between gap-6 mx-auto md:pr-8">
                {featuredExperience.map((entry) => (
                    <ExperienceCard key={entry.id} entry={entry} />
                ))}
            </div>

            <div className="text-right mt-4">
                <a href={`${basePath}/experience`} className="font-mono text-sm text-retro-green hover:underline">
                    [View All Experiences]
                </a>
            </div>
        </div>
    );
};

export default FeaturedExperienceSummary;