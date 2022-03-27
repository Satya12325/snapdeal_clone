import {api} from "./Server";


export const getmensProduct = () => {
    return api.get("/men/")
}
export const getbeautyProduct = () => {
    return api.get("/beautyProducts/")
}