import { useState } from "react";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import Typography from "@mui/material/Typography";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import Switch from "@mui/material/Switch";
import PaymentSucess from "./PaymentSucess"
import PinInput from "./PinInput";

export default function CardDetails({price,handleClick}) {
  const [state, setState] = useState("");
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <div style={{ width: "70%" }}>
        <div
          style={{
            height: "50px",
            backgroundColor: "black",
            color: "white",
            padding: "10px 30px",
            borderRadius: "3px",
          }}
        >
          <Typography variant="h6" component="div" style={{}}>
            Make Payment
          </Typography>
        </div>
        <div className="cardDetails">
          <div className="cardVerient">
            <div>Credit Card</div>
            <div>Debit Card</div>
            <div>Net Banking</div>
            <div>Cash On Delivery</div>
            <div>EMI</div>
            <div>e-Gift Voucher</div>
            <div>UPI</div>
          </div>
          <div className="cardInput">
            <div>
              
              <Typography variant="h6" component="div" style={{}}>
                Pay Using Debit Card
              </Typography>
              <div className="cardInput">
                <div>
                  Card Number:
                   {/* <input type="number" placeholder="Card Number" /> */}
                   <PinInput onChange={(pin) => setState(pin)} />
                </div>
                <div>
                  Expiry Date:{" "}
                  <input className="data" type="number" placeholder="MM" /> /{" "}
                  <input className="data" type="number" placeholder="YY" /> CVV:{" "}
                  <input className="data" type="text" placeholder="CVV" />
                </div>
              </div>
              <div>
                {/* <button className="pay-btn"
                  onClick={handleClick}
                >PAY RS. {price}</button> */}
                <PaymentSucess
                price={price}
                />
              </div>
              <div>
                <p style={{fontSize:"12px",color:"gray"}}>This card will be saved for a faster payment experience</p>
                <Typography variant="h6" component="div" style={{}}>
                  <GppGoodOutlinedIcon style={{ fontSize: "40px" }} /> TrustPay:
                  100% Payment Protection, Easy Returns Policy
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
