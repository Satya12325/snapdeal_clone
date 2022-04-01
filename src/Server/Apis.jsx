import {api} from "./Server";


export const getmensProduct = () => {
    return api.get("/men/")
}
export const getbeautyProduct = () => {
    return api.get("/beautyProducts/")
}

export const getCartProduct = () => {
    return api.get(`/cart`)
}
export const getmensProductId = (id) => {
    return api.get(`/men/${id}`)
}
export const getwomensProduct = () => {
    return api.get("/women_western/")
}
export const getwomensEthinicProduct = () => {
    return api.get("/women_ethnic/")
}
export const getKidssProduct = () => {
    return api.get("/kids/")
}

export const getFootwereProduct = () => {
    return api.get("/bagsFootwear/")
}
export const getElectronicsProduct = () => {
    return api.get("/electronics/")
}

export const getKitchenProduct = () => {
    return api.get("/home_kitchen/")
}
export const postCartProduct = (product) => {
    console.log("cartproduct",product)
    
    return api.post("/cart",product)
}

export const deleteCartProduct = (id) => {
    return api.delete(`/cart/${id}`)
}