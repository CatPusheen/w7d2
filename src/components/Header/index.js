import React from 'react';
import style from './style.module.css';

function getContact() {
    alert('Есть контакт!');
    console.log('Есть контакт!');
};

export const Header = () => {
    return (
        <div >
            <div className={style.header}>
                <h1>Hello!</h1>
                <button onClick={getContact}>Click me!</button>
            </div>
            <div className={style.headerText}>
                <div>Welcome to Post Project 👋</div>
               </div>
        </div>
    );
};
