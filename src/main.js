import React from 'react';
import VeriProjects from './components/VeriProjects';
import VeriNav from './components/VeriNav';
import VeriBio from './components/VeriBio';

const Main = () => (
    <div>
        <div className="container">
            <div className="bio">
                <VeriBio />
            </div>
            <div className="main">
                <VeriProjects />
            </div>
        </div>
    </div>
);

export default Main;