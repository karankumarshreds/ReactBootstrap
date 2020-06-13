import React from 'react';
import './Footer.css';
import insta from './insta.png';
import fb from './fb.png';
const Footer = () => {
    return (
        <>
        <div className="container-fluid text-white">
            <div className="row align-items-center Footer">
                
                <div className="col-md-4 mb-5">
                    <h5>Contact Us</h5>
                    <p>Phone: 465-477-4949</p>
                    <p>Email: customer@hungerbox.com</p>
                </div>
                <div className="col-md-4 mb-5">
                    <p>Follow us on our social media</p>  
                    <img className="mx-2"width={30} src={insta}/>
                    <img width={30} src={fb}/>        
                </div>
                <div className="col-md-4 mb-5">
                    <h5>Fight COVID-19</h5>
                    <p>See how we are fighting COVID-19 
                        and making sure that food you get is all clean 
                        and hygenic.
                    </p>
                    <button className="btn btn-primary btn-small">Read more</button>
                </div>
        
            </div>
        </div>
        </>
    );
}

export default Footer;