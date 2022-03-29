import {api} from "./Server";


export const getmensProduct = () => {
    return api.get("/men/")
}
export const getbeautyProduct = () => {
    return api.get("/beautyProducts/")
}

export const getCartProduct = () => {
    return api.get("/cartProducts/")
}
export const getmensProductId = (id) => {
    return api.get(`/men/${id}`)
}