import { createSlice } from '@reduxjs/toolkit'
const userFromStorage = JSON.parse(localStorage.getItem("User"));
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: userFromStorage || null,
    },
    reducers: {
        setUser: (state, action) => action.payload
        // decrement: state => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload
        // }
    }
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer