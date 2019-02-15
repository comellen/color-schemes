import React from 'react';
import Fade from 'react-reveal/Fade';
import './Stutz.css';

const Stutz = () => {
    return (
        <Fade left cascade>
            <div>
                <div className="colorBar" id="stutzRed"></div>
                <div className="colorBar" id="stutzBrick"></div>
                <div className="colorBar" id="stutzGreen"></div>
                <div className="colorBar" id="stutzBlue"></div>
                <div className="colorBar" id="stutzTan"></div>
            </div>
        </Fade>
    );
}
export default Stutz;
