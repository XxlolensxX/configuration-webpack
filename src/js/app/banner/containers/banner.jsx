import React, { Component } from 'react';
import './banner.css';

class Banner extends Component {
    render(){
        return (
            <section className="Banner">
                <div className="container">

                    <p className="Banner__epigraph">Find your Favorite</p>
                    <h1 className="Banner__title">recipes</h1>
                    <button className="Banner__button">Get Started</button>
                    <p className="Banner__text">or send us your own recipes and get rewarded!</p>
                    </div>
              
            </section>
        )
    }
}

export default Banner;