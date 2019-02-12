import React, { Component } from 'react';
import RoutesArray from './RoutesArray';
import './Navigation.css';

export default class Navigation extends Component {

    randomRoute = () => {
        let r = parseInt(Math.random() * RoutesArray.length);
        return RoutesArray[r].path;
    }
    
    render() {
        return (
            <div className="navBar">
                <a className="logo" href="/">
                    <span id="logoRed">c</span>
                    <span id="logoOrange">o</span>
                    <span id="logoLightyellow">l</span>
                    <span id="logoGreen">o</span>
                    <span id="logoBlue">r</span>
                    <span id="logoPurple">s</span>
                </a>
                <span className="fillRemainingSpace"></span>
                <a className="randomLink" href={this.randomRoute()}>random</a>
            </div>
        );
    }

}