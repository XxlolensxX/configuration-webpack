import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './driver.css';

const Driver = () => (
    <div className="row">
        <div className="col-sm-4 Driver">
            <div className="Driver__icon">
                <span className="Driver__icon--border"><FontAwesomeIcon icon="stroopwafel" /></span>
            </div>
            <h2 className="Driver__title">Get Inspired</h2>
            <p className="Driver__text">Lorem ipsum dolor sit amet, consectetur adipisc
                Pellentesque vel enim a elit viverra elementuma.
                 Aliquam erat volutpat.</p>   
        </div>
        <div className="col-sm-4 Driver">
            <div className="Driver__icon">
                <span className="Driver__icon--border"><FontAwesomeIcon icon="lemon" /></span>
            </div>
            <h2 className="Driver__title">Get Inspired</h2>
            <p className="Driver__text">Lorem ipsum dolor sit amet, consectetur adipisc
                Pellentesque vel enim a elit viverra elementuma.
                 Aliquam erat volutpat.</p>   
        </div>
        <div className="col-sm-4 Driver">
            <div className="Driver__icon">
                <span className="Driver__icon--border"><FontAwesomeIcon icon="utensils" /></span>
            </div>
            <h2 className="Driver__title">Get Inspired</h2>
            <p className="Driver__text">Lorem ipsum dolor sit amet, consectetur adipisc
                Pellentesque vel enim a elit viverra elementuma.
                 Aliquam erat volutpat.</p>   
        </div>
    </div>
    
);

export default Driver;