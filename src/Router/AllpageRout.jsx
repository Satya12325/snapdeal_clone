import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import Home from "../Components/Home/Home"
import Address from "../Components/BuyNow/Address/Address"
import ProductDetail from "../Components/ProductDetails/ProductDetail"
import Payment from "../Components/ProductDetails/Payment"
import MenProduct from "../Components/Product/Product"
import  WomenProduct from "../Components/Product/WomenProduct"
import  BeautyProduct from "../Components/Product/BeautyProduct";
import ElectrinicProduct from "../Components/Product/Electronic";
import  FootwearProduct from "../Components/Product/Footwear"
import  KidsProduct from "../Components/Product/KidsProduct"
import KitchenProduct from "../Components/Product/Kitchen"







export default function AllpageRout(){
    return(
        <Routes>
            <Route path={"/"} element= {<Home/>}></Route>
            <Route path={"/product_details"} element= {<ProductDetail/>}></Route>
            <Route path={"/address"} element= {<Address/>}></Route>
            <Route path={"/cart_view"} element={<Payment/>} ></Route>
            <Route path={"/men"} element={<MenProduct/>}></Route>
            <Route path={"/women"} element= {< WomenProduct/>}></Route>
            <Route path={"/beauty"} element={< BeautyProduct/>}></Route>
            <Route path={"/kids"} element={<KidsProduct/>}></Route>
            <Route path={"/electronic"} element={<ElectrinicProduct/>}></Route>
            <Route path={"/shoes"} element={<FootwearProduct/>}></Route>
            <Route path={"/kitchen"} element={<KitchenProduct/>}></Route>
        </Routes>
    )
}