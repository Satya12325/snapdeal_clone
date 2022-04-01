import { DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS} from "./cart.actionType"

//DELETE_CART
export const delete_cart_request = ()=>{
    return{
        type :DELETE_CART_REQUEST
    }
}

export const delete_cart_success = (payload)=>{
    console.log("dlt",payload)
    return{
        type : DELETE_CART_SUCCESS,
        payload : payload
    }
}
export const delete_cart_failure = ()=>{
    return{
        type : DELETE_CART_FAILURE
    }
}