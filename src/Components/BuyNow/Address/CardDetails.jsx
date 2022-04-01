
import { useState } from "react";
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';


export default function CardDetails() {
    const [state, setState] = useState("");

  return (
    <div>
        <div>
            Make Payment
        </div>
      <div>
        <div>
            <div>Credit Card</div>
            <div>Debit Card</div>
            <div>Net Banking</div>
            <div>Cash On Delivery</div>
            <div>EMI</div>
            <div>e-Gift Voucher</div>
            <div>UPI</div>
        </div>
        <div>

            <div>
              <div>
                
              </div>
                <h3>Pay Using Debit Card</h3>
                <div>
                   <div>
                     Card Number: <input type="text" placeholder="Card Number" />
                   </div>
                   <div>
                     Expiry Date: <input className="date" type="number" placeholder="MM" /> / <input className="date" type="number" placeholder="YY"/> CVV: <input className="date" type="password" placeholder="CVV"/>
                   </div>
                </div>
                <div>
                  <button className="btn btn-primary">PAY RS. 325</button>
                </div>
                <div>
                  <p>This card will be saved for a faster payment experience</p>
                  <h4><GppGoodOutlinedIcon style={{fontSize:"40px"}}/> TrustPay: 100% Payment Protection, Easy Returns Policy</h4>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
