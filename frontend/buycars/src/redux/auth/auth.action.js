import { LOGIN, LOGOUT } from "./auth.actionType"

export const login = (payload)=>{
    return {
        type:LOGIN,
        payload
    }
}

export const logout = ()=>{
    return {
        type:LOGOUT
    }
}