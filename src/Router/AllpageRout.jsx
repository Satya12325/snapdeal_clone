import React from 'react'
import {Routes,Link,Route} from "react-router-dom";
import Home from "../Components/Home/Home"


export default function AllpageRout(){
    return(
        <Routes>
            <Route path={"/"} element= {<Home/>}></Route>
        </Routes>
    )
}