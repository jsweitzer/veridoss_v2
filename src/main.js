import React from 'react';
import VeriProjects from './components/VeriProjects';
import VeriNav from './components/VeriNav';
import VeriBio from './components/VeriBio';
import VeriFooter from './components/VeriFooter';
import VeriNews from './components/VeriNews';

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
            <div className="container">
                <div className="news">
                    <VeriNews />
                </div>
            </div>
        </div>
    </div>
);

export default Main;