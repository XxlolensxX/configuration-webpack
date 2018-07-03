import React, { Component } from 'react';
import Driver from '../components/driver.jsx';

class Drivers extends Component {
    render(){
        return (
            <div className="horizon">
                <div className="container">
                    <Driver />
                </div>
            </div>
        )
    }
    
}

export default Drivers;