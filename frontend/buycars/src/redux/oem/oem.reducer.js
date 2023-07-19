import { ADD_OEM, GET_OEM } from "./oem.actionType";

const initialState = {
    oem:[],
    isLoading:false,
    isError:false
}

export const oemReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case GET_OEM:
            return {
                ...state,
                oem:payload
            }
        case ADD_OEM:
            return {
                ...state,
                oem:[...state.oem,payload]
            }
        default:
            return state;
    }
}