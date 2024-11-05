import React from 'react';
import ExternalArrow from './ExternalArrow';
import ChipSet from './ChipSet';
import { ChipProps } from './Chip';

interface ProjectItemProps {
    title: string;
    description: string;
    url?: string;
    chips: ChipProps[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, url, chips }) => {
    const hasUnderline = url ? "hover:underline" : "";

    return (
        <div className="col-start-2 col-end-12 text-sm leading-relaxed text-faded-black border-l-2 pl-3 border-swiss-blue transition-all duration-200 ease-linear hover:border-l-4">
            {/* Title Section */}
            <strong className='text-base'>
                <a href={url} target="_blank" rel="noopener noreferrer" className={hasUnderline}>
                    {title}
                </a>
                {url && (
                    <a href={url} target="_blank" className="inline-block ml-1 mt-1">
                        <ExternalArrow />
                    </a>
                )}
            </strong>

            {/* Description and Chips */}
            <p className='mt-2'>{description}</p>
            <ChipSet items={chips} />
        </div>
    );
};

export default ProjectItem;
