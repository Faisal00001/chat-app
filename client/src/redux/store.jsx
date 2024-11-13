import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../features/user/userSlice"
import { registerReducer } from "../features/register/registerSlice"
import loginReducer from "../features/login/loginSlice"
import chatReducer from "../features/chat/chatSlice"



export default configureStore({
    reducer: {
        user: userReducer,
        register: registerReducer,
        login: loginReducer,
        chat: chatReducer
    }
})