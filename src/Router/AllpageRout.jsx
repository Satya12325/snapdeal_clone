import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import Home from "../Components/Home/Home"
import Address from "../Components/BuyNow/Address/Address"
import ProductDetail from "../Components/ProductDetails/ProductDetail"
import Payment from "../Components/ProductDetails/Payment"

export default function AllpageRout(){
    return(
        <Routes>
            <Route path={"/"} element= {<Home/>}></Route>
            <Route path={"/product_details"} element= {<ProductDetail/>}></Route>
            <Route path={"/address"} element= {<Address/>}></Route>
            <Route path="/cart_view" element={<Payment/>} />
        </Routes>
    )
}