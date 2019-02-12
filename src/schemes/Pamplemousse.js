import React from 'react';
import Fade from 'react-reveal/Fade';
import './Pamplemousse.css';

const Pamplemousse = () => {
    return (
        <Fade left cascade>
            <div class="colorBar" id="grapefruitLC"></div>
            <div class="colorBar" id="pinkLC"></div>
            <div class="colorBar" id="yellowLC"></div>
            <div class="colorBar" id="tealLC"></div>
            <div class="colorBar" id="blueLC"></div>
            <div class="colorBar" id="navyLC"></div>
        </Fade>
    );
}

export default Pamplemousse;