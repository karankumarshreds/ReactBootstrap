import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Alerts = (props) => {
    const [show, setShow] = useState(true)
    if(show) {
        return (
            <Alert variant="danger" 
            onClose={() => setShow(false)} 
            dismissible
            transition="fade">
                Your order has been completed
            </Alert>
        );
    }
    return <p></p>
}

export default Alerts;