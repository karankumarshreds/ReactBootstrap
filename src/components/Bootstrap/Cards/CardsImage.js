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
    const headingText = ['O','U','R',' ','U','N','I','Q','U','E',' ',
                        'S','E','L','L','I','N','G',' ','P','O','I','N','T','S']
    return (
        <div className="CardImages container-fluid">
        <div className="row justify-content-center header-row">
            <div className="col-6 text-center">
            {headingText.map((each) => <h1 className="display-3 d-inline">{each}</h1>)}
            </div>
        </div>
        <br/>
        <div className="card-container container-fluid my-5 ">
            <div className="row justify-content-between">
            {foods.map((food, i) => {
            return (
                <div className="col-sm-6 col-lg-3 my-3">
                <Card className="MainCard">
                <Card.Img className="image" variant="top" src={food}/>
                    <Card.Body>
                        <Card.Title className="card-title">{foodsNames[i]}</Card.Title>
                        <Card.Text>
                            <p className="mr-5">Our chefs make delicious {foodsNames[i]} cuisines..</p>
                        </Card.Text>
                        <Button>{foodsNames[i]} menu</Button>
                    </Card.Body>
                </Card>
                </div>    
            
            )
            })}
            </div>
        </div>
        </div>
    )
        
}

export default CardsImage;