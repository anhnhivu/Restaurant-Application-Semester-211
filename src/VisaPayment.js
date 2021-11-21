import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import './App.css'
import { Link } from 'react-router-dom';
import { useState} from "react";

const VisaPayment = (props) => {
    const [card, setCard] = useState("");
    const [cvv, setCvv] = useState("");
    const [endDate, setEndDate] = useState("");
    const inputStyle = {
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid #fff !important',
        borderRadius: '0',
        outline: '0',
        color: '#fff',
    };

    // 4111 1111 1111 1111
    const handleValidation = () => {
        const input = card.replace(/\s+/g, '');
        console.log(input);
        return input.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/)
        && endDate.match(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/)
        && cvv.match(/\d{3}/)
    };
    
    const contactSubmit = (e) => {
        e.preventDefault();
        console.log("reach here");
        if (!handleValidation()) {
          alert("Form has errors.");
        }
        else {
            window.location.href = "/Thankyou";
            setCvv(""); 
            setCard(""); 
            setEndDate(""); 
        }
      };


    const  handleChange = (e) => {
        const input = String(e.target.value);
        if(input.length <=19){
            if(input.length === 4 || input.length === 9 || input.length === 14){
                setCard(e.target.value + " ")
            }
            else setCard(e.target.value)
        }
        
    };

    
    const handleChangeCvv = (e) => {
        const input = String(e.target.value);
        if(input.length <= 3){
            setCvv(e.target.value); 
        }
             
    };
    const handleChangeED = (e) => {
        if(e.target.value.length <= 5)
        setEndDate(e.target.value);  
    };

    return (
        <div className="tab-pane fade show active" >
            <div className="tab-single">
                <form className="form-card" onSubmit={contactSubmit} autoComplete="nope">
                    <div className="row">
                        <div className="col-12" >
                            <div className="form-group"  >
                                <input
                                value={card}
                                type="text" className="form-control p-0" style={inputStyle}
                                onChange={handleChange}                     
                                id="number" required
                                />
                                <label className="form-control-placeholder p-0" htmlFor="number">CardNumber</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <input type="text" className="form-control p-0" style={inputStyle} id="name"  required />
                                <label className="form-control-placeholder p-0" htmlFor="name">Cardholder'sName</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        
                        <div className="col-sm-6 col-12">
                            <div className="form-group">
                                <input type="text" 
                                onChange={handleChangeED}
                                className="form-control p-0" style={inputStyle} id="expdate" required maxLength="5" />
                                <label className="form-control-placeholder p-0" htmlFor="expdate">ExpirationDate</label>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="form-group">
                                <input type="password" 
                                onChange={handleChangeCvv}
                                className="form-control p-0" style={inputStyle} id="passw" required  maxLength="3"/>
                                <label className="form-control-placeholder p-0" htmlFor="passw">CVV</label>
                            </div>
                        </div>
                    </div>
                    <div className="row lrow mt-4 mb-3">
                        <div className="col-sm-8 col-12">
                            <h4>Grand Total:</h4>
                        </div>
                        <div id="price" className="col-sm-4 col-12">
                            <h4>$ {props.price}</h4>
                        </div>
                    </div>
                    <div>
                        <Link to={{pathname: '/Thankyou'}} className=" row mb-2"
                        style={{ color: 'inherit', textDecoration: 'none', position:'initial'}} >
                                <button onClick={contactSubmit}
                                type="submit" className="btn btn-sm btn-danger rounded-pill"> Pay </button>
                        </Link>      
                    </div>
                </form>
            </div>
        </div>
    );
}

export default VisaPayment;