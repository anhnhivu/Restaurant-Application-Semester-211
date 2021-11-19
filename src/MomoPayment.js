import qr from './Images/Momo-qr.png'
import {Link} from 'react-router-dom';
const MomoPayment= () => {
    
    return (
        <div className="tab-pane fade show active " >
            <div className="row">
                <div className="center-cropped col-12 form-group">
                    <p style={{'textAlign': 'center', 'marginTop':'10px'}}> Please Scan this QR Code</p>
                    <img src={qr} width="250px" height="250px" alt="..."  />    
                </div>
            </div>

            <div>
                <p>

                </p>
                <p>

                </p>
            </div>

            <div className="">
                <Link to={{pathname: '/Thankyou'}} className=" row mb-2 mx-3 h-100"
                style={{ color: 'inherit', textDecoration: 'none', position:'initial'}} >
                        <button type="submit" className="btn btn-sm btn-danger rounded-pill"> Done </button>
                </Link>      
            </div>
        </div>
        
    );
}

export default MomoPayment;