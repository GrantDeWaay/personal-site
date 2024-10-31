import React from 'react';
import ProjectItem from './ProjectItem';

const Projects: React.FC = () => (
  <>
    <div className="col-span-12">
      <h3 className="text-2xl font-bold tracking-wide text-faded-black">
        Projects
      </h3>
    </div>
    <ProjectItem
      title="Harvard Burger - HackHarvard 2024"
      description="Winner of the Funniest Hack Award at HackHarvard 2024, Harvard Burger is a digital drive-thru kiosk with a twist. It interprets the user's spoken order with smart semantic processing, converting their requests into a complete order from a preset menu. But here’s the fun part: the kiosk responds with a cheeky, less-than-polite comeback worthy of a snarky fast-food employee, adding a humorous edge to the drive-thru experience."
      url="https://devpost.com/software/harvard-burger"
      chips={['Python', 'TypeScript', 'Flask', 'React']}
    />
    <ProjectItem
      title="League of Legends Voice Chat Application [WIP]"
      description="This is an application that enables users to invite other players from a LoL Ranked SoloQ lobby to voice chat without a Discord server. This is my final project for my graduate-level Distributed Systems course, and will be completed by the end of the course."
      url="https://github.com/GrantDeWaay/DistributedSystemsFinalProject"
      chips={['Go', 'TypeScript', 'React', 'WebRTC']}
    />
    <ProjectItem
      title="AI Checkers Bot"
      description="Checkers bot that will always play optimally. Implemented using Monte-carlo trees and other AI fundamentals."
      chips={['Java']}
    />
    <ProjectItem
      title="Spime: Transparent LCA for Consumer Products [Ongoing]"
      description="Spime is a Transparent LCA system that enables consumers to see exactly where their products come from, from cradle to grave. This is an ongoing project that I am doing for an independent study, which should have a full write up and deliverable coming at the end of the semester."
      url="https://spimesc.com/innovate/"
      chips={['C#', 'TypeScript', 'React']}
    />
  </>
);

export default Projects;
