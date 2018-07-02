import './../scss/main.scss';
//import '../css/main.css'
import 'popper.js';
import 'jquery';
import 'bootstrap';

import React from 'react';
import { render } from 'react-dom';
import Title from './app/title/title.jsx';
import Nav from './app/nav/containers/nav-layout.jsx';

//rendereando un array de componentes[], si son mas de 1

render([
    <Title />,
    <Nav />    

], document.getElementById('app'));

console.log("Holo Mundo con watch;)");