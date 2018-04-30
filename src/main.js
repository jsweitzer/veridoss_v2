import React from 'react';
import VeriProjects from './components/VeriProjects';
import VeriNav from './components/VeriNav';
import VeriBio from './components/VeriBio';
import VeriFooter from './components/VeriFooter';

const Main = () => (
    <div>
    <div className="container">
        <div className="fixed-container">
            <div className="bio">
                <VeriBio />
            </div>
        </div>
        <div className="container">
            <div className="main">
                <VeriProjects />
            </div>
        </div>
    </div>
    <VeriFooter />
    </div>
);

export default Main;