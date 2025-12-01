import React from 'react';
import './_styles.scss';
import { Routes, Route } from "react-router-dom";
import { Education } from '../Education';
import { Skills } from '../Skills';
import { About } from '../About';
import { Contact } from '../Contact';
import { Shopify } from '../Shopify';

export const Main = () => {
    return (
        <main className="mainContainer">
            <Routes>
                    <Route exact path='/' element={<Shopify/>}></Route>
                    <Route exact path='/education' element={<Education/>}></Route>
                    <Route exact path='/skills' element={<Skills/>}></Route>
                    <Route exact path='/shopify' element={<Shopify/>}></Route>
                    <Route exact path='/about' element={<About/>}></Route>
                    <Route exact path='/contact' element={<Contact/>}></Route>
            </Routes>
        
        </main>
    );
};

