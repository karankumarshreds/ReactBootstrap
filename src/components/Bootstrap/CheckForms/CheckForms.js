import React, { useState, useEffect } from 'react';
import FormCheck from 'react-bootstrap/FormCheck';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import FormCheckLabel from 'react-bootstrap/FormCheckLabel';
import Alerts from '../Alerts/Alerts';
import './CheckForms.css';
import Scrollspy from '../Scrollspy/Scrollspy';

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
    {
        name: "Chicken Rice Bowl",
        price: 10,
        type: "non-veg",
        qty: 0, 
        itemId: "italian-5"
    },
    {
        name: "Veg Rice Bowl",
        price: 10,
        type: "veg",
        qty: 0, 
        itemId: "italian-5"
    },    
    {
        name: "Momos",
        price: 20,
        type: "veg",
        qty: 0, 
        itemId: "italian-5"
    }, 
    {
        name: "Red Sauce Pasta",
        price: 20,
        type: "non-veg",
        qty: 0, 
        itemId: "italian-4"
    },
    {
        name: "Chicken Rice Bowl",
        price: 10,
        type: "non-veg",
        qty: 0, 
        itemId: "italian-5"
    },
    {
        name: "Veg Rice Bowl",
        price: 10,
        type: "veg",
        qty: 0, 
        itemId: "italian-5"
    },    
    {
        name: "Momos",
        price: 20,
        type: "veg",
        qty: 0, 
        itemId: "italian-5"
    },       
] 
const CheckForms = () => {
    const [italian, editItalian] = useState(italianMenu);
    const [total, changeTotal] = useState(0);
    const addMore = (e) => {
        let sign = e.target.innerText;
        const updatedMenu = italian.map( each => {
            if(each.itemId === e.target.id) {
                if (sign === '+') {
                    changeTotal(total + each.price);
                    return {
                        ...each, qty: each.qty + 1
                    }
                } 
                else if ( total > 0 && sign === '-') {
                    changeTotal(total - each.price);
                    return {
                        ...each, qty: each.qty - 1
                    }
                }
                else {
                    return each;
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
    <div className="CheckForms col-sm-11 col-xs-12  mx-auto">
    <Scrollspy className="scrollspy-contained"/>
    <div className="container mt-5 pl-4 pr-5">
        <div className="row align-items-center" style={{width: "100%"}}>
            <h1 className="header col-sm-6">Our Menu</h1>
            <p className="col-sm-6 text-right">Total: ${total}</p>
        </div>        
    </div>
    <hr />
    <div className="container px-5 menu-content" data-spy="scroll" data-target="#mainNavbar" style={{position: "relative", overflowY: "scroll", height: '400px'}}>
        <h3 className="category" id="Chinese">Chinese</h3>
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
                            <div className="col-sm-4"><span id={each.itemId} onClick={addMore}>-</span></div>
                            <div className="col-sm-4"><FormCheckLabel className="qty" >{each.qty}</FormCheckLabel></div>
                            <div className="col-sm-4"><span id={each.itemId} onClick={addMore}>+</span></div>
                        </div>
                    </div>
                </div>
                // </FormCheck>
            )
        }) }
    
    <h3 className="category" id="Indian">Indian</h3>
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
                            <div className="col-sm-4"><span id={each.itemId} onClick={addMore}>-</span></div>
                            <div className="col-sm-4"><FormCheckLabel className="qty" >{each.qty}</FormCheckLabel></div>
                            <div className="col-sm-4"><span id={each.itemId} onClick={addMore}>+</span></div>
                        </div>
                    </div>
                </div>
                // </FormCheck>
            )
        }) }

<h3 className="category" id="American">American</h3>
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
                            <div className="col-sm-4"><span id={each.itemId} onClick={addMore}>-</span></div>
                            <div className="col-sm-4"><FormCheckLabel className="qty" >{each.qty}</FormCheckLabel></div>
                            <div className="col-sm-4"><span id={each.itemId} onClick={addMore}>+</span></div>
                        </div>
                    </div>
                </div>
                // </FormCheck>
            )
        }) }


    <h3 className="category" id="Italian">Italian</h3>
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
                        <div className="col-sm-4"><span id={each.itemId} onClick={addMore}>-</span></div>
                        <div className="col-sm-4"><FormCheckLabel className="qty" >{each.qty}</FormCheckLabel></div>
                        <div className="col-sm-4"><span id={each.itemId} onClick={addMore}>+</span></div>
                    </div>
                </div>
            </div>
            // </FormCheck>
        )
    }) }

    <br/>
    {/* <Alerts /> */}
    </div>
    <button className="btn btn-primary">Complete order</button>
    </div>
    )
}

export default CheckForms;