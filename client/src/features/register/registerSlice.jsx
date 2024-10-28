import { createSlice } from '@reduxjs/toolkit'

export const registerSlice = createSlice({
    name: 'registerInfo',
    initialState: ({
        name: "",
        email: "",
        password: ""
    }),
    reducers: {
        // increment: state => {

        //     state.age += 1
        // }
        // decrement: state => {
        //     state.value -= 1
        // },
        updateRegisterInfo: (state, action) => {
            return { ...state, ...action.payload }
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, updateRegisterInfo } = registerSlice.actions

export default registerSlice.reducer