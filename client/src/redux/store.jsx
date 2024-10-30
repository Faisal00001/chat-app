import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/user/userSlice"
import { registerReducer } from "../features/register/registerSlice"


export default configureStore({
    reducer: {
        user: userReducer,
        register: registerReducer,
    }
})