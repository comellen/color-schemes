import React from 'react';
import Fade from 'react-reveal/Fade';
import './Seventies.css';

const Seventies = () => {
    return (
        <Fade left cascade>
            <div>
                <div className="colorBar" id="sevenDOrange"></div>
                <div className="colorBar" id="sevenOrange"></div>
                <div className="colorBar" id="sevenTan"></div>
                <div className="colorBar" id="sevenGreen"></div>
                <div className="colorBar" id="sevenBrown"></div>
            </div>
        </Fade>
    );
}
export default Seventies;
