import './../scss/main.scss';
//import '../css/main.css'
// import 'popper.js';
// import 'jquery';
// import 'bootstrap';
import React from 'react';
import { Render } from 'react-dom';
import HelloWorld from './components/basic_component/helloWorld.jsx';


Render(<HelloWorld />, document.getElementById('app'));
console.log("Holo Mundo con watch;)");