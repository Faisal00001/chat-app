import { createSlice } from '@reduxjs/toolkit'
// Retrieve user data from localStorage outside the component
const userFromStorage = JSON.parse(localStorage.getItem("User"));
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: userFromStorage || null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("User", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("User"); // Clear localStorage on logout
        }
    }
})

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions

export default userSlice.reducer