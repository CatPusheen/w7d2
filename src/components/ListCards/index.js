import React from 'react'
import { Card } from '../Card';
import './index.css';

export const Cards = ({ list }) => {
    return (

            <div className="cards">
                {list.map((item, i) => (
                    <Card key={i} itemCard={item} />
                ))}
            </div>
    );
};