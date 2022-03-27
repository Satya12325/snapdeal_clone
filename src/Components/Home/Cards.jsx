import './Cards.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



export default function Cards({value,image,title,price,d_price,discount}){

    


    return(
        <>
        <div className="cards">
            <div style={{ width: "100%",height: "70%"}}>
                <img style={{ width:"90%",margin:"10px",height:"90%"}}src={image} alt="" />
            </div>
            <div className="ProductName" >
               {title}
            </div>
            <div className="padding">
            <Rating style={{fontSize:"18px"}} name="read-only" value={value} readOnly />
            </div>
            <div className="padding">
                <span className="linethrough">Rs {price}</span>
                <span> Rs {d_price} </span>
                <span className="discount">{discount}%OFF</span>

            </div>
        </div>
        </>
    )
}