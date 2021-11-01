import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import './App.css';
import {Tabs, Tab, TabContent} from 'react-bootstrap';
import "jquery";
import VisaPayment from "./VisaPayment";
import { useLocation } from "react-router";

const Checkout = (props) => {
    const location = useLocation();
    const {price} = location.state;
    return (
        <div className="container-fluid ">
            <div className="row justify-content-center">
                <div className="row justify-content-center mrow">
                    <div className="card1 my-4 p-3  col-12"  >
                        <Tabs variant="pills" id="Tab" defaultActiveKey="Visa" 
                            className="my-3 mx-4 flex nav-fill">
                            <Tab eventKey="Visa"  title={<span> <img src="https://brandslogo.net/wp-content/uploads/2013/06/visa-eps-vector-logo.png" width="35px" height="35px" alt="..." /> </span>}>
                                <TabContent>                                        
                                    <VisaPayment price={price.totalPrice} />
                                </TabContent>
                            </Tab>
                            <Tab eventKey="MasterCard"  title={<span> <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" width="35px" height="35px" alt="..."  /></span>}>
                                
                            </Tab>
                            <Tab eventKey="Momo" title={<span> <img src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" width="35px" height="35px" alt="..."  />  </span>}>
                            
                            </Tab>
                        </Tabs>
                    </div>
                </div>    
            </div>
        </div>
    );
}



export default Checkout;