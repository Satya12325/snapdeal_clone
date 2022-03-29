import React from "react";
import "react-multi-carousel/lib/styles.css";
import locImg from "./locimg.png";




export default function CArtScroll() {
 
 

  

  return (
    <div>
      <div>
        <div>
          <img style={{ width: "100%", height: "20%" }} src={locImg} alt="" />
        </div>
        <div
          style={{
            textAlign: "center",
            lineHeight: "1px",
            color: "gray",
            fontSize: "12px",
            marginTop: "-30px",
          }}
        >
          <p>Your Delivery Pincode</p>
          <p>_</p>
        </div>
        <div
          style={{
            fontSize: "10px",
            textAlign: "center",
            color: "gray",
            margin: "5px",
          }}
        >
          Enter your Pin code to check Evelability and Faster delivery Option
          <input
            style={{ width: "95%", margin: "5px" }}
            type="number"
            placeholder="Enter your PIN code"
          />
          <button
            style={{
              width: "95%",
              margin: "5px",
              padding: "5px",
              borderRadius: "3px",
              color: "white",
              backgroundColor: "black",
              border: "0",
            }}
          >
            SUBMIT
          </button>
        </div>

       
      </div>
    </div>
  );
}
