import './../scss/main.scss';
//import '../css/main.css'
// import 'popper.js';
// import 'jquery';
// import 'bootstrap';

//rendereando un array de componentes[], si son mas de 1
import React from 'react';
import { render } from 'react-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faStroopwafel, faLemon, faUtensils } from '@fortawesome/free-solid-svg-icons';
 
library.add(faEllipsisV,faStroopwafel, faLemon, faUtensils)

//imports components
import Overlay from './app/overlay/overlay.jsx';
import Drivers from './app/drivers/containers/drivers.jsx';

const app = document.getElementById('app');

render(  [
    <Overlay className="Overlay"/>,
    <Drivers />

],  app)

console.log("Holo Mundo de;)");