import React from 'react';

// Define the shape of your project data for TypeScript safety
interface Project {
    id: number;
    title: string;
    stack: string;
    description: string;
    liveLink?: string;
    githubLink?: string;
}

interface ProjectCardProps {
    project: Project;
}
const buttonBaseClasses = "font-pixel text-sm uppercase px-4 py-2 border-4 border-black transition duration-100 ease-in-out cursor-pointer shadow-retro-button";
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="border-4 border-lime-400 bg-gray-900 p-4 font-pixel md:w-full lg:w-full mb-8">

            <h3 className="md:text-md lg:text-xl text-lime-400 mb-2 border-b-2 border-lime-400 pb-1">
                {project.title.toUpperCase()}
            </h3>

            <p className="text-sm text-gray-400 mb-3">{project.stack}</p>

            <p className="text-sm text-white mb-4 whitespace-pre-wrap">
                {project.description}
            </p>

            <div className="flex space-x-4">
                {project.liveLink && (
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
    ${buttonBaseClasses} 
    bg-white hover:bg-gray-400
    // Replaces .retro-press
    active:translate-x-1 active:translate-y-1 active:shadow-none
  `}
                    >
                        PROJECT
                    </a>)}
                {project.githubLink && (
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
    ${buttonBaseClasses}
    bg-retro-border border-retro-border hover:bg-violet-400
    // Replaces .retro-press
    active:translate-x-1 active:translate-y-1 active:shadow-none
  `}
                    >
                        CODE
                    </a>)}
            </div>
        </div>
    );
};

export default ProjectCard;