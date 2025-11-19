import React from 'react';
import ExperienceCard from './ExperienceCard';
import { recommendationsData } from '../data/recommendations';
import RecommendationCard from './RecommendationCard';

const FeaturedRecommendationSummary: React.FC = () => {
    const featuredRecommendations = recommendationsData.slice(0, 3);

    return (
        <div className="mt-12">
            <h2 className="font-pixel md:text-2xl mb-6 border-b-2 md:pr-8">
                &gt; FEATURED_RECOMMENDATIONS
            </h2>

            <div className=" flex-none md:flex flex-row justify-between gap-6 mx-auto ">
                {featuredRecommendations.map((entry) => (
                    <RecommendationCard key={entry.id} entry={entry} />
                ))}
            </div>

            <div className="text-right mt-4">
                <a href="/recommendations" className="font-mono text-sm text-retro-green hover:underline">
                    [View All Recommendations]
                </a>
            </div>
        </div>
    );
};

export default FeaturedRecommendationSummary;