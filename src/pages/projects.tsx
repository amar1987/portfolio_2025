import React from 'react';
import { projectData } from '@/data/projects';
import { useTypewriter } from '@/hooks/useTypewriter';

const ProjectPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = React.useState<number>(0);
    const selectedProjectData = projectData.find(p => p.id === selectedProject);
    const displayedText = useTypewriter(
        selectedProject === 0 ? projectData[0]?.description || '' : selectedProjectData?.description || '',
        20
    );

    return (
        <section className="md:p-4">
            <div className="border-4 border-lime-400 bg-gray-900 p-4 font-pixel md:w-full lg:w-full">
                <div className="font-mono text-white text-sm mb-4 border-b pb-2">
                    C:\&gt; run project_module.sh
                </div>

                <ul className="space-y-4">
                    {projectData.map((project, index) => (
                        <li
                            key={project.id}
                            onClick={() => setSelectedProject(project.id)}
                            className="cursor-pointer"
                        >
                            <span className="text-white mr-3">[PROJECT_{index + 1}]</span>
                            <span className="text-white">{project.title}</span>

                            {selectedProject === project.id && (
                                <span>
                                    <p className="text-sm text-gray-400 mb-3 mt-2">[STACK] {project.stack}</p>
                                    <p className="text-sm text-white mb-4 whitespace-pre-wrap">
                                        {displayedText}
                                    </p>
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`
    font-pixel text-sm uppercase px-4 py-2 transition duration-100 ease-in-out cursor-pointer
    bg-white hover:bg-gray-400
    // Replaces .retro-press
    active:translate-x-1 active:translate-y-1 active:shadow-none
  `}
                                        >
                                            --- VIEW PROJECT ---
                                        </a>)}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>

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

export default ProjectPage;