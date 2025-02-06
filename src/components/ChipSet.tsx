import React from 'react';
import '../App.css'
import Chip, { ChipProps } from './Chip';

export type ChipSetProps = {
    items: ChipProps[],
};


const ChipSet: React.FC<ChipSetProps> = ({ items }) => {
    const listItems = items.map((item) =>
        <Chip text={item.text} type={item.type}/>
    ); 
    return (
        <div className={"flex flex-wrap gap-1 py-2"}>{listItems}</div>
    )
};

export default ChipSet;
