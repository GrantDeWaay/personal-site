import React from "react";

type LinkProps = {
  text: string,
  url: string
};

const Link: React.FC<LinkProps> = ({ text, url }) => {
  return (
    <a href={url} className="font-sans font-bold underline" >{text}</a>
  );
};

export default Link;
