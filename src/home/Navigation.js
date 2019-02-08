import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navBar">
                <a className="logo" href="/">
                    <span id="red">c</span>
                    <span id="orange">o</span>
                    <span id="yellow">l</span>
                    <span id="green">o</span>
                    <span id="blue">r</span>
                    <span id="purple">s</span>
                </a>
                <span className="fillRemainingSpace"></span>
                <a className="randomLink" href="/">random</a>
            </div>
        );
    }
}