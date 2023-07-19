import {legacy_createStore,combineReducers} from "redux"
import { authReducer } from "./auth/auth.reducer"
import { inventoryReducer } from "./inventory/inventory.reducer"
import { oemReducer } from "./oem/oem.reducer"

const rootReducer = combineReducers({
    auth:authReducer,
    inventory:inventoryReducer,
    oem:oemReducer
})

export const store = legacy_createStore(rootReducer)