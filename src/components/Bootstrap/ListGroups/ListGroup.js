import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

const _ListGroup = () => {
    return (
        <div>
            <ListGroup>
                <div className="container">
                <ListGroupItem className="active">Active list item</ListGroupItem>
                <ListGroupItem className="disabled">Disabled list item</ListGroupItem>
                <ListGroupItem><Button>A button as a list item</Button></ListGroupItem>
                <ListGroupItem variant="danger">Some random text here</ListGroupItem>
                </div>
            </ListGroup>
        </div>
    )
}

export default _ListGroup;