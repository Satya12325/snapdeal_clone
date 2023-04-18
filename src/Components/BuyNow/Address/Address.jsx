import "./Address.css";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import axios from "axios";
import * as React from "react";
import loading from "./looding.gif";
import CardDetails from "./CardDetails";
import { useNavigate } from "react-router-dom";
import { getCartProduct } from "../../../Server/Apis";
export default function Address() {
  const [totalRs, setTotalRs] = useState(0);
  const [isLoding, setIsLoading] = useState(true);
  const [adDis, setadDis] = useState("block");
  const [carddis, setCardDis] = useState("none");
  const nevigate = useNavigate();
  const handleClick = () => {
    alert(`Payment is Successful of Price Rs.${totalRs}`);
    nevigate("/");
  };

  React.useEffect(() => {
    axios
      .get("https://snapdeel-backend.onrender.com/cart")
      .then((res) => {
        setIsLoading(true);
        cartHandler(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const cartHandler = (data) => {
    let totalPrice = 0;
    for (let item of data) {
      totalPrice += item.discounted_price;
    }
    setTotalRs(totalPrice);
  };

  const handleDisplay = () => {
    setCardDis("block")
    setadDis("none");
  };

  if (isLoding)
    return (
      <h3 className="Looading">
        <div style={{ width: "200px", margin: "auto" }}>
          <img style={{ width: "100%", height: "20vh" }} src={loading} alt="" />
        </div>
      </h3>
    );
  return (
    <>
      <div>
        <div style={{ display: adDis }}>
          <div className="address">
            <div className="address-container">
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
                  Delivery Address
                </Typography>
              </div>
              <div className="adrs">
                <p>Pincode</p>{" "}
                <input type="number" placeholder="6 digit pincode" />
              </div>
              <div className="adrs">
                <p>Name</p> <input type="text" placeholder="Full Name" />
              </div>
              <div className="adrs">
                <p>Address</p>
                <input
                  type="text"
                  placeholder="Flat/House No. Colony/Street No"
                />
              </div>
              <div className="adrs">
                <p>Locality/Landmark</p>
                <input type="text" placeholder="Eg: Near Apolo hospital" />
              </div>
              <div className="adrs">
                <p>City</p> <input type="text" placeholder="City" />
              </div>
              <div className="adrs">
                <p>State</p> <input type="text" placeholder="State" />
              </div>
              <div className="adrs">
                <p>Mobile No</p>
                <input type="number" placeholder="10 digit Mobile Number" />
              </div>
              <div className="adrs">
                <p>Alternet Mobile No</p>
                <input type="number" placeholder="10 digit Mobile Number" />
              </div>
              <div className="adrs">
                <div></div>
                <button className="save-btn" onClick={handleDisplay}>
                  SAVE AND CONTINUE
                </button>
              </div>
            </div>
            <div className="Summary">
              <div className="price">
                <p>total</p>
                <p>{totalRs}</p>
              </div>
              <div className="price">
                <p>Delivery Charges</p>
                <p className="free">Free</p>
              </div>
              <div className="price pay">
                <h3>You Pay:</h3>
                <h3 className="payment">Rs {totalRs}</h3>
              </div>
            </div>
          </div>
        </div>
        <div style={{display:carddis }}>
          <CardDetails price={totalRs} handleClick={handleClick} />
        </div>
      </div>
    </>
  );
}
