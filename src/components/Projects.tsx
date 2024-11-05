import React from 'react';
import ProjectItem from './ProjectItem';

// Define the ChipProps type
type ChipProps = {
  text: string,
  type?: number
};

const Projects: React.FC = () => (
  <>
    <div className="col-span-12">
      <h3 className="text-2xl font-bold tracking-wide text-faded-black">
        Projects
      </h3>
    </div>
    <ProjectItem
      title="Harvard Burger - HackHarvard 2024"
      description="Winner of the Funniest Hack Award at HackHarvard 2024, Harvard Burger is a digital drive-thru kiosk with a twist. It interprets the user's spoken order with smart semantic processing, converting their requests into a complete order from a preset menu. But here's the fun part: the kiosk responds with a cheeky, less-than-polite comeback worthy of a snarky fast-food employee, adding a humorous edge to the drive-thru experience."
      url="https://devpost.com/software/harvard-burger"
      chips={[
        { text: 'Python'},
        { text: 'TypeScript' },
        { text: 'Flask', type: 1 },
        { text: 'React', type: 1 },
      ]}
    />
    <ProjectItem
      title="League of Legends Voice Chat Application [WIP]"
      description="This is an application that enables users to invite other players from a LoL Ranked SoloQ lobby to voice chat without a Discord server. This is my final project for my graduate-level Distributed Systems course, and will be completed by the end of the course."
      url="https://github.com/GrantDeWaay/DistributedSystemsFinalProject"
      chips={[
        { text: 'Go' },
        { text: 'TypeScript' },
        { text: 'React', type: 1 },
        { text: 'WebRTC', type: 1 },
      ]}
    />
    <ProjectItem
      title="Code 42 - Programming Learning Platform for Android Devices"
      description="
In our App Development course, my team and I created an Android app that teaches kids to code in Java, Python, and Go, incorporating class management features like those in Zybooks and LeetCode. Professors can customize assignments, manage courses, enroll students, and adjust grades. To ensure security, we implemented a robust protocol with pre-execution analysis and validation checks to prevent malicious code from running on our servers."
      url="https://youtu.be/U8CLRbqwvb0?si=FhTaJPcUrLc-wmF5"
      chips={[
        { text: 'Java' },
        { text: 'Python'},
        { text: 'Go'},
        { text: 'Android Studio', type: 1 },
        { text: 'Spring Boot', type: 1},
        { text: 'MySQL', type: 1},
      ]}
    />
    <ProjectItem
      title="Optimal Play AI Checkers Bot"
      description="
I developed an MCTS-based AI to analyze game states and suggest optimal moves, implementing selection, expansion, simulation, and backpropagation steps with the UCB1 formula. I designed code to enforce game rules for move generation and demonstrated advanced AI mechanics in an adversarial context. Additionally, I created a GUI to visually indicate valid moves and provided real-time feedback while conducting performance testing on exploration constants to evaluate AI move quality."
      chips={[
        { text: 'Java' },
        { text: 'Monte Carlo Tree Search (MCTS)', type: 1 },
        { text: 'AI-based Game Theory', type: 1  },
      ]}
    />
    <ProjectItem
      title="Spime: Transparent LCA for Consumer Products [Ongoing]"
      description="Spime is a Transparent LCA system that enables consumers to see exactly where their products come from, from cradle to grave. This is an ongoing project that I am doing for an independent study, which should have a full write up and deliverable coming at the end of the semester."
      url="https://spimesc.com/innovate/"
      chips={[
        { text: 'C#' },
        { text: 'TypeScript'},
        { text: 'React', type: 1},
      ]}
    />
    <ProjectItem
      title="My Personal Website (This)"
      description="I drew inspiration from a range of designers to bring this portfolio website to life. For the modular grid layout, I referenced Grid Systems in Graphic Design by Josef Müller-Brockmann. I also applied elements of Dieter Rams' 10 Principles of Good Design, reminding myself to keep it simple, alongside influences from Swiss graphic designers that primarily work with the Helvetica font."
      url="https://github.com/GrantDeWaay/personal-site"
      chips={[
        { text: 'TypeScript'},
        { text: 'React', type: 1 },
        { text: 'Tailwind CSS', type: 1 },
      ]}
    />
  </>
);

export default Projects;
