import React from 'react';
import LinkList from './LinkList';
import './Home.css';

const Home = () => {
    return (
        <div class="home">
            <h1 class="homeText">colors</h1>
            <LinkList />
        </div>
    );
}

export default Home;