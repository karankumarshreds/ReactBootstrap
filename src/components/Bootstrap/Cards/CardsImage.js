import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Chinese from './Chinese1.jpg';
import Indian from './Indian1.jpg';
import American from './American1.jpg';
import Italian from './Italian1.jpg';

import './CardsImages.css';

const CardsImage = () => {
    const foods = [Chinese, Indian, American, Italian];
    const foodsNames = ['Chinese', 'Indian', 'American', 'Italian'];
    for(let food of foods) {

    }
    return (
        <div className="container my-5 CardImages">
            <br/><br/><br/>
            <h1 className="text-center display-3">Our Unique Selling Point</h1>
            <br/><br/><br/>
            <div className="row justify-content-center">
            {foods.map((food, i) => {
            return (
                <div className="col-sm-6 col-lg-3 my-3">
                <Card className="MainCard">
                <Card.Img className="image" variant="top" src={food}/>
                    <Card.Body>
                        <Card.Title className="card-title">{foodsNames[i]}</Card.Title>
                        <Card.Text>
                            <p>Our chefs make delicious {foodsNames[i]} cuisines..</p>
                        </Card.Text>
                        <Button>Full {foodsNames[i]} menu</Button>
                    </Card.Body>
                </Card>
                </div>    
            
            )
            })}
            </div>
        </div>
    )
        
}

export default CardsImage;