import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/reducers/registerSlice"
import loginReducer from "../features/auth/reducers/loginSlice"
export const store = configureStore({
    reducer:{
        register:registerReducer,
        login:loginReducer
    }
})