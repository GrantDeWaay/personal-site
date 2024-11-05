import React from 'react';
import ChipSet from './ChipSet';

// Define the ChipProps type if not already defined
type ChipProps = {
  text: string,
  type?: number
};

const WorkExperience: React.FC = () => (
  <>
    <div className="col-span-12">
      <h3 className="text-2xl font-bold tracking-wide text-faded-black">
        Work Experience
      </h3>
    </div>
    <div className="col-start-2 col-end-12 border-l-2 pl-3 border-swiss-yellow transition-all duration-200 ease-linear hover:border-l-4">
      <p className='text-base leading-relaxed text-faded-black'>
        <strong>Buildertrend - Summer 2024 Software Engineering Internship</strong>
        <br />
        <strong className='italic'>AI-Driven Rebate Redemption Automation and Product Matching</strong>
        </p>
        <div className='mt-2'>
        <ul className='list-disc pl-5 text-sm leading-relaxed text-faded-black'>
        <li>Enhanced rebate matching accuracy by 10% by implementing a GPT-4 LLM pipeline that improved AI-driven product searches for rebate-eligible items within RebateHawk, streamlining refunds for Buildertrend’s users.</li>
        <li>Designed a scalable architecture for flexible LLM integration, enabling seamless switching between OpenAI and Google Gemini, accelerating model experimentation and boosting system adaptability.</li>
        <li>Reduced manual validation time for testers by implementing semantic search confidence filtering, optimizing workflows and increasing efficiency.</li>
        <li>Collaborated in an Agile team using Microsoft Azure for CI/CD and project management, ensuring secure deployments, high-quality code, and reliable project rollouts.</li>
      </ul>
        </div>

        
      <ChipSet 
        items={[
          { text: 'C#', },
          { text: 'TypeScript' },
          { text: '.NET Core', type: 1 },
          { text: 'React', type: 1 },
          { text: 'MongoDB', type: 1 },
          { text: 'OpenAI', type: 1 },
          { text: 'Microsoft SQL Server', type: 1 },
        ]} 
      />
    </div>
    <div className="col-span-1"></div>

    <div className="col-span-1"></div>
    <div className="col-start-2 col-end-12 border-l-2 pl-3 border-swiss-yellow transition-all duration-200 ease-linear hover:border-l-4">
      <p className='text-base leading-relaxed text-faded-black'>
        <strong>Buildertrend - Summer 2023 Software Engineering Internship</strong>
        <br />
        <strong className='italic'>Semantic Search Prototype</strong>
      </p>
      <div className='mt-2'>
      <ul className='list-disc pl-4 text-sm leading-relaxed text-faded-black'>
        <li>Improved search accuracy by 30% by developing a semantic search prototype with OpenAI’s embedding models, providing a scalable foundation for future AI-driven search solutions.</li>
        <li>Increased interest in AI-driven search by designing a React-based testing environment, enabling Buildertrend to explore and expand on the prototype on a team I would join the following summer.</li>
        <li>Enabled cross-team integration by building a Flask backend to serialize and query search results, facilitating seamless adoption of the semantic search engine across applications.</li>
      </ul>
      </div>

      <ChipSet 
        items={[
          { text: 'Python' },
          { text: 'TypeScript' },
          { text: 'React', type: 1 },
          { text: 'OpenAI', type: 1 },
          { text: 'Chroma DB', type: 1 },
          { text: 'LangChain', type: 1 },
        ]} 
      />
    </div>
  </>
);

export default WorkExperience;
