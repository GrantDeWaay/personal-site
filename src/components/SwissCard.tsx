import React from "react";

type SwissCardProps = {
  title: string;
  subtitle: string;
  content: string;
  footer: string;
};

const SwissCard: React.FC<SwissCardProps> = ({ title, subtitle, content, footer }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-md p-6 max-w-sm mx-auto text-left">
      <div className="grid grid-rows-3 gap-4">
        <div className="border-b pb-2">
          <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-tight">
            {title}
          </h1>
          <p className="text-sm text-gray-600 uppercase">{subtitle}</p>
        </div>
        <div className="leading-relaxed text-gray-800">
          <p>{content}</p>
        </div>
        <div className="border-t pt-2 text-xs text-gray-500 uppercase tracking-widest">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default SwissCard;
