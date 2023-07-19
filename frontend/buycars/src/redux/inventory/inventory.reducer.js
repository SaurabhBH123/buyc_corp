import { ADD_DATA, DELETE_DATA, GET_DATA, GET_SPECFIC_DATA, UPDATE_DATA } from "./inventory.actionType";

const initialState = {
    inventory:[],
    specInventory:[],
    isLoading:false,
    isError:false
}

export const inventoryReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                inventory:payload
            }
        case GET_SPECFIC_DATA:
            return {
                ...state,
                specInventory:payload
            }
        case ADD_DATA:
            return {
                ...state,
                inventory:[...state.inventory,payload]
            }
        case UPDATE_DATA:
            return {
                ...state,
                // inventory:
            }
        case DELETE_DATA:
            return {
                ...state,
                specInventory:state.inventory.filter((item)=>item._id!==payload)
            }
        default:
            return state;
    }
}