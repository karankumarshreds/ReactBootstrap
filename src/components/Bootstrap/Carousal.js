import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousal.css';
const Carousal = () => {
    return (
        <div className="Carousal">
        <Carousel className="Carousal-Item">

        <Carousel.Item>
            <div
            className="d-block"
            id="img1"
            >
            </div>
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>  
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block"
            src="https://images.unsplash.com/photo-1541013406133-94ed77ee8ba8?ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
       
        </Carousel>
        </div>
    )
}

export default Carousal;