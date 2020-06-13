import React, { useState, useEffect } from 'react';
import FormCheck from 'react-bootstrap/FormCheck';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import FormCheckLabel from 'react-bootstrap/FormCheckLabel';
import Alerts from '../Alerts/Alerts';
import './CheckForms.css';

const italianMenu = [
    {
        name: "White Sauce Pasta",
        price: 15,
        type: "veg",
        qty: 0,
        itemId: "italian-1"
    },
    {
        name: "Red Sauce Pasta",
        price: 15,
        type: "veg",
        qty: 0,
        itemId: "italian-2"
    },
    {
        name: "White Sauce Pasta",
        price: 20,
        type: "non-veg",
        qty: 0,
        itemId: "italian-3"
    },
    {
        name: "Red Sauce Pasta",
        price: 20,
        type: "non-veg",
        qty: 0,
        itemId: "italian-4"
    },
] 
const CheckForms = () => {
    const [italian, editItalian] = useState(italianMenu);
    const [total, changeTotal] = useState(0);
    const addMore = (e) => {
        const updatedMenu = italian.map( each => {
            if(each.itemId === e.target.id) {
                changeTotal(total + each.price);
                return {
                    ...each, qty: each.qty + 1
                }
            }
            else {
                return each;
            }
        });
        editItalian(updatedMenu);

    }
    const addLess = (e) => {
    }
    useEffect(() => {
    }, [italian]);
    
    return (
    <div className="container CheckForms" id="Italian">
    <div className="row align-items-center">
        <h1 className="header col-6">Our Menu</h1>
        <p className="col-6 text-right">Total: ${total}</p>
    </div>        
    <hr />
    <h3 className="category">Italian</h3>
    { italian.map((each) => {
        return (
            // <FormCheck className="individual-row">
            <div className="row justify-content-center individual-row">
                <div className="col-5">
                    {/* <FormCheckInput type="checkbox" id="checkbox"/> */}
                    <FormCheckLabel >{each.name}</FormCheckLabel>
                </div>
                <div className="col-2">
                    <FormCheckLabel className="veg-type"><span className={each.type}></span></FormCheckLabel>        
                </div>
                <div className="col-2">
                    <FormCheckLabel >{each.price}</FormCheckLabel>
                </div>
                <div className="col-3">
                    <div className="row quantity">
                        <div className="col-4"><span name={each.itemId}>-</span></div>
                        <div className="col-4"><FormCheckLabel className="qty" >{each.qty}</FormCheckLabel></div>
                        <div className="col-4"><span id={each.itemId} onClick={addMore}>+</span></div>
                    </div>
                </div>
            </div>
            // </FormCheck>
        )
    }) }
    <br/>
    {/* <Alerts /> */}
    <button className="btn btn-primary">Complete order</button>
    </div>
    )
}

export default CheckForms;