import React from 'react';

const WorkExperience: React.FC = () => (
  <>
    <div className="col-span-12">
      <h3 className="text-2xl font-bold tracking-wide text-faded-black">
        Work Experience
      </h3>
    </div>
    <div className="col-span-1"></div>
    <div className="col-span-10 text-sm leading-relaxed text-faded-black border-l-2 pl-3 border-swiss-blue transition-all duration-200 ease-linear hover:border-l-4">
      <p>
        <strong>Buildertrend</strong>
        <br />
        Based in Omaha, Buildertrend is the largest developer of construction site management software.
        In my first summer at Buildertrend, I developed a semantic search prototype leading to the formation of the Silver Sky development team. During my second summer, I contributed to the RebateHawk project, showcasing my ability to innovate and improve software solutions.
      </p>
    </div>
    <div className="col-span-1"></div>
  </>
);

export default WorkExperience;
