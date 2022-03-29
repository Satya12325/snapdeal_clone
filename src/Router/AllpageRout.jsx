import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import Home from "../Components/Home/Home"
import Address from "../Components/BuyNow/Address/Address"
import ProductDetails from "../Components/ProductDetails/ProductDetails"


export default function AllpageRout(){
    return(
        <Routes>
            <Route path={"/"} element= {<Home/>}></Route>
            <Route path={"/product/:id"} element= {<ProductDetails/>}></Route>
            <Route path={"/address"} element= {<Address/>}></Route>

        </Routes>
    )
}