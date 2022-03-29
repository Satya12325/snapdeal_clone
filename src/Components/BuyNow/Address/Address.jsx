import "./Address.css";
import Typography from "@mui/material/Typography";

export default function Address() {
  return (
    <>
      <div className="address">
        <div className="address-container">
            <div style={{height:"50px",backgroundColor:"black",color:"white",padding:"10px 30px",borderRadius:"3px"}}>
            <Typography
          variant="h6"
          
          component="div"
          style={{}}
          >
          Delivery Address
          </Typography>
            </div>
          <div className="adrs">
            <p>Pincode</p> <input type="number" placeholder="6 digit pincode" />
          </div>
          <div className="adrs">
            <p>Name</p> <input type="text" placeholder="Full Name" />
          </div>
          <div className="adrs">
            <p>Address</p>
            <input type="text" placeholder="Flat/House No. Colony/Street No" />
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
          <button className="save-btn">SAVE AND CONTINUE</button>
          </div>
        </div>
      </div>
    </>
  );
}
