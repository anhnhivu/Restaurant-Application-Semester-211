import "./Cart.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import './App.css';
import { Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Modal } from 'react-bootstrap';
import PurchasePopup from "./PurchasePopup";
import { Link } from "react-router-dom";


const ItemCart = (props) => {
    const indexInArray = props.cart.map(function(item) 
                        {return item.id}).indexOf(props.id);
    
    return (
        <div>
            <li className="mb-3">
                <Row> 
                <Col sm={3} className="d-flex justify-content-stretch align-items-center">
                <img className="w-100 rounded border" alt="..."
                            src={props.src}/>
                </Col>
                <Col sm={4} className="">
                    <Row className="fw-bold text-danger">
                        <Col sm={12} className="d-flex justify-content-start align-items-center">
                            {props.name}
                        </Col>
                    </Row>
                    <Row className="fw-bold">
                        <Col sm={12} className="d-flex justify-content-start align-items-center">
                            {(props.price * props.quantity).toFixed(2)}
                        </Col>
                    </Row>
                    
                </Col>
                <Col sm={5} className="myButton d-flex justify-content-center align-items-center">
                    <Button variant="outline-danger" onClick={() => {
                        props.cart[indexInArray]["quantity"] -= 1;
                        props.setCart(props.cart.concat());
                        if (props.cart[indexInArray]["quantity"] === 0) {
                            props.setCart(props.cart.filter(cartItem => cartItem.id !== props.id));
                        }
                    }}> - </Button>
                    <span className="mx-3 fw-bold"> {props.cart[indexInArray]["quantity"]} </span>
                    <Button variant="outline-danger" onClick={() => {
                        props.cart[indexInArray]["quantity"] += 1;
                        props.setCart(props.cart.concat());
                    }}> + </Button>
                </Col>
                </Row>
                
            </li>
        </div>
    )
}

const Cart = (props) => {

    const totalPrice = 0 ? props.cart.length === 0 
                : props.cart.reduce((total, obj) => {
                    return total + obj["price"] * obj["quantity"];
                 }, 0).toFixed(2);
    const[modalIsOpen, setModalOpenState] = useState(false);
    const closeModal = () => {
        setModalOpenState(false);
      }
    const openModal = () => {
        setModalOpenState(true);
      }

    return (
        <div className="card h-100">
            <div className="card-body d-flex flex-column flex-row align-items-stretch">
                <h5 className="d-flex justify-content-between align-content-center">
                    <span>Order
                        <span className="fw-bold"> ({props.cart.length}) </span>
                    </span>
                    <button 
                        onClick={() => {props.setCart([])}}
                        className="btn btn-sm btn-danger rounded-pill">Clear</button>
                </h5>
            <hr/>
            
            <div className="truncate-box">
            <ul id="orderlist" className="list-unstyled d-flex flex-column align-items-stretch">
                {props.cart.map((itemInCart) => {
                    return <ItemCart
                    key= {itemInCart.id}
                    id= {itemInCart.id}
                    src= {itemInCart.src}
                    name= {itemInCart.name}
                    price= {itemInCart.price}
                    quantity= {itemInCart.quantity}
                    cart = {props.cart}
                    setCart = {props.setCart}
                />
                })}
            </ul>
            </div>

            <div className="align-self-stretch mt-auto">
                <hr/>
                <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center">
                    Sub-total 
                     <span id="totalcost" className="card-text">
                        $ {(totalPrice*0.9).toFixed(2)}
                    </span>
                </li>  
                <li className="fw-bold d-flex justify-content-between align-items-center">
                    Total 
                    <big> $ <span id="totalcost" className="card-text">
                        {totalPrice}
                    </span>
                    </big>
                </li>
                <li><p></p></li>
                <li>
                <button type ="submit" className="btn btn-danger fw-bold w-100 rounded-pill" 
                        onClick={()=>{
                            if(props.cart.length !== 0) openModal();
                            else alert("Empty cart!! Please choose a product")
                        }}   
                    >CHECK OUT</button>
                    <Modal show={modalIsOpen} onHide={() => closeModal()}>
                        <Modal.Header closeButton>
                            <Modal.Title>Order Confirmation</Modal.Title>
                        </Modal.Header>
                        <PurchasePopup cart={props.cart}  />
                        <Modal.Footer>
                        <div>
                            <li className="fw-bold d-flex justify-content-between align-items-center">
                                <big> <span style={{marginRight:'20px'}}> Total </span> 
                                $ <span className="card-text">
                                    {totalPrice}
                                </span>
                                </big>
                            </li>
                        </div>        
                        <div>
                            <button className="btn btn-sm btn-danger rounded-pill" type="button" >
                                 <Link to={{
                                    pathname:'/checkout/',
                                    state: {
                                        price:{totalPrice}
                                    },
                                 }} style={{color: 'inherit', textDecoration: 'none'}}> PURCHASE</Link>
                            </button>

                        </div>
                        </Modal.Footer>
                    </Modal>
                </li>
                </ul>
            </div>
            
            </div>
        </div>
    )
}

export default Cart;