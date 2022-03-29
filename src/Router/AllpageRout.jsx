import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import AddToCart from '../Components/Checkout/AddToCart';
import Payment from '../Components/Checkout/Payment';
import Home from "../Components/Home/Home"


export default function AllpageRout(){
    return(
        <Routes>
            <Route path={"/"} element= {<Home/>}></Route>
            <Route path='/product_details' element={<AddToCart/>}/>
            <Route path="/cart_view" element={<Payment/>} />
        </Routes>
    )
}