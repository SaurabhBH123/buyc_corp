import { ADD_DATA, DELETE_DATA, GET_DATA, GET_SPECFIC_DATA, UPDATE_DATA } from "./inventory.actionType"

export const getData = (payload)=>{
    return {
        type:GET_DATA,
        payload
    }
}

export const getSpecific = (payload)=>{
    return {
        type:GET_SPECFIC_DATA,
        payload
    }
}

export const addData = (payload)=>{
    return {
        type:ADD_DATA,
        payload
    }
}

export const editData = (id,data)=>{
    return {
        type:UPDATE_DATA,
        payload:{id,data}
    }
}

export const deleteData = (id)=>{
    return {
        type:DELETE_DATA,
        payload:id
    }
}