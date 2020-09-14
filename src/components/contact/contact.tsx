import React from 'react';
import './contact.css';
import { contactInfo } from '../../portfolio';
import Social from '../social/social';

function Contact() {
    const Fade: any = require('react-reveal/Fade');
    return (
        <Fade borrom duration={800}>
        <section className="section--contact" id="contact">
            <div className="inner">

                <div className="wrapper">

                    <div className="contact-title">
                        <p>{contactInfo.title}</p>
                    </div>
                    <div className="contact-subtitle">
                        <p>{contactInfo.subTitle}</p>
                    </div>
                    <div className="contact-introduce">
                        <p>{contactInfo.introduce}</p>
                    </div>
                    <div className="contact-content">
                        <p>I'm Open To Opportunities! 😁</p>
                    </div>
                    <Social />

                </div>
                <div className="img-ikalli">
                    <img src={require("../../assets/Ikalli.jpg")} alt="happy Ikalli" />
                </div>
                
            </div>
        </section>
        </Fade>
    );
}
export default Contact;