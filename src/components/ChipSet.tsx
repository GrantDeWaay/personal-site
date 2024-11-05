import React from 'react';
import '../App.css'
import Chip, { ChipProps } from './Chip';

type ChipSetProps = {
    items: ChipProps[],
    type?: number
};


const ChipSet: React.FC<ChipSetProps> = ({ items, type }) => {
    const listItems = items.map((item) =>
        <Chip text={item.text} type={item.type}/>
    ); 
    return (
        <div className={"flex flex-wrap gap-1 pt-2"}>{listItems}</div>
    )
};

export default ChipSet;
