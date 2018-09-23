import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";

const hdr = document.getElementById('header');
const app = document.getElementById('root');

// Rendering the header
ReactDOM.render(
    <Header/>,
    hdr
);
// Rendering the navigation bar
//ReactDOM.render(
//    <Menu/>,
//    app
//);