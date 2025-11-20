import RecommendationCard from '@/components/RecommendationCard';
import { recommendationsData } from '@/data/recommendations';

const RecommendationPage: React.FC = () => {
    return (
        <section className="md:p-4">
            <div className="border-4 border-lime-400 bg-gray-900 p-4 font-pixel md:w-full lg:w-full">
                <div className="font-mono text-white text-sm mb-4 border-b pb-2">
                    C:\&gt; run recommendation_module.sh
                </div>

                <div className=" grid grid-cols-1 gap-x-8 gap-y-4">
                    {recommendationsData.map((entry) => (
                        <RecommendationCard key={entry.id} entry={entry} />
                    ))}
                </div>
                <div className="font-mono text-white text-sm mt-6 pt-4 border-t">
                    C:\&gt; <span className="blink">_</span>
                </div>
            </div>

            <div className="text-center mt-12">
                <p className="font-mono  text-sm">
                    END OF FILE. EXECUTION COMPLETE.
                </p>
            </div>
        </section>
    );
};

export default RecommendationPage;