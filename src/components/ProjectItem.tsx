import React from 'react';
import ExternalArrow from './ExternalArrow';
import ChipSet from './ChipSet';

interface ProjectItemProps {
    title: string;
    description: string;
    url?: string;
    chips: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, url, chips }) => {
    const hasUnderline = url ? "hover:underline" : "";
    return (
        <>
            <div className='col-span-1' />
            <div className="col-span-10 text-sm leading-relaxed text-faded-black border-l-2 pl-3 border-swiss-yellow transition-all duration-200 ease-linear hover:border-l-4 ">
                <strong>
                    <a href={url} target="_blank" rel="noopener noreferrer" className={hasUnderline}>
                        {title}
                    </a>
                </strong>
                {url && (
                    <a href={url} target="_blank" className="inline-block ml-1 mt-1">
                        <ExternalArrow />
                    </a>
                )}
                
                <p>{description}</p>
                <ChipSet items={chips} />
            </div>
            <div className='col-span-1' />
        </>
    );
};

export default ProjectItem;
