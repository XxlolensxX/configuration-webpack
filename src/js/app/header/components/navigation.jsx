import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navigation.css';

const Navigation  = () => (
    <ul className="Navigation__ul">
        <li className="Navigation__item"><a className="Navigation__item__a" href="" title="">Login</a></li>
        <li className="Navigation__item"><a className="Navigation__item__a" href="" title="">Sing Up</a></li>
        <li className="Navigation__item"><a className="Navigation__item__a" href="" title=""><FontAwesomeIcon icon="ellipsis-v" /></a></li>
    </ul>
);

export default Navigation;