import { LOGIN, LOGOUT } from "./auth.actionType";

const initialState = {
    isAuth:false,
    name:"",
    isLoading:false,
    isError:false
}

export const authReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case LOGIN:
            return {
                ...state,
                isAuth:true,
                name:payload
            }
        case LOGOUT:
            return {
                ...state,
                isAuth:false,
                name:""
            }
        default:
            return state;
    }
}