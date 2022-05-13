import React, { useState } from 'react';
import { postData } from '../posts';
import { Header } from './components/Header';
import { Cards } from './components/ListCards';
import { Footer } from './components/Footer';

export const App = () => {
    const [itemCard, setItemCard] = useState(postData);
    return (
        <div>
            <Header />
            <Cards list={itemCard} />
            <Footer />
        </div>
    );
};
