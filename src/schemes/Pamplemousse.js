import React from 'react';
import Fade from 'react-reveal/Fade';
import './Pamplemousse.css';

const Pamplemousse = () => {
    return (
        <Fade left cascade>
            <div>
                <div className="colorBar" id="grapefruitLC"></div>
                <div className="colorBar" id="pinkLC"></div>
                <div className="colorBar" id="yellowLC"></div>
                <div className="colorBar" id="tealLC"></div>
                <div className="colorBar" id="blueLC"></div>
                <div className="colorBar" id="navyLC"></div>
            </div>
        </Fade>
    );
}
export default Pamplemousse;
