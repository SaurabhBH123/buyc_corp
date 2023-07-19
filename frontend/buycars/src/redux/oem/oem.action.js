import { ADD_OEM, GET_OEM } from "./oem.actionType"

export const getOem = (payload)=>{
    return {
        type:GET_OEM,
        payload
    }
}

export const addOem = (payload)=>{
    return {
        type:ADD_OEM,
        payload
    }
}