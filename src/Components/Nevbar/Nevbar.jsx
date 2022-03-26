import style from "./Navbar.module.css";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export default function Nevbar() {
  const [margin, setMargin] = useState("27px");

  window.addEventListener("scroll", () => {
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 10) {
      setMargin("0px");
    } else if (scrollTop < 100) {
      setMargin("27px");
    }
  });

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
            <img
              src="https://i3.sdlcdn.com/img/snapdeal/darwin/logo/sdLatestLogo.svg"
              alt="Logo"
            />
          </div>
          <div>
            <div className="input-group mb-3 border-0">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span
                className="input-group-text text-light bg-dark border-0"
                id="basic-addon2"
              >
                {" "}
                <SearchIcon />
                Search
              </span>
            </div>
          </div>
          <div>
            Cart 
            <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartOutlinedIcon style={{color: "white"}} />
      </StyledBadge>
    </IconButton>
          </div>
        </div>
      </AppBar>
    </React.Fragment>
  );
}
