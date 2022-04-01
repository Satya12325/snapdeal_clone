import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import logo from "./anim.gif"
import { v4 as uuidv4 } from 'uuid';
import {Link, useNavigate} from "react-router-dom"

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function PaymentSucess({price}){
  const [open, setOpen] = React.useState(false);
  const nevigate = useNavigate();


  const history = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    nevigate(`/`)
  };

  const { v4: uuidv4 } = require('uuid');
  return (
    <div>
      <Button variant="contained" style={{backgroundColor: "#E40046",textTransform: "none", padding: "10px 30px",width:"50%",margin:"10px 0"}} onClick={handleClickOpen}>
      PAY RS. {price}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
         
       
        <img style={{width:"30%", margin:"auto"}} src={logo} alt=""/>
        <h1 style={{textAlign: "center", color:"#1D6222"}}>Rs.{price}</h1>
          <h1 style={{textAlign: "center", color:"#1D6222"}}>Payment Successful</h1>
        <p style={{textAlign: "center", color:""}}>Transition Id : {uuidv4()}</p>
        
          <Button onClick={handleClose}variant="contained" color="success">Sucess</Button>
         
        
      </Dialog>
    </div>
  );

}