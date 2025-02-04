import React from "react";
import ExternalArrow from "./ExternalArrow";
import { useMyContext } from "./GrantalyticsContext";

type LinkProps = {
  text: string,
  url: string,
  disable?: boolean
};

const Link: React.FC<LinkProps> = ({ text, url, disable }) => {
  const {addInteraction} = useMyContext();
  return (
    <a href={url} className="font-sans text-faded-black text-sm" >
    <strong>
                <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline" onClick={() => addInteraction(`visited ${url}`)}>
                    {text}
                </a>
            </strong>
            {url && !disable && (<a href={url} target="_blank" className="inline-block ml-1 mt-1">
                <ExternalArrow />
            </a>)}
    </a>
  );
};

export default Link;
