interface ExperienceEntry {
    id: number;
    name: string;
    recommendation: string;
}

interface RecommendationCardProps {
    entry: ExperienceEntry;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({ entry }) => {
    return (
        <div className="border-4 border-lime-400 bg-gray-900 p-4 font-pixel md:w-full lg:w-full mb-8">
            <div className="flex justify-between items-start  pb-2">
                <h3 className="md:text-md lg:text-xl  text-lime-400  border-b-2 border-lime-400">
                    {entry.name}
                </h3>
            </div>
            <p className="font-mono text-white text-sm mt-4 whitespace-pre-wrap">
                {entry.recommendation}
            </p>
        </div>
    );
};

export default RecommendationCard;