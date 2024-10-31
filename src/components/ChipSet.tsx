import React from 'react';
import '../App.css'
import Chip from './Chip';

type ChipSetProps = {
    items: string[],
    type?: number
};


const ChipSet: React.FC<ChipSetProps> = ({ items, type }) => {
    const listItems = items.map((item) =>
        <Chip text={item} type={type}/>
    ); 
    return (
        <div className={"flex flex-wrap gap-1 pt-1"}>{listItems}</div>
    )
};

export default ChipSet;
