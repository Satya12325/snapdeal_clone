import * as React from "react";

import { styled } from "@mui/material/styles";
import "./SignUp.css";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

import Avatar from "@mui/material/Avatar";
import style from "./Navbar.module.css";
import { ModalScreen } from "../modal/ModalScreen";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FilterFramesOutlinedIcon from "@mui/icons-material/FilterFramesOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function SinUpBtn() {
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "black",
      color: "white",
      width: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "0px solid #dadde9",
      position: "absolute",
      top: "-15px",
      right: "-62px",
    },
  }));
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      {open && (
        <ModalScreen open = {open} handleClose={handleClose} handleOpen={handleOpen} />
      )}
      <HtmlTooltip
        title={

          <div className={style.Signup}>

          
           <div className={style.logIn}>
               <PermIdentityOutlinedIcon/>
               Your Account</div>
           <div className={style.logIn}>
               <FilterFramesOutlinedIcon/>
               Your Orders</div>

            <div className={style.logIn}>
              <PermIdentityOutlinedIcon />
              Your Account
            </div>
            <div className={style.logIn}>
              <FilterFramesOutlinedIcon />
              Your Orders
            </div>
            <div className={style.logIn}>
              <FavoriteBorderOutlinedIcon />
              Shortlist
            </div>
            <div className={style.logIn} style={{ textAlign: "center" }}>
              <p style={{ lineHeight: 0, color: "gray" }}>
                If you are a new Youser
              </p>
              <div className={style.logIn}>Register</div>
              <button className={style.btn} onClick={handleOpen}>
                Login
              </button>
            </div>
          </div>
        }
      >
        <div className={style.Signup}>
          sign In
          <Avatar className={style.Avatar} src="/broken-image.jpg" />
        </div>
      </HtmlTooltip>
    </div>
  );
}
