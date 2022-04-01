import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import { ImHome3, BiCategory } from "react-icons/im";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Badge from "@mui/material/Badge";
import {Link,useNavigate} from "react-router-dom";
import axios from 'axios';


const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

export default function BottomNavBar() {

    const neviget = useNavigate()
    const [cart, setCart] = React.useState([]);


    React.useEffect( () => {
        axios.get('https://snapdeal-backend.herokuapp.com/cart')
        .then(res => cartHandler(res.data))
        .catch(err => console.log(err));
    },[])
    const cartHandler = (data) => {  
    
        setCart(data)
    }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{top: "auto", bottom: 0, background: "white", color: "black",height: "80px"}}
      >
        <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
          <IconButton color="inherit" style={{fontSize: "46px"}} aria-label="open drawer">
            <ImHome3 />
          
          </IconButton>
          <IconButton color="inherit" aria-label="open drawer">
            <DragIndicatorOutlinedIcon style={{fontSize: "46px"}} />
          </IconButton>
         
          <IconButton color="inherit"  >
          <StyledBadge onClick={()=>neviget("/cart_view")} badgeContent={cart.length} color="secondary">
            <ShoppingCartOutlinedIcon style={{fontSize: "46px"}} />
           </StyledBadge>
          </IconButton>
          <IconButton color="inherit"  >        
            <FavoriteBorderOutlinedIcon style={{fontSize: "46px"}} />
          </IconButton>
          <IconButton color="inherit"  >            
            <AccountCircleOutlinedIcon style={{fontSize: "46px"}} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
