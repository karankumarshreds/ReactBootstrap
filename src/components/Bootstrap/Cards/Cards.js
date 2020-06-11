import React from 'react';
import Card from 'react-bootstrap/Card';

const Cards = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-6">
            <Card>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some random text Some random text Some random text Some random text 
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>    
            </div>
            <br/><br/><br/><br/><br/>
        </div>
    )
}

export default Cards;