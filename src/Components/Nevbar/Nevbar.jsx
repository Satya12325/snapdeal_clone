import style from "./Navbar.module.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SignUpBtn from "./SignUpBtn";
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {getCartProduct} from '../../Server/Apis';
import { CartProvider } from '../../Context/CartContextProvider';
import {useContext} from "react";
import { useDispatch,useSelector } from 'react-redux'
import {delete_api,cartapi} from "../../Redux/Cacrt/cart.api"



const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: -1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    backgroundColor:"#ffffff",
    color:"#333"
  },
}));


export default function Nevbar() {
  const [margin, setMargin] = useState("27px");
  const neviget = useNavigate()
  const [cartt, setCart] = React.useState([]);
  const [input, setInput] = useState("");


  const dispatch = useDispatch();
  const {isLoading,isError,cart} = useSelector((state)=>state.cart)
  let {cartProduct} = useContext(CartProvider);
console.log("cartProduct",cartProduct);

  const getCart = async ()=>{
    try {
     const {data} =  await getCartProduct()
     setCart(data)
     console.log("cartProduct", data)
    }
    catch (e) {
      console.log(e)
  }
  // const {data} =  await getCartProduct()
  // setCart(data)
  }
  React.useEffect( () => {
    // axios.get('https://snapdeel-backend.onrender.com/cart')
    // .then(res => cartHandler(res.data))
    // .catch(err => console.log(err));
    getCart();
    dispatch(cartapi())
    // setCart(cartProduct)
},[])
  console.log(cart.length,"cart length")
  const cartHandler = (data) => {

    setCart(data)
}

  window.addEventListener("scroll", () => {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 10) {
      setMargin("0px");
    } else if (scrollTop < 100) {
      setMargin("27px");
    }
  });
  let link = ["men","women","beauty","kids","electronic","shoes","kitchen"]

  const handleClick = () => {
    for(let i=0;i<link.length;i++) {
      if(input.toLocaleLowerCase() ===link[i]){
        neviget(`/${link[i]}`);
      }
    }
    setInput("")
  }


  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar
        style={{
          backgroundColor: "#E40046",
          color: "black",
          height: "",
          cursor: "pointer",
          marginTop: margin,
        }}
      >
        <div className={style.container}>
          <div>
           <Link to={"/"}> <img
              src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
              alt="Logo"
            /></Link>
          </div>
          <div style={{width:"50%"}}>
            <div className="input-group mb-3 border-0">
              <input
                type="text"
                className="form-control"
                placeholder="Search products & brands"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
              />

              <span
                className="input-group-text text-light bg-dark border-0"
                id="basic-addon2"
                onClick={handleClick}
              >
                <SearchIcon />
                Search
              </span>
            </div>
          </div>
          <div>
            Cart
            <StyledBadge onClick={()=>neviget("/cart_view")} badgeContent={cart.length} color="secondary">
              <ShoppingCartOutlinedIcon style={{ color: "white" }} />
            </StyledBadge>
          </div>
          <SignUpBtn/>
        </div>
      </AppBar>
    </React.Fragment>
  );
}
