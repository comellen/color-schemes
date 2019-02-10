import React from 'react';
import Fade from 'react-reveal/Fade';
import './A1.css';

const A1 = () => {
    return (
        <Fade left cascade>
            <div class="container">
                <div class="colorBar" id="red"></div>
                <div class="colorBar" id="orange"></div>
                <div class="colorBar" id="lightyellow"></div>
                <div class="colorBar" id="green"></div>
                <div class="colorBar" id="blue"></div>
                <div class="colorBar" id="purple"></div>
                <div class="colorBar" id="pink"></div>
                <div class="colorBar" id="offwhite"></div>
                <div class="colorBar" id="lightgrey"></div>
                <div class="colorBar" id="grey"></div>
                <div class="colorBar" id="black2"></div>
                <div class="colorBar" id="black1"></div>
            </div>
        </Fade>
    );
}

export default A1;