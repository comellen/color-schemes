import React from 'react';
import Fade from 'react-reveal/Fade';
import './A1.css';

const A1 = () => {
    return (
        <Fade left cascade>
            <div className="colorBar" id="red"></div>
            <div className="colorBar" id="orange"></div>
            <div className="colorBar" id="lightyellow"></div>
            <div className="colorBar" id="green"></div>
            <div className="colorBar" id="blue"></div>
            <div className="colorBar" id="purple"></div>
            <div className="colorBar" id="pink"></div>
            <div className="colorBar" id="offwhite"></div>
            <div className="colorBar" id="lightgrey"></div>
            <div className="colorBar" id="grey"></div>
            <div className="colorBar" id="black2"></div>
            <div className="colorBar" id="black1"></div>
        </Fade>
    );
}

export default A1;