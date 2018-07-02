import React, { Component } from 'react';
import Header from '../header/containers/header.jsx';
import Banner from '../banner/containers/banner.jsx';
import './overlay.css';

class Overlay extends Component {
    render() {
        return ([
            <div className="Overlay">
                <Header />
                <Banner />
            </div>
        ])
    }
}

export default Overlay;