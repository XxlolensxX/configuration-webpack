import React, { Component } from 'react';
import iphone from './../../../../images/iphone.png';
import './about.css';

class About extends Component {
    render(){
        return(
            <section className="horizon horizon--npb bg-gray">
                <div className="container">
                    <div className="row About">
                        <figure className="col-sm-5 About__img-container">
                            <img className="About__img" src={iphone} alt="" />
                        </figure>
                        <div className="col-sm-7 About__content">
                            <h2 className="Section__title">Introducing the FUDI App</h2>
                            <p>Morbi eget posuere dolor. Pellentesque cursus aliquet aliquet. Aeneanet 
                            felis sit amet diam mollis ullamcorper. Nullam consequat sem a ante vest
                            ibulum tristique. Suspendisse tristique lacus ac mattis porta.</p>

                            <p>Vivamus ligula quam, vehicula non lacinia sed, faucibus sit amet libero. In 
                            libero dui, eleifend eu nisi id, egestas fringilla odio. In varius quam a mas
                            sa hendrerit ullamcorper a eu justo. Suspendisse porta mattis convallis. 
                            Aenean tempus ligula ac odio rhoncus, quis aliquam dolor accumsan.</p>

                            <p>Suspendisse aliquet felis consectetur libero congue, sed pulvinar diam 
                            malesuada. Duis vehicula a nibh id hendrerit. Donec sit amet ultrices 
                            ante, a mattis massa. </p>

                            <div className="About__buttons">
                                <a href="#" className="About__button app-button--google-play" title="lorem ipsum"></a>
                                <a href="#" className="About__button app-button--apple-store" title="lorem ipsum"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}

export default About;