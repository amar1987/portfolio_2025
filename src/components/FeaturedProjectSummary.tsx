import { projectData } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { basePath } from '@/utils/basePath';

const FeaturedProjectSummary: React.FC = () => {
    const featuredProjects = projectData.slice(0, 2);

    return (
        <div className="mt-12">
            <h2 className="font-pixel md:text-2xl mb-6 border-b-2 pr-8">
                &gt; FEATURED_PROJECTS</h2>

            <div className="flex-none md:flex flex-row justify-between gap-6 mx-auto md:pr-8">
                {featuredProjects.map((entry) => (
                    <ProjectCard key={entry.id} project={entry} />
                ))}
            </div>

            <div className="text-right mt-4">
                <a href={`${basePath}/projects`} className="font-mono text-sm hover:underline">
                    [View All Projects]
                </a>
            </div>

        </div>
    );
};

export default FeaturedProjectSummary;