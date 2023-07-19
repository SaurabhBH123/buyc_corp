import { LOGIN } from "./auth.actionType";

const initialState = {
    isAuth:false,
    isLoading:false,
    isError:false
}

export const authReducer = (state=initialState,{type,payload})=>{
    switch (type) {
        case LOGIN:
            return {
                ...state,
                isAuth:true
            }
        default:
            return state;
    }
}