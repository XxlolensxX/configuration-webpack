import React, { Component } from 'react';
import Navigation from '../components/navigation.jsx';
import Brand from '../components/brand.jsx';

import './header.css';

class Header extends Component {
    render() {
        return (
            
            <header className="Header">
                <div className="container">
                    <nav className="Header__nav">
                        <Brand src="images/logo.png"/>
                        <Navigation />
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;