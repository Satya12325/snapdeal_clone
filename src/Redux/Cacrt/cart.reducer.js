import { Fab } from "@mui/material"
import { DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS } from "./cart.actionType"

const initState = {
    cart : [],
    isLoading : false,
    isError : false

}
export const cart_reducer = (state=initState,{type,payload})=>{
    switch(type){
 //DELETE
 case DELETE_CART_REQUEST :
    return {
        ...state,
        isLoading : true,
        isError : false
    }
case DELETE_CART_SUCCESS : 
    return {
        ...state,
        isLoading : false,
        isError : false,
        cart : state.cart.filter((item)=>{
            return(
                    item.id!==payload
            )
        })
    }
case DELETE_CART_FAILURE :
    return {
        ...state,
        isLoading : false,
        isError : true
    }
default :
return state
}

}