import { delete_cart_failure, delete_cart_request, delete_cart_success} from "./Cart.action"
import {api} from "../../Server/Server";
import axios from "axios";


export const delete_api = (id)=>(dispatch)=>{
    console.log("id",id)
     dispatch(delete_cart_request());
    axios
     .delete(`https://snapdeal-backend.herokuapp.com/cart/${id}`)
     .then((res)=>{
         dispatch(delete_cart_success(id))
         console.log(res)
     })
     .catch((res)=>{
         dispatch(delete_cart_failure())
         console.log(res)
     })
 }